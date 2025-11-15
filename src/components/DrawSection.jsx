import { useEffect, useState, useRef } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";

export const DrawSection = () => {
    const [isDark, setIsDark] = useState(false);

    const [color, setColor] = useState("#ffffff");
    const [isEraser, setIsEraser] = useState(false);

    const canvasRef = useRef(null);
    const [objects, setObjects] = useState([]);

    const [submit, setSubmit] = useState(false);

    useEffect(() => {
        const root = document.documentElement;
        const update = () => {
            setIsDark(root.classList.contains("dark"));
        };

        update();

        // Observe changes to the class list
        const observer = new MutationObserver(update);

        observer.observe(root, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => observer.disconnect();
    }, []);

    const handleSubmit = async () => {
        if (!canvasRef.current) return;

        const png = await canvasRef.current.exportImage("png");

        // Generate evenly distributed position
        const { x, y } = generatePosition(objects);

        setObjects(prev => [
            ...prev,
            {
                id: crypto.randomUUID(),
                src: png,
                x,
                y,
            }
        ]);

        setSubmit(true);
        canvasRef.current.clearCanvas();
    };

    function generatePosition(existing) {
        const minDistance = 120; // pixels apart (adjust)
        const maxAttempts = 50;

        for (let i = 0; i < maxAttempts; i++) {
            const x = Math.random() * 80 + 10; // avoid edges (10–90%)
            const y = Math.random() * 80 + 10;

            const tooClose = existing.some(obj => {
                const dx = (x - obj.x) * 10;
                const dy = (y - obj.y) * 10;
                return Math.sqrt(dx * dx + dy * dy) < minDistance;
            });

            if (!tooClose) return { x, y };
        }

        // fallback if too crowded
        return { x: Math.random() * 80 + 10, y: Math.random() * 80 + 10 };
    }

    if (!isDark) {
        return <h1 className="text-md text-foreground">Try dark mode for a small surprise✨</h1>;
    }

    return (
        <section id="draw" className="py-24 px-4 relative bg-secondary/30">
            <h2 className="opacity-50 mb-4">A surprise for those of you who are using dark mode (I'm proud of you)</h2>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center text-foreground">Draw me a
                <span className="text-primary text-glow"> {`\n`} star</span>
            </h2>
            {!submit ?
                <div>
                    {/* your dark-mode drawing UI */}

                    <h2 className="max-w-3xl mx-auto mb-10"> I've always been fascinated by the beauty of our universe,
                        which is why I wanted to create a section where visitors to my website can draw something cosmic.
                        Think stars, planets, aliens, spaceships, etc.
                    </h2>
                    {/* Color Picker */}
                    <div className="flex justify-center gap-3 mb-4">
                        {["#ffffff", "#ffc3f2", "#E576DD", "#977dff", "#5A29D6", "#76C9E5", "#297DD6", "#2f3dff", "#5a8f76", "#fddc5c"].map(
                            (c) => (
                                <button
                                    key={c}
                                    onClick={() => {
                                        setColor(c);
                                        setIsEraser(false);
                                        canvasRef.current && canvasRef.current.eraseMode(false);
                                    }}
                                    className={`w-7 h-7 rounded-full border-2 border-transparent transition hover:scale-110 
           ${color === c ? "ring-2 ring-primary" : ""}`}
                                    style={{ backgroundColor: c }}
                                />
                            )
                        )}
                        <button
                            key="eraser"
                            onClick={() => {
                                setIsEraser(true);
                                canvasRef.current && canvasRef.current.eraseMode(true);
                            }}
                            className={`
                        px-3 rounded-full font-semibold border bg-transparent border-primary border-2 hover:bg-primary
                        ${isEraser ? "bg-primary text-primary-foreground" : "bg-transparent"}
                    `}
                        >
                            Eraser
                        </button>
                    </div>
                    {/* Canvas */}
                    <div className="max-w-xl mx-auto bg-card rounded-xl shadow-lg border border-border overflow-hidden">
                        <ReactSketchCanvas
                            ref={canvasRef}
                            strokeColor={color}
                            strokeWidth={3}
                            eraserWidth={20}
                            allowOnlyPointerType="all"
                            canvasColor="transparent"
                            className="w-full h-[280px]"
                            style={{
                                borderRadius: "12px",
                                width: "100%",
                                height: "280px",
                            }}
                        />
                        <div className="flex justify-center gap-3">
                            <button
                                onClick={() => { canvasRef.current?.clearCanvas() }}
                                className="bg-transparent border-primary border-2 text-primary-foreground px-2 rounded-full mb-3 text-primary">
                                Reset
                            </button>
                            <button
                                onClick={handleSubmit}
                                className="bg-primary text-primary-foreground px-2 rounded-full mb-3">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>

                : <div>
                    <h2>Here's the space that all the wonderful people visiting have created</h2>
                    <div className="relative w-full h-[600px] pointer-events-none">
                        {objects.map(obj => (
                            <img
                                key={obj.id}
                                src={obj.src}
                                alt="celestial-drawing"
                                style={{
                                    position: "absolute",
                                    left: `${obj.x}%`,
                                    top: `${obj.y}%`,
                                    width: "80px",   // adjust
                                    height: "80px",
                                    transform: "translate(-50%, -50%)",
                                }}
                            />
                        ))}
                    </div>
                </div>}
        </section>

    )
}
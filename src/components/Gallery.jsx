import { useRef, useState, useEffect } from "react"
import { cn } from "@/lib/utils";

const pictures = [
    {src: "/faces/2.jpg", description: "Hi, I’m An👋"},
    {src: "/faces/1.jpg", description: "I'm from Vietnam!"},
    {src: "/faces/3.jpg", description: "I enjoy going to Kpop concerts"},
    {src: "/faces/4.jpg", description: "This is my dance team (DHCollective) at UBC"}
]

const renderList = [
    pictures[pictures.length - 1],
    ...pictures,
    ...pictures,
]

export const Gallery = () => {
    const containerRef = useRef(null);
    const isDraggingRef = useRef(false);
    const startXRef = useRef(0);
    const scrollLeftRef = useRef(100);
    const [drag, setDrag] = useState(false);
    
    const handleMouseDown = (e) => {
        setDrag(true);
        isDraggingRef.current = true;
        startXRef.current = e.pageX - containerRef.current.offsetLeft;
        scrollLeftRef.current = containerRef.current.scrollLeft;
    }

    const handleMouseMove = (e) => {
        if (!isDraggingRef.current) return;
        e.preventDefault(); 
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = x - startXRef.current;
        containerRef.current.scrollLeft = scrollLeftRef.current - walk*1.3;
    }

    const handleMouseUpOrLeave = (e) => {
        setDrag(false);
        isDraggingRef.current = false;
    }

    useEffect(() => {
        const el = containerRef.current;
      
        const speed = 0.3; // px per frame (very slow)
        let raf;
      
        const tick = () => {
          el.scrollLeft += speed;
          // reset to start if at the end (for looping effect)
          if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
            el.classList.add("snap-none");
            el.scrollLeft = 1360;
          }
          
          raf = requestAnimationFrame(tick);
        };
      
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
      }, []);
      
    return ( 
        <div ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        className={cn("relative overflow-x-auto cursor-grab scrollbar-hidden")} 
        id = "about">
            <div className="flex gap-4 m-7 py-30">
            {renderList.map((item, key) => (
                <div key={key}>
                    <div className="w-140 h-80 overflow-hidden opacity-100 rounded-xl flex-shrink-0">
                        <img src={item.src} draggable={false}/>
                    </div>
                    <p className="py-3 font-size-4" select-none> {item.description}</p>
                </div>
            ))}
            </div>
        </div>
    )
}
export const Blob = ({
    top,
    left,
    rgba1 = "rgb(255, 255, 255)",
    rgba2 = "rgb(255, 255, 255)",
}) => {
    const startTop =
        top ?? `${Math.random() * 40 + 30}%`;

    const startLeft =
        left ?? `${Math.random() * 40 + 30}%`;

    const size = `${Math.random() * 20 + 35}rem`;
    const duration = `${Math.random() * 15 + 20}s`;

    const direction = Math.random() > 0.5 ? 1 : -1;

    const x0 = `${-35 * direction}vw`;
    const y0 = `${Math.random() * 20 - 10}vh`;
    
    const x1 = `${-15 * direction}vw`;
    const y1 = `${Math.random() * 30 + 20}vh`;
    
    const x2 = `${15 * direction}vw`;
    const y2 = `${Math.random() * -30 - 20}vh`;
    
    const x3 = `${35 * direction}vw`;
    const y3 = `${Math.random() * 20 - 10}vh`;
    return (
        <div
            className="blob-wrapper"
            style={
                {
                    top: startTop,
                    left: startLeft,
                }
            }
        >
            <div
                className="blob"
                style={
                    {
                        width: size,
                        height: size,
                        animationDuration: `${duration}, 12s`,

                        "--x0": x0,
                        "--y0": y0,
                        "--x1": x1,
                        "--y1": y1,
                        "--x2": x2,
                        "--y2": y2,
                        "--x3": x3,
                        "--y3": y3,
                        "--rgba1": rgba1,
                        "--rgba2": rgba2,
                    }
                }
            />
        </div>
    );
};
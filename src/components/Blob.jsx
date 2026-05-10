export const Blob = ({
    top,
    left,
    rgba1 = "rgb(255, 255, 255)",
    rgba2 = "rgb(255, 255, 255)",
}) => {
    const startTop = top ?? `${Math.random() * 100}%`;
    const startLeft = left ?? `${Math.random() * 100}%`;

    const size = `${Math.random() * 20 + 35}rem`;
    const duration = `${Math.random() * 15 + 15}s`;

    const x0 = `${Math.random() * 150 - 100}px`;
    const y0 = `${Math.random() * 150 - 100}px`;
    const x1 = `${Math.random() * 150 - 100}px`;
    const y1 = `${Math.random() * 150 - 100}px`;
    const x2 = `${Math.random() * 150 - 100}px`;
    const y2 = `${Math.random() * 150 - 100}px`;

    return (
        <div
            className="blob-wrapper"
            style={
                {
                    top: startTop,
                    left: startLeft,
                    animationDuration: `${duration}`,

                    "--x0": x0,
                    "--y0": y0,
                    "--x1": x1,
                    "--y1": y1,
                    "--x2": x2,
                    "--y2": y2,
                }
            }
        >
            <div
                className="blob"
                style={
                    {
                        width: size,
                        height: size,
                        "--rgba1": rgba1,
                        "--rgba2": rgba2,
                    }
                }
            />
        </div>
    );
};
export const Blob = ({top = "10%", left = "20%", rgba1 = "rgb(255, 255, 255)", rgba2 = "rgb(255, 255, 255)"}) => {
    const size = `${Math.random() * 20 + 35}rem`;
    const duration = `${Math.random() * 15 + 15}s`;

    const x0 = `${Math.random() * 600 - 500}px`;
    const y0 = `${Math.random() * 600 - 500}px`;
    const x1 = `${Math.random() * 600 - 500}px`;
    const y1 = `${Math.random() * 600 - 500}px`;
    const x2 = `${Math.random() * 600 - 500}px`;
    const y2 = `${Math.random() * 600 - 500}px`;
  
    return (
      <div
        className="blob"
        style={{
          width: size,
          height: size,
          top,
          left,
          animation: `blob ${duration} infinite ease-in-out`,
          "--x0": x0,
          "--y0": y0,
          "--x1": x1,
          "--y1": y1,
          "--x2": x2,
          "--y2": y2,
          "--rgba1": rgba1,
          "--rgba2": rgba2,
        }}
      />
    );
  };
  
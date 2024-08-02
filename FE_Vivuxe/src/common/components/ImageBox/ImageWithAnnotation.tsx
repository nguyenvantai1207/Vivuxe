import React from "react";

interface ImageWithAnnotationProps {
  src: string;
  alt: string;
  annotation: string;
  position?: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
}

const ImageWithAnnotation: React.FC<ImageWithAnnotationProps> = ({
  src,
  alt,
  annotation,
  position,
}) => {
  const defaultPosition = {
    top: "10px",
    right: "10px",
    bottom: "auto",
    left: "auto",
  };

  const annotationPosition = { ...defaultPosition, ...position };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <img
        src={src}
        alt={alt}
        style={{
          display: "flex",
          width: 200,
          height: 300,
          borderTopLeftRadius: "100px",
          borderTopRightRadius: "100px",
          borderBottomRightRadius: "10px",
          borderBottomLeftRadius: "10px"
        }}
      />
      <span
        style={{
          position: "absolute",
          top: annotationPosition.top,
          right: annotationPosition.right,
          bottom: annotationPosition.bottom,
          left: annotationPosition.left,
          color: "white",
          padding: "5px",
          borderRadius: "3px",
        }}
      >
        {annotation}
      </span>
    </div>
  );
};

export default ImageWithAnnotation;

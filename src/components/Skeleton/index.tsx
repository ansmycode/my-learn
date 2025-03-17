// components/Skeleton.js
import React from "react";

const Skeleton = ({
  variant = "text",
  className = "",
  count = 1,
  ...props
}) => {
  //text 文本 rect 矩形 circle 圆形
  const variants: { text: string; rect: string; circle: string } = {
    text: "h-4 w-full animate-pulse rounded bg-gray-200",
    rect: "h-20 w-full animate-pulse rounded bg-gray-200",
    circle: "h-12 w-12 animate-pulse rounded-full bg-gray-200",
  };

  const baseClass = variants[variant] || variants.text;

  return (
    <div className="space-y-4" {...props}>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className={`${baseClass} ${className}`} />
      ))}
    </div>
  );
};

export default Skeleton;

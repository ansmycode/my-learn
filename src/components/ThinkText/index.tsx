import { ReactNode } from "react";

const ThinkText = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  return (
    <div className={`rounded-md bg-gray-100 p-4 ${className}`}>
      <span>{children}</span>
    </div>
  );
};

export default ThinkText;

import { ReactNode } from "react";

const ThinkText = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={`w-full rounded-md bg-gray-50 p-4 mt-3 mb-3  ${className}`}>
      <span>{children}</span>
    </div>
  );
};

export default ThinkText;

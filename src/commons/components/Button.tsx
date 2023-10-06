import React from "react";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

export default function Button({ className, children, onClick }: ButtonProps) {
  return (
    <div className={" cursor-pointer pt-1.5 pb-1 px-3 border rounded-full duration-300 "+className} onClick={onClick}>
      {children}
    </div>
  );
}

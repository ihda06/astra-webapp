import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
  className,
  children,
  onClick,
  ...props
}: ButtonProps) {
  return (
    <button
      className={
        " cursor-pointer pt-1.5 pb-1 px-3 border rounded-full duration-300 " +
        className
      }
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

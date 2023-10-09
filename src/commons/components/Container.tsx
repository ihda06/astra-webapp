import React from "react";

interface containerProps {
  className?: string;
  children: React.ReactNode
}

export default function Container({className="", children}: containerProps) {
  return <div className={` mt-5 mb-10 lg:mt-0 p-8 ${className}` }>{children}</div>;
}

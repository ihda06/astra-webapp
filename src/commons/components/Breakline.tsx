import React from "react";

export default function Breakline({
  className,
}: {
  className?: React.ReactNode;
}) {
  return <div className={"w-full border-t " + className}></div>;
}

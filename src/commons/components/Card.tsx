export default function Card({
  title,
  text,
  className,
  children,
}: {
  className?: string;
  title?: string;
  text?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center">
      <div
        className={
          "bg-white rounded-lg p-6 border dark:border-white shadow-md " + className
        }
      >
        {title && <h1 className=" text-base text-neutral-600 dark:text-white font-bold mb-4">{title}</h1>}
        {text && <p className="text-xs text-neutral-400 dark:text-neutral-300 text-justify">{text}</p>}
        
        {children}
      </div>
    </div>
  );
}

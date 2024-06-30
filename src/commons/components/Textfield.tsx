import { HTMLProps, ReactNode, forwardRef, useId } from "react";

type FieldWrapper = {
  label?: ReactNode;
  helperText?: string;
  children: ReactNode;
  id: string;
};
export function FieldWrapper({ label, helperText, children }: FieldWrapper) {
  return (
    <div className="space-y-1 flex flex-col">
      {label && <label>{label}</label>}
      {children}
      {helperText && <p className="text-red-500">{helperText}</p>}
    </div>
  );
}

type TextfieldProps = {
  label?: ReactNode;
  helperText?: string;
  id?: string;
} & HTMLProps<HTMLInputElement>;

export default forwardRef<HTMLInputElement, TextfieldProps>(function Textfield(
  { label, helperText, id, ...props },
  ref
) {
  const textfieldId = useId();

  return (
    <FieldWrapper label={label} helperText={helperText} id={id ?? textfieldId}>
      <input
        {...props}
        id={id ?? textfieldId}
        ref={ref}
        className="p-2 rounded-lg border focus:outline-blue-700"
      />
    </FieldWrapper>
  );
});

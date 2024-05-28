interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export function LabelField({ children, ...props }: Props) {
  return (
    <label
      className="absolute left-0 -top-4 font-semibold
              peer-placeholder-shown:text-[20px]
              peer-placeholder-shown:top-2
              peer-placeholder-shown:font-semibold
              text-slate-700  text-sm
              transition-all"
      {...props}
    >
      {children}
    </label>
  );
}

export default LabelField;

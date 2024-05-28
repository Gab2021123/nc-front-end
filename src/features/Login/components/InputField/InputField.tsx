interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export const InputField: React.FC<Props> = (props: Props) => {
  return (
    <input
      placeholder={props.placeholder}
      className="peer h-10 w-full border-y-gray-950 border-b-2  focus:outline-none focus:border-y-gray-300 focus:bg-neutral-400 transition-all placeholder:text-transparent  placeholder:text-[20px] "
      {...props}
    />
  );
};
export default InputField;

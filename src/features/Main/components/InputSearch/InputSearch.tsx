interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

function InputSearch(props: Props) {
  return (
    <input
      {...props}
      type={props.type}
      className="w-[810px] h-[150px] rounded-[120px] border-neutral-500"
    />
  );
}

export default InputSearch;

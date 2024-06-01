interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}
const InputSubmit = (props: Props) => {
  return (
    <input {...props} type={props.type} className={props.className}>
      {props.children}
    </input>
  );
};

export default InputSubmit;

function FormInput({ labelName, ...props }) {
  return (
    <div>
      <label htmlFor={props.id} className="text-xs font-opensans ml-1">
        {labelName}
      </label>
      <input
        type={props.type}
        id={props.id}
        className="border w-full rounded px-3 py-1 text-xs outline-none"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export default FormInput;

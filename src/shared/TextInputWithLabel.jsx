function TextInputWithLabel({ elementId, labelText, value, onChange, ref }) {
  return (
    <>
      <label htmlFor={elementId}>{labelText}</label>
      <input
        id={elementId}
        type="text"
        value={value}
        ref={ref}
        onChange={onChange}
      />
    </>
  );
}
export default TextInputWithLabel;

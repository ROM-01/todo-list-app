function TextInputWithLabel({ elementId, label, value, onChange, inputRef }) {
  return (
    <>
      <label htmlFor={elementId}>{label}</label>
      <input
        id={elementId}
        type="text"
        value={value}
        ref={inputRef}
        onChange={onChange}
      />
    </>
  );
}
export default TextInputWithLabel;

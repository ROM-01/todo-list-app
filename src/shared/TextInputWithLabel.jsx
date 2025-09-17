import styled from 'styled-components';

const StyledWrapper = styled.div`
  margin-bottom: 8px;
`;

const StyledLabel = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 4px;
`;

const StyledInput = styled.input`
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

function TextInputWithLabel({ elementId, labelText, value, onChange, ref }) {
  return (
    <StyledWrapper>
      <StyledLabel htmlFor={elementId}>{labelText}</StyledLabel>
      <StyledInput
        id={elementId}
        type="text"
        value={value}
        ref={ref}
        onChange={onChange}
      />
    </StyledWrapper>
  );
}
export default TextInputWithLabel;

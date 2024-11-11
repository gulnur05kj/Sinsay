import styled from "styled-components";

export const Input = ({
  value,
  onChange,
  placeholder,
  type = "text",
  ...props
}) => {
  return (
    <StyledInput
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...props}
    />
  );
};

const StyledInput = styled.input`
  width: 542px;
  height: 60px;
  border: 1px solid #000000;
  padding-left: 20px;
  font-size: 20px;
  font-weight: 400;
  color: #171717;
  border-radius: 10px;

  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    color: #171717;
  }
`;

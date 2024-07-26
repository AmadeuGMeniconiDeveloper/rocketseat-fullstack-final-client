import { SelectHTMLAttributes } from "react";
import { Container } from "./styled";
// import { Container } from "./styled";

interface SelectProps {
  options: string[];
}

const Select = ({
  options,
  ...rest
}: SelectProps & SelectHTMLAttributes<HTMLSelectElement>) => {
  const renderOptions = options.map(option => (
    <option key={option} value={option}>
      {option}
    </option>
  ));

  return <Container {...rest}>{renderOptions}</Container>;
};

export default Select;

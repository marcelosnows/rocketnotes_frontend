import { ContainerTextArea } from "./styles";

export function TextArea({ value, ...rest }) {
  return (
    <ContainerTextArea {...rest}>
      {value}
    </ContainerTextArea>
  );
};
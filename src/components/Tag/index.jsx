import { ContainerTag } from "./styles";

export function Tag({ title, ...rest }) {
  return (
    <ContainerTag {...rest}>
      {title}
    </ContainerTag> 
  );
};
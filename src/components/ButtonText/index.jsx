import { ContainerButtonText } from "./styles";

export function ButtonText({ title, isActive = false, ...rest }) {
  return (
    <ContainerButtonText 
      type="button"
      $isactive={isActive}  
      {...rest}
    >
      {title}
    </ContainerButtonText>
  );
};
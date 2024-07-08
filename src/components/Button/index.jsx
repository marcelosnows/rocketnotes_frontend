import { ContainerButton } from "./styles"

export function Button({ title, loading = false, ...rest }) {
  return (
    <ContainerButton
      type="button"
      disabled={loading}
      {...rest}
    >
      {loading ? 'Carregando...' : title}
    </ContainerButton >
  );
};
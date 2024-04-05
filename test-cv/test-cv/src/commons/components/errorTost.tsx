import { useErrorContext } from "../context/useErrorContext";

export const ErrorTost = () => {
  const { error } = useErrorContext();
  console.log({ error });

  return <>{error}</>;
};

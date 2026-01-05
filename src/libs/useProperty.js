import { useProperties } from "./useProperties";

export const useProperty = (id) => {
  const properties = useProperties();

  return properties.filter((i) => i.id == id)[0] ?? null;
};

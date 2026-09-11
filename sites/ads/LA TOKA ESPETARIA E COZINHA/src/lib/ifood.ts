import { createContext, useContext } from 'react';

export const IfoodContext = createContext<() => void>(() => {});

/** Abre o seletor de unidade do iFood (renderizado pelo IfoodProvider). */
export function useIfoodPicker() {
  return useContext(IfoodContext);
}

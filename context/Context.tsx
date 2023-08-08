"use client";

import { useContextProvider } from "@/hooks/useContextProvider";
import React from "react";

export interface IContext {
  svg: string | null;
  setSvg: React.Dispatch<React.SetStateAction<string>>;
}

interface ContextProviderProps {
  children: React.ReactNode;
}

const INITIAL_CONTEXT: IContext = {
  svg: null,
  setSvg: () => {},
};

export const Context = React.createContext<IContext>(INITIAL_CONTEXT);

export const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const { ...contextState } = useContextProvider({
    context: Context,
    initialContext: INITIAL_CONTEXT,
  });

  return <Context.Provider value={contextState}>{children}</Context.Provider>;
};

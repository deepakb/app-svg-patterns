import React from "react";
import { IContext } from "@/context/Context";

interface IUseContextProvider<T extends IContext> {
  context: React.Context<T>;
  initialContext: T;
}

export function useContextProvider<T extends IContext>({ context, initialContext }: IUseContextProvider<T>): T {
  const contextValue = React.useContext(context);

  if (!contextValue) {
    throw new Error("useContextProvider must be used within a ContextProvider");
  }

  const { svg: initialSvg } = initialContext;
  const [svg, setSvg] = React.useState<string>(initialSvg);

  return {
    ...contextValue,
    svg,
    setSvg,
  };
}

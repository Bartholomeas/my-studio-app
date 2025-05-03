"use client";

import { createContext, type PropsWithChildren, useContext } from "react";

import { useMousePosition } from "./use-mouse-position";

type MousePositionContextProps = ReturnType<typeof useMousePosition>;

const MousePositionContext = createContext<MousePositionContextProps | undefined>(undefined);

export const MousePositionProvider = ({ children }: PropsWithChildren) => {
  const mousePosition = useMousePosition();

  return (
    <MousePositionContext.Provider value={mousePosition}>{children}</MousePositionContext.Provider>
  );
};

export const useMousePositionContext = () => {
  const context = useContext(MousePositionContext);

  if (!context) {
    throw new Error("useMousePositionContext must be used within a MousePositionProvider");
  }

  return context;
};

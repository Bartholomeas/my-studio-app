'use client';
import { createContext, useContext } from "react";

interface RefSectionWrapperContextProps {
  ref: React.RefObject<HTMLDivElement>;
}

export const RefSectionWrapperContext = createContext<RefSectionWrapperContextProps | null>(null);


export const useRefSectionWrapperContext = () => {
  const context = useContext(RefSectionWrapperContext);
  if (!context) {
    throw new Error('useRefSectionWrapperContext must be used within a RefSectionWrapperContext');
  }
  return context;
};

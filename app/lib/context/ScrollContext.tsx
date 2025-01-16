"use client";

import Lenis from "@studio-freight/lenis";
import { createContext, ReactNode, useContext, useRef } from "react";

type ScrollContextType = {
  lenis: React.MutableRefObject<Lenis | null>;
};

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export function ScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  return (
    <ScrollContext.Provider value={{ lenis: lenisRef }}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScroll() {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
}

import React from "react";
// matches your tree: src/app/globals.css  (plural)
import "../src/app/globals.css";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

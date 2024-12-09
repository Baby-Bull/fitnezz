import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return <div style={{ overflow: "hidden" }}>{children}</div>;
}

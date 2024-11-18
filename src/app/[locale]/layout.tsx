import CommonLayout from "@/components/commons/CommonLayout";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <CommonLayout>
      <div className="main-content">{children}</div>
    </CommonLayout>
  );
}

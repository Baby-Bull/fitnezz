import React from "react";

interface CommonLayoutProps {
  children: React.ReactNode;
}
const CommonLayout: React.FC<CommonLayoutProps> = ({ children }) => {
  return <div className="fade-transition">{children}</div>;
};

export default CommonLayout;

import { FC, ReactNode } from "react";

export const TemplatePage: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="p-3">{children}</div>;
};

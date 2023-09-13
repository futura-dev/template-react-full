import { FC, ReactNode } from "react";
import { Sidebar } from "../../organisms/Sidebar/Sidebar";

export const TemplateSidebar: FC<{ children: ReactNode }> = props => {
  return (
    <div className="w-full h-full flex">
      <Sidebar />

      <div className="w-full h-full overflow-auto">{props.children}</div>
    </div>
  );
};

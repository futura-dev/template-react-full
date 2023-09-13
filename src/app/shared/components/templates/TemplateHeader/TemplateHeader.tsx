import { FC, ReactNode } from "react";
import { Header } from "../../organisms/Header/Header";

export const TemplateHeader: FC<{ children: ReactNode }> = props => {
  return (
    <div className="w-full max-h-screen flex flex-col justify-between items-start">
      {/* header */}
      <Header />

      {/* content */}
      <div className="w-full h-full overflow-auto">{props.children}</div>
    </div>
  );
};

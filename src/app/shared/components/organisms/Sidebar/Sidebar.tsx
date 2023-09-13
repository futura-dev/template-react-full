import {
  IconAccessible,
  IconChevronsRight,
  IconDatabase,
  IconSmartHome,
  IconTrashX
} from "@tabler/icons-react";
import { cva } from "class-variance-authority";
import { FC, ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="min-h-screen w-80 bg-[#F7F7F7] border-r-[1px] border-solid border-r-[#E8E8E8]">
      {/* header */}
      <div className="w-full h-[50px] border-solid border-b-[1px] border-b-[#E8E8E8] flex justify-start items-center text-sm font-semibold text-[#1B1D1E] px-6">
        Name
      </div>

      {/* body */}
      <div className="p-3 flex flex-col gap-1">
        {/* Home */}
        <SidebarItem
          icon={<IconSmartHome size={18} color="#5A5A68" />}
          link="/home"
          label="Home"
        />
        {/* Databases */}
        <SidebarItem
          icon={<IconDatabase size={18} color="#5A5A68" />}
          link="/databases"
          label="Databases"
        />
        {/* Trash */}
        <SidebarItem
          icon={<IconTrashX size={18} color="#5A5A68" />}
          link="/trash"
          label="Trash"
        />

        {/* Divider */}
        <SidebarDivider />

        {/* Accessible */}
        <SidebarItem
          icon={<IconAccessible size={18} color="#5A5A68" />}
          link="/accessibility"
          label="Accessibility"
        />
        {/* Todos */}
        <SidebarItem
          icon={<IconChevronsRight size={18} color="#5A5A68" />}
          link="/todos"
          label="Todos"
        />
      </div>
    </div>
  );
};

const sidebarItemVariants = cva(
  [
    "flex gap-2 justify-start items-center py-[6px] px-2 rounded-md border-[1px] border-solid cursor-pointer transition-all"
  ],
  {
    variants: {
      state: {
        active: ["border-[#E3E5E6] bg-white"],
        deactive: ["border-transparent hover:bg-[#EDEDED]"]
      }
    }
  }
);

const SidebarItem: FC<{
  icon: ReactNode;
  label: string;
  link: string;
}> = ({ icon, label, link }) => {
  const { pathname } = useLocation();

  return (
    <Link to={link}>
      <div
        className={sidebarItemVariants({
          state: pathname === link ? "active" : "deactive"
        })}
      >
        {icon}
        <span className="text-[#535360] text-sm">{label}</span>
      </div>
    </Link>
  );
};

const SidebarDivider = () => {
  return (
    <div className="w-full h-[1px] border-b-[1px] border-solid border-b-[#E8E8E8] my-3"></div>
  );
};

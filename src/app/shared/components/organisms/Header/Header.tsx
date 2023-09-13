import { Link } from "@radix-ui/themes";
import { useSignOutMutation } from "../../../../../api/auth/auth.queries";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const signOutMutation = useSignOutMutation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOutMutation
      .mutateAsync()
      .then()
      .catch()
      .finally(() => navigate("/sign-in"));
  };

  return (
    <div className="w-full h-[50px] flex-shrink-0 border-solid border-b-[1px] border-b-[#E8E8E8] flex justify-between items-center text-sm font-semibold text-[#1B1D1E] px-6">
      {/* Left */}
      <div className="w-full"></div>

      {/* Right */}
      <div className="w-full flex justify-end gap-5">
        <Link onClick={handleLogout}>Logout</Link>
      </div>
    </div>
  );
};

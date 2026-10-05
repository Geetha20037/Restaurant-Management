import { LogOut, Settings, UserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProfileMenu({ onClose }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("dineflow-auth");
    navigate("/login");
  };

  return (
    <div className="absolute right-0 top-14 z-50 w-64 rounded-2xl border border-stone-200 bg-white p-2 shadow-2xl dark:border-stone-700 dark:bg-stone-900">
      <div className="border-b border-stone-100 px-3 py-3 dark:border-stone-800">
        <p className="font-bold text-stone-900 dark:text-white">
          Alex Morgan
        </p>
        <p className="text-xs text-stone-500">Restaurant Manager</p>
      </div>

      <button
        onClick={onClose}
        className="mt-2 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-stone-600 transition hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-800"
      >
        <UserRound size={17} />
        My Profile
      </button>

      <button
        onClick={onClose}
        className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-stone-600 transition hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-800"
      >
        <Settings size={17} />
        Settings
      </button>

      <button
        onClick={logout}
        className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-red-500 transition hover:bg-red-50 dark:hover:bg-red-500/10"
      >
        <LogOut size={17} />
        Logout
      </button>
    </div>
  );
}
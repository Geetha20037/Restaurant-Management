import {
  BarChart3,
  CalendarDays,
  LayoutDashboard,
  LogOut,
  Settings,
  ShoppingBag,
  Table2,
  Users,
  Utensils,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const menuItems = [
  {
    label: "Overview",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    label: "Orders",
    icon: ShoppingBag,
    path: "/dashboard/orders",
  },
  {
    label: "Reservations",
    icon: CalendarDays,
    path: "/dashboard/reservations",
  },
  {
    label: "Tables",
    icon: Table2,
    path: "/dashboard/tables",
  },
  {
    label: "Menu",
    icon: Utensils,
    path: "/dashboard/menu",
  },
  {
    label: "Customers",
    icon: Users,
    path: "/dashboard/customers",
  },
  {
    label: "Analytics",
    icon: BarChart3,
    path: "/dashboard/analytics",
  },
  {
    label: "Settings",
    icon: Settings,
    path: "/dashboard/settings",
  },
];

export default function Sidebar({ isOpen, setIsOpen }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState({
    name: "Restaurant Manager",
    email: "manager@dineflow.com",
    role: "Restaurant Manager",
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("dineflow-user");

    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);

        setUser({
          name: parsedUser.name || "Restaurant Manager",
          email: parsedUser.email || "manager@dineflow.com",
          role: parsedUser.role || "Restaurant Manager",
        });
      } catch (error) {
        console.error("Unable to read user data:", error);
      }
    }
  }, []);

  const getInitials = (name) => {
    if (!name) return "RM";

    return name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word.charAt(0).toUpperCase())
      .join("");
  };

  const initials = getInitials(user.name);

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("dineflow-auth");
    localStorage.removeItem("dineflow-user");
    navigate("/login");
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 cursor-default bg-black/50 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-72 flex-col border-r border-stone-200 bg-white transition-transform duration-300 dark:border-slate-800 dark:bg-slate-950 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex h-20 items-center justify-between border-b border-stone-200 px-6 dark:border-slate-800">
          <button
            type="button"
            onClick={() => handleNavigation("/dashboard")}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-xl shadow-lg shadow-amber-500/20">
              🍽️
            </div>

            <span className="text-2xl font-bold text-stone-900 dark:text-white">
              Dine<span className="text-amber-500">Flow</span>
            </span>
          </button>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded-lg p-2 text-stone-500 hover:bg-stone-100 lg:hidden dark:hover:bg-slate-800"
          >
            <X size={20} />
          </button>
        </div>

        {/* Restaurant Card */}
        <div className="mx-4 mt-5 rounded-2xl bg-stone-100 p-4 dark:bg-slate-900">
          <p className="text-xs font-medium text-stone-500 dark:text-slate-400">
            RESTAURANT
          </p>

          <p className="mt-1 truncate font-semibold text-stone-900 dark:text-white">
            The Golden Fork
          </p>

          <div className="mt-2 flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            Kitchen Online
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-stone-400 dark:text-slate-600">
            Main Menu
          </p>

          <div className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;

              const active =
                item.path === "/dashboard"
                  ? location.pathname === "/dashboard"
                  : location.pathname.startsWith(item.path);

              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleNavigation(item.path)}
                  className={`group flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition-all duration-200 ${
                    active
                      ? "bg-amber-500 text-white shadow-lg shadow-amber-500/20"
                      : "text-stone-600 hover:bg-stone-100 hover:text-stone-900 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-white"
                  }`}
                >
                  <Icon size={19} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* User / Logout */}
        <div className="border-t border-stone-200 p-4 dark:border-slate-800">
          <div className="mb-3 flex items-center gap-3 rounded-xl bg-stone-50 p-3 dark:bg-slate-900">
            {/* Dynamic Initials */}
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 text-xs font-bold text-white">
              {initials}
            </div>

            <div className="min-w-0">
              {/* Dynamic Name */}
              <p className="truncate text-sm font-semibold text-stone-900 dark:text-white">
                {user.name}
              </p>

              {/* Dynamic Role */}
              <p className="truncate text-xs text-stone-500 dark:text-slate-400">
                {user.role}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-500 transition hover:bg-red-50 dark:hover:bg-red-950/30"
          >
            <LogOut size={19} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}
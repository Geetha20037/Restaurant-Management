import { useEffect, useState } from "react";
import {
  Bell,
  ChevronDown,
  LogOut,
  Menu,
  Moon,
  Settings,
  Sun,
  User,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function DashboardNavbar({ onMenuClick }) {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const [notificationOpen, setNotificationOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  // Logged-in user
  const [user, setUser] = useState({
    name: "Restaurant Manager",
    email: "manager@dineflow.com",
    role: "Restaurant Manager",
  });

  useEffect(() => {
    const loadUser = () => {
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
          console.error("Unable to load DineFlow user:", error);
        }
      }
    };

    loadUser();
  }, []);

  // Generate initials automatically
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

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New order received",
      message: "Order #DF-1082 is waiting for confirmation.",
      time: "2 min ago",
      unread: true,
    },
    {
      id: 2,
      title: "Reservation confirmed",
      message: "Table 12 has been reserved for 7:30 PM.",
      time: "15 min ago",
      unread: true,
    },
    {
      id: 3,
      title: "Low stock alert",
      message: "Mozzarella cheese is running low.",
      time: "32 min ago",
      unread: true,
    },
  ]);

  const unreadCount = notifications.filter(
    (notification) => notification.unread
  ).length;

  const handleLogout = () => {
    localStorage.removeItem("dineflow-auth");
    localStorage.removeItem("dineflow-user");

    navigate("/login");
  };

  const handleProfile = () => {
    setProfileOpen(false);
    setNotificationOpen(false);
    navigate("/dashboard/profile");
  };

  const handleSettings = () => {
    setProfileOpen(false);
    setNotificationOpen(false);
    navigate("/dashboard/settings");
  };

  const markAllAsRead = () => {
    setNotifications((current) =>
      current.map((notification) => ({
        ...notification,
        unread: false,
      }))
    );
  };

  const markNotificationAsRead = (id) => {
    setNotifications((current) =>
      current.map((notification) =>
        notification.id === id
          ? { ...notification, unread: false }
          : notification
      )
    );
  };

  return (
    <header className="sticky top-0 z-30 border-b border-stone-200 bg-white/95 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/95">
      <div className="flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onMenuClick}
            className="rounded-xl p-2.5 text-stone-600 transition hover:bg-stone-100 lg:hidden dark:text-slate-300 dark:hover:bg-slate-800"
          >
            <Menu size={22} />
          </button>

          <div>
            <p className="hidden text-xs font-medium text-stone-400 sm:block dark:text-slate-500">
              RESTAURANT MANAGEMENT
            </p>

            <h1 className="text-lg font-bold text-stone-900 dark:text-white sm:text-xl">
              Good morning, {user.name.split(" ")[0]} 👋
            </h1>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Kitchen */}
          <div className="hidden items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-xs font-medium text-emerald-600 sm:flex dark:bg-emerald-950/30 dark:text-emerald-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            Kitchen Online
          </div>

          {/* Theme */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-stone-200 text-stone-600 transition-all hover:border-amber-400 hover:bg-amber-50 hover:text-amber-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-amber-500 dark:hover:bg-amber-950/30 dark:hover:text-amber-400"
          >
            {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          {/* Notifications */}
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setNotificationOpen((value) => !value);
                setProfileOpen(false);
              }}
              className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-stone-200 text-stone-600 transition-all hover:border-amber-400 hover:bg-amber-50 hover:text-amber-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-amber-500 dark:hover:bg-amber-950/30 dark:hover:text-amber-400"
            >
              <Bell size={19} />

              {unreadCount > 0 && (
                <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[9px] font-bold text-white">
                  {unreadCount}
                </span>
              )}
            </button>

            {notificationOpen && (
              <div className="absolute right-0 top-14 z-50 w-[340px] max-w-[calc(100vw-24px)] overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900">
                <div className="flex items-center justify-between border-b border-stone-200 px-5 py-4 dark:border-slate-800">
                  <div>
                    <h3 className="font-semibold text-stone-900 dark:text-white">
                      Notifications
                    </h3>

                    <p className="mt-1 text-xs text-stone-500 dark:text-slate-400">
                      {unreadCount === 0
                        ? "You're all caught up"
                        : `${unreadCount} unread notification${
                            unreadCount > 1 ? "s" : ""
                          }`}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setNotificationOpen(false)}
                    className="rounded-lg p-1.5 text-stone-400 hover:bg-stone-100 dark:hover:bg-slate-800"
                  >
                    <X size={17} />
                  </button>
                </div>

                <div className="max-h-[350px] overflow-y-auto">
                  {notifications.map((notification) => (
                    <button
                      key={notification.id}
                      type="button"
                      onClick={() => markNotificationAsRead(notification.id)}
                      className={`flex w-full gap-3 border-b border-stone-100 px-5 py-4 text-left transition hover:bg-stone-50 dark:border-slate-800 dark:hover:bg-slate-800/70 ${
                        notification.unread
                          ? "bg-amber-50/40 dark:bg-amber-950/10"
                          : ""
                      }`}
                    >
                      <div
                        className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${
                          notification.unread
                            ? "bg-amber-500"
                            : "bg-stone-300 dark:bg-slate-600"
                        }`}
                      />

                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-stone-800 dark:text-white">
                          {notification.title}
                        </p>

                        <p className="mt-1 text-xs leading-5 text-stone-500 dark:text-slate-400">
                          {notification.message}
                        </p>

                        <p className="mt-1 text-[11px] text-stone-400">
                          {notification.time}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={markAllAsRead}
                  disabled={unreadCount === 0}
                  className="w-full px-5 py-3 text-sm font-semibold text-amber-600 transition hover:bg-amber-50 disabled:cursor-not-allowed disabled:opacity-40 dark:hover:bg-amber-950/20"
                >
                  {unreadCount === 0
                    ? "All notifications read"
                    : "Mark all as read"}
                </button>
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setProfileOpen((value) => !value);
                setNotificationOpen(false);
              }}
              className="flex items-center gap-2 rounded-xl p-1.5 transition hover:bg-stone-100 dark:hover:bg-slate-800"
            >
              {/* Dynamic initials */}
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-sm font-bold text-white shadow-md">
                {initials}
              </div>

              <div className="hidden text-left lg:block">
                <p className="text-sm font-semibold text-stone-900 dark:text-white">
                  {user.name}
                </p>

                <p className="text-xs text-stone-500 dark:text-slate-400">
                  {user.role}
                </p>
              </div>

              <ChevronDown
                size={16}
                className="hidden text-stone-400 lg:block"
              />
            </button>

            {profileOpen && (
              <div className="absolute right-0 top-14 z-50 w-64 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900">
                <div className="border-b border-stone-200 p-4 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    {/* Dynamic initials */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 font-bold text-white">
                      {initials}
                    </div>

                    <div className="min-w-0">
                      <p className="truncate font-semibold text-stone-900 dark:text-white">
                        {user.name}
                      </p>

                      <p className="truncate text-xs text-stone-500 dark:text-slate-400">
                        {user.email}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-2">
                  <button
                    type="button"
                    onClick={handleProfile}
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-stone-600 transition hover:bg-stone-100 hover:text-stone-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                  >
                    <User size={18} />
                    My Profile
                  </button>

                  <button
                    type="button"
                    onClick={handleSettings}
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-stone-600 transition hover:bg-stone-100 hover:text-stone-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                  >
                    <Settings size={18} />
                    Settings
                  </button>

                  <div className="my-1 border-t border-stone-100 dark:border-slate-800" />

                  <button
                    type="button"
                    onClick={handleLogout}
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-red-500 transition hover:bg-red-50 dark:hover:bg-red-950/30"
                  >
                    <LogOut size={18} />
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
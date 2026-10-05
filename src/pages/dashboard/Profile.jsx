import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  AtSign,
  CalendarDays,
  Camera,
  CheckCircle2,
  Mail,
  ShieldCheck,
  User,
  Utensils,
} from "lucide-react";

const Profile = () => {
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
        console.error("Unable to load profile:", error);
      }
    }
  }, []);

  const getInitials = (name) => {
    return name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0].toUpperCase())
      .join("");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center"
      >
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            My Profile
          </h1>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Manage your DineFlow account information.
          </p>
        </div>
      </motion.div>

      {/* Profile Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
      >
        {/* Banner */}
        <div className="relative h-36 overflow-hidden bg-[#0d0f12]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(249,115,22,0.22),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(245,158,11,0.12),transparent_35%)]" />

          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        {/* Profile info */}
        <div className="relative px-6 pb-6 sm:px-8">
          <div className="-mt-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
              {/* Avatar */}
              <div className="relative">
                <div className="flex h-24 w-24 items-center justify-center rounded-2xl border-4 border-white bg-gradient-to-br from-orange-400 to-orange-600 text-2xl font-bold text-white shadow-xl dark:border-slate-900">
                  {getInitials(user.name)}
                </div>

                <button
                  type="button"
                  className="absolute -bottom-2 -right-2 flex h-9 w-9 items-center justify-center rounded-full border-4 border-white bg-slate-900 text-white transition hover:bg-orange-500 dark:border-slate-900"
                  aria-label="Change profile picture"
                >
                  <Camera className="h-4 w-4" />
                </button>
              </div>

              <div className="pb-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                    {user.name}
                  </h2>

                  <CheckCircle2 className="h-5 w-5 fill-orange-500 text-white" />
                </div>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {user.role}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1.5 text-xs font-medium text-green-700 dark:border-green-900/50 dark:bg-green-950/30 dark:text-green-400">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Active account
            </div>
          </div>
        </div>
      </motion.div>

      {/* Information */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Personal information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 dark:bg-orange-500/10">
              <User className="h-5 w-5 text-orange-500" />
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white">
                Personal Information
              </h3>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                Your account details
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {/* Name */}
            <div>
              <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400">
                Full Name
              </label>

              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-950">
                <User className="h-4 w-4 text-slate-400" />

                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  {user.name}
                </span>
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400">
                Email Address
              </label>

              <div className="flex min-w-0 items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-950">
                <Mail className="h-4 w-4 shrink-0 text-slate-400" />

                <span className="truncate text-sm font-medium text-slate-700 dark:text-slate-200">
                  {user.email}
                </span>
              </div>
            </div>

            {/* Role */}
            <div>
              <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400">
                Role
              </label>

              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-950">
                <ShieldCheck className="h-4 w-4 text-slate-400" />

                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  {user.role}
                </span>
              </div>
            </div>

            {/* Workspace */}
            <div>
              <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400">
                Workspace
              </label>

              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-950">
                <Utensils className="h-4 w-4 text-slate-400" />

                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  DineFlow Restaurant
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Account card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 dark:bg-orange-500/10">
              <AtSign className="h-5 w-5 text-orange-500" />
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white">
                Account
              </h3>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                Account status
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 dark:border-slate-800">
              <span className="text-sm text-slate-500">Status</span>

              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600 dark:bg-green-950/30 dark:text-green-400">
                Active
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-slate-100 pb-4 dark:border-slate-800">
              <span className="text-sm text-slate-500">Account type</span>

              <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                Manager
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">Platform</span>

              <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                DineFlow
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Email confirmation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col gap-4 rounded-2xl border border-orange-200 bg-orange-50 p-5 dark:border-orange-900/40 dark:bg-orange-950/20 sm:flex-row sm:items-center"
      >
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500">
          <Mail className="h-5 w-5 text-white" />
        </div>

        <div className="min-w-0">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">
            Signed in with
          </p>

          <p className="mt-1 truncate text-sm text-slate-600 dark:text-slate-400">
            {user.email}
          </p>
        </div>

        <div className="ml-auto flex items-center gap-2 text-xs font-medium text-green-600 dark:text-green-400">
          <CheckCircle2 className="h-4 w-4" />
          Verified session
        </div>
      </motion.div>

      {/* Footer info */}
      <div className="flex items-center justify-center gap-2 pb-4 text-xs text-slate-400">
        <CalendarDays className="h-3.5 w-3.5" />
        DineFlow account
      </div>
    </div>
  );
};

export default Profile;
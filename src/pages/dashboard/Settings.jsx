import { Bell, Lock, Palette, Save } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function Settings() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="max-w-4xl space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-stone-900 dark:text-white">
          Settings
        </h2>

        <p className="mt-1 text-sm text-stone-500 dark:text-slate-400">
          Manage your DineFlow preferences.
        </p>
      </div>

      <div className="space-y-4">
        {/* Appearance */}
        <div className="rounded-2xl border border-stone-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center gap-3">
            <Palette className="text-amber-500" size={21} />

            <div>
              <h3 className="font-semibold text-stone-900 dark:text-white">
                Appearance
              </h3>

              <p className="text-xs text-stone-500 dark:text-slate-400">
                Customize how DineFlow looks.
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between rounded-xl bg-stone-50 p-4 dark:bg-slate-800">
            <div>
              <p className="text-sm font-semibold text-stone-900 dark:text-white">
                Dark Mode
              </p>

              <p className="mt-1 text-xs text-stone-500 dark:text-slate-400">
                Current: {theme === "dark" ? "Dark" : "Light"}
              </p>
            </div>

            <button
              type="button"
              onClick={toggleTheme}
              className={`relative h-7 w-12 rounded-full transition ${
                theme === "dark" ? "bg-amber-500" : "bg-stone-300"
              }`}
            >
              <span
                className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition ${
                  theme === "dark" ? "left-6" : "left-1"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Notifications */}
        <div className="rounded-2xl border border-stone-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center gap-3">
            <Bell className="text-amber-500" size={21} />

            <div>
              <h3 className="font-semibold text-stone-900 dark:text-white">
                Notifications
              </h3>

              <p className="text-xs text-stone-500 dark:text-slate-400">
                Manage notification preferences.
              </p>
            </div>
          </div>

          <label className="mt-6 flex cursor-pointer items-center justify-between rounded-xl bg-stone-50 p-4 dark:bg-slate-800">
            <span className="text-sm font-medium text-stone-900 dark:text-white">
              Order notifications
            </span>

            <input
              type="checkbox"
              defaultChecked
              className="h-5 w-5 accent-amber-500"
            />
          </label>
        </div>

        {/* Security */}
        <div className="rounded-2xl border border-stone-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center gap-3">
            <Lock className="text-amber-500" size={21} />

            <div>
              <h3 className="font-semibold text-stone-900 dark:text-white">
                Security
              </h3>

              <p className="text-xs text-stone-500 dark:text-slate-400">
                Keep your restaurant account secure.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="mt-6 flex items-center gap-2 rounded-xl bg-stone-900 px-4 py-3 text-sm font-semibold text-white hover:bg-stone-800 dark:bg-white dark:text-slate-900"
          >
            <Save size={17} />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
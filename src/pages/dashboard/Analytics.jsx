import {
  ArrowUpRight,
  BarChart3,
  IndianRupee,
  TrendingUp,
} from "lucide-react";

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-stone-900 dark:text-white">
          Analytics
        </h2>

        <p className="mt-1 text-sm text-stone-500 dark:text-slate-400">
          Understand your restaurant performance.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {[
          ["Monthly Revenue", "₹8,42,650", IndianRupee],
          ["Average Order", "₹786", TrendingUp],
          ["Growth Rate", "18.4%", BarChart3],
        ].map(([title, value, Icon]) => (
          <div
            key={title}
            className="rounded-2xl border border-stone-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
          >
            <Icon className="text-amber-500" size={22} />

            <p className="mt-5 text-sm text-stone-500 dark:text-slate-400">
              {title}
            </p>

            <div className="mt-1 flex items-center gap-2">
              <h3 className="text-2xl font-bold text-stone-900 dark:text-white">
                {value}
              </h3>

              <ArrowUpRight className="text-emerald-500" size={18} />
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-stone-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <h3 className="font-bold text-stone-900 dark:text-white">
          Revenue Performance
        </h3>

        <div className="mt-8 flex h-72 items-end gap-3">
          {[35, 48, 42, 68, 57, 78, 88, 96].map((height, index) => (
            <div
              key={index}
              className="flex h-full flex-1 items-end"
            >
              <div
                style={{ height: `${height}%` }}
                className="w-full rounded-t-xl bg-gradient-to-t from-amber-600 to-amber-300 transition hover:from-amber-500 hover:to-yellow-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
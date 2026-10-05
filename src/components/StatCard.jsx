import { motion } from "framer-motion";

export default function StatCard({
  title,
  value,
  change,
  icon: Icon,
  positive = true,
}) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition-all dark:border-stone-800 dark:bg-stone-900"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-stone-500 dark:text-stone-400">
            {title}
          </p>

          <h3 className="mt-2 text-2xl font-black tracking-tight text-stone-900 dark:text-white">
            {value}
          </h3>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400">
          {Icon && <Icon size={20} />}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 text-xs">
        <span
          className={`rounded-full px-2 py-1 font-bold ${
            positive
              ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400"
              : "bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400"
          }`}
        >
          {change}
        </span>

        <span className="text-stone-400">vs last month</span>
      </div>
    </motion.div>
  );
}
import { Armchair } from "lucide-react";

const tables = [
  ["Table 01", "2 Seats", "Available"],
  ["Table 02", "4 Seats", "Occupied"],
  ["Table 03", "4 Seats", "Reserved"],
  ["Table 04", "6 Seats", "Available"],
  ["Table 05", "2 Seats", "Occupied"],
  ["Table 06", "8 Seats", "Reserved"],
  ["Table 07", "4 Seats", "Available"],
  ["Table 08", "6 Seats", "Occupied"],
];

export default function Tables() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-stone-900 dark:text-white">
          Table Management
        </h2>

        <p className="mt-1 text-sm text-stone-500 dark:text-slate-400">
          Monitor your restaurant floor in real time.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {tables.map(([name, seats, status]) => {
          const available = status === "Available";
          const reserved = status === "Reserved";

          return (
            <div
              key={name}
              className="rounded-2xl border border-stone-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-stone-100 text-stone-600 dark:bg-slate-800 dark:text-slate-300">
                  <Armchair size={22} />
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    available
                      ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400"
                      : reserved
                        ? "bg-amber-50 text-amber-600 dark:bg-amber-950/30 dark:text-amber-400"
                        : "bg-red-50 text-red-600 dark:bg-red-950/30 dark:text-red-400"
                  }`}
                >
                  {status}
                </span>
              </div>

              <h3 className="mt-5 font-bold text-stone-900 dark:text-white">
                {name}
              </h3>

              <p className="mt-1 text-sm text-stone-500 dark:text-slate-400">
                {seats}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
import { Mail, Phone, Users } from "lucide-react";

const customers = [
  ["Rahul Sharma", "rahul@gmail.com", "+91 98765 43210", "24 visits"],
  ["Priya Reddy", "priya@gmail.com", "+91 98765 32109", "18 visits"],
  ["Arjun Kumar", "arjun@gmail.com", "+91 98765 11223", "15 visits"],
  ["Sneha Rao", "sneha@gmail.com", "+91 98765 44556", "12 visits"],
];

export default function Customers() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-stone-900 dark:text-white">
          Customers
        </h2>

        <p className="mt-1 text-sm text-stone-500 dark:text-slate-400">
          View and manage your restaurant customers.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {customers.map((customer) => (
          <div
            key={customer[0]}
            className="flex items-center gap-4 rounded-2xl border border-stone-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-100 font-bold text-amber-600 dark:bg-amber-950/40 dark:text-amber-400">
              {customer[0]
                .split(" ")
                .map((word) => word[0])
                .join("")}
            </div>

            <div className="min-w-0">
              <h3 className="font-semibold text-stone-900 dark:text-white">
                {customer[0]}
              </h3>

              <div className="mt-1 flex flex-wrap gap-3 text-xs text-stone-500 dark:text-slate-400">
                <span className="flex items-center gap-1">
                  <Mail size={13} />
                  {customer[1]}
                </span>

                <span className="flex items-center gap-1">
                  <Phone size={13} />
                  {customer[2]}
                </span>
              </div>

              <p className="mt-2 flex items-center gap-1 text-xs font-semibold text-amber-600">
                <Users size={13} />
                {customer[3]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
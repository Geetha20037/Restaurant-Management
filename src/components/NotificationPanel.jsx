import { Bell, CheckCircle2, Clock3, X } from "lucide-react";

export default function NotificationPanel({ onClose }) {
  const notifications = [
    {
      icon: CheckCircle2,
      title: "Order completed",
      text: "Order #1048 was completed successfully.",
    },
    {
      icon: Clock3,
      title: "Reservation reminder",
      text: "Table 12 is reserved for 7:30 PM.",
    },
    {
      icon: Bell,
      title: "New review",
      text: "A customer left a 5-star review.",
    },
  ];

  return (
    <div className="absolute right-0 top-14 z-50 w-80 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-2xl dark:border-stone-700 dark:bg-stone-900">
      <div className="flex items-center justify-between border-b border-stone-200 px-4 py-4 dark:border-stone-700">
        <div>
          <h3 className="font-bold text-stone-900 dark:text-white">
            Notifications
          </h3>
          <p className="text-xs text-stone-500">3 new updates</p>
        </div>

        <button
          onClick={onClose}
          className="text-stone-400 hover:text-stone-700 dark:hover:text-white"
        >
          <X size={18} />
        </button>
      </div>

      <div>
        {notifications.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex gap-3 border-b border-stone-100 px-4 py-4 transition hover:bg-stone-50 dark:border-stone-800 dark:hover:bg-stone-800"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400">
                <Icon size={17} />
              </div>

              <div>
                <p className="text-sm font-semibold text-stone-800 dark:text-stone-100">
                  {item.title}
                </p>
                <p className="mt-1 text-xs leading-5 text-stone-500">
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
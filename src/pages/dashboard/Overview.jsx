import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  ArrowDownRight,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  IndianRupee,
  Plus,
  ShoppingBag,
  Users,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const revenueData = [
  { day: "Mon", revenue: 5200 },
  { day: "Tue", revenue: 6800 },
  { day: "Wed", revenue: 5900 },
  { day: "Thu", revenue: 8200 },
  { day: "Fri", revenue: 7600 },
  { day: "Sat", revenue: 9800 },
  { day: "Sun", revenue: 5150 },
];

const recentOrders = [
  {
    id: "#DF-1082",
    customer: "Rahul Sharma",
    item: "Chicken Biryani",
    amount: "₹850",
    status: "Completed",
  },
  {
    id: "#DF-1081",
    customer: "Priya Reddy",
    item: "Truffle Pasta",
    amount: "₹1,240",
    status: "Preparing",
  },
  {
    id: "#DF-1080",
    customer: "Arjun Kumar",
    item: "Margherita Pizza",
    amount: "₹780",
    status: "Completed",
  },
  {
    id: "#DF-1079",
    customer: "Sneha Rao",
    item: "Chocolate Fondant",
    amount: "₹540",
    status: "Pending",
  },
];

const popularDishes = [
  {
    name: "Truffle Pasta",
    category: "Italian",
    orders: 48,
    price: "₹620",
  },
  {
    name: "Chicken Biryani",
    category: "Main Course",
    orders: 42,
    price: "₹450",
  },
  {
    name: "Margherita Pizza",
    category: "Pizza",
    orders: 36,
    price: "₹390",
  },
  {
    name: "Chocolate Fondant",
    category: "Dessert",
    orders: 29,
    price: "₹270",
  },
];

function StatCard({
  title,
  value,
  change,
  positive = true,
  icon: Icon,
  iconClass,
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            {title}
          </p>

          <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
            {value}
          </h3>

          <div className="mt-2 flex items-center gap-1 text-sm">
            {positive ? (
              <ArrowUpRight className="h-4 w-4 text-emerald-500" />
            ) : (
              <ArrowDownRight className="h-4 w-4 text-red-500" />
            )}

            <span
              className={
                positive
                  ? "font-semibold text-emerald-500"
                  : "font-semibold text-red-500"
              }
            >
              {change}
            </span>

            <span className="text-slate-400">vs last week</span>
          </div>
        </div>

        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl ${iconClass}`}
        >
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) {
    return null;
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-xl dark:border-slate-700 dark:bg-slate-800">
      <p className="mb-1 text-xs font-medium text-slate-500 dark:text-slate-400">
        {label}
      </p>

      <p className="text-sm font-bold text-slate-900 dark:text-white">
        ₹{payload[0].value.toLocaleString("en-IN")}
      </p>
    </div>
  );
}

export default function Overview() {
  const navigate = useNavigate();

  const goToOrders = () => {
    navigate("/dashboard/orders");
  };

  const goToReservations = () => {
    navigate("/dashboard/reservations");
  };

  const goToMenu = () => {
    navigate("/dashboard/menu");
  };

  return (
    <div className="space-y-6">
      {/* PAGE HEADER */}
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
            Welcome back, Alex 👋
          </p>

          <h1 className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
            Restaurant Overview
          </h1>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Here&apos;s what&apos;s happening at The Golden Fork today.
          </p>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={goToOrders}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-lg"
          >
            <Plus className="h-4 w-4" />
            New Order
          </button>

          <button
            type="button"
            onClick={goToReservations}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-600 hover:shadow-lg"
          >
            <CalendarDays className="h-4 w-4" />
            New Reservation
          </button>

          <button
            type="button"
            onClick={goToMenu}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
          >
            <Plus className="h-4 w-4" />
            Add Dish
          </button>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Today's Revenue"
          value="₹48,650"
          change="+12.5%"
          icon={IndianRupee}
          iconClass="bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400"
        />

        <StatCard
          title="Total Orders"
          value="186"
          change="+8.2%"
          icon={ShoppingBag}
          iconClass="bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
        />

        <StatCard
          title="Guests Served"
          value="324"
          change="+14.8%"
          icon={Users}
          iconClass="bg-violet-100 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400"
        />

        <StatCard
          title="Reservations"
          value="32"
          change="+5.4%"
          icon={CalendarDays}
          iconClass="bg-orange-100 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400"
        />
      </div>

      {/* REVENUE CHART + SUMMARY */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* REVENUE GRAPH */}
        <div className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm xl:col-span-2 dark:border-slate-800 dark:bg-slate-900">
          <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Revenue Overview
              </h2>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Revenue performance for the current week
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />

              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Revenue
              </span>
            </div>
          </div>

          <div className="h-[320px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={revenueData}
                margin={{
                  top: 10,
                  right: 10,
                  left: 0,
                  bottom: 0,
                }}
              >
                <defs>
                  <linearGradient
                    id="revenueGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#10b981"
                      stopOpacity={0.35}
                    />

                    <stop
                      offset="100%"
                      stopColor="#10b981"
                      stopOpacity={0.02}
                    />
                  </linearGradient>
                </defs>

                <CartesianGrid
                  strokeDasharray="4 4"
                  vertical={false}
                  stroke="#e2e8f0"
                />

                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fontSize: 12,
                    fill: "#94a3b8",
                  }}
                  dy={10}
                />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                  width={55}
                  tick={{
                    fontSize: 12,
                    fill: "#94a3b8",
                  }}
                  tickFormatter={(value) => `₹${value / 1000}k`}
                />

                <Tooltip
                  content={<CustomTooltip />}
                  cursor={{
                    stroke: "#10b981",
                    strokeWidth: 1,
                    strokeDasharray: "4 4",
                  }}
                />

                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#10b981"
                  strokeWidth={3}
                  fill="url(#revenueGradient)"
                  dot={{
                    r: 4,
                    fill: "#10b981",
                    strokeWidth: 2,
                    stroke: "#ffffff",
                  }}
                  activeDot={{
                    r: 6,
                    fill: "#10b981",
                    stroke: "#ffffff",
                    strokeWidth: 3,
                  }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* TODAY SUMMARY */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="mb-5">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Today&apos;s Summary
            </h2>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Current restaurant activity
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4 dark:bg-slate-800/70">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                  <ShoppingBag className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-800 dark:text-white">
                    Orders
                  </p>

                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Today
                  </p>
                </div>
              </div>

              <span className="text-lg font-bold text-slate-900 dark:text-white">
                186
              </span>
            </div>

            <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4 dark:bg-slate-800/70">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-100 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400">
                  <Users className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-800 dark:text-white">
                    Guests
                  </p>

                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Served
                  </p>
                </div>
              </div>

              <span className="text-lg font-bold text-slate-900 dark:text-white">
                324
              </span>
            </div>

            <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4 dark:bg-slate-800/70">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400">
                  <Clock3 className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-800 dark:text-white">
                    Pending
                  </p>

                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Orders
                  </p>
                </div>
              </div>

              <span className="text-lg font-bold text-slate-900 dark:text-white">
                12
              </span>
            </div>

            <div className="rounded-xl bg-emerald-50 p-4 dark:bg-emerald-500/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                    Table Occupancy
                  </p>

                  <p className="mt-1 text-xs text-emerald-600/80 dark:text-emerald-400/70">
                    18 of 24 tables occupied
                  </p>
                </div>

                <span className="text-xl font-bold text-emerald-700 dark:text-emerald-400">
                  75%
                </span>
              </div>

              <div className="mt-3 h-2 overflow-hidden rounded-full bg-emerald-100 dark:bg-emerald-900/40">
                <div className="h-full w-[75%] rounded-full bg-emerald-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RECENT ORDERS + POPULAR DISHES */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        {/* RECENT ORDERS */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center justify-between border-b border-slate-200 p-5 dark:border-slate-800">
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Recent Orders
              </h2>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Latest customer orders
              </p>
            </div>

            <button
              type="button"
              onClick={goToOrders}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-emerald-600 transition hover:bg-emerald-50 hover:text-emerald-700 dark:text-emerald-400 dark:hover:bg-emerald-500/10"
            >
              View All
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[650px]">
              <thead>
                <tr className="border-b border-slate-200 text-left dark:border-slate-800">
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Order
                  </th>

                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Customer
                  </th>

                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Item
                  </th>

                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Amount
                  </th>

                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {recentOrders.map((order) => (
                  <tr
                    key={order.id}
                    className="border-b border-slate-100 transition hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/50"
                  >
                    <td className="px-5 py-4 text-sm font-semibold text-slate-800 dark:text-white">
                      {order.id}
                    </td>

                    <td className="px-5 py-4 text-sm text-slate-600 dark:text-slate-300">
                      {order.customer}
                    </td>

                    <td className="px-5 py-4 text-sm text-slate-600 dark:text-slate-300">
                      {order.item}
                    </td>

                    <td className="px-5 py-4 text-sm font-semibold text-slate-800 dark:text-white">
                      {order.amount}
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
                          order.status === "Completed"
                            ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400"
                            : order.status === "Preparing"
                              ? "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400"
                              : "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* POPULAR DISHES */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center justify-between border-b border-slate-200 p-5 dark:border-slate-800">
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Popular Dishes
              </h2>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Best performing menu items
              </p>
            </div>

            <button
              type="button"
              onClick={goToMenu}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-emerald-600 transition hover:bg-emerald-50 hover:text-emerald-700 dark:text-emerald-400 dark:hover:bg-emerald-500/10"
            >
              View Menu
            </button>
          </div>

          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {popularDishes.map((dish, index) => (
              <div
                key={dish.name}
                className="flex items-center gap-4 p-5 transition hover:bg-slate-50 dark:hover:bg-slate-800/50"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 font-bold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-sm font-semibold text-slate-900 dark:text-white">
                    {dish.name}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    {dish.category} • {dish.orders} orders
                  </p>
                </div>

                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  {dish.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
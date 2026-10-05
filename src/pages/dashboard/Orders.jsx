import { useState } from "react";
import {
  CheckCircle2,
  Clock3,
  Eye,
  Filter,
  Plus,
  Search,
  ShoppingBag,
  Trash2,
  X,
} from "lucide-react";

const initialOrders = [
  {
    id: "#DF-1082",
    customer: "Rahul Sharma",
    phone: "9876543210",
    table: "Table 12",
    items: "Chicken Biryani",
    quantity: 2,
    amount: 850,
    type: "Dine In",
    status: "Completed",
    time: "12:45 PM",
  },
  {
    id: "#DF-1081",
    customer: "Priya Reddy",
    phone: "9876543211",
    table: "Table 08",
    items: "Truffle Pasta",
    quantity: 1,
    amount: 1240,
    type: "Dine In",
    status: "Preparing",
    time: "1:10 PM",
  },
  {
    id: "#DF-1080",
    customer: "Arjun Kumar",
    phone: "9876543212",
    table: "Table 05",
    items: "Margherita Pizza",
    quantity: 2,
    amount: 780,
    type: "Dine In",
    status: "Completed",
    time: "1:25 PM",
  },
  {
    id: "#DF-1079",
    customer: "Sneha Rao",
    phone: "9876543213",
    table: "Table 03",
    items: "Chocolate Fondant",
    quantity: 2,
    amount: 540,
    type: "Takeaway",
    status: "Pending",
    time: "1:40 PM",
  },
];

const statusStyles = {
  Completed:
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400",
  Preparing:
    "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400",
  Pending:
    "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400",
  Cancelled:
    "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400",
};

export default function Orders() {
  const [orders, setOrders] = useState(initialOrders);
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const [form, setForm] = useState({
    customer: "",
    phone: "",
    table: "",
    items: "",
    quantity: 1,
    amount: "",
    type: "Dine In",
    status: "Pending",
  });

  const resetForm = () => {
    setForm({
      customer: "",
      phone: "",
      table: "",
      items: "",
      quantity: 1,
      amount: "",
      type: "Dine In",
      status: "Pending",
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleCreateOrder = (event) => {
    event.preventDefault();

    if (
      !form.customer.trim() ||
      !form.items.trim() ||
      !form.amount ||
      !form.phone.trim()
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const newId = `#DF-${1083 + orders.length - initialOrders.length}`;

    const newOrder = {
      id: newId,
      customer: form.customer,
      phone: form.phone,
      table: form.table || "Not Assigned",
      items: form.items,
      quantity: Number(form.quantity),
      amount: Number(form.amount),
      type: form.type,
      status: form.status,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setOrders((current) => [newOrder, ...current]);
    setShowModal(false);
    resetForm();
  };

  const deleteOrder = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this order?"
    );

    if (!confirmed) return;

    setOrders((current) => current.filter((order) => order.id !== id));
  };

  const filteredOrders = orders.filter((order) => {
    const searchValue = search.toLowerCase();

    const matchesSearch =
      order.id.toLowerCase().includes(searchValue) ||
      order.customer.toLowerCase().includes(searchValue) ||
      order.items.toLowerCase().includes(searchValue);

    const matchesStatus =
      statusFilter === "All" || order.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
            Restaurant Management
          </p>

          <h1 className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
            Orders
          </h1>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Manage customer orders and track their status.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 hover:shadow-lg"
        >
          <Plus size={18} />
          New Order
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Total Orders
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                {orders.length}
              </h2>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
              <ShoppingBag size={20} />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Completed
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                {orders.filter((order) => order.status === "Completed").length}
              </h2>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
              <CheckCircle2 size={20} />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Preparing
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                {orders.filter((order) => order.status === "Preparing").length}
              </h2>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
              <Clock3 size={20} />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Revenue
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                ₹
                {orders
                  .reduce((total, order) => total + Number(order.amount), 0)
                  .toLocaleString("en-IN")}
              </h2>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400">
              ₹
            </div>
          </div>
        </div>
      </div>

      {/* Search / Filter */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="flex flex-col gap-3 md:flex-row">
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search order, customer or item..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />
          </div>

          <div className="relative">
            <Filter
              size={17}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <select
              value={statusFilter}
              onChange={(event) => setStatusFilter(event.target.value)}
              className="rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-10 text-sm outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            >
              <option value="All">All Status</option>
              <option value="Pending">Pending</option>
              <option value="Preparing">Preparing</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="border-b border-slate-200 p-5 dark:border-slate-800">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            All Orders
          </h2>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {filteredOrders.length} order
            {filteredOrders.length !== 1 ? "s" : ""} found
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[1000px]">
            <thead>
              <tr className="border-b border-slate-200 text-left dark:border-slate-800">
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Order
                </th>

                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Customer
                </th>

                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Items
                </th>

                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Table
                </th>

                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Type
                </th>

                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Amount
                </th>

                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Status
                </th>

                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => (
                  <tr
                    key={order.id}
                    className="border-b border-slate-100 transition hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/50"
                  >
                    <td className="px-5 py-4">
                      <p className="text-sm font-bold text-slate-900 dark:text-white">
                        {order.id}
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        {order.time}
                      </p>
                    </td>

                    <td className="px-5 py-4">
                      <p className="text-sm font-semibold text-slate-800 dark:text-white">
                        {order.customer}
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        {order.phone}
                      </p>
                    </td>

                    <td className="px-5 py-4">
                      <p className="text-sm text-slate-700 dark:text-slate-300">
                        {order.items}
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        Qty: {order.quantity}
                      </p>
                    </td>

                    <td className="px-5 py-4 text-sm text-slate-600 dark:text-slate-300">
                      {order.table}
                    </td>

                    <td className="px-5 py-4 text-sm text-slate-600 dark:text-slate-300">
                      {order.type}
                    </td>

                    <td className="px-5 py-4 text-sm font-bold text-slate-900 dark:text-white">
                      ₹{Number(order.amount).toLocaleString("en-IN")}
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`inline-flex rounded-full px-3 py-1.5 text-xs font-semibold ${
                          statusStyles[order.status]
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          title="View Order"
                          className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white"
                        >
                          <Eye size={17} />
                        </button>

                        <button
                          type="button"
                          title="Delete Order"
                          onClick={() => deleteOrder(order.id)}
                          className="rounded-lg p-2 text-red-400 transition hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-500/10"
                        >
                          <Trash2 size={17} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="8"
                    className="px-5 py-12 text-center text-sm text-slate-500"
                  >
                    No orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* NEW ORDER MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900">
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white px-6 py-5 dark:border-slate-800 dark:bg-slate-900">
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  Create New Order
                </h2>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  Enter customer and order details.
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setShowModal(false);
                  resetForm();
                }}
                className="rounded-xl p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleCreateOrder} className="space-y-5 p-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Customer Name *
                  </label>

                  <input
                    name="customer"
                    value={form.customer}
                    onChange={handleChange}
                    placeholder="Enter customer name"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Phone Number *
                  </label>

                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Table
                  </label>

                  <select
                    name="table"
                    value={form.table}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  >
                    <option value="">Select table</option>
                    {Array.from({ length: 12 }, (_, index) => (
                      <option key={index + 1} value={`Table ${index + 1}`}>
                        Table {index + 1}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Order Type
                  </label>

                  <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  >
                    <option>Dine In</option>
                    <option>Takeaway</option>
                    <option>Delivery</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Item *
                  </label>

                  <input
                    name="items"
                    value={form.items}
                    onChange={handleChange}
                    placeholder="e.g. Chicken Biryani"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Quantity
                  </label>

                  <input
                    type="number"
                    min="1"
                    name="quantity"
                    value={form.quantity}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Amount *
                  </label>

                  <input
                    type="number"
                    min="0"
                    name="amount"
                    value={form.amount}
                    onChange={handleChange}
                    placeholder="₹ Amount"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Status
                  </label>

                  <select
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  >
                    <option>Pending</option>
                    <option>Preparing</option>
                    <option>Completed</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col-reverse gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:justify-end dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    resetForm();
                  }}
                  className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
                >
                  Create Order
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
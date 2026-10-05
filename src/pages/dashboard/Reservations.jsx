import { useState } from "react";
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  Phone,
  Plus,
  Trash2,
  Users,
  X,
} from "lucide-react";

const initialReservations = [
  {
    id: "RES-1001",
    customer: "Rahul Sharma",
    phone: "9876543210",
    date: "2026-10-05",
    time: "7:30 PM",
    guests: 4,
    table: "Table 12",
    status: "Confirmed",
    notes: "Birthday dinner",
  },
  {
    id: "RES-1002",
    customer: "Priya Reddy",
    phone: "9876543211",
    date: "2026-10-05",
    time: "8:00 PM",
    guests: 2,
    table: "Table 08",
    status: "Confirmed",
    notes: "Window seating",
  },
  {
    id: "RES-1003",
    customer: "Arjun Kumar",
    phone: "9876543212",
    date: "2026-10-06",
    time: "1:00 PM",
    guests: 6,
    table: "Table 05",
    status: "Pending",
    notes: "Family lunch",
  },
];

const statusStyles = {
  Confirmed:
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400",
  Pending:
    "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400",
  Cancelled:
    "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400",
};

export default function Reservations() {
  const [reservations, setReservations] = useState(initialReservations);
  const [showModal, setShowModal] = useState(false);

  const [form, setForm] = useState({
    customer: "",
    phone: "",
    date: "",
    time: "",
    guests: 2,
    table: "",
    status: "Confirmed",
    notes: "",
  });

  const resetForm = () => {
    setForm({
      customer: "",
      phone: "",
      date: "",
      time: "",
      guests: 2,
      table: "",
      status: "Confirmed",
      notes: "",
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleCreateReservation = (event) => {
    event.preventDefault();

    if (
      !form.customer.trim() ||
      !form.phone.trim() ||
      !form.date ||
      !form.time ||
      !form.table
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const newReservation = {
      id: `RES-${1001 + reservations.length}`,
      customer: form.customer,
      phone: form.phone,
      date: form.date,
      time: form.time,
      guests: Number(form.guests),
      table: form.table,
      status: form.status,
      notes: form.notes || "No additional notes",
    };

    setReservations((current) => [newReservation, ...current]);
    setShowModal(false);
    resetForm();
  };

  const deleteReservation = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this reservation?"
    );

    if (!confirmed) return;

    setReservations((current) =>
      current.filter((reservation) => reservation.id !== id)
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
            Restaurant Management
          </p>

          <h1 className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
            Reservations
          </h1>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Manage table reservations and upcoming guests.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 hover:shadow-lg"
        >
          <Plus size={18} />
          New Reservation
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Total Reservations
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                {reservations.length}
              </h2>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
              <CalendarDays size={20} />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Confirmed
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                {
                  reservations.filter(
                    (reservation) => reservation.status === "Confirmed"
                  ).length
                }
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
                Pending
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                {
                  reservations.filter(
                    (reservation) => reservation.status === "Pending"
                  ).length
                }
              </h2>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400">
              <Clock3 size={20} />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Guests
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                {reservations.reduce(
                  (total, reservation) => total + Number(reservation.guests),
                  0
                )}
              </h2>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400">
              <Users size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Reservation Cards */}
      {reservations.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {reservations.map((reservation) => (
            <div
              key={reservation.id}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
                    {reservation.id}
                  </p>

                  <h3 className="mt-2 text-lg font-bold text-slate-900 dark:text-white">
                    {reservation.customer}
                  </h3>
                </div>

                <span
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                    statusStyles[reservation.status]
                  }`}
                >
                  {reservation.status}
                </span>
              </div>

              <div className="mt-5 space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <CalendarDays className="h-4 w-4 text-emerald-500" />
                  {reservation.date}
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <Clock3 className="h-4 w-4 text-emerald-500" />
                  {reservation.time}
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <Users className="h-4 w-4 text-emerald-500" />
                  {reservation.guests} Guests
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <Phone className="h-4 w-4 text-emerald-500" />
                  {reservation.phone}
                </div>

                <div className="rounded-xl bg-slate-50 p-3 dark:bg-slate-800">
                  <p className="text-xs text-slate-400">Table</p>

                  <p className="mt-1 text-sm font-semibold text-slate-800 dark:text-white">
                    {reservation.table}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-3 dark:bg-slate-800">
                  <p className="text-xs text-slate-400">Notes</p>

                  <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
                    {reservation.notes}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex justify-end border-t border-slate-100 pt-4 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => deleteReservation(reservation.id)}
                  className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-red-500 transition hover:bg-red-50 dark:hover:bg-red-500/10"
                >
                  <Trash2 size={16} />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center dark:border-slate-700 dark:bg-slate-900">
          <CalendarDays className="mx-auto h-10 w-10 text-slate-400" />

          <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">
            No reservations yet
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Create your first reservation using the button above.
          </p>
        </div>
      )}

      {/* NEW RESERVATION MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900">
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white px-6 py-5 dark:border-slate-800 dark:bg-slate-900">
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  New Reservation
                </h2>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  Reserve a table for your customer.
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

            <form onSubmit={handleCreateReservation} className="space-y-5 p-6">
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
                    Date *
                  </label>

                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Time *
                  </label>

                  <input
                    type="time"
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Number of Guests *
                  </label>

                  <input
                    type="number"
                    min="1"
                    name="guests"
                    value={form.guests}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Table *
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
                    Status
                  </label>

                  <select
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  >
                    <option>Confirmed</option>
                    <option>Pending</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Notes
                  </label>

                  <textarea
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Birthday, anniversary, window seating..."
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />
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
                  Save Reservation
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
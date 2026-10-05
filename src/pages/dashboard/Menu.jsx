import { useState } from "react";
import {
  Edit3,
  IndianRupee,
  Plus,
  Search,
  Trash2,
  Utensils,
  X,
} from "lucide-react";

const initialDishes = [
  {
    id: 1,
    name: "Truffle Pasta",
    category: "Italian",
    price: 620,
    description: "Creamy pasta with black truffle and parmesan.",
    status: "Available",
  },
  {
    id: 2,
    name: "Chicken Biryani",
    category: "Main Course",
    price: 450,
    description: "Aromatic basmati rice with tender chicken and spices.",
    status: "Available",
  },
  {
    id: 3,
    name: "Margherita Pizza",
    category: "Pizza",
    price: 390,
    description: "Classic pizza with tomato, mozzarella and basil.",
    status: "Available",
  },
  {
    id: 4,
    name: "Chocolate Fondant",
    category: "Dessert",
    price: 270,
    description: "Warm chocolate cake with a rich molten center.",
    status: "Available",
  },
  {
    id: 5,
    name: "Paneer Tikka",
    category: "Starters",
    price: 340,
    description: "Grilled paneer cubes marinated with Indian spices.",
    status: "Available",
  },
  {
    id: 6,
    name: "Caesar Salad",
    category: "Salads",
    price: 310,
    description: "Fresh lettuce, parmesan and creamy Caesar dressing.",
    status: "Available",
  },
];

const categories = [
  "Starters",
  "Main Course",
  "Italian",
  "Pizza",
  "Indian",
  "Salads",
  "Dessert",
  "Beverages",
];

export default function Menu() {
  const [dishes, setDishes] = useState(initialDishes);
  const [showModal, setShowModal] = useState(false);
  const [editingDish, setEditingDish] = useState(null);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const emptyForm = {
    name: "",
    category: "Main Course",
    price: "",
    description: "",
    status: "Available",
  };

  const [form, setForm] = useState(emptyForm);

  const openAddModal = () => {
    setEditingDish(null);
    setForm(emptyForm);
    setShowModal(true);
  };

  const openEditModal = (dish) => {
    setEditingDish(dish);

    setForm({
      name: dish.name,
      category: dish.category,
      price: dish.price,
      description: dish.description,
      status: dish.status,
    });

    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingDish(null);
    setForm(emptyForm);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSaveDish = (event) => {
    event.preventDefault();

    if (!form.name.trim() || !form.price || !form.description.trim()) {
      alert("Please fill all required fields.");
      return;
    }

    if (editingDish) {
      setDishes((current) =>
        current.map((dish) =>
          dish.id === editingDish.id
            ? {
                ...dish,
                name: form.name,
                category: form.category,
                price: Number(form.price),
                description: form.description,
                status: form.status,
              }
            : dish
        )
      );
    } else {
      const newDish = {
        id: Date.now(),
        name: form.name,
        category: form.category,
        price: Number(form.price),
        description: form.description,
        status: form.status,
      };

      setDishes((current) => [newDish, ...current]);
    }

    closeModal();
  };

  const deleteDish = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this dish?"
    );

    if (!confirmed) return;

    setDishes((current) => current.filter((dish) => dish.id !== id));
  };

  const filteredDishes = dishes.filter((dish) => {
    const searchValue = search.toLowerCase();

    const matchesSearch =
      dish.name.toLowerCase().includes(searchValue) ||
      dish.category.toLowerCase().includes(searchValue) ||
      dish.description.toLowerCase().includes(searchValue);

    const matchesCategory =
      categoryFilter === "All" || dish.category === categoryFilter;

    return matchesSearch && matchesCategory;
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
            Menu Management
          </h1>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Add, edit and manage your restaurant dishes.
          </p>
        </div>

        <button
          type="button"
          onClick={openAddModal}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 hover:shadow-lg"
        >
          <Plus size={18} />
          Add Dish
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Total Dishes
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                {dishes.length}
              </h2>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
              <Utensils size={20} />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Available
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                {
                  dishes.filter((dish) => dish.status === "Available").length
                }
              </h2>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
              <span className="h-3 w-3 rounded-full bg-blue-500" />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Categories
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                {new Set(dishes.map((dish) => dish.category)).size}
              </h2>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400">
              <IndianRupee size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Search + Filter */}
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
              placeholder="Search dishes..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />
          </div>

          <select
            value={categoryFilter}
            onChange={(event) => setCategoryFilter(event.target.value)}
            className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          >
            <option value="All">All Categories</option>

            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Dish Grid */}
      {filteredDishes.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filteredDishes.map((dish) => (
            <div
              key={dish.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              {/* Dish Image Placeholder */}
              <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-amber-50 to-orange-50 dark:from-emerald-950/40 dark:via-slate-800 dark:to-orange-950/30">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/80 text-emerald-600 shadow-lg backdrop-blur dark:bg-slate-900/80 dark:text-emerald-400">
                  <Utensils size={32} />
                </div>

                <span
                  className={`absolute right-4 top-4 rounded-full px-3 py-1.5 text-xs font-semibold ${
                    dish.status === "Available"
                      ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400"
                      : "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400"
                  }`}
                >
                  {dish.status}
                </span>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
                      {dish.category}
                    </p>

                    <h3 className="mt-1 text-lg font-bold text-slate-900 dark:text-white">
                      {dish.name}
                    </h3>
                  </div>

                  <p className="whitespace-nowrap text-lg font-bold text-emerald-600 dark:text-emerald-400">
                    ₹{Number(dish.price).toLocaleString("en-IN")}
                  </p>
                </div>

                <p className="mt-3 min-h-[48px] text-sm leading-6 text-slate-500 dark:text-slate-400">
                  {dish.description}
                </p>

                <div className="mt-5 flex gap-2 border-t border-slate-100 pt-4 dark:border-slate-800">
                  <button
                    type="button"
                    onClick={() => openEditModal(dish)}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                  >
                    <Edit3 size={16} />
                    Edit
                  </button>

                  <button
                    type="button"
                    onClick={() => deleteDish(dish.id)}
                    className="flex items-center justify-center rounded-xl border border-red-100 px-3 py-2.5 text-red-500 transition hover:bg-red-50 dark:border-red-500/20 dark:hover:bg-red-500/10"
                    title="Delete Dish"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center dark:border-slate-700 dark:bg-slate-900">
          <Utensils className="mx-auto h-10 w-10 text-slate-400" />

          <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">
            No dishes found
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Try another search or add a new dish.
          </p>
        </div>
      )}

      {/* ADD / EDIT DISH MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900">
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white px-6 py-5 dark:border-slate-800 dark:bg-slate-900">
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  {editingDish ? "Edit Dish" : "Add New Dish"}
                </h2>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {editingDish
                    ? "Update the dish information."
                    : "Add a new dish to your restaurant menu."}
                </p>
              </div>

              <button
                type="button"
                onClick={closeModal}
                className="rounded-xl p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSaveDish} className="space-y-5 p-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Dish Name *
                  </label>

                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. Butter Chicken"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Category *
                  </label>

                  <select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Price *
                  </label>

                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                      ₹
                    </span>

                    <input
                      type="number"
                      min="0"
                      name="price"
                      value={form.price}
                      onChange={handleChange}
                      placeholder="450"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-9 pr-4 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Availability
                  </label>

                  <select
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  >
                    <option>Available</option>
                    <option>Unavailable</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Description *
                  </label>

                  <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Describe the dish..."
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />
                </div>
              </div>

              <div className="flex flex-col-reverse gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:justify-end dark:border-slate-800">
                <button
                  type="button"
                  onClick={closeModal}
                  className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
                >
                  {editingDish ? "Save Changes" : "Add Dish"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
import {
  ArrowRight,
  BarChart3,
  CalendarCheck,
  Check,
  ChefHat,
  ClipboardList,
  Clock3,
  LayoutDashboard,
  Star,
  Table2,
  Users,
  UtensilsCrossed,
  WalletCards,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";

const features = [
  {
    icon: ClipboardList,
    title: "Smart Order Management",
    text: "Track every order from the moment it is placed until it reaches the table.",
  },
  {
    icon: Table2,
    title: "Table Management",
    text: "See table availability, reservations and occupancy in real time.",
  },
  {
    icon: BarChart3,
    title: "Powerful Analytics",
    text: "Understand revenue, sales trends and restaurant performance at a glance.",
  },
  {
    icon: CalendarCheck,
    title: "Easy Reservations",
    text: "Manage reservations and give every guest a smooth dining experience.",
  },
  {
    icon: Users,
    title: "Customer Insights",
    text: "Build stronger relationships with customer history and preferences.",
  },
  {
    icon: UtensilsCrossed,
    title: "Menu Control",
    text: "Manage dishes, categories, pricing and availability from one place.",
  },
];

const testimonials = [
  {
    name: "Maya Rodriguez",
    role: "Restaurant Owner",
    text: "DineFlow transformed the way our team handles daily operations. Everything is finally in one place.",
  },
  {
    name: "Arjun Mehta",
    role: "Operations Manager",
    text: "The dashboard gives us exactly the numbers we need without making things complicated.",
  },
  {
    name: "Sophie Bennett",
    role: "Cafe Founder",
    text: "Our staff adopted DineFlow almost immediately. It is simple, elegant and incredibly useful.",
  },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#faf9f7] text-stone-900 dark:bg-stone-950 dark:text-white">
      <Navbar />

      {/* HERO */}
      <section
        id="home"
        className="relative overflow-hidden pt-32 lg:pt-40"
      >
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-amber-300/20 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-orange-200/20 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 pb-20 lg:grid-cols-2 lg:px-8 lg:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-xs font-bold text-amber-700 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Built for modern restaurants
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Run your restaurant
              <span className="block text-amber-500">
                beautifully.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-stone-500 dark:text-stone-400">
              DineFlow brings orders, tables, reservations, customers and
              analytics together in one beautifully simple restaurant
              management platform.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/login">
                <Button className="flex w-full items-center justify-center gap-2 sm:w-auto">
                  Start Managing
                  <ArrowRight size={17} />
                </Button>
              </Link>

              <a href="#features">
                <Button
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  Explore Features
                </Button>
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-stone-500">
              <div className="flex items-center gap-2">
                <Check size={16} className="text-emerald-500" />
                Easy setup
              </div>
              <div className="flex items-center gap-2">
                <Check size={16} className="text-emerald-500" />
                Real-time insights
              </div>
              <div className="flex items-center gap-2">
                <Check size={16} className="text-emerald-500" />
                Mobile friendly
              </div>
            </div>
          </motion.div>

          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="rounded-3xl border border-stone-200 bg-white p-3 shadow-2xl shadow-stone-300/30 dark:border-stone-800 dark:bg-stone-900 dark:shadow-black/30">
              <div className="rounded-2xl bg-stone-100 p-4 dark:bg-stone-950">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-stone-400">
                      Good morning, Alex
                    </p>
                    <h3 className="text-lg font-black">
                      Restaurant Overview
                    </h3>
                  </div>

                  <div className="rounded-xl bg-amber-500 px-3 py-2 text-xs font-bold text-white">
                    Today
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    ["Revenue", "₹48.6K", "↑ 18%"],
                    ["Orders", "186", "↑ 12%"],
                    ["Guests", "324", "↑ 8%"],
                    ["Tables", "18/24", "75%"],
                  ].map(([title, value, growth]) => (
                    <div
                      key={title}
                      className="rounded-xl bg-white p-3 dark:bg-stone-900"
                    >
                      <p className="text-[10px] text-stone-400">
                        {title}
                      </p>
                      <p className="mt-1 text-lg font-black">
                        {value}
                      </p>
                      <p className="mt-1 text-[10px] font-bold text-emerald-500">
                        {growth}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-3 rounded-xl bg-white p-4 dark:bg-stone-900">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-xs font-bold">Weekly Revenue</p>
                    <p className="text-[10px] text-stone-400">
                      Last 7 days
                    </p>
                  </div>

                  <div className="flex h-32 items-end gap-2">
                    {[45, 62, 52, 76, 68, 92, 82, 96, 74, 88].map(
                      (height, index) => (
                        <motion.div
                          key={index}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{
                            duration: 0.6,
                            delay: index * 0.05,
                          }}
                          className={`flex-1 rounded-t-md ${
                            index === 7
                              ? "bg-amber-500"
                              : "bg-amber-200 dark:bg-amber-500/20"
                          }`}
                        />
                      ),
                    )}
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-white p-4 dark:bg-stone-900">
                    <div className="mb-2 flex items-center gap-2">
                      <Clock3 size={15} className="text-amber-500" />
                      <span className="text-xs font-bold">
                        Kitchen
                      </span>
                    </div>
                    <p className="text-sm font-black">
                      8 active orders
                    </p>
                  </div>

                  <div className="rounded-xl bg-white p-4 dark:bg-stone-900">
                    <div className="mb-2 flex items-center gap-2">
                      <WalletCards
                        size={15}
                        className="text-amber-500"
                      />
                      <span className="text-xs font-bold">
                        Average Bill
                      </span>
                    </div>
                    <p className="text-sm font-black">₹842</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-stone-200 bg-white p-4 shadow-xl sm:block dark:border-stone-800 dark:bg-stone-900">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10">
                  <ChefHat size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-stone-400">
                    Kitchen status
                  </p>
                  <p className="text-sm font-bold">
                    Running smoothly
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST */}
      <section className="border-y border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900/30">
        <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm font-bold text-stone-400">
            <span>THE URBAN TABLE</span>
            <span>OLIVE & OAK</span>
            <span>EMBER HOUSE</span>
            <span>THE GARDEN ROOM</span>
            <span>HARVEST & CO.</span>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32"
      >
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-500">
            Everything connected
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            One platform for your entire restaurant.
          </h2>

          <p className="mt-5 leading-7 text-stone-500 dark:text-stone-400">
            Stop switching between different tools. DineFlow gives your
            restaurant team one clear place to manage the entire operation.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-stone-200 bg-white p-7 transition-shadow hover:shadow-xl hover:shadow-stone-200/50 dark:border-stone-800 dark:bg-stone-900 dark:hover:shadow-black/20"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400">
                  <Icon size={22} />
                </div>

                <h3 className="mt-6 text-lg font-black">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-stone-500 dark:text-stone-400">
                  {feature.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* SOLUTIONS */}
      <section
        id="solutions"
        className="bg-stone-900 py-24 text-white lg:py-32"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
              Made for your team
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
              Less chaos.
              <br />
              More great dining.
            </h2>

            <p className="mt-6 max-w-lg leading-7 text-stone-400">
              From the kitchen to the front desk, DineFlow keeps everyone
              connected so your team can focus on what matters most: creating
              exceptional experiences.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Real-time order visibility",
                "Faster table turnover",
                "Actionable revenue insights",
                "Simple team workflows",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500">
                    <Check size={14} />
                  </div>
                  <span className="text-sm font-medium text-stone-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: LayoutDashboard,
                title: "One dashboard",
                value: "24/7",
              },
              {
                icon: ChefHat,
                title: "Kitchen efficiency",
                value: "+32%",
              },
              {
                icon: Users,
                title: "Guest satisfaction",
                value: "4.9/5",
              },
              {
                icon: BarChart3,
                title: "Revenue visibility",
                value: "100%",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-stone-700 bg-stone-800 p-6"
                >
                  <Icon size={23} className="text-amber-400" />
                  <p className="mt-8 text-3xl font-black">
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm text-stone-400">
                    {item.title}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        id="testimonials"
        className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32"
      >
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-500">
            Loved by restaurant teams
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            Built to make every service better.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-2xl border border-stone-200 bg-white p-7 dark:border-stone-800 dark:bg-stone-900"
            >
              <div className="flex gap-1 text-amber-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={15} fill="currentColor" />
                ))}
              </div>

              <p className="mt-6 text-sm leading-7 text-stone-600 dark:text-stone-300">
                “{testimonial.text}”
              </p>

              <div className="mt-7">
                <p className="font-bold">{testimonial.name}</p>
                <p className="mt-1 text-xs text-stone-400">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="mx-5 mb-20 overflow-hidden rounded-3xl bg-amber-500 lg:mx-auto lg:max-w-7xl"
      >
        <div className="relative px-6 py-16 text-center sm:px-12 lg:py-20">
          <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-white/10" />
          <div className="absolute -bottom-24 -right-10 h-64 w-64 rounded-full bg-black/10" />

          <h2 className="relative text-4xl font-black tracking-tight text-white sm:text-5xl">
            Ready to run a better restaurant?
          </h2>

          <p className="relative mx-auto mt-5 max-w-xl text-sm leading-6 text-amber-50">
            Bring your restaurant operations together with DineFlow and give
            your team the tools to deliver better service.
          </p>

          <Link to="/login" className="relative mt-8 inline-block">
            <Button
              variant="dark"
              className="flex items-center gap-2"
            >
              Get Started
              <ArrowRight size={17} />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
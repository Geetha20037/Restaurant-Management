import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import Button from "./Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "Solutions", href: "#solutions" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-stone-200/70 bg-white/85 backdrop-blur-xl dark:border-stone-800/70 dark:bg-stone-950/85">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-xl text-white shadow-lg shadow-amber-500/20">
            🍽️
          </div>

          <div>
            <div className="text-xl font-black tracking-tight text-stone-900 dark:text-white">
              DineFlow
            </div>
            <div className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-stone-500 sm:block">
              Restaurant Management
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-stone-600 transition-colors hover:text-amber-500 dark:text-stone-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />

          <Link to="/login">
            <Button variant="ghost">Sign In</Button>
          </Link>

          <Link to="/login">
            <Button>Get Started</Button>
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-stone-200 text-stone-700 dark:border-stone-700 dark:text-stone-200 md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-stone-200 bg-white px-5 py-5 dark:border-stone-800 dark:bg-stone-950 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-sm font-medium text-stone-700 dark:text-stone-200"
                >
                  {link.label}
                </a>
              ))}

              <div className="flex items-center gap-3 pt-2">
                <ThemeToggle />

                <Link to="/login" className="flex-1">
                  <Button className="w-full">Get Started</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
import { motion } from "framer-motion";

export default function Button({
  children,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
}) {
  const variants = {
    primary:
      "bg-amber-500 text-white hover:bg-amber-600 shadow-lg shadow-amber-500/20",
    secondary:
      "border border-stone-300 bg-white text-stone-800 hover:bg-stone-50 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100 dark:hover:bg-stone-800",
    dark: "bg-stone-900 text-white hover:bg-stone-800 dark:bg-white dark:text-stone-900 dark:hover:bg-stone-100",
    ghost:
      "text-stone-600 hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-800",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
}
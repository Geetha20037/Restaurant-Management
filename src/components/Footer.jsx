const socialLinks = [
  {
    name: "Facebook",
    icon: "f",
  },
  {
    name: "Instagram",
    icon: "◎",
  },
  {
    name: "Twitter",
    icon: "𝕏",
  },
  {
    name: "LinkedIn",
    icon: "in",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-xl shadow-lg shadow-amber-500/20">
                🍽️
              </div>

              <span className="text-2xl font-bold text-stone-900 dark:text-white">
                Dine<span className="text-amber-500">Flow</span>
              </span>
            </div>

            <p className="max-w-md text-sm leading-7 text-stone-500 dark:text-slate-400">
              Simplify your restaurant operations, delight your guests, and
              grow your business with one powerful platform.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <button
                  key={social.name}
                  type="button"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-white text-sm font-bold text-stone-600 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500 hover:bg-amber-500 hover:text-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-amber-500 dark:hover:bg-amber-500"
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-stone-900 dark:text-white">
              Platform
            </h3>

            <ul className="space-y-3 text-sm text-stone-500 dark:text-slate-400">
              <li>
                <a
                  href="#features"
                  className="transition-colors hover:text-amber-500"
                >
                  Features
                </a>
              </li>

              <li>
                <a
                  href="#solutions"
                  className="transition-colors hover:text-amber-500"
                >
                  Solutions
                </a>
              </li>

              <li>
                <a
                  href="#testimonials"
                  className="transition-colors hover:text-amber-500"
                >
                  Testimonials
                </a>
              </li>

              <li>
                <a
                  href="#pricing"
                  className="transition-colors hover:text-amber-500"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-stone-900 dark:text-white">
              Company
            </h3>

            <ul className="space-y-3 text-sm text-stone-500 dark:text-slate-400">
              <li>
                <a
                  href="#about"
                  className="transition-colors hover:text-amber-500"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="transition-colors hover:text-amber-500"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#privacy"
                  className="transition-colors hover:text-amber-500"
                >
                  Privacy
                </a>
              </li>

              <li>
                <a
                  href="#terms"
                  className="transition-colors hover:text-amber-500"
                >
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-3 border-t border-stone-200 pt-6 text-sm text-stone-500 dark:border-slate-800 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 DineFlow. All rights reserved.</p>

          <p>
            Built for modern restaurants{" "}
            <span className="text-amber-500">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
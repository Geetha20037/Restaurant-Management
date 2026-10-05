import { motion } from "framer-motion";
import { ArrowRight, ChefHat, CircleDot, Utensils } from "lucide-react";

const tables = [
  { id: 1, x: "18%", y: "24%", delay: 0.1 },
  { id: 2, x: "38%", y: "24%", delay: 0.25 },
  { id: 3, x: "62%", y: "24%", delay: 0.4 },
  { id: 4, x: "82%", y: "24%", delay: 0.55 },
  { id: 5, x: "18%", y: "72%", delay: 0.7 },
  { id: 6, x: "38%", y: "72%", delay: 0.85 },
  { id: 7, x: "62%", y: "72%", delay: 1 },
  { id: 8, x: "82%", y: "72%", delay: 1.15 },
];

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center overflow-hidden bg-[#08090b] text-white">
      {/* Ambient background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            opacity: [0.12, 0.22, 0.12],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/20 blur-[120px]"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,140,50,0.06)_0%,transparent_55%)]" />

        {/* Tiny ambient particles */}
        {Array.from({ length: 18 }).map((_, index) => (
          <motion.span
            key={index}
            initial={{
              opacity: 0,
              y: Math.random() * 80 - 40,
            }}
            animate={{
              opacity: [0, 0.45, 0],
              y: [
                Math.random() * 80 - 40,
                Math.random() * 80 - 100,
              ],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute h-1 w-1 rounded-full bg-orange-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center px-6">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-10 text-center"
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10">
              <Utensils
                size={19}
                className="text-orange-400"
                strokeWidth={1.7}
              />
            </div>

            <h1 className="text-2xl font-semibold tracking-[-0.03em]">
              Dine<span className="text-orange-400">Flow</span>
            </h1>
          </div>

          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
            Restaurant Intelligence
          </p>
        </motion.div>

        {/* Restaurant floor */}
        <div className="relative h-[300px] w-full max-w-[720px] overflow-hidden rounded-[28px] border border-white/[0.07] bg-[#0d0f12] shadow-2xl shadow-black/40">
          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />

          {/* Kitchen zone */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="absolute left-5 top-5 flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.035] px-3 py-2"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-500/10">
              <ChefHat size={15} className="text-orange-400" />
            </div>

            <div>
              <p className="text-[9px] font-medium uppercase tracking-wider text-zinc-500">
                Kitchen
              </p>
              <p className="text-[10px] text-zinc-300">Processing</p>
            </div>
          </motion.div>

          {/* Service zone */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute right-5 top-5 flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.035] px-3 py-2"
          >
            <CircleDot size={15} className="text-orange-400" />

            <div>
              <p className="text-[9px] font-medium uppercase tracking-wider text-zinc-500">
                Service
              </p>
              <p className="text-[10px] text-zinc-300">Live</p>
            </div>
          </motion.div>

          {/* Flow path */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 720 300"
            fill="none"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M75 74 C170 130, 210 165, 310 150 C410 135, 465 105, 545 145 C600 172, 625 210, 650 235"
              stroke="rgba(249,115,22,0.18)"
              strokeWidth="2"
              strokeDasharray="6 9"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 1.8,
                ease: "easeInOut",
              }}
            />

            <motion.path
              d="M75 74 C170 130, 210 165, 310 150 C410 135, 465 105, 545 145 C600 172, 625 210, 650 235"
              stroke="url(#flowGradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="28 80"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: -108 }}
              transition={{
                duration: 1.7,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <defs>
              <linearGradient
                id="flowGradient"
                x1="0"
                y1="0"
                x2="1"
                y2="0"
              >
                <stop offset="0" stopColor="#fb923c" stopOpacity="0" />
                <stop offset="0.5" stopColor="#fb923c" />
                <stop offset="1" stopColor="#f97316" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* Tables */}
          {tables.map((table) => (
            <motion.div
              key={table.id}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{
                opacity: 1,
                scale: [1, 1.04, 1],
              }}
              transition={{
                opacity: {
                  delay: table.delay,
                  duration: 0.4,
                },
                scale: {
                  delay: table.delay + 0.7,
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="absolute"
              style={{
                left: table.x,
                top: table.y,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.1] bg-[#14171b]">
                <div className="h-3 w-3 rounded-full border border-orange-400/60 bg-orange-400/10" />

                <motion.div
                  animate={{
                    scale: [1, 1.8],
                    opacity: [0.35, 0],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    delay: table.delay,
                  }}
                  className="absolute inset-0 rounded-full border border-orange-400/30"
                />
              </div>

              <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[8px] text-zinc-600">
                T{table.id}
              </span>
            </motion.div>
          ))}

          {/* Central DineFlow signal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.8,
              duration: 0.7,
              type: "spring",
            }}
            className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
          >
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-28 w-28 rounded-full border border-dashed border-orange-500/20"
            />

            <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-orange-500/30 bg-[#111316] shadow-[0_0_60px_rgba(249,115,22,0.12)]">
              <div className="text-center">
                <div className="text-[8px] uppercase tracking-[0.25em] text-zinc-600">
                  Flow
                </div>

                <div className="mt-1 text-sm font-semibold text-orange-400">
                  LIVE
                </div>
              </div>
            </div>
          </motion.div>

          {/* Flowing order particle */}
          <motion.div
            animate={{
              left: ["10%", "30%", "52%", "72%", "90%"],
              top: ["25%", "48%", "50%", "44%", "76%"],
              opacity: [0, 1, 1, 1, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute h-2 w-2 rounded-full bg-orange-300 shadow-[0_0_15px_rgba(251,146,60,0.9)]"
          />
        </div>

        {/* Status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-8 flex items-center gap-3"
        >
          <div className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-400" />
          </div>

          <span className="text-xs text-zinc-500">
            Connecting your restaurant operations
          </span>

          <ArrowRight size={13} className="text-zinc-700" />
        </motion.div>

        {/* Progress line */}
        <div className="mt-5 h-[2px] w-48 overflow-hidden rounded-full bg-white/[0.06]">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2.8,
              ease: "easeInOut",
            }}
            className="h-full bg-gradient-to-r from-orange-600 via-orange-400 to-amber-300"
          />
        </div>

        <p className="mt-4 text-[9px] uppercase tracking-[0.35em] text-zinc-700">
          Simplify. Serve. Grow.
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
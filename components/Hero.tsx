"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="text-center py-24">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold"
      >
        Hi, I&apos;m Apurv 👋
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-4 text-gray-400"
      >
        Frontend Developer (React | Vue | Next.js)
      </motion.p>

      <motion.a
        href="/contact"
        whileHover={{ scale: 1.1 }}
        className="inline-block mt-6 px-6 py-3 bg-indigo-500 rounded-xl"
      >
        Hire Me 🚀
      </motion.a>
    </section>
  );
}
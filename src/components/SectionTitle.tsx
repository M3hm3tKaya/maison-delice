"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionTitle({ title, subtitle, light = false }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="text-center mb-12"
    >
      <h2
        className={`font-[family-name:var(--font-playfair-display)] text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 ${
          light ? "text-warm-white" : "text-dark-brown"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base sm:text-lg max-w-2xl mx-auto ${
            light ? "text-warm-white/70" : "text-dark-brown/60"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div className="flex items-center justify-center gap-3 mt-6">
        <span className={`w-12 h-px ${light ? "bg-sand" : "bg-sand"}`} />
        <svg className="w-4 h-4 text-sand" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
        <span className={`w-12 h-px ${light ? "bg-sand" : "bg-sand"}`} />
      </div>
    </motion.div>
  );
}

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Emily R.",
    text: "Photosnap exceeded our expectations. The photos were timeless and the experience was smooth.",
  },
  {
    name: "Michael T.",
    text: "Highly professional photographers and great customer service. I will use them again.",
  },
  {
    name: "Sarah L.",
    text: "The photos perfectly captured our corporate event’s atmosphere and energy.",
  },
];

export default function Testimonials() {
  return (
    <motion.section
      className="max-w-7xl mx-auto px-6 py-20 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <h1 className="text-4xl font-extrabold mb-12 text-gray-900 dark:text-white text-center">
        Testimonials
      </h1>
      <div className="max-w-4xl mx-auto space-y-10">
        {testimonials.map(({ name, text }) => (
          <blockquote
            key={name}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
          >
            <p className="italic text-gray-800 dark:text-gray-300 mb-4">“{text}”</p>
            <footer className="text-right font-semibold text-gray-700 dark:text-gray-400">
              - {name}
            </footer>
          </blockquote>
        ))}
      </div>
    </motion.section>
  );
}

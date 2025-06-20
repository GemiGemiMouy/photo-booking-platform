// src/pages/About.jsx
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="bg-white dark:bg-gray-900 py-20 px-6 transition-colors duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=900&q=80"
          alt="Photographer with camera"
          className="rounded-xl shadow-lg"
        />
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            About Us
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed">
            Photosnap is dedicated to connecting you with professional photographers
            for all your special moments. Whether it’s weddings, portraits, or
            events, our photographers bring years of experience and artistic vision
            to your sessions.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

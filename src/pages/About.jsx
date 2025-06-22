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
          src="https://plus.unsplash.com/premium_photo-1698362819146-bb3233129fda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWJvdXQlMjBib29raW5nJTIwcGhvdG98ZW58MHx8MHx8fDA%3D"
          alt="Photographer with camera"
          className="rounded-xl shadow-lg"
        />
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            About Us
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed">
            GemiBook is dedicated to connecting you with professional photographers
            for all your special moments. Whether it’s weddings, portraits, or
            events, our photographers bring years of experience and artistic vision
            to your sessions.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

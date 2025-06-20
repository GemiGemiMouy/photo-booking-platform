import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col-reverse md:flex-row items-center gap-12">
        <motion.div
          className="md:w-1/2 max-w-lg text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Capture your moments,
            <br />
            with professionalism.
          </h1>
          <p className="mt-6 text-gray-600 dark:text-gray-300 text-lg max-w-md">
            Book professional photographers with ease and confidence. We connect
            you to the best.
          </p>
          <Link
            to="/booking"
            className="inline-block mt-10 px-8 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-semibold rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition"
          >
            Book a Session
          </Link>
        </motion.div>
        <motion.div
          className="md:w-1/2 rounded-lg overflow-hidden shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80"
            alt="Professional Photographer"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}

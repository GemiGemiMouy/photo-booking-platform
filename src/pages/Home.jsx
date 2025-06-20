import React, { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import FeatureCard from "../components/FeatureCard";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    title: "Experienced Photographers",
    description:
      "We connect you with the most experienced photographers in your area who understand your vision.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Easy Booking Process",
    description:
      "Our intuitive booking system makes scheduling your session fast and hassle-free.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Quality Assurance",
    description:
      "Every photographer is vetted to ensure your photos meet the highest standards.",
    img: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80",
  },
];

const services = [
  {
    title: "Wedding Photography",
    description: "Capture the magic of your special day with our expert photographers.",
    img: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Portrait Sessions",
    description: "Professional portraits that showcase your personality and style.",
    img: "https://images.unsplash.com/photo-1567187979900-65e3b7b050a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFBvcnRyYWl0JTIwU2Vzc2lvbnN8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Event Coverage",
    description: "Comprehensive coverage for birthdays, corporate events, and more.",
    img: "https://images.unsplash.com/photo-1599968125179-0b70eda83533?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEV2ZW50JTIwQ292ZXJhZ2V8ZW58MHx8MHx8fDA%3D",
  },
];

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Anna K.",
      quote: "The GemiBook team captured our wedding beautifully. Highly recommended!",
    },
    {
      id: 2,
      name: "Michael D.",
      quote: "Professional and friendly photographers. Loved my portrait session.",
    },
    {
      id: 3,
      name: "Sophia L.",
      quote: "Event photos were amazing and perfectly timed. Great experience overall.",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section
      className="bg-gray-50 dark:bg-gray-900 dark:border dark:border-gray-700 rounded-xl shadow-lg dark:shadow-[0_6px_15px_rgba(255,255,255,0.1)] py-16 px-6 max-w-4xl mx-auto my-20"
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      custom={0}
    >
      <motion.h2
        className="text-2xl sm:text-3xl font-semibold mb-8 text-center text-gray-900 dark:text-gray-100"
        variants={fadeUp}
        custom={1}
      >
        Testimonials
      </motion.h2>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={testimonials[index].id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center px-4 sm:px-0"
        >
          <p className="italic text-base sm:text-lg mb-4 text-gray-700 dark:text-gray-300">
            "{testimonials[index].quote}"
          </p>
          <p className="font-semibold text-purple-600 dark:text-purple-400 text-sm sm:text-base">
            — {testimonials[index].name}
          </p>
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
}

function CallToAction() {
  return (
    <motion.section
      className="bg-purple-700 dark:bg-purple-900 text-white rounded-xl shadow-lg dark:shadow-[0_6px_15px_rgba(0,0,0,0.7)] py-12 px-6 max-w-7xl mx-auto text-center my-20"
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      custom={0}
    >
      <motion.h2
        className="text-2xl sm:text-3xl font-bold mb-4"
        variants={fadeUp}
        custom={1}
      >
        Ready to Capture Your Moment?
      </motion.h2>
      <motion.p
        className="mb-6 max-w-2xl mx-auto text-sm sm:text-base"
        variants={fadeUp}
        custom={2}
      >
        Book your session today and create memories that last a lifetime.
      </motion.p>
      <motion.a
        href="/booking"
        className="inline-block bg-white text-purple-700 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition cursor-pointer text-sm sm:text-base"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        variants={fadeUp}
        custom={3}
      >
        Book Now
      </motion.a>
    </motion.section>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for newsletter integration
    setSubmitted(true);
  };

  return (
    <motion.section
      className="bg-gray-100 dark:bg-gray-800 py-16 px-6 rounded-xl max-w-4xl mx-auto my-20"
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      custom={0}
    >
      <motion.h2
        className="text-2xl sm:text-3xl font-semibold mb-4 text-center text-gray-900 dark:text-white"
        variants={fadeUp}
        custom={1}
      >
        Stay Updated
      </motion.h2>
      <motion.p
        className="mb-6 text-center text-gray-700 dark:text-gray-300 max-w-xl mx-auto text-sm sm:text-base"
        variants={fadeUp}
        custom={2}
      >
        Subscribe to our newsletter for the latest updates and special offers.
      </motion.p>
      {submitted ? (
        <motion.p
          className="text-center text-green-600 dark:text-green-400 font-semibold text-base sm:text-lg"
          variants={fadeUp}
          custom={3}
        >
          Thank you for subscribing!
        </motion.p>
      ) : (
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row max-w-md mx-auto gap-4"
          variants={fadeUp}
          custom={3}
        >
          <input
            type="email"
            required
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow p-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm sm:text-base"
          />
          <motion.button
            type="submit"
            className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Subscribe
          </motion.button>
        </motion.form>
      )}
    </motion.section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />

      <motion.section
        className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20 text-gray-700 dark:text-gray-300"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        custom={0}
      >
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 text-gray-900 dark:text-white text-center"
          variants={fadeUp}
          custom={1}
        >
          Why Choose Photosnap
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10"
          variants={fadeUp}
          custom={2}
        >
          {features.map(({ title, description, img }) => (
            <motion.div
              key={title}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer"
            >
              <FeatureCard title={title} description={description} img={img} />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        custom={3}
      >
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 text-gray-900 dark:text-white text-center"
          variants={fadeUp}
          custom={4}
        >
          Our Services
        </motion.h2>
        <motion.p
          className="max-w-3xl mx-auto leading-relaxed text-center mb-12 text-sm sm:text-base md:text-lg"
          variants={fadeUp}
          custom={5}
        >
          We offer a variety of photography services tailored to your needs,
          ensuring every moment is beautifully captured.
        </motion.p>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10"
          variants={fadeUp}
          custom={6}
        >
          {services.map(({ title, description, img }) => (
            <motion.div
              key={title}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer"
            >
              <FeatureCard title={title} description={description} img={img} />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <Testimonials />
      <CallToAction />
      <Newsletter />
    </>
  );
}

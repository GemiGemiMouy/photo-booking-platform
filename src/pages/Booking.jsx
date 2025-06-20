import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const availableDates = [
  new Date(2025, 5, 20),
  new Date(2025, 5, 21),
  new Date(2025, 5, 23),
  new Date(2025, 5, 24),
  new Date(2025, 5, 26),
];

const services = [
  { id: 1, name: "Wedding Photography" },
  { id: 2, name: "Portrait Session" },
  { id: 3, name: "Event Coverage" },
  { id: 4, name: "Newborn Photography" },
  { id: 5, name: "Product Photography" },
  { id: 6, name: "Corporate Headshots" },
];

const timeSlots = {
  morning: ["08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM"],
  afternoon: ["12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"],
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const totalSteps = 5;

export default function Booking() {
  const [step, setStep] = useState(1);

  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();

  // Disable weekends (Sat, Sun)
  function disableUnavailableDates(date) {
    const day = date.getDay();
    return day === 0 || day === 6;
  }

  const progressPercent = ((step - 1) / (totalSteps - 1)) * 100;

  const handleNext = () => {
    if (step === 1 && !selectedService) {
      alert("Please select a service.");
      return;
    }
    if (step === 2 && !selectedDate) {
      alert("Please select a date.");
      return;
    }
    if (step === 3 && !selectedTime) {
      alert("Please select a time.");
      return;
    }
    if (
      step === 4 &&
      (!formData.fullName || !formData.email || !formData.phone)
    ) {
      alert("Please fill in all your personal information.");
      return;
    }
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit booking logic here
    navigate("/thank-you");
  };

  // Optional: Step labels for showing above progress bar
  const stepLabels = [
    "Select Service",
    "Select Date",
    "Select Time",
    "Your Info",
    "Confirm",
  ];

  return (
    <motion.div
      className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg mt-20 mb-20"
      initial="hidden"
      animate="visible"
      variants={fadeUp}
    >
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white text-center">
        Book Your Photography Session
      </h1>

      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-1 text-sm text-gray-600 dark:text-gray-400 font-medium">
          <span>{`Step ${step} of ${totalSteps}`}</span>
          <span>{stepLabels[step - 1]}</span>
        </div>
        <div className="w-full h-3 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-3 bg-purple-600 rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Step 1 - Select Service */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <label
              htmlFor="service"
              className="block mb-2 font-semibold text-gray-700 dark:text-gray-300"
            >
              Select Service
            </label>
            <select
              id="service"
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              required
            >
              <option value="" disabled>
                -- Choose a Service --
              </option>
              {services.map((service) => (
                <option key={service.id} value={service.name}>
                  {service.name}
                </option>
              ))}
            </select>
          </motion.div>
        )}

        {/* Step 2 - Select Date */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300 text-center">
              Select Date
            </label>
            <div className="flex justify-center overflow-auto">
              <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={disableUnavailableDates}
                modifiersClassNames={{
                  selected: "bg-purple-600 text-white",
                  disabled: "opacity-30 cursor-not-allowed",
                }}
                modifiersStyles={{
                  selected: { fontWeight: "bold" },
                }}
                className="rounded-md"
                fromMonth={new Date()}
                toMonth={new Date()}
                pagedNavigation
              />
            </div>
          </motion.div>
        )}

        {/* Step 3 - Select Time */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
              Available Times on{" "}
              <span className="text-purple-600">
                {selectedDate
                  ? selectedDate.toLocaleDateString(undefined, {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                    })
                  : ""}
              </span>
            </h3>

            <div className="flex flex-col sm:flex-row justify-center gap-12">
              {/* Morning */}
              <div className="flex-1">
                <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2 mb-3 justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m8.485-7.485h1M3 12H2m16.485 4.485l.707.707M6.343 6.343l-.707-.707m12.728 12.728l-.707-.707M6.343 17.657l-.707.707"
                    />
                  </svg>
                  Morning
                </h4>
                <div className="flex flex-wrap gap-3 justify-center">
                  {timeSlots.morning.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`px-4 py-2 rounded-lg border transition focus:outline-none w-full sm:w-auto text-center ${
                        selectedTime === time
                          ? "bg-purple-600 border-purple-600 text-white shadow-lg"
                          : "bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 hover:bg-purple-200 dark:hover:bg-purple-700"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Afternoon */}
              <div className="flex-1">
                <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2 mb-3 justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-orange-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13 21.314l-4.657-4.657m0 0L5 19l1.343-3.657m10.314-1.343a9 9 0 11-12.728-12.728 9 9 0 0112.728 12.728z"
                    />
                  </svg>
                  Afternoon
                </h4>
                <div className="flex flex-wrap gap-3 justify-center">
                  {timeSlots.afternoon.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`px-4 py-2 rounded-lg border transition focus:outline-none w-full sm:w-auto text-center ${
                        selectedTime === time
                          ? "bg-purple-600 border-purple-600 text-white shadow-lg"
                          : "bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 hover:bg-purple-200 dark:hover:bg-purple-700"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 4 - Personal Info */}
        {step === 4 && (
          <motion.div
            key="step4"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block mb-2 font-semibold text-gray-700 dark:text-gray-300"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  required
                  className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 font-semibold text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  placeholder="Your email address"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 font-semibold text-gray-700 dark:text-gray-300"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  placeholder="Your phone number"
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 5 - Summary & Confirm */}
        {step === 5 && (
          <motion.div
            key="step5"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white text-center">
              Review & Confirm Your Booking
            </h3>
            <ul className="space-y-3 text-gray-800 dark:text-gray-200">
              <li>
                <strong>Service:</strong> {selectedService}
              </li>
              <li>
                <strong>Date:</strong>{" "}
                {selectedDate
                  ? selectedDate.toLocaleDateString(undefined, {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : ""}
              </li>
              <li>
                <strong>Time:</strong> {selectedTime}
              </li>
              <li>
                <strong>Name:</strong> {formData.fullName}
              </li>
              <li>
                <strong>Email:</strong> {formData.email}
              </li>
              <li>
                <strong>Phone:</strong> {formData.phone}
              </li>
            </ul>
          </motion.div>
        )}

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row justify-between mt-8 gap-4">
          {step > 1 && (
            <button
              type="button"
              onClick={handleBack}
              className="w-full sm:w-auto px-6 py-3 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md font-semibold hover:bg-gray-400 dark:hover:bg-gray-600 transition"
            >
              Back
            </button>
          )}
          {step < totalSteps && (
            <button
              type="button"
              onClick={handleNext}
              className="w-full sm:w-auto ml-auto px-6 py-3 bg-purple-600 text-white rounded-md font-semibold hover:bg-purple-700 transition"
            >
              Next
            </button>
          )}
          {step === totalSteps && (
            <button
              type="submit"
              className="w-full sm:w-auto ml-auto px-6 py-3 bg-green-600 text-white rounded-md font-semibold hover:bg-green-700 transition"
            >
              Confirm Booking
            </button>
          )}
        </div>
      </form>
    </motion.div>
  );
}

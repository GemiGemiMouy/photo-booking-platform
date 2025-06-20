// 🎉 src/pages/ThankYou.jsx
export default function ThankYou() {
  return (
    <section className="flex items-center justify-center h-[70vh] px-6 text-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
          Thank You for Booking!
        </h2>
        <p className="text-neutral-600 mb-6 max-w-md mx-auto">
          We’ve received your request and will get back to you shortly. Check your email for confirmation.
        </p>
        <a
          href="/"
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-xl font-medium"
        >
          Back to Home
        </a>
      </div>
    </section>
  );
}

export default function FeatureCard({ title, description, img }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-[0_6px_15px_rgba(255,255,255,0.1)] border border-gray-200 dark:border-gray-600 overflow-hidden flex flex-col h-full">
      <img
        src={img}
        alt={title}
        className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-t-xl"
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 flex-grow text-sm sm:text-base md:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}

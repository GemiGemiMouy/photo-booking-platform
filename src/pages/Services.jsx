import { motion } from "framer-motion";

const serviceList = [
  {
    id: 1,
    title: "Wedding Photography",
    description:
      "Capture your special day with timeless photos by our expert photographers.",
    img: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D", // Wedding couple
  },
  {
    id: 2,
    title: "Portrait Sessions",
    description:
      "Personalized portrait sessions for individuals, couples, or families.",
    img: "https://images.unsplash.com/photo-1574622522998-d1e672e81e46?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFBvcnRyYWl0JTIwU2Vzc2lvbnN8ZW58MHx8MHx8fDA%3D", // Portrait
  },
  {
    id: 3,
    title: "Event Coverage",
    description: "Professional coverage for birthdays, corporate events, and more.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80", // Event crowd
  },
  {
    id: 4,
    title: "Commercial Shoots",
    description: "Creative photography to showcase your products or business.",
    img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=600&q=80", // Commercial shoot studio
  },
  {
    id: 5,
    title: "Product Photography",
    description:
      "High-quality images to highlight your products for e-commerce and catalogs.",
    img: "https://images.unsplash.com/photo-1615900119312-2acd3a71f3aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFByb2R1Y3QlMjBQaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D", // Product shoot
  },
  {
    id: 6,
    title: "Fashion Photography",
    description:
      "Stylish and trendy photo shoots to promote clothing and accessories.",
    img: "https://images.unsplash.com/photo-1496180727794-817822f65950?auto=format&fit=crop&w=600&q=80", // Fashion model
  },
  {
    id: 7,
    title: "Real Estate Photography",
    description:
      "Professional photos that make your property listings stand out.",
    img: "https://plus.unsplash.com/premium_photo-1661883982941-50af7720a6ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFJlYWwlMjBFc3RhdGUlMjBQaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D", // House exterior
  },
  {
    id: 8,
    title: "Travel Photography",
    description:
      "Capture stunning landscapes and cultural moments during your travels.",
    img: "https://media.istockphoto.com/id/929516304/photo/woman-at-the-beach-photographing-the-sunset.webp?a=1&b=1&s=612x612&w=0&k=20&c=L1T77HPJUrOuEvHWj-4_yPbxLmSt6_Ve90Ffce0G2Ho=", // Landscape travel
  },
  {
    id: 9,
    title: "Family Photography",
    description:
      "Heartfelt portraits and candid moments with your loved ones.",
    img: "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFtaWx5fGVufDB8fDB8fHww", // Family together
  },
  {
    id: 10,
    title: "Newborn Photography",
    description:
      "Delicate and precious newborn photo sessions to cherish forever.",
    img:"https://images.unsplash.com/photo-1594299590683-6d6ab3e14c53?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5ld2Jvcm58ZW58MHx8MHx8fDA%3D", // Newborn baby
  },
];

export default function Services() {
  return (
    <motion.section
      className="bg-white dark:bg-gray-900 py-20 px-6 transition-colors duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-12 text-center">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {serviceList.map(({ id, title, description, img }) => (
            <div
              key={id}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow cursor-default flex flex-col md:flex-row items-center gap-6"
            >
              <img
                src={img}
                alt={title}
                className="w-full md:w-40 h-32 object-cover rounded-lg flex-shrink-0"
                loading="lazy"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

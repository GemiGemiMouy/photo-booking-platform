import { useEffect } from "react";

export default function Toast({ message, onClose }) {
  useEffect(() => {
    const timeout = setTimeout(() => onClose(), 3000);
    return () => clearTimeout(timeout);
  }, [onClose]);

  return (
    <div className="fixed bottom-6 right-6 bg-primary text-white px-6 py-3 rounded shadow-lg animate-fade-in font-sans select-none">
      {message}
    </div>
  );
}

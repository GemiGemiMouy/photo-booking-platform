// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-8 px-6 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-sm">&copy; {new Date().getFullYear()} GemiBook. All rights reserved.</p>
        <div className="flex space-x-6">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/__gemi_mouy_"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-500 transition"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/GemiGemiMouy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-900 dark:hover:text-white transition"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.48v-1.7c-2.78.62-3.37-1.38-3.37-1.38-.45-1.17-1.1-1.48-1.1-1.48-.91-.64.07-.63.07-.63 1.01.07 1.55 1.06 1.55 1.06.89 1.57 2.34 1.12 2.91.85.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.15-4.56-5.12 0-1.13.39-2.06 1.02-2.79-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.03A9.35 9.35 0 0112 6.58c.85.004 1.71.11 2.51.32 1.91-1.3 2.75-1.03 2.75-1.03.56 1.4.21 2.44.1 2.7.63.73 1.02 1.66 1.02 2.79 0 3.98-2.34 4.85-4.57 5.11.36.31.68.91.68 1.84v2.73c0 .26.18.58.69.48A10.04 10.04 0 0022 12.26C22 6.58 17.52 2 12 2z" />
            </svg>
          </a>

          {/* Facebook */}
         {/* <a
            href="https://web.facebook.com/seakmouy.seng.7"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-600 transition"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.596 0 0 .594 0 1.326v21.348C0 23.405.596 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.41c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.404 24 24 23.405 24 22.674V1.326C24 .594 23.404 0 22.675 0z" />
            </svg>
          </a>
          */}

          {/* Telegram */}
          <a
            href="https://t.me/Seakmouy_Seng"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="hover:text-sky-500 transition"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M9.987 15.488l-.395 5.57c.567 0 .814-.243 1.118-.535l2.675-2.553 5.538 4.05c1.016.561 1.743.266 2.004-.89l3.633-16.788c.322-1.492-.567-2.074-1.55-1.74L1.383 9.243c-1.455.567-1.438 1.368-.264 1.731l5.807 1.83 13.492-8.47c.635-.394 1.218-.18.74.213L9.987 15.488z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

import { useEffect, useState } from 'react';

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href="http://wa.me/556293252626"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebe57] text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 group ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      aria-label="Contato via WhatsApp"
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-pulse group-hover:animate-none"
      >
        <path
          d="M16 0C7.164 0 0 7.164 0 16C0 18.832 0.768 21.488 2.092 23.784L0 32L8.452 29.956C10.676 31.168 13.252 31.86 16 31.86C24.836 31.86 32 24.696 32 15.86C32 7.024 24.836 0 16 0Z"
          fill="currentColor"
        ></path>
        <path
          d="M25.292 22.736C24.948 23.816 23.308 24.732 22.036 25.036C21.144 25.24 20.004 25.408 16.432 23.836C11.824 21.828 8.8 17.056 8.568 16.748C8.348 16.44 6.696 14.208 6.696 11.904C6.696 9.6 7.856 8.476 8.288 8.032C8.632 7.676 9.184 7.528 9.712 7.528C9.876 7.528 10.024 7.536 10.156 7.544C10.588 7.56 10.804 7.584 11.084 8.248C11.428 9.052 12.288 11.356 12.396 11.572C12.508 11.788 12.62 12.072 12.48 12.38C12.352 12.7 12.224 12.836 11.992 13.108C11.76 13.38 11.54 13.584 11.308 13.876C11.092 14.132 10.852 14.404 11.116 14.848C11.38 15.28 12.276 16.708 13.58 17.852C15.256 19.316 16.648 19.82 17.14 20.036C17.484 20.188 17.912 20.156 18.188 19.864C18.528 19.496 19.012 18.828 19.508 18.172C19.868 17.696 20.308 17.636 20.74 17.788C21.18 17.928 23.476 19.056 23.908 19.272C24.34 19.488 24.636 19.588 24.748 19.776C24.86 19.964 24.86 20.768 24.516 21.712C24.172 22.656 22.532 23.572 21.26 23.876L25.292 22.736Z"
          fill="white"
        ></path>
      </svg>
      <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-[#25D366] text-white px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold shadow-lg">
        Fale Conosco
      </span>
    </a>
  );
}

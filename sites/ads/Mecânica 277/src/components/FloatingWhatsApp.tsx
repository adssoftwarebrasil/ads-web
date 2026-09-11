import { useEffect, useState } from 'react';

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href="http://wa.me/5545998527494"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      aria-label="Contato via WhatsApp"
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M27.281 4.65C24.318 1.686 20.386 0.065 16.236 0.063C7.638 0.063 0.655 7.045 0.652 15.643C0.651 18.391 1.354 21.067 2.693 23.435L0.528 31.937L9.237 29.808C11.515 31.033 14.056 31.676 16.642 31.677H16.649C25.247 31.677 32.229 24.694 32.232 16.096C32.233 11.945 30.613 8.014 27.65 5.051L27.281 4.65ZM16.236 29.015H16.231C13.928 29.014 11.665 28.397 9.686 27.231L9.227 26.968L4.016 28.205L5.274 23.106L4.987 22.632C3.701 20.577 3.023 18.229 3.024 15.827C3.027 8.356 9.015 2.368 16.243 2.368C19.759 2.369 23.069 3.712 25.581 6.224C28.093 8.735 29.435 12.046 29.434 15.562C29.431 23.033 23.443 29.015 16.236 29.015ZM23.408 19.111C23.018 18.915 21.038 17.946 20.683 17.818C20.328 17.691 20.069 17.627 19.81 18.018C19.551 18.408 18.783 19.306 18.555 19.565C18.328 19.824 18.101 19.858 17.711 19.662C17.321 19.466 16.067 19.055 14.597 17.738C13.454 16.71 12.682 15.447 12.455 15.057C12.228 14.667 12.431 14.457 12.627 14.262C12.804 14.085 13.018 13.804 13.214 13.577C13.41 13.35 13.474 13.188 13.601 12.929C13.729 12.67 13.665 12.443 13.567 12.247C13.469 12.051 12.7 10.07 12.38 9.29C12.067 8.53 11.75 8.641 11.514 8.629C11.288 8.618 11.029 8.616 10.77 8.616C10.511 8.616 10.087 8.714 9.732 9.104C9.377 9.494 8.341 10.463 8.341 12.444C8.341 14.425 9.767 16.339 9.963 16.598C10.159 16.857 12.679 20.863 16.554 22.605C17.453 22.999 18.155 23.237 18.702 23.416C19.604 23.707 20.424 23.666 21.071 23.566C21.797 23.455 23.408 22.639 23.728 21.738C24.048 20.837 24.048 20.069 23.95 19.905C23.852 19.741 23.593 19.643 23.203 19.447L23.408 19.111Z"
          fill="white"
        />
      </svg>
      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
        1
      </span>
    </a>
  );
}

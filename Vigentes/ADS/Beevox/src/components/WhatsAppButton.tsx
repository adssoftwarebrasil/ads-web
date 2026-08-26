import { useState, useEffect } from 'react';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <a
      href="http://wa.me/5565999818250"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
      aria-label="Fale conosco pelo WhatsApp"
    >
      <div className="relative group">
        <div className="absolute inset-0 bg-green-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity animate-pulse"></div>
        <div className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all group-hover:scale-110 flex items-center justify-center">
          <svg
            viewBox="0 0 32 32"
            className="w-8 h-8"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 0C7.164 0 0 7.164 0 16c0 2.828.738 5.482 2.024 7.792L0 32l8.396-2.176A15.938 15.938 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm8.852 22.656c-.368.996-2.176 1.86-2.976 1.96-.796.1-1.548.368-5.212-.916-4.696-1.648-7.708-6.372-7.94-6.664-.232-.292-1.896-2.524-1.896-4.812s1.196-3.416 1.62-3.88c.424-.464.928-.58 1.236-.58.308 0 .616.004.884.016.284.012.664-.108.996.76.332.868 1.132 2.764 1.232 2.964.1.2.168.432.032.724-.136.292-.204.476-.404.732-.2.256-.42.572-.6.768-.2.216-.408.448-.176.88.232.432 1.032 1.704 2.22 2.76 1.528 1.356 2.812 1.78 3.216 1.98.404.2.64.168.88-.1.24-.268 1.028-1.2 1.3-1.616.272-.416.544-.348.916-.208.372.14 2.368 1.116 2.772 1.32.404.204.672.304.772.472.1.168.1.964-.268 1.96z" />
          </svg>
        </div>
      </div>
    </a>
  );
}

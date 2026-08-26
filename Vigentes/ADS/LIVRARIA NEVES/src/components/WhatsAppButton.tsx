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
      href="https://wa.me/557136277599?text=Olá! Gostaria de mais informações sobre a Livraria Neves."
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 group transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      aria-label="Fale conosco pelo WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
        <div className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform group-hover:scale-110">
          <svg viewBox="0 0 32 32" className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.002 3.334c-7.072 0-12.8 5.728-12.8 12.8 0 2.272.592 4.416 1.632 6.288l-1.696 6.176 6.336-1.664c1.808.96 3.856 1.504 6.032 1.504h.096c7.056 0 12.784-5.728 12.784-12.784 0-3.408-1.328-6.608-3.744-9.024-2.416-2.416-5.616-3.744-9.024-3.744zm0 23.36h-.08c-1.952 0-3.856-.528-5.52-1.52l-.4-.24-4.128 1.088 1.104-4.032-.256-.416c-1.088-1.728-1.664-3.728-1.664-5.792 0-5.968 4.864-10.832 10.848-10.832 2.896 0 5.616 1.12 7.664 3.168 2.048 2.048 3.168 4.768 3.168 7.664-.016 5.984-4.88 10.848-10.832 10.848zm5.936-8.096c-.32-.16-1.92-.944-2.224-1.056-.288-.112-.496-.16-.704.16-.208.32-.816 1.056-.992 1.264-.176.208-.352.24-.672.08-.32-.16-1.36-.496-2.592-1.584-.96-.848-1.6-1.888-1.792-2.208-.192-.32-.016-.496.144-.656.144-.144.32-.384.48-.576.16-.192.208-.32.32-.528.112-.208.064-.384-.032-.544-.096-.16-.704-1.696-.96-2.32-.256-.608-.512-.528-.704-.528-.176-.016-.384-.016-.592-.016s-.544.08-.832.384c-.288.32-1.088 1.072-1.088 2.608 0 1.536 1.12 3.024 1.28 3.232.16.208 2.24 3.424 5.424 4.8.752.336 1.344.528 1.808.672.768.24 1.456.208 2.016.128.608-.096 1.92-.784 2.192-1.536.272-.752.272-1.408.192-1.536-.08-.144-.288-.24-.608-.4z"></path>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block animate-fadeIn">
        <div className="bg-gray-900 text-white text-sm py-2 px-4 rounded-lg shadow-xl whitespace-nowrap">
          Fale conosco!
          <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-900"></div>
        </div>
      </div>
    </a>
  );
}

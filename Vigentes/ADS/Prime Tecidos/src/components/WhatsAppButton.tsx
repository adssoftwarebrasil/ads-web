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
      href="https://wa.me/556599500200?text=Olá! Gostaria de mais informações sobre os produtos da Prime Têxtil."
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 group transition-all duration-300 ${
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-16 pointer-events-none'
      }`}
      aria-label="Falar no WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
        <div className="relative w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-500/50 hover:scale-110 transition-all">
          <svg viewBox="0 0 32 32" className="w-9 h-9 text-white" fill="currentColor">
            <path d="M16.002 0C7.164 0 0 7.163 0 16c0 2.816.734 5.467 2.012 7.768L.088 31.736l8.267-2.165A15.93 15.93 0 0016.002 32c8.837 0 16-7.163 16-16S24.839 0 16.002 0zm0 29.333c-2.44 0-4.745-.663-6.73-1.813l-.482-.289-4.997 1.31 1.334-4.873-.316-.497A13.272 13.272 0 012.667 16c0-7.36 5.973-13.333 13.335-13.333 7.36 0 13.333 5.973 13.333 13.333 0 7.36-5.973 13.333-13.333 13.333z"></path>
            <path d="M23.565 19.453c-.377-.187-2.228-1.093-2.573-1.218-.346-.125-.597-.187-.85.187-.25.376-.971 1.218-1.19 1.468-.22.25-.439.281-.816.094-.377-.188-1.593-.586-3.032-1.865-1.12-.996-1.877-2.226-2.097-2.602-.22-.376-.024-.58.165-.768.17-.168.377-.438.565-.657.188-.22.25-.376.376-.626.125-.25.063-.47-.03-.657-.094-.188-.85-2.038-1.164-2.79-.308-.733-.62-.633-0.85-.645-.219-.01-.47-.01-.72-.01s-.658.093-.998.469c-.346.375-1.316 1.281-1.316 3.124s1.347 3.624 1.535 3.874c.188.25 2.652 4.047 6.426 5.674.897.386 1.598.617 2.144.79.9.285 1.72.245 2.368.148.722-.107 2.228-.907 2.542-1.783.314-.875.314-1.625.22-1.782-.093-.157-.345-.25-.722-.438z"></path>
          </svg>
        </div>
      </div>
      <div className="absolute -top-2 -left-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse shadow-lg">
        1
      </div>
      <div className="absolute right-20 bottom-4 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        <span className="font-semibold">Fale Conosco!</span>
      </div>
    </a>
  );
}

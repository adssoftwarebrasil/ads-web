const WHATSAPP_URL = 'https://wa.me/556294205040';

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="Falar no WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
        <div className="relative w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl flex items-center justify-center transform transition-all duration-300 hover:scale-110 group-hover:shadow-3xl">
          <svg
            viewBox="0 0 32 32"
            className="w-9 h-9 fill-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.002 3.667c-6.627 0-12 5.373-12 12 0 2.133.56 4.133 1.533 5.867L3.668 27.667l6.267-1.84a11.934 11.934 0 0 0 6.067 1.64c6.627 0 12-5.373 12-12s-5.373-12-12-12zm0 21.6a9.574 9.574 0 0 1-4.88-1.347l-.347-.213-3.627 1.067 1.08-3.533-.24-.36a9.546 9.546 0 0 1-1.453-5.147c0-5.293 4.307-9.6 9.6-9.6s9.6 4.307 9.6 9.6-4.307 9.533-9.733 9.533zm5.253-7.187c-.293-.147-1.72-.853-1.987-.947-.267-.093-.467-.147-.667.147s-.76.947-.933 1.147c-.173.2-.347.227-.64.08-.293-.147-1.24-.453-2.36-1.453-.867-.773-1.453-1.733-1.627-2.027-.173-.293-.013-.453.133-.6.133-.133.293-.347.44-.52.147-.173.2-.293.293-.493.093-.2.053-.373-.027-.52-.08-.147-.667-1.6-.907-2.187-.24-.573-.48-.493-.667-.507-.173-.013-.373-.013-.573-.013s-.52.08-.8.373c-.267.293-1.04 1.013-1.04 2.467s1.067 2.867 1.213 3.067c.147.2 2.093 3.187 5.067 4.467.707.307 1.253.493 1.68.627.707.227 1.347.187 1.853.12.56-.08 1.72-.707 1.96-1.387.24-.68.24-1.267.173-1.387-.08-.133-.267-.2-.56-.347z"></path>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-gray-900 text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap shadow-lg">
          Fale conosco!
        </div>
      </div>
    </a>
  );
}

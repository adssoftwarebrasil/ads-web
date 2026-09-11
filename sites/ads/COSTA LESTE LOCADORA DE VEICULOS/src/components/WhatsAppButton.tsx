export default function WhatsAppButton() {
  return (
    <a
      href="http://wa.me/5585986018954?text=Olá! Gostaria de mais informações sobre locação de carros."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] hover:bg-[#128C7E] rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group animate-bounce"
      aria-label="Fale conosco no WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="w-9 h-9" fill="white">
        <path d="M16.003 0C7.17 0 0 7.167 0 16c0 2.83.736 5.49 2.016 7.802L.703 31.36l7.805-2.048A15.938 15.938 0 0 0 16.003 32C24.837 32 32 24.833 32 16S24.837 0 16.003 0zm9.446 22.813c-.413 1.165-2.05 2.135-3.356 2.411-.892.188-2.053.339-5.968-1.282-5.01-2.07-8.235-7.156-8.485-7.486-.24-.33-2.01-2.675-2.01-5.103s1.27-3.622 1.72-4.115c.452-.493 1.003-.617 1.34-.617.338 0 .677.006.976.016.313.012.732-.119 1.145.873.42 1.01 1.44 3.51 1.567 3.766.127.256.213.555.043.885-.17.33-.255.536-.505.828-.25.292-.527.652-.753.875-.25.25-.51.52-.22.018.292.502 1.295 2.135 2.778 3.457 1.908 1.7 3.517 2.23 4.015 2.482.498.25.788.21 1.077-.128.29-.337 1.24-1.446 1.57-1.94.33-.492.66-.41 1.116-.247.455.164 2.893 1.365 3.39 1.614.497.25.83.375.95.585.12.21.12 1.21-.293 2.375z"></path>
      </svg>
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-[rgb(202,25,27)] rounded-full animate-ping"></span>
    </a>
  );
}

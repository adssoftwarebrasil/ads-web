export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/559191706760?text=Olá! Vim através do site e gostaria de mais informações."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group transition-all duration-300 opacity-100 translate-y-0"
      aria-label="Contato via WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75"></div>
        <div className="relative w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300">
          <svg viewBox="0 0 32 32" className="w-9 h-9 text-white" fill="currentColor">
            <path d="M16.002 3.335c-7.364 0-13.333 5.969-13.333 13.333 0 2.361.619 4.575 1.698 6.494l-1.774 6.493 6.679-1.752a13.248 13.248 0 0 0 6.73 1.764c7.364 0 13.333-5.969 13.333-13.333s-5.969-13.333-13.333-13.333zm6.542 18.949c-.282.791-1.396 1.494-2.313 1.698-.614.136-1.417.245-4.115-.883-3.446-1.438-5.677-4.928-5.849-5.156-.167-.229-1.375-1.833-1.375-3.5 0-1.667.875-2.49 1.188-2.828.313-.333.688-.417 0-1.333.313-.188 1.188-.417 2.042-.417.396 0 .75.031 1.062.063.281.031.563.125.813.766.281.719.563 1.521.688 1.76.125.25.313.573.125 1.021-.125.417-.479.656-.771.948-.198.198-.458.458-.656.656-.188.188-.385.385-.146.781.219.396.99 1.635 2.125 2.646 1.458 1.292 2.688 1.688 3.042 1.896.313.146.656.125.875-.073.281-.281.688-.938.75-1.156.063-.24.188-.396.469-.604.281-.208.594-.24.906-.313.344-.073 1.146-.135 1.458.135.302.271.594.594.656.906.063.313.063.906-.219 1.698z"></path>
          </svg>
        </div>
      </div>
      <div className="absolute right-20 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        <span className="text-sm font-medium">Fale Conosco no WhatsApp</span>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
          <div className="border-8 border-transparent border-l-gray-900"></div>
        </div>
      </div>
    </a>
  );
}

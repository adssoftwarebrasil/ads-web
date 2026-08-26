export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/557598115869?text=Ol%C3%A1%2C%20vim%20pelo%20Google.%20Quero%20fazer%20um%20or%C3%A7amento."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 transition-all duration-300 opacity-100 translate-y-0"
      aria-label="Fale conosco no WhatsApp"
    >
      <div className="group relative">
        <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse"></div>
        <div className="relative w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-all duration-300 transform hover:scale-110">
          <svg viewBox="0 0 32 32" fill="white" className="w-9 h-9">
            <path d="M16.002 3.154c-7.086 0-12.848 5.762-12.848 12.848 0 2.277.611 4.415 1.676 6.256l-1.784 6.515 6.677-1.751c1.771.966 3.803 1.518 5.969 1.518h.008c7.086 0 12.848-5.762 12.848-12.848s-5.762-12.848-12.848-12.848h-.008zm7.554 18.334c-.314.883-1.554 1.617-2.545 1.835-.678.145-1.562.262-4.537-.973-3.799-1.577-6.248-5.419-6.438-5.669-.183-.25-1.554-2.067-1.554-3.943s.98-2.794 1.334-3.178c.354-.384.765-.48 1.022-.48s.515.005.74.013c.237.01.555-.09.869.663.314.765 1.072 2.612 1.166 2.803.094.191.157.414.031.664-.125.25-.188.406-.376.626-.188.22-.394.49-.563.657-.188.188-.384.391-.165.767.22.376.98 1.615 2.104 2.615 1.447 1.286 2.664 1.686 3.045 1.873.376.188.595.157.814-.094.22-.25.938-1.095 1.188-1.471.25-.376.5-.314.845-.188.345.125 2.193 1.034 2.569 1.222.376.188.626.282.72.438.094.157.094.907-.22 1.79z"></path>
          </svg>
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-ping"></div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></div>
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
          Fale conosco!
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-gray-900"></div>
        </div>
      </div>
    </a>
  );
}

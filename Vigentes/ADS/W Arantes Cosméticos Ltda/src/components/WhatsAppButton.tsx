const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5562999597617?text=Olá! Vim pelo site e gostaria de mais informações."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Falar no WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-[#25D366] rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse"></div>

        <div className="relative bg-[#25D366] hover:bg-[#20BA5A] p-4 rounded-full shadow-2xl transform group-hover:scale-110 transition-all duration-300">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
          >
            <path
              d="M27.281 4.65C24.318 1.686 20.395 0 16.238 0C7.389 0 0.185 7.204 0.185 16.053C0.185 18.867 0.922 21.603 2.316 24.001L0.051 32L8.236 29.767C10.555 31.048 13.168 31.73 15.823 31.73H15.831C24.679 31.73 32 24.526 32 15.677C32 11.52 30.244 7.614 27.281 4.65ZM16.238 29.035C13.869 29.035 11.547 28.385 9.522 27.165L9.052 26.884L3.931 28.223L5.288 23.221L4.972 22.728C3.623 20.62 2.912 18.172 2.912 15.669C2.912 8.704 8.389 3.227 16.238 3.227C20.052 3.227 23.622 4.686 26.342 7.413C29.062 10.14 30.529 13.718 30.529 17.54C30.529 24.505 24.179 29.035 16.238 29.035ZM24.144 20.228C23.719 20.015 21.552 18.946 21.165 18.803C20.778 18.659 20.492 18.588 20.206 19.013C19.92 19.438 19.065 20.441 18.815 20.727C18.565 21.013 18.315 21.048 17.89 20.835C17.465 20.622 16.062 20.16 14.401 18.659C13.106 17.489 12.263 16.053 12.013 15.628C11.763 15.203 11.984 14.972 12.197 14.759C12.391 14.565 12.622 14.261 12.835 14.011C13.048 13.761 13.119 13.581 13.263 13.295C13.407 13.009 13.335 12.759 13.228 12.546C13.121 12.333 12.263 10.166 11.912 9.316C11.569 8.489 11.219 8.6 10.969 8.589C10.719 8.578 10.433 8.578 10.147 8.578C9.861 8.578 9.4 8.685 9.013 9.11C8.626 9.535 7.486 10.604 7.486 12.771C7.486 14.938 9.048 17.034 9.261 17.32C9.474 17.606 12.263 21.836 16.523 23.718C17.465 24.147 18.201 24.397 18.779 24.575C19.728 24.86 20.588 24.824 21.27 24.717C22.034 24.6 23.826 23.753 24.177 22.821C24.528 21.889 24.528 21.086 24.421 20.908C24.314 20.73 24.028 20.623 23.603 20.41L24.144 20.228Z"
              fill="white"
            />
          </svg>
        </div>

        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-ping"></div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></div>
      </div>

      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-[#230015] px-4 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        <span className="font-semibold">Fale conosco!</span>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-white"></div>
      </div>
    </a>
  );
};

export default WhatsAppButton;

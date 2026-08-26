const WHATSAPP_URL = 'http://wa.me/553399711500';

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group animate-bounce hover:animate-none"
      aria-label="Contato via WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="w-9 h-9 fill-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0C7.164 0 0 7.164 0 16c0 2.825.738 5.578 2.137 7.966L.051 30.877a.498.498 0 0 0 .615.615l6.911-2.086A15.93 15.93 0 0 0 16 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.333c-2.547 0-5.043-.728-7.202-2.105a.67.67 0 0 0-.509-.083l-4.384 1.323 1.323-4.384a.67.67 0 0 0-.083-.509A13.262 13.262 0 0 1 2.667 16c0-7.364 5.969-13.333 13.333-13.333S29.333 8.636 29.333 16 23.364 29.333 16 29.333z"></path>
        <path d="M23.09 19.28c-.36-.181-2.125-1.049-2.454-1.168-.328-.12-.567-.181-.806.181-.24.36-.927 1.168-1.136 1.407-.208.24-.417.271-.777.09-.36-.181-1.52-.561-2.897-1.787-1.071-.955-1.794-2.133-2.003-2.493-.208-.36-.022-.554.158-.733.162-.162.36-.421.54-.632.181-.21.24-.36.36-.6.12-.24.06-.45-.03-.631-.09-.181-.806-1.943-1.105-2.663-.29-.7-.584-.605-.806-.616-.208-.011-.448-.013-.688-.013s-.628.09-.957.45c-.328.36-1.255 1.228-1.255 2.993s1.285 3.472 1.464 3.712c.181.24 2.527 3.859 6.123 5.412.855.369 1.523.59 2.043.755.858.272 1.638.233 2.255.141.688-.103 2.125-.869 2.424-1.708.3-.839.3-1.558.21-1.708-.09-.15-.33-.24-.69-.421z"></path>
      </svg>
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping"></span>
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"></span>
    </a>
  );
}

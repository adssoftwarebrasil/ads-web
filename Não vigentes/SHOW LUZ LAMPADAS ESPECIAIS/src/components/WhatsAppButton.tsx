export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5562993950049"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-6 md:right-6 z-[100] w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none group"
      aria-label="Falar no WhatsApp"
    >
      <svg
        viewBox="0 0 32 32"
        className="w-8 h-8 md:w-9 md:h-9 text-white"
        fill="currentColor"
      >
        <path d="M16 0C7.164 0 0 7.163 0 16c0 2.816.736 5.464 2.014 7.763L0 32l8.418-2.015A15.923 15.923 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.455c-2.512 0-4.853-.688-6.862-1.882l-.492-.292-5.096 1.218 1.218-5.096-.292-.492A13.382 13.382 0 012.545 16C2.545 8.56 8.56 2.545 16 2.545S29.455 8.56 29.455 16 23.44 29.455 16 29.455z" />
        <path d="M23.36 19.428c-.384-.192-2.272-1.12-2.624-1.248-.352-.128-.608-.192-.864.192-.256.384-1.024 1.248-1.248 1.504-.224.256-.448.288-.832.096-.384-.192-1.632-.6-3.104-1.92-1.152-1.024-1.92-2.304-2.144-2.688-.224-.384-.024-.592.168-.784.176-.176.384-.448.576-.672.192-.224.256-.384.384-.64.128-.256.064-.48-.032-.672-.096-.192-.864-2.08-1.184-2.848-.32-.752-.64-.64-.864-.64h-.736c-.256 0-.672.096-.992.48-.32.384-1.248 1.216-1.248 2.976 0 1.76 1.28 3.456 1.472 3.712.192.256 2.56 3.904 6.208 5.472.864.384 1.536.608 2.064.768.864.288 1.664.256 2.288.16.704-.112 2.176-.896 2.496-1.76.32-.864.32-1.6.224-1.76-.096-.16-.352-.256-.736-.448z" />
      </svg>

      <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-ping" />
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white" />

      <div className="absolute right-full mr-4 bg-[#fff457] text-[#010510] px-4 py-2 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <span className="font-semibold">Fale Conosco!</span>
        <div className="absolute top-1/2 -translate-y-1/2 -right-2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-[#fff457]" />
      </div>
    </a>
  );
}

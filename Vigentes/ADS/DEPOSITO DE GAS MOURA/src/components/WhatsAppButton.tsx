export default function WhatsAppButton() {
  return (
    <a
      href="http://wa.me/5562982672012?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:shadow-[#25D366]/50 transition-all transform hover:scale-110 animate-bounce"
      aria-label="Contato WhatsApp"
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16 0C7.164 0 0 7.164 0 16c0 2.828.738 5.482 2.028 7.778L.006 31.496l8.038-2.084A15.933 15.933 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.333c-2.534 0-4.956-.698-7.022-1.972l-.504-.296-5.226 1.356 1.396-5.098-.326-.522A13.267 13.267 0 012.667 16c0-7.364 5.97-13.333 13.333-13.333S29.333 8.636 29.333 16 23.364 29.333 16 29.333z"
          fill="currentColor"
        ></path>
        <path
          d="M23.334 19.556c-.384-.192-2.268-1.12-2.62-1.248-.352-.13-.608-.192-.864.192-.256.384-.992 1.248-1.216 1.504-.224.256-.448.288-.832.096-.384-.192-1.622-.598-3.088-1.906-1.142-1.018-1.912-2.276-2.136-2.66-.224-.384-.024-.592.168-.784.172-.172.384-.448.576-.672.192-.224.256-.384.384-.64.128-.256.064-.48-.032-.672-.096-.192-.864-2.08-1.184-2.848-.312-.748-.628-.648-.864-.66-.224-.01-.48-.012-.736-.012s-.672.096-1.024.48c-.352.384-1.344 1.312-1.344 3.2s1.376 3.712 1.568 3.968c.192.256 2.708 4.136 6.564 5.8.916.396 1.632.632 2.188.808.92.292 1.758.25 2.42.152.738-.11 2.268-.928 2.588-1.824.32-.896.32-1.664.224-1.824-.096-.16-.352-.256-.736-.448z"
          fill="currentColor"
        ></path>
      </svg>
      <span className="absolute -top-1 -right-1 bg-[rgb(228,29,32)] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
        !
      </span>
    </a>
  );
}

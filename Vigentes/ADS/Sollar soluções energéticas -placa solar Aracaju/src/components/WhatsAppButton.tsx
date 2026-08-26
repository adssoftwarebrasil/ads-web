export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5579991174811?text=Olá, vim do site e gostaria de solicitar um orçamento!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 animate-pulse"
      aria-label="Contato via WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="w-8 h-8 md:w-10 md:h-10 fill-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0C7.164 0 0 7.164 0 16c0 2.824.738 5.48 2.028 7.78L.696 30.696l7.18-1.884A15.93 15.93 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.333c-2.444 0-4.76-.66-6.748-1.808l-.484-.292-5.024 1.316 1.34-4.892-.32-.5A13.264 13.264 0 012.667 16c0-7.364 5.97-13.333 13.333-13.333S29.333 8.636 29.333 16 23.364 29.333 16 29.333z"></path>
        <path d="M23.447 19.74c-.404-.204-2.396-1.18-2.768-1.316-.372-.132-.644-.204-.916.204-.268.408-1.048 1.316-1.284 1.588-.232.268-.468.304-.872.1-.404-.204-1.704-.628-3.248-2.004-1.2-1.068-2.008-2.388-2.244-2.792-.232-.408-.024-.628.18-.832.184-.18.404-.468.608-.704.2-.232.268-.404.404-.672.132-.268.068-.5-.032-.704-.104-.204-.916-2.208-1.256-3.024-.332-.796-.668-.688-.916-.7-.232-.012-.5-.016-.768-.016s-.704.1-1.072.5c-.372.404-1.412 1.38-1.412 3.368s1.448 3.908 1.648 4.176c.204.268 2.824 4.312 6.844 6.048.956.412 1.704.66 2.288.844.96.304 1.836.26 2.528.156.772-.116 2.396-.98 2.732-1.924.336-.948.336-1.76.236-1.924-.1-.168-.368-.268-.772-.472z"></path>
      </svg>
      <span className="absolute -top-12 right-0 bg-[rgb(15,15,13)] text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Fale Conosco
      </span>
    </a>
  );
}

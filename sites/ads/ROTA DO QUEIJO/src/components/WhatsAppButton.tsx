export default function WhatsAppButton() {
  return (
    <a
      href="http://wa.me/556184960294"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] animate-bounce-subtle"
      aria-label="Contato WhatsApp"
    >
      <svg
        viewBox="0 0 32 32"
        className="w-9 h-9 fill-white group-hover:scale-110 transition-transform duration-300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.002 0C7.164 0 0 7.163 0 16c0 2.825.738 5.487 2.025 7.788L.1 31.115l7.565-1.984C9.925 30.647 12.888 32 16.002 32c8.837 0 16-7.163 16-16S24.839 0 16.002 0zm0 29.275c-2.644 0-5.088-.975-6.963-2.588l-.5-.4-5.188 1.363 1.388-5.075-.437-.519A13.188 13.188 0 012.725 16c0-7.313 5.95-13.263 13.277-13.263 7.325 0 13.275 5.95 13.275 13.263 0 7.313-5.95 13.275-13.275 13.275zm7.288-9.938c-.4-.2-2.363-1.163-2.725-1.3-.363-.125-.625-.187-.887.2-.263.4-1.013 1.3-1.238 1.563-.225.263-.45.3-.85.1-.4-.2-1.688-.625-3.213-1.988-1.188-1.063-1.988-2.375-2.213-2.775-.225-.4-.025-.613.175-.813.175-.175.4-.45.6-.675.2-.225.263-.4.4-.663.138-.263.075-.5-.038-.7-.113-.2-1.1-2.638-1.5-3.6-.4-.938-.8-.813-1.1-.825-.275-.013-.588-.013-.85-.013-.263 0-.688.1-1.05.5-.363.4-1.375 1.338-1.375 3.263 0 1.925 1.413 3.788 1.613 4.05.2.263 2.813 4.288 6.813 6.013.95.413 1.688.65 2.263.838.95.3 1.813.263 2.5.163.763-.113 2.363-.975 2.688-1.913.325-.938.325-1.738.225-1.913-.1-.175-.363-.275-.763-.475z"></path>
      </svg>
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"></div>
    </a>
  );
}

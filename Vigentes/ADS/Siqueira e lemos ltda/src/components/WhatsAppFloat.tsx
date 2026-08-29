export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/553799961702?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20orçamento."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 transition-all duration-500 opacity-100 translate-y-0"
    >
      <div className="bg-white rounded-full px-4 py-2 shadow-lg border border-neutral-200 hidden sm:flex items-center gap-2 text-sm font-semibold text-neutral-700 whitespace-nowrap">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
        Falar pelo WhatsApp
      </div>
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-green-500 opacity-30 animate-ping"></div>
        <div
          className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-transform duration-300 hover:scale-110 active:scale-95"
          style={{ background: 'rgb(37, 211, 102)' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-7 h-7 fill-white">
            <path d="M16.003 0C7.163 0 .003 7.16.003 16c0 2.824.737 5.475 2.025 7.782L.003 32l8.45-2.215A15.927 15.927 0 0 0 16.003 32C24.842 32 32 24.84 32 16S24.842 0 16.003 0zm0 29.28a13.2 13.2 0 0 1-6.724-1.833l-.48-.287-4.975 1.304 1.326-4.843-.314-.497A13.23 13.23 0 0 1 2.72 16C2.72 8.656 8.658 2.72 16.003 2.72c7.344 0 13.28 5.936 13.28 13.28 0 7.345-5.936 13.28-13.28 13.28zm7.28-9.937c-.4-.2-2.36-1.163-2.727-1.296-.364-.133-.628-.2-.893.2-.264.4-1.025 1.296-1.257 1.562-.23.264-.463.296-.863.1-.4-.2-1.69-.623-3.218-1.988-1.188-1.061-1.99-2.371-2.222-2.771-.232-.4-.025-.615.174-.814.18-.178.4-.463.597-.695.2-.23.264-.4.396-.663.133-.264.067-.497-.033-.697-.1-.198-.893-2.154-1.224-2.95-.32-.77-.647-.666-.893-.678l-.76-.013c-.264 0-.694.1-1.058.497-.364.396-1.388 1.357-1.388 3.31s1.42 3.842 1.618 4.107c.2.264 2.793 4.263 6.765 5.98.947.408 1.686.65 2.262.832.95.302 1.815.26 2.499.157.762-.114 2.36-.965 2.694-1.898.33-.934.33-1.733.23-1.9-.1-.165-.364-.265-.762-.463z"></path>
          </svg>
        </div>
      </div>
    </a>
  );
}

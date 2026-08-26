import WhatsappIcon from './WhatsappIcon';

export default function WhatsappFloat() {
  return (
    <a
      href="https://wa.me/5566999585577?text=Olá! Vim pelo site da Retigrilo e gostaria de um orçamento."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all duration-500 hover:scale-110 group opacity-100 translate-y-0"
      style={{ background: 'linear-gradient(135deg, rgb(145, 200, 68), rgb(76, 181, 73))' }}
    >
      <span
        className="absolute inset-0 rounded-full animate-ping opacity-40"
        style={{ background: 'rgb(76, 181, 73)' }}
      ></span>
      <span
        className="absolute inset-0 rounded-full animate-ping opacity-20 animation-delay-300"
        style={{ background: 'rgb(76, 181, 73)', animationDelay: '0.5s' }}
      ></span>
      <WhatsappIcon className="w-7 h-7 fill-white relative z-10" />
      <span className="absolute right-16 bg-brand-dark text-brand-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
        Fale conosco!
      </span>
    </a>
  );
}

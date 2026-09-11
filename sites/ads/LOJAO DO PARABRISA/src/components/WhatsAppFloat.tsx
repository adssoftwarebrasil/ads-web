import WhatsAppIcon from './WhatsAppIcon';

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-50 md:bottom-6 md:right-6">
      <div className="relative">
        <a
          href="http://wa.me/557188114690?text=Olá! Vim pelo site e gostaria de mais informações."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-16 h-16 md:w-16 md:h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 animate-pulse-subtle"
          aria-label="Contato via WhatsApp"
        >
          <WhatsAppIcon className="w-8 h-8 text-white" />
        </a>
      </div>
    </div>
  );
}

import WhatsAppIcon from './WhatsAppIcon';

const WHATSAPP_URL =
  'https://wa.me/5599991458080?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações';

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[9999] w-14 h-14 md:w-16 md:h-16 bg-[rgb(227,17,35)] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 animate-bounce-once"
      aria-label="Contato via WhatsApp"
      style={{
        animation:
          '2s ease 0s infinite normal none running pulse, 1s ease-out 0s 1 normal none running bounce-once',
        boxShadow: 'rgba(227, 17, 35, 0.4) 0px 4px 20px',
      }}
    >
      <WhatsAppIcon className="w-8 h-8 md:w-9 md:h-9 fill-white" />
    </a>
  );
}

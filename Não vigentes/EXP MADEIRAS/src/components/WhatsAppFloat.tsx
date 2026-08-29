import WhatsAppIcon from './WhatsAppIcon';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5566999857466&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Acabei%20de%20visitar%20o%20site%20poderia%20me%20falar%20um%20pouco%20mais%20sobre%20seus%20servi%C3%A7os%3F"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 md:bottom-8 md:right-8 w-14 h-14 md:w-[60px] md:h-[60px] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 z-[9999] animate-pulse-scale"
      aria-label="WhatsApp"
      style={{ backgroundColor: 'rgb(37, 211, 102)', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 4px 20px' }}
    >
      <WhatsAppIcon fill="white" width={32} height={32} />
    </a>
  );
}

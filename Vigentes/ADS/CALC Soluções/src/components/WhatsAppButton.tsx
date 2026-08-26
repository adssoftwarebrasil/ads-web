export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5584992026504"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-[#25D366] w-[60px] h-[60px] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 z-50"
      aria-label="Contato via WhatsApp"
      style={{ boxShadow: 'rgba(37, 211, 102, 0.4) 0px 5px 15px' }}
    >
      <i className="fab fa-whatsapp text-white text-3xl"></i>
    </a>
  );
}

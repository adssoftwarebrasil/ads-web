import { MessageCircle, Mail } from 'lucide-react';

export default function CTASection() {
  const highlights = [
    'Atendimento em até 24h',
    'Orçamento sem custo',
    'Entrega ágil garantida',
  ];

  // Mensagem padrão para o WhatsApp codificada
  const whatsappUrl = "https://wa.me/5562991093647?text=Ol%C3%A1%2C%20vim%20pelo%20Google%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento!";

  return (
    <section className="py-32 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #401E0A 0%, #6B3410 100%)',
        }}
      />
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 0h60v60H0z" fill="none"/%3E%3Cpath d="M30 0l30 30-30 30L0 30z" fill="%23ffffff"/%3E%3C/svg%3E")',
      }} />

      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-down">
          Pronto para Começar Seu Projeto?
        </h2>
        <p className="text-xl mb-8 text-gray-200 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Solicite um orçamento gratuito e sem compromisso
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          {highlights.map((highlight, index) => (
            <div key={highlight} className="flex items-center space-x-2" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-lg">{highlight}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <a
            href={whatsappUrl}
            className="btn-whatsapp-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={24} />
            <span>Falar no WhatsApp Agora</span>
          </a>
          <a
            href="mailto:emporiododeck@gmail.com"
            className="btn-secondary-white"
          >
            <Mail size={24} />
            <span>Enviar E-mail</span>
          </a>
        </div>
      </div>
    </section>
  );
}
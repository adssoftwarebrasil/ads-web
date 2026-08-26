import { MessageCircle, ArrowDown } from 'lucide-react';

export default function HeroSection() {
  // Mensagem padrão para o WhatsApp codificada
  const whatsappUrl = "https://wa.me/5562991093647?text=Ol%C3%A1%2C%20vim%20pelo%20Google%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento!";

  const scrollToProducts = () => {
    const element = document.getElementById('produtos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://storage.lucasmendes.dev/site-sp/EMPORIO%20DO%20DECK%2Fimgi_39_467021860_17898808251086886_4519118758504400796_n.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          animation: 'kenBurns 20s ease-in-out infinite',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(64,30,10,0.8), rgba(107,52,16,0.6))',
          }}
        />
      </div>

      <div className="container mx-auto px-4 z-10 text-white pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up" 
            style={{ animationDelay: '0.3s' }}
          >
            Madeiras Nobres para Seu Projeto de Deck
          </h1>

          <p 
            className="text-lg md:text-xl mb-8 text-gray-100 animate-fade-in-up max-w-2xl mx-auto" 
            style={{ animationDelay: '0.5s' }}
          >
            Empório do Deck - Qualidade e agilidade na entrega de decks, forros e acabamentos em madeira desde 2023
          </p>

          <div 
            className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up justify-center" 
            style={{ animationDelay: '0.7s' }}
          >
            
            <a 
              href={whatsappUrl}
              className="btn-whatsapp flex items-center justify-center space-x-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={20} />
              <span>Falar no WhatsApp</span>
            </a>
            <button
              onClick={scrollToProducts}
              className="btn-secondary flex items-center justify-center space-x-2"
            >
              <span>Ver Produtos</span>
              <ArrowDown size={20} />
            </button>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            {['Entrega Ágil', 'Atendimento Rápido', 'Madeiras Selecionadas'].map((badge, index) => (
              <div
                key={badge}
                className="badge animate-slide-in-right"
                style={{ animationDelay: `${0.9 + index * 0.15}s` }}
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
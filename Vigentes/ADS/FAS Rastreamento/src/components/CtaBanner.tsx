import WhatsAppIcon from './WhatsAppIcon';

export default function CtaBanner() {
  return (
    <section
      className="py-16"
      style={{ background: 'linear-gradient(135deg, rgb(27, 53, 74) 0%, rgb(70, 96, 117) 100%)' }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Proteja Seu Veículo Hoje Mesmo</h2>
        <p className="text-base mb-8" style={{ color: 'rgb(203, 219, 233)' }}>
          Atendemos Mato Grosso e Mato Grosso do Sul. Instalação rápida, suporte 24h e tecnologia de ponta.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="http://wa.me/556592264219?text=Olá!%20Quero%20solicitar%20um%20orçamento%20para%20rastreamento%20veicular."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-sm transition-all duration-300 hover:-translate-y-1"
            style={{ backgroundColor: 'rgb(37, 211, 102)', boxShadow: 'rgba(37, 211, 102, 0.4) 0px 4px 20px' }}
          >
            <WhatsAppIcon className="w-5 h-5" />
            Solicitar Orçamento Grátis
          </a>
          <a
            href="tel:+5565992264219"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm transition-all duration-300 border-2 hover:-translate-y-1"
            style={{ borderColor: 'rgb(203, 219, 233)', color: 'rgb(203, 219, 233)' }}
          >
            (65) 9 9226-4219
          </a>
        </div>
      </div>
    </section>
  );
}

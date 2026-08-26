import WhatsappIcon from './WhatsappIcon';

const features = ['Resposta rápida', 'Atendimento personalizado', 'Sem compromisso'];

export default function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgb(13, 27, 76) 0%, rgb(30, 58, 138) 50%, rgb(59, 130, 246) 100%)',
        }}
      ></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#60A5FA] rounded-full opacity-10 blur-3xl -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4A90E2] rounded-full opacity-10 blur-3xl translate-x-32 translate-y-32"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Solicite um Orçamento Personalizado
          </h2>
          <p className="text-xl md:text-2xl text-white text-opacity-90">
            Nossa equipe está pronta para atender você e encontrar a melhor solução para sua obra
          </p>
          <a
            href="https://wa.me/5567999737241"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-lg px-10 py-5 rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 animate-pulse shadow-lg"
          >
            <WhatsappIcon size={32} />
            <span>Falar no WhatsApp</span>
          </a>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4 text-white text-opacity-80">
            {features.map((feature) => (
              <div key={feature} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#60A5FA] rounded-full animate-pulse"></div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

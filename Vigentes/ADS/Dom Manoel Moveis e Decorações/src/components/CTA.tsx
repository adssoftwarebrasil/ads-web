import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/dom-manoel-moveis-e-decoracoes/galeria/mesa-madeira-cadeiras-vermelho-pratos-decoracao_960x1280.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-[rgb(103,66,42)]/80"></div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-4xl lg:text-5xl text-cream font-bold mb-5 leading-tight">
          Pronto para transformar
          <br />
          <span className="text-[rgb(183,149,108)]">o seu espaço?</span>
        </h2>
        <p className="text-cream/80 text-lg mb-10 max-w-xl mx-auto">
          Entre em contato agora e descubra o móvel perfeito para a sua casa, escritório ou
          restaurante. Atendemos pessoalmente e pelo WhatsApp.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="http://wa.me/556696455950?text=Olá!%20Quero%20solicitar%20um%20orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[rgb(183,149,108)] hover:bg-[rgb(175,140,100)] text-cream font-semibold px-10 py-4 rounded-full text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Solicitar orçamento
            <ArrowRight size={18} />
          </a>
          <a
            href="#contato"
            className="inline-flex items-center justify-center gap-2 border-2 border-cream/50 hover:border-cream text-cream font-semibold px-10 py-4 rounded-full text-base transition-all duration-300"
          >
            Ver nosso endereço
          </a>
        </div>
      </div>
    </section>
  );
}

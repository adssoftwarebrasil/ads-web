import { CheckCircle, MessageCircle } from 'lucide-react';

const points = [
  'Fundada em 2016 por Leonardo Paiva Sobreira',
  'Localizada no coração do Centro de Juazeiro do Norte',
  'Referência para romeiros, turistas e fiéis da região do Cariri',
  'Atendimento presencial e via WhatsApp',
  'Parceria com paróquias em eventos e celebrações especiais',
];

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="section-reveal">
            <span className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3 block">
              Nossa História
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              8 Anos servindo à
              <br />
              <span className="text-brand-gold">fé e à devoção</span>
            </h2>
            <div className="gold-divider mb-7"></div>
            <p className="text-white/65 text-base leading-relaxed mb-5">
              A Loja Padre Cícero nasceu em agosto de 2016 com uma missão clara: levar artigos
              religiosos de qualidade para os fiéis e romeiros que visitam Juazeiro do Norte — a
              terra sagrada do Nordeste.
            </p>
            <p className="text-white/65 text-base leading-relaxed mb-8">
              Ao longo de mais de 8 anos de atuação, nos tornamos uma referência no atendimento a
              peregrinos, paróquias e devotos da região do Cariri, oferecendo uma das maiores
              variedades de artigos religiosos da cidade, sempre com atendimento personalizado e
              carinhoso.
            </p>
            <ul className="space-y-3 mb-10">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-brand-gold flex-shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm">{p}</span>
                </li>
              ))}
            </ul>
            <a
              href="http://wa.me/5588999153119"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-base"
            >
              <MessageCircle size={18} />
              Fale Conosco
            </a>
          </div>
          <div className="section-reveal section-reveal-delay-2">
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-3xl opacity-20"
                style={{ background: 'radial-gradient(rgba(252, 199, 35, 0.4) 0%, transparent 70%)' }}
              ></div>
              <div className="relative grid grid-cols-2 gap-4">
                <div className="bg-brand-dark-3 rounded-2xl p-6 border border-brand-gold/15 text-center">
                  <div className="font-display text-5xl font-bold text-brand-gold mb-2">+8</div>
                  <div className="text-white/60 text-xs uppercase tracking-widest font-medium">
                    Anos de<br />Experiência
                  </div>
                </div>
                <div className="bg-brand-gold rounded-2xl p-6 text-center mt-6">
                  <div className="font-display text-5xl font-bold text-brand-dark mb-2">4.6</div>
                  <div className="text-brand-dark/70 text-xs uppercase tracking-widest font-medium">
                    Avaliação<br />no Google
                  </div>
                </div>
                <div className="bg-brand-gold rounded-2xl p-6 text-center -mt-2">
                  <div className="font-display text-5xl font-bold text-brand-dark mb-2">7+</div>
                  <div className="text-brand-dark/70 text-xs uppercase tracking-widest font-medium">
                    Categorias<br />de Produtos
                  </div>
                </div>
                <div className="bg-brand-dark-3 rounded-2xl p-6 border border-brand-gold/15 text-center mt-2">
                  <div className="font-display text-5xl font-bold text-brand-gold mb-2">∞</div>
                  <div className="text-white/60 text-xs uppercase tracking-widest font-medium">
                    Devoção<br />e Cuidado
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

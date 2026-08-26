import { TECH_CARDS } from '../data';

export default function Technology() {
  return (
    <section id="tecnologia" className="py-20 md:py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14 section-reveal">
          <span className="inline-block text-[#0C4E9D] text-sm font-semibold tracking-widest uppercase mb-4">
            Inovação Constante
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Tecnologia</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base">
            Investimos continuamente em equipamentos e processos digitais para entregar o melhor.
          </p>
          <div className="mt-6 mx-auto w-16 h-1 bg-[#0C4E9D] rounded-full"></div>
        </div>
        <div className="mb-14 section-reveal" style={{ transitionDelay: '100ms' }}>
          <div className="glass-card rounded-2xl p-6 md:p-8 border border-[#0C4E9D]/20">
            <p className="text-center text-gray-500 text-xs uppercase tracking-widest mb-6">Fluxo Digital Completo</p>
            <svg viewBox="0 0 320 80" fill="none" className="w-full max-w-lg mx-auto opacity-60">
              <g>
                <circle cx="30" cy="40" r="18" stroke="#0C4E9D" strokeWidth="1.5" fill="rgba(12,78,157,0.1)" className="animate-glow" style={{ animationDelay: '0s' }}></circle>
                <text x="30" y="44" textAnchor="middle" fill="#7db5ff" fontSize="9" fontWeight="600">Scan</text>
                <path d="M48 40 L97 40" stroke="#0C4E9D" strokeWidth="1.5" strokeDasharray="4 3" className="animate-draw" style={{ animationDelay: '0s' }}></path>
                <polygon points="97,36 104,40 97,44" fill="#0C4E9D"></polygon>
              </g>
              <g>
                <circle cx="115" cy="40" r="18" stroke="#0C4E9D" strokeWidth="1.5" fill="rgba(12,78,157,0.1)" className="animate-glow" style={{ animationDelay: '0.4s' }}></circle>
                <text x="115" y="44" textAnchor="middle" fill="#7db5ff" fontSize="9" fontWeight="600">CAD</text>
                <path d="M133 40 L182 40" stroke="#0C4E9D" strokeWidth="1.5" strokeDasharray="4 3" className="animate-draw" style={{ animationDelay: '0.3s' }}></path>
                <polygon points="182,36 189,40 182,44" fill="#0C4E9D"></polygon>
              </g>
              <g>
                <circle cx="200" cy="40" r="18" stroke="#0C4E9D" strokeWidth="1.5" fill="rgba(12,78,157,0.1)" className="animate-glow" style={{ animationDelay: '0.8s' }}></circle>
                <text x="200" y="44" textAnchor="middle" fill="#7db5ff" fontSize="9" fontWeight="600">CAM</text>
                <path d="M218 40 L267 40" stroke="#0C4E9D" strokeWidth="1.5" strokeDasharray="4 3" className="animate-draw" style={{ animationDelay: '0.6s' }}></path>
                <polygon points="267,36 274,40 267,44" fill="#0C4E9D"></polygon>
              </g>
              <g>
                <circle cx="285" cy="40" r="18" stroke="#0C4E9D" strokeWidth="1.5" fill="rgba(12,78,157,0.1)" className="animate-glow" style={{ animationDelay: '1.2s' }}></circle>
                <text x="285" y="44" textAnchor="middle" fill="#7db5ff" fontSize="9" fontWeight="600">Entrega</text>
              </g>
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TECH_CARDS.map((card, i) => (
            <div
              key={card.title}
              className="group glass-card rounded-2xl overflow-hidden blue-glow-hover section-reveal border border-[#1a1a1a] hover:border-[#0C4E9D]/30 transition-colors duration-300"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#0C4E9D] flex items-center justify-center">
                    <card.icon className="text-white" width={14} height={14} />
                  </div>
                  <div>
                    <p className="text-white text-sm font-bold">{card.title}</p>
                    <p className="text-[#7db5ff] text-xs">{card.subtitle}</p>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-14 glass-card rounded-2xl p-8 md:p-10 border border-[#0C4E9D]/20 text-center section-reveal">
          <img
            src="https://storage.lucasmendes.dev/site-sp/vitadent/Cera%CC%82mica.png"
            alt="Cerâmica Vitadent"
            className="w-full max-w-lg mx-auto rounded-xl mb-6 object-cover aspect-video"
          />
          <h3 className="font-playfair text-2xl md:text-3xl font-bold text-white mb-3">Cerâmica de Alta Performance</h3>
          <p className="text-gray-400 max-w-lg mx-auto text-base">
            Trabalhamos com os melhores materiais cerâmicos do mercado, incluindo E-max e zircônia, para resultados que
            superam as expectativas.
          </p>
        </div>
      </div>
    </section>
  );
}

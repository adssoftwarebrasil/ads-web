import { CheckCircle, Instagram, Facebook, MapPin, Clock, Phone } from 'lucide-react';

const highlights = [
  'Mais de 17 anos de experiência no mercado imobiliário',
  'Foco em lançamentos no litoral do Ceará',
  'Atuação consultiva e estratégica',
  'Decisões baseadas em dados e cenário econômico',
  'Relacionamento de longo prazo com investidores',
  'Transparência e compromisso com resultado',
];

export default function About() {
  return (
    <section id="sobre" className="bg-[#003438] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <img
                src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Vista da praia de Fortaleza"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003438]/60 to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-[#00484e] border border-white/20 rounded-2xl p-5 shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center">
                  <MapPin size={22} className="text-white" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">Fortaleza, CE</div>
                  <div className="text-white/60 text-xs">Litoral Cearense</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-5 shadow-2xl">
              <div className="text-center">
                <div className="text-[#00484e] font-black text-3xl leading-none">17+</div>
                <div className="text-[#00484e]/70 text-xs font-medium mt-1">anos de<br/>experiência</div>
              </div>
            </div>

            <div className="absolute top-1/2 -right-4 -translate-y-1/2 bg-[#00484e] border border-white/20 rounded-2xl p-4 shadow-2xl hidden lg:block">
              <div className="flex flex-col items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
                <div className="text-white text-xs font-semibold">Online</div>
                <div className="text-white/50 text-[10px]">Seg–Sáb</div>
                <div className="text-white/50 text-[10px]">8h–20h</div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 text-white/70 text-xs font-bold tracking-widest uppercase mb-4">
              <div className="w-8 h-px bg-white/40" />
              Sobre a Empresa
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Investimento com
              <br />
              <span className="text-white/70 font-light italic">
                Critério e Estratégia
              </span>
            </h2>

            <p className="text-white/70 text-base leading-relaxed mb-4">
              A <span className="text-white font-semibold">Praia Imóveis CE</span> atua com um princípio simples:
              investimento imobiliário exige critério, leitura de mercado e responsabilidade.
              São mais de <span className="text-white font-semibold">17 anos de experiência</span>, com atuação focada
              em lançamentos no litoral do Ceará, sempre de forma consultiva e estratégica.
            </p>

            <p className="text-white/70 text-base leading-relaxed mb-8">
              Nosso trabalho é direcionado a investidores que buscam <span className="text-white font-semibold">segurança,
              rentabilidade e visão de longo prazo</span>, com decisões baseadas em dados, cenário econômico
              e potencial real de valorização.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-white/65">
                  <CheckCircle size={16} className="text-white/60 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-xl px-4 py-2.5">
                <Clock size={15} className="text-white/70" />
                <span className="text-white/70 text-sm">Seg–Sáb | 08h–20h</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-xl px-4 py-2.5">
                <Phone size={15} className="text-white/70" />
                <span className="text-white/70 text-sm">(85) 98925-3428</span>
              </div>
              <a
                href="https://www.instagram.com/praia.imoveis_ce/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 border border-white/15 hover:border-white/40 rounded-xl px-4 py-2.5 transition-colors"
              >
                <Instagram size={15} className="text-white/70" />
                <span className="text-white/70 text-sm">@praia.imoveis_ce</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

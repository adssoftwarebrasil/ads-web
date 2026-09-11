import { Star, Quote } from 'lucide-react';

interface Depoimento {
  text: string;
  initial: string;
  name: string;
  meta: string;
  offset: string;
}

const clientes: string[] = Array.from(
  { length: 17 },
  (_, i) => `/img/clientes/cliente-${String(i + 1).padStart(2, '0')}.jpg`
);

const depoimentos: Depoimento[] = [
  {
    text: '"Ótimo atendimento! Veículos de excelência! Parabéns!"',
    initial: 'E',
    name: 'Edvânia Batista',
    meta: '8 avaliações · 1 foto',
    offset: '0px',
  },
  {
    text: '"Top. Bom atendimento. Recomendo a todos que buscam confiança e qualidade."',
    initial: 'D',
    name: 'Dovalni Souza',
    meta: 'Local Guide · 174 avaliações',
    offset: '20px',
  },
  {
    text: '"Ótimo atendimento, e ótimo preço. Nota 10! Fizeram toda a diferença na minha compra."',
    initial: 'G',
    name: 'Gabriel Fellipe',
    meta: '2 avaliações',
    offset: '0px',
  },
];

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="relative py-24 sm:py-32 bg-black overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-full bg-[radial-gradient(ellipse_at_left,rgba(233,1,16,0.08),transparent_70%)]"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-brand-red mb-4">
              Depoimentos
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-6">
              A voz de quem já <span className="text-brand-red">confiou</span> em nós.
            </h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Clientes reais, experiências reais. Confira o que eles dizem sobre a GM Motos no
              Google.
            </p>
            <div className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-center">
                <p className="font-display text-5xl font-black text-white">4.4</p>
                <div className="flex items-center gap-0.5 mt-1 justify-center">
                  <Star className="lucide lucide-star text-brand-red fill-brand-red" width={14} height={14} />
                  <Star className="lucide lucide-star text-brand-red fill-brand-red" width={14} height={14} />
                  <Star className="lucide lucide-star text-brand-red fill-brand-red" width={14} height={14} />
                  <Star className="lucide lucide-star text-brand-red fill-brand-red" width={14} height={14} />
                  <Star className="lucide lucide-star text-brand-red/30 fill-brand-red/30" width={14} height={14} />
                </div>
              </div>
              <div className="h-14 w-px bg-white/15"></div>
              <div>
                <p className="text-white font-semibold">Avaliação média</p>
                <p className="text-white/60 text-sm">Baseado em avaliações do Google</p>
              </div>
            </div>
          </div>
          <div className="space-y-5">
            {depoimentos.map((d) => (
              <div
                key={d.name}
                className="group relative p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 hover:border-brand-red/50 transition-all"
                style={{ transform: `translateX(${d.offset})` }}
              >
                <Quote
                  className="lucide lucide-quote absolute top-6 right-6 text-brand-red/20 group-hover:text-brand-red/50 transition-colors"
                  width={40}
                  height={40}
                />
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="lucide lucide-star text-brand-red fill-brand-red"
                      width={16}
                      height={16}
                    />
                  ))}
                </div>
                <p className="text-white/85 text-lg leading-relaxed mb-6">{d.text}</p>
                <div className="flex items-center gap-4 pt-5 border-t border-white/10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-red to-brand-red-dark flex items-center justify-center font-display font-black text-white">
                    {d.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{d.name}</p>
                    <p className="text-xs text-white/55">{d.meta}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 sm:mt-28">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-brand-red mb-4">
              Clientes satisfeitos
            </span>
            <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.1]">
              Quem já saiu <span className="text-brand-red">pilotando</span> com a gente
            </h3>
            <p className="text-white/70 leading-relaxed mt-4">
              Cada entrega é uma conquista. Confira alguns dos clientes que realizaram o sonho da
              moto nova aqui na GM Motos.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {clientes.map((src, i) => (
              <div
                key={src}
                className="group relative rounded-2xl overflow-hidden aspect-[3/4] bg-white/5 border border-white/10"
              >
                <img
                  src={src}
                  alt={`Cliente satisfeito da GM Motos ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href="https://wa.me/5566999980270?text=Ol%C3%A1!%20Tamb%C3%A9m%20quero%20realizar%20o%20sonho%20da%20minha%20moto%20nova%20com%20a%20GM%20Motos."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-red text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all"
            >
              Quero ser o próximo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

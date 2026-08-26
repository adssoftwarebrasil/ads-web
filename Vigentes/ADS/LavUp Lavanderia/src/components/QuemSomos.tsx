import { CheckCircle2 } from 'lucide-react';

const BASE = 'https://storage.lucasmendes.dev/site-sp/lavup/img';

const bullets = [
  'Inaugurada em 1º de Maio de 2024',
  'Equipamentos modernos de alta performance',
  'Ambiente limpo, seguro e confortável',
  'Processo simples e acessível para todos',
  'Autonomia total para o cliente',
  'Parte de uma rede inovadora de lavanderias',
];

export default function QuemSomos() {
  return (
    <section id="quem-somos" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="slide-right-fade">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-b-8 border-purple-100">
                <img
                  src={`${BASE}/quem-somos.webp`}
                  alt="Equipe Lavup Araraquara"
                  className="w-full h-[500px] lg:h-[800px] object-cover"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-40"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(84, 46, 145, 0.5), transparent)',
                  }}
                ></div>
              </div>
              <div
                className="absolute -bottom-5 -right-5 px-8 py-5 rounded-2xl shadow-xl border border-white/50 z-10"
                style={{
                  background:
                    'linear-gradient(135deg, rgb(84, 46, 145), rgb(38, 182, 230))',
                }}
              >
                <p className="text-white font-black text-3xl">2024</p>
                <p className="text-white/80 text-xs font-medium uppercase tracking-wider">
                  Inauguração
                </p>
              </div>
              <div className="absolute -bottom-8 -left-6 w-32 h-32 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden sm:block">
                <img
                  src={`${BASE}/cartao-visita-lavanderia-roxo-e-rosa_532x296.webp`}
                  alt="Cartão de visita Lavup"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="slide-left-fade">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-5"
              style={{ background: 'rgba(84, 46, 145, 0.08)', color: 'rgb(84, 46, 145)' }}
            >
              Nossa história
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-8">
              Quem{' '}
              <span
                style={{
                  background:
                    'linear-gradient(135deg, rgb(84, 46, 145), rgb(190, 83, 160)) text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                somos
              </span>
            </h2>
            <div className="space-y-6 text-gray-600 text-lg">
              <p className="leading-relaxed">
                A <strong>Lavup Araraquara</strong>, inaugurada em 1º de Maio de
                2024, faz parte de uma rede inovadora de lavanderias de
                autoatendimento que transforma a maneira de cuidar das roupas no
                dia a dia.
              </p>
              <p className="leading-relaxed">
                Nosso objetivo é oferecer{' '}
                <strong>praticidade, economia e tecnologia</strong>, permitindo
                que cada cliente tenha autonomia para lavar e secar suas peças
                com rapidez e eficiência.
              </p>
              <p className="leading-relaxed">
                Contamos com equipamentos modernos, ambientes limpos e seguros,
                além de um processo simples e acessível para todos. Valorizamos o
                seu tempo e buscamos proporcionar uma experiência confortável.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 mb-10">
              {bullets.map((b) => (
                <div key={b} className="flex items-start gap-2.5 group">
                  <CheckCircle2
                    size={20}
                    className="flex-shrink-0 mt-0.5 transition-transform group-hover:scale-110"
                    style={{ color: 'rgb(38, 182, 230)' }}
                  />
                  <span className="text-gray-700 text-sm font-medium leading-tight">
                    {b}
                  </span>
                </div>
              ))}
            </div>
            <blockquote
              className="border-l-4 pl-6 italic text-gray-700 font-semibold text-xl mt-8"
              style={{ borderColor: 'rgb(118, 203, 199)' }}
            >
              "Enquanto GIRA a vida ACONTECE"
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

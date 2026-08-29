import { CheckCircle, Award, Users, Clock } from 'lucide-react';

const features = [
  'Equipe altamente qualificada e certificada',
  'Tecnologia de ponta para diagnóstico preciso',
  'Transparência total: nenhum serviço é feito sem sua aprovação',
  'Atendimento diferenciado para pessoas físicas e jurídicas',
  'Preço justo e honesto em todos os serviços',
  'Especialistas em veículos a gasolina, flex e diesel',
];

export default function About() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="transition-all duration-700 scrolled-hidden">
            <span className="text-[rgb(240,26,40)] text-sm font-bold uppercase tracking-widest mb-3 block">
              Nossa História
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              Qualidade e Confiança <span className="text-[rgb(240,26,40)]">Desde 2023</span>
            </h2>
            <div className="h-1 w-16 bg-[rgb(240,26,40)] rounded-full mb-8"></div>
            <p className="text-white/70 leading-relaxed mb-5 text-base">
              A <strong className="text-white">Althus Service Car</strong> foi fundada em 09 de março
              de 2023, localizada na Av. Antônio Gomes da Silva Júnior, 810 — Parque Industrial
              Lagoinha, em Ribeirão Preto (SP). Desde o início, nossa missão é clara: oferecer
              manutenção automotiva de excelência com transparência e preço justo.
            </p>
            <p className="text-white/70 leading-relaxed mb-8 text-base">
              Reconhecida como referência na região, nossa oficina conta com infraestrutura completa,
              equipamentos de diagnóstico modernos e uma equipe apaixonada por automóveis. Atendemos
              veículos a <strong className="text-white">gasolina, flex e diesel</strong>, de pessoas
              físicas a frotas empresariais.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="lucide lucide-check-circle text-[rgb(240,26,40)] flex-shrink-0 mt-0.5"
                  />
                  <span className="text-white/75 text-sm leading-snug">{feature}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-[#111] border border-white/5 rounded-xl p-4 text-center hover:border-[rgb(240,26,40)]/30 transition-colors duration-300">
                <Award
                  size={20}
                  className="lucide lucide-award text-[rgb(240,26,40)] mx-auto mb-2"
                />
                <div className="text-white font-black text-lg">4.9★</div>
                <div className="text-white/45 text-xs mt-0.5">Avaliação Google</div>
              </div>
              <div className="bg-[#111] border border-white/5 rounded-xl p-4 text-center hover:border-[rgb(240,26,40)]/30 transition-colors duration-300">
                <Users
                  size={20}
                  className="lucide lucide-users text-[rgb(240,26,40)] mx-auto mb-2"
                />
                <div className="text-white font-black text-lg">PF &amp; PJ</div>
                <div className="text-white/45 text-xs mt-0.5">Atendemos</div>
              </div>
              <div className="bg-[#111] border border-white/5 rounded-xl p-4 text-center hover:border-[rgb(240,26,40)]/30 transition-colors duration-300">
                <Clock
                  size={20}
                  className="lucide lucide-clock text-[rgb(240,26,40)] mx-auto mb-2"
                />
                <div className="text-white font-black text-lg">2023</div>
                <div className="text-white/45 text-xs mt-0.5">Fundação</div>
              </div>
              <div className="bg-[#111] border border-white/5 rounded-xl p-4 text-center hover:border-[rgb(240,26,40)]/30 transition-colors duration-300">
                <CheckCircle
                  size={20}
                  className="lucide lucide-check-circle text-[rgb(240,26,40)] mx-auto mb-2"
                />
                <div className="text-white font-black text-lg">100%</div>
                <div className="text-white/45 text-xs mt-0.5">Transparência</div>
              </div>
            </div>
          </div>
          <div className="transition-all duration-700 delay-200 scrolled-hidden">
            <div className="relative">
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2 rounded-2xl overflow-hidden h-64 sm:h-80">
                  <img
                    src="https://storage.lucasmendes.dev/site-sp/althus%20service%20car/img/fachada-oficina-althus-carros-e-reparos_1600x1200.webp"
                    alt="Fachada da Althus Service Car"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-44 sm:h-52">
                  <img
                    src="https://storage.lucasmendes.dev/site-sp/althus%20service%20car/img/escritorio-com-monitor-quadro-gestao-cadeiras_1600x1200.webp"
                    alt="Escritório Althus"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-44 sm:h-52">
                  <img
                    src="https://storage.lucasmendes.dev/site-sp/althus%20service%20car/img/fachada-alhus-service-car-parede-tijolos_680x510.webp"
                    alt="Fachada Althus"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[rgb(240,26,40)] text-white rounded-2xl p-4 shadow-xl shadow-red-900/40">
                <div className="text-3xl font-black">4.9</div>
                <div className="flex mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-white"
                    >
                      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                    </svg>
                  ))}
                </div>
                <div className="text-white/80 text-xs mt-1">Google Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

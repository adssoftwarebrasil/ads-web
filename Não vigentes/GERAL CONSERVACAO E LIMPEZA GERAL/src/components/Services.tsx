import { Star, CheckCircle2, ArrowRight } from 'lucide-react';

const outsourcingItems = [
  'Conservação e Limpeza',
  'Serviços de Portaria',
  'Jardinagem e Paisagismo',
  'Zeladoria Predial',
  'Recepcionistas',
  'Apoio Administrativo',
];

const technicalServices = [
  {
    img: 'https://storage.lucasmendes.dev/site-sp/geral%20limpeza%2Fimg%2Fservico-limpeza-de-refrigeracao-e-ar-condicionado.webp',
    title: 'Refrigeração e Ar Condicionado (PMOC)',
    desc: 'Instalação, manutenção preventiva e corretiva com gestão completa do PMOC (Plano de Manutenção, Operação e Controle).',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/geral%20limpeza%2Fimg%2Fservico-limpeza-de-poco.webp',
    title: 'Limpeza de Reservatórios e Poços',
    desc: "Higienização profissional de caixas d'água, cisternas e poços artesianos seguindo rigorosamente as normas da ANVISA.",
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/geral%20limpeza%2Fimg%2Fservico-servicos-em-altura.webp',
    title: 'Serviços em Altura',
    desc: 'Limpeza de fachadas, vidros e manutenção predial em altura com equipe alpinista certificada NR-35.',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/geral%20limpeza%2Fimg%2Fservico-limpeza-de-piso.webp',
    title: 'Limpeza e Tratamento de Pisos',
    desc: 'Revitalização de pisos, remoção de ceras antigas, polimento e impermeabilização para áreas industriais e comerciais.',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/geral%20limpeza%2Fimg%2Fpos-obra-e-limpeza-pesada.webp',
    title: 'Pós Obra e Limpeza Pesada',
    desc: 'Limpeza detalhada para entrega de obras, limpeza de galpões logísticos e mutirões de limpeza pesada.',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/geral%20limpeza%2Fimg%2Fcontrole-de-praga.webp',
    title: 'Controle de Pragas e Sanitização',
    desc: 'Dedetização, desratização, descupinização e sanitização de ambientes contra vírus e bactérias.',
  },
];

const civilTags = ['Elétrica e Hidráulica', 'Pintura Predial', 'Pequenas Reformas', 'Manutenção Civil'];

export default function Services() {
  return (
    <section id="servicos" className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-[rgb(3,171,255)] font-semibold text-sm md:text-base uppercase tracking-wider mb-4 block">
            Nossas Especialidades
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Soluções Integradas para sua Empresa
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Atendemos desde a terceirização contínua de equipes até serviços técnicos pontuais e obras de
            manutenção.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-20">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-[rgb(3,171,255)]/20 grid grid-cols-1 lg:grid-cols-2">
            <div className="relative min-h-[400px] lg:h-auto">
              <img
                src="https://storage.lucasmendes.dev/site-sp/geral%20limpeza%2Fimg%2Ffale-conosco-correto.webp"
                alt="Equipe de Terceirização Profissional"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[rgb(2,103,253)]/80 to-transparent lg:bg-gradient-to-t lg:from-[rgb(2,103,253)]/90 lg:to-transparent/50 opacity-90"></div>
              <div className="absolute bottom-8 left-8 text-white z-10">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="fill-yellow-400 text-yellow-400" />
                  <span className="font-bold tracking-wide uppercase text-sm">Carro Chefe</span>
                </div>
                <h3 className="text-3xl font-bold">Terceirização de Mão de Obra</h3>
              </div>
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Gestão Completa de Facilities
              </h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Focamos na gestão de pessoas para que você foque no seu negócio. Fornecemos profissionais
                treinados, uniformizados e com supervisão constante para diversas funções operacionais.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {outsourcingItems.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[rgb(2,103,253)] shrink-0" size={20} />
                    <span className="font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <a
                href="https://wa.me/5592981671587?text=Olá! Gostaria de um orçamento para Terceirização de Mão de Obra."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-[rgb(2,103,253)] text-white px-8 py-4 rounded-xl font-bold hover:bg-[rgb(3,171,255)] transition-all duration-300 shadow-lg hover:shadow-blue-200"
              >
                <span>Cotar Equipe Terceirizada</span>
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 pl-4 border-l-4 border-[rgb(2,103,253)]">
            Serviços Técnicos Especializados
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalServices.map((svc) => (
              <div
                key={svc.title}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-2 flex flex-col h-full"
              >
                <div className="relative h-56 overflow-hidden shrink-0">
                  <img
                    src={svc.img}
                    alt={svc.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[rgb(2,103,253)] transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{svc.desc}</p>
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <a
                      href={`https://wa.me/5592981671587?text=Olá! Gostaria de um orçamento para ${svc.title}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-[rgb(2,103,253)] font-bold text-sm hover:text-[rgb(3,171,255)] transition-colors group"
                    >
                      <span>Solicitar Orçamento</span>
                      <ArrowRight
                        className="transform group-hover:translate-x-1 transition-transform"
                        size={16}
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
            <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Construção Civil, Obras e Reformas</h3>
                <p className="text-gray-300 mb-8 max-w-2xl text-lg">
                  Além da limpeza e conservação, oferecemos suporte completo para a manutenção estrutural do
                  seu imóvel com engenheiros e técnicos qualificados.
                </p>
                <div className="flex flex-wrap gap-3">
                  {civilTags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="md:col-span-1 flex justify-center md:justify-end">
                <a
                  href="https://wa.me/5592981671587?text=Olá! Preciso de serviços de manutenção/obra."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto text-center bg-white text-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:scale-105"
                >
                  Falar com Engenharia
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

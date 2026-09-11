import { GraduationCap, Target, CalendarDays, Trophy } from 'lucide-react';

const SERVICES = [
  {
    icon: GraduationCap,
    badge: 'Escola de Futebol',
    title: 'Formação de Atletas',
    description:
      'Desenvolvemos atletas de todas as idades por meio de uma metodologia moderna e acompanhamento profissional. Nossos treinamentos estimulam o desenvolvimento técnico, tático, físico e disciplinar, formando jogadores preparados dentro e fora de campo.',
    highlights: ['Todas as idades', 'Professores certificados', 'Treinamento técnico', 'Desenvolvimento físico', 'Formação esportiva'],
    image: 'https://storage.lucasmendes.dev/site-sp/escolinha%20casa%20do%20futebol/img/time-futebol-infantil-posando-com-o-treinador_1170x993.webp',
    cta: 'Matricular agora',
    msg: 'Olá!%20Tenho%20interesse%20na%20Escola%20de%20Futebol%20da%20Casa%20do%20Futebol.',
  },
  {
    icon: Target,
    badge: 'Treinamentos',
    title: 'Treinamentos Especializados',
    description:
      'Oferecemos treinamentos específicos para goleiros, aperfeiçoamento técnico, preparação física e atividades voltadas para o desenvolvimento completo dos atletas, respeitando cada fase de aprendizagem.',
    highlights: ['Treino de goleiros', 'Aperfeiçoamento técnico', 'Preparação física', 'Alto rendimento', 'Evolução contínua'],
    image: 'https://storage.lucasmendes.dev/site-sp/escolinha%20casa%20do%20futebol/img/time-de-futebol-verde-branco-campo-noturno_1440x1080.webp',
    cta: 'Agendar avaliação',
    msg: 'Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20nos%20Treinamentos%20Especializados.',
  },
  {
    icon: CalendarDays,
    badge: 'Locação',
    title: 'Locação de Campo',
    description:
      'Disponibilizamos nosso campo para partidas, amistosos, treinamentos e eventos esportivos. Um espaço seguro, organizado e preparado para proporcionar a melhor experiência para atletas e equipes.',
    highlights: ['Campo disponível', 'Treinos', 'Jogos amistosos', 'Eventos esportivos', 'Cuiabá - MT'],
    image: '/fotos/campo-locacao-por-do-sol.jpg',
    cta: 'Reservar campo',
    msg: 'Olá!%20Gostaria%20de%20reservar%20o%20campo%20da%20Casa%20do%20Futebol.',
  },
  {
    icon: Trophy,
    badge: 'Projetos',
    title: 'Projetos Esportivos',
    description:
      'Promovemos projetos esportivos, clínicas de futebol, campeonatos, eventos e ações sociais que incentivam a prática esportiva, fortalecem a comunidade e revelam novos talentos.',
    highlights: ['Projetos esportivos', 'Clínicas de futebol', 'Campeonatos', 'Eventos', 'Desenvolvimento social'],
    image: 'https://storage.lucasmendes.dev/site-sp/escolinha%20casa%20do%20futebol/img/equipe-infantil-futebol-campo-pose-foto_1440x1440.webp',
    cta: 'Saiba mais',
    msg: 'Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20Projetos%20Esportivos%20da%20Casa%20do%20Futebol.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 lg:py-28 bg-[#363434]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#236E45]/20 border border-[#236E45]/30 rounded-full px-4 py-1.5 mb-4">
            <span className="w-2 h-2 bg-[#236E45] rounded-full" />
            <span className="text-[#236E45] text-sm font-semibold tracking-wide uppercase">Nossos Serviços</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            Soluções completas para{' '}
            <span className="text-[#236E45]">o desenvolvimento esportivo</span>
          </h2>
          <p className="text-[#C8CAC9] text-lg max-w-2xl mx-auto mt-4">
            Da iniciação ao aperfeiçoamento técnico, oferecemos treinamentos de futebol para crianças,
            adolescentes e jovens, promovendo disciplina, evolução e paixão pelo esporte em Cuiabá e toda a
            região.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group bg-[#2C4D39]/20 border border-white/10 rounded-2xl overflow-hidden hover:border-[#236E45]/40 transition-all duration-300 hover:shadow-2xl hover:shadow-[#236E45]/10"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#363434] via-[#363434]/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 bg-[#236E45] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    <service.icon size={12} />
                    {service.badge}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-black text-white mb-3">{service.title}</h3>
                <p className="text-[#C8CAC9] text-sm leading-relaxed mb-5">{service.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {service.highlights.map((h) => (
                    <span
                      key={h}
                      className="bg-[#236E45]/20 text-[#236E45] text-xs font-medium px-3 py-1 rounded-full border border-[#236E45]/30"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                <a
                  href={`http://wa.me/556581172880?text=${service.msg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#236E45] hover:bg-white hover:text-[#236E45] text-white font-bold py-3 rounded-xl transition-all duration-300 text-sm"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {service.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

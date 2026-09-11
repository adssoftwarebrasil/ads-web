import { Heart, Star, Clock, Users, Flower2, Car } from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: 'Atendimento Humanizado',
    description:
      'Acolhemos sua família com empatia e respeito, oferecendo suporte integral em todos os momentos difíceis.',
  },
  {
    icon: Star,
    title: 'Planos Funerários',
    description:
      'Planos completos e acessíveis para associados e não associados, garantindo tranquilidade para você e sua família.',
  },
  {
    icon: Clock,
    title: 'Atendimento 24h',
    description:
      'Nossa equipe está disponível 24 horas por dia, 7 dias por semana, para atender quando você mais precisar.',
  },
  {
    icon: Users,
    title: 'Serviços Completos',
    description:
      'Do velório ao sepultamento, cuidamos de todos os detalhes com dignidade, do serviço simples ao super luxo.',
  },
  {
    icon: Flower2,
    title: 'Coroa de Flores',
    description:
      'Flores e arranjos florais especiais para homenagear e eternizar a memória de quem partiu.',
  },
  {
    icon: Car,
    title: 'Translado e Remoção',
    description:
      'Frota própria de veículos funerários modernos para remoção, translado e cortejo com segurança e dignidade.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-[rgb(247,246,249)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-[rgb(65,150,229)] mb-3">
            O que oferecemos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[rgb(29,29,29)] mb-4">
            Serviços com Cuidado e Dedicação
          </h2>
          <p className="text-[rgb(29,29,29)]/60 max-w-xl mx-auto text-base">
            Oferecemos uma estrutura completa para que sua família possa se despedir com paz,
            conforto e dignidade.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-7 shadow-sm border border-[rgb(29,29,29)]/5 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[rgb(249,240,69)] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[rgb(65,150,229)] transition-colors duration-300">
                  <Icon size={22} className="text-[rgb(29,29,29)] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-[rgb(29,29,29)] mb-2">{service.title}</h3>
                <p className="text-[rgb(29,29,29)]/60 text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-[rgb(29,29,29)] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[rgb(249,240,69)] font-bold text-lg mb-1">Precisa de atendimento agora?</p>
            <p className="text-[rgb(247,246,249)]/70 text-sm">
              Nossa equipe está pronta para acolher sua família a qualquer hora.
            </p>
          </div>
          <a
            href="http://wa.me/553498615889"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-3 bg-[rgb(249,240,69)] text-[rgb(29,29,29)] font-bold text-sm px-7 py-3.5 rounded-full hover:bg-[rgb(65,150,229)] hover:text-white transition-all duration-200"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Entrar em Contato
          </a>
        </div>
      </div>
    </section>
  );
}

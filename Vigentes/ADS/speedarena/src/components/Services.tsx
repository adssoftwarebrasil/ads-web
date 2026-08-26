import { GraduationCap, Circle, UtensilsCrossed, FileText } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: GraduationCap,
      title: 'Aulas Profissionais',
      description:
        'Beach Tennis, Futevôlei e Vôlei com professores especializados. Turmas de manhã (terça a sexta) para iniciantes e avançados.',
      cta: 'Ver Planos', // Texto fixado como "Ver Planos"
      gradient: 'bg-gradient-primary',
      type: 'single_button',
      url: 'https://speedarenagoiania.com.br/#aulas',
    },
    {
      icon: Circle,
      title: 'Aluguel de Quadras',
      description:
        'Quadras de areia premium disponíveis para locação. Perfeito para treinos, jogos entre amigos ou eventos. Finais de semana com horários especiais.',
      cta: 'Reservar Agora',
      gradient: 'bg-gradient-green',
      type: 'single_button',
      url: 'https://wa.me/5562983092884?text=Ol%C3%A1!%20Gostaria%20de%20reservar%20uma%20quadra.',
    },
    {
      icon: UtensilsCrossed,
      title: 'Espaço Gastronômico',
      description:
        'Espetinho, jantinha, cerveja gelada, tapioca e açaí. Relaxe e aproveite após seu jogo!',
      gradient: 'bg-rose-400',
      type: 'menus',
      menus: [
        {
          label: 'Lanchonete',
          url: 'https://acrobat.adobe.com/id/urn:aaid:sc:US:e470b456-312d-4690-b08d-c2dc1f841ce4',
        },
        {
          label: 'Espetinho e Jantinha',
          url: 'https://acrobat.adobe.com/id/urn:aaid:sc:US:43e10c99-7fe6-4905-a2cb-5d50ae3cc660',
        },
      ],
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-neutral-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-neutral-dark max-w-2xl mx-auto">
            Tudo o que você precisa para uma experiência completa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.gradient} rounded-2xl p-8 text-white shadow-xl hover:scale-105 hover:shadow-2xl transition-all animate-fade-up`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <service.icon className="w-16 h-16 mb-6" />
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="mb-6 text-white/90 leading-relaxed">
                {service.description}
              </p>

              {service.type === 'single_button' ? (
                <a
                  href={service.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-primary-dark px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
                >
                  {service.cta}
                </a>
              ) : service.type === 'menus' && service.menus ? (
                <div className="flex flex-col gap-3">
                  {service.menus.map((menu, menuIndex) => (
                    <a
                      key={menuIndex}
                      href={menu.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-white text-primary-dark px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
                    >
                      <FileText className="w-5 h-5" />
                      {menu.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
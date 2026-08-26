import { Ear, Wrench, Users, ArrowRight, Activity, Radio } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: Ear,
      title: 'Aparelhos Auditivos',
      description:
        'Venda de aparelhos auditivos de última geração para todos os graus de perda auditiva. Tecnologia recarregável e conectividade avançada.',
      image:
        'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=beevox%2Falteracoes2%2FINFO%20PARA%20SITE%20BEEVOX%20GOOGLE%2FAPARELHOS%20E%20ACESS%C3%93RIOS%2FFOTOS%20APARELHOS%20AUDITIVOS.jpg&version_id=null',
      features: ['Modelos recarregáveis', 'Conectividade Bluetooth', 'Discretos e modernos'],
      href: '/servicos/aparelhos-auditivos',
    },
    {
      icon: Activity,
      title: 'Exames',
      description:
        'Exames para avaliar a audição e obter o melhor tratamento para ter vida plena, em harmonia com pessoas e ambientes, e conectar-se com o mundo.',
      image:
        'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=beevox%2Falteracoes2%2FINFO%20PARA%20SITE%20BEEVOX%20GOOGLE%2FFOTO%20D%C3%89BORA%20AUDIOGRAMA.jpeg&version_id=null',
      features: ['Audiometria tonal e vocal', 'Imitanciometria'],
      href: '/servicos/exames',
    },
    {
      icon: Wrench,
      title: 'Serviços Laboratoriais',
      description:
        'Laboratório próprio para manutenção especializada, limpeza e reparos para garantir o melhor desempenho do seu aparelho auditivo.',
      image:
        'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=beevox%2Falteracoes2%2FINFO%20PARA%20SITE%20BEEVOX%20GOOGLE%2FFOTO%20ODIL%20LABORATORIO.jpeg&version_id=null',
      features: ['Conserto, revisão e limpeza', 'Moldes em acrílico e silicone', 'Tampão auricular', 'Aparelhos customizados'],
      href: '/servicos/laboratorial',
    },
    {
      icon: Users,
      title: 'Consultoria Auditiva',
      description:
        'Avaliação auditiva e orientação profissional para encontrar a melhor solução auditiva para suas necessidades.',
      image:
        'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=beevox%2Falteracoes2%2FINFO%20PARA%20SITE%20BEEVOX%20GOOGLE%2FFOTO%20D%C3%89BORA%20E%20ODIL.%20EQUIPE.jpeg&version_id=null',
      features: ['Avaliação gratuita', 'Orientação especializada', 'Teste de adaptação'],
      href: '/servicos/consultoria-auditiva',
    },
    {
      icon: Radio,
      title: 'Implantes Auditivos',
      description:
        'Representante oficial da MED-EL do Brasil, em Cuiabá e Várzea Grande, oferecendo aparelhos para implantes cocleares, peças e acessórios, aparelhos auditivos de condução óssea, acompanhamentos e assistência técnica.',
      image:
        'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=beevox%2Falteracoes2%2FImplantes-Auditivos1-Capa.png&version_id=null',
      features: ['Implantes cocleares', 'Condução óssea', 'Peças e acessórios'],
      href: '/servicos/implantes-auditivos',
    },
  ];

  return (
    <section id="servicos" className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nossos <span className="text-[rgb(246,182,31)]">Serviços</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas em saúde auditiva com tecnologia de ponta e atendimento
            personalizado para cada necessidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col"
            >
              <div className="relative h-56 overflow-hidden shrink-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[rgb(246,182,31)] rounded-xl">
                    <service.icon className="w-6 h-6 text-black" />
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                <ul className="space-y-2 mb-6 flex-grow">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-[rgb(246,182,31)] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={service.href}
                  className="inline-flex items-center text-[rgb(246,182,31)] hover:text-[rgb(226,162,11)] font-semibold group/link mt-auto"
                >
                  Saiba mais
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="http://wa.me/5565999818250"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[rgb(246,182,31)] text-black px-8 py-4 rounded-full font-semibold hover:bg-[rgb(226,162,11)] transition-all shadow-lg hover:shadow-xl"
          >
            Agende Sua Avaliação Gratuita
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

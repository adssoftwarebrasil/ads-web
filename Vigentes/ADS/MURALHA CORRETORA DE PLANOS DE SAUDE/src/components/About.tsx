import { Target, Eye, Sparkles } from 'lucide-react';

export default function About() {
  const sections = [
    {
      icon: Target,
      title: 'Missão',
      content:
        'Há mais de 25 anos trabalhamos para proteger o que é mais importante para nossos clientes, oferecendo soluções personalizadas em seguros e planos de saúde com excelência, transparência e comprometimento. Com fé em Deus, firmamos o compromisso de proporcionar segurança e tranquilidade em todas as etapas da vida daqueles que confiam em nosso trabalho.',
    },
    {
      icon: Eye,
      title: 'Visão',
      content:
        'Ser reconhecida como líderes em confiança, inovação e qualidade no mercado, contribuindo para um futuro mais seguro e saudável para nossos clientes e parceiros.',
    },
    {
      icon: Sparkles,
      title: 'Valores',
      content: 'Transparência, Compromisso, Inovação, Excelência no Atendimento, Ética e Segurança.',
    },
  ];

  const values = [
    'Transparência: Agir com clareza e honestidade em todas as nossas relações.',
    'Compromisso: Garantir a satisfação e a proteção dos nossos clientes.',
    'Inovação: Buscar constantemente soluções modernas e eficientes.',
    'Excelência no Atendimento: Oferecer um suporte humanizado e personalizado.',
    'Ética: Respeitar princípios éticos em todas as nossas operações.',
    'Segurança: Garantir a proteção dos bens, saúde e vidas dos nossos clientes.',
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Sobre Nós
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <img
              src="https://storage.lucasmendes.dev/site-sp/muralhacorretora/Sobre%20No%CC%81s.png"
              alt="Sobre Nós"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
          </div>

          <div className="space-y-8">
            {sections.slice(0, 2).map((section, index) => {
              const Icon = section.icon;
              return (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                      {section.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-to-br from-neutral-50 to-primary/5 rounded-3xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="text-3xl font-bold text-neutral-900">
              Nossos Valores
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-neutral-700">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://api.whatsapp.com/send?phone=558191952020&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Acabei%20de%20visitar%20o%20site%20poderia%20me%20falar%20um%20pouco%20mais%20sobre%20seus%20servi%C3%A7os%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-primary hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Enviar WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

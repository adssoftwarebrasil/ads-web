import { Smile, Shield, Clock, Headphones, Zap, BadgeCheck } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: Smile,
      title: 'Qualidade de Vida',
      description: 'Reconecte-se com o mundo ao seu redor e desfrute de momentos especiais.',
    },
    {
      icon: Shield,
      title: 'Tecnologia Confiável',
      description: 'Aparelhos de última geração das melhores marcas do mercado mundial.',
    },
    {
      icon: Clock,
      title: 'Atendimento Humanizado',
      description: 'Abordagem focada no respeito, empatia e acolhimento, colocando o paciente no centro do cuidado de sua saúde auditiva.',
    },
    {
      icon: Headphones,
      title: 'Suporte Contínuo',
      description: 'Acompanhamento completo com ajustes e manutenções regulares.',
    },
    {
      icon: Zap,
      title: 'Resultados Imediatos',
      description: 'Melhora perceptível desde as primeiras sessões de adaptação.',
    },
    {
      icon: BadgeCheck,
      title: 'Garantia e Segurança',
      description: 'Todos os nossos produtos possuem garantia e assistência técnica.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[rgb(246,182,31)] rounded-full blur-3xl opacity-5"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[rgb(246,182,31)] rounded-full blur-3xl opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Por que Escolher a{' '}
                <span className="text-[rgb(246,182,31)]">BEEVOX</span>?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Somos mais do que uma clínica de soluções auditivas. Somos parceiros na sua jornada
                para uma audição clara e uma vida mais plena.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              {/* ATENÇÃO: Substitua este link pela nova imagem sem a logo da Audiocare */}
              <img
                src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=beevox%2Falteracoes2%2Fporque.jpg&version_id=null"
                alt="Cliente satisfeita com sorriso positivo após tratamento"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-100 hover:shadow-lg hover:border-[rgb(246,182,31)]/20 transition-all group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[rgb(246,182,31)]/10 rounded-lg mb-4 group-hover:bg-[rgb(246,182,31)] transition-colors">
                  <benefit.icon className="w-6 h-6 text-[rgb(246,182,31)] group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-[rgb(246,182,31)] to-[rgb(226,162,11)] rounded-2xl p-8 md:p-12 text-center shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4">
            Avaliação Auditiva Gratuita
          </h3>
          <p className="text-lg text-black/80 mb-6 max-w-2xl mx-auto">
            Agende agora sua avaliação auditiva. Nossa equipe está pronta para
            atender você com todo carinho e profissionalismo.
          </p>
          <a
            href="http://wa.me/5565999818250"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
          >
            Agendar Avaliação Gratuita
          </a>
        </div>
      </div>
    </section>
  );
}
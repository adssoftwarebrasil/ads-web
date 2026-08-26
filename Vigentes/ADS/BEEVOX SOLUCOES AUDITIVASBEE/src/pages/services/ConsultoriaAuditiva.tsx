import { ArrowRight, Users, CheckCircle, ClipboardList, MessageCircle, Star, Heart } from 'lucide-react';
import ServicePageLayout from './ServicePageLayout';

const steps = [
  {
    icon: MessageCircle,
    step: '01',
    title: 'Conversa Inicial',
    description:
      'Escutamos você com atenção. Queremos entender suas dificuldades auditivas, sua rotina e suas expectativas para oferecer a melhor orientação possível.',
  },
  {
    icon: ClipboardList,
    step: '02',
    title: 'Avaliação Auditiva',
    description:
      'Realizamos uma avaliação completa da sua audição com exames especializados, identificando o tipo e grau de perda auditiva com precisão.',
  },
  {
    icon: Users,
    step: '03',
    title: 'Orientação Profissional',
    description:
      'Com base nos resultados, nossa fonoaudióloga apresenta as melhores soluções para o seu caso, explicando cada opção de forma clara e acessível.',
  },
  {
    icon: CheckCircle,
    step: '04',
    title: 'Plano Personalizado',
    description:
      'Desenvolvemos um plano de tratamento individualizado, considerando seu estilo de vida, necessidades e preferências para o melhor resultado.',
  },
];

const benefits = [
  'Atendimento humanizado com fonoaudióloga especializada',
  'Avaliação auditiva completa e detalhada',
  'Orientação sobre as melhores soluções do mercado',
  'Suporte contínuo após a adaptação do aparelho',
  'Acompanhamento personalizado a longo prazo',
  'Espaço para tirar todas as suas dúvidas sem pressa',
];

export default function ConsultoriaAuditiva() {
  return (
    <ServicePageLayout>
      <section className="relative bg-black text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[rgb(246,182,31)] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[rgb(246,182,31)] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-block bg-[rgb(246,182,31)] text-black font-bold px-5 py-1.5 rounded-full text-sm uppercase tracking-wider">
            Avaliação Gratuita
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Consultoria e Avaliação <span className="text-[rgb(246,182,31)]">Auditiva</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Avaliação auditiva completa e orientação profissional personalizada para encontrar a melhor solução para a sua saúde auditiva.
          </p>
          <a
            href="http://wa.me/5565999818250"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[rgb(246,182,31)] text-black px-8 py-4 rounded-full font-bold hover:bg-[rgb(226,162,11)] transition-all shadow-lg gap-2 mt-4"
          >
            Agendar Avaliação Gratuita
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Como funciona nossa <span className="text-[rgb(246,182,31)]">Consultoria</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Um processo cuidadoso e humanizado, pensado para que você se sinta acolhido e bem orientado em cada etapa.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.step} className="relative bg-white border border-gray-100 shadow-lg rounded-2xl p-6 space-y-4 hover:shadow-2xl hover:border-[rgb(246,182,31)]/30 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <span className="text-5xl font-black text-[rgb(246,182,31)]/15 leading-none">{step.step}</span>
                  <div className="w-12 h-12 bg-[rgb(246,182,31)] rounded-xl flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-black" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=beevox%2Falteracoes2%2FINFO%20PARA%20SITE%20BEEVOX%20GOOGLE%2F333333.jpeg&version_id=null"
                alt="Consultoria auditiva"
                className="w-full h-[420px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Benefícios de uma <span className="text-[rgb(246,182,31)]">avaliação profissional</span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Cuidar da saúde auditiva vai muito além de adquirir um aparelho. Uma consultoria profissional garante que você receba a orientação correta e o tratamento mais adequado para a sua realidade.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[rgb(246,182,31)] shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[rgb(246,182,31)] rounded-3xl p-10 sm:p-14 text-center space-y-6">
            <div className="flex justify-center gap-1">
              {[1,2,3,4,5].map((n) => (
                <Star key={n} className="w-6 h-6 fill-black text-black" />
              ))}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-black">
              Mais do que cuidar da audição — cuidamos de você
            </h2>
            <p className="text-black/70 text-lg max-w-2xl mx-auto">
              Na BEEVOX, cada paciente é único. Nossa missão é proporcionar soluções que transformem vidas, com atenção, cuidado e comprometimento em cada atendimento.
            </p>
            <a
              href="http://wa.me/5565999818250"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-black text-white px-10 py-4 rounded-full font-bold hover:bg-gray-900 transition-all shadow-lg gap-2 text-lg"
            >
              Agendar Minha Avaliação Gratuita
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-white">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
          <Heart className="w-10 h-10 text-[rgb(246,182,31)] mx-auto" />
          <h2 className="text-3xl sm:text-4xl font-bold">
            Dê o primeiro passo para uma <span className="text-[rgb(246,182,31)]">vida melhor</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Entre em contato e agende sua avaliação auditiva gratuita. Nossa equipe está pronta para te receber.
          </p>
          <a
            href="http://wa.me/5565999818250"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[rgb(246,182,31)] text-black px-10 py-4 rounded-full font-bold hover:bg-[rgb(226,162,11)] transition-all shadow-lg gap-2 text-lg"
          >
            Falar pelo WhatsApp
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </ServicePageLayout>
  );
}

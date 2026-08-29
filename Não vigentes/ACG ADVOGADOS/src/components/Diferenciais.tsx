import { CheckCircle2, HeartHandshake, Target, Award, TrendingUp, Clock, type LucideIcon } from 'lucide-react';

interface Diferencial {
  Icon: LucideIcon;
  title: string;
  text: string;
}

const diferenciais: Diferencial[] = [
  {
    Icon: CheckCircle2,
    title: 'Experiência Comprovada',
    text: 'Mais de 9 anos de atuação no mercado jurídico do Tocantins, com centenas de casos bem-sucedidos.',
  },
  {
    Icon: HeartHandshake,
    title: 'Atendimento Humanizado',
    text: 'Relacionamento baseado na confiança, transparência e comunicação clara com nossos clientes.',
  },
  {
    Icon: Target,
    title: 'Advocacia Preventiva',
    text: 'Orientamos para evitar problemas futuros, minimizando custos e riscos jurídicos.',
  },
  {
    Icon: Award,
    title: 'Equipe Especializada',
    text: 'Advogados pós-graduados com expertise nas mais diversas áreas do Direito.',
  },
  {
    Icon: TrendingUp,
    title: 'Resultados Efetivos',
    text: 'Foco em soluções práticas e resultados concretos para cada caso.',
  },
  {
    Icon: Clock,
    title: 'Disponibilidade Total',
    text: 'Atendimento presencial, por telefone e WhatsApp para sua comodidade.',
  },
];

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[rgb(175,145,93)] font-bold text-sm tracking-widest uppercase">
              Por que escolher o ACG?
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[rgb(16,17,12)] mt-4 mb-6 leading-tight">
              Seu Parceiro Jurídico de Confiança
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              No ACG Advogados, trabalhamos para estabelecer uma relação saudável e duradoura com nossos clientes. Nossa
              missão é apresentar soluções claras e objetivas para os desafios jurídicos que pessoas físicas e jurídicas
              enfrentam no dia a dia.
            </p>
            <div className="space-y-6">
              {diferenciais.map(({ Icon, title, text }) => (
                <div key={title} className="flex items-start space-x-4 group">
                  <div className="bg-[rgb(175,145,93)]/10 p-3 rounded-lg group-hover:bg-[rgb(175,145,93)]/20 transition-all duration-300 flex-shrink-0">
                    <Icon size={24} className="text-[rgb(175,145,93)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[rgb(16,17,12)] text-lg mb-2">{title}</h3>
                    <p className="text-gray-600 leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <a
                href="http://wa.me/556399974853"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[rgb(175,145,93)] text-[rgb(16,17,12)] px-8 py-4 rounded-lg hover:bg-[rgb(16,17,12)] hover:text-[rgb(175,145,93)] transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Converse com um Advogado
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Escritório ACG Advogados"
                className="w-full h-[700px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(16,17,12)]/50 to-transparent"></div>
            </div>
            <div className="absolute -bottom-8 -left-8 bg-[rgb(16,17,12)] text-white p-8 rounded-xl shadow-xl max-w-sm border border-[rgb(175,145,93)]/30">
              <p className="text-[rgb(175,145,93)] font-bold text-lg mb-2">Compromisso com Você</p>
              <p className="text-lg leading-relaxed">
                Atuamos em todas as cidades do Tocantins, sempre próximos aos nossos clientes.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-24 bg-gradient-to-r from-[rgb(16,17,12)] to-[rgb(16,17,12)]/95 rounded-2xl p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Está Enfrentando um Problema Jurídico?</h3>
          <p className="text-xl text-[rgb(199,195,192)] mb-8 max-w-3xl mx-auto">
            Não deixe suas dúvidas se tornarem problemas maiores. Nossa equipe está pronta para oferecer a orientação
            jurídica que você precisa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="http://wa.me/556399974853"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(175,145,93)] text-[rgb(16,17,12)] px-8 py-4 rounded-lg hover:bg-[rgb(199,195,192)] transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              WhatsApp (63) 9 9997-4853
            </a>
            <a
              href="tel:6333221977"
              className="border-2 border-[rgb(175,145,93)] text-[rgb(175,145,93)] px-8 py-4 rounded-lg hover:bg-[rgb(175,145,93)] hover:text-[rgb(16,17,12)] transition-all duration-300 font-bold text-lg"
            >
              Telefone (63) 3322-1977
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

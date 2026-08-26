import { Clock, Award, Phone, ArrowRight } from 'lucide-react';

const cards = [
  {
    Icon: Clock,
    title: 'Atendimento Rápido',
    text: 'Serviços expressos disponíveis. Alguns trabalhos podem ser finalizados em minutos.',
  },
  {
    Icon: Award,
    title: 'Qualidade Garantida',
    text: 'Materiais premium e processos certificados para resultados impecáveis.',
  },
  {
    Icon: Phone,
    title: 'Orçamento Sem Compromisso',
    text: 'Entre em contato e receba um orçamento personalizado e sem custo.',
  },
];

export default function Premium() {
  return (
    <section className="py-20 bg-gradient-to-br from-[rgb(2,126,198)] via-[rgb(6,51,133)] to-[rgb(34,9,92)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold border border-white/30 mb-6">
              Atendimento Premium
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Transforme Suas Memórias em{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">
                Arte Preservada
              </span>
            </h2>
            <p className="text-xl text-gray-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Com 40 anos de experiência, oferecemos atendimento personalizado e resultados que
              superam expectativas. Sua satisfação é nossa prioridade.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {cards.map(({ Icon, title, text }) => (
              <div
                key={title}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
              >
                <Icon className="w-12 h-12 text-cyan-300 mx-auto mb-4" />
                <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                <p className="text-gray-200 text-sm">{text}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="http://wa.me/556192241725?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto bg-white text-[rgb(6,51,133)] px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Solicitar Orçamento Grátis</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:6133818686"
              className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white border-2 border-white/50 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>(61) 3381-8686</span>
            </a>
          </div>
          <p className="text-gray-200 text-sm mt-8">
            Atendimento de segunda a sexta das 9h às 18h e sábados das 9h às 13h
          </p>
        </div>
      </div>
    </section>
  );
}

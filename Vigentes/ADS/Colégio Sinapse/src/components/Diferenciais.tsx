import { Brain, Medal, UsersRound, Activity, Library, Sparkles } from 'lucide-react';

const items = [
  {
    Icon: Brain,
    gradient: 'from-[rgb(234,58,35)] to-[rgb(171,24,66)]',
    title: 'Sistema Bernoulli',
    text: 'Material didático reconhecido nacionalmente, com metodologia que conquistou o 1º lugar no ENEM.',
  },
  {
    Icon: Medal,
    gradient: 'from-[rgb(171,24,66)] to-[rgb(95,0,102)]',
    title: 'Histórico de Aprovações',
    text: 'Cases de sucesso com aprovações em medicina, engenharia e nas melhores universidades do país.',
  },
  {
    Icon: UsersRound,
    gradient: 'from-[rgb(234,58,35)] to-[rgb(171,24,66)]',
    title: 'Professores Experientes',
    text: 'Equipe qualificada e dedicada, comprometida com o sucesso de cada aluno.',
  },
  {
    Icon: Activity,
    gradient: 'from-[rgb(171,24,66)] to-[rgb(95,0,102)]',
    title: 'Ensino Personalizado',
    text: 'Acompanhamento individual do desempenho de cada estudante, respeitando o ritmo de aprendizagem.',
  },
  {
    Icon: Library,
    gradient: 'from-[rgb(234,58,35)] to-[rgb(171,24,66)]',
    title: 'Infraestrutura Completa',
    text: 'Biblioteca, quadra poliesportiva coberta, área de lazer e ambientes modernos para aprendizagem.',
  },
  {
    Icon: Sparkles,
    gradient: 'from-[rgb(171,24,66)] to-[rgb(95,0,102)]',
    title: 'Preparação Focada',
    text: 'Treinamento específico para ENEM e vestibulares, com simulados e aulas de reforço.',
  },
];

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Nossos
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[rgb(234,58,35)] to-[rgb(171,24,66)]">
              Diferenciais
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça os fatores que fazem do Colégio Sinapse uma das melhores escolhas educacionais de Goiânia.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map(({ Icon, gradient, title, text }) => (
            <div
              key={title}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-600 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-gradient-to-r from-[rgb(95,0,102)] via-[rgb(171,24,66)] to-[rgb(234,58,35)] rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">Pronto para fazer parte dessa história de sucesso?</h3>
          <p className="text-xl mb-8 opacity-90">
            Matrículas abertas do 6º ano ao preparatório para ENEM e vestibulares.
          </p>
          <a
            href="http://wa.me/5562999690082?text=Olá! Gostaria de saber mais sobre matrículas no Colégio Sinapse."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[rgb(171,24,66)] px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Solicite Informações
          </a>
        </div>
      </div>
    </section>
  );
}

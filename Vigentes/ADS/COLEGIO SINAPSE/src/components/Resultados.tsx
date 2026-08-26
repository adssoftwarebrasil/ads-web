import { Trophy, Star, Award, TrendingUp } from 'lucide-react';

const stats = [
  { Icon: Trophy, value: '95%', label: 'Taxa de Aprovação' },
  { Icon: Star, value: '1º', label: 'Sistema Bernoulli no ENEM' },
  { Icon: Award, value: '150+', label: 'Alunos Aprovados' },
  { Icon: TrendingUp, value: '4+', label: 'Anos de Excelência' },
];

const cases = [
  {
    dot: 'bg-[rgb(234,58,35)]',
    title: 'Medicina',
    text: 'Aprovações em UFG, PUC-GO e outras universidades de prestígio',
  },
  {
    dot: 'bg-[rgb(171,24,66)]',
    title: 'Engenharias',
    text: 'Sucessos em universidades federais e institutos tecnológicos',
  },
  {
    dot: 'bg-[rgb(95,0,102)]',
    title: 'Outras Áreas',
    text: 'Direito, Arquitetura, Odontologia, Psicologia e mais',
  },
];

export default function Resultados() {
  return (
    <section id="resultados" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Resultados que
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[rgb(234,58,35)] to-[rgb(171,24,66)]">
              Transformam Vidas
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nosso compromisso vai além do ensino. Preparamos nossos alunos para conquistar as melhores universidades do
            país.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map(({ Icon, value, label }) => (
            <div
              key={label}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[rgb(234,58,35)] to-[rgb(171,24,66)] flex items-center justify-center mx-auto mb-4">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <p className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[rgb(234,58,35)] to-[rgb(171,24,66)] mb-2">
                {value}
              </p>
              <p className="text-gray-700 font-semibold">{label}</p>
            </div>
          ))}
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Estudantes celebrando aprovação"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgb(95,0,102)] to-transparent opacity-40"></div>
          </div>
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Histórico de Aprovações em Destaque</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Nossos alunos são aprovados nas melhores universidades do Brasil, incluindo cursos concorridos como
              Medicina, Engenharia, Direito e muito mais.
            </p>
            <div className="space-y-4">
              {cases.map(({ dot, title, text }) => (
                <div key={title} className="flex items-start bg-gradient-to-r from-gray-50 to-white p-4 rounded-xl">
                  <div className={`w-2 h-2 rounded-full ${dot} mt-2 flex-shrink-0`}></div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900 mb-1">{title}</h4>
                    <p className="text-gray-600">{text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <a
                href="http://wa.me/5562999690082?text=Olá! Gostaria de saber mais sobre os resultados e aprovações do Colégio Sinapse."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-[rgb(234,58,35)] to-[rgb(171,24,66)] text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Conheça Mais Cases
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[rgb(95,0,102)] via-[rgb(171,24,66)] to-[rgb(234,58,35)] rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">Seu filho pode ser o próximo case de sucesso!</h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Com o Sistema Bernoulli, professores qualificados e ensino personalizado, preparamos cada aluno para
            alcançar seus objetivos acadêmicos.
          </p>
          <a
            href="http://wa.me/5562999690082?text=Olá! Quero garantir o futuro do meu filho no Colégio Sinapse!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[rgb(171,24,66)] px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Agende uma Visita
          </a>
        </div>
      </div>
    </section>
  );
}

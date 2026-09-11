import { Quote, Star } from 'lucide-react';

const depoimentos = [
  {
    initial: 'M',
    name: 'Maria Clara',
    text: '"Fui muito bem atendida. Avaliação cuidadosa, escuta atenta e profissionalismo do início ao fim. Profissionais qualificados, com orientações claras. A Dra. Patrícia atendeu minha filha, fiz procedimento estético com a Dra. Júlia e faço acompanhamento há anos com a Dra. Tathiane. Recomendo 100%. Excelentes profissionais. Experiência segura, humanizada e tranquila."',
  },
  {
    initial: 'E',
    name: 'Estela Silveira',
    text: '"A clínica é impecável, aconchegante, muito organizado. Quem me atendeu foi a Dra. Julia De Melo. Uma excelente profissional, educada, simpática, 100% eficaz, sempre muito atenciosa com tudo. Atendimento perfeito! Sempre indico ela para as pessoas. ❤️"',
  },
  {
    initial: 'E',
    name: 'Elen Silva',
    text: '"O que eu mais amei neste lugar foi o atendimento, a empatia e a sensação de leveza nas mãos de cada uma. Com elas eu fiz: Re-tratamento de Canal, Extração, Planejamento estético, Clareamento e outras coisas mais... Eu venho de outro estado, passei pelas mãos de vários outros dentistas e não imaginava que existiam pessoas que realmente amam a profissão e tratam o paciente com tanto respeito e dignidade. Confesso que cheguei na equipe da Tathi assustada e receosa, mas o planejamento, a atenção de todas elas aos detalhes, me fizeram querer retornar sempre. Recomendo para todos!"',
  },
];

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="py-24" style={{ backgroundColor: 'rgb(178, 155, 133)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            O Que Nossos Pacientes Dizem
          </h2>
          <p className="text-lg text-gray-800 max-w-3xl mx-auto font-medium">
            A satisfação dos nossos pacientes é nosso maior reconhecimento
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {depoimentos.map((dep, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative flex flex-col h-full"
            >
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-black" />
              </div>
              <div className="flex items-center mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="w-5 h-5 text-black fill-current" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10 flex-1">{dep.text}</p>
              <div className="flex items-center mt-auto">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0">
                  {dep.initial}
                </div>
                <div className="ml-4">
                  <div className="font-bold text-gray-900">{dep.name}</div>
                  <div className="text-sm text-gray-600">Paciente verificado</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-gray-800 mb-6 font-medium">Junte-se a centenas de pacientes satisfeitos</p>
          <a
            href="https://wa.me/553791564540"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-black text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-gray-900 transition-all transform hover:scale-105 shadow-lg"
          >
            Agendar Minha Consulta
          </a>
        </div>
      </div>
    </section>
  );
}

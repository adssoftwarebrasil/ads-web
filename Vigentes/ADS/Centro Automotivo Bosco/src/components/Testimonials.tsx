import { Quote, Star } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

const testimonials = [
  {
    text: '"O Sr Bosco e a equipe dele fazem um trabalho muito bom. Faz anos que eu deixo meu carro ai e sempre fiquei satisfeito. Na única vez que teve algo que eu não gostei, falei com o Sr Bosco e ele de prontidão se dispôs a resolver o problema, investigar melhor, etc, o que só mostra o profissionalismo e a intenção de realmente satisfazer o cliente no fim. Parabéns pelos serviços, e continuem sempre evoluindo."',
    name: 'Gustavo Cesar',
    when: '2 semanas atrás',
  },
  {
    text: '"Somos clientes do Bosco há pelo menos 15 anos, e posso afirmar com total segurança que é muito mais do que uma simples oficina mecânica. A qualidade dos serviços, a honestidade a toda prova, a garantia oferecida e a gentileza no atendimento são insuperáveis. É a única oficina em que confio para cuidar dos carros da minha família, inclusive das minhas filhas. O serviço de coleta e entrega, o agendamento organizado e a equipe técnica extremamente competente fazem toda a diferença. Recomendo fortemente. Profissionalismo e confiança em cada atendimento."',
    name: 'Uffizi Cortinas de Vidro',
    when: '1 mês atrás',
  },
  {
    text: '"Quero deixar meu agradecimento a toda a equipe do Centro Automotivo Bosco! Fiquei extremamente satisfeita com o atendimento da Clara e dos dois rapazes, assim como com o serviço prestado no Symbol. Desde o primeiro contato, senti que meu carro estava em mãos de confiança. Vocês são profissionais ótimos que trabalham com carinho, atenção e muita competência. A honestidade e a transparência no diagnóstico e no orçamento são diferenciais que merecem destaque. Parabéns a cada um de vocês pelo excelente trabalho! É visível o comprometimento em entregar o melhor. Recomendo de olhos fechados o Centro Automotivo Bosco a todos que procuram qualidade, cuidado e um serviço mecânico de altíssimo nível."',
    name: 'Cyntia Gomes',
    when: '3 semanas atrás',
  },
];

const stats = [
  {
    value: '4.9',
    stars: true,
    title: 'Avaliação Média',
    subtitle: 'Baseado em avaliações verificadas',
  },
  {
    value: '+60 mil',
    stars: false,
    title: 'veículos atendidos',
    subtitle: 'Satisfação garantida ',
  },
  {
    value: '20+',
    stars: false,
    title: 'Anos de Confiança',
    subtitle: 'Servindo Fortaleza com excelência',
  },
];

function Testimonials() {
  return (
    <section id="avaliacoes" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="bg-[rgb(204,53,49)]/10 text-[rgb(204,53,49)] px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
            Depoimentos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(10,33,75)] mb-6">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A satisfação dos nossos clientes é a nossa maior conquista. Veja o que eles têm a dizer
            sobre nossos serviços.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12 items-stretch">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative flex flex-col h-full"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[rgb(204,53,49)] rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 italic flex-grow">{t.text}</p>
              <div className="flex items-center justify-between pt-6 border-t border-gray-200 mt-auto">
                <div>
                  <h4 className="font-bold text-[rgb(10,33,75)]">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.when}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((s) => (
            <div key={s.title} className="text-center p-8 bg-[rgb(10,33,75)] rounded-2xl shadow-lg">
              <div className="text-5xl font-bold text-[rgb(204,53,49)] mb-2">{s.value}</div>
              {s.stars && (
                <div className="flex items-center justify-center mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              )}
              <p className="text-white font-semibold mb-2">{s.title}</p>
              <p className="text-gray-300 text-sm mt-2">{s.subtitle}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Junte-se aos milhares de clientes satisfeitos que confiam no Centro Automotivo Bosco
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[rgb(204,53,49)] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[rgb(184,43,39)] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            Agendar Meu Serviço
          </a>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

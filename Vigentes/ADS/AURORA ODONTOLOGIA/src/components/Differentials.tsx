import useInView from '../hooks/useInView';

const DIFFERENTIALS = [
  {
    icon: '❤️',
    title: 'Atendimento Humanizado',
    desc: 'Cada paciente é tratado com atenção, empatia e cuidado individualizados.',
  },
  {
    icon: '📋',
    title: 'Planejamento Individual',
    desc: 'Plano de tratamento exclusivo criado para as necessidades de cada sorriso.',
  },
  {
    icon: '🏥',
    title: 'Estrutura Moderna',
    desc: 'Ambiente confortável e acolhedor, equipado com tecnologia de ponta.',
  },
  {
    icon: '🔬',
    title: 'Tecnologia Avançada',
    desc: 'Diagnósticos precisos e tratamentos seguros com equipamentos modernos.',
  },
  {
    icon: '🌟',
    title: 'Estética Natural',
    desc: 'Resultados que harmonizam com sua beleza, de forma sutil e sofisticada.',
  },
  {
    icon: '👥',
    title: 'Equipe Comprometida',
    desc: 'Profissionais especializados e dedicados a resultados reais e duradouros.',
  },
];

export default function Differentials() {
  const [ref, inView] = useInView<HTMLElement>(0.05);

  return (
    <section id="diferenciais" className="section differentials" ref={ref}>
      <div className="section__inner">
        <div className={`section__header${inView ? ' animate-in' : ''}`}>
          <span className="badge badge--light">Por que nos escolher</span>
          <h2>Nossos Diferenciais</h2>
          <p>O que faz da Aurora Odontologia a escolha certa para o seu sorriso</p>
        </div>

        <div className="diff__grid">
          {DIFFERENTIALS.map((item, i) => (
            <div
              key={i}
              className={`diff-card${inView ? ' animate-in' : ''}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="diff-card__icon-wrap">
                <span className="diff-card__icon">{item.icon}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import useInView from '../hooks/useInView';

const DIFFERENTIALS = [
  {
    title: 'Especialistas em Implantes e Próteses',
    desc: 'Nossos dentistas são altamente qualificados e especializados, garantindo resultados excepcionais.',
  },
  {
    title: 'Tecnologia de Ponta',
    desc: 'Utilizamos a mais avançada tecnologia odontológica para proporcionar um tratamento seguro e eficaz.',
  },
  {
    title: 'Atendimento Personalizado',
    desc: 'Cada paciente recebe um plano de tratamento personalizado, adaptado às suas necessidades específicas.',
  },
  {
    title: 'Ambiente Confortável',
    desc: 'Nossa clínica oferece um ambiente acolhedor e confortável para que você se sinta à vontade durante todo o processo.',
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
              <div className="diff-card__mark" />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

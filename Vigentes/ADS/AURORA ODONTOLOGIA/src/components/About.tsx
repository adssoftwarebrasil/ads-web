import useInView from '../hooks/useInView';
import WhatsAppIcon from './WhatsAppIcon';

const WHATSAPP = 'https://wa.me/5566996456124';

const HIGHLIGHTS = [
  { icon: '🦷', text: 'Implantes e Próteses' },
  { icon: '😁', text: 'Estética Dental' },
  { icon: '💆', text: 'Harmonização Facial' },
  { icon: '👶', text: 'Atendimento Infantil' },
];

export default function About() {
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section id="sobre" className="section about" ref={ref}>
      <div className="section__inner about__inner">
        <div className={`about__visual${inView ? ' animate-slide-left' : ''}`}>
          <div className="about__gallery">
            <figure className="about__photo about__photo--wide">
              <img
                src="/fachada.jpg"
                alt="Fachada da Aurora Odontologia, na Av. Tiradentes, em Rondonópolis"
                loading="lazy"
              />
            </figure>
            <figure className="about__photo">
              <img
                src="/consultorio.jpg"
                alt="Consultório da Aurora Odontologia, com cadeira odontológica e equipamentos"
                loading="lazy"
              />
            </figure>
            <div className="about__logo-card">
              <img src="/logo.png" alt="Aurora Odontologia" />
            </div>
          </div>

          <div className="about__highlights">
            {HIGHLIGHTS.map((item, i) => (
              <div
                key={i}
                className={`about__highlight${inView ? ' animate-in' : ''}`}
                style={{ animationDelay: `${0.3 + i * 0.1}s` }}
              >
                <span>{item.icon}</span>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`about__text${inView ? ' animate-slide-right' : ''}`}>
          <span className="badge badge--blue">Nossa História</span>
          <h2>Sobre a Aurora Odontologia</h2>

          <div className="about__timeline">
            <div className="about__timeline-item">
              <div className="about__timeline-dot" />
              <div>
                <strong>Novembro de 2025</strong>
                <p>
                  {'Nascemos com um propósito claro: '}
                  <em>transformar sorrisos em experiências de autoestima, saúde e confiança.</em>
                </p>
              </div>
            </div>

            <div className="about__timeline-item">
              <div className="about__timeline-dot" />
              <div>
                <strong>Nossa Missão</strong>
                <p>
                  Em poucos meses, a Aurora consolidou-se como referência em atendimento humanizado,
                  tecnologia e excelência odontológica em Rondonópolis.
                </p>
              </div>
            </div>

            <div className="about__timeline-item">
              <div className="about__timeline-dot" />
              <div>
                <strong>Nossa Visão</strong>
                <p>
                  Acreditamos que saúde bucal vai além dos dentes — ela impacta sua confiança, sua
                  imagem e sua qualidade de vida.
                </p>
              </div>
            </div>
          </div>

          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-wa">
            <WhatsAppIcon size={18} />
            Conheça Nossa Clínica
          </a>
        </div>
      </div>
    </section>
  );
}

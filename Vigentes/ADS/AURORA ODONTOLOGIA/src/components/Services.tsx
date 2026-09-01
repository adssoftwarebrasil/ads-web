import useInView from '../hooks/useInView';
import WhatsAppIcon from './WhatsAppIcon';

const WHATSAPP = 'https://wa.me/5566996456124';

const SERVICES = [
  {
    img: '/servicos/implante.jpg',
    name: 'Implante Dentário',
    desc: 'Solução segura e moderna para substituir dentes perdidos, devolvendo função mastigatória, estética e autoestima.',
  },
  {
    img: '/servicos/facetas.jpg',
    name: 'Facetas e Lentes de Resina',
    desc: 'Corrigem imperfeições, melhoram o formato e a cor dos dentes e proporcionam um sorriso mais harmonioso, natural e bonito.',
  },
  {
    img: '/servicos/clareamento.jpg',
    name: 'Clareamento Dental',
    desc: 'Deixe seu sorriso mais branco e radiante com técnica segura, eficaz e que respeita a saúde dos seus dentes, devolvendo mais autoestima e confiança.',
  },
  {
    img: '/servicos/protese.jpg',
    name: 'Prótese Dentária',
    desc: 'Próteses fixas e removíveis para reabilitar o seu sorriso com conforto.',
  },
  {
    img: '/servicos/ortodontia.jpg',
    name: 'Ortodontia',
    desc: 'Alinhamento dos dentes e correção da mordida para um sorriso mais bonito e saudável.',
  },
  {
    img: '/servicos/canal.jpg',
    name: 'Tratamento de Canal',
    desc: 'Alívio da dor e preservação do dente, devolvendo saúde e bem-estar para o seu sorriso.',
  },
  {
    img: '/servicos/siso.jpg',
    name: 'Extração de Siso',
    desc: 'Procedimento seguro e cuidadoso para remover o dente do siso, aliviando dores e prevenindo complicações futuras.',
  },
  {
    img: '/servicos/botox.jpg',
    name: 'Botox',
    desc: 'Aplicação de toxina botulínica para suavizar linhas de expressão, proporcionando um aspecto mais jovem e harmonioso.',
  },
  {
    img: '/servicos/bioestimulador.jpg',
    name: 'Bioestimulador de Colágeno',
    desc: 'Estimula a produção natural de colágeno, melhorando a firmeza, a elasticidade e a qualidade da sua pele de dentro para fora.',
  },
];

export default function Services() {
  const [ref, inView] = useInView<HTMLElement>(0.05);

  return (
    <section id="servicos" className="section services" ref={ref}>
      <div className="section__inner">
        <div className={`section__header${inView ? ' animate-in' : ''}`}>
          <span className="badge badge--blue">O que oferecemos</span>
          <h2>Nossos Serviços</h2>
          <p>Tratamentos completos para sua saúde bucal e estética facial</p>
        </div>

        <div className="services__grid">
          {SERVICES.map((service, i) => (
            <article
              key={service.name}
              className={`service-card${inView ? ' animate-in' : ''}`}
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <div className="service-card__media">
                <img src={service.img} alt={service.name} loading="lazy" />
              </div>
              <div className="service-card__body">
                <h3 className="service-card__name">{service.name}</h3>
                <div className="service-card__line" />
                <p className="service-card__desc">{service.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div
          className={`section__cta${inView ? ' animate-in' : ''}`}
          style={{ animationDelay: '0.8s' }}
        >
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-wa btn-lg">
            <WhatsAppIcon size={20} />
            Agendar Consulta Agora
          </a>
        </div>
      </div>
    </section>
  );
}

import { IconCar, IconCheck, IconDoc, IconDollar } from './icons';

const servicos = [
  { icon: <IconCar />, name: 'Busca e Apreensão' },
  { icon: <IconDoc />, name: 'Revisão de Contrato' },
  { icon: <IconDollar />, name: 'Quitação' },
  { icon: <IconCheck />, name: 'Veículo no seu Nome' },
];

export default function Services() {
  return (
    <section className="services">
      <div className="services-inner">
        <div className="services-header">
          <div className="section-label">Nossos Serviços</div>
          <h2 className="section-title">O que a Amiga resolve para você</h2>
        </div>
        <div className="services-grid">
          {servicos.map((s) => (
            <div className="service-card" key={s.name}>
              <div className="service-icon">{s.icon}</div>
              <div className="service-name">{s.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { services, whatsappUrl } from '../data';
import { AutomotiveIcon } from '../components/Icons';
import ServiceDialog from '../components/ServiceDialog';

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  return (
    <section id="servicos" className="services section-pad" aria-labelledby="services-title">
      <div className="container">
        <div className="section-heading">
          <div><p className="eyebrow"><span className="section-number">01 /</span> DO PNEU AO MOTOR</p><h2 id="services-title">Cada cuidado.<br /><span className="muted-heading">Um caminho mais tranquilo.</span></h2></div>
          <p>Um só lugar para cuidar do que faz<br className="desktop-break" /> seu carro seguir bem. Conheça nossos<br className="desktop-break" /> serviços e conte com a Taiti.</p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <button className="service-card" type="button" key={service.id} onClick={() => setSelectedService(service)} aria-label={`Saiba mais sobre ${service.name.toLocaleLowerCase('pt-BR')}`} aria-haspopup="dialog">
              <span className="service-card-top"><AutomotiveIcon type={service.icon} /><span className="service-number">{service.number}</span></span>
              <h3>{service.name}</h3><p>{service.description}</p>
              <span className="service-card-bottom"><span>Saiba mais</span><ArrowUpRight size={21} /></span>
            </button>
          ))}
        </div>
        <div className="services-note"><span>Não sabe por onde começar? Conte para a gente o que seu carro precisa.</span><a className="text-link" href={whatsappUrl('Olá, Taiti Pneus! Preciso de orientação sobre um serviço para o meu carro.')} target="_blank" rel="noopener noreferrer">Vamos conversar <ArrowUpRight size={17} /></a></div>
      </div>
      <ServiceDialog service={selectedService} onClose={() => setSelectedService(null)} />
    </section>
  );
}

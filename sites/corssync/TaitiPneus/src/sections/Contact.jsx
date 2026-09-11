import { ArrowUpRight, Clock3, MapPin, Navigation, Phone } from 'lucide-react';
import facadePhoto from '../assets/fachada-taiti.jpeg';
import { business, mapsUrl, whatsappUrl } from '../data';
import { WhatsAppIcon } from '../components/Icons';

export default function Contact() {
  return (
    <section id="contato" className="contact section-pad" aria-labelledby="contact-title">
      <div className="container">
        <div className="section-heading contact-heading"><div><p className="eyebrow"><span className="section-number">03 /</span> SEU PRÓXIMO DESTINO</p><h2 id="contact-title">Pode chegar.<br />A casa é sua.</h2></div><p>Estamos no Baú, em Cuiabá.<br />É só procurar a fachada amarela.</p></div>
        <div className="contact-grid">
          <a className="facade-card" href={mapsUrl} target="_blank" rel="noopener noreferrer" aria-label="Ver a localização da Taiti Pneus no Google Maps"><img src={facadePhoto} width="1200" height="1600" loading="lazy" alt="Fachada amarela da Taiti Pneus Auto Center, no número 280 da Avenida Historiador Rubens de Mendonça" /><span className="facade-address"><span><MapPin size={18} /><span>BAÚ · CUIABÁ, MT</span></span><ArrowUpRight size={24} /></span></a>
          <div className="contact-details">
            <div className="contact-info"><span className="contact-icon"><MapPin size={23} /></span><div><h3>Bem no seu caminho</h3><p>{business.address}<br />{business.neighborhood}<br /><span className="postal-code">CEP {business.postalCode}</span></p><a className="text-link" href={mapsUrl} target="_blank" rel="noopener noreferrer">Traçar minha rota <Navigation size={15} /></a></div></div>
            <div className="contact-info"><span className="contact-icon"><Clock3 size={23} /></span><div><h3>Nosso horário</h3><p className="contact-hours">{business.hours}</p><p className="contact-small">Consulte os dias de atendimento pelo WhatsApp.</p></div></div>
            <div className="contact-info"><span className="contact-icon"><Phone size={22} /></span><div><h3>Uma conversa resolve o primeiro passo</h3><a className="phone-link" href={`tel:+${business.phone}`}>{business.phoneDisplay}</a><p className="contact-small">Conte o que seu carro precisa e consulte um horário.</p></div></div>
            <a className="button button--dark contact-button" href={whatsappUrl()} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> Conversar com a Taiti <ArrowUpRight size={19} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

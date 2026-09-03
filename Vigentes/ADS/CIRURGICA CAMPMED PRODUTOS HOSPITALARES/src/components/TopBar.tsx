import { contato } from '../data/site';
import { Clock, MapPin, Phone } from './icons';

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="shell">
        <a className="topbar-item" href={`tel:+${contato.whatsappNumero}`}>
          <Phone size={14} />
          {contato.whatsapp}
        </a>
        <span className="topbar-item topbar-hide-sm">
          <MapPin size={14} />
          {contato.enderecoCurto}
        </span>
        <span className="topbar-spacer" />
        <span className="topbar-item topbar-hide-sm">
          <Clock size={14} />
          {contato.horarioResumo}
        </span>
      </div>
    </div>
  );
}

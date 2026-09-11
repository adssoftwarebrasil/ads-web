import { whatsGeral } from '../data/site';
import { WhatsApp } from './icons';

export default function WhatsappFloat() {
  return (
    <a
      className="wa-float"
      href={whatsGeral}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com um especialista da CAMPMED pelo WhatsApp"
    >
      <WhatsApp size={22} />
      <span className="label">Falar com especialista</span>
    </a>
  );
}

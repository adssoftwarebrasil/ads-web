import { ArrowUpRight } from 'lucide-react';
import { whatsappUrl } from '../data';
import { WhatsAppIcon } from '../components/Icons';

export default function NextStop() {
  return (
    <section className="next-stop" aria-labelledby="next-stop-title"><div className="container next-stop-inner"><div><p className="eyebrow">O PRÓXIMO PASSO É SIMPLES.</p><h2 id="next-stop-title">Seu carro merece esse cuidado.</h2></div><a className="button button--dark" href={whatsappUrl()} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> Vamos agendar? <ArrowUpRight size={20} /></a></div></section>
  );
}

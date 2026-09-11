import { useEffect, useRef } from 'react';
import { ArrowUpRight, Check, X } from 'lucide-react';
import { AutomotiveIcon, WhatsAppIcon } from './Icons';
import { whatsappUrl } from '../data';

export default function ServiceDialog({ service, onClose }) {
  const dialog = useRef(null);

  useEffect(() => {
    if (!service) return;
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;
    element.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus({ preventScroll: true });
    };
  }, [service]);

  if (!service) return null;

  return (
    <dialog ref={dialog} className="service-dialog" aria-labelledby="dialog-title" onCancel={(event) => { event.preventDefault(); onClose(); }} onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div className="dialog-content">
        <button className="dialog-close" type="button" aria-label="Fechar detalhes do serviço" onClick={onClose}><X size={22} /></button>
        <span className="dialog-icon"><AutomotiveIcon type={service.icon} size={42} /></span>
        <p className="eyebrow">CUIDADOS TAITI · {service.number}</p>
        <h2 id="dialog-title">{service.name}</h2>
        <p>{service.detail}</p>
        <ul className="service-signs">{service.signs.map((sign) => <li key={sign}><Check size={17} />{sign}</li>)}</ul>
        <a className="button button--yellow" href={whatsappUrl(`Olá, Taiti Pneus! Gostaria de informações sobre ${service.name.toLocaleLowerCase('pt-BR')} para o meu veículo.`)} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> Consultar pelo WhatsApp <ArrowUpRight size={18} /></a>
      </div>
    </dialog>
  );
}

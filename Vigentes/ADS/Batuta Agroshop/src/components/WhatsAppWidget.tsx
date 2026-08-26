import { useState } from 'react';
import { X } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { whatsappLink } from '../constants';

interface Contact {
  letter: string;
  name: string;
  role: string;
  badge: string;
  avatarBg: string;
  badgeClass: string;
  number: string;
}

const contacts: Contact[] = [
  {
    letter: 'F',
    name: 'Fernando',
    role: 'Atacado',
    badge: 'Atacado',
    avatarBg: 'bg-blue-500',
    badgeClass: 'bg-blue-50 text-blue-600',
    number: '554491755988',
  },
  {
    letter: 'B',
    name: 'Bruno',
    role: 'Comercial',
    badge: 'Comercial',
    avatarBg: 'bg-emerald-500',
    badgeClass: 'bg-brand/10 text-brand',
    number: '554491116604',
  },
  {
    letter: 'E',
    name: 'Elis',
    role: 'Comercial',
    badge: 'Comercial',
    avatarBg: 'bg-amber-500',
    badgeClass: 'bg-brand/10 text-brand',
    number: '554491343680',
  },
  {
    letter: 'V',
    name: 'Vini',
    role: 'Comercial',
    badge: 'Comercial',
    avatarBg: 'bg-rose-500',
    badgeClass: 'bg-brand/10 text-brand',
    number: '554491612980',
  },
  {
    letter: 'D',
    name: 'Danilo',
    role: 'Comercial',
    badge: 'Comercial',
    avatarBg: 'bg-cyan-500',
    badgeClass: 'bg-brand/10 text-brand',
    number: '554491655761',
  },
  {
    letter: 'A',
    name: 'Ademir',
    role: 'Comercial',
    badge: 'Comercial',
    avatarBg: 'bg-violet-500',
    badgeClass: 'bg-brand/10 text-brand',
    number: '5544991764768',
  },
];

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] max-w-sm transition-all duration-300 ${
          open
            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
            : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
        }`}
      >
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-navy/10">
          <div className="bg-navy px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand/20 flex items-center justify-center">
                <WhatsAppIcon width={22} height={22} fill="rgb(120,193,55)" />
              </div>
              <div>
                <p className="text-cream font-bold text-sm">Batuta Agroshop</p>
                <p className="text-cream/60 text-xs">Escolha com quem falar</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-cream/60 hover:text-cream transition-colors p-1 rounded-lg hover:bg-white/10"
            >
              <X width={18} height={18} className="lucide lucide-x " />
            </button>
          </div>
          <div className="p-3 flex flex-col gap-1.5">
            {contacts.map((c) => (
              <a
                key={c.number}
                href={whatsappLink(c.number)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-cream-dark transition-colors group"
              >
                <div className={`${c.avatarBg} w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                  {c.letter}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-navy text-sm">{c.name}</p>
                  <p className="text-navy/50 text-xs">{c.role}</p>
                </div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full shrink-0 ${c.badgeClass}`}>{c.badge}</span>
                <WhatsAppIcon
                  width={16}
                  height={16}
                  fill="rgb(120,193,55)"
                  className="shrink-0 opacity-60 group-hover:opacity-100 transition-opacity"
                />
              </a>
            ))}
          </div>
          <div className="px-4 pb-4">
            <p className="text-navy/40 text-xs text-center">Atendimento via WhatsApp · Seg–Sex 7h–18h</p>
          </div>
        </div>
      </div>
      <button
        onClick={() => setOpen((v) => !v)}
        className={`fixed bottom-5 right-4 sm:right-6 z-50 w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 bg-[#25D366] hover:bg-[#20c05a] hover:scale-110 scale-100`}
        aria-label="Contato via WhatsApp"
      >
        {open ? (
          <X width={28} height={28} className="text-white" />
        ) : (
          <WhatsAppIcon width={28} height={28} fill="white" />
        )}
      </button>
      {!open && (
        <span className="fixed bottom-5 right-4 sm:right-6 z-40 w-14 h-14 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none"></span>
      )}
    </>
  );
}

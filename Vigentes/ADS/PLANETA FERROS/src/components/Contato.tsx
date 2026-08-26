import { useState, type FormEvent } from 'react';
import { MessageCircle, Phone, Mail, MapPin, Clock, type LucideIcon } from 'lucide-react';
import {
  PHONE_DISPLAY,
  PHONE_HREF,
  EMAIL,
  EMAIL_HREF,
  ADDRESS,
  HOURS,
  WA_DEFAULT,
  WA_NUMBER,
} from '../data';

interface Contato {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
  break?: boolean;
}

const contatos: Contato[] = [
  { icon: Phone, label: 'Telefone', value: PHONE_DISPLAY, href: PHONE_HREF },
  { icon: Mail, label: 'E-mail', value: EMAIL, href: EMAIL_HREF },
  { icon: MapPin, label: 'Endereço', value: ADDRESS },
  { icon: Clock, label: 'Horário de Atendimento', value: HOURS },
];

export default function Contato() {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const texto = `Olá! Meu nome é ${nome}.\n\n${mensagem}`;
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank', 'noopener');
  };

  return (
    <section id="contato" className="w-full py-16 md:py-24 px-4 md:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-accent font-semibold text-xs tracking-widest uppercase mb-3">
            Contato
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary mb-4">
            Pronto para agilizar sua obra?
          </h2>
          <p className="text-secondary max-w-2xl mx-auto text-base md:text-lg">
            Fale com nossa equipe agora, tire dúvidas e receba seu orçamento sem compromisso.
          </p>
        </div>
        <div className="max-w-2xl mx-auto mb-10">
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener"
            className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20BD5C] text-white font-bold py-4 px-6 rounded-2xl text-lg shadow-lg shadow-green-500/25 transition-all hover:scale-[1.01]"
          >
            <MessageCircle width={22} height={22} aria-hidden="true" />
            Chamar no WhatsApp agora
          </a>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-5">
            {contatos.map((contato) => {
              const Icon = contato.icon;
              const inner = (
                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                    <Icon width={20} height={20} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                      {contato.label}
                    </p>
                    <p className="text-primary font-medium text-sm leading-snug">{contato.value}</p>
                  </div>
                </div>
              );
              return contato.href ? (
                <a
                  key={contato.label}
                  href={contato.href}
                  className="hover:opacity-80 transition-opacity block"
                >
                  {inner}
                </a>
              ) : (
                <div key={contato.label}>{inner}</div>
              );
            })}
          </div>
          <form
            className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 space-y-5"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Seu nome
              </label>
              <input
                required
                placeholder="Como posso te chamar?"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition placeholder:text-gray-300"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Mensagem
              </label>
              <textarea
                required
                placeholder="Descreva o produto e quantidade que precisa..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition resize-none placeholder:text-gray-300"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-accent text-white font-semibold py-3.5 rounded-xl hover:bg-accent/90 transition-colors flex items-center justify-center gap-2 text-sm"
            >
              <MessageCircle width={17} height={17} aria-hidden="true" /> Pedir Orçamento no WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

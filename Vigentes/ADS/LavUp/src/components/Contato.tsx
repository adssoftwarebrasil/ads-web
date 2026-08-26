import { useState } from 'react';
import { Facebook, Instagram, MapPin, Phone, Send } from 'lucide-react';
import type { FormEvent } from 'react';
import type { LucideIcon } from 'lucide-react';

const WHATSAPP_NUMBER = '5516992979707';

interface ContactCard {
  Icon: LucideIcon;
  color: string;
  label: string;
  value: string;
  href: string;
}

const contactCards: ContactCard[] = [
  {
    Icon: Phone,
    color: 'rgb(38, 182, 230)',
    label: 'WhatsApp',
    value: '(16) 9 9297-9707',
    href: 'http://wa.me/5516992979707',
  },
  {
    Icon: MapPin,
    color: 'rgb(190, 83, 160)',
    label: 'Endereço',
    value: 'R. João Gurgel, 1386 - Jd. do Carmo',
    href: 'https://maps.google.com/?q=Lavup+Araraquara',
  },
  {
    Icon: Instagram,
    color: 'rgb(84, 46, 145)',
    label: 'Instagram',
    value: '@lavupararaquara',
    href: 'https://www.instagram.com/lavupararaquara/',
  },
  {
    Icon: Facebook,
    color: 'rgb(118, 203, 199)',
    label: 'Facebook',
    value: 'Lavup Araraquara',
    href: 'https://www.facebook.com/profile.php?id=61557185141903&mibextid=LQQJ4d',
  },
];

export default function Contato() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const lines = [
      'Olá! Gostaria de saber mais sobre a Lavup Araraquara.',
      `Nome: ${name}`,
    ];
    if (phone) lines.push(`Telefone: ${phone}`);
    if (message) lines.push(`Mensagem: ${message}`);
    const text = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 section-fade">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: 'rgba(118, 203, 199, 0.15)', color: 'rgb(38, 182, 230)' }}
          >
            Fale conosco
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-4">
            Entre em{' '}
            <span
              style={{
                background:
                  'linear-gradient(135deg, rgb(38, 182, 230), rgb(118, 203, 199)) text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              contato
            </span>
          </h2>
          <p className="text-gray-500 text-lg">
            Tem dúvidas? Envie uma mensagem via WhatsApp ou venha nos visitar!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="slide-right-fade">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {contactCards.map(({ Icon, color, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 bg-white group"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                    style={{ color }}
                  >
                    <Icon size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-400 font-medium mb-0.5">{label}</p>
                    <p className="text-gray-800 text-sm font-semibold truncate">{value}</p>
                  </div>
                </a>
              ))}
            </div>
            <div className="rounded-2xl border border-gray-100 p-6 shadow-sm bg-gray-50/50">
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                Envie uma mensagem
              </h3>
              <p className="text-gray-500 text-sm mb-5">
                Preencha o formulário e você será redirecionado para o WhatsApp
                com os dados preenchidos.
              </p>
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Seu nome *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: João da Silva"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all"
                    style={{ ['--tw-ring-color' as string]: 'rgb(38,182,230)' }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    placeholder="(16) 9 0000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Mensagem
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Olá, gostaria de saber mais sobre..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-white text-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-95"
                  style={{
                    background:
                      'linear-gradient(135deg, rgb(84, 46, 145), rgb(38, 182, 230))',
                  }}
                >
                  <Send size={16} />
                  Enviar via WhatsApp
                </button>
              </form>
            </div>
          </div>
          <div className="slide-left-fade map-container">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3704.502310104183!2d-48.18713632472206!3d-21.799514780049797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8f374e4034c6b%3A0xffe34bdf538b7c33!2sLavup%20Araraquara%20Lavanderia%20de%20Autoatendimento!5e0!3m2!1spt-BR!2sbr!4v1776701897094!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Lavup Araraquara"
                style={{ border: '0px', minHeight: '400px' }}
              ></iframe>
            </div>
            <div className="mt-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 flex-shrink-0"
                  style={{ color: 'rgb(190, 83, 160)' }}
                />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    Lavup Araraquara
                  </p>
                  <p className="text-gray-500 text-sm">
                    R. João Gurgel, 1386 - Jardim do Carmo
                  </p>
                  <p className="text-gray-500 text-sm">
                    Araraquara - SP, 14800-180
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState, type FormEvent } from 'react';
import { Phone, MessageSquare, User, Send } from 'lucide-react';
import { WhatsAppIcon, EmailIcon } from './icons';

const WHATSAPP_NUMBER = '5524998199101';

const subjects = [
  'Informações sobre o Restaurante',
  'Reserva de Quarto',
  'Cardápio e Preços',
  'Grupo ou Evento',
  'Outro assunto',
];

export default function Contato() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState(subjects[0]);
  const [message, setMessage] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    let text = `Olá! Meu nome é ${name}.\n*Assunto:* ${subject}`;
    if (phone) text += `\n*WhatsApp/Telefone:* ${phone}`;
    text += `\n\n${message}`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );
  }

  return (
    <section id="contato" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="transition-all duration-700 opacity-100 translate-x-0">
            <span className="inline-block text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">
              Contato
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Entre em Contato Conosco
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Dúvidas sobre o cardápio, preços ou quer fazer uma reserva? Preencha o formulário e
              nossa mensagem será enviada diretamente pelo WhatsApp.
            </p>
            <div className="space-y-5">
              <a
                href="http://wa.me/5524998199101"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-orange/20 transition-colors">
                  <Phone size={20} className="text-brand-orange" />
                </div>
                <div>
                  <div className="text-gray-400 text-xs font-medium uppercase tracking-wide">
                    WhatsApp
                  </div>
                  <div className="text-brand-dark font-semibold text-sm group-hover:text-brand-orange transition-colors">
                    +55 (24) 99819-9101
                  </div>
                </div>
              </a>
              <a
                href="https://www.instagram.com/stop_bar_2001/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-orange/20 transition-colors">
                  <MessageSquare size={20} className="text-brand-orange" />
                </div>
                <div>
                  <div className="text-gray-400 text-xs font-medium uppercase tracking-wide">
                    Instagram
                  </div>
                  <div className="text-brand-dark font-semibold text-sm group-hover:text-brand-orange transition-colors">
                    @stop_bar_2001
                  </div>
                </div>
              </a>
              <a
                href="mailto:marineslorenzettbr@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-orange/20 transition-colors">
                  <EmailIcon className="w-5 h-5 fill-brand-orange" />
                </div>
                <div>
                  <div className="text-gray-400 text-xs font-medium uppercase tracking-wide">
                    E-mail
                  </div>
                  <div className="text-brand-dark font-semibold text-sm group-hover:text-brand-orange transition-colors">
                    marineslorenzettbr@gmail.com
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="bg-brand-cream rounded-3xl p-6 md:p-8 border border-gray-100 transition-all duration-700 delay-200 opacity-100 translate-x-0">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-brand-dark mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <User size={14} className="text-brand-orange" />
                    Seu nome *
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Como podemos te chamar?"
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-brand-dark placeholder-gray-400 text-sm focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-dark mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <Phone size={14} className="text-brand-orange" />
                    WhatsApp / Telefone
                  </span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(24) 99999-9999"
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-brand-dark placeholder-gray-400 text-sm focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-dark mb-1.5">Assunto *</label>
                <select
                  name="subject"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-brand-dark placeholder-gray-400 text-sm focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all duration-200"
                >
                  {subjects.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-dark mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <MessageSquare size={14} className="text-brand-orange" />
                    Mensagem *
                  </span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Escreva sua mensagem, dúvida ou pedido..."
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-brand-dark placeholder-gray-400 text-sm focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all duration-200 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn-primary w-full justify-center py-4 text-base shadow-lg shadow-brand-orange/25"
              >
                <WhatsAppIcon className="w-5 h-5 fill-current" />
                Enviar pelo WhatsApp
                <Send size={16} />
              </button>
              <p className="text-center text-gray-400 text-xs">
                Ao enviar, você será redirecionado para o WhatsApp com a mensagem pré-preenchida.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

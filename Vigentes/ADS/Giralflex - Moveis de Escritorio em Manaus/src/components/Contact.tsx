import { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';
import { WHATSAPP_URL, WhatsAppIcon, FacebookIcon } from './icons';

const subjects = [
  'Compra de Cadeira',
  'Compra de Mesa',
  'Reforma de Móveis',
  'Peças de Reposição',
  'Assistência Técnica',
  'Orçamento Geral',
  'Outro',
];

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${name}.\nAssunto: ${subject}\nTelefone: ${phone}\n\n${message}`;
    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container-max section-padding">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16 transition-all duration-700 opacity-100 translate-y-0">
          <p className="text-brand-red font-semibold text-sm uppercase tracking-wider mb-2">Fale Conosco</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy leading-tight">
            Entre em <span className="text-brand-blue">Contato</span>
          </h2>
          <p className="mt-4 text-brand-navy/60 leading-relaxed">
            Envie sua mensagem ou visite nosso showroom. Estamos prontos para atender você!
          </p>
        </div>
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 mb-10 lg:mb-12">
          <div className="lg:col-span-3 transition-all duration-700 delay-100 opacity-100 translate-x-0">
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-brand-navy mb-1.5">Seu Nome</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Digite seu nome"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-brand-navy placeholder:text-brand-navy/30 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all text-sm"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-brand-navy mb-1.5">Telefone / WhatsApp</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="(92) 99999-9999"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-brand-navy placeholder:text-brand-navy/30 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all text-sm"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-semibold text-brand-navy mb-1.5">Assunto</label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all text-sm"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                >
                  <option value="">Selecione um assunto</option>
                  {subjects.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-brand-navy mb-1.5">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Descreva o que você precisa..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-brand-navy placeholder:text-brand-navy/30 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all text-sm resize-none"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-3.5 rounded-xl font-bold transition-all duration-300 hover:shadow-lg hover:shadow-brand-red/25"
              >
                <Send width={18} height={18} className="lucide lucide-send " />
                Enviar pelo WhatsApp
              </button>
            </form>
          </div>
          <div className="lg:col-span-2 space-y-5 transition-all duration-700 delay-300 opacity-100 translate-x-0">
            <div className="space-y-4">
              <a href="tel:92981115255" className="flex items-start gap-4 group p-4 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue/20 transition-colors">
                  <Phone width={18} height={18} className="lucide lucide-phone text-brand-blue" />
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-navy">Telefones</p>
                  <p className="text-sm text-brand-navy/60">(92) 98111-5255</p>
                  <p className="text-sm text-brand-navy/60">(92) 3611-1153</p>
                </div>
              </a>
              <a href="mailto:vendas@giralflex.com.br" className="flex items-start gap-4 group p-4 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-brand-red/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-red/20 transition-colors">
                  <Mail width={18} height={18} className="lucide lucide-mail text-brand-red" />
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-navy">E-mail</p>
                  <p className="text-sm text-brand-navy/60">vendas@giralflex.com.br</p>
                </div>
              </a>
              <div className="flex items-start gap-4 p-4 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-brand-yellow/20 flex items-center justify-center flex-shrink-0">
                  <MapPin width={18} height={18} className="lucide lucide-map-pin text-brand-navy" />
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-navy">Endereço</p>
                  <p className="text-sm text-brand-navy/60">Av. Carvalho Leal, 1539 - Cachoeirinha, Manaus - AM, 69070-000</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-brand-sky/30 flex items-center justify-center flex-shrink-0">
                  <Clock width={18} height={18} className="lucide lucide-clock text-brand-blue" />
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-navy">Horário</p>
                  <p className="text-sm text-brand-navy/60">Seg a Sex: 08h - 17h</p>
                  <p className="text-sm text-brand-navy/60">Sábado: 09h - 13h</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4">
                <a
                  href="https://www.instagram.com/giralflex/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-brand-navy/5 hover:bg-brand-navy/10 flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram width={18} height={18} className="lucide lucide-instagram text-brand-navy/70" />
                </a>
                <a
                  href="https://www.facebook.com/giralflex/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-brand-navy/5 hover:bg-brand-navy/10 flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-[18px] h-[18px] fill-brand-navy/70" />
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-brand-navy/5 hover:bg-brand-navy/10 flex items-center justify-center transition-colors"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon className="w-[18px] h-[18px] fill-brand-navy/70" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full rounded-2xl overflow-hidden border border-gray-200 shadow-sm transition-all duration-700 delay-500 opacity-100 translate-y-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.8959243150284!2d-60.008678925028946!3d-3.1222201968532857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c0573a3134a59%3A0x46dff0873143fd4e!2sGiralflex!5e0!3m2!1spt-BR!2sbr!4v1770339550249!5m2!1spt-BR!2sbr"
            className="w-full h-[300px] sm:h-[400px]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Giralflex"
            style={{ border: '0px' }}
          ></iframe>
        </div>
      </div>
    </section>
  );
}

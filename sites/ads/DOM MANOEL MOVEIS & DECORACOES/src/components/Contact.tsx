import { useState } from 'react';
import { MapPin, Clock, Phone, Instagram, Send } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `Olá! Meu nome é ${name}.` +
      ` Meu WhatsApp/Telefone é ${phone}.` +
      (message ? ` ${message}` : '');
    const url = `http://wa.me/556696455950?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <span className="h-px w-12 bg-[rgb(183,149,108)]"></span>
            <span className="text-[rgb(183,149,108)] text-sm font-semibold uppercase tracking-widest">
              Contato
            </span>
            <span className="h-px w-12 bg-[rgb(183,149,108)]"></span>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl text-[rgb(103,66,42)] font-bold mb-4">
            Venha nos visitar ou
            <br />
            <span className="text-[rgb(183,149,108)]">fale pelo WhatsApp</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            Estamos prontos para ajudar você a encontrar o móvel perfeito. Entre em contato agora
            mesmo!
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-[rgb(183,149,108)]/10 hover:border-[rgb(183,149,108)]/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[rgb(183,149,108)]/15 flex items-center justify-center mb-3">
                  <MapPin size={18} className="text-[rgb(103,66,42)]" />
                </div>
                <div className="text-xs font-semibold text-[rgb(183,149,108)] uppercase tracking-wider mb-1">
                  Endereço
                </div>
                <p className="text-[rgb(103,66,42)] text-sm font-medium whitespace-pre-line">
                  {'Av. dos Ingás, 3855\nJardim Imperial, Sinop - MT\nCEP: 78555-024'}
                </p>
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-[rgb(183,149,108)]/10 hover:border-[rgb(183,149,108)]/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[rgb(183,149,108)]/15 flex items-center justify-center mb-3">
                  <Clock size={18} className="text-[rgb(103,66,42)]" />
                </div>
                <div className="text-xs font-semibold text-[rgb(183,149,108)] uppercase tracking-wider mb-1">
                  Horário de funcionamento
                </div>
                <p className="text-[rgb(103,66,42)] text-sm font-medium whitespace-pre-line">
                  {'Segunda a Sexta: 08h às 18h\nSábado: 08h às 12h'}
                </p>
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-[rgb(183,149,108)]/10 hover:border-[rgb(183,149,108)]/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[rgb(183,149,108)]/15 flex items-center justify-center mb-3">
                  <Phone size={18} className="text-[rgb(103,66,42)]" />
                </div>
                <div className="text-xs font-semibold text-[rgb(183,149,108)] uppercase tracking-wider mb-1">
                  WhatsApp / Telefone
                </div>
                <a
                  href="http://wa.me/556696455950"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[rgb(103,66,42)] text-sm font-medium hover:text-[rgb(183,149,108)] transition-colors whitespace-pre-line"
                >
                  (66) 9 9645-5950
                </a>
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-[rgb(183,149,108)]/10 hover:border-[rgb(183,149,108)]/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[rgb(183,149,108)]/15 flex items-center justify-center mb-3">
                  <Instagram size={18} className="text-[rgb(103,66,42)]" />
                </div>
                <div className="text-xs font-semibold text-[rgb(183,149,108)] uppercase tracking-wider mb-1">
                  Instagram
                </div>
                <a
                  href="https://www.instagram.com/dom_manoel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[rgb(103,66,42)] text-sm font-medium hover:text-[rgb(183,149,108)] transition-colors whitespace-pre-line"
                >
                  @dom_manoel
                </a>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md border border-[rgb(183,149,108)]/10 h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.9721455502425!2d-55.5135!3d-11.8608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDUxJzM4LjkiUyA1NcKwMzAnNDguNiJX!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Dom Manoel"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-md border border-[rgb(183,149,108)]/10">
            <h3 className="font-serif text-2xl text-[rgb(103,66,42)] font-bold mb-2">
              Envie uma mensagem
            </h3>
            <p className="text-gray-500 text-sm mb-7">
              Preencha os dados abaixo e você será direcionado ao WhatsApp com a mensagem já
              preenchida.
            </p>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-semibold text-[rgb(103,66,42)] mb-2">
                  Seu nome *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: João Silva"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(183,149,108)]/50 focus:border-[rgb(183,149,108)] transition-all placeholder-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[rgb(103,66,42)] mb-2">
                  WhatsApp / Telefone *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(66) 9 9000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(183,149,108)]/50 focus:border-[rgb(183,149,108)] transition-all placeholder-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[rgb(103,66,42)] mb-2">
                  Mensagem
                </label>
                <textarea
                  rows={4}
                  placeholder="Conte-nos o que você precisa... (ex: mesa para 8 pessoas, roupeiro 3 portas, etc.)"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(183,149,108)]/50 focus:border-[rgb(183,149,108)] transition-all placeholder-gray-400 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[rgb(103,66,42)] hover:bg-[rgb(183,149,108)] text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg text-sm"
              >
                <Send size={16} />
                Enviar pelo WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

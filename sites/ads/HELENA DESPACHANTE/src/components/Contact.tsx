import { useState } from 'react';
import { Phone, MapPin, Clock, Instagram, Send } from 'lucide-react';
import { WhatsAppIcon } from './icons';

const services = [
  'Quitação de Débitos',
  'Transferência de Veículo',
  'Licenciamento',
  'Primeiro Emplacamento',
  'Mudança de Característica',
  'Licenças e ANTT',
  'Outro',
];

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `Olá Helena! Meu nome é ${name}.`;
    if (service) text += `\nServiço desejado: ${service}.`;
    if (phone) text += `\nWhatsApp/Telefone: ${phone}.`;
    if (message) text += `\nMensagem: ${message}`;
    const url = `http://wa.me/556696535401?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-dark relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-yellow/3 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16 transition-all duration-700 opacity-100 translate-y-0">
          <span className="inline-block text-brand-yellow text-xs font-bold uppercase tracking-widest mb-4">Fale conosco</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Entre em <span className="text-brand-yellow">Contato</span></h2>
          <p className="text-brand-gray max-w-lg mx-auto text-lg">Preencha o formulário e fale diretamente com Helena pelo WhatsApp.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="transition-all duration-700 delay-100 opacity-100 translate-x-0">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-brand-gray-light mb-2">Seu nome *</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Digite seu nome completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-brand-dark border border-brand-dark-border rounded-xl px-4 py-3 text-white placeholder-brand-gray text-sm focus:outline-none focus:border-brand-yellow/50 focus:ring-1 focus:ring-brand-yellow/20 transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-gray-light mb-2">WhatsApp / Telefone</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="(66) 9 0000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-brand-dark border border-brand-dark-border rounded-xl px-4 py-3 text-white placeholder-brand-gray text-sm focus:outline-none focus:border-brand-yellow/50 focus:ring-1 focus:ring-brand-yellow/20 transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-gray-light mb-2">Serviço desejado</label>
                <select
                  name="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-brand-dark border border-brand-dark-border rounded-xl px-4 py-3 text-white placeholder-brand-gray text-sm focus:outline-none focus:border-brand-yellow/50 focus:ring-1 focus:ring-brand-yellow/20 transition-all duration-200 cursor-pointer"
                >
                  <option value="">Selecione um serviço</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-gray-light mb-2">Mensagem</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Descreva brevemente sua situação ou dúvida..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-brand-dark border border-brand-dark-border rounded-xl px-4 py-3 text-white placeholder-brand-gray text-sm focus:outline-none focus:border-brand-yellow/50 focus:ring-1 focus:ring-brand-yellow/20 transition-all duration-200 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-brand-yellow text-brand-dark font-bold text-base py-4 rounded-xl hover:bg-yellow-300 transition-all duration-200 hover:shadow-xl hover:shadow-brand-yellow/25 hover:-translate-y-0.5"
              >
                <WhatsAppIcon width={20} height={20} />
                Enviar pelo WhatsApp
                <Send width={16} height={16} className="lucide lucide-send" />
              </button>
              <p className="text-brand-gray text-xs text-center">Ao enviar, você será redirecionado ao WhatsApp com os dados preenchidos.</p>
            </form>
          </div>
          <div className="transition-all duration-700 delay-200 space-y-6 opacity-100 translate-x-0">
            <div className="space-y-4">
              <a href="http://wa.me/556696535401" target="_blank" rel="noopener noreferrer">
                <div className="flex gap-4 p-5 bg-brand-dark-card border border-brand-dark-border rounded-xl hover:border-brand-yellow/30 transition-all duration-200">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center">
                    <Phone width={18} height={18} className="lucide lucide-phone text-brand-yellow" />
                  </div>
                  <div>
                    <p className="text-brand-gray text-xs font-medium uppercase tracking-wide mb-1">WhatsApp</p>
                    <p className="text-white text-sm font-medium whitespace-pre-line">(66) 9 9653-5401</p>
                  </div>
                </div>
              </a>
              <div>
                <div className="flex gap-4 p-5 bg-brand-dark-card border border-brand-dark-border rounded-xl hover:border-brand-yellow/30 transition-all duration-200">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center">
                    <MapPin width={18} height={18} className="lucide lucide-map-pin text-brand-yellow" />
                  </div>
                  <div>
                    <p className="text-brand-gray text-xs font-medium uppercase tracking-wide mb-1">Endereço</p>
                    <p className="text-white text-sm font-medium whitespace-pre-line">{'Av. Cascavel, 278 - Primavera II\nPrimavera do Leste - MT, 78850-000'}</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex gap-4 p-5 bg-brand-dark-card border border-brand-dark-border rounded-xl hover:border-brand-yellow/30 transition-all duration-200">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center">
                    <Clock width={18} height={18} className="lucide lucide-clock text-brand-yellow" />
                  </div>
                  <div>
                    <p className="text-brand-gray text-xs font-medium uppercase tracking-wide mb-1">Horário de Atendimento</p>
                    <p className="text-white text-sm font-medium whitespace-pre-line">{'Segunda a Sexta\n7:00 - 11:00 | 13:00 - 17:00'}</p>
                  </div>
                </div>
              </div>
              <a href="https://www.instagram.com/helenadespachante2021/" target="_blank" rel="noopener noreferrer">
                <div className="flex gap-4 p-5 bg-brand-dark-card border border-brand-dark-border rounded-xl hover:border-brand-yellow/30 transition-all duration-200">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center">
                    <Instagram width={18} height={18} className="lucide lucide-instagram text-brand-yellow" />
                  </div>
                  <div>
                    <p className="text-brand-gray text-xs font-medium uppercase tracking-wide mb-1">Instagram</p>
                    <p className="text-white text-sm font-medium whitespace-pre-line">@helenadespachante2021</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden border border-brand-dark-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.9284431275332!2d-54.29855632487524!3d-15.541966285063655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x937725e43b549763%3A0x45a1b1d8d3d5a3df!2sHELENA%20DESPACHANTE!5e0!3m2!1spt-BR!2sbr!4v1772214428839!5m2!1spt-BR!2sbr"
                width="100%"
                height="280"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Helena Despachante"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

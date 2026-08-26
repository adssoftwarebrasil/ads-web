import { useState } from 'react';
import type { FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { WhatsAppIcon } from './icons';

const serviceOptions = [
  'Pintura Residencial',
  'Pintura Comercial',
  'Pintura Industrial',
  'Revestimento Texturizado',
  'Compra de Tintas',
  'Outro',
];

const hours = [
  { day: 'Segunda a Sexta', time: '7:00 – 11:30 / 13:00 – 17:30', color: 'rgb(164, 209, 58)' },
  { day: 'Sábado', time: '7:00 – 11:30', color: 'rgb(164, 209, 58)' },
  { day: 'Domingo', time: 'Fechado', color: 'rgb(244, 60, 42)' },
];

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const lines = [
      'Olá! Gostaria de solicitar um orçamento.',
      '',
      `*Nome:* ${name}`,
      phone ? `*Telefone:* ${phone}` : '',
      service ? `*Serviço de interesse:* ${service}` : '',
      message ? `*Mensagem:* ${message}` : '',
    ].filter(Boolean);
    const text = encodeURIComponent(lines.join('\n'));
    window.open(`http://wa.me/5566996839888?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="contato"
      className="py-20 lg:py-28 overflow-hidden"
      style={{ backgroundColor: 'rgb(2, 2, 2)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4 text-brand-dark"
            style={{ backgroundColor: 'rgb(164, 209, 58)' }}
          >
            Fale conosco
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Solicite seu <span style={{ color: 'rgb(164, 209, 58)' }}>Orçamento Grátis</span>
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto">
            Preencha o formulário abaixo e entraremos em contato pelo WhatsApp com rapidez e atenção.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
          <div className="lg:col-span-3">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                    Nome completo *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl text-white placeholder-white/30 text-sm outline-none border transition-all duration-200 focus:border-brand-green"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.07)',
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white/70 mb-2">
                    Telefone / WhatsApp
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(66) 9 0000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl text-white placeholder-white/30 text-sm outline-none border transition-all duration-200"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.07)',
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                    }}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-white/70 mb-2">
                  Serviço de interesse
                </label>
                <select
                  id="service"
                  name="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none border transition-all duration-200 cursor-pointer"
                  style={{
                    backgroundColor: 'rgba(30, 30, 30, 0.95)',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    color: service ? 'white' : 'rgba(255, 255, 255, 0.3)',
                  }}
                >
                  <option value="" disabled style={{ color: 'gray' }}>
                    Selecione um serviço
                  </option>
                  {serviceOptions.map((opt) => (
                    <option
                      key={opt}
                      value={opt}
                      style={{ color: 'white', backgroundColor: 'rgb(20, 20, 20)' }}
                    >
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Descreva seu projeto ou tire suas dúvidas..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl text-white placeholder-white/30 text-sm outline-none border transition-all duration-200 resize-none"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.07)',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                  }}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base text-brand-dark transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: 'rgb(164, 209, 58)',
                  boxShadow: 'rgba(164, 209, 58, 0.3) 0px 4px 20px',
                }}
              >
                <WhatsAppIcon className="w-5 h-5 fill-current" />
                Enviar pelo WhatsApp
                <Send className="lucide lucide-send" width={16} height={16} />
              </button>
            </form>
          </div>
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div className="space-y-5">
              <a
                href="tel:+5566996839888"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/5 group"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone
                    className="lucide lucide-phone"
                    width={18}
                    height={18}
                    style={{ color: 'rgb(164, 209, 58)' }}
                  />
                </div>
                <div>
                  <p className="text-xs font-medium text-white/40 mb-0.5">Telefone / WhatsApp</p>
                  <p className="text-white/80 text-sm font-medium group-hover:text-white transition-colors duration-200">
                    (66) 9 9683-9888
                  </p>
                </div>
              </a>
              <a
                href="mailto:atualtintas_financeiro@hotmail.com"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/5 group"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail
                    className="lucide lucide-mail"
                    width={18}
                    height={18}
                    style={{ color: 'rgb(124, 205, 223)' }}
                  />
                </div>
                <div>
                  <p className="text-xs font-medium text-white/40 mb-0.5">E-mail</p>
                  <p className="text-white/80 text-sm font-medium group-hover:text-white transition-colors duration-200">
                    atualtintas_financeiro@hotmail.com
                  </p>
                </div>
              </a>
              <a
                href="https://maps.google.com/?q=ATUAL+TINTAS+Sinop"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/5 group"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin
                    className="lucide lucide-map-pin"
                    width={18}
                    height={18}
                    style={{ color: 'rgb(244, 60, 42)' }}
                  />
                </div>
                <div>
                  <p className="text-xs font-medium text-white/40 mb-0.5">Endereço</p>
                  <p className="text-white/80 text-sm font-medium group-hover:text-white transition-colors duration-200">
                    Av. André Antônio Maggi, 6256 — Jd. das Violetas, Sinop-MT
                  </p>
                </div>
              </a>
            </div>
            <div
              className="p-5 rounded-xl border border-white/10"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.04)' }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Clock
                  className="lucide lucide-clock"
                  width={16}
                  height={16}
                  style={{ color: 'rgb(164, 209, 58)' }}
                />
                <h4 className="text-white font-semibold text-sm">Horário de Funcionamento</h4>
              </div>
              <div className="space-y-2">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between items-center">
                    <span className="text-white/50 text-xs">{h.day}</span>
                    <span className="text-xs font-medium" style={{ color: h.color }}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="rounded-xl overflow-hidden border border-white/10"
              style={{ height: '200px' }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3905.0784551294246!2d-55.5132927!3d-11.829779000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a7806a0f91b9b7%3A0x804def3197bfc3b8!2sATUAL%20TINTAS!5e0!3m2!1spt-BR!2sbr!4v1774283514142!5m2!1spt-BR!2sbr"
                width="100%"
                height="200"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Atual Tintas"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

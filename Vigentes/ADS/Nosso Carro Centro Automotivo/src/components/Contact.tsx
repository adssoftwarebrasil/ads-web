import { useState, type FormEvent } from 'react';
import { MapPin, Clock, Phone, Mail, Send } from 'lucide-react';

const serviceOptions = [
  'Funilaria',
  'Pintura Automotiva',
  'Polimento Cristalizado',
  'Vitrificação',
  'Estética Automotiva',
  'Seguradora / Sinistro',
  'Outro',
];

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      'Olá! Gostaria de solicitar um orçamento.',
      `Nome: ${name}`,
      `Telefone: ${phone}`,
    ];
    if (service) lines.push(`Serviço de interesse: ${service}`);
    if (message) lines.push(`Mensagem: ${message}`);
    const text = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/557991950295?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#04152D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-[#174C7E]/30 border border-[#6D94BE]/20 text-[#6D94BE] text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
            Fale conosco
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Solicite Seu Orçamento
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-xl mx-auto">
            Preencha o formulário e entraremos em contato pelo WhatsApp com rapidez e sem
            compromisso.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="bg-gradient-to-br from-[#031B3A] to-[#04152D] border border-white/5 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white mb-6">Envie sua mensagem</h3>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/60 text-xs font-medium mb-1.5 uppercase tracking-wide">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-[#6D94BE]/50 rounded-xl text-white placeholder-white/30 text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-xs font-medium mb-1.5 uppercase tracking-wide">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(79) 9 9999-9999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-[#6D94BE]/50 rounded-xl text-white placeholder-white/30 text-sm outline-none transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white/60 text-xs font-medium mb-1.5 uppercase tracking-wide">
                  Serviço de interesse
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 bg-[#031B3A] border border-white/10 focus:border-[#6D94BE]/50 rounded-xl text-white text-sm outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Selecione um serviço...</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-white/60 text-xs font-medium mb-1.5 uppercase tracking-wide">
                  Mensagem (opcional)
                </label>
                <textarea
                  rows={4}
                  placeholder="Descreva brevemente o que precisa..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-[#6D94BE]/50 rounded-xl text-white placeholder-white/30 text-sm outline-none transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 w-full py-4 bg-[#174C7E] hover:bg-[#6D94BE] text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:-translate-y-0.5 mt-2"
              >
                <Send size={16} className="lucide lucide-send " />
                Enviar pelo WhatsApp
              </button>
            </form>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
              <div className="flex gap-4 p-4 bg-gradient-to-br from-[#031B3A] to-[#04152D] border border-white/5 rounded-xl">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-lg bg-[#174C7E]/20">
                  <MapPin size={18} className="lucide lucide-map-pin text-[#6D94BE]" />
                </div>
                <div>
                  <p className="text-white/50 text-xs font-medium uppercase tracking-wide mb-0.5">
                    Endereço
                  </p>
                  <p className="text-white/80 text-sm font-medium whitespace-pre-line">
                    Av. Dr. José da Silva Ribeiro Filho, 803 - América, Aracaju - SE
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-gradient-to-br from-[#031B3A] to-[#04152D] border border-white/5 rounded-xl">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-lg bg-[#174C7E]/20">
                  <Clock size={18} className="lucide lucide-clock text-[#6D94BE]" />
                </div>
                <div>
                  <p className="text-white/50 text-xs font-medium uppercase tracking-wide mb-0.5">
                    Horário
                  </p>
                  <p className="text-white/80 text-sm font-medium whitespace-pre-line">
                    {'Segunda a Sexta: 08h às 18h\nPátio / Guincho: 24 horas'}
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-gradient-to-br from-[#031B3A] to-[#04152D] border border-white/5 rounded-xl">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-lg bg-[#174C7E]/20">
                  <Phone size={18} className="lucide lucide-phone text-[#6D94BE]" />
                </div>
                <div>
                  <p className="text-white/50 text-xs font-medium uppercase tracking-wide mb-0.5">
                    WhatsApp
                  </p>
                  <a
                    href="http://wa.me/557991950295"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white text-sm font-medium transition-colors whitespace-pre-line"
                  >
                    (79) 9 9195-0295
                  </a>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-gradient-to-br from-[#031B3A] to-[#04152D] border border-white/5 rounded-xl">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-lg bg-[#174C7E]/20">
                  <Mail size={18} className="lucide lucide-mail text-[#6D94BE]" />
                </div>
                <div>
                  <p className="text-white/50 text-xs font-medium uppercase tracking-wide mb-0.5">
                    E-mail
                  </p>
                  <a
                    href="mailto:canossocarro@outlook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white text-sm font-medium transition-colors whitespace-pre-line"
                  >
                    canossocarro@outlook.com
                  </a>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/5 shadow-xl h-64 lg:h-72">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.590777710651!2d-37.07970132495614!3d-10.918672589238865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab3a5dab75819%3A0xf123de13f0fe3f02!2sNosso%20Carro%20Centro%20Automotivo!5e0!3m2!1spt-BR!2sbr!4v1774377752198!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Nosso Carro Centro Automotivo"
                style={{ border: '0px', filter: 'invert(90%) hue-rotate(180deg)' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const serviceOptions = [
  'Projeto de Rede Elétrica',
  'Construção de Rede de Distribuição',
  'Energia Solar',
  'Alta e Baixa Tensão',
  'Consultoria Especializada',
  'Inspeção, Manutenção e Laudo Técnico',
];

const WHATSAPP_NUMBER = '556699961097';

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const lines = [
      `Olá! Meu nome é ${name}.`,
      `Telefone/WhatsApp: ${phone}`,
      service ? `Serviço de interesse: ${service}` : '',
      message ? `Mensagem: ${message}` : '',
    ].filter(Boolean);
    const text = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="py-24 bg-brand-darkgray/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="transition-all duration-700 opacity-100 translate-y-0">
          <div className="text-center mb-16">
            <span className="inline-block bg-brand-red/15 border border-brand-red/30 text-brand-red text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Entre em Contato
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-white">
              Pronto para <span className="text-brand-red">começar?</span>
            </h2>
            <p className="mt-4 text-brand-white/60 text-lg max-w-xl mx-auto">
              Solicite seu orçamento gratuito. Nossa equipe responde rapidamente com a solução
              ideal para seu projeto.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-red/15 border border-brand-red/20 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-brand-red" />
                </div>
                <div>
                  <p className="text-brand-white/50 text-xs uppercase tracking-wider font-medium mb-0.5">
                    Endereço
                  </p>
                  <p className="text-brand-white/85 text-sm font-medium">
                    R. das Orquídeas, 863 - St. Res. Sul, Sinop - MT
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-red/15 border border-brand-red/20 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-brand-red" />
                </div>
                <div>
                  <p className="text-brand-white/50 text-xs uppercase tracking-wider font-medium mb-0.5">
                    WhatsApp
                  </p>
                  <p className="text-brand-white/85 text-sm font-medium">+55 (66) 9 9996-1097</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-red/15 border border-brand-red/20 flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-brand-red" />
                </div>
                <div>
                  <p className="text-brand-white/50 text-xs uppercase tracking-wider font-medium mb-0.5">
                    E-mail
                  </p>
                  <p className="text-brand-white/85 text-sm font-medium">
                    contato@drenergiaeletrica.com.br
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-red/15 border border-brand-red/20 flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-brand-red" />
                </div>
                <div>
                  <p className="text-brand-white/50 text-xs uppercase tracking-wider font-medium mb-0.5">
                    Horário
                  </p>
                  <p className="text-brand-white/85 text-sm font-medium">
                    Seg. à Sex. 07:30 - 11:30 / 13:30 - 17:30
                  </p>
                </div>
              </div>
              <div className="mt-8 rounded-2xl overflow-hidden border border-white/10 h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.598431347202!2d-55.508082624941785!3d-11.863357488359334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a77f9dabbad2bf%3A0xd6338ef9a2aa2552!2sDr.%20Energia%20El%C3%A9trica!5e0!3m2!1spt-BR!2sbr!4v1771614960469!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Dr. Energia Elétrica"
                  style={{ border: '0px' }}
                ></iframe>
              </div>
            </div>
            <form
              onSubmit={handleSubmit}
              className="bg-brand-dark/60 border border-white/8 rounded-2xl p-8 space-y-5"
            >
              <h3 className="text-brand-white font-bold text-xl mb-6">
                Solicitar Orçamento Grátis
              </h3>
              <div>
                <label className="block text-brand-white/60 text-xs font-medium uppercase tracking-wider mb-2">
                  Nome completo *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-brand-darkgray/50 border border-white/10 focus:border-brand-red/50 rounded-xl px-4 py-3 text-brand-white placeholder-brand-white/30 text-sm outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-brand-white/60 text-xs font-medium uppercase tracking-wider mb-2">
                  Telefone / WhatsApp *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="(66) 9 9999-9999"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-brand-darkgray/50 border border-white/10 focus:border-brand-red/50 rounded-xl px-4 py-3 text-brand-white placeholder-brand-white/30 text-sm outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-brand-white/60 text-xs font-medium uppercase tracking-wider mb-2">
                  Serviço de interesse
                </label>
                <select
                  name="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-brand-darkgray/50 border border-white/10 focus:border-brand-red/50 rounded-xl px-4 py-3 text-brand-white/80 text-sm outline-none transition-colors appearance-none"
                >
                  <option value="">Selecione um serviço</option>
                  {serviceOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-brand-white/60 text-xs font-medium uppercase tracking-wider mb-2">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Descreva brevemente seu projeto ou dúvida..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-brand-darkgray/50 border border-white/10 focus:border-brand-red/50 rounded-xl px-4 py-3 text-brand-white placeholder-brand-white/30 text-sm outline-none transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-brand-red hover:bg-red-600 text-white py-4 rounded-xl font-bold text-base transition-all duration-200 hover:shadow-2xl hover:shadow-brand-red/40 hover:-translate-y-0.5"
              >
                <Send size={18} />
                Enviar pelo WhatsApp
              </button>
              <p className="text-brand-white/35 text-xs text-center">
                Ao enviar, você será direcionado ao WhatsApp com sua mensagem pré-preenchida.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

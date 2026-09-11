import { useState, type FormEvent } from 'react';
import { Phone, Clock, MapPin, Instagram, MessageCircle } from 'lucide-react';

const services = [
  'Projetos de Arquitetura',
  'Documentação para Venda',
  'Unificação e Divisão de Lotes',
  'Instituição de Condomínio',
  'Regularização de Obras (Averbação/CND)',
  'Outro / Não sei ainda',
];

export default function Contato() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const lines = [
      'Olá! Gostaria de solicitar um atendimento.',
      `*Nome:* ${name}`,
      `*Telefone:* ${phone}`,
      `*Serviço de interesse:* ${service}`,
    ];
    if (message.trim()) {
      lines.push(`*Mensagem:* ${message}`);
    }
    const text = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/5566996194229?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <p className="text-brand-blue font-semibold uppercase tracking-widest text-xs mb-3">
              Entre em Contato
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Pronto para resolver
              <br />
              seu imóvel?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-10">
              Preencha o formulário e nossa equipe entra em contato pelo WhatsApp para orientar
              você sem compromisso.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-brand-blue" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-0.5">
                    WhatsApp / Telefone
                  </p>
                  <a
                    href="https://wa.me/5566996194229"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-gray-800 hover:text-brand-blue transition-colors"
                  >
                    (66) 99619-4229
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-brand-blue" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-0.5">
                    Horário de Atendimento
                  </p>
                  <p className="font-semibold text-gray-800">Seg – Sex, 07:30 – 17:00</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-brand-blue" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-0.5">
                    Endereço
                  </p>
                  <p className="font-semibold text-gray-800 text-sm leading-snug">
                    R. Antônio Francisco Buosi, 1122
                    <br />
                    Colina Verde, Rondonópolis – MT
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center shrink-0">
                  <Instagram size={18} className="text-brand-blue" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-0.5">
                    Instagram
                  </p>
                  <a
                    href="https://instagram.com/torreengenharia_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-gray-800 hover:text-brand-blue transition-colors"
                  >
                    @torreengenharia_
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-3xl p-7 md:p-9 border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Enviar mensagem pelo WhatsApp
            </h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                  Seu nome *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Como devemos te chamar?"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                  Telefone / WhatsApp *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="(66) 9 9999-9999"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                  Serviço de interesse *
                </label>
                <select
                  name="service"
                  required
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all duration-200"
                >
                  <option value="">Selecione um serviço...</option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                  Mensagem (opcional)
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Descreva brevemente sua situação..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all duration-200 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-brand-blue text-white py-4 rounded-xl font-bold text-base hover:bg-[#0090CC] transition-all duration-200 hover:shadow-lg hover:shadow-brand-blue/30 mt-2"
              >
                <MessageCircle size={20} />
                Enviar pelo WhatsApp
              </button>
              <p className="text-center text-xs text-gray-400 mt-2">
                Você será redirecionado para o WhatsApp com sua mensagem preenchida.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

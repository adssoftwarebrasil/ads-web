import { useState, type FormEvent } from 'react';
import { Send, MapPin, Clock, Phone, Instagram } from 'lucide-react';

const serviceOptions = [
  'Guincho / Reboque de veículo',
  'Pane mecânica ou elétrica',
  'Acidente / Colisão',
  'Remoção em rodovia',
  'Transporte de máquina / trator',
  'Outro serviço',
];

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const lines = [
      `Olá! Meu nome é ${name}.`,
      '',
      `Telefone: ${phone}`,
      `Serviço: ${service}`,
    ];
    if (message.trim()) {
      lines.push('', message.trim());
    }
    const text = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/553799568191?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-24 bg-[rgb(253,253,253)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-brand-blue font-semibold text-sm uppercase tracking-widest">Fale conosco</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 mb-4">
            Precisa de <span className="gradient-text">Atendimento?</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Preencha o formulário e será redirecionado para o WhatsApp com sua mensagem pronta. Ou ligue diretamente —
            atendemos 24 horas.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-3 section-reveal">
            <form className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Seu nome</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Ex: João Silva"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all duration-200"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Telefone / WhatsApp</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="(37) 9 9999-9999"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all duration-200"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Tipo de serviço</label>
                <select
                  name="service"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all duration-200"
                  required
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                >
                  <option value="">Selecione o serviço...</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Detalhes adicionais (opcional)</label>
                <textarea
                  name="message"
                  placeholder="Descreva sua situação, localização atual ou qualquer detalhe importante..."
                  rows={4}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all duration-200 resize-none"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-brand-blue hover:bg-brand-blue-dark text-white font-bold text-base py-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-xl hover:-translate-y-0.5"
              >
                <Send width={18} height={18} strokeWidth={2} className="lucide lucide-send " />
                Enviar via WhatsApp
              </button>
              <p className="text-center text-xs text-gray-400 mt-3">
                Você será redirecionado para o WhatsApp com a mensagem pronta.
              </p>
            </form>
          </div>
          <div className="lg:col-span-2 section-reveal" style={{ transitionDelay: '150ms' }}>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-brand-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin width={18} height={18} strokeWidth={1.8} className="lucide lucide-map-pin text-brand-blue" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Endereço</p>
                  <p className="text-sm font-medium text-gray-800 mt-0.5 whitespace-pre-line leading-snug">
                    {'R. Efraim Procópio, 197 — 2º andar\nSão José, Arcos - MG, 35600-244'}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-brand-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock width={18} height={18} strokeWidth={1.8} className="lucide lucide-clock text-brand-blue" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Atendimento</p>
                  <p className="text-sm font-medium text-gray-800 mt-0.5 whitespace-pre-line leading-snug">
                    {'24 horas por dia\n7 dias por semana'}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-brand-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone width={18} height={18} strokeWidth={1.8} className="lucide lucide-phone text-brand-blue" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">WhatsApp</p>
                  <p className="text-sm font-medium text-gray-800 mt-0.5 whitespace-pre-line leading-snug">
                    (37) 9956-8191
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-brand-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Instagram
                    width={18}
                    height={18}
                    strokeWidth={1.8}
                    className="lucide lucide-instagram text-brand-blue"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Instagram</p>
                  <p className="text-sm font-medium text-gray-800 mt-0.5 whitespace-pre-line leading-snug">
                    @ss_transportes_e_servicos_
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm aspect-[4/3]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.273718543146!2d-45.54647702476341!3d-20.288934381181726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b4892560517a6d%3A0xec06d29a1d5c7a97!2sTransportes%20SS%20Moura!5e0!3m2!1spt-BR!2sbr!4v1771525929824!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Transportes SS Moura"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

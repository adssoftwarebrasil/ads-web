import { useState, type FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const services = [
  'Toldos em Lona',
  'Coberturas em Policarbonato',
  'Toldos Cortina Retrátil',
  'Sombreador para Carro',
  'Telha Zinco / Sanduíche',
  'Garagens em tela sombrite',
  'Serralheria em Geral',
  'Outro',
];

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let text = `Olá! Meu nome é ${name}.`;
    if (service) text += `\nServiço de interesse: ${service}.`;
    if (phone) text += `\nMeu contato: ${phone}.`;
    if (message) text += `\n${message}`;
    const url = `http://wa.me/556684533788?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-tropical-blue font-semibold text-sm uppercase tracking-widest mb-3">
            Entre em Contato
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Solicite seu Orçamento
            <span className="block text-tropical-blue">Sem Compromisso</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
            Preencha o formulário e entraremos em contato via WhatsApp para entender seu projeto e apresentar a melhor
            solução.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-tropical-blue/10 flex items-center justify-center flex-shrink-0">
                <Phone className="lucide lucide-phone text-tropical-blue" width={22} height={22} />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                  WhatsApp / Telefone
                </p>
                <a
                  href="http://wa.me/556684533788"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 font-semibold hover:text-tropical-blue transition-colors text-sm"
                >
                  (66) 9 8453-3788
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-tropical-blue/10 flex items-center justify-center flex-shrink-0">
                <Mail className="lucide lucide-mail text-tropical-blue" width={22} height={22} />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">E-mail</p>
                <a
                  href="mailto:tropicaltoldospva@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 font-semibold hover:text-tropical-blue transition-colors text-sm"
                >
                  tropicaltoldospva@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-tropical-blue/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="lucide lucide-map-pin text-tropical-blue" width={22} height={22} />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Endereço</p>
                <a
                  href="https://maps.google.com/?q=Tropical+Toldos+Primavera+do+Leste"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 font-semibold hover:text-tropical-blue transition-colors text-sm"
                >
                  R. Rio de Janeiro, 473 — Primavera do Leste, MT
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-tropical-blue/10 flex items-center justify-center flex-shrink-0">
                <Clock className="lucide lucide-clock text-tropical-blue" width={22} height={22} />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                  Horário de Atendimento
                </p>
                <p className="text-gray-800 font-semibold text-sm">Segunda a Sexta: 8h às 18h</p>
              </div>
            </div>
            <div className="mt-4 rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-[240px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.6395116853637!2d-54.29873452487471!3d-15.557444085050307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x937725c9a2769c8d%3A0x56b645cc58de0bd!2sTropical%20Toldos!5e0!3m2!1spt-BR!2sbr!4v1774552720173!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa Tropical Toldos"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
          <div className="lg:col-span-3 bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Seu nome *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Ex: João Silva"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-tropical-blue/40 focus:border-tropical-blue text-gray-800 text-sm transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">WhatsApp / Telefone *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="(66) 9 0000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-tropical-blue/40 focus:border-tropical-blue text-gray-800 text-sm transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Serviço de interesse *</label>
                <select
                  name="service"
                  required
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-tropical-blue/40 focus:border-tropical-blue text-gray-800 text-sm transition-all bg-white"
                >
                  <option value="">Selecione um serviço</option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Descreva seu projeto</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Conte-nos mais sobre seu projeto: dimensões, local de instalação, preferências..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-tropical-blue/40 focus:border-tropical-blue text-gray-800 text-sm transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-tropical-blue hover:bg-tropical-navy text-white font-bold px-6 py-4 rounded-xl text-base shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <Send className="lucide lucide-send group-hover:translate-x-1 transition-transform" width={18} height={18} />
                Enviar via WhatsApp
              </button>
              <p className="text-center text-xs text-gray-400">
                Ao enviar, você será redirecionado para o WhatsApp com sua mensagem preenchida automaticamente.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

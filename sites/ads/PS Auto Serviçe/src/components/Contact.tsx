import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { WHATSAPP, TEL, EMAIL, MAPS, INSTAGRAM, WhatsAppIcon, InstagramFilledIcon, waLink } from './icons';

const SERVICE_OPTIONS = [
  'Peças para Caminhão',
  'Mecânica Geral',
  'Elétrica e Eletrônica',
  'Injeção Eletrônica',
  'Freio e Suspensão',
  'Funilaria e Pintura',
  'Motor e Câmbio',
  'Serviço Pneumático',
  'Sistema ARLA 32',
  'Outro',
];

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `Olá! Gostaria de solicitar um orçamento.\n\nNome: ${name}\nTelefone: ${phone}`;
    if (service) text += `\nServiço desejado: ${service}`;
    if (message) text += `\nDescrição: ${message}`;
    window.open(waLink(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="bg-brand-light py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block bg-brand-blue/10 text-brand-blue text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4 border border-brand-blue/20">
            Entre em Contato
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-dark mb-4">
            Solicite Seu <span className="text-brand-red">Orçamento Grátis</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Preencha o formulário e entraremos em contato pelo WhatsApp com o orçamento completo.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="animate-on-scroll-left space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="font-bold text-brand-dark text-xl mb-6">Informações de Contato</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl flex-shrink-0 text-brand-red bg-brand-red/10">
                    <Phone size={18} className="lucide lucide-phone" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-medium uppercase tracking-wide mb-1">Telefone / WhatsApp</p>
                    <a href={TEL} className="text-brand-dark font-semibold text-sm hover:text-brand-blue transition-colors">
                      (81) 9 9146-1355
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl flex-shrink-0 text-brand-blue bg-brand-blue/10">
                    <Mail size={18} className="lucide lucide-mail" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-medium uppercase tracking-wide mb-1">E-mail</p>
                    <a href={EMAIL} className="text-brand-dark font-semibold text-sm hover:text-brand-blue transition-colors">
                      financeiroforteautoservice@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl flex-shrink-0 text-brand-red bg-brand-red/10">
                    <MapPin size={18} className="lucide lucide-map-pin" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-medium uppercase tracking-wide mb-1">Endereço</p>
                    <a href={MAPS} className="text-brand-dark font-semibold text-sm hover:text-brand-blue transition-colors">
                      R. Imperial, 1955 — São José, Recife - PE
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl flex-shrink-0 text-brand-blue bg-brand-blue/10">
                    <Clock size={18} className="lucide lucide-clock" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-medium uppercase tracking-wide mb-1">Horário de Funcionamento</p>
                    <p className="text-brand-dark font-semibold text-sm">Segunda a Sexta: 08:00 às 17:00</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-4">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-bold px-5 py-3 rounded-xl text-sm transition-all duration-300 hover:shadow-lg"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  WhatsApp
                </a>
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white font-bold px-5 py-3 rounded-xl text-sm transition-all duration-300 hover:shadow-lg hover:opacity-90"
                >
                  <InstagramFilledIcon className="w-4 h-4" />
                  Instagram
                </a>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-72">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.232757425551!2d-34.90128342499206!3d-8.077727791950409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1f3a0b86e547%3A0xda656ab61104bb2f!2sPS%20auto%20service!5e0!3m2!1spt-BR!2sbr!4v1772212634782!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização PS Auto Service"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
          <div className="animate-on-scroll-right">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="font-bold text-brand-dark text-xl mb-2">Solicitar Orçamento</h3>
              <p className="text-gray-500 text-sm mb-8">Preencha o formulário e receba retorno pelo WhatsApp.</p>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Seu Nome *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: João Silva"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">WhatsApp / Telefone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="(81) 9 9999-9999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Serviço Desejado</label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all duration-200"
                  >
                    <option value="">Selecione um serviço...</option>
                    {SERVICE_OPTIONS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Descreva o Problema (opcional)</label>
                  <textarea
                    rows={4}
                    placeholder="Descreva o que está acontecendo com seu caminhão..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all duration-200 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-brand-red hover:bg-brand-darkred text-white font-bold py-4 rounded-xl text-base transition-all duration-300 hover:shadow-xl hover:shadow-red-500/30 hover:scale-[1.02] active:scale-95"
                >
                  <Send size={18} className="lucide lucide-send" />
                  Enviar pelo WhatsApp
                </button>
                <p className="text-center text-gray-400 text-xs">
                  Ao enviar, você será redirecionado para o WhatsApp com sua mensagem pré-preenchida.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

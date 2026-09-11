import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const serviceOptions = [
  'Diagnóstico Eletrônico Completo',
  'Reparo de Bombas Injetoras',
  'Bombas de Alta Pressão',
  'Teste e Limpeza de Bicos Injetores',
  'Análise de Falhas Eletrônicas',
  'Revisão do Sistema de Alimentação',
  'Manutenção Preventiva',
  'Troca de Filtros e Componentes',
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
      'Olá! Gostaria de solicitar um atendimento.',
      '',
      `*Nome:* ${name}`,
      `*Telefone:* ${phone}`,
      `*Serviço de interesse:* ${service}`,
    ];
    if (message.trim()) {
      lines.push(`*Mensagem:* ${message}`);
    }
    const text = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/556692426961?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-brand-red font-semibold text-sm uppercase tracking-widest mb-3">
            Entre em contato
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">Fale com a MTTORK</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Preencha o formulário e receba um atendimento personalizado via WhatsApp.
          </p>
        </div>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex gap-4 items-start">
              <div className="w-10 h-10 bg-brand-dark rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="lucide lucide-map-pin text-white" width={18} height={18} />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">Endereço</p>
                <p className="text-gray-700 text-sm leading-relaxed font-medium">
                  Av. Pedro Miguel dos Santos Pisa Quente, 353
                </p>
                <p className="text-gray-700 text-sm leading-relaxed font-medium">
                  Vila Rica, Rondonópolis - MT
                </p>
                <p className="text-gray-700 text-sm leading-relaxed font-medium">CEP: 78750-530</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex gap-4 items-start">
              <div className="w-10 h-10 bg-brand-dark rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="lucide lucide-phone text-white" width={18} height={18} />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">
                  WhatsApp / Telefone
                </p>
                <p className="text-gray-700 text-sm leading-relaxed font-medium">+55 (66) 99242-6961</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex gap-4 items-start">
              <div className="w-10 h-10 bg-brand-dark rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="lucide lucide-mail text-white" width={18} height={18} />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">E-mail</p>
                <p className="text-gray-700 text-sm leading-relaxed font-medium">mttork.adm@gmail.com</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex gap-4 items-start">
              <div className="w-10 h-10 bg-brand-dark rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="lucide lucide-clock text-white" width={18} height={18} />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">
                  Horários de Funcionamento
                </p>
                <p className="text-gray-700 text-sm leading-relaxed font-medium">
                  Segunda a Sexta: 07:00–11:00 | 13:00–17:00
                </p>
                <p className="text-gray-700 text-sm leading-relaxed font-medium">Sábado: 07:00–11:00</p>
                <p className="text-gray-700 text-sm leading-relaxed font-medium">Domingo: Fechado</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-52">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.7297211639657!2d-54.676348224856135!3d-16.438547584295783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9379c9643d2428ff%3A0xbe3f72d60bb560c3!2sMTTORK%20Sistema%20de%20Inje%C3%A7%C3%A3o%20Diesel!5e0!3m2!1spt-BR!2sbr!4v1773334157881!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização MTTORK"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-[#25D366] rounded-xl flex items-center justify-center">
                  <WhatsAppIcon className="w-5 h-5" fill="white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Envie uma mensagem no WhatsApp</p>
                  <p className="text-xs text-gray-400">Respondemos em poucos minutos</p>
                </div>
              </div>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Nome completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Seu nome"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-dark/30 focus:border-brand-dark transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="(66) 99999-9999"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-dark/30 focus:border-brand-dark transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Serviço de interesse *
                  </label>
                  <select
                    name="service"
                    required
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-dark/30 focus:border-brand-dark transition-all bg-white"
                  >
                    <option value="">Selecione um serviço</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Mensagem (opcional)
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Descreva o problema ou dúvida..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-dark/30 focus:border-brand-dark transition-all resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold py-4 rounded-xl text-base transition-all duration-200 hover:shadow-lg hover:shadow-green-500/25 hover:-translate-y-0.5"
                >
                  <Send className="lucide lucide-send " width={18} height={18} />
                  Enviar Mensagem pelo WhatsApp
                </button>
                <p className="text-xs text-gray-400 text-center">
                  Ao enviar, você será redirecionado ao WhatsApp com sua mensagem pré-preenchida.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

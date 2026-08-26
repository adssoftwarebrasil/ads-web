import { useState } from 'react';
import { MessageSquare } from 'lucide-react';

const serviceOptions = [
  { value: '', label: 'Selecione uma opção...' },
  { value: 'Problema no ABS', label: 'Problema no Módulo ABS' },
  { value: 'Falha Eletrônica', label: 'Falha Eletrônica/Painel' },
  { value: 'Freio Pneumático', label: 'Freio Pneumático (Ar)' },
  { value: 'Mecânica Geral', label: 'Mecânica Pesada' },
  { value: 'Outros', label: 'Outros Assuntos' },
];

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `Olá! Gostaria de solicitar um pré-diagnóstico.%0A%0A` +
      `*Nome:* ${name}%0A` +
      `*WhatsApp:* ${phone}%0A` +
      `*Serviço:* ${serviceType}%0A` +
      `*Detalhes:* ${message}`;
    window.open(`https://wa.me/5585987753852?text=${text}`, '_blank');
  };

  return (
    <div id="contact">
      <section id="contact" className="py-20 relative bg-[#0B1120]">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#1d4ed8_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12">
            <span className="text-blue-400 font-bold tracking-widest text-xs uppercase mb-3 block">
              Canal Direto com a Oficina
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
              Solicite um{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(230,10,12)] to-red-500">
                Pré-Diagnóstico
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">
              Descreva o problema do seu veículo. Nossa equipe técnica analisará as informações e retornará rapidamente
              pelo WhatsApp.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[rgb(8,36,75)] via-[rgb(230,10,12)] to-[rgb(8,36,75)]"></div>
            <form className="space-y-6 mt-2" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label
                    htmlFor="name"
                    className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 group-focus-within:text-[rgb(230,10,12)] transition-colors"
                  >
                    Nome do Responsável
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3.5 bg-slate-50 rounded-lg border border-slate-200 text-slate-800 font-medium focus:ring-2 focus:ring-[rgb(230,10,12)] focus:border-transparent focus:bg-white transition-all outline-none placeholder-slate-400"
                    placeholder="Ex: João Silva"
                  />
                </div>
                <div className="group">
                  <label
                    htmlFor="phone"
                    className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 group-focus-within:text-[rgb(230,10,12)] transition-colors"
                  >
                    WhatsApp para Retorno
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3.5 bg-slate-50 rounded-lg border border-slate-200 text-slate-800 font-medium focus:ring-2 focus:ring-[rgb(230,10,12)] focus:border-transparent focus:bg-white transition-all outline-none placeholder-slate-400"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>
              <div className="group">
                <label
                  htmlFor="serviceType"
                  className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 group-focus-within:text-[rgb(230,10,12)] transition-colors"
                >
                  Qual o problema ou serviço?
                </label>
                <div className="relative">
                  <select
                    id="serviceType"
                    required
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full px-4 py-3.5 bg-slate-50 rounded-lg border border-slate-200 text-slate-800 font-medium focus:ring-2 focus:ring-[rgb(230,10,12)] focus:border-transparent focus:bg-white transition-all outline-none appearance-none cursor-pointer"
                  >
                    {serviceOptions.map((o) => (
                      <option key={o.label} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <MessageSquare width={18} height={18} />
                  </div>
                </div>
              </div>
              <div className="group">
                <label
                  htmlFor="message"
                  className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 group-focus-within:text-[rgb(230,10,12)] transition-colors"
                >
                  Detalhes (Modelo do caminhão, sintomas...)
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3.5 bg-slate-50 rounded-lg border border-slate-200 text-slate-800 font-medium focus:ring-2 focus:ring-[rgb(230,10,12)] focus:border-transparent focus:bg-white transition-all outline-none resize-none placeholder-slate-400"
                  placeholder="Descreva brevemente o que está acontecendo..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="group relative w-full bg-[rgb(230,10,12)] hover:bg-red-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-red-600/30 hover:shadow-red-600/50 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3 overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
                <span>Enviar para o Especialista</span>
              </button>
              <p className="text-center text-xs text-slate-400 mt-4 flex items-center justify-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block"></span>
                Tempo médio de resposta: 15 minutos
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

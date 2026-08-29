import { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Instagram } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `Olá! Meu nome é ${name}.%0A%0A` +
      `Telefone: ${phone}%0A` +
      `Peça ou assunto: ${subject}` +
      (message ? `%0A%0A${message}` : '');
    window.open(
      `http://wa.me/5595991424864?text=${text}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section id="contato" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[#0131AC] font-semibold text-sm uppercase tracking-widest mb-3">
            Entre em contato
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Fale com a Dinapel
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Precisa de uma peça específica ou tem alguma dúvida? Nossa equipe está pronta para atender
            você.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 text-lg mb-5">Informações de Contato</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E6ECFA] flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="lucide lucide-phone text-[#0131AC]" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                      Telefone
                    </div>
                    <a
                      href="tel:+559532243257"
                      className="text-gray-800 font-semibold hover:text-[#0131AC] transition-colors"
                    >
                      (95) 3224-3257
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E6ECFA] flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={18} className="lucide lucide-message-circle text-[#0131AC]" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                      WhatsApp
                    </div>
                    <a
                      href="http://wa.me/5595991424864"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 font-semibold hover:text-[#25D366] transition-colors"
                    >
                      (95) 9 9142-4864
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E6ECFA] flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="lucide lucide-map-pin text-[#0131AC]" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                      Endereço
                    </div>
                    <p className="text-gray-800 font-semibold text-sm leading-snug">
                      R. Carlos Natrodt, 775 – Liberdade
                      <br />
                      Boa Vista – RR, CEP 69309-655
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E6ECFA] flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="lucide lucide-clock text-[#0131AC]" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                      Horário de Funcionamento
                    </div>
                    <div className="text-sm text-gray-700 space-y-0.5">
                      <p>
                        <span className="font-semibold">Seg – Sex:</span> 08:00 – 12:00 / 14:00 – 18:00
                      </p>
                      <p>
                        <span className="font-semibold">Sábado:</span> 08:00 – 12:00
                      </p>
                      <p className="text-gray-400">Domingo: Fechado</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E6ECFA] flex items-center justify-center flex-shrink-0">
                    <Instagram size={18} className="lucide lucide-instagram text-[#0131AC]" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                      Instagram
                    </div>
                    <a
                      href="https://www.instagram.com/dinapel_rr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 font-semibold hover:text-[#0131AC] transition-colors"
                    >
                      @dinapel_rr
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-sm border border-gray-100 h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.979595980049!2d-60.701299725030175!3d2.8220870971547436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d93044d632b17cd%3A0x932a32527bf5f3a5!2sDinapel%20Pe%C3%A7as%20para%20Tratores!5e0!3m2!1spt-BR!2sbr!4v1776459623394!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa Dinapel"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-900 text-lg mb-2">Envie sua Mensagem</h3>
            <p className="text-gray-400 text-sm mb-6">
              Preencha o formulário e você será redirecionado para o WhatsApp com sua mensagem
              pré-preenchida.
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                  Seu nome *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: João da Silva"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 text-sm outline-none focus:border-[#0131AC] focus:ring-2 focus:ring-[#0131AC]/10 transition-all"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                  Telefone *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Ex: (95) 9 9999-9999"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 text-sm outline-none focus:border-[#0131AC] focus:ring-2 focus:ring-[#0131AC]/10 transition-all"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                  Peça ou assunto *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Filtro para trator Massey Ferguson"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 text-sm outline-none focus:border-[#0131AC] focus:ring-2 focus:ring-[#0131AC]/10 transition-all"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                  Mensagem
                </label>
                <textarea
                  rows={4}
                  placeholder="Descreva a peça, modelo do trator, ou qualquer detalhe que nos ajude a atendê-lo melhor..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 text-sm outline-none focus:border-[#0131AC] focus:ring-2 focus:ring-[#0131AC]/10 transition-all resize-none"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BF5B] text-white font-bold py-4 rounded-xl text-base transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <MessageCircle size={20} className="lucide lucide-message-circle " />
                Enviar via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

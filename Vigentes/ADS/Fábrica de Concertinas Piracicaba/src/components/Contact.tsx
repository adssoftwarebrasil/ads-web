import { useState, FormEvent } from 'react';
import { Phone, Mail, Clock, Send } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function Contact() {
  const [headRef, headIn] = useInView<HTMLDivElement>();
  const [leftRef, leftIn] = useInView<HTMLDivElement>();
  const [rightRef, rightIn] = useInView<HTMLDivElement>();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text =
      `Olá! Gostaria de solicitar um orçamento.\n\n` +
      `*Nome:* ${name}\n` +
      `*WhatsApp:* ${phone}\n` +
      `*Produto / Serviço de interesse:* ${service}` +
      (message ? `\n*Mensagem:* ${message}` : '');
    const url = `https://wa.me/5519981442455?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 lg:py-28 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headRef}
          className={`text-center mb-14 transition-all duration-700 ${
            headIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-[rgb(240,27,38)] text-xs font-bold uppercase tracking-widest mb-3">
            Fale Conosco
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[rgb(37,34,35)] leading-tight mb-4">
            Solicite Seu <span className="text-[rgb(240,27,38)]">Orçamento Grátis</span>
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            Preencha o formulário e falaremos com você pelo WhatsApp. Resposta
            rápida e sem compromisso!
          </p>
        </div>
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          <div
            ref={leftRef}
            className={`lg:col-span-2 transition-all duration-700 ${
              leftIn ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="space-y-5">
              <a
                href="https://wa.me/5519981442455"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-[rgb(240,27,38)]/30 hover:shadow-md transition-all duration-300 group "
              >
                <div className="w-11 h-11 bg-[rgb(240,27,38)]/10 group-hover:bg-[rgb(240,27,38)] rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                  <Phone
                    width={20}
                    height={20}
                    strokeWidth={2}
                    className="lucide lucide-phone text-[rgb(240,27,38)] group-hover:text-white transition-colors"
                  />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">
                    Telefone / WhatsApp
                  </p>
                  <p className="text-[rgb(37,34,35)] font-semibold text-sm">
                    (19) 9 8144-2455
                  </p>
                </div>
              </a>
              <a
                href="mailto:fabricadeconcertinas@outlook.com"
                rel="noopener noreferrer"
                className="flex gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-[rgb(240,27,38)]/30 hover:shadow-md transition-all duration-300 group "
              >
                <div className="w-11 h-11 bg-[rgb(240,27,38)]/10 group-hover:bg-[rgb(240,27,38)] rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                  <Mail
                    width={20}
                    height={20}
                    strokeWidth={2}
                    className="lucide lucide-mail text-[rgb(240,27,38)] group-hover:text-white transition-colors"
                  />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">
                    E-mail
                  </p>
                  <p className="text-[rgb(37,34,35)] font-semibold text-sm">
                    fabricadeconcertinas@outlook.com
                  </p>
                </div>
              </a>
              <a
                rel="noopener noreferrer"
                className="flex gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-[rgb(240,27,38)]/30 hover:shadow-md transition-all duration-300 group pointer-events-none"
              >
                <div className="w-11 h-11 bg-[rgb(240,27,38)]/10 group-hover:bg-[rgb(240,27,38)] rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                  <Clock
                    width={20}
                    height={20}
                    strokeWidth={2}
                    className="lucide lucide-clock text-[rgb(240,27,38)] group-hover:text-white transition-colors"
                  />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">
                    Horário de Atendimento
                  </p>
                  <p className="text-[rgb(37,34,35)] font-semibold text-sm">
                    Seg a Qui: 07h00 às 17h00
                  </p>
                  <p className="text-[rgb(37,34,35)] font-semibold text-sm">
                    Sexta: 07h00 às 16h00
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div
            ref={rightRef}
            className={`lg:col-span-3 transition-all duration-700 delay-200 ${
              rightIn ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8"
            >
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="João Silva"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[rgb(37,34,35)] placeholder-gray-300 focus:outline-none focus:border-[rgb(240,27,38)] focus:ring-2 focus:ring-[rgb(240,27,38)]/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="(19) 9 0000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[rgb(37,34,35)] placeholder-gray-300 focus:outline-none focus:border-[rgb(240,27,38)] focus:ring-2 focus:ring-[rgb(240,27,38)]/20 transition-all"
                  />
                </div>
              </div>
              <div className="mb-5">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                  Produto / Serviço de Interesse *
                </label>
                <select
                  name="service"
                  required
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[rgb(37,34,35)] focus:outline-none focus:border-[rgb(240,27,38)] focus:ring-2 focus:ring-[rgb(240,27,38)]/20 transition-all bg-white"
                >
                  <option value="">Selecione um produto</option>
                  <option>Concertina</option>
                  <option>Hastes Metálicas</option>
                  <option>Grampos e Fixadores</option>
                  <option>Cerca Cortante</option>
                  <option>Outro</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                  Mensagem / Detalhes
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Descreva sua necessidade, tamanho do local, quantidade etc."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[rgb(37,34,35)] placeholder-gray-300 focus:outline-none focus:border-[rgb(240,27,38)] focus:ring-2 focus:ring-[rgb(240,27,38)]/20 transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[rgb(240,27,38)] hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-red-500/20 text-base"
              >
                <Send
                  width={18}
                  height={18}
                  strokeWidth={2}
                  className="lucide lucide-send "
                />
                Enviar pelo WhatsApp
              </button>
              <p className="text-center text-xs text-gray-400 mt-3">
                Ao enviar, você será redirecionado para o WhatsApp com sua
                mensagem pré-preenchida.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

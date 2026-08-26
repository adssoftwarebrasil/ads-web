import { useState } from 'react';
import { MessageCircle, CheckCircle2, Send, ArrowRight } from 'lucide-react';

const WA_NUMBER = '5579998311944';

const badges = ['Resposta em até 24h', 'Atendimento personalizado', 'Orçamento gratuito'];

export default function Contact() {
  const [form, setForm] = useState({ name: '', whatsapp: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${form.name}.%0A%0A*Assunto:* ${form.subject}%0A*E-mail:* ${form.email}%0A*WhatsApp:* ${form.whatsapp}%0A%0A${form.message}`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const inputClass =
    'w-full px-5 py-4 border-2 rounded-xl bg-gray-50 focus:bg-white focus:outline-none transition-all duration-300 text-base font-medium border-gray-200 hover:border-gray-300';

  return (
    <section
      id="contact"
      className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#FB6F11]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#FB6F11]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#FB6F11]/3 to-transparent rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-[#FB6F11]/10 border-2 border-[#FB6F11]/20 rounded-full px-4 sm:px-6 py-2 sm:py-2.5 mb-4 sm:mb-6 transition-all duration-700 opacity-100 translate-y-0">
            <MessageCircle className="lucide lucide-message-circle w-4 h-4 sm:w-5 sm:h-5 text-[#FB6F11]" />
            <span className="text-[#FB6F11] text-xs sm:text-sm font-bold tracking-wide uppercase">Entre em Contato</span>
          </div>
          <h2 className="text-[#333333] font-bold mb-4 sm:mb-6 transition-all duration-700 delay-100 text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-4 opacity-100 translate-y-0">
            Tire suas Dúvidas ou <span className="text-[#FB6F11]">Faça Sugestões</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-200 px-4 opacity-100 translate-y-0">
            Nossa equipe está pronta para ouvir suas necessidades e oferecer as melhores soluções em produtos
            ortopédicos
          </p>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-12 md:mb-16 lg:mb-20 max-w-5xl mx-auto transition-all duration-800 opacity-100 translate-y-0"
          style={{ transitionDelay: '300ms' }}
        >
          {badges.map((b) => (
            <div
              key={b}
              className="group flex items-center gap-3 sm:gap-4 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg shadow-gray-200/50 border border-gray-100 hover:border-[#FB6F11]/30 hover:shadow-xl hover:shadow-[#FB6F11]/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#FB6F11] to-[#e56410] rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle2 className="lucide lucide-check-circle2 w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="text-sm sm:text-base md:text-lg text-[#333333] font-bold leading-tight">{b}</span>
            </div>
          ))}
        </div>
        <div
          className="max-w-3xl mx-auto transition-all duration-800 opacity-100 translate-y-0"
          style={{ transitionDelay: '500ms' }}
        >
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl shadow-gray-200/50 border border-gray-100">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 md:mb-10">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#FB6F11] to-[#e56410] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#FB6F11]/30">
                <Send className="lucide lucide-send w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-[#333333] font-bold text-2xl sm:text-3xl md:text-4xl leading-tight">
                  Envie sua Mensagem
                </h3>
                <p className="text-gray-500 text-sm sm:text-base mt-1">Preencha o formulário abaixo</p>
              </div>
            </div>
            <form className="space-y-5 md:space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    placeholder="Seu nome completo"
                    required
                    className={inputClass}
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="relative">
                  <input
                    type="tel"
                    name="whatsapp"
                    placeholder="(00) 00000-0000"
                    required
                    className={inputClass}
                    value={form.whatsapp}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="seu@email.com"
                  required
                  className={inputClass}
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  placeholder="Sobre o que você quer falar?"
                  required
                  className={inputClass}
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="relative">
                <textarea
                  name="message"
                  placeholder="Escreva sua mensagem aqui..."
                  required
                  rows={6}
                  className="w-full px-5 py-4 border-2 rounded-xl bg-gray-50 focus:bg-white focus:outline-none transition-all duration-300 resize-none text-base font-medium border-gray-200 hover:border-gray-300"
                  value={form.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="group w-full bg-gradient-to-r from-[#FB6F11] to-[#e56410] text-white py-5 md:py-6 rounded-xl font-bold text-lg hover:from-[#e56410] hover:to-[#d55a0e] transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#FB6F11]/50 flex items-center justify-center gap-3"
              >
                <MessageCircle className="lucide lucide-message-circle w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                <span>Enviar via WhatsApp</span>
                <ArrowRight className="lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

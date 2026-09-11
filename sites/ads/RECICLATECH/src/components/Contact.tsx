import { useState } from 'react';
import { CheckCircle, Phone, Mail, MapPin, Instagram, Clock, Send } from 'lucide-react';

const reasons = ['Resposta em até 24 horas', 'Atendimento personalizado', 'Orçamento sem compromisso'];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    whatsapp: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${form.name}.
WhatsApp: ${form.whatsapp}
E-mail: ${form.email}
Assunto: ${form.subject}
Mensagem: ${form.message}`;
    window.open(`https://wa.me/5541999600458?text=${encodeURIComponent(text)}`, '_blank');
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  return (
    <section
      id="contato"
      className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-[rgb(26,157,39)]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[rgb(18,132,27)]/5 rounded-full blur-3xl -z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-12 lg:mb-16 transition-all duration-1000 opacity-100 translate-y-0">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[rgb(26,157,39)]/10 text-[rgb(18,132,27)] text-sm font-semibold rounded-full mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-message-circle w-4 h-4"
            >
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
            </svg>
            Entre em Contato
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[rgb(53,64,66)] mb-6">
            Dúvidas ou sugestões?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-[rgb(64,77,79)] max-w-3xl mx-auto leading-relaxed">
            Nossa equipe está pronta para ouvir o que você tem a dizer e encontrar a melhor solução
            para suas necessidades.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[rgb(26,157,39)] to-[rgb(18,132,27)] mx-auto rounded-full mt-6"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div
            className="transition-all duration-1000 opacity-100 translate-x-0"
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="mb-8 p-6 bg-gradient-to-br from-[rgb(26,157,39)]/5 to-[rgb(18,132,27)]/5 rounded-2xl border border-[rgb(26,157,39)]/20">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="lucide lucide-check-circle w-5 h-5 text-[rgb(26,157,39)]" />
                <h3 className="text-lg font-semibold text-[rgb(53,64,66)]">Por que nos contatar?</h3>
              </div>
              <ul className="space-y-3">
                {reasons.map((r) => (
                  <li key={r} className="flex items-center gap-3 text-[rgb(64,77,79)]">
                    <div className="w-1.5 h-1.5 bg-[rgb(26,157,39)] rounded-full"></div>
                    <span className="text-sm sm:text-base">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Seu nome completo"
                  required
                  value={form.name}
                  onChange={onChange}
                  className="w-full px-4 py-4 border-2 rounded-xl focus:outline-none transition-all duration-300 text-base bg-white border-gray-200 hover:border-gray-300"
                />
              </div>
              <div className="relative">
                <input
                  type="tel"
                  name="whatsapp"
                  placeholder="(41) 99999-9999"
                  required
                  maxLength={15}
                  value={form.whatsapp}
                  onChange={onChange}
                  className="w-full px-4 py-4 border-2 rounded-xl focus:outline-none transition-all duration-300 text-base bg-white border-gray-200 hover:border-gray-300"
                />
                <Phone className="lucide lucide-phone absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 text-gray-400" />
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="seu@email.com"
                  required
                  value={form.email}
                  onChange={onChange}
                  className="w-full px-4 py-4 border-2 rounded-xl focus:outline-none transition-all duration-300 text-base bg-white border-gray-200 hover:border-gray-300"
                />
                <Mail className="lucide lucide-mail absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 text-gray-400" />
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  placeholder="Assunto da mensagem"
                  required
                  value={form.subject}
                  onChange={onChange}
                  className="w-full px-4 py-4 border-2 rounded-xl focus:outline-none transition-all duration-300 text-base bg-white border-gray-200 hover:border-gray-300"
                />
              </div>
              <div className="relative">
                <textarea
                  name="message"
                  placeholder="Digite sua mensagem aqui..."
                  required
                  rows={6}
                  value={form.message}
                  onChange={onChange}
                  className="w-full px-4 py-4 border-2 rounded-xl focus:outline-none transition-all duration-300 text-base resize-none bg-white border-gray-200 hover:border-gray-300"
                ></textarea>
              </div>
              <button
                type="submit"
                className="group relative w-full bg-[rgb(26,157,39)] hover:bg-[rgb(18,132,27)] text-white px-6 py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 shadow-lg shadow-[rgb(26,157,39)]/30 hover:shadow-xl hover:shadow-[rgb(26,157,39)]/50 hover:scale-[1.02] overflow-hidden"
              >
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <Send className="lucide lucide-send w-5 h-5 transition-transform group-hover:translate-x-1" />
                  Enviar via WhatsApp
                </span>
              </button>
            </form>
          </div>
          <div
            className="space-y-8 transition-all duration-1000 opacity-100 translate-x-0"
            style={{ transitionDelay: '0.4s' }}
          >
            <div className="space-y-4">
              <a href="tel:+5541999600458" className="block">
                <div className="group flex items-start gap-4 bg-white hover:bg-gradient-to-br hover:from-gray-50 hover:to-white border border-gray-200 hover:border-[rgb(26,157,39)]/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                  <div className="flex-shrink-0 w-12 h-12 bg-[rgb(26,157,39)]/10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Phone className="lucide lucide-phone w-6 h-6 text-[rgb(26,157,39)]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-[rgb(53,64,66)] mb-1">Telefone</h4>
                    <p className="text-[rgb(64,77,79)] text-sm sm:text-base break-words">
                      (41) 99960-0458
                    </p>
                  </div>
                </div>
              </a>
              <a href="mailto:atendimento@reciclatech.com.br" className="block">
                <div className="group flex items-start gap-4 bg-white hover:bg-gradient-to-br hover:from-gray-50 hover:to-white border border-gray-200 hover:border-[rgb(26,157,39)]/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                  <div className="flex-shrink-0 w-12 h-12 bg-[rgb(18,132,27)]/10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Mail className="lucide lucide-mail w-6 h-6 text-[rgb(18,132,27)]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-[rgb(53,64,66)] mb-1">E-mail</h4>
                    <p className="text-[rgb(64,77,79)] text-sm sm:text-base break-words">
                      atendimento@reciclatech.com.br
                    </p>
                  </div>
                </div>
              </a>
              <a
                href="https://maps.app.goo.gl/your-maps-link"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="group flex items-start gap-4 bg-white hover:bg-gradient-to-br hover:from-gray-50 hover:to-white border border-gray-200 hover:border-[rgb(26,157,39)]/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                  <div className="flex-shrink-0 w-12 h-12 bg-[rgb(53,64,66)]/10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <MapPin className="lucide lucide-map-pin w-6 h-6 text-[rgb(53,64,66)]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-[rgb(53,64,66)] mb-1">Endereço</h4>
                    <p className="text-[rgb(64,77,79)] text-sm sm:text-base break-words">
                      Avenida Marginal José de Anchieta, 740, PR 83.408-010, Brasil
                    </p>
                  </div>
                </div>
              </a>
              <a
                href="https://www.instagram.com/reciclatech/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="group flex items-start gap-4 bg-white hover:bg-gradient-to-br hover:from-gray-50 hover:to-white border border-gray-200 hover:border-[rgb(26,157,39)]/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                  <div className="flex-shrink-0 w-12 h-12 bg-pink-600/10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Instagram className="lucide lucide-instagram w-6 h-6 text-pink-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-[rgb(53,64,66)] mb-1">Instagram</h4>
                    <p className="text-[rgb(64,77,79)] text-sm sm:text-base break-words">
                      @reciclatech
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="bg-gradient-to-br from-[rgb(26,157,39)]/10 to-[rgb(18,132,27)]/10 border border-[rgb(26,157,39)]/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[rgb(26,157,39)]/20 rounded-full flex items-center justify-center">
                  <Clock className="lucide lucide-clock w-5 h-5 text-[rgb(26,157,39)]" />
                </div>
                <h4 className="text-lg font-semibold text-[rgb(53,64,66)]">Horário de Atendimento</h4>
              </div>
              <div className="space-y-2 text-[rgb(64,77,79)]">
                <p className="text-sm sm:text-base">
                  <span className="font-semibold">Segunda a Sexta:</span> 8h às 18h
                </p>
                <p className="text-sm sm:text-base">
                  <span className="font-semibold">Sábado:</span> 8h às 12h
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7209.924239509355!2d-49.191159000000006!3d-25.372586!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce9559ab37129%3A0xce8d22cab0ff49cb!2sReciclatech!5e0!3m2!1spt-BR!2sus!4v1762827519499!5m2!1spt-BR!2sus"
                width="100%"
                height="350"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Reciclatech - Curitiba"
                className="grayscale-[30%] hover:grayscale-0 transition-all duration-500"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

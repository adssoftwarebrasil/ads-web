import { useState } from 'react';
import { MapPin, Phone, Clock, Mail, CheckCircle2, MessageCircle, Send } from 'lucide-react';
import { openWhatsApp } from '../lib/whatsapp';

export default function Contact() {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    const parts = [
      'Olá! Gostaria de entrar em contato.',
      name && `*Nome:* ${name}`,
      whatsapp && `*WhatsApp:* ${whatsapp}`,
      email && `*E-mail:* ${email}`,
      subject && `*Assunto:* ${subject}`,
      message && `*Mensagem:* ${message}`,
    ].filter(Boolean);
    openWhatsApp(parts.join('\n'));
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-yellow-500 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#004358] font-semibold text-sm uppercase tracking-wider bg-teal-50 px-4 py-2 rounded-full border border-teal-200">
              Fale Conosco
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#004358] mb-4">Entre em Contato</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos prontos para atender você e oferecer a melhor solução para seu projeto
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-[#004358] mb-8">Informações de Contato</h3>
            <div className="space-y-6">
              <div
                className="group flex items-start gap-4 p-5 bg-white rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100"
                style={{ animation: '0.6s ease-out 0s 1 normal both running fadeInLeft' }}
              >
                <div className="flex-shrink-0 w-14 h-14 bg-teal-500 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-[#004358] mb-2 text-lg group-hover:text-teal-600 transition-colors">
                    Endereço
                  </h4>
                  <div className="text-gray-600 leading-relaxed">
                    Av. Petrobrás, nº 235 - St. Jardim Goiás II
                    <br />
                    Jataí - GO, 75805-275
                  </div>
                </div>
              </div>
              <div
                className="group flex items-start gap-4 p-5 bg-white rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100"
                style={{ animation: '0.6s ease-out 0.1s 1 normal both running fadeInLeft' }}
              >
                <div className="flex-shrink-0 w-14 h-14 bg-yellow-500 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-[#004358] mb-2 text-lg group-hover:text-teal-600 transition-colors">
                    Telefones
                  </h4>
                  <div className="text-gray-600 leading-relaxed">
                    <a href="tel:+5564999919305" className="hover:text-teal-600 transition-colors block">
                      (64) 9 9991-9305
                    </a>
                    <a href="tel:+5564999888102" className="hover:text-teal-600 transition-colors block">
                      (64) 9 9988-8102
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="group flex items-start gap-4 p-5 bg-white rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100"
                style={{ animation: '0.6s ease-out 0.2s 1 normal both running fadeInLeft' }}
              >
                <div className="flex-shrink-0 w-14 h-14 bg-[#004358] rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-[#004358] mb-2 text-lg group-hover:text-teal-600 transition-colors">
                    Horário de Atendimento
                  </h4>
                  <div className="text-gray-600 leading-relaxed">
                    Segunda a Sábado: 08:00 - 20:00
                    <br />
                  </div>
                </div>
              </div>
              <div
                className="group flex items-start gap-4 p-5 bg-white rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100"
                style={{ animation: '0.6s ease-out 0.3s 1 normal both running fadeInLeft' }}
              >
                <div className="flex-shrink-0 w-14 h-14 bg-teal-500 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-[#004358] mb-2 text-lg group-hover:text-teal-600 transition-colors">
                    Website
                  </h4>
                  <div className="text-gray-600 leading-relaxed">
                    <a href="https://www.soloperfuracoes.com.br" className="hover:text-teal-600 transition-colors">
                      www.soloperfuracoes.com.br
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle2 className="w-6 h-6 text-yellow-300" />
                <h4 className="text-white font-bold text-lg">Atendimento Rápido!</h4>
              </div>
              <p className="text-white/90 text-sm leading-relaxed">
                Respondemos todas as mensagens em até 2 horas durante nosso horário de atendimento.
              </p>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-[#004358] mb-2">Envie sua Mensagem</h3>
              <p className="text-gray-600 mb-6">Preencha os campos abaixo e entraremos em contato</p>
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#004358] mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
                    placeholder="Digite seu nome completo"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="whatsapp" className="block text-sm font-semibold text-[#004358] mb-2">
                      WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
                      placeholder="(64) 9 9999-9999"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#004358] mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-[#004358] mb-2">
                    Assunto
                  </label>
                  <select
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all bg-white"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="Perfuração de Poço">🔧 Perfuração de Poço</option>
                    <option value="Manutenção">⚙️ Manutenção</option>
                    <option value="Bombas">⚡ Bombas Submersas</option>
                    <option value="Materiais">📦 Materiais</option>
                    <option value="Outros">💬 Outros</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#004358] mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all resize-none"
                    placeholder="Descreva sua necessidade ou dúvida..."
                  ></textarea>
                </div>
                <button
                  onClick={handleSubmit}
                  className="group w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-teal-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  Enviar via WhatsApp
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-xs text-gray-500 text-center mt-3">
                  Ao enviar, você será redirecionado para o WhatsApp com sua mensagem pronta
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

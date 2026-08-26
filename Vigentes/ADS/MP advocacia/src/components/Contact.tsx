import { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [area, setArea] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text =
      `Olá! Meu nome é ${name}.\n` +
      `E-mail: ${email}\n` +
      `Telefone: ${phone}\n` +
      `Área de Interesse: ${area}\n` +
      `Mensagem: ${message}`;
    const url = `http://wa.me/556281931078?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section
      id="contato"
      className="py-20 bg-gradient-to-b from-white to-[rgb(249,253,249)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[rgb(146,118,47)] font-semibold text-sm tracking-wide uppercase">
            Entre em Contato
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[rgb(3,74,41)] mt-2 leading-tight">
            Fale com Nossos Especialistas
          </h2>
          <p className="text-[rgb(8,16,20)]/70 text-lg mt-4 max-w-2xl mx-auto">
            Tire suas dúvidas e receba orientação jurídica especializada. Atendimento personalizado
            para cada situação.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[rgb(3,74,41)] mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[rgb(3,74,41)]/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="lucide lucide-phone w-6 h-6 text-[rgb(3,74,41)]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[rgb(3,74,41)] mb-1">Telefone / WhatsApp</p>
                    <a
                      href="http://wa.me/556281931078"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[rgb(8,16,20)]/80 hover:text-[rgb(3,74,41)] transition-colors"
                    >
                      (62) 98193-1078
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[rgb(3,74,41)]/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="lucide lucide-mail w-6 h-6 text-[rgb(3,74,41)]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[rgb(3,74,41)] mb-1">E-mail</p>
                    <a
                      href="mailto:advocaciamarcospurificacao@gmail.com"
                      className="text-[rgb(8,16,20)]/80 hover:text-[rgb(3,74,41)] transition-colors break-all"
                    >
                      advocaciamarcospurificacao@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[rgb(3,74,41)]/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="lucide lucide-map-pin w-6 h-6 text-[rgb(3,74,41)]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[rgb(3,74,41)] mb-1">Endereço</p>
                    <p className="text-[rgb(8,16,20)]/80">
                      R. Rio Grande do Sul, Qd.17 - Lt.16<br />
                      Sala comercial 1 - JK<br />
                      Uruaçu - GO, 76400-000
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[rgb(3,74,41)]/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="lucide lucide-clock w-6 h-6 text-[rgb(3,74,41)]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[rgb(3,74,41)] mb-1">Horário de Atendimento</p>
                    <p className="text-[rgb(8,16,20)]/80">
                      Segunda a Sexta<br />
                      08:00 - 12:00 | 14:00 - 17:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[rgb(3,74,41)] to-[rgb(46,81,35)] rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-3">Atendimento Rápido via WhatsApp</h3>
              <p className="text-white/90 mb-4">
                Tire suas dúvidas de forma rápida e prática pelo WhatsApp. Nossa equipe está pronta
                para atender você!
              </p>
              <a
                href="http://wa.me/556281931078"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white text-[rgb(3,74,41)] px-6 py-3 rounded-lg hover:bg-[rgb(249,253,249)] transition-all duration-300 font-bold"
              >
                <Phone className="lucide lucide-phone w-5 h-5" />
                <span>Chamar no WhatsApp</span>
              </a>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[rgb(3,74,41)] mb-6">Envie sua Mensagem</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-[rgb(3,74,41)] mb-2"
                >
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(3,74,41)] focus:ring-2 focus:ring-[rgb(3,74,41)]/20 outline-none transition-all"
                  placeholder="Seu nome"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-[rgb(3,74,41)] mb-2"
                  >
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(3,74,41)] focus:ring-2 focus:ring-[rgb(3,74,41)]/20 outline-none transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-[rgb(3,74,41)] mb-2"
                  >
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(3,74,41)] focus:ring-2 focus:ring-[rgb(3,74,41)]/20 outline-none transition-all"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="area"
                  className="block text-sm font-semibold text-[rgb(3,74,41)] mb-2"
                >
                  Área de Interesse *
                </label>
                <select
                  id="area"
                  required
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(3,74,41)] focus:ring-2 focus:ring-[rgb(3,74,41)]/20 outline-none transition-all"
                >
                  <option value="">Selecione uma área</option>
                  <option value="Direito Ambiental">Direito Ambiental</option>
                  <option value="Direito Tributário">Direito Tributário</option>
                  <option value="Direito Empresarial">Direito Empresarial</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-[rgb(3,74,41)] mb-2"
                >
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(3,74,41)] focus:ring-2 focus:ring-[rgb(3,74,41)]/20 outline-none transition-all resize-none"
                  placeholder="Descreva sua situação ou dúvida..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-[rgb(3,74,41)] text-white px-8 py-4 rounded-lg hover:bg-[rgb(46,81,35)] transition-all duration-300 font-bold shadow-lg hover:shadow-xl group"
              >
                <span>Enviar Mensagem via WhatsApp</span>
                <Send className="lucide lucide-send w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-xs text-[rgb(8,16,20)]/60 text-center">
                Ao enviar, você será redirecionado para o WhatsApp com sua mensagem pré-preenchida
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

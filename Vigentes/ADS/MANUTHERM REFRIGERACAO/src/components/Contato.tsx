import { useState, type FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import Reveal from './Reveal';

const serviceLabels: Record<string, string> = {
  instalacao: 'Instalação de Sistema de Climatização',
  preventiva: 'Manutenção Preventiva',
  corretiva: 'Manutenção Corretiva',
  orcamento: 'Orçamento de Projeto',
  outro: 'Outro',
};

export default function Contato() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const serviceLabel = serviceLabels[service] || service;
    const text = `Olá! Meu nome é ${name}.
E-mail: ${email}
Telefone/WhatsApp: ${phone}
Empresa: ${company}
Tipo de Serviço: ${serviceLabel}
Mensagem: ${message}`;
    window.open(`https://wa.me/5571999313609?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section
      id="contato"
      className="relative py-16 lg:py-24 bg-gradient-to-b from-white via-[rgba(247,247,247,0.5)] to-white overflow-hidden"
    >
      <div className="absolute top-20 left-10 w-64 h-64 bg-[rgba(28,123,179,0.05)] rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[rgba(9,74,104,0.03)] rounded-full blur-3xl"></div>
      <div className="max-w-[1200px] mx-auto px-5 lg:px-20 relative z-10">
        <Reveal>
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-[28px] lg:text-[40px] font-bold text-[rgb(9,74,104)] mb-4">Fale Conosco</h2>
            <p className="text-[18px] text-[rgb(28,123,179)]">Solicite um orçamento ou tire suas dúvidas</p>
          </div>
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="lg:col-span-2 space-y-4">
              <a
                href="https://wa.me/5571999313609"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                  <WhatsAppIcon className="w-8 h-8" />
                </div>
                <div>
                  <p className="font-semibold text-white text-lg">WhatsApp</p>
                  <p className="text-white/90 text-[15px]">(71) 99931-3609</p>
                </div>
              </a>
              <div className="flex items-center gap-4 p-5 bg-white rounded-xl border border-gray-200 hover:border-[rgb(28,123,179)] transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-[rgba(9,74,104,0.1)] to-[rgba(28,123,179,0.1)] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone
                    width={24}
                    height={24}
                    strokeWidth={2}
                    className="lucide lucide-phone text-[rgb(28,123,179)]"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Telefone</p>
                  <a
                    href="tel:+557130262859"
                    className="text-gray-600 hover:text-[rgb(28,123,179)] transition-colors"
                  >
                    (71) 3026-2859
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-5 bg-white rounded-xl border border-gray-200 hover:border-[rgb(28,123,179)] transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-[rgba(9,74,104,0.1)] to-[rgba(28,123,179,0.1)] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail
                    width={24}
                    height={24}
                    strokeWidth={2}
                    className="lucide lucide-mail text-[rgb(28,123,179)]"
                  />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-gray-800 mb-1">E-mail</p>
                  <a
                    href="mailto:operacional@manutherm.com.br"
                    className="text-gray-600 hover:text-[rgb(28,123,179)] transition-colors text-sm break-all"
                  >
                    operacional@manutherm.com.br
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-200 hover:border-[rgb(28,123,179)] transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-[rgba(9,74,104,0.1)] to-[rgba(28,123,179,0.1)] rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin
                    width={24}
                    height={24}
                    strokeWidth={2}
                    className="lucide lucide-map-pin text-[rgb(28,123,179)]"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Endereço</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Rua Aquiles Ferreira Souza, Nº 50
                    <br />
                    Lauro de Freitas, Bahia
                    <br />
                    CEP: 42701-350
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-200 hover:border-[rgb(28,123,179)] transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-[rgba(9,74,104,0.1)] to-[rgba(28,123,179,0.1)] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock
                    width={24}
                    height={24}
                    strokeWidth={2}
                    className="lucide lucide-clock text-[rgb(28,123,179)]"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Horário</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Segunda a Sexta: 08:00 às 17:00
                    <br />
                    Sábado e Domingo: Fechado
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="bg-white p-6 lg:p-10 rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-gray-100"
              >
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="Seu nome completo"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[rgb(28,123,179)] transition-colors bg-gray-50 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[rgb(28,123,179)] transition-colors bg-gray-50 focus:bg-white"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                      Telefone/WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      placeholder="(71) 99999-9999"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[rgb(28,123,179)] transition-colors bg-gray-50 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-gray-700 font-semibold mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      placeholder="Nome da sua empresa"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[rgb(28,123,179)] transition-colors bg-gray-50 focus:bg-white"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="service" className="block text-gray-700 font-semibold mb-2">
                    Tipo de Serviço *
                  </label>
                  <select
                    id="service"
                    required
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[rgb(28,123,179)] transition-colors bg-gray-50 focus:bg-white"
                  >
                    <option value="">Selecione o serviço desejado</option>
                    <option value="instalacao">Instalação de Sistema de Climatização</option>
                    <option value="preventiva">Manutenção Preventiva</option>
                    <option value="corretiva">Manutenção Corretiva</option>
                    <option value="orcamento">Orçamento de Projeto</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Descreva seu projeto ou necessidade..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[rgb(28,123,179)] transition-colors resize-none bg-gray-50 focus:bg-white"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white py-4 px-6 rounded-xl font-semibold hover:shadow-2xl hover:shadow-[rgba(37,211,102,0.3)] transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3 text-lg"
                >
                  <WhatsAppIcon className="w-6 h-6" fill="white" />
                  Enviar via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

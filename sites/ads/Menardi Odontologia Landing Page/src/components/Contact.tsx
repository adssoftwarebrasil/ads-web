import { useState, FormEvent } from 'react';
import { User, Phone, Mail, MessageSquare, Send } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const services = [
  { value: '', label: 'Selecione um serviço' },
  { value: 'Ortodontia', label: 'Ortodontia' },
  { value: 'Implantodontia', label: 'Implantodontia' },
  { value: 'Harmonização Facial', label: 'Harmonização Facial' },
  { value: 'Estética Dental', label: 'Estética Dental' },
  { value: 'Endodontia', label: 'Endodontia (Canal)' },
  { value: 'Próteses Dentárias', label: 'Próteses Dentárias' },
  { value: 'Clareamento', label: 'Clareamento Dental' },
  { value: 'Emergência', label: 'Emergência Odontológica' },
  { value: 'Outro', label: 'Outro' },
];

const WHATSAPP_NUMBER = '5514996933360';

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let text = `Olá! Gostaria de agendar uma consulta.\n\n`;
    text += `*Nome:* ${name}\n`;
    text += `*Telefone:* ${phone}\n`;
    if (email) text += `*E-mail:* ${email}\n`;
    if (service) text += `*Serviço de Interesse:* ${service}\n`;
    if (message) text += `*Mensagem:* ${message}\n`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
  };

  return (
    <section
      id="contato"
      className="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Agende Sua{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                Consulta
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Preencha o formulário abaixo e nossa equipe entrará em contato via WhatsApp para
              confirmar seu horário
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-100">
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-slate-700 font-semibold mb-2 flex items-center gap-2"
                    >
                      <User size={18} className="lucide lucide-user text-teal-600" />
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:outline-none transition-all"
                      placeholder="Digite seu nome completo"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-slate-700 font-semibold mb-2 flex items-center gap-2"
                    >
                      <Phone size={18} className="lucide lucide-phone text-teal-600" />
                      Telefone/WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:outline-none transition-all"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-slate-700 font-semibold mb-2 flex items-center gap-2"
                    >
                      <Mail size={18} className="lucide lucide-mail text-teal-600" />
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:outline-none transition-all"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-slate-700 font-semibold mb-2 flex items-center gap-2"
                    >
                      <MessageSquare size={18} className="lucide lucide-message-square text-teal-600" />
                      Serviço de Interesse
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:outline-none transition-all bg-white"
                    >
                      {services.map((s) => (
                        <option key={s.label} value={s.value}>
                          {s.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-slate-700 font-semibold mb-2">
                      Mensagem/Observações
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:outline-none transition-all resize-none"
                      placeholder="Conte-nos como podemos ajudá-lo..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-green-600 hover:to-green-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02] flex items-center justify-center gap-3 group"
                  >
                    <WhatsAppIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    Enviar via WhatsApp
                    <Send
                      size={20}
                      className="lucide lucide-send group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </form>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-xl p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <WhatsAppIcon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold">WhatsApp Direto</h3>
                </div>
                <p className="mb-4 text-white/90">Fale conosco agora mesmo pelo WhatsApp</p>
                <button
                  onClick={openWhatsApp}
                  className="w-full bg-white text-green-600 px-6 py-3 rounded-xl font-bold hover:bg-green-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Iniciar Conversa
                </button>
                <p className="text-sm text-white/80 mt-3 text-center">(14) 99693-3360</p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-br from-teal-500 to-cyan-500 p-3 rounded-xl">
                    <Phone size={24} className="lucide lucide-phone text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Telefone</h3>
                </div>
                <a
                  href="tel:+5514996933360"
                  className="block text-center bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all"
                >
                  (14) 99693-3360
                </a>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Horário de Atendimento</h3>
                <div className="space-y-2 text-sm text-slate-600">
                  <p>
                    <span className="font-semibold">Seg-Sex:</span> 08:30 - 18:30
                  </p>
                  <p>
                    <span className="font-semibold">Sábado:</span> 08:30 - 13:30
                  </p>
                  <p>
                    <span className="font-semibold">Domingo:</span> Fechado
                  </p>
                  <p className="text-red-600 font-semibold mt-3">Emergências: 24h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

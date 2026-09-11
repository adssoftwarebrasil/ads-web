import { useState } from 'react';
import {
  Send,
  Phone,
  Mail,
  Clock,
  Instagram,
  CheckCircle,
  User,
  Package,
  MessageSquare,
} from 'lucide-react';

const benefits = [
  'Resposta em até 2 horas',
  'Orçamento sem compromisso',
  'Atendimento personalizado',
  'Entrega para todo Brasil',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    productType: '',
    quantity: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const lines = [
      '*Solicitação de Orçamento - Brasil Camisetas*',
      '',
      `*Nome:* ${form.name}`,
      `*Email:* ${form.email}`,
      `*WhatsApp:* ${form.phone}`,
      `*Tipo de Produto:* ${form.productType}`,
      `*Quantidade:* ${form.quantity}`,
    ];
    if (form.message) {
      lines.push(`*Mensagem:* ${form.message}`);
    }
    const text = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/556234134865?text=${text}`, '_blank');
  };

  return (
    <section
      id="contact"
      className="relative py-12 lg:py-32 overflow-hidden flex items-center justify-center min-h-screen"
      style={{ background: 'linear-gradient(135deg, rgb(0, 45, 100) 0%, rgb(6, 138, 80) 100%)' }}
    >
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
        style={{ backgroundColor: 'rgb(255, 241, 20)' }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10"
        style={{ backgroundColor: 'rgb(255, 241, 20)' }}
      ></div>
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-px bg-white transform -rotate-12"></div>
        <div className="absolute top-2/4 left-0 w-full h-px bg-white transform rotate-12"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-white transform -rotate-12"></div>
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 lg:px-5 py-2 rounded-full mb-4 font-semibold text-xs sm:text-sm"
            style={{
              backgroundColor: 'rgba(255, 241, 20, 0.2)',
              color: 'rgb(255, 241, 20)',
              border: '2px solid rgba(255, 241, 20, 0.4)',
            }}
          >
            <Send className="lucide-send sm:w-4 sm:h-4" size={14} />
            Entre em Contato
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-3 lg:mb-4 leading-tight">
            Vamos Criar Algo Incrível Juntos?
          </h2>
          <p className="text-base lg:text-lg text-white/80 max-w-2xl mx-auto px-2">
            Nossa equipe responde em até 2 horas úteis
          </p>
        </div>
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-2 order-2 lg:order-1 w-full max-w-2xl lg:max-w-none mx-auto">
            <div className="space-y-4 mb-8">
              <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-5 sm:p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: 'rgba(255, 241, 20, 0.2)' }}
                  >
                    <Phone size={22} style={{ color: 'rgb(255, 241, 20)' }} />
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <p className="font-semibold text-white/90 mb-1 text-sm">WhatsApp</p>
                    <a
                      href="https://wa.me/556234134865"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:text-yellow-300 transition-colors block truncate"
                    >
                      (62) 3413-4865
                    </a>
                  </div>
                </div>
              </div>
              <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-5 sm:p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: 'rgba(255, 241, 20, 0.2)' }}
                  >
                    <Mail size={22} style={{ color: 'rgb(255, 241, 20)' }} />
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <p className="font-semibold text-white/90 mb-1 text-sm">Email</p>
                    <a
                      href="mailto:brasilcamisetas2025@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:text-yellow-300 transition-colors block truncate"
                    >
                      brasilcamisetas2025@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-5 sm:p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: 'rgba(255, 241, 20, 0.2)' }}
                  >
                    <Clock size={22} style={{ color: 'rgb(255, 241, 20)' }} />
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <p className="font-semibold text-white/90 mb-1 text-sm">Horário</p>
                    <p className="text-white/70 text-sm truncate">Seg-Sex: 08h-18h</p>
                    <p className="text-white/70 text-sm truncate">Sábado: 08h-12h</p>
                  </div>
                </div>
              </div>
              <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-5 sm:p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: 'rgba(255, 241, 20, 0.2)' }}
                  >
                    <Instagram size={22} style={{ color: 'rgb(255, 241, 20)' }} />
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <p className="font-semibold text-white/90 mb-1 text-sm">Instagram</p>
                    <a
                      href="https://instagram.com/brasilcamisetasgo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:text-yellow-300 transition-colors block truncate"
                    >
                      @brasilcamisetasgo
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-white/20">
              <h3 className="text-white font-bold text-lg mb-4">Por que nos escolher?</h3>
              <div className="space-y-3">
                {benefits.map((b) => (
                  <div key={b} className="flex items-center gap-3">
                    <CheckCircle
                      size={18}
                      className="flex-shrink-0"
                      style={{ color: 'rgb(255, 241, 20)' }}
                    />
                    <span className="text-white/80 text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 order-1 lg:order-2 w-full max-w-2xl lg:max-w-none mx-auto">
            <div className="bg-white rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl">
              <h3
                className="text-xl sm:text-2xl font-bold mb-6 text-center sm:text-left"
                style={{ color: 'rgb(0, 45, 100)' }}
              >
                Solicite seu Orçamento
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                      <User size={18} className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-green-600 transition-all text-gray-800 placeholder-gray-400"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                      <Mail size={18} className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-green-600 transition-all text-gray-800 placeholder-gray-400"
                    />
                  </div>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">WhatsApp *</label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                      <Phone size={18} className="text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(62) 99999-9999"
                      className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-green-600 transition-all text-gray-800 placeholder-gray-400"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Tipo de Produto *
                  </label>
                  <div className="relative">
                    <select
                      name="productType"
                      value={form.productType}
                      onChange={handleChange}
                      className="w-full pl-4 pr-10 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-green-600 transition-all appearance-none bg-white text-gray-800"
                      style={{
                        backgroundImage:
                          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239CA3AF'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E\")",
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 1rem center',
                        backgroundSize: '1.2em 1.2em',
                      }}
                    >
                      <option value="">Selecione...</option>
                      <option value="Camisetas">Camisetas</option>
                      <option value="Abadás">Abadás</option>
                      <option value="Coletes">Coletes</option>
                      <option value="Uniformes">Uniformes</option>
                      <option value="Outros">Outros</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Quantidade Estimada *
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <Package size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="quantity"
                    value={form.quantity}
                    onChange={handleChange}
                    placeholder="Ex: 50 unidades"
                    className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-green-600 transition-all text-gray-800 placeholder-gray-400"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensagem (Opcional)
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-4">
                    <MessageSquare size={18} className="text-gray-400" />
                  </div>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Conte-nos mais sobre seu projeto..."
                    className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-green-600 transition-all resize-none text-gray-800 placeholder-gray-400"
                  ></textarea>
                </div>
              </div>
              <button
                onClick={handleSubmit}
                className="group w-full py-3.5 sm:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl flex items-center justify-center gap-2 shadow-lg active:scale-95"
                style={{ backgroundColor: 'rgb(6, 138, 80)' }}
              >
                <Send
                  size={18}
                  className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                />
                Enviar via WhatsApp
              </button>
              <p className="text-center text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">
                Ao enviar, você será redirecionado para o WhatsApp
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

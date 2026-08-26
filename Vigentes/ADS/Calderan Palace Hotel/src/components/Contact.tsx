import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const WHATSAPP_NUMBER = '5567996712871';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    whatsapp: '',
    email: '',
    subject: 'Reserva',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `Olá! Meu nome é ${form.name}.%0A` +
      `Assunto: ${form.subject}%0A` +
      `WhatsApp: ${form.whatsapp}%0A` +
      `E-mail: ${form.email}%0A` +
      `Mensagem: ${form.message}`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${text.replace(/ /g, '%20')}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section
      id="contato"
      className="relative py-16 lg:py-24 bg-gradient-to-br from-[#1A1A1A] via-[#252525] to-[#1A1A1A] overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F09100]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F09100]/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-[1200px] relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-[#F09100] text-xs uppercase tracking-[2px] font-semibold mb-3">
            ENTRE EM CONTATO
          </p>
          <h2 className="text-white text-3xl lg:text-5xl font-bold mb-4">Dúvidas ou Reservas?</h2>
          <p className="text-gray-300 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Nossa equipe está pronta para atender você. Entre em contato e garanta sua hospedagem.
          </p>
        </div>
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gradient-to-br from-[#F09100] to-[#D98200] rounded-2xl p-8 text-white shadow-2xl">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Phone size={24} className="animate-pulse" />
                Contato Rápido
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:+5567996712871"
                  className="flex items-center gap-3 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 group"
                >
                  <Phone
                    size={20}
                    className="flex-shrink-0 group-hover:scale-110 transition-transform"
                  />
                  <div>
                    <p className="text-sm text-white/80">Telefone</p>
                    <p className="text-lg font-semibold">(67) 99671-2871</p>
                  </div>
                </a>
                <button
                  onClick={() =>
                    window.open(
                      `https://wa.me/${WHATSAPP_NUMBER}?text=Olá!%20Gostaria%20de%20fazer%20uma%20reserva.`,
                      '_blank',
                      'noopener,noreferrer'
                    )
                  }
                  className="w-full flex items-center gap-3 p-4 bg-white text-[#F09100] rounded-xl hover:bg-white/95 transition-all duration-300 group font-semibold shadow-lg"
                >
                  <WhatsAppIcon className="flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <p className="text-xs text-[#F09100]/70">WhatsApp</p>
                    <p className="text-sm">Fale Conosco Agora</p>
                  </div>
                </button>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#F09100]/50 transition-all duration-300">
                <div className="w-12 h-12 bg-[#F09100]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-[#F09100]" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">E-mail</p>
                  <a
                    href="mailto:contato@calderanpalacehotel.com.br"
                    className="text-white hover:text-[#F09100] transition-colors break-all"
                  >
                    contato@calderanpalacehotel.com.br
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#F09100]/50 transition-all duration-300">
                <div className="w-12 h-12 bg-[#F09100]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-[#F09100]" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Localização</p>
                  <p className="text-white">Jardim - MS</p>
                  <p className="text-gray-400 text-sm mt-1">Próximo a Bonito-MS</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#F09100]/50 transition-all duration-300">
                <div className="w-12 h-12 bg-[#F09100]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-[#F09100]" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Atendimento</p>
                  <p className="text-white">24 horas por dia</p>
                  <p className="text-gray-400 text-sm mt-1">7 dias por semana</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Send size={24} className="text-[#F09100]" />
                <h3 className="text-2xl font-bold text-[#1A1A1A]">Envie sua Mensagem</h3>
              </div>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      placeholder="Digite seu nome"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#F09100] focus:ring-4 focus:ring-[#F09100]/10 transition-all text-[15px] placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      WhatsApp *
                    </label>
                    <input
                      type="tel"
                      placeholder="(00) 00000-0000"
                      required
                      value={form.whatsapp}
                      onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                      className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#F09100] focus:ring-4 focus:ring-[#F09100]/10 transition-all text-[15px] placeholder:text-gray-400"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">E-mail *</label>
                    <input
                      type="email"
                      placeholder="seu@email.com"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#F09100] focus:ring-4 focus:ring-[#F09100]/10 transition-all text-[15px] placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Assunto *</label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#F09100] focus:ring-4 focus:ring-[#F09100]/10 transition-all text-[15px] bg-white cursor-pointer"
                    >
                      <option value="Reserva">💼 Reserva</option>
                      <option value="Informações">ℹ️ Informações</option>
                      <option value="Eventos">🎉 Eventos</option>
                      <option value="Outros">📋 Outros</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem *</label>
                  <textarea
                    placeholder="Conte-nos mais sobre sua necessidade..."
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#F09100] focus:ring-4 focus:ring-[#F09100]/10 transition-all resize-none text-[15px] placeholder:text-gray-400"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#F09100] to-[#D98200] text-white py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 group"
                >
                  <WhatsAppIcon
                    width={22}
                    height={22}
                    className="group-hover:rotate-12 transition-transform"
                  />
                  Enviar Mensagem pelo WhatsApp
                </button>
                <p className="text-center text-sm text-gray-500 mt-4">
                  Ao enviar, você será redirecionado para o WhatsApp
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

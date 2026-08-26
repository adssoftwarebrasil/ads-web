import { useState } from 'react';
import { Send, Calendar, User, Phone as PhoneIcon, MessageSquare } from 'lucide-react';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    checkin: '',
    checkout: '',
    type: 'diária',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Olá! Gostaria de fazer uma reserva no Treviso Apart Hotel.\n\n` +
      `*Nome:* ${form.name}\n` +
      `*Telefone:* ${form.phone}\n` +
      `*Tipo de hospedagem:* ${form.type}\n` +
      `*Check-in:* ${form.checkin || 'A definir'}\n` +
      `*Check-out:* ${form.checkout || 'A definir'}\n` +
      `*Mensagem:* ${form.message || 'Sem mensagem adicional'}`
    );
    window.open(`https://wa.me/552733734333?text=${msg}`, '_blank');
  };

  return (
    <section id="contact" className="bg-[#212042] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-[#b82626] uppercase tracking-[0.3em] text-xs font-semibold mb-3">
              Faça sua reserva
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#fef5e6] leading-tight mb-6">
              Reserve agora e garanta<br />a sua acomodação
            </h2>
            <p className="text-[#a08f95] leading-relaxed mb-8">
              Preencha o formulário ao lado e entraremos em contato via WhatsApp
              para confirmar a disponibilidade e finalizar sua reserva de forma
              rápida e segura.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#b82626]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-[#b82626] font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="text-[#fef5e6] font-semibold text-sm mb-1">Preencha o formulário</h4>
                  <p className="text-[#a08f95] text-xs leading-relaxed">Informe seus dados e datas de interesse</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#b82626]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-[#b82626] font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="text-[#fef5e6] font-semibold text-sm mb-1">Fale com nossa equipe</h4>
                  <p className="text-[#a08f95] text-xs leading-relaxed">Você será redirecionado ao nosso WhatsApp</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#b82626]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-[#b82626] font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="text-[#fef5e6] font-semibold text-sm mb-1">Confirme sua reserva</h4>
                  <p className="text-[#a08f95] text-xs leading-relaxed">Confirmação rápida com toda a segurança</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-5 bg-white/5 border border-white/10 rounded-xl">
              <p className="text-[#fef5e6]/70 text-sm mb-2">Também aceitamos reservas via:</p>
              <div className="flex flex-wrap gap-2 text-xs text-[#a08f95]">
                <span className="bg-white/5 px-3 py-1.5 rounded-full">Booking.com</span>
                <span className="bg-white/5 px-3 py-1.5 rounded-full">Agências de Turismo</span>
                <span className="bg-white/5 px-3 py-1.5 rounded-full">Telefone</span>
                <span className="bg-white/5 px-3 py-1.5 rounded-full">Presencial</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-[#fef5e6]/70 text-xs font-medium mb-1.5 uppercase tracking-wide">
                  Nome completo *
                </label>
                <div className="relative">
                  <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a08f95]" />
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Seu nome"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 focus:border-[#b82626] text-[#fef5e6] placeholder-[#a08f95]/50 rounded-lg pl-9 pr-4 py-3 text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#fef5e6]/70 text-xs font-medium mb-1.5 uppercase tracking-wide">
                  Telefone / WhatsApp *
                </label>
                <div className="relative">
                  <PhoneIcon size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a08f95]" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="(XX) XXXXX-XXXX"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 focus:border-[#b82626] text-[#fef5e6] placeholder-[#a08f95]/50 rounded-lg pl-9 pr-4 py-3 text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#fef5e6]/70 text-xs font-medium mb-1.5 uppercase tracking-wide">
                  Tipo de hospedagem
                </label>
                <select
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 focus:border-[#b82626] text-[#fef5e6] rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                >
                  <option value="diária" className="bg-[#212042]">Diária</option>
                  <option value="hospedagem mensal" className="bg-[#212042]">Mensal</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#fef5e6]/70 text-xs font-medium mb-1.5 uppercase tracking-wide">
                    Check-in
                  </label>
                  <div className="relative">
                    <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a08f95]" />
                    <input
                      type="date"
                      name="checkin"
                      value={form.checkin}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 focus:border-[#b82626] text-[#fef5e6] rounded-lg pl-9 pr-2 py-3 text-sm outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[#fef5e6]/70 text-xs font-medium mb-1.5 uppercase tracking-wide">
                    Check-out
                  </label>
                  <div className="relative">
                    <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a08f95]" />
                    <input
                      type="date"
                      name="checkout"
                      value={form.checkout}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 focus:border-[#b82626] text-[#fef5e6] rounded-lg pl-9 pr-2 py-3 text-sm outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[#fef5e6]/70 text-xs font-medium mb-1.5 uppercase tracking-wide">
                  Mensagem adicional
                </label>
                <div className="relative">
                  <MessageSquare size={16} className="absolute left-3 top-3.5 text-[#a08f95]" />
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Alguma preferência ou dúvida?"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 focus:border-[#b82626] text-[#fef5e6] placeholder-[#a08f95]/50 rounded-lg pl-9 pr-4 py-3 text-sm outline-none transition-colors resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#b82626] hover:bg-[#9b1f1f] text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 shadow-lg text-sm tracking-wide"
              >
                <Send size={16} />
                Enviar Reserva via WhatsApp
              </button>

              <p className="text-center text-[#a08f95] text-xs">
                Ao enviar, você será redirecionado ao WhatsApp com os dados preenchidos.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

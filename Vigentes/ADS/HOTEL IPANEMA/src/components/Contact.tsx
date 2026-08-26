import { useState } from 'react';
import { Send, Calendar, Users, MessageSquare } from 'lucide-react';

const WHATSAPP_NUMBER = '5563992199115';

interface FormData {
  name: string;
  phone: string;
  checkin: string;
  checkout: string;
  guests: string;
  roomType: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    checkin: '',
    checkout: '',
    guests: '1',
    roomType: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*Solicitação de Reserva — Hotel Ipanema*

👤 *Nome:* ${form.name}
📱 *Telefone:* ${form.phone}
📅 *Check-in:* ${form.checkin || 'A definir'}
📅 *Check-out:* ${form.checkout || 'A definir'}
👥 *Hóspedes:* ${form.guests}
🛏️ *Tipo de Quarto:* ${form.roomType || 'A definir'}
💬 *Mensagem:* ${form.message || 'Sem mensagem adicional'}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const inputClass =
    'w-full bg-white/5 border border-white/15 hover:border-white/30 focus:border-[#f68033] rounded-xl px-4 py-3.5 text-white placeholder-white/30 text-sm transition-all duration-200 outline-none focus:ring-2 focus:ring-[#f68033]/20';

  return (
    <section id="contato" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#f68033] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="inline-block text-[#f68033] text-sm font-bold tracking-widest uppercase mb-3">
              Faça Sua Reserva
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              Reserve Agora e<br />
              <span className="text-[#fff808]">Garanta sua Vaga</span>
            </h2>
            <p className="text-[#bdbec2] text-base leading-relaxed mb-8">
              Preencha o formulário ao lado e nossa equipe entrará em contato via WhatsApp com disponibilidade e melhores condições. Resposta garantida em menos de 1 hora.
            </p>

            <div className="space-y-5">
              {[
                { icon: MessageSquare, title: 'Resposta Rápida', desc: 'Retornamos em até 1 hora pelo WhatsApp' },
                { icon: Calendar, title: 'Disponibilidade em Tempo Real', desc: 'Confira a disponibilidade dos quartos' },
                { icon: Users, title: 'Atendimento Personalizado', desc: 'Nossa equipe encontra o melhor quarto para você' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#f68033]/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="text-[#f68033]" size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">{title}</h4>
                    <p className="text-[#bdbec2] text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-[#f68033]/10 border border-[#f68033]/30 rounded-2xl">
              <p className="text-[#fff808] font-black text-lg mb-1">Café da Manhã Incluso</p>
              <p className="text-white/70 text-sm">Todas as diárias incluem café da manhã completo para todos os hóspedes.</p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8">
            <h3 className="text-white font-black text-2xl mb-6">Solicitar Reserva</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[#bdbec2] text-xs font-semibold uppercase tracking-wider mb-1.5 block">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="text-[#bdbec2] text-xs font-semibold uppercase tracking-wider mb-1.5 block">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(63) 9 9219-9115"
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[#bdbec2] text-xs font-semibold uppercase tracking-wider mb-1.5 block">
                    Check-in
                  </label>
                  <input
                    type="date"
                    name="checkin"
                    value={form.checkin}
                    onChange={handleChange}
                    className={inputClass + ' [color-scheme:dark]'}
                  />
                </div>
                <div>
                  <label className="text-[#bdbec2] text-xs font-semibold uppercase tracking-wider mb-1.5 block">
                    Check-out
                  </label>
                  <input
                    type="date"
                    name="checkout"
                    value={form.checkout}
                    onChange={handleChange}
                    className={inputClass + ' [color-scheme:dark]'}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[#bdbec2] text-xs font-semibold uppercase tracking-wider mb-1.5 block">
                    Nº de Hóspedes
                  </label>
                  <select name="guests" value={form.guests} onChange={handleChange} className={inputClass}>
                    <option value="1">1 Hóspede</option>
                    <option value="2">2 Hóspedes</option>
                    <option value="3">3 Hóspedes</option>
                    <option value="4+">4 ou mais</option>
                  </select>
                </div>
                <div>
                  <label className="text-[#bdbec2] text-xs font-semibold uppercase tracking-wider mb-1.5 block">
                    Tipo de Quarto
                  </label>
                  <select name="roomType" value={form.roomType} onChange={handleChange} className={inputClass}>
                    <option value="">Selecione...</option>
                    <option value="Casal com solteiro">Casal com solteiro</option>
                    <option value="Triplo solteiro">Triplo solteiro</option>
                    <option value="Suíte Premium">Suíte Premium</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[#bdbec2] text-xs font-semibold uppercase tracking-wider mb-1.5 block">
                  Mensagem Adicional
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Alguma preferência ou solicitação especial?"
                  rows={3}
                  className={inputClass + ' resize-none'}
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-[#f68033] hover:bg-[#fff808] text-black font-black py-4 rounded-xl text-base transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-xl shadow-orange-500/30"
              >
                <Send size={18} />
                Enviar Solicitação via WhatsApp
              </button>
              <p className="text-center text-[#bdbec2] text-xs">
                Ao enviar, você será redirecionado ao WhatsApp com seus dados preenchidos.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

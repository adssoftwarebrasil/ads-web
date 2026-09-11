import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { WHATSAPP_PHONE } from '../data';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', vehicle: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `Olá! Meu nome é ${form.name}.`;
    if (form.vehicle) text += ` Tenho interesse no veículo: ${form.vehicle}.`;
    if (form.message) text += ` ${form.message}`;
    text += ` Meu telefone é ${form.phone}.`;
    window.open(
      `http://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section id="contato" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-[#f8c102]"></div>
            <span className="text-[#f8c102] text-sm font-semibold tracking-widest uppercase">Fale Conosco</span>
            <div className="h-px w-8 bg-[#f8c102]"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#fefefe] mb-4">
            Pronto para fazer o <span className="text-[#f8c102]">melhor negócio?</span>
          </h2>
          <p className="text-[#fefefe]/50 text-lg max-w-xl mx-auto">
            Entre em contato agora e receba atendimento personalizado da nossa equipe.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <a href="tel:+5565984310000" target="_blank" rel="noopener noreferrer" className="block">
                <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-5 hover:border-[#f8c102]/20 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#f8c102]/10 flex items-center justify-center mb-3">
                    <Phone className="lucide lucide-phone text-[#f8c102]" width={18} height={18} />
                  </div>
                  <div className="text-[#fefefe]/40 text-xs uppercase tracking-wide mb-1">Telefone / WhatsApp</div>
                  <div className="text-[#fefefe] text-sm font-medium whitespace-pre-line">(65) 98431-0000</div>
                </div>
              </a>
              <a href="mailto:xcmotorsvg@gmail.com" target="_blank" rel="noopener noreferrer" className="block">
                <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-5 hover:border-[#f8c102]/20 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#f8c102]/10 flex items-center justify-center mb-3">
                    <Mail className="lucide lucide-mail text-[#f8c102]" width={18} height={18} />
                  </div>
                  <div className="text-[#fefefe]/40 text-xs uppercase tracking-wide mb-1">E-mail</div>
                  <div className="text-[#fefefe] text-sm font-medium whitespace-pre-line">xcmotorsvg@gmail.com</div>
                </div>
              </a>
              <a
                href="https://maps.google.com/?q=XC+MOTORS+Várzea+Grande"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-5 hover:border-[#f8c102]/20 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#f8c102]/10 flex items-center justify-center mb-3">
                    <MapPin className="lucide lucide-map-pin text-[#f8c102]" width={18} height={18} />
                  </div>
                  <div className="text-[#fefefe]/40 text-xs uppercase tracking-wide mb-1">Endereço</div>
                  <div className="text-[#fefefe] text-sm font-medium whitespace-pre-line">{'Av. Dom Orlando Chaves, 614\nCristo Rei – Várzea Grande/MT'}</div>
                </div>
              </a>
              <div>
                <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-5 hover:border-[#f8c102]/20 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#f8c102]/10 flex items-center justify-center mb-3">
                    <Clock className="lucide lucide-clock text-[#f8c102]" width={18} height={18} />
                  </div>
                  <div className="text-[#fefefe]/40 text-xs uppercase tracking-wide mb-1">Horário de Atendimento</div>
                  <div className="text-[#fefefe] text-sm font-medium whitespace-pre-line">{'Seg–Sex: 07:30 às 18:00\nSáb: 07:30 às 13:00'}</div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/5 h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3842.243025531743!2d-56.10919689999999!3d-15.632041899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939dafae75bb9edb%3A0x1801f79917b483e!2sXC%20MOTORS!5e0!3m2!1spt-BR!2sbr!4v1772804212311!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa XC Motors"
                style={{ border: '0px', filter: 'invert(90%) hue-rotate(180deg)' }}
              ></iframe>
            </div>
          </div>
          <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-8">
            <h3 className="text-[#fefefe] font-bold text-2xl mb-6">Envie uma mensagem</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-[#fefefe]/50 text-sm mb-2">Nome completo *</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Seu nome"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-[#0c0c0c] border border-white/10 rounded-xl px-4 py-3 text-[#fefefe] placeholder-[#fefefe]/20 focus:outline-none focus:border-[#f8c102]/50 transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block text-[#fefefe]/50 text-sm mb-2">Telefone *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="(65) 99999-9999"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full bg-[#0c0c0c] border border-white/10 rounded-xl px-4 py-3 text-[#fefefe] placeholder-[#fefefe]/20 focus:outline-none focus:border-[#f8c102]/50 transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block text-[#fefefe]/50 text-sm mb-2">Veículo de interesse</label>
                <input
                  type="text"
                  name="vehicle"
                  placeholder="Ex: Toyota Hilux, VW T-Cross..."
                  value={form.vehicle}
                  onChange={handleChange}
                  className="w-full bg-[#0c0c0c] border border-white/10 rounded-xl px-4 py-3 text-[#fefefe] placeholder-[#fefefe]/20 focus:outline-none focus:border-[#f8c102]/50 transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block text-[#fefefe]/50 text-sm mb-2">Mensagem</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Conte-nos mais sobre o que você procura..."
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-[#0c0c0c] border border-white/10 rounded-xl px-4 py-3 text-[#fefefe] placeholder-[#fefefe]/20 focus:outline-none focus:border-[#f8c102]/50 transition-colors text-sm resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#f8c102] text-[#0c0c0c] py-4 rounded-xl font-bold text-base hover:bg-[#f8c102]/90 transition-all duration-200 hover:scale-[1.02]"
              >
                <Send className="lucide lucide-send" width={18} height={18} />
                Enviar pelo WhatsApp
              </button>
              <p className="text-[#fefefe]/30 text-xs text-center">
                Ao enviar, você será redirecionado ao WhatsApp com a mensagem pré-preenchida.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

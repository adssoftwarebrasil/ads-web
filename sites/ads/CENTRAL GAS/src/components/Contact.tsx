import { useState, type FormEvent } from 'react';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    product: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      'Olá! Gostaria de fazer um pedido.',
      '',
      `*Nome:* ${form.name}`,
      `*WhatsApp/Telefone:* ${form.phone}`,
      `*Endereço de entrega:* ${form.address}`,
      `*Produto desejado:* ${form.product}`,
    ];
    if (form.message.trim()) {
      lines.push(`*Observações:* ${form.message}`);
    }
    const text = encodeURIComponent(lines.join('\n'));
    window.open(`http://wa.me/556696555500?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-primary/10 text-primary font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Fale Conosco
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary leading-tight mb-4">
            Faça seu <span className="text-accent">pedido agora</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Preencha o formulário e você será redirecionado ao nosso WhatsApp com os dados já preenchidos.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="bg-white rounded-3xl shadow-xl border border-primary-light/20 overflow-hidden">
            <div className="gradient-primary p-6">
              <h3 className="text-white font-bold text-xl mb-1">Enviar Pedido</h3>
              <p className="text-white/70 text-sm">Será enviado direto ao nosso WhatsApp</p>
            </div>
            <form className="p-6 md:p-8 space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Seu nome <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Como podemos te chamar?"
                  className="w-full border border-primary-light/50 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  WhatsApp/Telefone <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="(66) 9 9999-9999"
                  className="w-full border border-primary-light/50 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Endereço de entrega <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="address"
                  required
                  placeholder="Rua, número, bairro"
                  className="w-full border border-primary-light/50 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Produto desejado <span className="text-red-400">*</span>
                </label>
                <select
                  name="product"
                  required
                  className="w-full border border-primary-light/50 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all bg-white"
                  value={form.product}
                  onChange={(e) => setForm({ ...form, product: e.target.value })}
                >
                  <option value="" disabled>
                    Selecione um produto...
                  </option>
                  <option value="Botijão P13 (13kg)">Botijão de Gás P13 — 13kg</option>
                  <option value="Cilindro P45 (45kg)">Cilindro de Gás P45 — 45kg</option>
                  <option value="Água Mineral 20L">Água Mineral — 20 Litros</option>
                  <option value="Combo Gás e Água">Combo Gás + Água Mineral</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Observações (opcional)</label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Alguma observação sobre o pedido?"
                  className="w-full border border-primary-light/50 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-primary hover:bg-primary-dark text-white font-bold px-6 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 active:scale-95"
              >
                <Send size={18} className="lucide lucide-send " />
                Enviar Pedido pelo WhatsApp
              </button>
              <p className="text-center text-xs text-gray-400">
                Você será redirecionado ao WhatsApp com os dados preenchidos.
              </p>
            </form>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md border border-primary-light/20">
              <h3 className="text-xl font-bold text-primary mb-6">Informações de Contato</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={18} className="lucide lucide-map-pin text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm mb-0.5">Endereço</p>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      R. Piracicaba, 2603 — Primavera II
                      <br />
                      Primavera do Leste — MT, 78850-000
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={18} className="lucide lucide-phone text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm mb-0.5">WhatsApp</p>
                    <a
                      href="http://wa.me/556696555500"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-medium text-sm hover:text-primary-dark transition-colors"
                    >
                      (66) 9 9655-5500
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={18} className="lucide lucide-mail text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm mb-0.5">E-mail</p>
                    <a
                      href="mailto:centralgaspva2@gmail.com"
                      className="text-primary font-medium text-sm hover:text-primary-dark transition-colors"
                    >
                      centralgaspva2@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center shrink-0">
                    <Clock size={18} className="lucide lucide-clock text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm mb-0.5">Horário de Funcionamento</p>
                    <p className="text-gray-500 text-sm">Todos os dias — 7h às 22h</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-md border border-primary-light/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.9806149364504!2d-54.305032324875114!3d-15.539169885066164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x937727000080c0f7%3A0x34c177c1bc6d779e!2zQ0VOVFJBTCBHw4FTIEUgw4FHVUE!5e0!3m2!1spt-BR!2sbr!4v1771901690093!5m2!1spt-BR!2sbr"
                width="100%"
                height="300"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Central Gás - Primavera do Leste MT"
                style={{ border: '0px', display: 'block' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

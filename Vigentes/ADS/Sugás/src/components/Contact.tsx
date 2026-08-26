import { useState } from 'react';
import { MapPin, Phone, Clock, Mail, Send } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const contactInfo = [
  {
    icon: <Phone size={20} />,
    label: 'Telefone / WhatsApp',
    value: '(66) 9 9650-2020',
    href: 'tel:+5566996502020',
  },
  {
    icon: <MapPin size={20} />,
    label: 'Endereço',
    value: 'R. Barão do Rio Branco, 4092 - Monte Libano, Rondonópolis - MT',
    href: 'https://maps.app.goo.gl/example',
  },
  {
    icon: <Clock size={20} />,
    label: 'Horários',
    value: 'Seg-Sáb: 6:45–19:30 | Dom: 6:45–12:30',
  },
  {
    icon: <Mail size={20} />,
    label: 'E-mail',
    value: 'suzyaneluz@yahoo.com.br',
    href: 'mailto:suzyaneluz@yahoo.com.br',
  },
];

export default function Contact() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({ name: '', phone: '', product: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Olá! Meu nome é *${form.name}*.\n` +
        `Telefone: ${form.phone}\n` +
        `Produto de interesse: ${form.product}\n` +
        (form.message ? `Mensagem: ${form.message}` : '')
    );
    window.open(`https://wa.me/556696502020?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-gray-50 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block bg-brand-red/10 text-brand-red text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
            Fale Conosco
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-blue leading-tight">
            Faça seu <span className="text-brand-red">pedido agora</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-base">
            Preencha o formulário abaixo e sua mensagem será enviada diretamente para o nosso WhatsApp. Respondemos rapidinho!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-md border border-brand-gray/40 p-8 flex flex-col gap-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-brand-blue font-semibold text-sm mb-1.5 block">Seu nome *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="João da Silva"
                    className="w-full border border-brand-gray rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all"
                  />
                </div>
                <div>
                  <label className="text-brand-blue font-semibold text-sm mb-1.5 block">Telefone *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(66) 9 9999-9999"
                    className="w-full border border-brand-gray rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="text-brand-blue font-semibold text-sm mb-1.5 block">Produto desejado *</label>
                <select
                  name="product"
                  required
                  value={form.product}
                  onChange={handleChange}
                  className="w-full border border-brand-gray rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all bg-white"
                >
                  <option value="">Selecione um produto...</option>
                  <option value="Botijão de Gás P13 (13kg)">Botijão de Gás P13 (13kg)</option>
                  <option value="Botijão de Gás P5 (5kg)">Botijão de Gás P5 (5kg)</option>
                  <option value="Garrafão de Água 20L">Garrafão de Água 20L</option>
                  <option value="Regulador de Gás">Regulador de Gás</option>
                  <option value="Bomba d'Água Elétrica">Bomba d'Água Elétrica</option>
                  <option value="Carvão para Churrasco">Carvão para Churrasco</option>
                  <option value="Churrasqueira">Churrasqueira</option>
                  <option value="Outro produto">Outro produto</option>
                </select>
              </div>
              <div>
                <label className="text-brand-blue font-semibold text-sm mb-1.5 block">Mensagem (opcional)</label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Informações adicionais, endereço de entrega, dúvidas..."
                  className="w-full border border-brand-gray rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#1fb855] text-white font-bold py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] text-base shadow-md hover:shadow-[#25D366]/30"
              >
                <Send size={18} />
                Enviar pelo WhatsApp
              </button>
              <p className="text-gray-400 text-xs text-center">
                Ao enviar, você será redirecionado para o WhatsApp com os dados preenchidos.
              </p>
            </form>
          </div>

          <div className={`flex flex-col gap-6 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-2xl border border-brand-gray/40 p-5 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-brand-blue font-semibold text-sm hover:text-brand-red transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-brand-blue font-semibold text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl overflow-hidden shadow-md border border-brand-gray/40 flex-1 min-h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.58889065468!2d-54.654285924856005!3d-16.4456926842897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9379c81535ee832d%3A0x62d9677e42f300a8!2sSUG%C3%81S%20-%20Revenda%20de%20G%C3%A1s%20de%20Cozinha!5e0!3m2!1spt-BR!2sbr!4v1775717722554!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '256px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização SUGÁS"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

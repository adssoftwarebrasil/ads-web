import { useState } from 'react';
import { MapPin, Clock, Mail, Send } from 'lucide-react';

const WHATSAPP_NUMBER = '556696694477';

const serviceOptions = [
  'Adesivos',
  'Lonas e Banners',
  'Fachadas Comerciais',
  'Letras Caixa e Luminosos',
  'Totem e Placas em Acrílico',
  'Envelopamento de Frotas',
  'Corte a Laser',
  'Outro',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      'Olá! Gostaria de solicitar um orçamento.',
      '',
      `*Nome:* ${form.name}`,
      `*Telefone:* ${form.phone}`,
      form.email ? `*E-mail:* ${form.email}` : '',
      `*Serviço de interesse:* ${form.service}`,
      form.message ? `*Mensagem:* ${form.message}` : '',
    ].filter(Boolean);
    const text = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[#102694] font-semibold text-sm uppercase tracking-widest mb-3">
            Contato
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Pronto para <span className="text-[#102694]">impactar</span> com sua marca?
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Entre em contato e solicite seu orçamento sem compromisso. Nossa equipe está pronta para
            atendê-lo.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex gap-4 items-start">
              <div className="w-11 h-11 bg-[#102694]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin width={20} height={20} strokeWidth={2} className="lucide lucide-map-pin text-[#102694]" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Endereço</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  R. das Pitangueiras, 1303<br />
                  Setor Comercial, Sinop — MT<br />
                  CEP: 78550-288
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex gap-4 items-start">
              <div className="w-11 h-11 bg-[#102694]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock width={20} height={20} strokeWidth={2} className="lucide lucide-clock text-[#102694]" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Horário de Funcionamento</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Segunda a Sexta<br />
                  07:30 — 11:30 | 13:00 — 18:00
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex gap-4 items-start">
              <div className="w-11 h-11 bg-[#102694]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail width={20} height={20} strokeWidth={2} className="lucide lucide-mail text-[#102694]" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">E-mail</h4>
                <a
                  href="mailto:laercio@alpersonaliza.com.br"
                  className="text-[#102694] text-sm hover:underline"
                >
                  laercio@alpersonaliza.com.br
                </a>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm h-56">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.7348316529005!2d-55.512030224942!3d-11.85382558836813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a77ff534a3c935%3A0xc893d421167b1e3a!2sAL%20Personaliza%20-%20Comunica%C3%A7%C3%A3o%20Visual!5e0!3m2!1spt-BR!2sbr!4v1772547325683!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização AL Personaliza"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Solicite seu orçamento</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Nome completo *</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Seu nome"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#102694]/30 focus:border-[#102694] transition-all"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="(66) 9 9999-9999"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#102694]/30 focus:border-[#102694] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="seu@email.com"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#102694]/30 focus:border-[#102694] transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Serviço de interesse *
                </label>
                <select
                  name="service"
                  required
                  value={form.service}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#102694]/30 focus:border-[#102694] transition-all bg-white"
                >
                  <option value="">Selecione um serviço</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Mensagem</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Descreva seu projeto ou necessidade..."
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#102694]/30 focus:border-[#102694] transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#102694] hover:bg-[#3E4194] text-white font-bold text-base py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Send width={18} height={18} strokeWidth={2} className="lucide lucide-send " />
                Enviar pelo WhatsApp
              </button>
              <p className="text-center text-xs text-gray-400">
                Ao enviar, você será redirecionado ao WhatsApp com os dados preenchidos.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

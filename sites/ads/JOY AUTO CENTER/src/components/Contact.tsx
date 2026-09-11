import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Clock, Instagram, Send } from 'lucide-react';

const WHATSAPP_NUMBER = '5562981500426';

const serviceOptions = [
  'Troca de óleo e lubrificantes',
  'Alinhamento e balanceamento',
  'Injeção eletrônica',
  'Direção hidráulica',
  'Sistemas eletrônicos',
  'Suspensão e freios',
  'Pneus, rodas e peças',
  'Manutenção preventiva e corretiva',
  'Outro',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    vehicle: '',
    service: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let text = `Olá! Gostaria de solicitar um orçamento.\n\n`;
    text += `*Nome:* ${form.name}\n`;
    text += `*Telefone:* ${form.phone}\n`;
    if (form.vehicle) text += `*Veículo:* ${form.vehicle}\n`;
    if (form.service) text += `*Serviço desejado:* ${form.service}\n`;
    if (form.message) text += `*Mensagem:* ${form.message}\n`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="bg-[rgb(254,254,254)] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[rgb(246,122,55)] text-xs font-bold uppercase tracking-widest mb-3">
            Fale conosco
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-black mb-4">Agende seu Serviço</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Entre em contato e nossa equipe retornará rapidamente pelo WhatsApp.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-black rounded-2xl p-7">
              <h3 className="text-white font-bold text-lg mb-6">Informações de Contato</h3>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[rgb(246,122,55)]/15 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-[rgb(246,122,55)]" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-0.5">Endereço</p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Av. Dr. Neto, 1661 - Setor dos Funcionários
                      <br />
                      Iporá - GO, 76380-000
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[rgb(246,122,55)]/15 flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-[rgb(246,122,55)]" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-0.5">WhatsApp</p>
                    <a
                      href="http://wa.me/5562981500426"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[rgb(246,122,55)] text-sm transition-colors"
                    >
                      (62) 98150-0426
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[rgb(246,122,55)]/15 flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-[rgb(246,122,55)]" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-0.5">Horário de Atendimento</p>
                    <p className="text-gray-400 text-sm">Segunda a Sexta</p>
                    <p className="text-gray-400 text-sm">até as 18:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[rgb(246,122,55)]/15 flex items-center justify-center flex-shrink-0">
                    <Instagram size={18} className="text-[rgb(246,122,55)]" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-0.5">Instagram</p>
                    <a
                      href="https://www.instagram.com/joyautocenter/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[rgb(246,122,55)] text-sm transition-colors"
                    >
                      @joyautocenter
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden h-52 border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.822467946117!2d-51.11591492485628!3d-16.43384038429969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9366bd9024e9f553%3A0x1bbb2a01c7aaec70!2sJOY%20AUTO%20CENTER!5e0!3m2!1spt-BR!2sbr!4v1773325636751!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Joy Auto Center"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="bg-black rounded-2xl p-7">
              <h3 className="text-white font-bold text-lg mb-6">Solicitar Orçamento</h3>
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 text-xs font-medium mb-1.5">
                      Nome completo *
                    </label>
                    <input
                      name="name"
                      required
                      placeholder="Seu nome"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[rgb(246,122,55)]/60 focus:bg-white/8 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs font-medium mb-1.5">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      name="phone"
                      required
                      placeholder="(62) 99999-9999"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[rgb(246,122,55)]/60 focus:bg-white/8 transition-all duration-200"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-400 text-xs font-medium mb-1.5">
                    Veículo (marca, modelo e ano)
                  </label>
                  <input
                    name="vehicle"
                    placeholder="Ex: Toyota Corolla 2020"
                    value={form.vehicle}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[rgb(246,122,55)]/60 focus:bg-white/8 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-xs font-medium mb-1.5">
                    Serviço desejado
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[rgb(246,122,55)]/60 focus:bg-white/8 transition-all duration-200"
                  >
                    <option value="" className="bg-gray-900">
                      Selecione um serviço
                    </option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-gray-900">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-400 text-xs font-medium mb-1.5">
                    Mensagem adicional
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Descreva o problema ou serviço desejado..."
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[rgb(246,122,55)]/60 focus:bg-white/8 transition-all duration-200 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-2 bg-[rgb(246,122,55)] hover:bg-orange-500 text-white font-bold py-4 rounded-xl text-sm transition-all duration-200 hover:scale-[1.02] mt-2"
                >
                  <Send size={16} className="lucide lucide-send " />
                  Enviar pelo WhatsApp
                </button>
                <p className="text-gray-500 text-xs text-center">
                  Você será redirecionado ao WhatsApp com sua mensagem pré-preenchida.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

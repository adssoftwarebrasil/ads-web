import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const WA_NUMBER = '556699586377';

export default function Contact() {
  const { ref, visible } = useScrollReveal();
  const [form, setForm] = useState({ name: '', phone: '', part: '', machine: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Olá! Meu nome é *${form.name}*.\n\n📞 Telefone: ${form.phone}\n🔧 Peça desejada: ${form.part}\n🚜 Máquina/modelo: ${form.machine}\n\nAguardo retorno!`
    );
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank');
  };

  return (
    <section id="contato" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-brand-red text-sm font-bold uppercase tracking-widest">Fale Conosco</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-brand-dark">
            Entre em Contato
          </h2>
          <p className="mt-4 text-gray-500 max-w-lg mx-auto">
            Preencha o formulário abaixo e envie direto pelo WhatsApp — respondemos rapidamente.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-5"
          >
            <div>
              <label className="block text-sm font-semibold text-brand-dark mb-1.5">Seu nome *</label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Ex: João da Silva"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-brand-dark mb-1.5">WhatsApp / Telefone *</label>
              <input
                type="tel"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="(66) 9 0000-0000"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-brand-dark mb-1.5">Peça que precisa *</label>
              <input
                type="text"
                name="part"
                required
                value={form.part}
                onChange={handleChange}
                placeholder="Ex: Bomba injetora, pistão..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-brand-dark mb-1.5">Máquina / Modelo</label>
              <input
                type="text"
                name="machine"
                value={form.machine}
                onChange={handleChange}
                placeholder="Ex: Komatsu PC200, Cummins QSB..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red transition"
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 bg-brand-red text-white font-bold py-4 rounded-xl hover:bg-red-700 transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98] text-base"
            >
              <Send size={17} />
              Enviar pelo WhatsApp
            </button>
            <p className="text-center text-xs text-gray-400">
              Você será redirecionado para o WhatsApp com a mensagem pronta.
            </p>
          </form>

          {/* Info + Map */}
          <div className="space-y-6">
            {/* Info cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: MapPin, label: 'Endereço', value: 'Av. dos Pinheiros, 185\nSt. Industrial Norte, Sinop - MT\n78550-552' },
                { icon: Phone, label: 'WhatsApp', value: '(66) 9 9958-6377', href: 'http://wa.me/556699586377' },
                { icon: Mail, label: 'E-mail', value: 'pasatratorpc@gmail.com', href: 'mailto:pasatratorpc@gmail.com' },
                { icon: Clock, label: 'Horário', value: 'Seg–Sex\n07:00–11:30 | 13:00–17:30' },
              ].map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="bg-white border border-gray-100 rounded-xl p-5 flex gap-4 hover:border-brand-red/30 hover:shadow-sm transition-all"
                >
                  <div className="bg-brand-red/10 text-brand-red rounded-lg p-2.5 flex-shrink-0 h-fit">
                    <Icon size={17} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">{label}</div>
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm text-brand-dark font-semibold hover:text-brand-red transition-colors whitespace-pre-line">
                        {value}
                      </a>
                    ) : (
                      <span className="text-sm text-brand-dark font-semibold whitespace-pre-line">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3905.0201295294346!2d-55.493069224942076!3d-11.833863988386616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a7812e2822d939%3A0x6c0315c7e51ecfbc!2sPasa%20Tratores%20Pe%C3%A7as!5e0!3m2!1spt-BR!2sbr!4v1776842866881!5m2!1spt-BR!2sbr"
                width="100%"
                height="280"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Pasa Tratores"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

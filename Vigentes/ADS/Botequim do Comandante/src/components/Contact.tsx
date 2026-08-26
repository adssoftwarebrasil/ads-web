import { useState } from 'react';
import { Clock, MapPin, Phone, Mail } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const hours = [
  { day: 'Segunda a Sexta', time: '11h00 – 14h00 · 17h00 – 23h30', active: true },
  { day: 'Sábado', time: '11h00 – 23h30', active: true },
  { day: 'Domingo', time: 'Fechado', active: false },
];

export default function Contact() {
  const { ref, inView } = useInView();
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é *${formData.name}*, meu telefone é *${formData.phone}*. ${formData.message}`;
    const url = `https://wa.me/556285601337?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contato" className="py-24 lg:py-32 bg-brand-black overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="section-label mb-4">Venha nos visitar</p>
          <h2 className="section-title text-4xl sm:text-5xl mb-4">
            Localização <span className="text-brand-gold">&amp; Contato</span>
          </h2>
          <p className="text-brand-gray max-w-xl mx-auto">
            Estamos esperando por você. Reserve sua mesa pelo WhatsApp ou apareça quando quiser!
          </p>
        </div>

        <div
          className={`grid lg:grid-cols-2 gap-12 transition-all duration-700 delay-200 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex flex-col gap-6">
            <div className="bg-white/5 border border-white/10 p-6 hover:border-brand-gold/30 transition-colors duration-300">
              <h3 className="font-serif text-brand-white text-xl font-semibold mb-4 flex items-center gap-3">
                <Clock size={20} className="text-brand-gold" />
                Horários de Funcionamento
              </h3>
              <div className="space-y-3">
                {hours.map((h, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                    <span className={`text-sm font-medium ${h.active ? 'text-brand-white' : 'text-brand-gray'}`}>
                      {h.day}
                    </span>
                    <span className={`text-sm ${h.active ? 'text-brand-gold' : 'text-brand-gray'}`}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 hover:border-brand-gold/30 transition-colors duration-300">
              <h3 className="font-serif text-brand-white text-xl font-semibold mb-4 flex items-center gap-3">
                <MapPin size={20} className="text-brand-gold" />
                Nosso Endereço
              </h3>
              <p className="text-brand-gray-light mb-1">Av. São João, 249 - Qld 08 LT 13</p>
              <p className="text-brand-gray-light mb-4">Alto da Glória, Goiânia - GO, 74815-700</p>
              <a
                href="https://maps.google.com/?q=Botequim+do+Comandante+Goiania"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-blue-light text-sm hover:text-brand-gold transition-colors duration-200 underline"
              >
                Abrir no Google Maps
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <a
                href="tel:+556285601337"
                className="bg-white/5 border border-white/10 p-4 hover:border-brand-gold/30 transition-colors duration-300 group"
              >
                <Phone size={20} className="text-brand-gold mb-2" />
                <div className="text-brand-white text-sm font-medium">(62) 98560-1337</div>
                <div className="text-brand-gray text-xs">Ligar agora</div>
              </a>
              <a
                href="mailto:botequimdocomandante@gmail.com"
                className="bg-white/5 border border-white/10 p-4 hover:border-brand-gold/30 transition-colors duration-300 group"
              >
                <Mail size={20} className="text-brand-gold mb-2" />
                <div className="text-brand-white text-sm font-medium truncate">botequimdocomandante</div>
                <div className="text-brand-gray text-xs">@gmail.com</div>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-white/5 border border-white/10 p-6 hover:border-brand-gold/30 transition-colors duration-300">
              <h3 className="font-serif text-brand-white text-xl font-semibold mb-2">
                Envie uma mensagem
              </h3>
              <p className="text-brand-gray text-sm mb-6">
                Preencha os dados abaixo e clique em enviar — você será redirecionado para o WhatsApp.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-brand-gray-light text-xs font-medium uppercase tracking-wide mb-1.5">
                    Nome
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    className="w-full bg-white/5 border border-white/15 text-brand-white placeholder-brand-gray px-4 py-3 text-sm focus:outline-none focus:border-brand-gold/60 transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="block text-brand-gray-light text-xs font-medium uppercase tracking-wide mb-1.5">
                    Telefone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(62) 9 0000-0000"
                    className="w-full bg-white/5 border border-white/15 text-brand-white placeholder-brand-gray px-4 py-3 text-sm focus:outline-none focus:border-brand-gold/60 transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="block text-brand-gray-light text-xs font-medium uppercase tracking-wide mb-1.5">
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Ex: Gostaria de reservar mesa para 4 pessoas no sábado..."
                    rows={4}
                    className="w-full bg-white/5 border border-white/15 text-brand-white placeholder-brand-gray px-4 py-3 text-sm focus:outline-none focus:border-brand-gold/60 transition-colors duration-200 resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Enviar pelo WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>

        <div
          className={`mt-10 transition-all duration-700 delay-400 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="border border-white/10 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2382.085489297249!2d-49.240139459247565!3d-16.71454519480751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef1dd3d365fd9%3A0x8aa1349aab8468f2!2sBotequim%20do%20Comandante!5e0!3m2!1spt-BR!2sbr!4v1774981524169!5m2!1spt-BR!2sbr"
              width="100%"
              height="380"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Botequim do Comandante"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

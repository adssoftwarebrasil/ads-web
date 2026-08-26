import { useState, FormEvent } from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook, Send } from 'lucide-react';

const servicos = [
  'Prótese Capilar',
  'Corte de Cabelo',
  'Barba',
  'Barba Pigmentada / Micropigmentação',
  'Progressiva ou Selagem',
  'Curso de Prótese Capilar',
  'Outro',
];

export default function Contato() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${name}.\nTelefone: ${phone}\nServiço de interesse: ${service}${
      message ? `\nMensagem: ${message}` : ''
    }`;
    window.open(`http://wa.me/553488238723?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contato" className="py-24 bg-[rgb(247,246,247)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[rgb(245,133,79)] font-semibold uppercase tracking-widest text-sm mb-3">
            Entre em contato
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-[rgb(32,29,30)] leading-tight mb-4">
            Agende sua Visita
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Preencha o formulário abaixo e envie direto pelo WhatsApp. Responderemos o mais rápido
            possível!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-[rgb(32,29,30)] rounded-2xl p-7 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-[rgb(254,197,52)] p-3 rounded-xl flex-shrink-0">
                  <MapPin
                    className="lucide lucide-map-pin text-[rgb(32,29,30)]"
                    width={20}
                    height={20}
                  />
                </div>
                <div>
                  <p className="text-[rgb(254,197,52)] font-semibold text-sm mb-1">Endereço</p>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Av. Benjamin Magalhães, 1014
                    <br />
                    Tibery, Uberlândia - MG
                    <br />
                    CEP: 38405-040
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[rgb(254,197,52)] p-3 rounded-xl flex-shrink-0">
                  <Phone
                    className="lucide lucide-phone text-[rgb(32,29,30)]"
                    width={20}
                    height={20}
                  />
                </div>
                <div>
                  <p className="text-[rgb(254,197,52)] font-semibold text-sm mb-1">Telefones</p>
                  <a
                    href="tel:+553432226749"
                    className="text-white/70 text-sm block hover:text-[rgb(254,197,52)] transition-colors"
                  >
                    (34) 3222-6749
                  </a>
                  <a
                    href="http://wa.me/553488238723"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 text-sm block hover:text-[rgb(254,197,52)] transition-colors"
                  >
                    (34) 9 8823-8723 (WhatsApp)
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[rgb(254,197,52)] p-3 rounded-xl flex-shrink-0">
                  <Clock
                    className="lucide lucide-clock text-[rgb(32,29,30)]"
                    width={20}
                    height={20}
                  />
                </div>
                <div>
                  <p className="text-[rgb(254,197,52)] font-semibold text-sm mb-1">Horários</p>
                  <p className="text-white/70 text-sm">Segunda a Sábado</p>
                  <p className="text-white/70 text-sm">09h às 20h</p>
                </div>
              </div>
              <div className="pt-2 border-t border-white/10 flex items-center gap-4">
                <p className="text-white/40 text-xs">Redes sociais:</p>
                <a
                  href="https://www.instagram.com/magodastesourasbarbeariaepub/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-[rgb(254,197,52)] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram
                    className="lucide lucide-instagram"
                    width={20}
                    height={20}
                  />
                </a>
                <a
                  href="https://www.facebook.com/magodastesourabarbeariaepub/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-[rgb(254,197,52)] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook
                    className="lucide lucide-facebook"
                    width={20}
                    height={20}
                  />
                </a>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-56 lg:h-auto lg:flex-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.5762056159087!2d-48.25041102479901!3d-18.90587298226393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a44591a6e92eeb%3A0xf0fc9c0a76927f1c!2sMago%20Das%20Tesouras%20Barbearia%20e%20Pr%C3%B3tese%20Capilar!5e0!3m2!1spt-BR!2sbr!4v1772549448315!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Mago das Tesouras"
                style={{ border: '0px', minHeight: '220px' }}
              ></iframe>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="bg-[rgb(32,29,30)] rounded-2xl p-7 sm:p-10">
              <h3 className="font-display text-2xl font-bold text-[rgb(247,246,247)] mb-6">
                Envie sua mensagem
              </h3>
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div>
                  <label className="text-white/50 text-xs uppercase tracking-wider mb-1.5 block">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/5 border border-white/15 text-[rgb(247,246,247)] rounded-xl px-4 py-3.5 text-sm placeholder-white/30 focus:outline-none focus:border-[rgb(254,197,52)] focus:bg-white/8 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="text-white/50 text-xs uppercase tracking-wider mb-1.5 block">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="(34) 9 0000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white/5 border border-white/15 text-[rgb(247,246,247)] rounded-xl px-4 py-3.5 text-sm placeholder-white/30 focus:outline-none focus:border-[rgb(254,197,52)] focus:bg-white/8 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="text-white/50 text-xs uppercase tracking-wider mb-1.5 block">
                    Serviço de interesse *
                  </label>
                  <select
                    name="service"
                    required
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-white/5 border border-white/15 text-[rgb(247,246,247)] rounded-xl px-4 py-3.5 text-sm placeholder-white/30 focus:outline-none focus:border-[rgb(254,197,52)] focus:bg-white/8 transition-all duration-200 cursor-pointer"
                  >
                    <option value="" disabled className="bg-[rgb(32,29,30)]">
                      Selecione um serviço
                    </option>
                    {servicos.map((s) => (
                      <option key={s} value={s} className="bg-[rgb(32,29,30)]">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-white/50 text-xs uppercase tracking-wider mb-1.5 block">
                    Mensagem (opcional)
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Alguma informação adicional..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-white/5 border border-white/15 text-[rgb(247,246,247)] rounded-xl px-4 py-3.5 text-sm placeholder-white/30 focus:outline-none focus:border-[rgb(254,197,52)] focus:bg-white/8 transition-all duration-200 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="mt-2 w-full flex items-center justify-center gap-3 bg-[rgb(254,197,52)] text-[rgb(32,29,30)] font-bold py-4 rounded-xl hover:bg-[rgb(245,133,79)] hover:text-white transition-all duration-300 shadow-lg hover:shadow-[rgb(254,197,52)]/20 hover:scale-[1.02] active:scale-100"
                >
                  <Send className="lucide lucide-send" width={18} height={18} />
                  Enviar pelo WhatsApp
                </button>
                <p className="text-white/30 text-xs text-center mt-1">
                  Ao enviar, você será redirecionado ao WhatsApp com a mensagem preenchida.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

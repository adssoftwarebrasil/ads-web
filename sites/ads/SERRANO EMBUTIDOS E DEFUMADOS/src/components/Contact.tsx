import { useState, type FormEvent } from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { PHONE_HREF, EMAIL } from '../lib/constants';

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${name}.%0ATelefone: ${phone}.%0A${encodeURIComponent(
      message
    )}`;
    window.open(`https://wa.me/556696054019?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#FF6601] text-xs font-bold uppercase tracking-widest">
            Fale Conosco
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-3 mb-4">
            Entre em Contato
          </h2>
          <p className="text-white/55 text-base max-w-xl mx-auto">
            Tire suas dúvidas, faça seu pedido ou saiba como se tornar um revendedor Serrano.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-5 flex flex-col gap-3">
                <div className="w-10 h-10 bg-[#FF6601]/10 rounded-lg flex items-center justify-center">
                  <Phone size={18} className="lucide lucide-phone text-[#FF6601]" />
                </div>
                <div>
                  <div className="text-white/40 text-xs uppercase tracking-wide mb-1">
                    Telefone / WhatsApp
                  </div>
                  <a
                    href={PHONE_HREF}
                    className="text-white text-sm font-medium hover:text-[#FF6601] transition-colors"
                  >
                    (66) 9605-4019
                  </a>
                </div>
              </div>
              <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-5 flex flex-col gap-3">
                <div className="w-10 h-10 bg-[#FF6601]/10 rounded-lg flex items-center justify-center">
                  <Mail size={18} className="lucide lucide-mail text-[#FF6601]" />
                </div>
                <div>
                  <div className="text-white/40 text-xs uppercase tracking-wide mb-1">E-mail</div>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-white text-sm font-medium hover:text-[#FF6601] transition-colors"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>
              <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-5 flex flex-col gap-3">
                <div className="w-10 h-10 bg-[#FF6601]/10 rounded-lg flex items-center justify-center">
                  <Clock size={18} className="lucide lucide-clock text-[#FF6601]" />
                </div>
                <div>
                  <div className="text-white/40 text-xs uppercase tracking-wide mb-1">
                    Horário de Atendimento
                  </div>
                  <span className="text-white text-sm font-medium">
                    Seg – Sex: 07h às 11h | 13h às 17h
                  </span>
                </div>
              </div>
              <div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-5 flex flex-col gap-3">
                <div className="w-10 h-10 bg-[#FF6601]/10 rounded-lg flex items-center justify-center">
                  <MapPin size={18} className="lucide lucide-map-pin text-[#FF6601]" />
                </div>
                <div>
                  <div className="text-white/40 text-xs uppercase tracking-wide mb-1">Endereço</div>
                  <a
                    href="https://maps.google.com/?q=Serrano+Embutidos+e+Defumados+Sorriso+MT"
                    className="text-white text-sm font-medium hover:text-[#FF6601] transition-colors"
                  >
                    R. Visc. de Mauá, 1451 – Industrial Leonel Bedin, Sorriso – MT
                  </a>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl h-60 sm:h-72">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3893.7885678455254!2d-55.743175224929914!3d-12.596181787685785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a0b1edb0c0227f%3A0xd1e011751bee5adf!2sSerrano%20Embutidos%20e%20Defumados!5e0!3m2!1spt-BR!2sbr!4v1771612108844!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa Serrano Embutidos"
                style={{ border: '0px', filter: 'invert(90%) hue-rotate(180deg)' }}
              ></iframe>
            </div>
          </div>
          <div className="bg-[#1A1A1A] border border-white/5 rounded-2xl p-7 sm:p-10">
            <h3 className="text-white text-xl font-bold mb-1">Envie sua Mensagem</h3>
            <p className="text-white/40 text-sm mb-7">
              Preencha os dados abaixo e você será direcionado ao nosso WhatsApp.
            </p>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="text-white/60 text-xs uppercase tracking-wide mb-2 block"
                >
                  Seu Nome *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Como podemos chamar você?"
                  className="w-full bg-black/50 border border-white/10 focus:border-[#FF6601] rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 outline-none transition-colors"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="text-white/60 text-xs uppercase tracking-wide mb-2 block"
                >
                  Telefone / WhatsApp *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="(66) 9 9999-9999"
                  className="w-full bg-black/50 border border-white/10 focus:border-[#FF6601] rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 outline-none transition-colors"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="text-white/60 text-xs uppercase tracking-wide mb-2 block"
                >
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Como podemos ajudar? Descreva seu interesse ou pedido..."
                  className="w-full bg-black/50 border border-white/10 focus:border-[#FF6601] rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 outline-none transition-colors resize-none"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#FF6601] hover:bg-[#AF4502] text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/30 hover:scale-[1.02] uppercase tracking-wide text-sm mt-1"
              >
                Enviar pelo WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

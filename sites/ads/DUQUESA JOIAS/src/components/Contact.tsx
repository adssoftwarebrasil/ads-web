import { useState } from 'react';
import { MapPin, Clock, Send } from 'lucide-react';
import { useReveal } from '../useReveal';

const PHONE = '556696205384';

const interestLabels: Record<string, string> = {
  cliente: 'Quero Comprar',
  consultora: 'Quero Ser Consultora',
  atacado: 'Atacado / Consignação',
  outro: 'Outro',
};

export default function Contact() {
  const form = useReveal();
  const map = useReveal();

  const [data, setData] = useState({
    name: '',
    phone: '',
    city: '',
    interest: 'cliente',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      'Olá! Vim pelo site da Duquesa Joias.',
      '',
      `Nome: ${data.name}`,
      `WhatsApp: ${data.phone}`,
      `Cidade: ${data.city}`,
      `Interesse: ${interestLabels[data.interest] ?? data.interest}`,
    ];
    if (data.message.trim()) {
      lines.push(`Mensagem: ${data.message}`);
    }
    const text = encodeURIComponent(lines.join('\n'));
    window.open(`http://wa.me/${PHONE}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="section-padding bg-black overflow-hidden">
      <div className="container-max">
        <div className="text-center mb-14 transition-all duration-700 opacity-100 translate-y-0">
          <span className="inline-block text-gold font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Fale Conosco
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight">
            Pronta para <span className="italic text-gold-gradient">brilhar?</span>
          </h2>
          <p className="text-white/55 text-base mt-4 max-w-lg mx-auto">
            Preencha o formulário e nossa equipe entrará em contato via WhatsApp com todo o carinho.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          <div
            ref={form.ref}
            className={`transition-all duration-700 delay-200 ${
              form.inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/70 text-xs font-semibold mb-1.5 tracking-wide uppercase">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Seu nome"
                    value={data.name}
                    onChange={handleChange}
                    className="w-full bg-white border border-lgray/60 text-black text-sm rounded-xl px-4 py-3 outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all placeholder-black/35"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-xs font-semibold mb-1.5 tracking-wide uppercase">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="(00) 00000-0000"
                    value={data.phone}
                    onChange={handleChange}
                    className="w-full bg-white border border-lgray/60 text-black text-sm rounded-xl px-4 py-3 outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all placeholder-black/35"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/70 text-xs font-semibold mb-1.5 tracking-wide uppercase">
                    Cidade *
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    placeholder="Sua cidade"
                    value={data.city}
                    onChange={handleChange}
                    className="w-full bg-white border border-lgray/60 text-black text-sm rounded-xl px-4 py-3 outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all placeholder-black/35"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-xs font-semibold mb-1.5 tracking-wide uppercase">
                    Interesse *
                  </label>
                  <select
                    name="interest"
                    value={data.interest}
                    onChange={handleChange}
                    className="w-full bg-white border border-lgray/60 text-black text-sm rounded-xl px-4 py-3 outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all placeholder-black/35"
                  >
                    <option value="cliente">Quero Comprar</option>
                    <option value="consultora">Quero Ser Consultora</option>
                    <option value="atacado">Atacado / Consignação</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-white/70 text-xs font-semibold mb-1.5 tracking-wide uppercase">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Descreva o que você procura ou deixe sua dúvida..."
                  value={data.message}
                  onChange={handleChange}
                  className="w-full bg-white border border-lgray/60 text-black text-sm rounded-xl px-4 py-3 outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all placeholder-black/35 resize-none"
                ></textarea>
              </div>
              <button type="submit" className="btn-gold w-full text-base justify-center">
                <Send width={18} height={18} className="lucide lucide-send " />
                Enviar pelo WhatsApp
              </button>
              <p className="text-white/35 text-xs text-center">
                Ao enviar, você será redirecionada para o WhatsApp com seus dados preenchidos.
              </p>
            </form>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-gold/15 flex items-center justify-center flex-shrink-0">
                    <MapPin width={16} height={16} className="lucide lucide-map-pin text-gold" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm mb-1">Endereço</div>
                    <div className="text-white/50 text-xs leading-relaxed">
                      Ed. Tozi – Av. das Figueiras, 1646
                      <br />
                      Sala 07, 1º Piso
                      <br />
                      Sinop – MT, 78550-190
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-gold/15 flex items-center justify-center flex-shrink-0">
                    <Clock width={16} height={16} className="lucide lucide-clock text-gold" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm mb-1">Horários</div>
                    <div className="text-white/50 text-xs leading-relaxed">
                      Seg–Sex
                      <br />
                      07:30–11:30
                      <br />
                      13:30–18:00
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            ref={map.ref}
            className={`transition-all duration-700 delay-400 ${
              map.inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="rounded-3xl overflow-hidden border border-white/10 h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.7626224819865!2d-55.511761724941955!3d-11.8518825883699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a77ffa6172c8d1%3A0xbb28584b1b4f71f9!2sDuquesa%20Joias!5e0!3m2!1spt-BR!2sbr!4v1774269424163!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Duquesa Joias"
                style={{ border: '0px', minHeight: '420px' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

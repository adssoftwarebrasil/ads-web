import { useState, FormEvent } from 'react';
import { MapPin, Clock, Phone, Instagram, Facebook, Send } from 'lucide-react';

export default function Contact() {
  const [nome, setNome] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let texto = `Olá! Meu nome é ${nome}.`;
    if (whatsapp) texto += `\nWhatsApp: ${whatsapp}`;
    if (email) texto += `\nE-mail: ${email}`;
    texto += `\n\n${mensagem}`;
    const url = `http://wa.me/553588973804?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 animate-on-scroll">
          <span className="text-[#A6A6A6] text-sm font-medium tracking-widest uppercase">
            Contato
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#404040] mt-3 mb-4">
            Agende sua <span className="italic text-[#737373]">avaliação</span>
          </h2>
          <p className="text-[#A6A6A6] max-w-md mx-auto text-sm leading-relaxed">
            Dê o primeiro passo para recuperar seus cabelos e sua autoestima. Entre em contato e
            agende uma avaliação personalizada.
          </p>
        </div>
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6 animate-on-scroll">
            <div className="bg-[#F8E5E4]/40 rounded-2xl p-6 space-y-5">
              <div className="flex gap-4">
                <div className="bg-white rounded-xl w-10 h-10 flex items-center justify-center shadow-sm flex-shrink-0">
                  <MapPin width={16} height={16} className="lucide lucide-map-pin text-[#737373]" />
                </div>
                <div>
                  <p className="font-semibold text-[#404040] text-sm mb-1">Endereço</p>
                  <p className="text-[#A6A6A6] text-xs leading-relaxed">
                    Center Tower - Av. Luiz Carlos Vilela, 850
                    <br />
                    Sala 7 – Santa Rita
                    <br />
                    Pouso Alegre – MG, 37550-000
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-white rounded-xl w-10 h-10 flex items-center justify-center shadow-sm flex-shrink-0">
                  <Clock width={16} height={16} className="lucide lucide-clock text-[#737373]" />
                </div>
                <div>
                  <p className="font-semibold text-[#404040] text-sm mb-2">Horários</p>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs gap-4">
                      <span className="text-[#737373]">Segunda a Sexta</span>
                      <span className="font-medium text-[#404040]">08:00 – 18:00</span>
                    </div>
                    <div className="flex justify-between text-xs gap-4">
                      <span className="text-[#737373]">Sábado</span>
                      <span className="font-medium text-[#404040]">09:00 – 17:00</span>
                    </div>
                    <div className="flex justify-between text-xs gap-4">
                      <span className="text-[#737373]">Domingo</span>
                      <span className="font-medium text-[#A6A6A6]">Fechado</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-white rounded-xl w-10 h-10 flex items-center justify-center shadow-sm flex-shrink-0">
                  <Phone width={16} height={16} className="lucide lucide-phone text-[#737373]" />
                </div>
                <div>
                  <p className="font-semibold text-[#404040] text-sm mb-1">Telefone / WhatsApp</p>
                  <a href="tel:+553588973804" className="text-[#737373] text-xs hover:underline">
                    (35) 9 8897-3804
                  </a>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/tatianeterapeutacapilar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#F8E5E4] hover:bg-[#F0CECE] text-[#737373] font-medium text-sm py-3 rounded-xl transition-colors"
              >
                <Instagram width={16} height={16} className="lucide lucide-instagram " />
                Instagram
              </a>
              <a
                href="https://www.facebook.com/p/Tatiane-terapeuta-capilar-100076147218205/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#F8E5E4] hover:bg-[#F0CECE] text-[#737373] font-medium text-sm py-3 rounded-xl transition-colors"
              >
                <Facebook width={16} height={16} className="lucide lucide-facebook " />
                Facebook
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.2434541410034!2d-45.93895642470835!3d-22.268765879709285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cbc7fc99a61c89%3A0x7f5b4ba90e99b3e7!2sTatiane%20terapeuta%20Capilar!5e0!3m2!1spt-BR!2sbr!4v1775765396200!5m2!1spt-BR!2sbr"
                width="100%"
                height="220"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Dra. Tatiane Fernandes"
                style={{ border: '0px', display: 'block' }}
              ></iframe>
            </div>
          </div>
          <div className="lg:col-span-3 animate-on-scroll">
            <form
              onSubmit={handleSubmit}
              className="bg-[#F8E5E4]/20 border border-[#F8E5E4] rounded-2xl p-7 sm:p-10"
            >
              <h3 className="font-serif text-xl font-bold text-[#404040] mb-6">Envie uma mensagem</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-medium text-[#737373] mb-1.5">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="w-full border border-[#F0CECE] bg-white rounded-xl px-4 py-3 text-sm text-[#404040] placeholder-[#C4C4C4] focus:outline-none focus:border-[#737373] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#737373] mb-1.5">WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="(35) 99999-9999"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full border border-[#F0CECE] bg-white rounded-xl px-4 py-3 text-sm text-[#404040] placeholder-[#C4C4C4] focus:outline-none focus:border-[#737373] transition-colors"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-xs font-medium text-[#737373] mb-1.5">E-mail</label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-[#F0CECE] bg-white rounded-xl px-4 py-3 text-sm text-[#404040] placeholder-[#C4C4C4] focus:outline-none focus:border-[#737373] transition-colors"
                />
              </div>
              <div className="mb-6">
                <label className="block text-xs font-medium text-[#737373] mb-1.5">
                  Como posso te ajudar? *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Conte sobre o seu problema capilar ou descreva o que você está sentindo..."
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  className="w-full border border-[#F0CECE] bg-white rounded-xl px-4 py-3 text-sm text-[#404040] placeholder-[#C4C4C4] focus:outline-none focus:border-[#737373] transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#737373] hover:bg-[#5a5a5a] disabled:opacity-70 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg text-sm"
              >
                <Send width={16} height={16} className="lucide lucide-send " />
                Enviar pelo WhatsApp
              </button>
              <p className="text-center text-[#A6A6A6] text-xs mt-4">
                Ao enviar, você será redirecionada(o) para o WhatsApp da Dra. Tatiane.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

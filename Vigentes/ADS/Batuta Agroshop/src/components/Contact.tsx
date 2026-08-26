import { useState, type FormEvent } from 'react';
import { Phone, MapPin, Clock, Send } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { useReveal } from '../hooks/useReveal';
import { WHATSAPP_NUMBER, whatsappLink } from '../constants';

export default function Contact() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');
  const heading = useReveal<HTMLDivElement>();
  const formCol = useReveal<HTMLDivElement>();
  const mapCol = useReveal<HTMLDivElement>();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const texto = `Olá! Meu nome é ${nome}.\nTelefone: ${telefone}\n\n${mensagem}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 sm:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={heading.ref}
          className={`text-center mb-14 transition-all duration-700 ${
            heading.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-brand font-bold text-sm uppercase tracking-widest mb-3 block">Contato</span>
          <h2 className="text-3xl sm:text-4xl font-black text-navy mb-4">
            Fale com a <span className="text-brand">nossa equipe</span>
          </h2>
          <p className="text-navy/60 text-lg max-w-xl mx-auto">
            Tire dúvidas, peça orçamentos ou venha nos visitar. Estamos prontos para atender você.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          <div
            ref={formCol.ref}
            className={`transition-all duration-700 ${
              formCol.visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="grid gap-3 mb-8">
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-navy/8 hover:border-brand/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center shrink-0">
                  <Phone width={18} height={18} className="lucide lucide-phone text-brand" />
                </div>
                <div>
                  <p className="text-navy/50 text-xs font-medium">Telefones</p>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5">
                    <a
                      href="tel:4432252211"
                      className="text-navy font-semibold text-sm hover:text-brand transition-colors"
                    >
                      (44) 3225-2211
                    </a>
                    <span className="text-navy/20 text-sm">|</span>
                    <a
                      href="tel:4432651506"
                      className="text-navy font-semibold text-sm hover:text-brand transition-colors"
                    >
                      (44) 3265-1506
                    </a>
                  </div>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=Av.+Brasil,+7351,+Zona+05,+Maringá+PR"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-navy/8 hover:border-brand/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center shrink-0">
                    <MapPin width={18} height={18} className="lucide lucide-map-pin text-brand" />
                  </div>
                  <div>
                    <p className="text-navy/50 text-xs font-medium">Endereço</p>
                    <p className="text-navy font-semibold text-sm">Av. Brasil, 7351 - Zona 05, Maringá - PR</p>
                  </div>
                </div>
              </a>
              <div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-navy/8 hover:border-brand/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center shrink-0">
                    <Clock width={18} height={18} className="lucide lucide-clock text-brand" />
                  </div>
                  <div>
                    <p className="text-navy/50 text-xs font-medium">Horário</p>
                    <p className="text-navy font-semibold text-sm">Seg–Sex: 7h às 18h | Sáb: 8h às 12h</p>
                  </div>
                </div>
              </div>
            </div>
            <form className="bg-white rounded-2xl p-6 border border-navy/8 shadow-sm" onSubmit={handleSubmit}>
              <h3 className="font-bold text-navy text-lg mb-5">Enviar mensagem via WhatsApp</h3>
              <div className="flex flex-col gap-4">
                <div>
                  <label className="block text-navy/70 text-sm font-medium mb-1.5">Seu nome</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: João Silva"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-navy/15 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none text-navy text-sm transition-all bg-cream"
                  />
                </div>
                <div>
                  <label className="block text-navy/70 text-sm font-medium mb-1.5">Telefone/WhatsApp</label>
                  <input
                    type="tel"
                    required
                    placeholder="(44) 99999-9999"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-navy/15 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none text-navy text-sm transition-all bg-cream"
                  />
                </div>
                <div>
                  <label className="block text-navy/70 text-sm font-medium mb-1.5">Mensagem</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Como podemos ajudar? Descreva sua necessidade..."
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-navy/15 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none text-navy text-sm transition-all bg-cream resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-brand hover:bg-brand-light text-navy font-bold py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-md shadow-brand/20"
                >
                  <Send width={18} height={18} className="lucide lucide-send " />
                  Enviar pelo WhatsApp
                </button>
              </div>
            </form>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-3 flex items-center justify-center gap-2 border-2 border-brand/30 hover:border-brand text-brand font-semibold py-3.5 rounded-xl transition-all duration-200 text-sm"
            >
              <WhatsAppIcon width={18} height={18} />
              Falar diretamente no WhatsApp
            </a>
          </div>
          <div
            ref={mapCol.ref}
            className={`transition-all duration-700 delay-200 ${
              mapCol.visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-navy/8 h-full min-h-[420px]">
              <div className="p-4 bg-navy flex items-center gap-3 border-b border-white/10">
                <MapPin width={18} height={18} className="lucide lucide-map-pin text-brand" />
                <span className="text-cream font-semibold text-sm">Av. Brasil, 7351 - Zona 05, Maringá - PR</span>
              </div>
              <div className="w-full h-[calc(100%-56px)] min-h-[380px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.842278365011!2d-51.97473292467398!3d-23.43006397889028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecd7082dc7fcbf%3A0x2a37662dfa83590b!2sBatuta%20Agroshop%3A%20promo%C3%A7%C3%B5es%20de%20ferramentas!5e0!3m2!1spt-BR!2sbr!4v1776934204449!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Batuta Agroshop"
                  style={{ border: '0px', display: 'block' }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { MessageCircle, Phone, Instagram, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${name}.\nTelefone: ${phone}\n\n${message}`;
    window.open(
      `https://wa.me/5588999153119?text=${encodeURIComponent(text)}`,
      '_blank'
    );
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-reveal text-center mb-16">
          <span className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3 block">
            Fale conosco
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Entre em Contato
          </h2>
          <div className="gold-divider-center mb-5"></div>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Tire suas dúvidas, faça pedidos ou visite nossa loja. Estamos aqui para ajudar você!
          </p>
        </div>
        <div className="section-reveal grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-6">
            <div className="bg-brand-dark-3 rounded-2xl p-7 border border-white/8">
              <h3 className="font-display text-2xl font-semibold text-white mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-5">
                <a
                  href="https://wa.me/5588999153119"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                    <MessageCircle size={20} className="text-green-400" />
                  </div>
                  <div>
                    <div className="text-white/40 text-xs uppercase tracking-widest mb-0.5">
                      WhatsApp
                    </div>
                    <div className="text-white font-medium group-hover:text-brand-gold transition-colors">
                      (88) 99915-3119
                    </div>
                  </div>
                </a>
                <a href="tel:+5588999153119" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold/20 transition-colors">
                    <Phone size={20} className="text-brand-gold" />
                  </div>
                  <div>
                    <div className="text-white/40 text-xs uppercase tracking-widest mb-0.5">
                      Telefone
                    </div>
                    <div className="text-white font-medium group-hover:text-brand-gold transition-colors">
                      (88) 99915-3119
                    </div>
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/lojapecicero/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-pink-500/20 transition-colors">
                    <Instagram size={20} className="text-pink-400" />
                  </div>
                  <div>
                    <div className="text-white/40 text-xs uppercase tracking-widest mb-0.5">
                      Instagram
                    </div>
                    <div className="text-white font-medium group-hover:text-brand-gold transition-colors">
                      @lojapecicero
                    </div>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-brand-gold" />
                  </div>
                  <div>
                    <div className="text-white/40 text-xs uppercase tracking-widest mb-0.5">
                      Endereço
                    </div>
                    <div className="text-white font-medium text-sm leading-relaxed">
                      R. São José, 179 - Centro<br />Juazeiro do Norte - CE, 63010-025
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              href="https://wa.me/5588999153119"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold w-full justify-center py-4 text-base"
            >
              <MessageCircle size={20} />
              Chamar no WhatsApp Agora
            </a>
          </div>
          <div className="bg-brand-dark-3 rounded-2xl p-7 border border-white/8">
            <h3 className="font-display text-2xl font-semibold text-white mb-2">
              Envie uma Mensagem
            </h3>
            <p className="text-white/50 text-sm mb-7">
              Preencha o formulário e sua mensagem será enviada direto pelo WhatsApp.
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-white/60 text-xs uppercase tracking-widest mb-2">
                  Seu Nome *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Como posso te chamar?"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-brand-gold/50 focus:bg-white/8 transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-white/60 text-xs uppercase tracking-widest mb-2">
                  Telefone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="(00) 00000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-brand-gold/50 focus:bg-white/8 transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-white/60 text-xs uppercase tracking-widest mb-2">
                  Mensagem *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="O que você está procurando? Como podemos ajudar?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-brand-gold/50 focus:bg-white/8 transition-all duration-200 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn-gold w-full justify-center py-4 text-base mt-2"
              >
                <Send size={18} />
                Enviar pelo WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

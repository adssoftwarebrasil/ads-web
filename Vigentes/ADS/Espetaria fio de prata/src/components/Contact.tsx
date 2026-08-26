import { useState, FormEvent } from 'react';
import { Send } from 'lucide-react';
import { WhatsAppIcon, InstagramIcon } from './icons';

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let text = `Olá! Meu nome é ${name}.`;
    if (phone) text += ` Meu contato: ${phone}.`;
    if (message) text += ` ${message}`;
    const url = `http://wa.me/5566996043627?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="bg-[#111111] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-14 md:gap-20 items-center">
          <div>
            <span className="inline-block text-amber-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">Fale Conosco</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[rgb(230,232,234)] leading-tight mb-5">
              Pronto para uma <span className="text-amber-400">experiência</span> inesquecível?
            </h2>
            <p className="text-[rgb(230,232,234)]/55 text-base leading-relaxed mb-8">
              Reserve sua mesa, tire dúvidas ou descubra as novidades do cardápio. Nossa equipe responde rapidamente pelo WhatsApp.
            </p>
            <div className="space-y-4">
              <a
                href="http://wa.me/5566996043627"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 bg-[#1e1e1e] border border-white/6 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:border-amber-500/30 transition-colors">
                  <WhatsAppIcon className="w-5 h-5 fill-current text-amber-400" />
                </div>
                <div>
                  <p className="text-[rgb(230,232,234)]/40 text-xs">WhatsApp</p>
                  <p className="text-[rgb(230,232,234)] font-medium text-sm group-hover:text-amber-400 transition-colors">(66) 9 9604-3627</p>
                </div>
              </a>
              <a
                href="https://www.instagram.com/fiodeprata_espetaria/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 bg-[#1e1e1e] border border-white/6 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:border-amber-500/30 transition-colors">
                  <InstagramIcon className="w-5 h-5 text-amber-400 fill-current" />
                </div>
                <div>
                  <p className="text-[rgb(230,232,234)]/40 text-xs">Instagram</p>
                  <p className="text-[rgb(230,232,234)] font-medium text-sm group-hover:text-amber-400 transition-colors">@fiodeprata_espetaria</p>
                </div>
              </a>
            </div>
          </div>
          <div className="bg-[#1a1a1a] border border-white/6 rounded-2xl p-7 md:p-8">
            <h3 className="text-[rgb(230,232,234)] font-bold text-xl mb-6">Envie uma mensagem</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-[rgb(230,232,234)]/50 text-xs font-semibold uppercase tracking-wider mb-2">Seu nome *</label>
                <input
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Como podemos te chamar?"
                  className="w-full bg-[#242424] border border-white/8 focus:border-amber-500/40 rounded-xl px-4 py-3.5 text-[rgb(230,232,234)] placeholder-white/20 text-sm outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-[rgb(230,232,234)]/50 text-xs font-semibold uppercase tracking-wider mb-2">WhatsApp / Telefone</label>
                <input
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(66) 9 0000-0000"
                  className="w-full bg-[#242424] border border-white/8 focus:border-amber-500/40 rounded-xl px-4 py-3.5 text-[rgb(230,232,234)] placeholder-white/20 text-sm outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-[rgb(230,232,234)]/50 text-xs font-semibold uppercase tracking-wider mb-2">Mensagem</label>
                <textarea
                  name="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Reserve sua mesa, tire dúvidas ou peça informações..."
                  className="w-full bg-[#242424] border border-white/8 focus:border-amber-500/40 rounded-xl px-4 py-3.5 text-[rgb(230,232,234)] placeholder-white/20 text-sm outline-none transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-400 text-[#1a1a1a] font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/25 text-sm mt-2"
              >
                <Send size={16} />
                Enviar pelo WhatsApp
              </button>
              <p className="text-[rgb(230,232,234)]/30 text-xs text-center">Você será redirecionado para o WhatsApp com os dados preenchidos.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook } from 'lucide-react';

export default function Contato() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [interesse, setInteresse] = useState('');
  const [mensagem, setMensagem] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const texto =
      `Olá GM Motos! Meu nome é ${nome}.\n` +
      `Telefone: ${telefone}\n` +
      `Interesse: ${interesse}\n` +
      `Mensagem: ${mensagem}`;
    window.open(
      `https://wa.me/5566999980270?text=${encodeURIComponent(texto)}`,
      '_blank',
      'noopener,noreferrer'
    );
  }

  return (
    <section id="contato" className="relative py-24 sm:py-32 bg-black overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_top_right,rgba(233,1,16,0.15),transparent_70%)]"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-brand-red mb-4">
            Fale conosco
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-5">
            Pronto para fazer o <span className="text-brand-red">melhor negócio</span>?
          </h2>
          <p className="text-white/70 text-lg">
            Envie sua mensagem ou visite nossa loja. Atendimento rápido e sem compromisso.
          </p>
        </div>
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 items-start">
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 backdrop-blur-sm"
          >
            <h3 className="font-display text-2xl font-black text-white mb-6">Envie sua mensagem</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-white/60 font-semibold mb-2">
                  Seu nome
                </label>
                <input
                  required
                  type="text"
                  placeholder="João da Silva"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 focus:border-brand-red focus:bg-white/[0.07] text-white placeholder-white/40 rounded-xl px-5 py-3.5 outline-none transition-all"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/60 font-semibold mb-2">
                    Telefone / WhatsApp
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="(66) 99999-9999"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 focus:border-brand-red focus:bg-white/[0.07] text-white placeholder-white/40 rounded-xl px-5 py-3.5 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/60 font-semibold mb-2">
                    Interesse
                  </label>
                  <select
                    required
                    value={interesse}
                    onChange={(e) => setInteresse(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 focus:border-brand-red focus:bg-white/[0.07] text-white placeholder-white/40 rounded-xl px-5 py-3.5 outline-none transition-all appearance-none"
                  >
                    <option value="" className="bg-black">
                      Selecione
                    </option>
                    <option value="Comprar moto" className="bg-black">
                      Comprar moto
                    </option>
                    <option value="Vender moto" className="bg-black">
                      Vender minha moto
                    </option>
                    <option value="Troca" className="bg-black">
                      Troca
                    </option>
                    <option value="Financiamento" className="bg-black">
                      Financiamento
                    </option>
                    <option value="Outro" className="bg-black">
                      Outro
                    </option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-white/60 font-semibold mb-2">
                  Mensagem
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Conte-nos o que você procura..."
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 focus:border-brand-red focus:bg-white/[0.07] text-white placeholder-white/40 rounded-xl px-5 py-3.5 outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:shadow-[0_15px_40px_rgba(233,1,16,0.5)] hover:scale-[1.01]"
              >
                Enviar via WhatsApp
                <Send className="lucide lucide-send" width={18} height={18} />
              </button>
              <p className="text-center text-xs text-white/50">
                Ao enviar, você será redirecionado para o WhatsApp com sua mensagem pré-preenchida.
              </p>
            </div>
          </form>
          <div className="space-y-4">
            <div className="rounded-3xl overflow-hidden border border-white/10 aspect-[16/11]">
              <iframe
                title="GM Motos no mapa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.519680552826!2d-54.615387924856115!3d-16.449202984286718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9379c9c39b3e6c35%3A0xf36e0f1ef93f9c9e!2sGM%20MOTOS%20COMPRA%2C%20VENDA%2C%20TROCA%20E%20FINANCIAMENTO%20DE%20MOTOS!5e0!3m2!1spt-BR!2sbr!4v1776709982466!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: '0px', filter: 'invert(0.92) grayscale(0.3)' }}
              ></iframe>
            </div>
            <div className="grid gap-3">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-brand-red/50 hover:bg-white/[0.06] transition-all group">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-red/15 flex items-center justify-center group-hover:bg-brand-red transition-colors">
                  <MapPin
                    className="lucide lucide-map-pin text-brand-red group-hover:text-white transition-colors"
                    width={18}
                    height={18}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold mb-1">
                    Endereço
                  </p>
                  <p className="text-white font-medium text-sm break-words">
                    Av. Wiliam Morais Filho, 413, Jd. Primavera, Rondonópolis-MT
                  </p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <a
                  href="https://wa.me/5566999980270?text=Ol%C3%A1%20GM%20Motos!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-brand-red/50 hover:bg-white/[0.06] transition-all group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-red/15 flex items-center justify-center group-hover:bg-brand-red transition-colors">
                      <Phone
                        className="lucide lucide-phone text-brand-red group-hover:text-white transition-colors"
                        width={18}
                        height={18}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold mb-1">
                        WhatsApp
                      </p>
                      <p className="text-white font-medium text-sm break-words">(66) 9 9998-0270</p>
                    </div>
                  </div>
                </a>
                <a
                  href="mailto:gmmotosroo@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-brand-red/50 hover:bg-white/[0.06] transition-all group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-red/15 flex items-center justify-center group-hover:bg-brand-red transition-colors">
                      <Mail
                        className="lucide lucide-mail text-brand-red group-hover:text-white transition-colors"
                        width={18}
                        height={18}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold mb-1">
                        E-mail
                      </p>
                      <p className="text-white font-medium text-sm break-words">
                        gmmotosroo@gmail.com
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-brand-red/50 hover:bg-white/[0.06] transition-all group">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-red/15 flex items-center justify-center group-hover:bg-brand-red transition-colors">
                  <Clock
                    className="lucide lucide-clock text-brand-red group-hover:text-white transition-colors"
                    width={18}
                    height={18}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold mb-1">
                    Horário de atendimento
                  </p>
                  <p className="text-white font-medium text-sm break-words">
                    Seg a Sáb: 08:30 às 11:30 / 13:00 às 18:00
                  </p>
                </div>
              </div>
              <div className="flex gap-3 mt-1">
                <a
                  href="https://www.instagram.com/gmmotosroo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-white/[0.04] hover:bg-brand-red border border-white/10 hover:border-brand-red text-white text-sm font-semibold transition-all"
                >
                  <Instagram className="lucide lucide-instagram" width={16} height={16} />
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/gmmotosroo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-white/[0.04] hover:bg-brand-red border border-white/10 hover:border-brand-red text-white text-sm font-semibold transition-all"
                >
                  <Facebook className="lucide lucide-facebook" width={16} height={16} />
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

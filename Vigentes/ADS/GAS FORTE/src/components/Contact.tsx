import { useState } from 'react';
import { MessageCircle, Phone, MapPin, Send } from 'lucide-react';

const products = [
  'Botijão 13kg (Residencial)',
  'Botijão 20kg (Comercial)',
  'Botijão 45kg (Industrial)',
  'Galão de Água 20L',
  'Outro',
];

export default function Contact() {
  const [name, setName] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [product, setProduct] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `Olá! Meu nome é ${name}.`;
    text += `\nEndereço/Bairro: ${neighborhood}`;
    text += `\nProduto: ${product}`;
    if (message.trim()) {
      text += `\nObservações: ${message}`;
    }
    const url = `https://wa.me/556282381515?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="section-padding bg-brand-navy relative overflow-hidden">
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgb(249, 163, 62), transparent)' }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <span className="text-brand-orange text-sm font-bold uppercase tracking-widest">Fale Conosco</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-2 mb-4">
            Pronto para fazer <span className="text-gradient">seu pedido?</span>
          </h2>
          <p className="text-brand-light/60 max-w-xl mx-auto">
            Procurando onde comprar gás perto de mim em Goiânia? Nosso depósito de gás é o seu principal fornecedor de
            gás no Tropical Verde. Preencha o formulário e vamos te enviar direto para o nosso WhatsApp.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="bg-brand-dark/70 border border-white/5 rounded-2xl p-5">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0">
                  <MessageCircle width={20} height={20} className="lucide lucide-message-circle text-green-400" />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">WhatsApp</p>
                  <a
                    href="https://wa.me/556282381515"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 text-sm font-medium transition-colors"
                  >
                    (62) 98238-1515
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-brand-dark/70 border border-white/5 rounded-2xl p-5">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center shrink-0">
                  <Phone width={20} height={20} className="lucide lucide-phone text-brand-orange" />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Telefone</p>
                  <a
                    href="tel:6235738001"
                    className="block text-brand-light/70 hover:text-brand-orange text-sm transition-colors"
                  >
                    (62) 3573-8001
                  </a>
                  <a
                    href="tel:6235731000"
                    className="block text-brand-light/70 hover:text-brand-orange text-sm transition-colors"
                  >
                    (62) 3573-1000
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-brand-dark/70 border border-white/5 rounded-2xl p-5">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center shrink-0">
                  <MapPin width={20} height={20} className="lucide lucide-map-pin text-brand-orange" />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Endereço</p>
                  <p className="text-brand-light/60 text-sm leading-relaxed">
                    R. Tv. 6 - Lot. Tropical Verde, Goiânia - GO, 74483-604
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/5 h-48">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5577.77288025316!2d-49.34899090685059!3d-16.689251012773955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef5eaf0690a49%3A0x1523c7131e79ce90!2sG%C3%A1s%20Forte%20-%20distribuidora%20de%20g%C3%A1s%20GLP!5e0!3m2!1spt-BR!2sbr!4v1772630000403!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Gás Forte"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-brand-dark/70 border border-white/5 rounded-2xl p-6 sm:p-8 space-y-5"
            >
              <div>
                <label className="block text-brand-light/70 text-sm font-medium mb-2">Seu nome *</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Como posso te chamar?"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-brand-navy/80 border border-white/10 focus:border-brand-orange/50 text-white placeholder-brand-light/30 rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200"
                />
              </div>
              <div>
                <label className="block text-brand-light/70 text-sm font-medium mb-2">Bairro / Endereço *</label>
                <input
                  type="text"
                  name="neighborhood"
                  required
                  placeholder="Informe seu bairro ou endereço"
                  value={neighborhood}
                  onChange={(e) => setNeighborhood(e.target.value)}
                  className="w-full bg-brand-navy/80 border border-white/10 focus:border-brand-orange/50 text-white placeholder-brand-light/30 rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200"
                />
              </div>
              <div>
                <label className="block text-brand-light/70 text-sm font-medium mb-2">O que você precisa? *</label>
                <select
                  name="product"
                  required
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  className="w-full bg-brand-navy/80 border border-white/10 focus:border-brand-orange/50 text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200 appearance-none cursor-pointer"
                >
                  <option value="" disabled className="text-brand-light/30">
                    Selecione o produto
                  </option>
                  {products.map((p) => (
                    <option key={p} value={p} className="bg-brand-dark text-white">
                      {p}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-brand-light/70 text-sm font-medium mb-2">Observações (opcional)</label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Alguma informação adicional sobre seu pedido?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-brand-navy/80 border border-white/10 focus:border-brand-orange/50 text-white placeholder-brand-light/30 rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-green-500/30 active:scale-95"
              >
                <Send width={18} height={18} className="lucide lucide-send" />
                Enviar pelo WhatsApp
              </button>
              <p className="text-brand-light/35 text-xs text-center">
                Ao clicar, você será redirecionado para o nosso WhatsApp com a mensagem pré-preenchida.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

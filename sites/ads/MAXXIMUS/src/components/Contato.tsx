import { useState } from 'react';

const WHATSAPP = {
  ribeirao: '5516997891482',
  araraquara: '5516993268596',
};

export default function Contato() {
  const [city, setCity] = useState<'ribeirao' | 'araraquara'>('araraquara');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const texto =
      `Olá! Meu nome é ${name}.\n` +
      `Telefone/WhatsApp: ${phone}\n` +
      `E-mail: ${email}\n` +
      `Mensagem: ${message}`;
    const url = `https://wa.me/${WHATSAPP[city]}?text=${encodeURIComponent(
      texto
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-16 md:py-24 bg-[rgb(19,57,94)]">
      <div className="container mx-auto px-5">
        <h2 className="text-white text-3xl md:text-5xl font-bold text-center mb-5">
          Fale Conosco
        </h2>
        <p className="text-white/80 text-lg text-center mb-12">
          Tire suas dúvidas ou solicite um orçamento
        </p>
        <div className="max-w-2xl mx-auto mb-8">
          <div className="grid grid-cols-2 gap-4">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name="city"
                className="w-4 h-4"
                value="ribeirao"
                checked={city === 'ribeirao'}
                onChange={() => setCity('ribeirao')}
              />
              <span className="text-white font-medium">Ribeirão Preto</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name="city"
                className="w-4 h-4"
                value="araraquara"
                checked={city === 'araraquara'}
                onChange={() => setCity('araraquara')}
              />
              <span className="text-white font-medium">Araraquara</span>
            </label>
          </div>
        </div>
        <form className="max-w-2xl mx-auto space-y-6" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Nome completo"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white/10 border border-white/30 text-white placeholder:text-white/60 px-4 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[rgb(244,95,38)] transition-all"
            />
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Telefone/WhatsApp"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-white/10 border border-white/30 text-white placeholder:text-white/60 px-4 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[rgb(244,95,38)] transition-all"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/10 border border-white/30 text-white placeholder:text-white/60 px-4 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[rgb(244,95,38)] transition-all"
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Mensagem"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-white/10 border border-white/30 text-white placeholder:text-white/60 px-4 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[rgb(244,95,38)] resize-none transition-all"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[rgb(244,95,38)] text-white py-5 rounded-xl text-lg font-semibold hover:brightness-110 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 32 32"
              fill="currentColor"
              className="flex-shrink-0"
            >
              <path d="M16 0C7.164 0 0 7.164 0 16c0 2.825.74 5.607 2.147 8.068L.068 31.932l8.164-2.08C10.688 31.26 13.344 32 16 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm8.092 22.564c-.348.98-1.728 1.796-2.828 2.032-.752.16-1.732.288-5.032-.996-4.224-1.644-6.952-5.96-7.164-6.232-.208-.272-1.692-2.252-1.692-4.296s1.072-3.048 1.452-3.464c.38-.416.828-.52 1.104-.52.276 0 .552.004.792.016.256.012.6-.096.94.716.348.828 1.188 2.892 1.292 3.1.104.208.172.452.036.724-.136.272-.204.44-.404.68-.2.24-.42.536-.6.72-.2.204-.408.424-.176.832.232.408.996 1.64 2.14 2.656 1.472 1.308 2.712 1.716 3.096 1.908.384.192.608.16.832-.096.224-.256.964-1.124 1.22-1.508.256-.384.512-.32.864-.192.352.128 2.232 1.052 2.616 1.244.384.192.64.288.732.448.092.16.092.928-.256 1.908z" />
            </svg>
            <span>Enviar via WhatsApp</span>
          </button>
        </form>
      </div>
    </section>
  );
}

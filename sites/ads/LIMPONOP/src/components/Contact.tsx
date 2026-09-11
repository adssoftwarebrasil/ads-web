import { useState, type FormEvent } from 'react';
import { Phone, MapPin, Clock, Instagram, Send } from 'lucide-react';
import { WHATSAPP, cities } from '../data';

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [interest, setInterest] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message =
      `Olá! Gostaria de solicitar um orçamento.\n\n` +
      `*Nome:* ${name}\n` +
      `*Telefone:* ${phone}\n` +
      `*Cidade:* ${city}\n` +
      `*Produto ou serviço de interesse:* ${interest}`;
    window.open(`${WHATSAPP}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-brand-pink/10 text-brand-pink text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Contato
          </span>
          <h2 className="section-title">Fale com a gente agora</h2>
          <p className="section-subtitle mx-auto">
            Solicite um orçamento, tire dúvidas ou saiba mais sobre nossos produtos. Respondemos
            rapidinho!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
              <h3 className="font-bold text-brand-dark text-lg mb-5">Informações de contato</h3>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-pink/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone width={18} height={18} className="text-brand-pink" />
                  </div>
                  <div>
                    <p className="text-xs text-brand-gray font-medium mb-0.5">WhatsApp / Telefone</p>
                    <a
                      href="https://wa.me/556697227511"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-brand-dark hover:text-brand-pink transition-colors"
                    >
                      +55 (66) 99722-7511
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin width={18} height={18} className="text-brand-blue" />
                  </div>
                  <div>
                    <p className="text-xs text-brand-gray font-medium mb-0.5">Endereço</p>
                    <p className="font-semibold text-brand-dark text-sm leading-snug">
                      Av. dos Jatobás, 1281-A
                      <br />
                      Jardim Celeste, Sinop - MT
                      <br />
                      CEP 78556-690
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock width={18} height={18} className="text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs text-brand-gray font-medium mb-0.5">
                      Horário de funcionamento
                    </p>
                    <p className="font-semibold text-brand-dark text-sm leading-relaxed">
                      Seg – Sex: 07:30 às 11:30
                      <br />
                      Seg – Sex: 13:30 às 17:30
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Instagram width={18} height={18} className="text-rose-500" />
                  </div>
                  <div>
                    <p className="text-xs text-brand-gray font-medium mb-0.5">Instagram</p>
                    <a
                      href="https://www.instagram.com/limponop/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-brand-dark hover:text-brand-pink transition-colors"
                    >
                      @limponop
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-brand-pink to-rose-500 rounded-2xl p-6 text-white">
              <h4 className="font-bold text-lg mb-2">Atendimento via WhatsApp</h4>
              <p className="text-white/80 text-sm mb-4 leading-relaxed">
                Prefere o WhatsApp? Nos mande uma mensagem diretamente e responderemos o mais rápido
                possível!
              </p>
              <a
                href="https://wa.me/556697227511"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-brand-pink px-5 py-2.5 rounded-full font-bold text-sm hover:bg-pink-50 transition-colors"
              >
                Abrir WhatsApp
              </a>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full">
              <h3 className="font-bold text-brand-dark text-lg mb-6">Solicite seu orçamento</h3>
              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-brand-dark mb-1.5">
                      Seu nome *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Como podemos te chamar?"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-brand-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-pink/30 focus:border-brand-pink transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-dark mb-1.5">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(66) 9 9999-9999"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-brand-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-pink/30 focus:border-brand-pink transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-dark mb-1.5">
                    Sua cidade *
                  </label>
                  <select
                    name="city"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-pink/30 focus:border-brand-pink transition-all bg-white"
                  >
                    <option value="" disabled>
                      Selecione sua cidade
                    </option>
                    {cities.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-dark mb-1.5">
                    Produto ou serviço de interesse *
                  </label>
                  <textarea
                    name="interest"
                    required
                    rows={4}
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    placeholder="Ex: Preciso de detergente e saco de lixo para minha empresa, qual o preço por caixa?"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-brand-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-pink/30 focus:border-brand-pink transition-all resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-brand-pink text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-pink-600 transition-colors duration-200 shadow-md hover:shadow-lg mt-2"
                >
                  <Send width={18} height={18} />
                  Enviar pelo WhatsApp
                </button>
                <p className="text-xs text-brand-gray text-center">
                  Ao enviar, você será redirecionado para o WhatsApp com sua mensagem pré-preenchida.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

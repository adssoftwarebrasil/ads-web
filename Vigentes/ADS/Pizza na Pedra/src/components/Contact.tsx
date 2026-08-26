import { useState } from 'react';
import { MapPin, Phone, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `Olá! Meu nome é ${name}.`,
      phone ? `Telefone: ${phone}` : '',
      message ? `Mensagem: ${message}` : '',
    ].filter(Boolean);
    const text = encodeURIComponent(lines.join('\n'));
    window.open(`http://wa.me/556292358068?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 transition-all duration-700 opacity-100 translate-y-0">
          <span className="text-brand-red text-sm font-semibold tracking-[0.25em] uppercase">
            Fale Conosco
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brand-black mt-3">
            Venha nos Visitar
          </h2>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="transition-all duration-700 opacity-100 translate-x-0">
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="w-11 h-11 bg-brand-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-brand-red" width={20} height={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-black text-sm mb-1">Endereço</h4>
                  <p className="text-gray-500 text-sm">Rua 115, nº 1762, Qd. F43A, Lt. 09</p>
                  <p className="text-gray-500 text-sm">Setor Sul – Goiânia/GO</p>
                  <p className="text-gray-500 text-sm">CEP: 74085-325</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-11 h-11 bg-brand-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-brand-red" width={20} height={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-black text-sm mb-1">
                    Telefone &amp; WhatsApp
                  </h4>
                  <p className="text-gray-500 text-sm">(62) 99235-8068</p>
                  <p className="text-gray-500 text-sm">(62) 3278-5151</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-11 h-11 bg-brand-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="text-brand-red" width={20} height={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-black text-sm mb-1">
                    Horários de Funcionamento
                  </h4>
                  <p className="text-gray-500 text-sm">Delivery: Seg à Dom, 10h – 23h</p>
                  <p className="text-gray-500 text-sm">Salão: Seg à Dom, 18h – 23h</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.5482572397395!2d-49.25184382485047!3d-16.699474284075162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef1415a707f01%3A0x75f8025ea6f47f24!2sPizza%20Na%20Pedra!5e0!3m2!1spt-BR!2sbr!4v1772134715361!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pizza na Pedra no Google Maps"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
          <div className="transition-all duration-700 delay-200 opacity-100 translate-x-0">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h3 className="font-serif text-2xl font-bold text-brand-black mb-2">
                Mande uma Mensagem
              </h3>
              <p className="text-gray-500 text-sm mb-8">
                Preencha o formulário e continue a conversa direto no WhatsApp!
              </p>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Seu Nome *</label>
                  <input
                    type="text"
                    required
                    placeholder="Como podemos te chamar?"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 outline-none transition-all text-sm text-gray-800 bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    WhatsApp / Telefone
                  </label>
                  <input
                    type="tel"
                    placeholder="(62) 9 0000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 outline-none transition-all text-sm text-gray-800 bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Gostaria de fazer um pedido, tirar dúvidas, reservar mesa..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 outline-none transition-all text-sm text-gray-800 bg-gray-50 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-light text-white font-bold py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-red-900/30 hover:-translate-y-0.5"
                >
                  <Send width={18} height={18} />
                  Enviar pelo WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

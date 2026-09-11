import { useState, type FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { WHATSAPP_URL } from '../lib/scroll';

const products = ['Baterias', 'Pneus', 'Rodas', 'Outro'];

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return digits.length ? `(${digits}` : '';
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export default function Contact() {
  const info = useInView<HTMLDivElement>();
  const formCol = useInView<HTMLDivElement>();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [product, setProduct] = useState('Baterias');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      'Olá! Gostaria de solicitar um orçamento.',
      '',
      `*Nome:* ${name}`,
      `*Telefone:* ${phone}`,
      `*E-mail:* ${email}`,
      `*Produto de interesse:* ${product}`,
      `*Mensagem:* ${message}`,
    ];
    const url = `${WHATSAPP_URL}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 lg:py-28" style={{ backgroundColor: 'rgb(248, 203, 27)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div
            ref={info.ref}
            className={`lg:col-span-2 space-y-8 transition-all duration-800 ${
              info.inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
                Fale com a Rainha
              </h2>
              <p className="text-xl text-black opacity-90">Estamos prontos para atender você</p>
            </div>
            <div className="space-y-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-black hover:text-white transition-colors duration-300 group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-black bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-black group-hover:bg-opacity-30">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p className="text-sm opacity-80">(62) 99443-0039</p>
                </div>
              </a>
              <a
                href="mailto:flaviocardososilva2@gmail.com"
                className="flex items-center space-x-4 text-black hover:text-white transition-colors duration-300 group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-black bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-black group-hover:bg-opacity-30">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-semibold">E-mail</p>
                  <p className="text-sm opacity-80">flaviocardososilva2@gmail.com</p>
                </div>
              </a>
              <div className="flex items-center space-x-4 text-black">
                <div className="flex-shrink-0 w-12 h-12 bg-black bg-opacity-20 rounded-full flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-semibold">Localização</p>
                  <p className="text-sm opacity-90 font-medium">Av. João Florentino, Qd 01, Lt 16</p>
                  <p className="text-sm opacity-80">Parque Res. das Flores, Anápolis - GO</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-black">
                <div className="flex-shrink-0 w-12 h-12 bg-black bg-opacity-20 rounded-full flex items-center justify-center">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="font-semibold">Horário</p>
                  <p className="text-sm opacity-80">Seg a Sex 08:00-18:00 | Sáb 08:00-12:00</p>
                </div>
              </div>
              <a
                href="https://www.instagram.com/rainhadasbateriaserodas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-black hover:text-white transition-colors duration-300 group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-black bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-black group-hover:bg-opacity-30">
                  <Instagram size={24} />
                </div>
                <div>
                  <p className="font-semibold">Siga nas redes sociais</p>
                  <p className="text-sm opacity-80">@rainhadasbateriaserodas</p>
                </div>
              </a>
            </div>
          </div>
          <div
            ref={formCol.ref}
            className={`lg:col-span-3 transition-all duration-800 ${
              formCol.inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-xl p-8 lg:p-10"
              style={{ boxShadow: 'rgba(0, 0, 0, 0.12) 0px 8px 30px' }}
            >
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(248,203,27)] transition-all duration-300 border-gray-300"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="(62) 99999-9999"
                    maxLength={15}
                    value={phone}
                    onChange={(e) => setPhone(formatPhone(e.target.value))}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(248,203,27)] transition-all duration-300 border-gray-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(248,203,27)] transition-all duration-300"
                  />
                </div>
                <div>
                  <select
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(248,203,27)] transition-all duration-300"
                  >
                    {products.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <textarea
                    placeholder="Descreva o que você precisa"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(248,203,27)] transition-all duration-300 resize-none border-gray-300"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full h-14 bg-[rgb(33,33,33)] text-white rounded-lg font-semibold hover:bg-[rgb(248,203,27)] hover:text-black transition-all duration-300 hover:scale-105"
                >
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

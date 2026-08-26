import { useState, FormEvent } from 'react';
import { Phone, MapPin, Clock, Instagram, Facebook, User, MessageSquare, Send } from 'lucide-react';
import { WhatsappIcon } from './icons';
import { WA_NUMBER } from '../lib';

const products = [
  'Gás P13 (Botijão Residencial)',
  'Gás P20 (Botijão Comercial)',
  'Gás P45 (Cilindro Industrial)',
  'Água Mineral — Galão 20L',
];

const productValues = ['Gás P13', 'Gás P20', 'Gás P45', 'Água Mineral 20L'];

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [product, setProduct] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let text = `Olá! Meu nome é ${name}.`;
    if (product) text += `\nProduto desejado: ${product}.`;
    if (phone) text += `\nMeu WhatsApp: ${phone}.`;
    if (message) text += `\n${message}`;
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
            style={{ backgroundColor: 'rgba(241, 93, 34, 0.1)', color: 'rgb(241, 93, 34)' }}
          >
            Fale Conosco
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Faça seu pedido
            <br />
            <span style={{ color: 'rgb(241, 93, 34)' }}>de forma rápida</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Preencha o formulário abaixo e entraremos em contato pelo WhatsApp com toda agilidade.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="flex items-start gap-4 p-5 rounded-2xl" style={{ backgroundColor: 'rgb(248, 248, 248)' }}>
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: 'rgba(241, 93, 34, 0.1)', color: 'rgb(241, 93, 34)' }}
              >
                <Phone size={20} strokeWidth={2} />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">
                  WhatsApp / Telefone
                </p>
                <a
                  href={`https://wa.me/${WA_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 font-semibold text-sm hover:underline"
                  style={{ color: 'rgb(24, 82, 151)' }}
                >
                  (66) 9 9695-7904
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 rounded-2xl" style={{ backgroundColor: 'rgb(248, 248, 248)' }}>
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: 'rgba(241, 93, 34, 0.1)', color: 'rgb(241, 93, 34)' }}
              >
                <MapPin size={20} strokeWidth={2} />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">
                  Endereço
                </p>
                <a
                  href="https://maps.google.com/?q=Rapidão+gás+e+água"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 font-semibold text-sm hover:underline"
                  style={{ color: 'rgb(24, 82, 151)' }}
                >
                  Av. Belo Horizonte, 1901 — Primavera I, Primavera do Leste - MT
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 rounded-2xl" style={{ backgroundColor: 'rgb(248, 248, 248)' }}>
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: 'rgba(241, 93, 34, 0.1)', color: 'rgb(241, 93, 34)' }}
              >
                <Clock size={20} strokeWidth={2} />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">
                  Horário de Atendimento
                </p>
                <p className="text-gray-800 font-semibold text-sm">Segunda a Domingo: 07h às 20h</p>
              </div>
            </div>
            <div className="p-5 rounded-2xl" style={{ backgroundColor: 'rgb(248, 248, 248)' }}>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
                Redes Sociais
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/baratao123gas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-white px-4 py-2.5 rounded-xl transition-opacity hover:opacity-80"
                  style={{
                    background:
                      'linear-gradient(135deg, rgb(249, 206, 52), rgb(238, 42, 123), rgb(98, 40, 215))',
                  }}
                >
                  <Instagram size={16} strokeWidth={2} />
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/barataogaspva/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-white px-4 py-2.5 rounded-xl transition-opacity hover:opacity-80"
                  style={{ backgroundColor: 'rgb(24, 119, 242)' }}
                >
                  <Facebook size={16} strokeWidth={2} />
                  Facebook
                </a>
              </div>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-white rounded-3xl shadow-lg p-7 md:p-10"
            style={{ border: '1px solid rgba(156, 156, 154, 0.15)' }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                  Seu nome *
                </label>
                <div className="relative">
                  <User
                    size={16}
                    strokeWidth={2}
                    className="lucide lucide-user absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="text"
                    name="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: João Silva"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border text-sm font-medium text-gray-800 placeholder-gray-300 outline-none focus:ring-2 transition-all"
                    style={{ borderColor: 'rgba(156, 156, 154, 0.3)', backgroundColor: 'rgb(250, 250, 250)' }}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                  WhatsApp *
                </label>
                <div className="relative">
                  <Phone
                    size={16}
                    strokeWidth={2}
                    className="lucide lucide-phone absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(66) 9 9999-9999"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border text-sm font-medium text-gray-800 placeholder-gray-300 outline-none transition-all"
                    style={{ borderColor: 'rgba(156, 156, 154, 0.3)', backgroundColor: 'rgb(250, 250, 250)' }}
                  />
                </div>
              </div>
            </div>
            <div className="mb-5">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                Produto desejado
              </label>
              <select
                name="product"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border text-sm font-medium text-gray-800 outline-none transition-all appearance-none cursor-pointer"
                style={{ borderColor: 'rgba(156, 156, 154, 0.3)', backgroundColor: 'rgb(250, 250, 250)' }}
              >
                <option value="">Selecione um produto...</option>
                {products.map((p, i) => (
                  <option key={p} value={productValues[i]}>
                    {p}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-7">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                Mensagem adicional
              </label>
              <div className="relative">
                <MessageSquare
                  size={16}
                  strokeWidth={2}
                  className="lucide lucide-message-square absolute left-3.5 top-3.5 text-gray-400"
                />
                <textarea
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ex: Preciso de 2 botijões P13, endereço: Rua X, n° 123"
                  rows={4}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border text-sm font-medium text-gray-800 placeholder-gray-300 outline-none resize-none transition-all"
                  style={{ borderColor: 'rgba(156, 156, 154, 0.3)', backgroundColor: 'rgb(250, 250, 250)' }}
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl text-white font-black text-base transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: 'rgb(241, 93, 34)' }}
            >
              <WhatsappIcon width={20} height={20} />
              Enviar pedido pelo WhatsApp
              <Send size={16} strokeWidth={2} />
            </button>
            <p className="text-center text-xs text-gray-400 mt-4">
              Ao enviar, você será redirecionado para o WhatsApp da Rapidão.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

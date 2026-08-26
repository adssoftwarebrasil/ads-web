import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import Reveal from './Reveal';

const interests = [
  'Dor na Coluna / Lombalgia',
  'Hérnia de Disco',
  'Dor no Joelho ou Quadril',
  'Dor no Ombro ou Pescoço',
  'Reabilitação Pós-Cirúrgica',
  'Pilates / Fortalecimento',
  'Fisioterapia para Idoso',
  'Atendimento Domiciliar',
  'Palmilhas Terapêuticas',
  'Fisioterapia Respiratória',
  'Outro',
];

export default function Contact() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [interesse, setInteresse] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `Olá! Meu nome é ${nome}.`;
    text += `\nTelefone/WhatsApp: ${telefone}`;
    text += `\nInteresse: ${interesse}`;
    if (mensagem.trim()) {
      text += `\nMensagem: ${mensagem}`;
    }
    window.open(`https://wa.me/556699102233?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 bg-brand-accent/10 text-brand-accent">
            Fale Conosco
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-dark mb-4">
            Agende Sua{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, rgb(62, 48, 123), rgb(219, 67, 43)) text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Consulta
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Preencha o formulário abaixo e entraremos em contato pelo WhatsApp para confirmar o melhor horário para você.
          </p>
        </div>
        <Reveal className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(219, 67, 43, 0.082)', color: 'rgb(219, 67, 43)' }}
              >
                <Phone size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Telefone / WhatsApp</p>
                <a
                  href="https://wa.me/556699102233"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-gray-800 hover:text-brand-accent transition-colors"
                >
                  (66) 9 9910-2233
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(62, 48, 123, 0.082)', color: 'rgb(62, 48, 123)' }}
              >
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">E-mail</p>
                <a
                  href="mailto:movimente.fisio22@gmail.com"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-gray-800 hover:text-brand-accent transition-colors"
                >
                  movimente.fisio22@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(219, 67, 43, 0.082)', color: 'rgb(219, 67, 43)' }}
              >
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Endereço</p>
                <a
                  href="https://maps.google.com/?q=Movimente+Fisioterapia+Especializada+Sorriso"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-gray-800 hover:text-brand-accent transition-colors"
                >
                  Av. Curitiba, 2605 sl 02 – Centro Sul, Sorriso – MT
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(62, 48, 123, 0.082)', color: 'rgb(62, 48, 123)' }}
              >
                <Clock size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                  Horário de Atendimento
                </p>
                <p className="text-sm font-semibold text-gray-800">Seg – Sex: 07h às 12h | 13h às 18h</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-gray-100 mt-2" style={{ height: '240px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3894.5487633893877!2d-55.72759152493085!3d-12.54602448773158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a0b317bf166da1%3A0x8c26d1a8ad680a3b!2sMovimente%20Fisioterapia%20Especializada!5e0!3m2!1spt-PT!2sbr!4v1774546718139!5m2!1spt-PT!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Movimente Fisioterapia"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <h3 className="text-xl font-black text-brand-dark mb-6">Enviar Mensagem pelo WhatsApp</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Como podemos te chamar?"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                    style={{ ['--tw-ring-color' as string]: '#3E307B40' }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(66) 9 9999-9999"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                  Qual seu interesse? *
                </label>
                <select
                  required
                  value={interesse}
                  onChange={(e) => setInteresse(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all bg-white"
                >
                  <option value="">Selecione uma opção...</option>
                  {interests.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                  Mensagem adicional (opcional)
                </label>
                <textarea
                  rows={4}
                  placeholder="Descreva brevemente sua situação ou dúvida..."
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 py-4 rounded-full font-bold text-white text-base transition-all duration-200 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                style={{ background: 'linear-gradient(135deg, rgb(219, 67, 43), rgb(181, 51, 28))' }}
              >
                <WhatsAppIcon size={20} />
                Enviar Mensagem pelo WhatsApp
                <Send size={16} />
              </button>
              <p className="text-center text-xs text-gray-400 mt-4">
                Ao clicar, você será redirecionado para o WhatsApp com sua mensagem pré-preenchida.
              </p>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

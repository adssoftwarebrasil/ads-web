import { useState } from 'react';
import { User, Tag, MessageSquare, Send } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const SUBJECTS = [
  'Para-choques',
  'Grades Frontais',
  'Faróis',
  'Lanternas',
  'Para-lamas',
  'Acessórios',
  'Outro',
];

export default function Contact() {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${name}. Tenho interesse em ${subject}. ${message}`;
    const url = `http://wa.me/5598985630349?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 lg:py-28" style={{ backgroundColor: 'rgb(31, 66, 131)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="transition-all duration-700 opacity-100 translate-x-0">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
              style={{ backgroundColor: 'rgba(252, 255, 252, 0.15)', color: 'rgb(252, 255, 252)' }}
            >
              Fale Conosco
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5 leading-tight">
              Precisando de uma peça? A gente ajuda!
            </h2>
            <p className="text-white/80 leading-relaxed mb-8">
              Preencha o formulário ao lado e nossa equipe retornará pelo WhatsApp em minutos.
              Atendemos todo o estado do Maranhão!
            </p>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">📍</span>
                <div>
                  <p className="font-semibold text-white text-sm">Endereço</p>
                  <p className="text-white/70 text-sm">
                    Av. Guajajaras, 136 - loja C - Tirirical, São Luís - MA
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">⏰</span>
                <div>
                  <p className="font-semibold text-white text-sm">Horário</p>
                  <p className="text-white/70 text-sm">Segunda a Sábado: 8h às 18h</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">📱</span>
                <div>
                  <p className="font-semibold text-white text-sm">WhatsApp</p>
                  <p className="text-white/70 text-sm">(98) 9 8563-0349</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl transition-all duration-700 delay-200 opacity-100 translate-x-0">
            <h3 className="text-xl font-bold mb-6" style={{ color: 'rgb(31, 66, 131)' }}>
              Enviar mensagem
            </h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="relative">
                <User
                  width={16}
                  height={16}
                  className="lucide lucide-user absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Seu nome completo"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm outline-none transition-all focus:ring-2"
                  style={{ outlineColor: 'rgb(31, 66, 131)' }}
                />
              </div>
              <div className="relative">
                <Tag
                  width={16}
                  height={16}
                  className="lucide lucide-tag absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none z-10"
                />
                <select
                  name="subject"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm outline-none appearance-none bg-white transition-all"
                  style={{ color: subject ? 'rgb(31, 66, 131)' : 'rgb(156, 163, 175)' }}
                >
                  <option value="" disabled>
                    Selecione o produto
                  </option>
                  {SUBJECTS.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div className="relative">
                <MessageSquare
                  width={16}
                  height={16}
                  className="lucide lucide-message-square absolute left-3 top-3.5 text-gray-400"
                />
                <textarea
                  name="message"
                  placeholder="Descreva o que você precisa (modelo do carro, ano, etc.)"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm outline-none resize-none transition-all"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg active:scale-95"
                style={{ backgroundColor: 'rgb(37, 211, 102)' }}
              >
                <WhatsAppIcon className="w-4 h-4" />
                Enviar pelo WhatsApp
                <Send width={14} height={14} className="lucide lucide-send" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

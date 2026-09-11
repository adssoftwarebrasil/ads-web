import { useState, FormEvent } from 'react';
import { MessageCircle, Phone, Mail, Clock, Send } from 'lucide-react';

const infos = [
  {
    icon: MessageCircle,
    iconBg: 'bg-green-500',
    label: 'WhatsApp',
    value: '(16) 3323-6646',
    href: 'http://wa.me/551633236646',
    external: true,
  },
  {
    icon: Phone,
    iconBg: 'bg-brand-navy',
    label: 'Telefone Fixo',
    value: '(16) 3323-6646',
    href: 'tel:+551633236646',
    external: false,
  },
  {
    icon: Mail,
    iconBg: 'bg-brand-red',
    label: 'E-mail',
    value: 'vendas@tavaresautopecas.com.br',
    href: 'mailto:vendas@tavaresautopecas.com.br',
    external: false,
  },
];

export default function Contact() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const texto = `Olá! Meu nome é ${nome}.\nTelefone: ${telefone}\nPreciso de: ${mensagem}`;
    const url = `http://wa.me/551633236646?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-brand-red font-semibold text-sm uppercase tracking-widest mb-3">Fale Conosco</p>
          <h2 className="section-title">
            Entre em <span className="text-brand-red">Contato</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Estamos prontos para ajudar você a encontrar a peça certa. Envie sua mensagem e responderemos rapidamente.
          </p>
          <div className="section-divider mx-auto mt-6"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-2 flex flex-col gap-5">
            {infos.map((info) => {
              const Icon = info.icon;
              return (
                <div
                  key={info.label}
                  className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-brand-gray-mid hover:shadow-md transition-shadow"
                >
                  <div className={`${info.iconBg} text-white rounded-xl p-3 flex-shrink-0`}>
                    <Icon size={22} />
                  </div>
                  <div>
                    <div className="text-xs text-brand-gray-text font-medium mb-1">{info.label}</div>
                    <a
                      href={info.href}
                      {...(info.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="text-brand-black font-semibold text-sm hover:text-brand-red transition-colors break-all"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              );
            })}
            <div className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-brand-gray-mid hover:shadow-md transition-shadow">
              <div className="bg-amber-500 text-white rounded-xl p-3 flex-shrink-0">
                <Clock size={22} />
              </div>
              <div>
                <div className="text-xs text-brand-gray-text font-medium mb-1">Horário de Funcionamento</div>
                <span className="text-brand-black font-semibold text-sm">
                  Seg–Sex: 08h às 18h | Sáb: 08h às 12h
                </span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-lg p-8 border border-brand-gray-mid">
            <h3 className="text-xl font-bold text-brand-black mb-2">Envie sua mensagem</h3>
            <p className="text-brand-gray-text text-sm mb-6">
              Preencha o formulário e você será redirecionado ao WhatsApp com a mensagem pronta.
            </p>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-brand-black mb-1.5">
                  Nome <span className="text-brand-red">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Seu nome completo"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full border border-brand-gray-mid rounded-xl px-4 py-3 text-sm text-brand-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-red/40 focus:border-brand-red transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-black mb-1.5">
                  WhatsApp / Telefone <span className="text-brand-red">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(16) 99999-9999"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  className="w-full border border-brand-gray-mid rounded-xl px-4 py-3 text-sm text-brand-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-red/40 focus:border-brand-red transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-black mb-1.5">
                  Qual peça ou serviço você precisa? <span className="text-brand-red">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Ex: Kit troca de óleo para Honda Civic 2020, filtro de ar, pastilha de freio..."
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  className="w-full border border-brand-gray-mid rounded-xl px-4 py-3 text-sm text-brand-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-red/40 focus:border-brand-red transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 disabled:opacity-60 text-white font-bold px-8 py-4 rounded-xl text-base transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
              >
                <Send size={18} />
                Enviar pelo WhatsApp
              </button>
              <p className="text-xs text-brand-gray-text text-center mt-1">
                Você será redirecionado ao WhatsApp com sua mensagem pré-preenchida.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

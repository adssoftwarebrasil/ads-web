import { useState } from 'react';
import { Phone, MapPin, Clock, Instagram, Send } from 'lucide-react';
import { WhatsAppIcon } from './icons';
import { useInView } from '../hooks/useInView';

const SERVICE_OPTIONS = [
  'Portão de Alumínio',
  'Porta de Vidro Temperado',
  'Box de Vidro',
  'Janela de Vidro',
  'Porta de Alumínio',
  'Espelho',
  'Guarda-corpo',
  'Outro',
];

export default function Contact() {
  const [ref, inView] = useInView<HTMLDivElement>();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parts = [
      'Olá! Vim pelo site da Center Vidros e Alumínio.',
      name && `*Nome:* ${name}`,
      phone && `*Telefone:* ${phone}`,
      service && `*Serviço de interesse:* ${service}`,
      message && `*Mensagem:* ${message}`,
    ].filter(Boolean);
    const text = encodeURIComponent(parts.join('\n'));
    window.open(`http://wa.me/559888677636?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-brand-dark" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-brand-cyan text-sm font-bold tracking-widest uppercase mb-3">
            Entre em Contato
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
            Solicite um Orçamento Gratuito
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Preencha o formulário abaixo e entraremos em contato pelo WhatsApp para apresentar as
            melhores soluções para você.
          </p>
        </div>
        <div className="grid lg:grid-cols-5 gap-12">
          <div
            className={`lg:col-span-2 space-y-6 transition-all duration-700 delay-100 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="space-y-4">
              <a href="tel:+559888677636" className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-brand-blue/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue/30 transition-colors">
                  <Phone width={20} height={20} className="text-brand-cyan" />
                </div>
                <div>
                  <p className="text-white/50 text-xs font-semibold uppercase tracking-wide mb-1">
                    Telefone / WhatsApp
                  </p>
                  <p className="text-white font-semibold">(98) 9 8867-7636</p>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-blue/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin width={20} height={20} className="text-brand-cyan" />
                </div>
                <div>
                  <p className="text-white/50 text-xs font-semibold uppercase tracking-wide mb-1">
                    Endereço
                  </p>
                  <p className="text-white font-semibold">Av. Casemiro Júnior, 97</p>
                  <p className="text-white/60 text-sm">Anil, São Luís - MA, 65055-000</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-blue/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock width={20} height={20} className="text-brand-cyan" />
                </div>
                <div>
                  <p className="text-white/50 text-xs font-semibold uppercase tracking-wide mb-1">
                    Horário Comercial
                  </p>
                  <p className="text-white font-semibold">Segunda a Sexta</p>
                  <p className="text-white/60 text-sm">Sábado com horário reduzido</p>
                </div>
              </div>
              <a
                href="https://www.instagram.com/centervidrosslz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 bg-brand-blue/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue/30 transition-colors">
                  <Instagram width={20} height={20} className="text-brand-cyan" />
                </div>
                <div>
                  <p className="text-white/50 text-xs font-semibold uppercase tracking-wide mb-1">
                    Instagram
                  </p>
                  <p className="text-white font-semibold group-hover:text-brand-cyan transition-colors">
                    @centervidrosslz
                  </p>
                </div>
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 h-52 lg:h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15943.60311571709!2d-44.246500552688865!3d-2.5392380090255644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f69051a28f7f77%3A0x673a6fb09362ae11!2sCenter%20vidros%20e%20Alum%C3%ADnio!5e0!3m2!1spt-BR!2sbr!4v1771961411801!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Center Vidros e Alumínio"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-200 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">Seu nome *</label>
                  <input
                    type="text"
                    required
                    placeholder="Como podemos te chamar?"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/5 border border-white/20 focus:border-brand-blue rounded-xl px-4 py-3 text-white placeholder:text-white/30 text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(98) 9 0000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white/5 border border-white/20 focus:border-brand-blue rounded-xl px-4 py-3 text-white placeholder:text-white/30 text-sm outline-none transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white/70 text-sm font-medium mb-2">
                  Serviço de interesse *
                </label>
                <select
                  required
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-white/5 border border-white/20 focus:border-brand-blue rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors appearance-none"
                  style={{ colorScheme: 'dark' }}
                >
                  <option value="" disabled>
                    Selecione um serviço
                  </option>
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt} className="bg-brand-dark text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-white/70 text-sm font-medium mb-2">
                  Descreva o que você precisa
                </label>
                <textarea
                  rows={4}
                  placeholder="Conte-nos mais sobre o que você precisa, medidas, quantidade, etc."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-white/5 border border-white/20 focus:border-brand-blue rounded-xl px-4 py-3 text-white placeholder:text-white/30 text-sm outline-none transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1dbd5b] text-white px-8 py-4 rounded-xl text-base font-bold transition-all duration-300 hover:scale-[1.02] shadow-xl shadow-green-600/30"
              >
                <WhatsAppIcon className="w-5 h-5 fill-current flex-shrink-0" />
                Enviar pelo WhatsApp
                <Send width={16} height={16} />
              </button>
              <p className="text-white/30 text-xs text-center">
                Ao enviar, você será redirecionado para o WhatsApp com sua mensagem já preenchida.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

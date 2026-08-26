import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ExternalLink, MessageCircle } from 'lucide-react';

const socials = [
  { href: 'https://www.facebook.com/PlantaeGestaAgricola', label: 'Facebook' },
  { href: 'https://www.instagram.com/plantaegestao', label: '@plantaegestao' },
  { href: 'https://www.plantae.agr.br', label: 'plantae.agr.br' },
];

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Gostaria de solicitar uma demonstração do Plantae.%0A%0A*Nome:* ${name}%0A*E-mail:* ${email}%0A*Telefone:* ${phone}%0A*Mensagem:* ${message}`;
    window.open(`https://wa.me/5566992921858?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-plantae-cream/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-plantae-blue font-black text-sm tracking-widest uppercase mb-4">
            Contato
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-plantae-dark leading-tight mb-4">
            LUCRE MAIS COM
            <br />
            <span className="text-plantae-blue">GESTÃO EFICIENTE</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Entre em contato e descubra como o Plantae pode transformar a gestão da sua propriedade.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="transition-all duration-700 opacity-100 translate-x-0">
            <div className="bg-plantae-dark rounded-3xl p-8 md:p-10 h-full">
              <h3 className="text-2xl font-black text-white mb-8">Fale Conosco</h3>
              <div className="flex flex-col gap-6 mb-10">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-plantae-green/20 flex items-center justify-center flex-shrink-0">
                    <Phone width={20} height={20} className="text-plantae-green" />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs font-semibold uppercase tracking-wide mb-1">
                      Telefone / WhatsApp
                    </div>
                    <a
                      href="tel:+5566992921858"
                      rel="noopener noreferrer"
                      className="text-white/90 text-sm font-semibold hover:text-plantae-green transition-colors duration-200 whitespace-pre-line"
                    >
                      (66) 99292-1858
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-plantae-green/20 flex items-center justify-center flex-shrink-0">
                    <Mail width={20} height={20} className="text-plantae-green" />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs font-semibold uppercase tracking-wide mb-1">
                      E-mail
                    </div>
                    <a
                      href="mailto:rubens.capitanio@plantae.agr.br"
                      rel="noopener noreferrer"
                      className="text-white/90 text-sm font-semibold hover:text-plantae-green transition-colors duration-200 whitespace-pre-line"
                    >
                      rubens.capitanio@plantae.agr.br
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-plantae-green/20 flex items-center justify-center flex-shrink-0">
                    <MapPin width={20} height={20} className="text-plantae-green" />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs font-semibold uppercase tracking-wide mb-1">
                      Endereço
                    </div>
                    <a
                      href="https://maps.google.com/?q=Av.+Amadeu+Lodi+949+Sorriso+MT"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/90 text-sm font-semibold hover:text-plantae-green transition-colors duration-200 whitespace-pre-line"
                    >
                      {'Av. Amadeu Lodi, 949 Sala 206 - Edifício Cella\nCentro, Sorriso - MT, 78896-032'}
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-plantae-green/20 flex items-center justify-center flex-shrink-0">
                    <Clock width={20} height={20} className="text-plantae-green" />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs font-semibold uppercase tracking-wide mb-1">
                      Horário de Atendimento
                    </div>
                    <span className="text-white/90 text-sm font-semibold whitespace-pre-line">
                      {'Segunda a sexta\n07:00 às 11:30 | 13:00 às 18:00'}
                    </span>
                  </div>
                </div>
              </div>
              <div className="border-t border-white/10 pt-8">
                <p className="text-white/50 text-xs font-semibold uppercase tracking-wide mb-4">
                  Redes Sociais
                </p>
                <div className="flex flex-wrap gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200"
                    >
                      <ExternalLink width={14} height={14} />
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="transition-all duration-700 delay-200 opacity-100 translate-x-0">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg">
              <h3 className="text-2xl font-black text-plantae-dark mb-8">
                Solicite uma Demonstração
              </h3>
              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-xs font-black text-gray-500 uppercase tracking-wide mb-2">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-plantae-blue focus:ring-2 focus:ring-plantae-blue/20 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-gray-500 uppercase tracking-wide mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-plantae-blue focus:ring-2 focus:ring-plantae-blue/20 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-gray-500 uppercase tracking-wide mb-2">
                    Telefone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="(00) 00000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-plantae-blue focus:ring-2 focus:ring-plantae-blue/20 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-gray-500 uppercase tracking-wide mb-2">
                    Mensagem
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Conta um pouco sobre sua propriedade e o que precisa..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-plantae-blue focus:ring-2 focus:ring-plantae-blue/20 transition-all duration-200 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-plantae-dark hover:bg-plantae-blue text-white font-black py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:scale-[1.02] text-sm flex items-center justify-center gap-2"
                >
                  <MessageCircle width={18} height={18} />
                  Enviar via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

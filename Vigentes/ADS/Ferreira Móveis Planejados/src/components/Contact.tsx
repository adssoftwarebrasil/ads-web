import { useState, type FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const ambientes = [
  'Cozinha Planejada',
  'Closet / Guarda-Roupa',
  'Sala de Estar / Painel TV',
  'Escritório Planejado',
  'Banheiro Planejado',
  'Quarto Planejado',
  'Projeto Completo',
  'Outro',
];

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let text = `Olá! Gostaria de solicitar um orçamento para móveis planejados.`;
    if (name) text += `\n\n*Nome:* ${name}`;
    if (phone) text += `\n*WhatsApp:* ${phone}`;
    if (interest) text += `\n*Tipo de Ambiente:* ${interest}`;
    if (message) text += `\n*Mensagem:* ${message}`;
    window.open(`https://wa.me/556696510268?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 transition-all duration-700 opacity-100 translate-y-0">
          <span className="inline-block text-[#5b5c57] text-xs tracking-[0.25em] uppercase font-semibold mb-4">
            Entre em Contato
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#212121] leading-tight mb-5">
            Solicite Seu Orçamento <span className="italic font-light text-[#5b5c57]">Grátis</span>
          </h2>
          <p className="text-[#5b5c57] text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Preencha o formulário abaixo e entraremos em contato via WhatsApp para entender o seu projeto e apresentar a
            melhor solução.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="transition-all duration-700 delay-100 opacity-100 translate-x-0">
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#e4e6e7] flex items-center justify-center shrink-0">
                  <Phone className="lucide lucide-phone text-[#212121]" width={18} height={18} />
                </div>
                <div>
                  <div className="text-xs text-[#5b5c57] font-medium uppercase tracking-wide mb-0.5">
                    Telefone / WhatsApp
                  </div>
                  <a
                    href="tel:+556696510268"
                    rel="noopener noreferrer"
                    className="text-[#212121] text-sm sm:text-base font-medium hover:text-[#5b5c57] transition-colors"
                  >
                    (66) 9 9651-0268
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#e4e6e7] flex items-center justify-center shrink-0">
                  <Mail className="lucide lucide-mail text-[#212121]" width={18} height={18} />
                </div>
                <div>
                  <div className="text-xs text-[#5b5c57] font-medium uppercase tracking-wide mb-0.5">E-mail</div>
                  <a
                    href="mailto:Vilmarferreiradossantos.snp@gmail.com"
                    rel="noopener noreferrer"
                    className="text-[#212121] text-sm sm:text-base font-medium hover:text-[#5b5c57] transition-colors"
                  >
                    Vilmarferreiradossantos.snp@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#e4e6e7] flex items-center justify-center shrink-0">
                  <MapPin className="lucide lucide-map-pin text-[#212121]" width={18} height={18} />
                </div>
                <div>
                  <div className="text-xs text-[#5b5c57] font-medium uppercase tracking-wide mb-0.5">Endereço</div>
                  <a
                    href="https://maps.google.com/?q=Ferreira+Móveis+Planejados+Sinop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#212121] text-sm sm:text-base font-medium hover:text-[#5b5c57] transition-colors"
                  >
                    Av. das Sibipirunas, 70 – Jardim Ibirapuera, Sinop – MT
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#e4e6e7] flex items-center justify-center shrink-0">
                  <Clock className="lucide lucide-clock text-[#212121]" width={18} height={18} />
                </div>
                <div>
                  <div className="text-xs text-[#5b5c57] font-medium uppercase tracking-wide mb-0.5">
                    Horário de Atendimento
                  </div>
                  <span className="text-[#212121] text-sm sm:text-base font-medium">Segunda a Sexta: 7h às 17h</span>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-[#e4e6e7]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.248402178649!2d-55.51252702494132!3d-11.887783688336741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a77fd5b39f0011%3A0xb62b0e5eeb13ecd!2sFerreira%20M%C3%B3veis%20Planejados!5e0!3m2!1spt-BR!2sbr!4v1776457266903!5m2!1spt-BR!2sbr"
                width="100%"
                height="260"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Ferreira Móveis Planejados"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
          <div className="transition-all duration-700 delay-200 opacity-100 translate-x-0">
            <form onSubmit={handleSubmit} className="bg-[#e4e6e7] rounded-2xl p-7 sm:p-9 shadow-sm">
              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-[#5b5c57] uppercase tracking-wide mb-1.5">
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Como podemos te chamar?"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white border border-transparent rounded-xl px-4 py-3 text-[#212121] text-sm placeholder:text-[#5b5c57]/50 focus:outline-none focus:ring-2 focus:ring-[#5b5c57] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#5b5c57] uppercase tracking-wide mb-1.5">
                    WhatsApp / Telefone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="(66) 9 0000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white border border-transparent rounded-xl px-4 py-3 text-[#212121] text-sm placeholder:text-[#5b5c57]/50 focus:outline-none focus:ring-2 focus:ring-[#5b5c57] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#5b5c57] uppercase tracking-wide mb-1.5">
                    Tipo de Ambiente
                  </label>
                  <select
                    name="interest"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full bg-white border border-transparent rounded-xl px-4 py-3 text-[#212121] text-sm focus:outline-none focus:ring-2 focus:ring-[#5b5c57] transition-all"
                  >
                    <option value="">Selecione o ambiente...</option>
                    {ambientes.map((a) => (
                      <option key={a} value={a}>
                        {a}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#5b5c57] uppercase tracking-wide mb-1.5">
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Conte um pouco sobre o seu projeto, metragens, estilo desejado..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-white border border-transparent rounded-xl px-4 py-3 text-[#212121] text-sm placeholder:text-[#5b5c57]/50 focus:outline-none focus:ring-2 focus:ring-[#5b5c57] transition-all resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#212121] text-[#e4e6e7] font-bold text-sm sm:text-base py-4 rounded-xl hover:bg-[#5b5c57] transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-current text-[#25D366]" />
                  Enviar pelo WhatsApp
                  <Send className="lucide lucide-send" width={16} height={16} />
                </button>
                <p className="text-center text-xs text-[#5b5c57]">
                  Ao clicar, você será redirecionado ao WhatsApp com sua mensagem pronta.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

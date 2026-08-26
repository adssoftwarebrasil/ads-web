import { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Send } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

interface InfoCard {
  icon: typeof MapPin;
  iconClass: string;
  label: string;
  content: string;
}

const infoCards: InfoCard[] = [
  {
    icon: MapPin,
    iconClass: 'lucide lucide-map-pin',
    label: 'Endereço',
    content: 'R. Nações Unidas, 10 - Jardim dos Estados\nVárzea Grande - MT, 78158-068',
  },
  {
    icon: Clock,
    iconClass: 'lucide lucide-clock',
    label: 'Horário',
    content: 'Seg. a Sex.\n07:30–11:30 / 13:00–17:30',
  },
  {
    icon: Phone,
    iconClass: 'lucide lucide-phone',
    label: 'Telefones',
    content: '(65) 3694-1080\n(65) 9 9916-4429',
  },
  {
    icon: Mail,
    iconClass: 'lucide lucide-mail',
    label: 'E-mail',
    content: 'estopasmadri@gmail.com',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${form.name}.\nTelefone: ${form.phone}\n\n${form.message}`;
    window.open(
      `http://wa.me/556599164429?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section id="contato" className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#E93235]/10 text-[#E93235] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
            Fale Conosco
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black mb-5">
            Entre em <span className="text-[#E93235]">contato</span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
            Solicite um orçamento, tire dúvidas ou conheça mais sobre nossos produtos. Respondemos
            rapidamente!
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 transition-all duration-700 opacity-0 translate-y-12">
          <div>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Nome completo</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Seu nome"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border-2 border-gray-200 focus:border-[#E93235] rounded-xl px-4 py-3.5 text-sm text-gray-800 outline-none transition-colors duration-200 placeholder-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Telefone / WhatsApp
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="(65) 9 0000-0000"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full border-2 border-gray-200 focus:border-[#E93235] rounded-xl px-4 py-3.5 text-sm text-gray-800 outline-none transition-colors duration-200 placeholder-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Mensagem</label>
                <textarea
                  name="message"
                  required
                  placeholder="Descreva o que você precisa..."
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full border-2 border-gray-200 focus:border-[#E93235] rounded-xl px-4 py-3.5 text-sm text-gray-800 outline-none transition-colors duration-200 placeholder-gray-400 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-[#E93235] hover:bg-[#CC1F22] text-white font-bold py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-[#E93235]/30 text-base"
              >
                <WhatsAppIcon className="w-5 h-5 fill-current flex-shrink-0" />
                Enviar via WhatsApp
                <Send width={16} height={16} className="lucide lucide-send" />
              </button>
              <p className="text-center text-xs text-gray-400">
                Ao enviar, você será redirecionado para o WhatsApp com sua mensagem pré-preenchida.
              </p>
            </form>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {infoCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.label}
                    className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-[#E93235]/30 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-[#E93235]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon
                          width={16}
                          height={16}
                          className={`${card.iconClass} text-[#E93235]`}
                        />
                      </div>
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                        {card.label}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                      {card.content}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="rounded-2xl overflow-hidden border border-gray-200 flex-1 min-h-[260px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3842.1063657227983!2d-56.174598124873135!3d-15.63932338497955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939dadc5f20a43af%3A0xc4e5601dd0a162f7!2sESTOPAS%20MADRI!5e0!3m2!1spt-BR!2sbr!4v1773333022032!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Estopas Madri"
                style={{ border: '0px', minHeight: '260px' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

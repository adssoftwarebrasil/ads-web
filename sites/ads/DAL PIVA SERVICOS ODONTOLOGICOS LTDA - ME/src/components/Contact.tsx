import { useState, FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  service: string;
  message: string;
}

const services = [
  'Facetas / Lentes de Contato',
  'Implante Dentário',
  'Clareamento Dental',
  'Ortodontia / Aparelho',
  'Odontopediatria',
  'Prótese Dentária',
  'Tratamento de Canal',
  'Limpeza / Profilaxia',
  'Outro',
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const msg = `Olá, Dra. Rafaella! Me chamo *${formData.name}* e tenho interesse em *${formData.service || 'uma consulta'}*.${formData.phone ? `\nMeu telefone: ${formData.phone}.` : ''}${formData.message ? `\n\n${formData.message}` : ''}`;
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/556592693908?text=${encoded}`, '_blank');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-[#098b90] text-sm font-semibold tracking-widest uppercase mb-3">
            Entre em Contato
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
            Pronto para transformar{' '}
            <span className="text-[#a4376e]">seu sorriso?</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Agende sua avaliação gratuita e dê o primeiro passo rumo ao sorriso que você sempre sonhou.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: MapPin,
                  title: 'Endereço',
                  content: 'Av. Brasil, 25 – Bairro Cristo Rei\nVárzea Grande – MT, 78117-030',
                  color: 'text-[#a4376e]',
                  bg: 'bg-[#a4376e]/10',
                },
                {
                  icon: Phone,
                  title: 'WhatsApp',
                  content: '(65) 9 9269-3908',
                  color: 'text-[#098b90]',
                  bg: 'bg-[#098b90]/10',
                  href: 'http://wa.me/556592693908',
                },
                {
                  icon: Mail,
                  title: 'E-mail',
                  content: 'rafaelladentista1984\n@hotmail.com',
                  color: 'text-[#a4376e]',
                  bg: 'bg-[#a4376e]/10',
                  href: 'mailto:rafaelladentista1984@hotmail.com',
                },
                {
                  icon: Clock,
                  title: 'Horários',
                  content: 'Seg–Sex: 08:00–11:00\n14:00–18:00 | Sáb: 08:00–11:00',
                  color: 'text-[#098b90]',
                  bg: 'bg-[#098b90]/10',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-[#a4376e]/20 hover:shadow-md transition-all duration-200"
                >
                  <div className={`w-10 h-10 ${item.bg} rounded-xl flex items-center justify-center mb-3`}>
                    <item.icon size={18} className={item.color} />
                  </div>
                  <p className="text-xs font-semibold text-gray-900 mb-1">{item.title}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-xs ${item.color} whitespace-pre-line leading-relaxed font-medium hover:underline`}
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-xs text-gray-500 whitespace-pre-line leading-relaxed">
                      {item.content}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex-1 min-h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30733.53654653369!2d-56.11426468551796!3d-15.661377737453853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939dafc2ef3a4349%3A0xd413a287b8373f09!2sDentista%20em%20V%C3%A1rzea%20Grande%20%7C%20Dra.%20Rafaella%20Dal%20Piva%20%7C%20Ortodontia%20%7C%20Implante%20%7C%20Pr%C3%B3tese%20%7C%20Clareamento%20%7C%20Odontopediatria!5e0!3m2!1spt-BR!2sbr!4v1774872373529!5m2!1spt-BR!2sbr"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da clínica"
              />
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Agendar Avaliação Gratuita</h3>
            <p className="text-gray-500 text-sm mb-8">
              Preencha o formulário e entraremos em contato pelo WhatsApp para confirmar seu horário.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Seu nome *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Como podemos te chamar?"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#a4376e]/30 focus:border-[#a4376e] transition-all text-sm"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                  WhatsApp
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(65) 9 9999-9999"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#a4376e]/30 focus:border-[#a4376e] transition-all text-sm"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Tratamento de interesse *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#a4376e]/30 focus:border-[#a4376e] transition-all text-sm appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    Selecione um tratamento
                  </option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Mensagem (opcional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Alguma dúvida ou informação adicional?"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#a4376e]/30 focus:border-[#a4376e] transition-all text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#a4376e] text-white py-4 rounded-xl font-bold hover:bg-[#8e2d5e] transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 mt-2"
              >
                <Send size={18} />
                Enviar pelo WhatsApp
              </button>

              <p className="text-center text-xs text-gray-400">
                Você será redirecionado para o WhatsApp com sua mensagem pré-preenchida.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

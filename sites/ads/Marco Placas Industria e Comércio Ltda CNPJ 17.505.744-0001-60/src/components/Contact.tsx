import { useState, FormEvent } from 'react';
import { Phone, MapPin, Mail, Clock, Facebook, Instagram } from 'lucide-react';

const projectTypes: string[] = [
  'Sinalização Interna',
  'Sinalização Externa',
  'Painéis em ACM',
  'Letreiros e Luminosos',
  'Placas de Homenagem/Inauguração',
  'Outros',
];

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [projectType, setProjectType] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text =
      `Olá! Vim do site e gostaria de solicitar um orçamento.\n\n` +
      `*Nome:* ${name}\n` +
      `*E-mail:* ${email}\n` +
      `*Telefone/WhatsApp:* ${phone}\n` +
      `*Empresa:* ${company}\n` +
      `*Tipo de Projeto:* ${projectType}\n` +
      `*Mensagem:* ${message}`;
    window.open(
      `https://wa.me/5531999749902?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section id="contato" className="py-20 md:py-28 px-5 md:px-10 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(3,0,0)] mb-4 transition-all duration-1000 opacity-100 translate-y-0">
            Solicite seu Orçamento Gratuito
          </h2>
          <p className="text-gray-700 text-lg md:text-xl transition-all duration-1000 delay-200 opacity-100 translate-y-0">
            Responderemos em até 24 horas úteis
          </p>
        </div>
        <div className="grid lg:grid-cols-[1.5fr,1fr] gap-12">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 transition-all duration-1000 opacity-100 translate-x-0"
          >
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Nome Completo *
              </label>
              <input
                type="text"
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(167,28,31)] transition-all"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                E-mail *
              </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(167,28,31)] transition-all"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                Telefone/WhatsApp *
              </label>
              <input
                type="tel"
                id="phone"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(167,28,31)] transition-all"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
                Empresa
              </label>
              <input
                type="text"
                id="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(167,28,31)] transition-all"
              />
            </div>
            <div>
              <label htmlFor="projectType" className="block text-gray-700 font-medium mb-2">
                Tipo de Projeto *
              </label>
              <select
                id="projectType"
                required
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(167,28,31)] transition-all"
              >
                <option value="">Selecione uma opção</option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Mensagem *
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(167,28,31)] transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[rgb(167,28,31)] text-white px-8 py-4 rounded-md hover:bg-[rgb(120,20,22)] transition-all hover:scale-[1.02] font-semibold text-lg shadow-lg flex items-center justify-center gap-3"
            >
              <Phone className="lucide lucide-phone" width={24} height={24} />
              Enviar Orçamento via WhatsApp
            </button>
          </form>
          <div className="space-y-8 transition-all duration-1000 delay-300 opacity-100 translate-x-0">
            <div className="bg-[rgb(240,240,240)] p-6 rounded-lg">
              <div className="flex items-start gap-4 mb-6">
                <MapPin
                  className="lucide lucide-map-pin w-6 h-6 text-[rgb(167,28,31)] flex-shrink-0 mt-1"
                  width={24}
                  height={24}
                />
                <div>
                  <h3 className="font-semibold text-[rgb(3,0,0)] mb-2 text-lg">Endereço</h3>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Av.+do+Contorno,+2447+-+Floresta,+Belo+Horizonte+-+MG,+30110-070"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-[rgb(167,28,31)] transition-colors block leading-relaxed"
                  >
                    Av. do Contorno, 2447 - Floresta,
                    <br />
                    Belo Horizonte - MG, 30110-070
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-6">
                <Mail
                  className="lucide lucide-mail w-6 h-6 text-[rgb(167,28,31)] flex-shrink-0 mt-1"
                  width={24}
                  height={24}
                />
                <div>
                  <h3 className="font-semibold text-[rgb(3,0,0)] mb-2 text-lg">E-mail</h3>
                  <a
                    href="mailto:marcoplacas@yahoo.com.br"
                    className="text-gray-700 hover:text-[rgb(167,28,31)] transition-colors"
                  >
                    marcoplacas@yahoo.com.br
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-6">
                <Phone
                  className="lucide lucide-phone w-6 h-6 text-[rgb(167,28,31)] flex-shrink-0 mt-1"
                  width={24}
                  height={24}
                />
                <div>
                  <h3 className="font-semibold text-[rgb(3,0,0)] mb-2 text-lg">WhatsApp</h3>
                  <a
                    href="https://wa.me/5531999749902"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-[rgb(167,28,31)] transition-colors"
                  >
                    (31) 99974-9902
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock
                  className="lucide lucide-clock w-6 h-6 text-[rgb(167,28,31)] flex-shrink-0 mt-1"
                  width={24}
                  height={24}
                />
                <div>
                  <h3 className="font-semibold text-[rgb(3,0,0)] mb-2 text-lg">
                    Horário de Atendimento
                  </h3>
                  <p className="text-gray-700">Segunda a Sexta</p>
                  <p className="text-gray-700">8h às 18h</p>
                </div>
              </div>
            </div>
            <div className="bg-[rgb(240,240,240)] p-6 rounded-lg">
              <h3 className="font-semibold text-[rgb(3,0,0)] mb-4 text-lg">Redes Sociais</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/marcoplacasbh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[rgb(167,28,31)] rounded-full flex items-center justify-center text-white hover:bg-[rgb(120,20,22)] transition-all hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="lucide lucide-facebook" width={24} height={24} />
                </a>
                <a
                  href="https://www.instagram.com/marcoplacasbh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[rgb(167,28,31)] rounded-full flex items-center justify-center text-white hover:bg-[rgb(120,20,22)] transition-all hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="lucide lucide-instagram" width={24} height={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

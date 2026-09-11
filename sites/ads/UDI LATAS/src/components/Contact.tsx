import { useState } from 'react';
import { MapPin, Phone, Clock, Facebook, Instagram } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message =
      `Olá! Meu nome é ${form.name}.\n` +
      `Telefone: ${form.phone}\n` +
      (form.email ? `E-mail: ${form.email}\n` : '') +
      `\n${form.message}`;
    window.open(`https://wa.me/553488692793?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#F2CD00] text-[#28156F] px-4 py-2 rounded-full font-semibold text-sm mb-4">
            Entre em Contato
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#28156F] mb-6">Estamos Prontos para Atender Você</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Precisa de autopeças? Nossa equipe está pronta para ajudar você a encontrar exatamente o que precisa.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-[#28156F] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#F2CD00] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#28156F]" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Endereço</div>
                    <div className="text-gray-200">
                      Av. Paulo Roberto Cunha Santos, 1485<br />
                      Pres. Roosevelt, Uberlândia - MG<br />
                      CEP: 38401-117
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#F2CD00] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#28156F]" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Telefone</div>
                    <a href="tel:+553432364573" className="text-gray-200 hover:text-[#F2CD00] transition-colors">
                      (34) 3236-4573
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#F2CD00] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#28156F]" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Horário de Funcionamento</div>
                    <div className="text-gray-200">
                      Segunda a Sexta: 08:00 - 18:00<br />
                      Sábado e Domingo: Fechado
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="font-semibold mb-4">Redes Sociais</div>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/udilatas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#F2CD00] w-12 h-12 rounded-lg flex items-center justify-center hover:bg-white transition-all hover:scale-110"
                  >
                    <Facebook className="w-6 h-6 text-[#28156F]" />
                  </a>
                  <a
                    href="https://www.instagram.com/udilatas/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#F2CD00] w-12 h-12 rounded-lg flex items-center justify-center hover:bg-white transition-all hover:scale-110"
                  >
                    <Instagram className="w-6 h-6 text-[#28156F]" />
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.60753534102!2d-48.293154424799!3d-18.90448438226512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a4443878dde367%3A0x481b729d5c1e6202!2sUdi%20Latas!5e0!3m2!1spt-BR!2sbr!4v1767791514902!5m2!1spt-BR!2sbr"
                width="100%"
                height="300"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Udi Latas"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#28156F] mb-6">Envie uma Mensagem</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#28156F] mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#F2CD00] focus:outline-none transition-colors"
                  placeholder="Digite seu nome"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-[#28156F] mb-2">
                  Telefone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#F2CD00] focus:outline-none transition-colors"
                  placeholder="(34) 9 9999-9999"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#28156F] mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#F2CD00] focus:outline-none transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#28156F] mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#F2CD00] focus:outline-none transition-colors resize-none"
                  placeholder="Descreva qual peça você está procurando..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#28156F] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#F2CD00] hover:text-[#28156F] transition-all duration-300 hover:scale-105 shadow-xl"
              >
                Enviar via WhatsApp
              </button>
              <p className="text-sm text-gray-500 text-center">
                Ao enviar, você será redirecionado para o WhatsApp com sua mensagem pré-preenchida
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

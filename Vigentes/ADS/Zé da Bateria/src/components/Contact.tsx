import { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    whatsapp: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text =
      `Olá! Meu nome é ${form.name}.%0A%0A` +
      `WhatsApp: ${form.whatsapp}%0A` +
      `E-mail: ${form.email}%0A` +
      `Assunto: ${form.subject}%0A%0A` +
      `${form.message}`;
    window.open(
      `https://wa.me/556384458064?text=${encodeURIComponent(
        text.replace(/%0A/g, '\n')
      )}`,
      '_blank'
    );
  };

  return (
    <section id="contato" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-[rgb(233,155,29)] font-bold text-sm uppercase tracking-wider">
            Contato
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mt-2 mb-4">
            Dúvidas ou sugestões
          </h2>
          <p className="text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto">
            Entre em contato, a nossa equipe está pronta para te atender!
          </p>
          <div className="w-20 h-1 bg-[rgb(233,155,29)] rounded-full mx-auto mt-4"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          <div>
            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-black mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[rgb(233,155,29)] p-3 rounded-lg flex-shrink-0">
                    <Phone size={24} className="text-black" />
                  </div>
                  <div>
                    <div className="font-semibold text-black mb-1">Telefone</div>
                    <a
                      href="tel:+556384458064"
                      className="text-gray-600 hover:text-[rgb(233,155,29)] transition-colors duration-300"
                    >
                      (63) 98445-8064
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[rgb(233,155,29)] p-3 rounded-lg flex-shrink-0">
                    <Mail size={24} className="text-black" />
                  </div>
                  <div>
                    <div className="font-semibold text-black mb-1">E-mail</div>
                    <a
                      href="mailto:contato@zedasbaterias.com.br"
                      className="text-gray-600 hover:text-[rgb(233,155,29)] transition-colors duration-300 break-all"
                    >
                      contato@zedasbaterias.com.br
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[rgb(233,155,29)] p-3 rounded-lg flex-shrink-0">
                    <MapPin size={24} className="text-black" />
                  </div>
                  <div>
                    <div className="font-semibold text-black mb-1">Endereço</div>
                    <p className="text-gray-600">
                      Esquina com - Rua f, R. Quatro, 2<br />
                      Waldir Lins I, Gurupi - TO<br />
                      CEP: 77423-040
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3906.339552272318!2d-49.088259624943525!3d-11.741112088472471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x933e95c79d4daa3b%3A0x77cbe1d326d5ed25!2sZ%C3%A9%20da%20Bateria!5e0!3m2!1spt-BR!2sbr!4v1765936524480!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Zé da Bateria"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8">
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-black font-semibold mb-2"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[rgb(233,155,29)] focus:ring-2 focus:ring-[rgb(233,155,29)]/20 outline-none transition-all duration-300"
                  placeholder="Seu nome completo"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="whatsapp"
                  className="block text-black font-semibold mb-2"
                >
                  WhatsApp
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  required
                  value={form.whatsapp}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[rgb(233,155,29)] focus:ring-2 focus:ring-[rgb(233,155,29)]/20 outline-none transition-all duration-300"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-black font-semibold mb-2"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[rgb(233,155,29)] focus:ring-2 focus:ring-[rgb(233,155,29)]/20 outline-none transition-all duration-300"
                  placeholder="seu@email.com"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-black font-semibold mb-2"
                >
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[rgb(233,155,29)] focus:ring-2 focus:ring-[rgb(233,155,29)]/20 outline-none transition-all duration-300"
                  placeholder="Qual o motivo do contato?"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-black font-semibold mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[rgb(233,155,29)] focus:ring-2 focus:ring-[rgb(233,155,29)]/20 outline-none transition-all duration-300 resize-none"
                  placeholder="Escreva sua mensagem..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[rgb(233,155,29)] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[rgb(213,135,9)] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Enviar via WhatsApp</span>
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

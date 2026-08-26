import { useState, FormEvent } from 'react';
import { Send, MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${form.name}.
E-mail: ${form.email}
Telefone: ${form.phone}
Empresa: ${form.company}
Mensagem: ${form.message}`;
    window.open(
      `https://wa.me/5566999215475?text=${encodeURIComponent(text)}`,
      '_blank'
    );
  };

  return (
    <section
      id="contato"
      className="py-12 md:py-20 bg-gray-50 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-[rgb(245,134,52)]/10 rounded-full">
              <span className="text-[rgb(245,134,52)] font-semibold text-sm">
                FALE CONOSCO
              </span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-[rgb(47,55,56)] mb-4 md:mb-6">
              Entre em Contato e Transforme Sua Gestão Tributária
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Preencha o formulário e nossa equipe entrará em contato para
              entender suas necessidades e apresentar as melhores soluções.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            <div>
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-xl"
              >
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-[rgb(47,55,56)] mb-2"
                    >
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(245,134,52)] focus:outline-none transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-[rgb(47,55,56)] mb-2"
                    >
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(245,134,52)] focus:outline-none transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-[rgb(47,55,56)] mb-2"
                    >
                      Telefone/WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(245,134,52)] focus:outline-none transition-colors"
                      placeholder="(66) 99999-9999"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-semibold text-[rgb(47,55,56)] mb-2"
                    >
                      Nome da Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(245,134,52)] focus:outline-none transition-colors"
                      placeholder="Sua empresa"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-[rgb(47,55,56)] mb-2"
                    >
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(245,134,52)] focus:outline-none transition-colors resize-none"
                      placeholder="Como podemos ajudar?"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[rgb(245,134,52)] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[rgb(225,114,32)] transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg active:scale-95"
                  >
                    Enviar Mensagem
                    <Send size={20} />
                  </button>
                  <p className="text-xs md:text-sm text-gray-500 text-center">
                    Ao enviar, você será redirecionado para o WhatsApp com suas
                    informações preenchidas.
                  </p>
                </div>
              </form>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
                <h3 className="text-xl md:text-2xl font-bold text-[rgb(47,55,56)] mb-6">
                  Informações de Contato
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[rgb(245,134,52)]/10 p-3 rounded-lg flex-shrink-0">
                      <MapPin size={24} className="text-[rgb(245,134,52)]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[rgb(47,55,56)] mb-1">
                        Endereço
                      </h4>
                      <p className="text-gray-600 text-sm md:text-base">
                        Av. Maringá, 1819 - Jardim Rondônia
                        <br />
                        Rondonópolis - MT, 78730-502
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[rgb(245,134,52)]/10 p-3 rounded-lg flex-shrink-0">
                      <Phone size={24} className="text-[rgb(245,134,52)]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[rgb(47,55,56)] mb-1">
                        Telefones
                      </h4>
                      <div className="text-gray-600 text-sm md:text-base">
                        <p>(66) 3423-3245</p>
                        <p>(66) 9 9979-0844 (WhatsApp)</p>
                        <p>(66) 9 9921-5475 (WhatsApp)</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[rgb(245,134,52)]/10 p-3 rounded-lg flex-shrink-0">
                      <Mail size={24} className="text-[rgb(245,134,52)]" />
                    </div>
                    <div className="w-full overflow-hidden">
                      <h4 className="font-semibold text-[rgb(47,55,56)] mb-1">
                        E-mail
                      </h4>
                      <p className="text-gray-600 text-sm md:text-base break-all">
                        solucoes.contabileassessoria@hotmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[rgb(245,134,52)]/10 p-3 rounded-lg flex-shrink-0">
                      <Clock size={24} className="text-[rgb(245,134,52)]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[rgb(47,55,56)] mb-1">
                        Horário
                      </h4>
                      <p className="text-gray-600 text-sm md:text-base">
                        Segunda a Sexta
                        <br />
                        07:00 - 11:00 / 13:00 - 17:00
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[rgb(245,134,52)]/10 p-3 rounded-lg flex-shrink-0">
                      <Instagram size={24} className="text-[rgb(245,134,52)]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[rgb(47,55,56)] mb-1">
                        Redes Sociais
                      </h4>
                      <a
                        href="https://www.instagram.com/solucoescontabeismt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[rgb(245,134,52)] hover:underline text-sm md:text-base"
                      >
                        @solucoescontabeismt
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[rgb(245,134,52)] to-[rgb(225,114,32)] rounded-2xl p-6 md:p-8 text-white shadow-xl">
                <h3 className="text-xl font-bold mb-3">Atendimento Presencial</h3>
                <p className="text-white/90 mb-4 text-sm md:text-base">
                  Visite nosso escritório em Rondonópolis e conheça nossa
                  estrutura. Agende sua visita pelo WhatsApp!
                </p>
                <a
                  href="https://wa.me/5566999215475?text=Olá! Gostaria de agendar uma visita ao escritório."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-[rgb(245,134,52)] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all text-center w-full md:w-auto"
                >
                  Agendar Visita
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl h-[300px] md:h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3840.4037596000000!2d-54.6!3d-16.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9370333333333333%3A0x3333333333333333!2sAv.%20Maring%C3%A1%2C%201819%20-%20Jardim%20Rond%C3%B4nia%2C%20Rondon%C3%B3polis%20-%20MT%2C%2078730-502!5e0!3m2!1spt-BR!2sbr!4v1600000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                style={{ border: '0px' }}
                title="Mapa"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

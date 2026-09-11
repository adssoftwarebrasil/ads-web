import { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, Instagram, Send } from 'lucide-react';

const WHATSAPP_NUMBER = '5599982501000';

export default function Contato() {
  const [form, setForm] = useState({
    name: '',
    whatsapp: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const texto =
      `Olá! Gostaria de entrar em contato.\n\n` +
      `*Nome:* ${form.name}\n` +
      `*WhatsApp:* ${form.whatsapp}\n` +
      `*Email:* ${form.email}\n` +
      `*Assunto:* ${form.subject}\n` +
      `*Mensagem:* ${form.message}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      texto
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[rgb(13,51,98)] mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para atender você. Agende sua consulta agora mesmo!
          </p>
        </div>
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gradient-to-br from-[rgb(13,51,98)] to-[rgb(100,149,237)] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <a
                  href="tel:+5599982501000"
                  className="flex items-start space-x-4 hover:opacity-80 transition-opacity"
                >
                  <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm flex-shrink-0">
                    <Phone className="lucide lucide-phone w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-white/80 mb-1">Telefone</div>
                    <div className="font-semibold">(99) 98250-1000</div>
                  </div>
                </a>
                <a
                  href="mailto:contato@sorrisoimperatriz.com.br"
                  className="flex items-start space-x-4 hover:opacity-80 transition-opacity"
                >
                  <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm flex-shrink-0">
                    <Mail className="lucide lucide-mail w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-white/80 mb-1">Email</div>
                    <div className="font-semibold">
                      contato@sorrisoimperatriz.com.br
                    </div>
                  </div>
                </a>
                <a
                  href="https://maps.google.com/?q=Rua+Pará+616+Imperatriz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 hover:opacity-80 transition-opacity"
                >
                  <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm flex-shrink-0">
                    <MapPin className="lucide lucide-map-pin w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-white/80 mb-1">Endereço</div>
                    <div className="font-semibold">
                      Rua Pará 616, Esquina com a Rua Luiz Domingues
                    </div>
                  </div>
                </a>
                <a
                  href="https://instagram.com/clinicasorrisoimperatriz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 hover:opacity-80 transition-opacity"
                >
                  <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm flex-shrink-0">
                    <Instagram className="lucide lucide-instagram w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-white/80 mb-1">Instagram</div>
                    <div className="font-semibold">
                      @clinicasorrisoimperatriz
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-[rgb(13,51,98)] mb-4">
                Horário de Atendimento
              </h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Segunda a Sexta:</span>
                  <span className="font-semibold">8h às 18h</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado:</span>
                  <span className="font-semibold">8h às 12h</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo:</span>
                  <span className="font-semibold">Fechado</span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-[rgb(13,51,98)] mb-6">
                Envie Sua Mensagem
              </h3>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(100,149,237)] focus:border-transparent transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="whatsapp"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      required
                      value={form.whatsapp}
                      onChange={(e) =>
                        setForm({ ...form, whatsapp: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(100,149,237)] focus:border-transparent transition-all"
                      placeholder="(99) 99999-9999"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(100,149,237)] focus:border-transparent transition-all"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Assunto *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={(e) =>
                      setForm({ ...form, subject: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(100,149,237)] focus:border-transparent transition-all"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="Avaliação Gratuita">Avaliação Gratuita</option>
                    <option value="Invisalign">Invisalign</option>
                    <option value="Implantes">Implantes Dentários</option>
                    <option value="Lentes de Contato">Lentes de Contato</option>
                    <option value="Ortodontia">Ortodontia</option>
                    <option value="Outros">Outros</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(100,149,237)] focus:border-transparent transition-all resize-none"
                    placeholder="Descreva como podemos ajudar você..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[rgb(212,175,55)] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:brightness-110 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2"
                >
                  <Send className="lucide lucide-send w-5 h-5" />
                  <span>Enviar Mensagem Via WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

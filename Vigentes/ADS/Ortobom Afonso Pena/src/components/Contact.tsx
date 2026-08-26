import { useState } from 'react';
import type { FormEvent } from 'react';
import { MapPin, Phone, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${name}. Telefone: ${phone}. ${message}`;
    const url = `https://wa.me/553492322203?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para atender você e encontrar a solução perfeita
            para o seu descanso
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Informações de Contato
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                <div className="bg-[rgb(0,0,160)] p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Endereço</h4>
                  <p className="text-gray-600">Av. Afonso Pena, 1367</p>
                  <p className="text-gray-600">Bairro Nossa Senhora Aparecida</p>
                  <p className="text-gray-600">Uberlândia - MG</p>
                  <a
                    href="https://maps.google.com/?q=Av.+Afonso+Pena+1367+Uberlandia+MG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[rgb(0,0,160)] hover:underline font-medium mt-2 inline-block"
                  >
                    Ver no Mapa →
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                <div className="bg-green-500 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Telefones</h4>
                  <a
                    href="tel:3432362803"
                    className="text-gray-600 hover:text-[rgb(0,0,160)] block"
                  >
                    (34) 3236-2803
                  </a>
                  <a
                    href="https://wa.me/553492322203"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 font-semibold block mt-1"
                  >
                    (34) 99232-2203 (WhatsApp)
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                <div className="bg-blue-500 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">
                    Horário de Funcionamento
                  </h4>
                  <p className="text-gray-600">Segunda a Sexta: 08h às 18h</p>
                  <p className="text-gray-600">Sábado: 08h às 14h</p>
                  <p className="text-gray-500 text-sm mt-2">
                    Domingo: Fechado
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 p-6 bg-gradient-to-br from-[rgb(0,0,160)] to-[rgb(0,0,200)] rounded-xl text-white">
              <h4 className="font-bold text-xl mb-3">
                Atendemos Toda Uberlândia e Região
              </h4>
              <p className="opacity-90">
                Entrega rápida e garantida para toda a cidade de Uberlândia e
                regiões próximas. Entre em contato e consulte disponibilidade
                para sua região.
              </p>
            </div>
          </div>
          <div>
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Envie uma Mensagem
              </h3>
              <p className="text-gray-600 mb-6">
                Preencha o formulário e entraremos em contato via WhatsApp
              </p>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[rgb(0,0,160)] focus:outline-none transition-colors"
                    placeholder="Digite seu nome completo"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Telefone/WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[rgb(0,0,160)] focus:outline-none transition-colors"
                    placeholder="(34) 99999-9999"
                  />
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
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[rgb(0,0,160)] focus:outline-none transition-colors resize-none"
                    placeholder="Como podemos ajudar você?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Enviar via WhatsApp
                </button>
                <p className="text-sm text-gray-500 text-center">
                  Ao enviar, você será redirecionado para o WhatsApp com sua
                  mensagem preenchida
                </p>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-16 rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.8842089376847!2d-48.2775!3d-18.9186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU1JzA3LjAiUyA0OMKwMTYnMzkuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Colchões Ortobom Afonso Pena"
            style={{ border: '0px' }}
          ></iframe>
        </div>
      </div>
    </section>
  );
}

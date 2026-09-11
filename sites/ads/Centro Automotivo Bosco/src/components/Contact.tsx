import { useState, type FormEvent } from 'react';
import { User, Phone, Car, MessageSquare, Send } from 'lucide-react';
import { PHONE_TEL } from '../constants';

const WHATSAPP_NUMBER = '558588939362';

const reasons = [
  {
    num: '1',
    title: 'Experiência Comprovada',
    text: 'Mais de 20 anos cuidando de veículos em Fortaleza com excelência.',
  },
  {
    num: '2',
    title: 'Equipamentos Modernos',
    text: 'Tecnologia de ponta para diagnóstico preciso e manutenção de qualidade.',
  },
  {
    num: '3',
    title: 'Transparência Total',
    text: 'Orçamentos claros e honestos, sem surpresas desagradáveis.',
  },
  {
    num: '4',
    title: 'Garantia nos Serviços',
    text: 'Todos os nossos serviços são garantidos pela nossa reputação.',
  },
];

function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', vehicle: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Olá! Gostaria de agendar um serviço.%0A%0A*Nome:* ${form.name}%0A*Telefone:* ${form.phone}%0A*Veículo:* ${form.vehicle}%0A*Serviço:* ${form.message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="bg-[rgb(204,53,49)]/10 text-[rgb(204,53,49)] px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
            Contato
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(10,33,75)] mb-6">
            Agende seu Serviço Agora
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Preencha o formulário abaixo e entraremos em contato via WhatsApp para confirmar seu
            agendamento.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-[rgb(10,33,75)] mb-6">
                  Por Que Escolher o Centro Automotivo Bosco?
                </h3>
                <div className="space-y-4">
                  {reasons.map((r) => (
                    <div key={r.num} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-[rgb(204,53,49)] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold">{r.num}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-[rgb(10,33,75)] mb-1">{r.title}</h4>
                        <p className="text-gray-600">{r.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-[rgb(10,33,75)] to-[rgb(20,43,85)] p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-4">Atendimento Rápido</h3>
                <p className="text-gray-300 mb-6">
                  Precisa de atendimento urgente? Entre em contato diretamente pelos nossos canais.
                </p>
                <div className="space-y-3">
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="block w-full bg-white text-[rgb(10,33,75)] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 text-center"
                  >
                    Ligar: (85) 3472-4371
                  </a>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[rgb(204,53,49)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[rgb(184,43,39)] transition-all duration-200 text-center"
                  >
                    WhatsApp: (85) 98893-9362
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="flex items-center space-x-2 text-[rgb(10,33,75)] font-semibold mb-2"
                  >
                    <User className="w-5 h-5 text-[rgb(204,53,49)]" />
                    <span>Nome Completo</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Digite seu nome"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(204,53,49)] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="flex items-center space-x-2 text-[rgb(10,33,75)] font-semibold mb-2"
                  >
                    <Phone className="w-5 h-5 text-[rgb(204,53,49)]" />
                    <span>Telefone</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="(85) 99999-9999"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(204,53,49)] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="vehicle"
                    className="flex items-center space-x-2 text-[rgb(10,33,75)] font-semibold mb-2"
                  >
                    <Car className="w-5 h-5 text-[rgb(204,53,49)]" />
                    <span>Veículo (Marca/Modelo)</span>
                  </label>
                  <input
                    type="text"
                    id="vehicle"
                    name="vehicle"
                    required
                    placeholder="Ex: Honda Civic 2020"
                    value={form.vehicle}
                    onChange={(e) => setForm({ ...form, vehicle: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(204,53,49)] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="flex items-center space-x-2 text-[rgb(10,33,75)] font-semibold mb-2"
                  >
                    <MessageSquare className="w-5 h-5 text-[rgb(204,53,49)]" />
                    <span>Qual serviço você precisa?</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Descreva o serviço que você precisa..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(204,53,49)] focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[rgb(204,53,49)] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[rgb(184,43,39)] transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2 transform hover:scale-105"
                >
                  <span>Enviar pelo WhatsApp</span>
                  <Send className="w-5 h-5" />
                </button>
                <p className="text-sm text-gray-500 text-center">
                  Ao clicar em enviar, você será redirecionado para o WhatsApp
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

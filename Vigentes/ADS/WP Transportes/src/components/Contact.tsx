import { useState } from 'react';
import { User, Phone, Mail, MapPin, Calendar, Users, MessageSquare, Clock } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  city: string;
  date: string;
  passengers: string;
  message: string;
}

const initialData: FormData = {
  name: '',
  phone: '',
  email: '',
  service: '',
  city: '',
  date: '',
  passengers: '',
  message: '',
};

const services = [
  'Fretamento Empresarial',
  'Viagens e Turismo',
  'Transporte Escolar',
  'Aluguel de Ônibus',
  'Receptivos',
  'Translados',
];

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `Olá! Gostaria de solicitar um orçamento.\n\n`;
    text += `*Nome:* ${form.name}\n`;
    text += `*Telefone:* ${form.phone}\n`;
    text += `*E-mail:* ${form.email}\n`;
    text += `*Serviço:* ${form.service}\n`;
    if (form.city) text += `*Cidade de Origem:* ${form.city}\n`;
    if (form.date) text += `*Data Desejada:* ${form.date}\n`;
    if (form.passengers) text += `*Número de Passageiros:* ${form.passengers}\n`;
    if (form.message) text += `*Mensagem:* ${form.message}\n`;
    const url = `https://wa.me/557981183939?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="sticky top-24">
              <div className="mb-8">
                <span className="inline-block bg-[rgb(245,131,31)]/10 text-[rgb(245,131,31)] px-4 py-2 rounded-full text-sm font-medium mb-4">
                  Contato
                </span>
                <h2 className="text-4xl font-bold text-[rgb(36,31,33)] mb-4">
                  Solicite um Orçamento
                </h2>
                <p className="text-lg text-[rgb(51,51,51)]">Responderemos em até 30 minutos</p>
              </div>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-[rgb(36,31,33)] mb-2">
                    Nome Completo *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(245,131,31)] focus:border-transparent outline-none transition"
                      placeholder="Seu nome"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[rgb(36,31,33)] mb-2">
                    Telefone/WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(245,131,31)] focus:border-transparent outline-none transition"
                      placeholder="(79) 98118-3939"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[rgb(36,31,33)] mb-2">
                    E-mail *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(245,131,31)] focus:border-transparent outline-none transition"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[rgb(36,31,33)] mb-2">
                    Tipo de Serviço *
                  </label>
                  <select
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(245,131,31)] focus:border-transparent outline-none transition"
                  >
                    <option value="">Selecione um serviço</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[rgb(36,31,33)] mb-2">
                      Cidade de Origem
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="city"
                        value={form.city}
                        onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(245,131,31)] focus:border-transparent outline-none transition"
                        placeholder="Aracaju"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[rgb(36,31,33)] mb-2">
                      Data Desejada
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(245,131,31)] focus:border-transparent outline-none transition"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[rgb(36,31,33)] mb-2">
                    Número de Passageiros
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      name="passengers"
                      min="1"
                      value={form.passengers}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(245,131,31)] focus:border-transparent outline-none transition"
                      placeholder="20"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[rgb(36,31,33)] mb-2">
                    Mensagem (Opcional)
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <textarea
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(245,131,31)] focus:border-transparent outline-none transition resize-none"
                      placeholder="Informações adicionais..."
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[rgb(245,131,31)] hover:bg-[rgb(220,110,20)] text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>Enviar Solicitação via WhatsApp</span>
                </button>
              </form>
              <div className="mt-8 pt-8 border-t border-gray-200 space-y-4">
                <div className="flex items-center space-x-3 text-[rgb(51,51,51)]">
                  <Phone className="w-5 h-5 text-[rgb(245,131,31)]" />
                  <a href="tel:+5579981183939" className="hover:text-[rgb(245,131,31)]">
                    (79) 98118-3939
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-[rgb(51,51,51)]">
                  <Mail className="w-5 h-5 text-[rgb(245,131,31)]" />
                  <a
                    href="mailto:wptransportes.se@gmail.com"
                    className="hover:text-[rgb(245,131,31)]"
                  >
                    wptransportes.se@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-[rgb(51,51,51)]">
                  <Clock className="w-5 h-5 text-[rgb(245,131,31)]" />
                  <span>Atendimento 24 horas</span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.5!2d-37.08!3d-10.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDU1JzQ4LjAiUyAzN8KwMDQnNDguMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização WP Transportes"
                style={{ border: '0px' }}
              ></iframe>
              <div className="absolute bottom-8 left-8 bg-white rounded-2xl p-6 shadow-2xl max-w-sm">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[rgb(245,131,31)] rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[rgb(36,31,33)] mb-2">Nossa Sede</h3>
                    <p className="text-sm text-[rgb(51,51,51)] mb-1">Rua Belém, 128</p>
                    <p className="text-sm text-[rgb(51,51,51)] mb-1">Industrial, Aracaju - SE</p>
                    <p className="text-sm text-[rgb(51,51,51)] mb-3">CEP: 49065-160</p>
                    <a
                      href="https://maps.google.com/?q=Rua+Belém+128+Aracaju+SE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[rgb(245,131,31)] hover:underline font-medium"
                    >
                      Ver no Google Maps →
                    </a>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200 flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-[rgb(34,197,94)]" />
                  <span className="text-sm font-medium text-[rgb(36,31,33)]">Aberto 24 horas</span>
                  <span className="ml-auto bg-[rgb(34,197,94)]/10 text-[rgb(34,197,94)] px-3 py-1 rounded-full text-xs font-medium">
                    Aberto agora
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

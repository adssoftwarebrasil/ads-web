import { useState } from 'react';
import { MapPin, Clock, Phone, Instagram, Send } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const WA_NUMBER = '556584438839';

const hours = [
  { day: 'Segunda a Sexta', time: '7:30 – 11:30 | 13:00 – 18:00' },
  { day: 'Sábado', time: '7:30 – 12:00' },
  { day: 'Domingo', time: 'Fechado' },
];

const serviceOptions = [
  'Troca de Óleo e Filtros',
  'Troca de Fluido de Câmbio Automático',
  'Troca de Fluido de Radiador',
  'Óleo de Câmbio / Diferencial',
  'Filtros Automotivos',
  'Consulta / Orçamento',
];

interface FormState {
  name: string;
  phone: string;
  vehicle: string;
  service: string;
  message: string;
}

export default function Contact() {
  const { ref: titleRef, isInView: titleInView } = useInView();
  const { ref: formRef, isInView: formInView } = useInView();

  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    vehicle: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = [
      `Olá! Vim pelo site e gostaria de agendar um serviço.`,
      ``,
      `*Nome:* ${form.name}`,
      `*Telefone:* ${form.phone}`,
      `*Veículo:* ${form.vehicle}`,
      `*Serviço:* ${form.service}`,
      form.message ? `*Mensagem:* ${form.message}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`text-center mb-14 transition-all duration-600 ${
            titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="inline-block bg-brand-green/10 text-brand-green font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Fale Conosco
          </span>
          <h2 className="section-title">Agende Seu Serviço</h2>
          <p className="section-subtitle mx-auto">
            Preencha o formulário e entraremos em contato via WhatsApp para confirmar
            o agendamento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div
            ref={formRef}
            className={`lg:col-span-3 bg-white rounded-3xl shadow-lg p-8 transition-all duration-700 ${
              formInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Solicitar Agendamento
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="João Silva"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    WhatsApp / Telefone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(65) 9 9999-9999"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-colors text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Veículo (marca, modelo e ano) *
                </label>
                <input
                  type="text"
                  name="vehicle"
                  required
                  value={form.vehicle}
                  onChange={handleChange}
                  placeholder="Ex: Jeep Compass 2022"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Serviço Desejado *
                </label>
                <select
                  name="service"
                  required
                  value={form.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-colors text-sm bg-white"
                >
                  <option value="">Selecione um serviço...</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Mensagem (opcional)
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Alguma informação adicional?"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-colors text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white font-bold py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-brand-green/30 hover:scale-[1.01] active:scale-95"
              >
                <Send size={18} />
                Enviar pelo WhatsApp
              </button>
              <p className="text-xs text-gray-400 text-center">
                Ao enviar, você será redirecionado para o WhatsApp com as informações preenchidas.
              </p>
            </form>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="bg-white rounded-3xl shadow-sm p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Informações de Contato</h3>
              <div className="space-y-4">
                <a
                  href="https://wa.me/556584438839"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green transition-colors">
                    <Phone size={18} className="text-brand-green group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">WhatsApp / Telefone</p>
                    <p className="text-gray-800 font-semibold text-sm">(65) 9 8443-8839</p>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-brand-red" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Endereço</p>
                    <p className="text-gray-800 font-semibold text-sm leading-snug">
                      Av. Amazonas, 293 - S<br />
                      Centro, Lucas do Rio Verde - MT<br />
                      CEP: 78460-001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-brand-green" />
                  </div>
                  <div className="w-full">
                    <p className="text-xs text-gray-400 font-medium mb-2">Horários de Funcionamento</p>
                    {hours.map(({ day, time }) => (
                      <div key={day} className="flex justify-between items-center py-1 border-b border-gray-50 last:border-0">
                        <span className="text-gray-700 text-xs font-medium">{day}</span>
                        <span className={`text-xs font-semibold ${time === 'Fechado' ? 'text-brand-red' : 'text-brand-green'}`}>
                          {time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="https://www.instagram.com/vaapcastrol/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center flex-shrink-0 group-hover:bg-pink-500 transition-colors">
                    <Instagram size={18} className="text-pink-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Instagram</p>
                    <p className="text-gray-800 font-semibold text-sm">@vaapcastrol</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-sm border border-gray-100 h-56">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5146722292147!2d-55.92586072492184!3d-13.066534987257647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a0f3b565bbb78d%3A0x14a4274deb7d7279!2sVaap%20Castrol%20Lubrificantes%20e%20Servi%C3%A7os!5e0!3m2!1spt-BR!2sbr!4v1774874453018!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Vaap Castrol"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

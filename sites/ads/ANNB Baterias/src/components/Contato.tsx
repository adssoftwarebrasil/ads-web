import { useState, type FormEvent } from 'react';
import { Send, Phone, Car } from 'lucide-react';
import WhatsappIcon from './WhatsappIcon';

const vehicleOptions = [
  'Carro de Passeio',
  'Caminhonete/SUV',
  'Moto',
  'Caminhão',
  'Van/Utilitário',
  'Outro',
];

const brandOptions = ['Heliar', 'Moura', 'Zetta', 'Real', 'KF'];

export default function Contato() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    region: '',
    vehicle: '',
    brand: '',
    message: '',
  });

  const update = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      'Olá! Gostaria de solicitar um orçamento de bateria.',
      '',
      `Nome: ${form.name}`,
      `Telefone: ${form.phone}`,
      `Região: ${form.region}`,
      `Tipo de veículo: ${form.vehicle}`,
    ];
    if (form.brand) lines.push(`Marca preferida: ${form.brand}`);
    if (form.message) lines.push(`Observações: ${form.message}`);
    const text = encodeURIComponent(lines.join('\n'));
    window.open(`http://wa.me/5561992574282?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14 transition-all duration-700 opacity-0 translate-y-8">
          <span className="inline-block text-brand-green font-bold text-sm uppercase tracking-widest mb-3">
            Solicite seu Orçamento
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-4">
            Fale com a gente agora
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Preencha o formulário e receba um orçamento no WhatsApp em minutos.
          </p>
        </div>
        <div className="grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-3 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 transition-all duration-700 delay-200 opacity-0 translate-y-8">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Seu nome *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Ex: João Silva"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-colors"
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="(61) 99999-9999"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-colors"
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Sua Região *
                  </label>
                  <input
                    type="text"
                    name="region"
                    required
                    placeholder="Ex: Asa Norte, Taguatinga..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-colors"
                    value={form.region}
                    onChange={(e) => update('region', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Tipo de veículo *
                  </label>
                  <select
                    name="vehicle"
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-colors bg-white"
                    value={form.vehicle}
                    onChange={(e) => update('vehicle', e.target.value)}
                  >
                    <option value="">Selecione...</option>
                    {vehicleOptions.map((v) => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Marca preferida (opcional)
                </label>
                <select
                  name="brand"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-colors bg-white"
                  value={form.brand}
                  onChange={(e) => update('brand', e.target.value)}
                >
                  <option value="">Sem preferência</option>
                  {brandOptions.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Observações (opcional)
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Modelo do carro, problema que está tendo..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-colors resize-none"
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-brand-green text-white font-bold text-base py-4 rounded-xl hover:bg-brand-dark transition-colors duration-200 shadow-lg hover:shadow-brand-green/30"
              >
                <Send width={18} height={18} className="lucide lucide-send" />
                Enviar Solicitação via WhatsApp
              </button>
              <p className="text-center text-xs text-gray-400">
                Ao enviar, você será redirecionado ao WhatsApp da ANNB Baterias.
              </p>
            </form>
          </div>
          <div className="md:col-span-2 flex flex-col gap-5 transition-all duration-700 delay-400 opacity-0 translate-y-8">
            <div className="bg-brand-dark rounded-2xl p-6 text-white">
              <h3 className="font-black text-lg mb-4">Prefere falar direto?</h3>
              <div className="space-y-4">
                <a
                  href="http://wa.me/5561992574282"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-green-600/20 border border-green-500/30 rounded-xl p-4 hover:bg-green-600/30 transition-colors group"
                >
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <WhatsappIcon className="w-5 h-5" fill="white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">WhatsApp</p>
                    <p className="text-gray-400 text-xs">(61) 99257-4282</p>
                  </div>
                </a>
                <a
                  href="tel:+5561992574282"
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 bg-brand-green/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone
                      width={18}
                      height={18}
                      className="lucide lucide-phone text-brand-muted"
                    />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Telefone</p>
                    <p className="text-gray-400 text-xs">(61) 99257-4282</p>
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/annbbaterias/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 bg-pink-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="w-5 h-5 text-pink-400"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <circle cx="12" cy="12" r="4"></circle>
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"></circle>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Instagram</p>
                    <p className="text-gray-400 text-xs">@annbbaterias</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="bg-brand-light border border-green-100 rounded-2xl p-6">
              <div className="flex items-start gap-3 mb-3">
                <Car
                  width={20}
                  height={20}
                  className="lucide lucide-car text-brand-green flex-shrink-0 mt-0.5"
                />
                <div>
                  <p className="font-bold text-brand-dark text-sm">Horário de Atendimento</p>
                  <p className="text-gray-500 text-sm mt-0.5">Todos os dias — 08h às 22h</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-3 border border-green-100">
                <p className="text-brand-dark text-xs font-semibold">
                  Atendimento emergencial disponível
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Se precisar de atendimento urgente, ligue diretamente para garantir a
                  disponibilidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

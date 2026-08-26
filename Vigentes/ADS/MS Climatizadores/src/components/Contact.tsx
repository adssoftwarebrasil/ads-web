import { useState } from 'react';
import { MessageCircle, Mail, MapPin, Clock, Instagram } from 'lucide-react';

const services = [
  { value: 'Venda', label: 'Venda de Climatizadores' },
  { value: 'Manutenção', label: 'Manutenção Especializada' },
  { value: 'Peças', label: 'Peças de Reposição' },
];

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  const isValid = name.trim() !== '' && phone.trim() !== '' && service !== '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    const text =
      `Olá! Meu nome é ${name}.` +
      `%0ATelefone: ${phone}` +
      `%0AServiço de interesse: ${service}` +
      (message.trim() ? `%0AMensagem: ${message}` : '');
    const encoded = text.replace(/\s/g, '%20');
    window.open(`https://wa.me/556791135480?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para atender você
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 transition-all duration-1000 opacity-100 translate-y-0">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h3>
            <div className="space-y-4 mb-8">
              <a
                href="https://wa.me/556791135480"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-yellow-50 transition-colors group"
              >
                <MessageCircle width={24} height={24} className="text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900 group-hover:text-yellow-600">WhatsApp</div>
                  <div className="text-gray-600">(67) 9113-5480</div>
                </div>
              </a>
              <a
                href="mailto:taisanf@outlook.com"
                className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-yellow-50 transition-colors group"
              >
                <Mail width={24} height={24} className="text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900 group-hover:text-yellow-600">Email</div>
                  <div className="text-gray-600">taisanf@outlook.com</div>
                </div>
              </a>
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <MapPin width={24} height={24} className="text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900">Endereço</div>
                  <div className="text-gray-600">
                    R. Dr. Mario Quintanilha, 180 - Vila Bandeirante, Campo Grande - MS, 79006-460
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <Clock width={24} height={24} className="text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900">Horário</div>
                  <div className="text-gray-600">Atendimento 24 horas</div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Redes Sociais</h4>
              <a
                href="https://www.instagram.com/msclimatizadores"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-yellow-500 hover:text-gray-900 transition-all"
              >
                <Instagram width={20} height={20} />
                @msclimatizadores
              </a>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full border border-gray-300 focus:border-yellow-500 focus:ring-yellow-500/20 rounded-lg px-4 py-3 focus:ring-2 focus:outline-none transition-colors"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full border border-gray-300 focus:border-yellow-500 focus:ring-yellow-500/20 rounded-lg px-4 py-3 focus:ring-2 focus:outline-none transition-colors"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Serviço de Interesse *
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full border border-gray-300 focus:border-yellow-500 focus:ring-yellow-500/20 rounded-lg px-4 py-3 focus:ring-2 focus:outline-none transition-colors"
                    required
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                  >
                    <option value="">Selecione um serviço</option>
                    {services.map((s) => (
                      <option key={s.value} value={s.value}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem (Opcional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 focus:outline-none transition-colors resize-none"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className={`rounded-full font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 bg-[rgb(255,200,1)] text-gray-900 hover:bg-yellow-400 shadow-lg hover:shadow-yellow-500/50 hover:scale-105 active:scale-95 px-8 py-4 text-lg ${
                    isValid ? '' : 'opacity-50 cursor-not-allowed hover:scale-100'
                  }`}
                  disabled={!isValid}
                >
                  <MessageCircle width={24} height={24} />
                  Enviar via WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

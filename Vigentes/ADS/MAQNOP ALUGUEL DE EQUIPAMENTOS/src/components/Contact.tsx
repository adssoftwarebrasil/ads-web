import { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';

const equipmentOptions = [
  'Andaimes',
  'Betoneiras',
  'Compactador de Solo',
  'Marteletes',
  'Máquina de Pintura Airless',
  'Compressores de Ar',
  'Lixadeira Girafa',
  'Escoras',
  'Cortadora de Piso',
  'Lavadoras de Pressão',
  'Vibrador de Concreto',
  'Alisadora de Concreto',
  'Roçadeiras',
  'Bombas Submersas',
  'Guincho de Coluna',
  'Serra Mármore',
  'Esmerilhadeira',
  'Outro',
];

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [equipment, setEquipment] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `Olá! Meu nome é ${name}.`;
    text += `\nTelefone: ${phone}`;
    text += `\nEquipamento desejado: ${equipment}`;
    if (message.trim()) {
      text += `\nMensagem: ${message}`;
    }
    window.open(
      `http://wa.me/556699111966?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section id="contato" className="py-20 sm:py-24 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto animate-fade-in-up">
          <span className="text-brand-blue font-semibold text-sm uppercase tracking-wider">Fale Conosco</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3">
            Solicite Seu<span className="text-brand-orange"> Orçamento</span>
          </h2>
          <p className="mt-4 text-gray-600 text-base">
            Preencha o formulário abaixo e enviaremos sua mensagem diretamente para nosso WhatsApp. Retornamos rapidamente!
          </p>
        </div>
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 mt-14">
          <div className="lg:col-span-3 animate-fade-in-up">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Nome completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">Telefone / WhatsApp</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="(66) 99999-9999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue outline-none transition-all"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="equipment" className="block text-sm font-medium text-gray-700 mb-1.5">Equipamento desejado</label>
                <select
                  id="equipment"
                  name="equipment"
                  required
                  value={equipment}
                  onChange={(e) => setEquipment(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue outline-none transition-all bg-white"
                >
                  <option value="">Selecione um equipamento</option>
                  {equipmentOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Mensagem (opcional)</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Conte-nos mais sobre sua necessidade..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-4 rounded-xl font-semibold text-base transition-all hover:shadow-lg hover:shadow-[#25D366]/30 flex items-center justify-center gap-2 group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Enviar pelo WhatsApp
              </button>
            </form>
          </div>
          <div className="lg:col-span-2 space-y-6 animate-fade-in-up">
            <div className="bg-white rounded-2xl shadow-sm p-6 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">Endereço</div>
                  <div className="text-sm text-gray-700 mt-0.5">Av. Joaquim Socreppa, 964 - Jardim Celeste, Sinop - MT</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">Telefone / WhatsApp</div>
                  <a href="tel:+5566999111966" className="text-sm text-gray-700 hover:text-brand-blue transition-colors mt-0.5 block">(66) 99911-1966</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">E-mail</div>
                  <a href="mailto:maqnoplocadora@gmail.com" className="text-sm text-gray-700 hover:text-brand-blue transition-colors mt-0.5 block">maqnoplocadora@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">Horário</div>
                  <div className="text-sm text-gray-700 mt-0.5">Seg-Sex: 07:00–11:00 e 13:00–17:30 | Sáb: 07:00–11:00</div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm h-64 lg:h-auto lg:flex-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.269404261277!2d-55.51397012494137!3d-11.88631948833817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a77faec1ad73d5%3A0x554736910f696a0c!2sMAQNOP%20-%20Aluguel%20de%20Equipamentos%20-%20Betoneiras%20-%20Andaime!5e0!3m2!1spt-BR!2sbr!4v1770874981811!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização MAQNOP"
                style={{ border: '0px', minHeight: '250px' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

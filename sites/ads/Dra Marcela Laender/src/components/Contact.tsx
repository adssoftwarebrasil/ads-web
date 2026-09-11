import { useState, FormEvent } from 'react';
import { Send } from 'lucide-react';

const WHATSAPP_NUMBER = '553399711500';

const stats = [
  { value: '+10', label: 'Anos de Experiência' },
  { value: '+5K', label: 'Pacientes Satisfeitas' },
  { value: '100%', label: 'Dedicação e Cuidado' },
];

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${name}.%0ATelefone: ${phone}%0A%0A${message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <section
      id="contato"
      className="py-16 sm:py-24 bg-gradient-to-br from-[#FDF5F7] via-white to-[#F8F4F5]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="bg-[#D88B9B]/20 text-[#613C45] px-4 py-2 rounded-full text-sm font-medium inline-block mb-4">
              Entre em Contato
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#613C45] mb-6">
              Agende Sua Consulta
            </h2>
            <p className="text-lg text-gray-700">
              Preencha o formulário abaixo e entraremos em contato via WhatsApp para agendar sua
              consulta no melhor horário para você.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#613C45] font-medium mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-[#D88B9B] focus:outline-none transition-colors text-gray-700"
                  placeholder="Digite seu nome"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-[#613C45] font-medium mb-2">
                  Telefone/WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-[#D88B9B] focus:outline-none transition-colors text-gray-700"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[#613C45] font-medium mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-[#D88B9B] focus:outline-none transition-colors resize-none text-gray-700"
                  placeholder="Conte-me um pouco sobre o que você precisa..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#613C45] text-white px-8 py-5 rounded-full hover:bg-[#D88B9B] transition-all duration-300 font-medium shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-2 text-lg"
              >
                <Send size={20} />
                Enviar via WhatsApp
              </button>
            </div>
            <p className="text-center text-sm text-gray-600 mt-6">
              Ao enviar este formulário, você será redirecionado para o WhatsApp com sua mensagem
              pré-preenchida.
            </p>
          </form>
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-[#613C45]">{stat.value}</div>
                <div className="text-sm text-gray-600 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

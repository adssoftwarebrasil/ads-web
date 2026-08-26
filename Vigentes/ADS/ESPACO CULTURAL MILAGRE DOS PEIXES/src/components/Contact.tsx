import { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    whatsapp: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text =
      `Nome: ${form.name}%0A` +
      `WhatsApp: ${form.whatsapp}%0A` +
      `E-mail: ${form.email}%0A` +
      `Assunto: ${form.subject}%0A` +
      `Mensagem: ${form.message}`;
    window.open(`https://wa.me/5562981842290?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Entre em <span className="text-[#ED1B24]">Contato</span>
          </h2>
          <p className="text-lg text-gray-600">
            Dúvidas ou sugestões? Nossa equipe está pronta para ouvir você
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex-shrink-0 w-12 h-12 bg-[#ED1B24] rounded-lg flex items-center justify-center">
                <Phone className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-black text-lg mb-2">Telefones</h3>
                <p className="text-gray-600">(62) 98184-2290</p>
                <p className="text-gray-600">(62) 3207-7801</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex-shrink-0 w-12 h-12 bg-[#ED1B24] rounded-lg flex items-center justify-center">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-black text-lg mb-2">E-mail</h3>
                <p className="text-gray-600">contato@milagredospeixes.com.br</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex-shrink-0 w-12 h-12 bg-[#ED1B24] rounded-lg flex items-center justify-center">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-black text-lg mb-2">Endereço</h3>
                <p className="text-gray-600">Rua J-74, Quadra 147, Lote 06</p>
                <p className="text-gray-600">Setor Jaó, Goiânia, GO</p>
                <p className="text-gray-600">CEP: 74.674-410</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex-shrink-0 w-12 h-12 bg-[#ED1B24] rounded-lg flex items-center justify-center">
                <Clock className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-black text-lg mb-2">Horário</h3>
                <p className="text-gray-600">Terça a Sábado</p>
              </div>
            </div>
            <a
              href="https://www.instagram.com/milagredospeixes/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-white"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Instagram size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Siga no Instagram</h3>
                <p className="text-white/90">@milagredospeixes</p>
              </div>
            </a>
          </div>
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ED1B24] focus:border-transparent transition-all duration-300 outline-none"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-2">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  required
                  value={form.whatsapp}
                  onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ED1B24] focus:border-transparent transition-all duration-300 outline-none"
                  placeholder="(62) 98888-8888"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ED1B24] focus:border-transparent transition-all duration-300 outline-none"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ED1B24] focus:border-transparent transition-all duration-300 outline-none"
                  placeholder="Como podemos ajudar?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ED1B24] focus:border-transparent transition-all duration-300 outline-none resize-none"
                  placeholder="Escreva sua mensagem..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#ED1B24] hover:bg-[#c41620] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

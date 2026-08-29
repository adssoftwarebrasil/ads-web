import { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', whatsapp: '', email: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Nome: ${form.name}%0AWhatsApp: ${form.whatsapp}%0AE-mail: ${form.email}%0AMensagem: ${form.message}`;
    window.open(`https://wa.me/5528354651127?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/agroplantec%2FContato.jpeg"
          alt="Contato"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(138,154,39)]/95 via-[rgb(29,29,27)]/90 to-[rgb(29,29,27)]/95"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="text-white space-y-10">
            <div>
              <div className="inline-block mb-6">
                <span className="px-4 py-2 bg-white/10 backdrop-blur-md text-white text-sm font-bold uppercase tracking-wider rounded-full">
                  Entre em Contato
                </span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold mb-4">Fale Conosco</h2>
              <p className="text-xl text-gray-200">Dúvidas ou sugestões? Estamos aqui para ajudar.</p>
            </div>
            <div className="space-y-6">
              <a
                href="tel:2835465127"
                className="group flex items-start gap-5 p-5 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex-shrink-0 p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
                  <Phone className="lucide lucide-phone w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-300 mb-1">Telefone</p>
                  <p className="text-lg font-semibold">(28) 3546 5127</p>
                </div>
              </a>
              <a
                href="https://wa.me/5528354651127"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-5 p-5 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex-shrink-0 p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
                  <Phone className="lucide lucide-phone w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-300 mb-1">WhatsApp</p>
                  <p className="text-lg font-semibold">(28) 3546 5127</p>
                </div>
              </a>
              <a
                href="mailto:atendimento@agroplantec.com.br"
                className="group flex items-start gap-5 p-5 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex-shrink-0 p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
                  <Mail className="lucide lucide-mail w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-300 mb-1">E-mail</p>
                  <p className="text-lg font-semibold break-all">atendimento@agroplantec.com.br</p>
                </div>
              </a>
              <div className="flex items-start gap-5 p-5 bg-white/10 backdrop-blur-md rounded-2xl">
                <div className="flex-shrink-0 p-3 bg-white/10 rounded-xl">
                  <MapPin className="lucide lucide-map-pin w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-300 mb-1">Endereço</p>
                  <p className="text-lg font-semibold">
                    Av. Nelson Mieis, s/nº Alto Caxixe, Venda Nova do Imigrante, ES 29375-000
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:mt-16">
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Nome Completo</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Digite seu nome"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full h-14 px-5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[rgb(138,154,39)] focus:bg-white focus:outline-none text-base transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">WhatsApp</label>
                <input
                  type="tel"
                  name="whatsapp"
                  placeholder="(00) 00000-0000"
                  required
                  maxLength={15}
                  value={form.whatsapp}
                  onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                  className="w-full h-14 px-5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[rgb(138,154,39)] focus:bg-white focus:outline-none text-base transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">E-mail</label>
                <input
                  type="email"
                  name="email"
                  placeholder="seu@email.com"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full h-14 px-5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[rgb(138,154,39)] focus:bg-white focus:outline-none text-base transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Mensagem</label>
                <textarea
                  name="message"
                  placeholder="Como podemos ajudar?"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[rgb(138,154,39)] focus:bg-white focus:outline-none text-base resize-none transition-all"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full h-16 bg-gradient-to-r from-[rgb(138,154,39)] to-[rgb(118,134,29)] text-white text-lg font-bold rounded-xl hover:shadow-xl hover:shadow-[rgb(138,154,39)]/30 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                Enviar Mensagem
                <Send className="lucide lucide-send w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

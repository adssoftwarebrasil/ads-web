import { useState, FormEvent } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${form.name}.%0A%0AE-mail: ${form.email}%0ATelefone: ${form.phone}%0A%0AMensagem: ${form.message}`;
    window.open(`https://wa.me/5591985220505?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600">
            Estamos prontos para atender você e seu pet
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(253,118,22)] focus:border-transparent outline-none transition-all"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(253,118,22)] focus:border-transparent outline-none transition-all"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Telefone/WhatsApp
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(253,118,22)] focus:border-transparent outline-none transition-all"
                  placeholder="(91) 98522-0505"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(253,118,22)] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Como podemos ajudar você e seu pet?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[rgb(253,118,22)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[rgb(233,98,2)] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Enviar via WhatsApp
              </button>
            </form>
          </div>
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Phone size={24} className="text-[rgb(253,118,22)]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">
                      Telefone/WhatsApp
                    </p>
                    <a
                      href="https://wa.me/5591985220505"
                      className="text-gray-600 hover:text-[rgb(253,118,22)] transition-colors"
                    >
                      (91) 98522-0505
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mail size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">E-mail</p>
                    <a
                      href="mailto:loja1@petraposo-castanhal.com"
                      className="text-gray-600 hover:text-[rgb(253,118,22)] transition-colors"
                    >
                      loja1@petraposo-castanhal.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <MapPin size={24} className="text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Endereços</p>
                    <p className="text-gray-600 mb-2">
                      <span className="font-medium">Matriz:</span>
                      <br />
                      Av. Barão do Rio Branco, 1074
                      <br />
                      Castanhal - PA
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Filial:</span>
                      <br />
                      R. Dr. Laureano Francisco Alves de Melo, 90
                      <br />
                      Castanhal - PA
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[rgb(253,118,22)] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Horário de Funcionamento
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Segunda a Sábado</span>
                  <span>08h - 20h</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Domingo e Feriados</span>
                  <span>08h - 12h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

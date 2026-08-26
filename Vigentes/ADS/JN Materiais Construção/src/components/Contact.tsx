import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `Olá! Meu nome é ${form.name}.%0A%0A` +
      `E-mail: ${form.email}%0A` +
      `Telefone: ${form.phone}%0A%0A` +
      `Mensagem: ${form.message}`;
    window.open(
      `https://wa.me/5584994982060?text=${text}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section
      id="contato"
      className="py-20 md:py-32 bg-gradient-to-br from-[rgb(34,39,69)] via-[rgb(44,58,128)] to-[rgb(34,39,69)] text-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="bg-[rgb(216,27,27)] text-white px-4 py-2 rounded-full text-sm font-semibold">
              Entre em Contato
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Estamos Prontos Para Atender Você
          </h2>
          <p className="text-lg text-gray-200">
            Tire suas dúvidas, solicite um orçamento ou visite nossa loja. Nossa
            equipe está à disposição para ajudar no seu projeto.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-[rgb(216,27,27)] p-3 rounded-xl">
                  <Phone width={24} height={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Telefone / WhatsApp</h3>
                  <a
                    href="tel:+558499482060"
                    className="text-gray-200 hover:text-white transition-colors text-lg"
                  >
                    (84) 99498-2060
                  </a>
                  <p className="text-sm text-gray-300 mt-2">
                    Atendimento via WhatsApp disponível
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-[rgb(216,27,27)] p-3 rounded-xl">
                  <Mail width={24} height={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">E-mail</h3>
                  <a
                    href="mailto:jnc.ferreira@hotmail.com"
                    className="text-gray-200 hover:text-white transition-colors break-all"
                  >
                    jnc.ferreira@hotmail.com
                  </a>
                  <p className="text-sm text-gray-300 mt-2">
                    Respondemos em até 24 horas
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-[rgb(216,27,27)] p-3 rounded-xl">
                  <MapPin width={24} height={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Endereço</h3>
                  <p className="text-gray-200">
                    Rua Chico Otaviano, 138
                    <br />
                    Centro - São Miguel/RN
                  </p>
                  <p className="text-sm text-gray-300 mt-2">Venha nos visitar!</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-[rgb(216,27,27)] p-3 rounded-xl">
                  <Clock width={24} height={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Horário de Funcionamento
                  </h3>
                  <div className="text-gray-200 space-y-1">
                    <p>Segunda a Sexta: 07:00 - 17:00</p>
                    <p>Sábado: 07:00 - 17:00</p>
                    <p className="text-[rgb(216,27,27)] font-semibold">
                      Domingo: Fechado
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-[rgb(34,39,69)] mb-6">
              Solicite um Orçamento
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[rgb(44,58,128)] focus:ring-2 focus:ring-[rgb(44,58,128)]/20 outline-none transition-all text-gray-900"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[rgb(44,58,128)] focus:ring-2 focus:ring-[rgb(44,58,128)]/20 outline-none transition-all text-gray-900"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Telefone / WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[rgb(44,58,128)] focus:ring-2 focus:ring-[rgb(44,58,128)]/20 outline-none transition-all text-gray-900"
                  placeholder="(84) 99999-9999"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[rgb(44,58,128)] focus:ring-2 focus:ring-[rgb(44,58,128)]/20 outline-none transition-all resize-none text-gray-900"
                  placeholder="Conte-nos sobre seu projeto ou tire suas dúvidas..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[rgb(216,27,27)] text-white px-8 py-4 rounded-lg hover:bg-[rgb(196,17,17)] transition-all duration-300 font-bold text-lg shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Enviar via WhatsApp
                <Send width={20} height={20} />
              </button>
              <p className="text-sm text-gray-500 text-center">
                Ao enviar, você será redirecionado para o WhatsApp
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

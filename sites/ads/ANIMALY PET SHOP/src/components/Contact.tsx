import { useState, type FormEvent } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

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
    const text = `Nome: ${form.name}%0AWhatsApp: ${form.whatsapp}%0AE-mail: ${form.email}%0AAssunto: ${form.subject}%0AMensagem: ${form.message}`;
    window.open(
      `https://api.whatsapp.com/send/?phone=5511947279099&text=${text}&type=phone_number&app_absent=0`,
      '_blank'
    );
  };

  return (
    <section id="contato" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-[#b900ba] to-[#38d060] text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            Contato
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Dúvidas ou sugestões?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entre em contato conosco e agende o melhor para seu pet.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-[#b900ba] focus:ring-4 focus:ring-[#b900ba]/10 outline-none transition-all"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label
                  htmlFor="whatsapp"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  WhatsApp
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  required
                  value={form.whatsapp}
                  onChange={(e) =>
                    setForm({ ...form, whatsapp: e.target.value })
                  }
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-[#38d060] focus:ring-4 focus:ring-[#38d060]/10 outline-none transition-all"
                  placeholder="(11) 99999-9999"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-900 mb-2"
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
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-[#b900ba] focus:ring-4 focus:ring-[#b900ba]/10 outline-none transition-all"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={(e) =>
                    setForm({ ...form, subject: e.target.value })
                  }
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-[#38d060] focus:ring-4 focus:ring-[#38d060]/10 outline-none transition-all"
                  placeholder="Como podemos ajudar?"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-900 mb-2"
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
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-[#b900ba] focus:ring-4 focus:ring-[#b900ba]/10 outline-none transition-all resize-none"
                  placeholder="Conte-nos mais sobre o que você precisa..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#b900ba] to-[#38d060] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#b900ba]/5 to-[#38d060]/5 rounded-3xl p-8 border-2 border-[#b900ba]/10">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-[#b900ba] to-[#38d060] p-4 rounded-2xl">
                  <Phone className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Telefone
                  </h3>
                  <a
                    href="tel:11947279099"
                    className="text-gray-600 hover:text-[#b900ba] transition-colors text-lg"
                  >
                    (11) 94727-9099
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#38d060]/5 to-[#b900ba]/5 rounded-3xl p-8 border-2 border-[#38d060]/10">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-[#38d060] to-[#b900ba] p-4 rounded-2xl">
                  <Mail className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    E-mail
                  </h3>
                  <a
                    href="mailto:contato@animalypetshop.com.br"
                    className="text-gray-600 hover:text-[#38d060] transition-colors text-lg break-all"
                  >
                    contato@animalypetshop.com.br
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#b900ba]/5 to-[#38d060]/5 rounded-3xl p-8 border-2 border-[#b900ba]/10">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-[#b900ba] to-[#38d060] p-4 rounded-2xl">
                  <MapPin className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Endereço
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Estr. do Capuava, 511 B<br />
                    Jardim dos Ipês<br />
                    Cotia - SP, 06716-155
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7312.132771099587!2d-46.894899!3d-23.601952!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf0759b09e3c53%3A0xc8c166750cfd0e4b!2sAnimaly%20Pet%20Shop%20%2F%20Banho%20e%20Tosa!5e0!3m2!1spt-BR!2sus!4v1765549270583!5m2!1spt-BR!2sus"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: '0px' }}
                title="Mapa Animaly Pet Shop"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

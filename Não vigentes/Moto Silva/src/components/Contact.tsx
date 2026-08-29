import { useState, FormEvent } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({
    nome: '',
    whatsapp: '',
    email: '',
    assunto: '',
    mensagem: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text =
      `Nome: ${form.nome}\n` +
      `WhatsApp: ${form.whatsapp}\n` +
      `E-mail: ${form.email}\n` +
      `Assunto: ${form.assunto}\n` +
      `Mensagem: ${form.mensagem}`;
    window.open(`https://wa.me/551937138008?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contato" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Contato</h2>
          <div className="w-24 h-1 bg-[#FFE600] mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600">Dúvidas ou sugestões</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#FFE600] rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-black" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">Telefone</h3>
                <a
                  href="tel:1937137007"
                  className="block text-gray-700 hover:text-[#FFE600] transition-colors"
                >
                  (19) 3713-7007
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#FFE600] rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-black" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">WhatsApp</h3>
                <a
                  href="https://wa.me/551937138008"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-700 hover:text-[#FFE600] transition-colors"
                >
                  (19) 3713-8008
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#FFE600] rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-black" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">E-mail</h3>
                <a
                  href="mailto:contato@motosilva.com.br"
                  className="text-gray-700 hover:text-[#FFE600] transition-colors"
                >
                  contato@motosilva.com.br
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#FFE600] rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">Endereço</h3>
                <p className="text-gray-700">
                  R DUQUE DE CAXIAS, 995, CENTRO
                  <br />
                  Limeira, SP
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7368.811872268752!2d-47.409134!3d-22.563916!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8808b8659f64b%3A0x42f0f289cde79df4!2sMoto%20Silva!5e0!3m2!1spt-BR!2sus!4v1766247065043!5m2!1spt-BR!2sus"
                width="100%"
                height="300"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização MotoSilva"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-gray-50 rounded-2xl p-8 shadow-lg space-y-6"
            >
              <div>
                <label htmlFor="nome" className="block text-sm font-semibold text-black mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  value={form.nome}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFE600] focus:border-transparent outline-none transition-all duration-300"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label htmlFor="whatsapp" className="block text-sm font-semibold text-black mb-2">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  required
                  value={form.whatsapp}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFE600] focus:border-transparent outline-none transition-all duration-300"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFE600] focus:border-transparent outline-none transition-all duration-300"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="assunto" className="block text-sm font-semibold text-black mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="assunto"
                  name="assunto"
                  required
                  value={form.assunto}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFE600] focus:border-transparent outline-none transition-all duration-300"
                  placeholder="Sobre o que deseja falar?"
                />
              </div>
              <div>
                <label htmlFor="mensagem" className="block text-sm font-semibold text-black mb-2">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  required
                  rows={4}
                  value={form.mensagem}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFE600] focus:border-transparent outline-none transition-all duration-300 resize-none"
                  placeholder="Digite sua mensagem aqui..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#FFE600] text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#FFE600]/90 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Enviar Mensagem</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

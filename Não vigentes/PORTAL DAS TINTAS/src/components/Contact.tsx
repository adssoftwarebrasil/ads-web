import { useState, FormEvent } from 'react';
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

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
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message = `Olá! Meu nome é ${form.nome}.\nWhatsApp: ${form.whatsapp}\nE-mail: ${form.email}\nAssunto: ${form.assunto}\nMensagem: ${form.mensagem}`;
    window.open(
      `https://wa.me/5527997073666?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <section id="contato" className="py-24 lg:py-28" style={{ background: 'rgb(232, 213, 242)' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">Entre em Contato</h2>
            <p className="text-gray-700 text-lg mb-8">
              Dúvidas ou sugestões? Nossa equipe está pronta para ouvir você
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-[#25D366] p-3 rounded-lg">
                  <MessageCircle
                    className="lucide lucide-message-circle w-6 h-6 text-white"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <div className="font-bold text-black">WhatsApp</div>
                  <a href="https://wa.me/5527997073666" className="text-gray-700 hover:text-[#f08736]">
                    (27) 99707-3666
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-[#f08736] p-3 rounded-lg">
                  <Phone className="lucide lucide-phone w-6 h-6 text-white" width={24} height={24} />
                </div>
                <div>
                  <div className="font-bold text-black">Telefone</div>
                  <a href="tel:2732523666" className="text-gray-700 hover:text-[#f08736]">
                    (27) 3252-3666
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-[#f08736] p-3 rounded-lg">
                  <Mail className="lucide lucide-mail w-6 h-6 text-white" width={24} height={24} />
                </div>
                <div>
                  <div className="font-bold text-black">E-mail</div>
                  <a
                    href="mailto:portaltintas-@hotmail.com"
                    className="text-gray-700 hover:text-[#f08736]"
                  >
                    portaltintas-@hotmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-[#f08736] p-3 rounded-lg">
                  <MapPin className="lucide lucide-map-pin w-6 h-6 text-white" width={24} height={24} />
                </div>
                <div>
                  <div className="font-bold text-black">Endereço</div>
                  <p className="text-gray-700">
                    Av. Abido Saad, 2207 - Das Laranjeiras
                    <br />
                    Serra - ES, 29175-585
                  </p>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Av.+Abido+Saad,+2207+-+Das+Laranjeiras,+Serra+-+ES,+29175-585"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#f08736] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#e67321] transition-all duration-200"
              >
                Abrir no Google Maps
              </a>
            </div>
          </div>
          <div className="lg:col-span-3">
            <form className="bg-white rounded-2xl p-8 shadow-lg" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="nome" className="block text-black font-medium mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    value={form.nome}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f08736] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="whatsapp" className="block text-black font-medium mb-2">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    required
                    placeholder="(27) 99999-9999"
                    value={form.whatsapp}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f08736] focus:border-transparent"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-black font-medium mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f08736] focus:border-transparent"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="assunto" className="block text-black font-medium mb-2">
                  Assunto *
                </label>
                <input
                  type="text"
                  id="assunto"
                  name="assunto"
                  required
                  value={form.assunto}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f08736] focus:border-transparent"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="mensagem" className="block text-black font-medium mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  required
                  rows={4}
                  value={form.mensagem}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f08736] focus:border-transparent resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#25D366] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#1fb855] transition-all duration-200 hover:scale-105"
              >
                Enviar Mensagem pelo WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

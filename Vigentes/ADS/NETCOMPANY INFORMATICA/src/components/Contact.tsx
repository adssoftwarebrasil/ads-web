import { useState } from 'react';
import { Send, Phone, Mail, Instagram, Facebook } from 'lucide-react';

type FormData = {
  name: string;
  phone: string;
  subject: string;
  message: string;
};

const WHATSAPP_NUMBER = '559491941919';

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é *${form.name}*, meu telefone é *${form.phone}*.\n\n*Assunto:* ${form.subject}\n\n*Mensagem:* ${form.message}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#F58842] font-semibold text-sm uppercase tracking-widest">
            Fale conosco
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0D1B2A]">
            Entre em Contato
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-base sm:text-lg">
            Preencha o formulário e sua mensagem será enviada direto para o nosso WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-[#0D1B2A] text-lg mb-5">Informações de Contato</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#3069A3]/10 rounded-lg flex items-center justify-center text-[#3069A3] shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">Telefone / WhatsApp</p>
                    <a href="tel:+559491941919" className="block text-sm font-semibold text-[#0D1B2A] hover:text-[#3069A3]">
                      (94) 9 9194-1919
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#3069A3]/10 rounded-lg flex items-center justify-center text-[#3069A3] shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">E-mail</p>
                    <a
                      href="mailto:vendas@netcompanyinformatica.com.br"
                      className="text-sm font-semibold text-[#0D1B2A] hover:text-[#3069A3] break-all"
                    >
                      vendas@netcompanyinformatica.com.br
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-[#0D1B2A] text-base mb-4">Redes Sociais</h3>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/netcompany.infor/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#cc2366] text-white text-sm font-semibold py-2.5 rounded-xl hover:opacity-90 transition-opacity"
                >
                  <Instagram size={16} />
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/NetCompanyInformatica/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#1877F2] text-white text-sm font-semibold py-2.5 rounded-xl hover:opacity-90 transition-opacity"
                >
                  <Facebook size={16} />
                  Facebook
                </a>
              </div>
            </div>

            <div className="bg-[#3069A3] rounded-2xl p-6 shadow-sm">
              <h3 className="text-white font-bold text-base mb-2">Horário de Funcionamento</h3>
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between text-blue-100">
                  <span>Segunda a Sexta</span>
                  <span className="font-semibold text-white">08h às 18h</span>
                </div>
                <div className="flex justify-between text-blue-100">
                  <span>Sábado</span>
                  <span className="font-semibold text-white">08h às 12h</span>
                </div>
                <div className="flex justify-between text-blue-100">
                  <span>Domingo</span>
                  <span className="font-semibold text-blue-300">Fechado</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-7 sm:p-10 shadow-sm">
              <h3 className="font-bold text-[#0D1B2A] text-lg mb-6">Envie sua mensagem</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Seu nome *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="João da Silva"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3069A3]/30 focus:border-[#3069A3] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(94) 9 9999-9999"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3069A3]/30 focus:border-[#3069A3] transition-all"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Assunto *
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Ex: Manutenção de notebook"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3069A3]/30 focus:border-[#3069A3] transition-all"
                />
              </div>

              <div className="mb-7">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Mensagem *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Descreva o problema ou o que você precisa..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3069A3]/30 focus:border-[#3069A3] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#F58842] hover:bg-[#e07432] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 shadow-lg hover:shadow-orange-200"
              >
                <Send size={18} />
                Enviar via WhatsApp
              </button>
              <p className="text-center text-xs text-gray-400 mt-3">
                Ao clicar, você será redirecionado para o WhatsApp com sua mensagem preenchida.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

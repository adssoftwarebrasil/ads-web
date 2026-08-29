import { useState } from 'react';
import { Mail, Phone, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Olá! Meu nome é ${formData.name}.%0A%0ATelefone: ${formData.phone}%0A%0AMensagem: ${formData.message}`;
    window.open(`https://wa.me/5562999597617?text=${whatsappMessage}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-20 lg:py-32 bg-gradient-to-br from-[#f4ccd4]/30 via-white to-[#f4ccd4]/30 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#c40278]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-[#851756]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#c40278] font-bold text-sm uppercase tracking-wider bg-white px-4 py-2 rounded-full inline-block mb-4">
            Entre em Contato
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#230015] mb-6">
            Vamos conversar sobre suas{' '}
            <span className="bg-gradient-to-r from-[#c40278] to-[#851756] bg-clip-text text-transparent">
              necessidades
            </span>
          </h2>
          <p className="text-lg text-[#350020]/80">
            Preencha o formulário abaixo e entraremos em contato via WhatsApp!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#f4ccd4]">
              <h3 className="text-2xl font-bold text-[#230015] mb-6">Informações de Contato</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="bg-gradient-to-br from-[#c40278] to-[#851756] p-3 rounded-xl group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#230015] mb-2">Telefones</h4>
                    <p className="text-[#350020]/70">Loja Negrão de Lima:</p>
                    <p className="text-[#230015] font-semibold">(62) 3223-1069</p>
                    <p className="text-[#230015] font-semibold">(62) 99959-7617</p>
                    <p className="text-[#350020]/70 mt-3">Loja Vera Cruz II:</p>
                    <p className="text-[#230015] font-semibold">(62) 3639-1570</p>
                    <p className="text-[#230015] font-semibold">(62) 98173-3003</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-gradient-to-br from-[#c40278] to-[#851756] p-3 rounded-xl group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#230015] mb-2">WhatsApp</h4>
                    <p className="text-[#350020]/70 mb-2">Atendimento rápido e entrega a domicílio</p>
                    <a
                      href="https://wa.me/5562999597617"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#c40278] font-semibold hover:underline"
                    >
                      Iniciar conversa →
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-gradient-to-br from-[#c40278] to-[#851756] p-3 rounded-xl group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#230015] mb-2">Redes Sociais</h4>
                    <p className="text-[#350020]/70 mb-2">Siga-nos para novidades e promoções</p>
                    <a
                      href="https://linktr.ee/Biolune"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#c40278] font-semibold hover:underline"
                    >
                      @Biolune →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#c40278] to-[#851756] rounded-3xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Horário de Funcionamento</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-white/20 pb-3">
                  <span className="font-semibold">Segunda a Sexta</span>
                  <span>09h às 19h</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/20 pb-3">
                  <span className="font-semibold">Sábado</span>
                  <span>09h às 15h</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Domingo</span>
                  <span>Fechado</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#f4ccd4]">
            <h3 className="text-2xl font-bold text-[#230015] mb-6">Envie sua Mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#230015] font-semibold mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#f4ccd4] focus:border-[#c40278] focus:outline-none transition-colors"
                  placeholder="Digite seu nome"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-[#230015] font-semibold mb-2">
                  Telefone/WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#f4ccd4] focus:border-[#c40278] focus:outline-none transition-colors"
                  placeholder="(62) 99999-9999"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[#230015] font-semibold mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#f4ccd4] focus:border-[#c40278] focus:outline-none transition-colors resize-none"
                  placeholder="Como podemos ajudá-lo?"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-[#c40278] to-[#851756] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Send className="w-5 h-5" />
                <span>Enviar via WhatsApp</span>
              </button>

              <p className="text-sm text-[#350020]/60 text-center">
                Ao enviar, você será redirecionado para o WhatsApp com sua mensagem pré-preenchida.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

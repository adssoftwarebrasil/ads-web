import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Meu nome é ${formData.name}.%0A%0AAssunto: ${formData.subject}%0A%0A${formData.message}%0A%0AContato:%0AWhatsApp: ${formData.whatsapp}%0AE-mail: ${formData.email}`;
    window.open(`https://wa.me/5592981059681?text=${message}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-[#F3F4F6]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-[#1E3A8A] mb-6">Dúvidas ou Sugestões?</h2>
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-lg space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border-2 border-[#E5E7EB] rounded-lg px-4 py-3 focus:border-[#FF6B00] focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/20 transition-all"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="whatsapp"
                  placeholder="DDD + Número"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required
                  className="w-full border-2 border-[#E5E7EB] rounded-lg px-4 py-3 focus:border-[#FF6B00] focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/20 transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border-2 border-[#E5E7EB] rounded-lg px-4 py-3 focus:border-[#FF6B00] focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/20 transition-all"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Assunto da mensagem"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full border-2 border-[#E5E7EB] rounded-lg px-4 py-3 focus:border-[#FF6B00] focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/20 transition-all"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Conte-nos como podemos ajudar"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full border-2 border-[#E5E7EB] rounded-lg px-4 py-3 focus:border-[#FF6B00] focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/20 transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#FF6B00] text-white py-4 rounded-lg hover:bg-[#1E3A8A] transition-all transform hover:scale-[1.02] font-bold text-lg flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>ENVIAR MENSAGEM</span>
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl overflow-hidden shadow-lg h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0686654886756!2d-60.023919!3d-3.119027499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c1bc8b2b4e7a9%3A0x9e8f8b0c0c0c0c0c!2sR.%20Silva%20Ramos%2C%20238%20-%20Centro%2C%20Manaus%20-%20AM%2C%2069025-140!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Localização Manaus Baterias"
              ></iframe>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <a
                href="tel:+5592981059681"
                className="bg-[#F3F4F6] p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <Phone className="w-6 h-6 text-[#FF6B00] mb-3" />
                <h3 className="font-bold text-[#1E3A8A] mb-2">WhatsApp 1</h3>
                <p className="text-[#334155]">(92) 98105-9681</p>
                <p className="text-sm text-[#059669] mt-1">Clique para ligar</p>
              </a>

              <a
                href="tel:+5592995262436"
                className="bg-[#F3F4F6] p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <Phone className="w-6 h-6 text-[#FF6B00] mb-3" />
                <h3 className="font-bold text-[#1E3A8A] mb-2">WhatsApp 2</h3>
                <p className="text-[#334155]">(92) 99526-2436</p>
                <p className="text-sm text-[#059669] mt-1">Clique para ligar</p>
              </a>

              <div className="bg-[#F3F4F6] p-6 rounded-xl hover:shadow-lg transition-shadow">
                <Mail className="w-6 h-6 text-[#FF6B00] mb-3" />
                <h3 className="font-bold text-[#1E3A8A] mb-2">E-mail</h3>
                <p className="text-[#334155] text-sm break-all">
                  contato@sosbateriaseradiadores.com.br
                </p>
                <p className="text-sm text-[#FF6B00] mt-1">Envie sua dúvida</p>
              </div>

              <div className="bg-[#F3F4F6] p-6 rounded-xl hover:shadow-lg transition-shadow">
                <MapPin className="w-6 h-6 text-[#FF6B00] mb-3" />
                <h3 className="font-bold text-[#1E3A8A] mb-2">Endereço</h3>
                <p className="text-[#334155] text-sm">
                  Rua Silva Ramos, 238, Centro
                  <br />
                  Manaus/AM - CEP: 69.025-140
                </p>
              </div>

              <div className="bg-[#F3F4F6] p-6 rounded-xl hover:shadow-lg transition-shadow">
                <Clock className="w-6 h-6 text-[#FF6B00] mb-3" />
                <h3 className="font-bold text-[#1E3A8A] mb-2">Horário</h3>
                <p className="text-[#334155] text-sm">
                  Delivery até 23:30
                  <br />
                  Atendimento 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

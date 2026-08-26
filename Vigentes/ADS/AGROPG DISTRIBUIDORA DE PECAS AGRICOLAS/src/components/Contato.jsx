import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const Contato = () => {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${formData.name}%0AWhatsApp: ${formData.whatsapp}%0AEmail: ${formData.email}%0A%0AMensagem: ${formData.message}`;
    window.open(`https://wa.me/554233230147?text=${text}`, "_blank");
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      "Olá! Vim através do site da AgroPG e gostaria de mais informações."
    );
    window.open(`https://wa.me/554233230147?text=${text}`, "_blank");
  };

  return (
    <section id="contato" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h2 className="text-[rgb(19,46,78)] text-3xl md:text-4xl font-bold mb-3">
                Contato
              </h2>
              <p className="text-[rgb(45,156,219)] text-xl font-semibold mb-4">
                Dúvidas ou Sugestões
              </p>
              <p className="text-[rgb(107,114,128)] leading-relaxed">
                Fale com nossa equipe em Ponta Grossa/PR para solicitar
                orçamento, tirar dúvidas técnicas ou agendar atendimento no campo
                — oferecemos atendimento personalizado com agilidade e
                conhecimento especializado.
              </p>
            </div>
            <div className="space-y-4">
              <a
                href="https://wa.me/554233230147"
                className="flex items-center space-x-3 text-[rgb(19,46,78)] hover:text-[rgb(45,156,219)] transition-colors"
              >
                <Phone className="text-[rgb(45,156,219)]" size={24} />
                <span className="font-medium">(42) 3323-0147</span>
              </a>
              <a
                href="mailto:joel@agropg.com.br"
                className="flex items-center space-x-3 text-[rgb(19,46,78)] hover:text-[rgb(45,156,219)] transition-colors"
              >
                <Mail className="text-[rgb(45,156,219)]" size={24} />
                <span className="font-medium">joel@agropg.com.br</span>
              </a>
              <div className="flex items-start space-x-3 text-[rgb(19,46,78)]">
                <MapPin
                  className="text-[rgb(45,156,219)] flex-shrink-0 mt-1"
                  size={24}
                />
                <span className="font-medium">
                  Jesuíno Manoel de Almeida, 489 - Boa Vista - Ponta Grossa - PR,
                  84070-450
                </span>
              </div>
            </div>
            <button
              onClick={handleWhatsApp}
              className="bg-[rgb(45,156,219)] text-white px-8 py-3 rounded-lg font-semibold hover:brightness-110 hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <svg width="24" height="24" viewBox="0 0 32 32" fill="white">
                <path d="M16 0C7.164 0 0 7.164 0 16c0 2.831.739 5.489 2.032 7.792L0 32l8.408-2.017A15.918 15.918 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm.001 29.097c-2.413 0-4.736-.668-6.72-1.931l-.482-.288-5.003 1.203 1.218-4.914-.316-.501A12.927 12.927 0 013 16C3 8.82 8.82 3 16 3s13 5.82 13 13-5.82 13.097-13 13.097zm7.144-9.763c-.393-.196-2.322-1.145-2.682-1.276-.36-.131-.622-.196-.883.197-.262.393-1.013 1.276-1.242 1.538-.229.262-.458.295-.851.098-.393-.196-1.659-.612-3.159-1.947-1.168-1.042-1.957-2.328-2.186-2.721-.229-.393-.024-.605.172-.801.177-.176.393-.459.589-.688.196-.229.262-.393.393-.655.131-.262.066-.491-.033-.688-.098-.197-.883-2.127-1.21-2.913-.319-.765-.643-.661-.883-.673-.229-.012-.491-.015-.753-.015s-.688.098-1.048.491c-.36.393-1.375 1.342-1.375 3.273s1.407 3.798 1.604 4.06c.196.262 2.771 4.233 6.715 5.935.938.405 1.671.647 2.242.828.943.299 1.802.257 2.481.156.757-.113 2.322-.949 2.649-1.866.327-.916.327-1.702.229-1.866-.098-.164-.36-.262-.753-.459z" />
              </svg>
              <span>Enviar WhatsApp</span>
            </button>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.8650650465206!2d-50.18667262462234!3d-25.072562177791347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e81757da70db7d%3A0x2a79d53e2ce94cbf!2sAgropg%20Distribuidora%20de%20Pe%C3%A7as%20Agricolas!5e0!3m2!1spt-BR!2sbr!4v1767876620628!5m2!1spt-BR!2sbr"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização AGROPG"
              />
            </div>
          </div>
          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-[rgb(245,247,250)] rounded-2xl p-8 space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-[rgb(19,46,78)] font-semibold mb-2"
                >
                  Nome *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required={true}
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[rgb(229,231,235)] rounded-lg focus:border-[rgb(45,156,219)] focus:outline-none transition-colors"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label
                  htmlFor="whatsapp"
                  className="block text-[rgb(19,46,78)] font-semibold mb-2"
                >
                  WhatsApp *
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  required={true}
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[rgb(229,231,235)] rounded-lg focus:border-[rgb(45,156,219)] focus:outline-none transition-colors"
                  placeholder="(99) 99999-9999"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-[rgb(19,46,78)] font-semibold mb-2"
                >
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required={true}
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[rgb(229,231,235)] rounded-lg focus:border-[rgb(45,156,219)] focus:outline-none transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-[rgb(19,46,78)] font-semibold mb-2"
                >
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required={true}
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[rgb(229,231,235)] rounded-lg focus:border-[rgb(45,156,219)] focus:outline-none transition-colors resize-none"
                  placeholder="Digite sua mensagem aqui..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[rgb(45,156,219)] text-white py-4 rounded-lg font-semibold text-lg hover:brightness-110 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                ENVIAR MENSAGEM
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;

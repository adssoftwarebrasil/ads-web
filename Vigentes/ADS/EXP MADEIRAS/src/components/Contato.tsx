import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const inputStyle = {
  backgroundColor: 'rgba(241, 241, 255, 0.05)',
  border: '1px solid rgba(241, 241, 255, 0.2)',
  color: 'rgb(241, 241, 255)',
};

export default function Contato() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section id="contato" className="py-16 md:py-24 bg-[#2E200F]">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F1F1FF] mb-4">Entre em Contato</h2>
          <p className="text-lg text-[#F1F1FF] opacity-80">
            Dúvidas ou sugestões? Nossa equipe está pronta para atender você!
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <div className="space-y-6 mb-12">
              <a
                href="https://api.whatsapp.com/send?phone=5566999857466&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Acabei%20de%20visitar%20o%20site%20poderia%20me%20falar%20um%20pouco%20mais%20sobre%20seus%20servi%C3%A7os%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-6 rounded-xl transition-all duration-300 hover:bg-[rgba(241,241,255,0.08)] cursor-pointer"
                style={{ backgroundColor: 'rgba(241, 241, 255, 0.05)' }}
              >
                <div className="text-[#B88654] flex-shrink-0">
                  <Phone className="lucide lucide-phone " width={28} height={28} strokeWidth={2} />
                </div>
                <div>
                  <div className="text-[#F1F1FF] opacity-70 text-sm mb-1">WhatsApp</div>
                  <div className="text-[#F1F1FF] font-medium">(66) 99985-7466</div>
                </div>
              </a>
              <a
                href="mailto:contato@expmadeiras.com.br"
                className="flex items-start gap-4 p-6 rounded-xl transition-all duration-300 hover:bg-[rgba(241,241,255,0.08)] cursor-pointer"
                style={{ backgroundColor: 'rgba(241, 241, 255, 0.05)' }}
              >
                <div className="text-[#B88654] flex-shrink-0">
                  <Mail className="lucide lucide-mail " width={28} height={28} strokeWidth={2} />
                </div>
                <div>
                  <div className="text-[#F1F1FF] opacity-70 text-sm mb-1">E-mail</div>
                  <div className="text-[#F1F1FF] font-medium">contato@expmadeiras.com.br</div>
                </div>
              </a>
              <a
                href="#"
                className="flex items-start gap-4 p-6 rounded-xl transition-all duration-300 "
                style={{ backgroundColor: 'rgba(241, 241, 255, 0.05)' }}
              >
                <div className="text-[#B88654] flex-shrink-0">
                  <MapPin className="lucide lucide-map-pin " width={28} height={28} strokeWidth={2} />
                </div>
                <div>
                  <div className="text-[#F1F1FF] opacity-70 text-sm mb-1">Localização</div>
                  <div className="text-[#F1F1FF] font-medium">
                    Estr. Jacinta, 466 - A - São Cristovao, Sinop - MT, 78558-000
                  </div>
                </div>
              </a>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#F1F1FF] mb-4">Siga-nos nas Redes</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/expmadeiras"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center text-[#F1F1FF] hover:bg-[#B88654] transition-all duration-300"
                  style={{ backgroundColor: 'rgba(241, 241, 255, 0.1)' }}
                >
                  <Facebook className="lucide lucide-facebook " width={24} height={24} strokeWidth={2} />
                </a>
                <a
                  href="https://www.instagram.com/expmadeiras"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center text-[#F1F1FF] hover:bg-[#B88654] transition-all duration-300"
                  style={{ backgroundColor: 'rgba(241, 241, 255, 0.1)' }}
                >
                  <Instagram className="lucide lucide-instagram " width={24} height={24} strokeWidth={2} />
                </a>
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Seu nome completo"
                  required
                  className="w-full px-4 py-4 rounded-lg transition-all duration-300 focus:outline-none"
                  style={inputStyle}
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="whatsapp"
                  placeholder="(00) 00000-0000"
                  required
                  className="w-full px-4 py-4 rounded-lg transition-all duration-300 focus:outline-none"
                  style={inputStyle}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="seu@email.com"
                  required
                  className="w-full px-4 py-4 rounded-lg transition-all duration-300 focus:outline-none"
                  style={inputStyle}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Assunto da mensagem"
                  required
                  className="w-full px-4 py-4 rounded-lg transition-all duration-300 focus:outline-none"
                  style={inputStyle}
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Como podemos ajudar você?"
                  rows={5}
                  required
                  className="w-full px-4 py-4 rounded-lg transition-all duration-300 focus:outline-none resize-none"
                  style={inputStyle}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-4 bg-[#B88654] text-[#F1F1FF] rounded-lg font-medium hover:brightness-110 transition-all duration-300 shadow-lg"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

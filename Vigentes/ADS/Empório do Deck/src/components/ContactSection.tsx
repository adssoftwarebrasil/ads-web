import { Clock, MessageCircle, Mail, Instagram, Facebook } from 'lucide-react';

export default function ContactSection() {
  const schedule = [
    { day: 'Segunda a Sexta', hours: '07:40 às 17:40', open: true },
    { day: 'Sábado', hours: '08:00 às 12:00', open: true },
    { day: 'Domingo', hours: 'Fechado', open: false },
  ];

  const currentDay = new Date().getDay();

  // Mensagem padrão para o WhatsApp codificada
  const whatsappUrl = "https://wa.me/5562991093647?text=Ol%C3%A1%2C%20vim%20pelo%20Google%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento!";

  return (
    <section id="contato" className="py-20 bg-beigeSand">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Visite Nossa Loja</h2>
          <p className="section-subtitle">Conheça nossos produtos pessoalmente</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-primary">
            <div className="flex justify-center mb-6">
              <Clock size={56} className="text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">Horários de Funcionamento</h3>
            <div className="space-y-4">
              {schedule.map((item, index) => (
                <div
                  key={item.day}
                  className={`flex justify-between items-center p-4 rounded-lg transition-colors ${
                    currentDay >= 1 && currentDay <= 5 && index === 0
                      ? 'bg-offWhite'
                      : currentDay === 6 && index === 1
                      ? 'bg-offWhite'
                      : ''
                  }`}
                >
                  <span className="font-semibold text-primary">{item.day}</span>
                  <span className={`font-medium ${item.open ? 'text-primaryMedium' : 'text-gray-500'}`}>
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-primary space-y-6">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">Entre em Contato</h3>

            <a
              href={whatsappUrl}
              className="flex items-center justify-center space-x-3 bg-whatsapp text-white py-4 px-6 rounded-xl hover:bg-opacity-90 transition-all hover:scale-105 shadow-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={24} />
              <span className="font-semibold text-lg">(62) 99109-3647</span>
            </a>

            <a
              href="mailto:emporiododeck@gmail.com"
              className="flex items-center space-x-3 text-primary hover:text-accent transition-colors py-3 px-4 border-2 border-beigeSand rounded-xl hover:border-accent"
            >
              <Mail size={24} />
              <span className="font-semibold">emporiododeck@gmail.com</span>
            </a>

            <div className="pt-6 border-t border-beigeSand">
              <h4 className="font-bold text-primary mb-4 text-center">Redes Sociais</h4>
              <div className="flex justify-center space-x-6">
                <a
                  href="https://instagram.com/emporio_deck_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <Instagram size={36} />
                </a>
                <a
                  href="https://facebook.com/emporiododeck"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <Facebook size={36} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
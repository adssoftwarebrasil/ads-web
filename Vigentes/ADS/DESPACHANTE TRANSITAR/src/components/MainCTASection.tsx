import { Phone, Mail } from 'lucide-react';

const MainCTASection = () => {
  const contacts = [
    {
      type: 'WhatsApp',
      icon: <Phone size={48} />,
      numbers: ['(66) 9 9985-4973'],
      buttonText: 'Chamar no WhatsApp',
      buttonColor: 'bg-[#25D366]',
      link: 'https://wa.me/556699854973'
    },
    {
      type: 'Telefone Fixo',
      icon: <Phone size={48} />,
      numbers: ['(66) 3422-2732'],
      buttonText: 'Ligar Agora',
      buttonColor: 'bg-accent-vibrant',
      link: 'tel:+556634222732'
    },
    {
      type: 'E-mail',
      icon: <Mail size={48} />,
      numbers: ['despachantetransitarmt@gmail.com'],
      buttonText: 'Enviar E-mail',
      buttonColor: 'bg-primary',
      link: 'mailto:despachantetransitarmt@gmail.com'
    }
  ];

  return (
    <section
      className="relative h-auto lg:h-[550px] bg-cover bg-center bg-fixed flex items-center"
      style={{
        backgroundImage: 'url(https://storage.lucasmendes.dev/site-sp/despachante%20transitar%2Fimgi_39_slider-3-1.jpg)'
      }}
    >
      {/* Overlay mais escuro para melhor contraste */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-primary/90" />
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Header com textos mais destacados */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 drop-shadow-2xl">
            Precisa Resolver a Documentação do Seu Veículo?
          </h2>
          <p className="text-2xl text-accent font-bold mb-4 drop-shadow-lg">
            Entre em contato agora e deixe tudo com a gente!
          </p>
          <p className="text-lg text-white drop-shadow-md">
            Atendemos Rondonópolis e região. Ligue, envie WhatsApp ou visite nosso escritório.
          </p>
        </div>

        {/* Cards de contato com melhor contraste */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="bg-white/15 backdrop-blur-xl border-2 border-white/30 rounded-2xl p-8 text-center hover:bg-white/20 hover:border-accent transition-all duration-300 shadow-2xl"
            >
              <div
                className={`${
                  index === 0 ? 'text-[#25D366]' : index === 1 ? 'text-accent' : 'text-primary-light'
                } mb-5 flex justify-center drop-shadow-lg`}
              >
                {contact.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 drop-shadow-md">
                {contact.type}
              </h3>
              <div className="space-y-2 mb-6">
                {contact.numbers.map((number, idx) => (
                  <p key={idx} className="text-white text-base drop-shadow">
                    {number}
                  </p>
                ))}
              </div>
              
                <a href={contact.link}
                target={contact.type === 'WhatsApp' ? '_blank' : undefined}
                rel={contact.type === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                className={`block ${contact.buttonColor} text-white py-3.5 px-6 rounded-lg font-bold hover:scale-105 transition-transform shadow-xl`}
              >
                {contact.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainCTASection;
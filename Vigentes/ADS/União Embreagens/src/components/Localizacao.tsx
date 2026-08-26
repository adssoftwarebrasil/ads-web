import { MapPin, Phone, Clock } from 'lucide-react';

export default function Localizacao() {
  return (
    <section className="py-20 bg-[rgb(60,88,144)] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Visite Nossa Loja</h2>
          <p className="text-xl opacity-90">Estamos prontos para atendê-lo</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="rounded-xl overflow-hidden shadow-2xl h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.1234567890!2d-47.8095!3d-21.1775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDEwJzM5LjAiUyA0N8KwNDgnMzQuMiJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização União Embreagens"
              style={{ border: '0px' }}
            ></iframe>
          </div>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="w-8 h-8 text-[rgb(240,178,121)] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Endereço</h3>
                <p className="text-lg opacity-90 leading-relaxed">
                  Avenida Brasil, 2.936 – Vila Elisa
                  <br />
                  Ribeirão Preto - SP
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Avenida+Brasil+2936+Vila+Elisa+Ribeirão+Preto+SP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-[rgb(240,178,121)] hover:text-white transition-colors font-semibold"
                >
                  Como Chegar →
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="w-8 h-8 text-[rgb(240,178,121)] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Telefone/WhatsApp</h3>
                <a
                  href="tel:+551636265853"
                  className="text-lg opacity-90 hover:text-[rgb(240,178,121)] transition-colors block"
                >
                  (16) 3626-5853
                </a>
                <a
                  href="https://wa.me/5516936265853"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 bg-[rgb(240,178,121)] text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all font-semibold"
                >
                  Chamar no WhatsApp
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Clock className="w-8 h-8 text-[rgb(240,178,121)] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Horário de Funcionamento</h3>
                <p className="text-lg opacity-90 leading-relaxed">
                  Segunda a Sexta: 08:00 às 17:30h
                  <br />
                  Sábado e Domingo: Fechado
                </p>
              </div>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-xl">
              <p className="text-lg font-semibold">
                Atendemos Ribeirão Preto e região num raio de até 300km
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

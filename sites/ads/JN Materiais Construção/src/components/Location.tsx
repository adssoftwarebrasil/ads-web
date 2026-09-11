import { MapPin, Navigation } from 'lucide-react';

const hours = [
  { day: 'Segunda-feira', time: '07:00 - 17:00', closed: false },
  { day: 'Terça-feira', time: '07:00 - 17:00', closed: false },
  { day: 'Quarta-feira', time: '07:00 - 17:00', closed: false },
  { day: 'Quinta-feira', time: '07:00 - 17:00', closed: false },
  { day: 'Sexta-feira', time: '07:00 - 17:00', closed: false },
  { day: 'Sábado', time: '07:00 - 17:00', closed: false },
  { day: 'Domingo', time: 'Fechado', closed: true },
];

export default function Location() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="bg-[rgb(216,27,27)] text-white px-4 py-2 rounded-full text-sm font-semibold">
              Nossa Localização
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(34,39,69)] mb-6">
            Visite Nossa Loja
          </h2>
          <p className="text-lg text-gray-600">
            Estamos localizados no centro de São Miguel/RN. Venha conhecer nossa
            estrutura e variedade de produtos.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-[rgb(34,39,69)] to-[rgb(44,58,128)] rounded-2xl p-8 text-white shadow-2xl">
            <div className="flex items-start gap-4 mb-8">
              <div className="bg-[rgb(216,27,27)] p-3 rounded-xl">
                <MapPin width={32} height={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Endereço Completo</h3>
                <p className="text-lg text-gray-200">
                  Rua Chico Otaviano, 138
                  <br />
                  Centro - São Miguel/RN
                </p>
              </div>
            </div>
            <div className="space-y-6 bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div>
                <h4 className="font-bold text-lg mb-2">
                  Horário de Funcionamento
                </h4>
                <div className="space-y-2 text-gray-200">
                  {hours.map((h, i) => (
                    <div
                      key={h.day}
                      className={
                        i === hours.length - 1
                          ? 'flex justify-between items-center'
                          : 'flex justify-between items-center border-b border-white/20 pb-2'
                      }
                    >
                      <span>{h.day}</span>
                      <span
                        className={
                          h.closed
                            ? 'font-semibold text-[rgb(216,27,27)]'
                            : 'font-semibold'
                        }
                      >
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/dir//JN+Material+de+Constru%C3%A7%C3%A3o/@-6.2138394,-38.5007339,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x7a4af7e425610a5:0x6b6c64879d518a4!2m2!1d-38.4183333!2d-6.2138417?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 w-full bg-[rgb(216,27,27)] text-white px-6 py-4 rounded-lg hover:bg-[rgb(196,17,17)] transition-all duration-300 font-bold text-lg shadow-xl flex items-center justify-center gap-2 transform hover:-translate-y-1"
            >
              <Navigation width={20} height={20} />
              Abrir no Google Maps
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl h-[600px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4063100.03637087!2d-39.49052388523199!3d-6.012427106890374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a4af7e425610a5%3A0x6b6c64879d518a4!2sJN%20Material%20de%20Constru%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1766482887586!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização J N Materiais de Construção"
              style={{ border: '0px' }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

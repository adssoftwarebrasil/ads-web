import { Award, Users, Shield } from 'lucide-react';

const stats = [
  { Icon: Award, value: '+4', label: 'Anos de Experiência' },
  { Icon: Users, value: '+100', label: 'Clientes Satisfeitos' },
  { Icon: Shield, value: '24h', label: 'Socorro Disponível' },
];

export default function About() {
  return (
    <section id="sobre" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-6">
              <span className="text-[rgb(233,155,29)] font-bold text-sm uppercase tracking-wider">
                Quem Somos
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mt-2 mb-4">
                Zé da Bateria
              </h2>
              <div className="w-20 h-1 bg-[rgb(233,155,29)] rounded-full"></div>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              A <strong>Zé da Bateria</strong> atua em Gurupi desde{' '}
              <strong>01/07/2019</strong>, oferecendo soluções completas em
              baterias automotivas, acessórios e serviços de manutenção elétrica.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Com um compromisso em atender nossos clientes com excelência e
              eficiência, temos um <strong>plantão 24 horas</strong> para socorro
              em casos de emergência. Nossa missão é ser a primeira opção para
              motoristas em necessidade, proporcionando um atendimento rápido e de
              qualidade.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Trabalhamos com as <strong>melhores marcas do mercado</strong> e
              garantimos a satisfação dos nossos clientes. Atendendo 24 horas por
              dia, nos destacamos pelo pronto atendimento e pela conveniência de
              oferecer retirada na loja e serviço de entrega.
            </p>
            <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-8">
              {stats.map(({ Icon, value, label }) => (
                <div
                  key={label}
                  className="text-center p-4 bg-gray-50 rounded-lg hover:bg-[rgb(233,155,29)]/10 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex justify-center mb-2">
                    <Icon size={32} className="text-[rgb(233,155,29)]" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-black mb-1">
                    {value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">
                    {label}
                  </div>
                </div>
              ))}
            </div>
            <a
              href="http://wa.me/556384458064"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[rgb(233,155,29)] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[rgb(213,135,9)] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Fale Conosco
            </a>
          </div>
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 sm:col-span-1">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/ze%20da%20bateria/img/quem-somos-img-01.webp"
                  alt="Zé da Bateria - Atendimento"
                  className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/ze%20da%20bateria/img/quem-somos-img-02.webp"
                  alt="Zé da Bateria - Serviços"
                  className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

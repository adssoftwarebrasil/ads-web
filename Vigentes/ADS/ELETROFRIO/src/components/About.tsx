import { Award, Users, Wrench } from 'lucide-react';

const features = [
  { icon: Award, title: 'Assistência Autorizada', subtitle: 'WEG e Franklin' },
  { icon: Users, title: '+20 Anos', subtitle: 'De Experiência' },
  { icon: Wrench, title: 'Soluções Completas', subtitle: 'Manutenção e Revenda' },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/eletrofrio%2Fimg%2Fquem-somos.webp"
                alt="Quem Somos - Mineiros Eletro Frio"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[rgb(28,85,163)] rounded-2xl -z-10 hidden lg:block"></div>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Quem Somos</h2>
            <h3 className="text-2xl font-semibold text-[rgb(28,85,163)] mb-6">MINEIROS ELETRO FRIO LTDA</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Com mais de 20 anos de experiência, a MINEIROS ELETRO FRIO LTDA se destaca na manutenção e revenda de
              motores elétricos, geradores e bombas d'água.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Como <strong>assistência técnica autorizada WEG e Franklin</strong>, nossa missão é oferecer um
              atendimento diferenciado e serviços de alta qualidade. Trabalhamos para entender as necessidades de cada
              cliente e proporcionar soluções eficazes, visando sempre a satisfação plena e a superação das expectativas
              na utilização de nossos produtos e serviços.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 bg-[rgb(28,85,163)]/10 rounded-full flex items-center justify-center mb-3">
                    <f.icon size={28} className="text-[rgb(28,85,163)]" />
                  </div>
                  <p className="font-semibold text-gray-900">{f.title}</p>
                  <p className="text-sm text-gray-600 mt-1">{f.subtitle}</p>
                </div>
              ))}
            </div>
            <a
              href="http://wa.me/5564999368011"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[rgb(28,85,163)] text-white px-8 py-3 rounded-full font-semibold hover:bg-[rgb(16,130,201)] transition-all duration-300 transform hover:scale-105"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

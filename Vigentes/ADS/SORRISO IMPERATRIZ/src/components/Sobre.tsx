import { Heart, Microscope, Users, Building2, LucideIcon } from 'lucide-react';

interface Feature {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  text: string;
}

const features: Feature[] = [
  {
    Icon: Heart,
    iconClass: 'lucide lucide-heart',
    title: 'Atendimento Humanizado',
    text: 'Cuidado personalizado com foco no seu conforto e bem-estar',
  },
  {
    Icon: Microscope,
    iconClass: 'lucide lucide-microscope',
    title: 'Equipamentos de Última Geração',
    text: 'Tecnologia avançada para tratamentos precisos e eficazes',
  },
  {
    Icon: Users,
    iconClass: 'lucide lucide-users',
    title: 'Profissionais Qualificados',
    text: 'Equipe especializada com anos de experiência e capacitação',
  },
  {
    Icon: Building2,
    iconClass: 'lucide lucide-building2',
    title: 'Ambiente Moderno',
    text: 'Espaço acolhedor e confortável para sua tranquilidade',
  },
];

export default function Sobre() {
  return (
    <section id="sobre" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/sorrisoimperatriz%2Fimg%2FQuem%20somos.webp"
              alt="Clínica Sorriso Imperatriz"
              className="rounded-2xl shadow-2xl w-full h-auto"
              loading="lazy"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[rgb(13,51,98)] mb-6">
              Excelência em Odontologia Há Mais de 10 Anos
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Fundada em 2013 pelo Dr. Maykon Roberto, a Clínica Sorriso
              Imperatriz nasceu com o propósito de oferecer tratamentos
              odontológicos de excelência com atendimento humanizado. Nossa
              missão é transformar sorrisos e vidas através da odontologia
              moderna, aliando tecnologia de ponta ao cuidado personalizado.
            </p>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              Com mais de uma década de atuação, conquistamos a confiança de
              milhares de pacientes, sempre priorizando a qualidade, segurança e
              satisfação de cada pessoa que passa por nossa clínica.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <f.Icon
                    className={`${f.iconClass} w-10 h-10 text-[rgb(100,149,237)] mb-4`}
                  />
                  <h3 className="text-lg font-bold text-[rgb(13,51,98)] mb-2">
                    {f.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {f.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

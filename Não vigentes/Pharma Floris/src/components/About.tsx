import { Heart, Award, Users } from 'lucide-react';
import { WHATSAPP_URL } from '../lib/constants';

const features = [
  {
    Icon: Heart,
    iconClass: 'lucide lucide-heart w-7 h-7 text-white',
    title: 'Compromisso com a Saúde',
    text: 'Nosso foco é sempre na sua saúde e bem-estar.',
  },
  {
    Icon: Award,
    iconClass: 'lucide lucide-award w-7 h-7 text-white',
    title: 'Fórmulas Inovadoras',
    text: 'Desenvolvemos soluções personalizadas e eficazes.',
  },
  {
    Icon: Users,
    iconClass: 'lucide lucide-users w-7 h-7 text-white',
    title: 'Atendimento Especializado',
    text: 'Profissionais capacitados sempre prontos para ajudar.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <div className="inline-flex items-center px-4 py-2 bg-[rgb(88,171,218)]/10 rounded-full">
              <span className="text-[rgb(88,171,218)] font-semibold text-sm uppercase tracking-wide">
                Quem Somos
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              PHARMA FLORIS
              <span className="block text-[rgb(130,116,187)] mt-2">
                Farmácia de Manipulação
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Na Pharma Floris, oferecemos medicamentos manipulados com alta
              qualidade e segurança. Localizada em São Carlos/SP, nossa farmácia
              de manipulação conta com uma equipe de profissionais qualificados,
              que está sempre pronta para atender suas necessidades de saúde e
              bem-estar.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Trabalhamos com fórmulas alopáticas, homeopáticas, fitoterápicas,
              cosméticos e mais, sempre personalizando nossos produtos para
              melhor atender ao nosso cliente.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-[rgb(88,171,218)] text-white font-semibold rounded-full hover:bg-[rgb(78,161,208)] transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Fale Conosco
            </a>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=pharmafloris%2Fpharmaflor.jpeg&version_id=null"
                alt="Pharma Floris - Quem Somos"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[rgb(130,116,187)] rounded-3xl -z-10 hidden lg:block"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[rgb(88,171,218)] rounded-3xl -z-10 hidden lg:block"></div>
          </div>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[rgb(88,171,218)] to-[rgb(130,116,187)] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <f.Icon width={24} height={24} className={f.iconClass} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3>
              <p className="text-gray-600 leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

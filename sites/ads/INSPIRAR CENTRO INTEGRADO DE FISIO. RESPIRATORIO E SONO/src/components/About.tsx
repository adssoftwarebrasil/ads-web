import { Target, Users, Award } from 'lucide-react';

const features = [
  { Icon: Target, iconName: 'target', label: 'Atendimento Personalizado' },
  { Icon: Users, iconName: 'users', label: 'Equipe Especializada' },
  { Icon: Award, iconName: 'award', label: 'Excelência Comprovada' },
];

export default function About() {
  return (
    <section
      id="sobre"
      className="relative py-24 sm:py-32 bg-blue-50 overflow-hidden"
    >
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 order-2 lg:order-1">
            <div className="space-y-4">
              <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
                Sobre Nós
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Cuidando da sua{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  saúde respiratória
                </span>
              </h2>
            </div>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Fundada em{' '}
                <strong className="text-blue-700 font-extrabold">2018</strong> pelo
                fisioterapeuta{' '}
                <strong className="text-blue-700 font-extrabold">
                  Petterson Gonçalves
                </strong>
                , a Inspirar Centro Integrado nasceu com o propósito de
                revolucionar o cuidado respiratório em Sinop/MT.
              </p>
              <p className="border-l-4 border-blue-500 pl-4 italic bg-white p-4 rounded-lg shadow-sm">
                Somos pioneiros em terapia ventilatória na região, combinando
                **tecnologia de ponta** com **atendimento humanizado** para
                proporcionar qualidade de vida aos nossos pacientes.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              {features.map(({ Icon, iconName, label }) => (
                <div
                  key={label}
                  className="text-center p-6 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border border-gray-100"
                >
                  <Icon
                    className={`lucide lucide-${iconName} w-8 h-8 mx-auto mb-3 text-blue-600`}
                    width={24}
                    height={24}
                  />
                  <p className="text-sm font-bold text-gray-900">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative order-1 lg:order-2 group">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white transition duration-500 transform group-hover:rotate-1">
              <img
                src="https://storage.lucasmendes.dev/site-sp/inspirar%2FQuem%20somos.png"
                alt="Petterson Gonçalves - Fundador da Inspirar Centro Integrado"
                className="w-full object-cover aspect-square lg:aspect-[4/3]"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 w-full h-full transform translate-x-4 translate-y-4 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-3xl -z-10 opacity-30 group-hover:translate-x-3 group-hover:translate-y-3 transition duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

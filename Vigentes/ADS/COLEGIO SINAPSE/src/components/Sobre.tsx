import { BookOpen, Target, Heart, Award } from 'lucide-react';

const features = [
  { Icon: BookOpen, title: 'Ensino de Excelência', text: 'Metodologia aprovada e reconhecida nacionalmente' },
  { Icon: Target, title: 'Foco em Resultados', text: 'Preparação específica para ENEM e vestibulares' },
  { Icon: Heart, title: 'Ensino Personalizado', text: 'Atenção individual para cada aluno' },
  { Icon: Award, title: 'Professores Qualificados', text: 'Equipe experiente e dedicada' },
];

export default function Sobre() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Sobre o
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[rgb(234,58,35)] to-[rgb(171,24,66)]">
                Colégio Sinapse
              </span>
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Desde 2020, o Colégio Sinapse se consolidou como uma das melhores instituições de ensino de Goiânia,
              oferecendo educação de excelência do Ensino Fundamental II ao Ensino Médio.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Integrado ao <strong className="text-[rgb(171,24,66)]">Sistema Bernoulli</strong> – reconhecido
              nacionalmente como o melhor método de ensino do país, com primeiro lugar no ENEM nos últimos anos – nosso
              colégio combina tradição, inovação e resultados concretos.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map(({ Icon, title, text }) => (
                <div key={title} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[rgb(234,58,35)] to-[rgb(171,24,66)] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                    <p className="text-sm text-gray-600">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/colegio%20sinapse%2Fimg%2Ffrente-colegio.webp"
                alt="Estudantes do Colégio Sinapse"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(95,0,102)] to-transparent opacity-30"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
              <p className="text-4xl font-bold text-[rgb(171,24,66)] mb-1">4+</p>
              <p className="text-gray-700 font-semibold">Anos de Excelência em Educação</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

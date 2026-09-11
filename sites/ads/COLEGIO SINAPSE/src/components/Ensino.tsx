import { BookMarked, GraduationCap, CheckCircle2, TrendingUp } from 'lucide-react';

const fundamentalItems = [
  'Metodologia Bernoulli adaptada à faixa etária',
  'Desenvolvimento de autonomia e responsabilidade',
  'Atividades complementares e projetos educacionais',
  'Preparação para o Ensino Médio e vestibulares',
];

const medioItems = [
  'Sistema Bernoulli completo - 1º lugar no ENEM',
  'Preparação específica para medicina e engenharia',
  'Simulados periódicos no modelo ENEM',
  'Orientação vocacional e acompanhamento individual',
];

export default function Ensino() {
  return (
    <section id="ensino" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Nossos
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[rgb(234,58,35)] to-[rgb(171,24,66)]">
              Níveis de Ensino
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Do Ensino Fundamental ao preparatório para as melhores universidades do país.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Ensino Fundamental II */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[rgb(234,58,35)] to-[rgb(171,24,66)] flex items-center justify-center">
                <BookMarked className="w-8 h-8 text-white" />
              </div>
              <div className="ml-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Ensino Fundamental II</h3>
                <p className="text-[rgb(171,24,66)] font-semibold">6º ao 9º ano</p>
              </div>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              Base sólida para o futuro acadêmico. Nosso Ensino Fundamental II desenvolve habilidades essenciais,
              pensamento crítico e amor pelo conhecimento.
            </p>
            <div className="space-y-3">
              {fundamentalItems.map((item) => (
                <div key={item} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-[rgb(234,58,35)] mt-1 flex-shrink-0" />
                  <p className="ml-3 text-gray-700">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <a
                href="http://wa.me/5562999690082?text=Olá! Gostaria de saber mais sobre o Ensino Fundamental II no Colégio Sinapse."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center bg-gradient-to-r from-[rgb(234,58,35)] to-[rgb(171,24,66)] text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Saiba Mais
              </a>
            </div>
          </div>

          {/* Ensino Médio */}
          <div className="bg-gradient-to-br from-[rgb(95,0,102)] to-[rgb(171,24,66)] rounded-3xl p-8 sm:p-10 shadow-xl text-white hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-[rgb(171,24,66)]" />
              </div>
              <div className="ml-4">
                <h3 className="text-2xl sm:text-3xl font-bold">Ensino Médio</h3>
                <p className="text-gray-200 font-semibold">1ª, 2ª e 3ª série</p>
              </div>
            </div>
            <p className="mb-6 leading-relaxed text-lg opacity-95">
              Preparação completa para ENEM e vestibulares. Transformamos estudantes em aprovados nas melhores
              universidades do Brasil.
            </p>
            <div className="space-y-3">
              {medioItems.map((item) => (
                <div key={item} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                  <p className="ml-3 opacity-95">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <a
                href="http://wa.me/5562999690082?text=Olá! Gostaria de saber mais sobre o Ensino Médio no Colégio Sinapse."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center bg-white text-[rgb(171,24,66)] px-8 py-4 rounded-full font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Saiba Mais
              </a>
            </div>
          </div>
        </div>

        {/* Preparatório */}
        <div className="bg-gradient-to-r from-[rgb(234,58,35)] to-[rgb(171,24,66)] rounded-3xl p-8 sm:p-10 flex flex-col lg:flex-row items-center justify-between shadow-2xl">
          <div className="flex items-center mb-6 lg:mb-0">
            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-8 h-8 text-[rgb(171,24,66)]" />
            </div>
            <div className="ml-6 text-white">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">Preparatório ENEM e Vestibulares</h3>
              <p className="text-lg opacity-90">Treinamento intensivo focado na aprovação</p>
            </div>
          </div>
          <a
            href="http://wa.me/5562999690082?text=Olá! Gostaria de saber mais sobre o Preparatório para ENEM e Vestibulares."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[rgb(171,24,66)] px-8 py-4 rounded-full font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 whitespace-nowrap"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </section>
  );
}

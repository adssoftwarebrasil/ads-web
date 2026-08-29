import { Baby, BookOpen } from 'lucide-react';

export default function Ensino() {
  return (
    <section id="ensino" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance" style={{ color: 'rgb(2, 73, 119)' }}>
            Níveis de Ensino
          </h2>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: 'rgb(246, 174, 9)' }}></div>
          <p className="mt-6 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Acompanhamos cada fase do desenvolvimento com amor, dedicação e excelência pedagógica
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col">
            <div className="relative h-56 md:h-64 overflow-hidden flex-shrink-0">
              <img src="https://storage.lucasmendes.dev/site-sp/escolamodelocristao%2Fcrianca-lendo-livros.jpg" alt="Educação Infantil" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full shadow-lg" style={{ backgroundColor: 'rgb(246, 174, 9)' }}>
                  <Baby className="lucide lucide-baby text-white md:w-7 md:h-7" width={24} height={24} />
                </div>
              </div>
            </div>
            <div className="p-6 md:p-8 flex-grow">
              <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: 'rgb(2, 73, 119)' }}>Educação Infantil</h3>
              <p className="text-base md:text-lg text-gray-500 mb-6">3 a 5 anos</p>
              <ul className="space-y-3">
                {['Metodologia lúdica e cristã', 'Desenvolvimento de habilidades sociais e emocionais', 'Preparação para o ensino fundamental'].map((li) => (
                  <li key={li} className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: 'rgb(246, 174, 9)' }}></div>
                    <span className="text-sm md:text-base text-gray-700">{li}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col">
            <div className="relative h-56 md:h-64 overflow-hidden flex-shrink-0">
              <img src="https://storage.lucasmendes.dev/site-sp/escolamodelocristao%2Fcriancas-uniforme-escola.jpg" alt="Ensino Fundamental I" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full shadow-lg" style={{ backgroundColor: 'rgb(2, 73, 119)' }}>
                  <BookOpen className="lucide lucide-book-open text-white md:w-7 md:h-7" width={24} height={24} />
                </div>
              </div>
            </div>
            <div className="p-6 md:p-8 flex-grow">
              <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: 'rgb(2, 73, 119)' }}>Ensino Fundamental I</h3>
              <p className="text-base md:text-lg text-gray-500 mb-6">6 a 10 anos</p>
              <ul className="space-y-3">
                {['Currículo acadêmico de excelência', 'Princípios bíblicos aplicados em todas as disciplinas', 'Formação de caráter e cidadania cristã'].map((li) => (
                  <li key={li} className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: 'rgb(2, 73, 119)' }}></div>
                    <span className="text-sm md:text-base text-gray-700">{li}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

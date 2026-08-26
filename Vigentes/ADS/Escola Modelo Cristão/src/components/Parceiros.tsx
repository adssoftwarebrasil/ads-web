import { BookOpen, Globe } from 'lucide-react';

export default function Parceiros() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance" style={{ color: 'rgb(2, 73, 119)' }}>
            Nossos Parceiros Pedagógicos
          </h2>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: 'rgb(246, 174, 9)' }}></div>
          <p className="mt-6 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Trabalhamos com os melhores sistemas educacionais para garantir excelência no aprendizado
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgb(2, 73, 119)' }}>
                <BookOpen className="lucide lucide-book-open text-white md:w-10 md:h-10" width={32} height={32} />
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-center mb-4" style={{ color: 'rgb(2, 73, 119)' }}>Sistema Mackenzie</h3>
            <div className="space-y-4">
              {['Material didático de excelência reconhecido nacionalmente', 'Integração de fé e conhecimento em todas as disciplinas'].map((t) => (
                <div key={t} className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: 'rgb(246, 174, 9)' }}></div>
                  <p className="text-sm md:text-base text-gray-700">{t}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 md:mt-8 p-4 bg-white rounded-lg shadow-inner">
              <p className="text-xs md:text-sm text-gray-600 text-center italic">"Educação que forma caráter e intelecto"</p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgb(246, 174, 9)' }}>
                <Globe className="lucide lucide-globe text-white md:w-10 md:h-10" width={32} height={32} />
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-center mb-4" style={{ color: 'rgb(2, 73, 119)' }}>Programa Edify</h3>
            <div className="space-y-4">
              {['Educação bilíngue de qualidade', 'Inglês integrado ao currículo de forma natural e eficaz'].map((t) => (
                <div key={t} className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: 'rgb(2, 73, 119)' }}></div>
                  <p className="text-sm md:text-base text-gray-700">{t}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 md:mt-8 p-4 bg-white rounded-lg shadow-inner">
              <p className="text-xs md:text-sm text-gray-600 text-center italic">"Preparando alunos para um mundo globalizado"</p>
            </div>
          </div>
        </div>
        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-block bg-gray-50 rounded-2xl p-6 md:p-8 shadow-lg">
            <img src="https://storage.lucasmendes.dev/site-sp/escolamodelocristao%2FLogo%20EMC%20.avif" alt="Escola Modelo Cristão" className="h-16 md:h-24 mx-auto" />
            <p className="mt-4 text-sm md:text-base text-gray-600 max-w-md px-4">
              Parcerias que fortalecem nossa missão de educar com excelência e valores cristãos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

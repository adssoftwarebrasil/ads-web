import { Quote } from 'lucide-react';

export default function Depoimentos() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance" style={{ color: 'rgb(2, 73, 119)' }}>
            O Que Dizem Sobre Nós
          </h2>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: 'rgb(246, 174, 9)' }}></div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col">
            <div className="relative h-56 md:h-64 overflow-hidden flex-shrink-0">
              <img src="https://storage.lucasmendes.dev/site-sp/escolamodelocristao%2Fduas-meninas-sorrindo.jpg" alt="Ex-aluna satisfeita" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute top-6 right-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: 'rgb(246, 174, 9)' }}>
                  <Quote className="lucide lucide-quote text-white md:w-6 md:h-6" width={20} height={20} />
                </div>
              </div>
            </div>
            <div className="p-6 md:p-8 flex-grow flex flex-col">
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6 italic flex-grow">
                "Entrei na Escola Modelo Cristão em 1997 e me formei em 2005. A escola teve papel fundamental em minha formação pessoal e espiritual. Hoje sou grata em poder ver minha filha estudando na mesma escola onde fui ensinada no caminho do Senhor. Sou formada em Arquitetura e Urbanismo e pós-graduada em Design de Interiores."
              </p>
              <div className="border-t border-gray-200 pt-4 mt-auto">
                <p className="font-bold text-base md:text-lg" style={{ color: 'rgb(2, 73, 119)' }}>Márcia Miluzzi Pacheco</p>
                <p className="text-xs md:text-sm text-gray-600">Ex-Aluna</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col">
            <div className="relative h-56 md:h-64 overflow-hidden flex-shrink-0">
              <img src="https://storage.lucasmendes.dev/site-sp/escolamodelocristao%2Fmenina-sorriso-tiara.jpg" alt="Alunos em destaque" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute top-6 right-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: 'rgb(2, 73, 119)' }}>
                  <Quote className="lucide lucide-quote text-white md:w-6 md:h-6" width={20} height={20} />
                </div>
              </div>
            </div>
            <div className="p-6 md:p-8 flex-grow flex flex-col">
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6 italic flex-grow">
                "Nossos ex-alunos têm se destacado em diversas áreas. Hoje temos formandos em Medicina, Engenharia, Arquitetura e outras profissões de destaque — frutos de uma formação acadêmica sólida fundamentada em princípios cristãos."
              </p>
              <div className="border-t border-gray-200 pt-4 mt-auto">
                <p className="font-bold text-base md:text-lg" style={{ color: 'rgb(2, 73, 119)' }}>Resultados Comprovados</p>
                <p className="text-xs md:text-sm text-gray-600">Excelência que transforma vidas</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 md:mt-16 text-center bg-gradient-to-r from-[#F6AE09] to-[#FF8C42] rounded-2xl p-6 md:p-12 text-white shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-balance">Mais de 25 Anos Transformando Vidas</h3>
          <p className="text-base md:text-xl max-w-3xl mx-auto">
            Milhares de alunos formados com valores cristãos sólidos e preparação acadêmica de excelência
          </p>
        </div>
      </div>
    </section>
  );
}

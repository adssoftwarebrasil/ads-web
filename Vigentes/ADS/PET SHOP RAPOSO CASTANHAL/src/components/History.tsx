export default function History() {
  return (
    <section id="history" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[rgb(253,118,22)]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[rgb(6,168,232)]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[rgb(255,232,4)]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-10 left-10 text-7xl opacity-10 animate-float">🐾</div>
        <div className="absolute top-20 right-16 text-6xl opacity-10 animate-float-delayed">🐾</div>
        <div className="absolute bottom-20 left-16 text-6xl opacity-10 animate-float">🐾</div>
        <div className="absolute bottom-10 right-10 text-7xl opacity-10 animate-float-delayed">🐾</div>
        <div className="absolute top-1/2 right-10 text-5xl opacity-8 animate-float">🐾</div>
        <div className="absolute top-1/3 left-20 text-5xl opacity-8 animate-float-delayed">🐾</div>
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
          Nossa História
        </h2>
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-[rgb(253,118,22)]">
          <div className="space-y-6 text-base text-gray-700 leading-relaxed">
            <p>
              O{' '}
              <span className="font-bold text-[rgb(253,118,22)]">
                PET RAPOSO CASTANHAL
              </span>{' '}
              nasceu de um sonho em outubro de 2016, idealizado por José Dimas.
            </p>
            <p>
              O que começou como uma pequena loja, cresceu e se transformou no
              centro de bem-estar animal que somos hoje. Estamos orgulhosamente
              há{' '}
              <span className="font-bold text-gray-900">9 anos no mercado</span>,
              construindo uma relação de confiança e amizade com nossa
              comunidade.
            </p>
            <p>
              Nossa longevidade é o reflexo do nosso compromisso em evoluir
              constantemente, acompanhando as novidades do mercado pet e, acima
              de tudo, ouvindo as necessidades de tutores e pets.
            </p>
            <div className="bg-[rgb(6,168,232)]/5 border-l-4 border-[rgb(6,168,232)] rounded-xl p-6 my-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">✨</span>Nosso diferencial está nos
                detalhes
              </h3>
              <p>
                Somos{' '}
                <span className="font-bold text-[rgb(6,168,232)]">
                  pioneiros
                </span>{' '}
                em trazer para os tutores de Castanhal alimentos de alta
                qualidade e de valor agregado, onde foi observado que havia
                necessidade de longas viagens para a capital para garantir estes
                produtos, otimizando assim a rotina e experiência de tutores e
                Pets.
              </p>
            </div>
            <div className="bg-gradient-to-r from-[rgb(253,118,22)]/10 to-[rgb(255,232,4)]/10 rounded-xl p-6 text-center border border-[rgb(253,118,22)]/20">
              <p className="text-lg font-bold text-[rgb(253,118,22)]">
                ❤️ No PET RAPOSO CASTANHAL o amor pelos animais é o que nos move
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border-t-4 border-[rgb(253,118,22)]">
                <div className="text-3xl mb-2">🎯</div>
                <h4 className="font-bold text-gray-900 mb-1">2016</h4>
                <p className="text-sm text-gray-600">Fundação por José Dimas</p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border-t-4 border-[rgb(6,168,232)]">
                <div className="text-3xl mb-2">🏆</div>
                <h4 className="font-bold text-gray-900 mb-1">9 Anos</h4>
                <p className="text-sm text-gray-600">De tradição e confiança</p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border-t-4 border-[rgb(255,232,4)]">
                <div className="text-3xl mb-2">⭐</div>
                <h4 className="font-bold text-gray-900 mb-1">Pioneiros</h4>
                <p className="text-sm text-gray-600">Produtos premium</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

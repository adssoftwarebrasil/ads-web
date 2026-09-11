import { Heart, Sparkles, TrendingUp } from 'lucide-react';

const STORE_IMG =
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=anjoscolchao%2Fquemsomos1.png&version_id=null';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#D1AD6E] to-transparent"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#004A69] mb-4">
            História
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Sobre a Anjos Colchões &amp; Sofás Marabá
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-12 md:mb-20">
          <div className="space-y-6">
            <div className="relative">
              <img
                src={STORE_IMG}
                alt="Loja Anjos Colchões"
                className="rounded-2xl md:rounded-3xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-[#D1AD6E] text-[#004A69] p-4 md:p-6 rounded-xl md:rounded-2xl shadow-2xl">
                <div className="text-3xl md:text-4xl font-bold">35</div>
                <div className="text-xs md:text-sm font-semibold">
                  Anos de História
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4 md:space-y-6">
            <div className="space-y-3 md:space-y-4">
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                Com{' '}
                <strong className="text-[#004A69]">
                  35 anos de história no mercado brasileiro
                </strong>
                , a Anjos Colchões &amp; Sofás é a maior rede de colchões e sofás do
                Brasil e da América Latina, reconhecida por oferecer conforto,
                qualidade e inovação em cada produto.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Fundada a partir de um sonho familiar, a marca cresceu e se
                consolidou em todo o país, tornando-se referência em colchões, camas
                box, sofás e estofados sob medida.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                A{' '}
                <strong className="text-[#004A69]">
                  Anjos Colchões &amp; Sofás Marabá – Cidade Nova
                </strong>{' '}
                traz para o Pará toda a tradição e excelência da marca. Localizada na
                Av. Nagib Mutran, Quadra 04, Lote 12, a loja oferece um showroom
                completo com produtos que unem design, tecnologia e bem-estar, além de
                um atendimento especializado e entregas rápidas em Marabá e região.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base font-semibold text-[#004A69]">
                Anjos Colchões &amp; Sofás – 35 anos de conforto e qualidade que
                transformam o seu lar
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 md:gap-4 pt-4 md:pt-6">
              <div className="text-center p-3 md:p-4 bg-gradient-to-br from-[#004A69] to-[#003D5C] rounded-xl md:rounded-2xl shadow-lg">
                <Heart className="w-6 h-6 md:w-8 md:h-8 text-[#D1AD6E] mx-auto mb-1 md:mb-2" />
                <div className="text-lg md:text-2xl font-bold text-white mb-1">
                  Família
                </div>
                <div className="text-xs text-gray-300">Tradição</div>
              </div>
              <div className="text-center p-3 md:p-4 bg-gradient-to-br from-[#D1AD6E] to-[#C19B5E] rounded-xl md:rounded-2xl shadow-lg">
                <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-[#004A69] mx-auto mb-1 md:mb-2" />
                <div className="text-lg md:text-2xl font-bold text-[#004A69] mb-1">
                  Qualidade
                </div>
                <div className="text-xs text-[#004A69]/70">Premium</div>
              </div>
              <div className="text-center p-3 md:p-4 bg-gradient-to-br from-[#004A69] to-[#003D5C] rounded-xl md:rounded-2xl shadow-lg">
                <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-[#D1AD6E] mx-auto mb-1 md:mb-2" />
                <div className="text-lg md:text-2xl font-bold text-white mb-1">
                  Excelência
                </div>
                <div className="text-xs text-gray-300">Sempre</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-[#004A69] via-[#003D5C] to-[#004A69] rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-[#D1AD6E] rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-[#D1AD6E] rounded-full opacity-10 blur-3xl"></div>
          <div className="relative z-10">
            <div className="text-center mb-8 md:mb-12">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
                A Maior Rede do Brasil e América Latina
              </h3>
              <p className="text-base md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Referência em colchões, camas box, sofás e estofados sob medida, com
                atendimento especializado e entregas rápidas em Marabá e região.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20">
                <div className="text-3xl md:text-4xl font-bold text-[#D1AD6E] mb-2">
                  Brasil
                </div>
                <div className="text-sm md:text-base text-white font-medium">
                  Maior Rede
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20">
                <div className="text-3xl md:text-4xl font-bold text-[#D1AD6E] mb-2">
                  Inovação
                </div>
                <div className="text-sm md:text-base text-white font-medium">
                  Tecnologia
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20">
                <div className="text-3xl md:text-4xl font-bold text-[#D1AD6E] mb-2">
                  35
                </div>
                <div className="text-sm md:text-base text-white font-medium">
                  Anos de Conforto
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

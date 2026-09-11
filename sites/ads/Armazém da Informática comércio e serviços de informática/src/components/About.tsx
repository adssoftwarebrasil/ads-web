import { Award, Heart, Target, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/armazen%20informatica%2Fimg%2Floja-informatica-interior-01.webp"
                alt="Interior da loja Armazém da Informática"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[rgb(0,168,89)] text-white p-8 rounded-2xl shadow-xl max-w-xs">
              <div className="text-5xl font-bold mb-2">20+</div>
              <div className="text-lg font-medium">Anos de Tradição e Excelência</div>
            </div>
          </div>

          <div>
            <div className="inline-block bg-[rgb(46,47,147)]/10 text-[rgb(46,47,147)] px-4 py-2 rounded-full mb-4">
              <span className="font-semibold">Quem Somos</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Mais de Duas Décadas Transformando{' '}
              <span className="text-[rgb(0,168,89)]">Tecnologia em Soluções</span>
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Há mais de 20 anos, o <strong>Armazém da Informática</strong> trilha um caminho de excelência
              no mercado de tecnologia. Nossa jornada é marcada pela paixão em oferecer soluções completas
              e personalizadas para cada cliente.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Ao longo de duas décadas, acompanhamos de perto a evolução da informática, adquirindo expertise
              para atender às suas necessidades com precisão. Somos referência em
              <strong> engenharia de hardware</strong>, otimização de notebooks multimarcas,
              upgrades de performance, consultoria em acessórios e setup de máquinas
              de alto desempenho.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[rgb(0,168,89)]/10 rounded-lg flex items-center justify-center">
                  <Target className="text-[rgb(0,168,89)]" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Missão</h3>
                  <p className="text-gray-600 text-sm">Oferecer soluções tecnológicas de excelência</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[rgb(46,47,147)]/10 rounded-lg flex items-center justify-center">
                  <Heart className="text-[rgb(46,47,147)]" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Valores</h3>
                  <p className="text-gray-600 text-sm">Confiabilidade, qualidade e atendimento humanizado</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[rgb(0,168,89)]/10 rounded-lg flex items-center justify-center">
                  <Users className="text-[rgb(0,168,89)]" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Clientes</h3>
                  <p className="text-gray-600 text-sm">Milhares de clientes satisfeitos em Curitiba</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[rgb(46,47,147)]/10 rounded-lg flex items-center justify-center">
                  <Award className="text-[rgb(46,47,147)]" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Qualidade</h3>
                  <p className="text-gray-600 text-sm">Procedimentos certificados e atendimento completo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
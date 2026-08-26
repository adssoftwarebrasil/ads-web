import { Award, Target, TrendingUp, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://storage.lucasmendes.dev/site-sp/tamboraria%20tocatins%2Fimg%2Fcarro-branco-tamboraria-fachada-hero.webp"
                alt="Fachada Tamboraria Tocantins"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[rgb(78,128,196)]/20 rounded-2xl -z-0"></div>
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-[rgb(51,71,144)]/20 rounded-2xl -z-0"></div>
          </div>

          <div>
            <div className="inline-block bg-[rgb(78,128,196)]/10 rounded-full px-6 py-2 mb-6">
              <p className="text-[rgb(51,71,144)] font-semibold">Sobre Nós</p>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[rgb(45,62,84)] mb-6 leading-tight">
              20 Anos de Tradição e Qualidade
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              A Tamboraria Tocantins se consolidou como referência em Paraíso do Tocantins,
              oferecendo soluções completas em produtos plásticos para o agronegócio. Nossa
              trajetória de duas décadas é marcada pelo compromisso com a qualidade e a
              satisfação dos nossos clientes.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Comercializamos uma ampla gama de produtos, desde tambores e bombonas plásticas
              até cochos de polietileno, containers IBC de 1000L, bebedouros para gado, tintas
              impermeabilizantes e chapas de polietileno para caçambas basculantes. Somos o elo
              essencial entre fornecedores e produtores rurais, viabilizando investimentos
              eficientes no setor agropecuário.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-[rgb(78,128,196)]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-[rgb(51,71,144)]" />
                </div>
                <h3 className="font-bold text-2xl text-[rgb(51,71,144)] mb-2">20+</h3>
                <p className="text-gray-600">Anos no Mercado</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-[rgb(78,128,196)]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-[rgb(51,71,144)]" />
                </div>
                <h3 className="font-bold text-2xl text-[rgb(51,71,144)] mb-2">1000+</h3>
                <p className="text-gray-600">Clientes Satisfeitos</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-[rgb(78,128,196)]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-[rgb(51,71,144)]" />
                </div>
                <h3 className="font-bold text-2xl text-[rgb(51,71,144)] mb-2">100%</h3>
                <p className="text-gray-600">Qualidade Garantida</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-[rgb(78,128,196)]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-[rgb(51,71,144)]" />
                </div>
                <h3 className="font-bold text-2xl text-[rgb(51,71,144)] mb-2">3</h3>
                <p className="text-gray-600">Estados Atendidos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

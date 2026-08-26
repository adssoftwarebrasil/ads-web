import { Award, TrendingUp, Heart, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: 'Qualidade Garantida',
      description: 'Produtos selecionados de marcas nacionais e importadas renomadas'
    },
    {
      icon: TrendingUp,
      title: 'Lançamentos Exclusivos',
      description: 'Sempre atualizados com as últimas novidades do mercado'
    },
    {
      icon: Heart,
      title: 'Atendimento Premium',
      description: 'Equipe especializada pronta para ajudar você a encontrar o que precisa'
    },
    {
      icon: Users,
      title: 'Experiência Comprovada',
      description: 'Anos de expertise em representação comercial e vendas no varejo'
    }
  ];

  return (
    <section id="sobre" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#f4ccd4]/20 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <div className="inline-block">
              <span className="text-[#c40278] font-bold text-sm uppercase tracking-wider bg-[#f4ccd4]/30 px-4 py-2 rounded-full">
                Nossa História
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#230015] leading-tight">
              Mais que uma loja, uma <span className="text-[#c40278]">experiência completa</span> em beleza
            </h2>

            <p className="text-lg text-[#350020]/80 leading-relaxed">
              A Biolune nasceu do sonho e da expertise de profissionais com anos de experiência em representação comercial e atendimento ao varejo. Com um desejo genuíno de crescer e inovar, criamos um espaço onde beleza, qualidade e bom atendimento se encontram.
            </p>

            <p className="text-lg text-[#350020]/80 leading-relaxed">
              Nossas lojas possuem um mix variado de produtos, com marcas nacionais e importadas, sempre trazendo os últimos lançamentos do mercado. Tudo isso com preços competitivos e um ambiente bonito e acolhedor, pensado para profissionais e pessoas que amam se cuidar.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-[#f4ccd4]/20 to-white p-6 rounded-2xl border border-[#f4ccd4] hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1"
                >
                  <div className="bg-gradient-to-br from-[#c40278] to-[#851756] w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-[#230015] text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-[#350020]/70 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#c40278]/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#851756]/20 rounded-full blur-2xl"></div>

              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300">
                    <img
                      src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=Biolune%20cosm%C3%A9ticos%20e%20beleza%2Fimagem-interior-da-loja-produtos-beleza.webp&version_id=null"
                      alt="Interior da loja Biolune"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300 mt-8">
                    <img
                      src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=Biolune%20cosm%C3%A9ticos%20e%20beleza%2Fprodutos-kit-shampoo-e-condicionador.webp&version_id=null"
                      alt="Produtos Biolune"
                      className="w-full h-56 object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300">
                    <img
                      src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=Biolune%20cosm%C3%A9ticos%20e%20beleza%2Fprodutos-secante-de-esmalte-e-esmalte.webp&version_id=null"
                      alt="Esmaltes Biolune"
                      className="w-full h-56 object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300">
                    <img
                      src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=Biolune%20cosm%C3%A9ticos%20e%20beleza%2Fprodutos-tinta-cabelo-maquiagem-po-compacto.webp&version_id=null"
                      alt="Maquiagem Biolune"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

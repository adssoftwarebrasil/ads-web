const quoteUrl =
  'https://api.whatsapp.com/send?phone=553186610041&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Acabei%20de%20visitar%20o%20site%20poderia%20me%20falar%20um%20pouco%20mais%20sobre%20seus%20servi%C3%A7os%3F';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-[#256C8F] font-semibold tracking-wide uppercase mb-2">
            Quem somos
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Asmyseg Corretora
          </h3>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              A Asmyseg Corretora de Seguros foi fundada em 2014 com o propósito
              de atender a demanda de seguros personalizados na região do
              Barreiro, em Belo Horizonte. Desde seu início, focou em automóveis
              e residências, expandindo posteriormente para seguros de vida e
              empresariais.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Surgiu com o objetivo de atender à demanda local por seguros
              personalizados. Ao longo dos anos, adaptou-se às mudanças do
              mercado, expandindo para seguros de vida, saúde e empresariais,
              especialmente durante a crise de 2015 e a pandemia de 2020.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Com mais de uma década de experiência, destacamo-nos pela
              proximidade com nossos clientes e pela adaptação às mudanças do
              mercado, tornando-nos uma referência local.
            </p>
            <div className="pt-4">
              <a
                href={quoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#FA0000] text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Faça aqui sua cotação
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <img
                src="https://storage.lucasmendes.dev/site-sp/asmysegcorretora/Quem%20somos1.webp"
                alt="Asmyseg Corretora"
                className="w-full h-64 object-cover rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              />
            </div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/asmysegcorretora/Quem%20somos2.webp"
              alt="Equipe Asmyseg"
              className="w-full h-48 object-cover rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            />
            <img
              src="https://storage.lucasmendes.dev/site-sp/asmysegcorretora/Quem%20somos3.webp"
              alt="Atendimento Asmyseg"
              className="w-full h-48 object-cover rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

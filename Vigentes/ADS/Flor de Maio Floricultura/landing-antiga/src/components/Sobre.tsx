const checks = [
  'Entrega expressa no mesmo dia',
  'Mais de 500 produtos disponíveis',
  'Atendimento de domingo a domingo',
  '39 anos de experiência',
];

export default function Sobre() {
  return (
    <section id="sobre" className="bg-[#fef8f5] py-16 lg:py-28 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="relative">
              <img
                src="https://storage.lucasmendes.dev/site-sp/giovannaflores%2Fflor%20de%20maio%202.png"
                alt="Flores Flor de Maio"
                className="w-full h-auto max-w-md mx-auto lg:max-w-full object-contain rounded-[30px] shadow-[0_20px_60px_rgba(254,0,0,0.25)]"
                loading="lazy"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-[rgba(254,0,0,0.1)] text-[rgb(200,0,0)] px-5 py-2 rounded-full text-sm font-bold tracking-wide mb-6 border border-[rgba(254,0,0,0.2)]">
              🌹 DESDE 1986
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#1a1a1a] mb-6 leading-tight">
              A História da Floricultura Mais <span className="text-[rgb(254,0,0)]">Tradicional</span>{' '}
              de São Luís
            </h2>
            <div className="space-y-5 text-base lg:text-lg text-[#4a4a4a] leading-[1.8] mb-8 max-w-2xl">
              <p>
                A Flor de Maio Floricultura nasceu em novembro de 1986, tornando-se a loja mais
                antiga em atividade na cidade de São Luís. Começamos no centro da cidade e chegamos a
                ter 5 lojas físicas espalhadas pela capital.
              </p>
              <p>
                Com o crescimento das vendas online, hoje contamos com uma loja física moderna e um
                sistema de vendas à distância que atende toda São Luís e região metropolitana. Nossa
                experiência de quase quatro décadas nos torna referência em flores naturais.
              </p>
              <p>
                Somos especialistas em criar momentos especiais através dos presentes mais
                românticos: flores naturais premium, pelúcias, chocolates finos, vinhos selecionados
                e cestas personalizadas. Garantimos qualidade excepcional, entrega rápida no mesmo
                dia e preços justos.
              </p>
              <p className="font-medium">
                Funcionamos e entregamos de domingo a domingo, porque sabemos que momentos especiais
                não escolhem dia da semana. 💐
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {checks.map((c) => (
                <div key={c} className="flex items-start gap-3">
                  <span className="text-2xl text-[rgb(254,0,0)] font-bold">✓</span>
                  <span className="text-[#4a4a4a]">{c}</span>
                </div>
              ))}
            </div>
            <a
              href="https://giovannaflores.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[rgb(254,0,0)] text-white px-9 py-4 rounded-xl font-semibold text-lg hover:bg-[rgb(220,0,0)] transition-all duration-300 shadow-[0_6px_20px_rgba(254,0,0,0.3)] hover:shadow-[0_8px_28px_rgba(254,0,0,0.4)] hover:-translate-y-0.5"
            >
              Conhecer Nossos Produtos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

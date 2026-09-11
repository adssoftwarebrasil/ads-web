export default function Sobre() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-[#234783] text-white rounded-full px-4 py-2 text-sm font-semibold mb-6">
              📅 Desde 2016
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Contix é Líder no Segmento Contábil em Campo Grande - MS
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
              <p>
                A empresa surgiu por meio de 3 estudantes universitários
                talentosos e empreendedores da Universidade Federal de Mato
                Grosso do Sul (UFMS), polo de Três Lagoas - MS, que trabalhavam
                em escritório de contabilidade durante todo o período de
                formação acadêmica, adquirindo experiência prática valiosa e
                conhecimento profundo do mercado contábil.
              </p>
              <p>
                Decidiram abrir um escritório de contabilidade em sociedade,
                unindo suas competências e visões complementares. Porém, para
                não abrir concorrência direta contra a empresa em que
                trabalhavam e mantinham excelente relacionamento, decidiram
                estrategicamente se mudar para Campo Grande/MS, capital do
                estado, para fundar o Contix Inovação Contábil com uma proposta
                diferenciada e inovadora.
              </p>
              <p>
                Com mais de 8 anos de mercado, a Contix se consolidou como
                referência em contabilidade estratégica para micro e pequenas
                empresas em Campo Grande e região, sempre mantendo os valores de
                transparência, inovação tecnológica e atendimento humanizado que
                guiaram sua fundação.
              </p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-white border-l-4 border-[#234783] rounded-xl p-6 mb-8">
              <div className="font-semibold text-lg mb-2 text-gray-900">
                Nosso Propósito
              </div>
              <p className="text-gray-600 leading-relaxed">
                Queremos fazer a diferença na vida dos nossos clientes para que
                eles possam fazer a diferença para o Brasil. Nosso propósito é
                ajudar as micro e pequenas empresas a crescer, prosperar e se
                desenvolver através de serviços de excelência, tecnologia de
                ponta, atendimento humanizado e consultoria estratégica que
                realmente transforma negócios.
              </p>
            </div>
            <a
              href="https://www.youtube.com/watch?v=48nCUxrqhtY"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105"
            >
              📹 Conheça o Escritório
            </a>
          </div>
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/contix%2Fimg%2FContix%20e%CC%81%20li%CC%81der%20no%20segmento%20conta%CC%81bil%20em%20Campo%20Grande%20-%20MS.png"
              alt="Contix é líder no segmento contábil em Campo Grande - MS"
              className="w-full h-auto rounded-2xl shadow-2xl object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

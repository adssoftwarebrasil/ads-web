import { DollarSign, Award } from 'lucide-react';

export default function Differentials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#C41D1D] mb-4">Nossos Diferenciais</h2>
          <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
            O compromisso com a excelência está em cada detalhe do nosso trabalho
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="relative rounded-[2.5rem] overflow-hidden min-h-[400px] group shadow-2xl">
            <div
              className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
              style={{
                backgroundImage:
                  'url("https://storage.lucasmendes.dev/site-sp/casadasbombasecompressores%2FPRE%C3%87O%20JUSTO.webp")',
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#C41D1D]/95 to-[#C41D1D]/80 group-hover:from-[#C41D1D]/90 group-hover:to-[#C41D1D]/70 transition-all duration-500"></div>
            <div className="relative z-10 p-10 sm:p-12 flex flex-col justify-end h-full text-white">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/50 transform group-hover:-translate-y-2 transition-transform duration-500">
                <div className="bg-[#C41D1D] rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <DollarSign width={36} height={36} className="lucide lucide-dollar-sign stroke-white stroke-[2.5]" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Preço Justo</h3>
                <p className="text-lg leading-relaxed text-white">
                  Oferecemos os melhores preços do mercado sem comprometer a qualidade. Transparência e honestidade em
                  cada orçamento, garantindo o melhor custo-benefício para você.
                </p>
              </div>
            </div>
          </div>
          <div className="relative rounded-[2.5rem] overflow-hidden min-h-[400px] group shadow-2xl">
            <div
              className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
              style={{
                backgroundImage:
                  'url("https://storage.lucasmendes.dev/site-sp/casadasbombasecompressores%2FQUALIDADE.webp")',
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#C41D1D]/95 to-[#C41D1D]/80 group-hover:from-[#C41D1D]/90 group-hover:to-[#C41D1D]/70 transition-all duration-500"></div>
            <div className="relative z-10 p-10 sm:p-12 flex flex-col justify-end h-full text-white">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/50 transform group-hover:-translate-y-2 transition-transform duration-500">
                <div className="bg-[#FFB703] rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Award width={36} height={36} className="lucide lucide-award stroke-[#333] stroke-[2.5]" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Qualidade</h3>
                <p className="text-lg leading-relaxed text-white">
                  Mais de 22 anos de experiência garantindo excelência em produtos e serviços. Trabalhamos apenas com
                  marcas renomadas e peças originais para sua total segurança e satisfação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Building2, Users, Target, Award } from 'lucide-react'

export default function About() {
  const images = [
    { src: "https://storage.lucasmendes.dev/site-sp/gerasolenergia%2Fquem-somos-escritorio-energia-solar.webp", alt: "Escritório" },
    { src: "https://storage.lucasmendes.dev/site-sp/gerasolenergia%2Fquem-somos-mesa-painel-solar.webp", alt: "Engenharia" },
    { src: "https://storage.lucasmendes.dev/site-sp/gerasolenergia%2Fsala-escritorio-energia-solar.webp", alt: "Atendimento" },
    { src: "https://storage.lucasmendes.dev/site-sp/gerasolenergia%2Fcaminhao-guindaste.webp", alt: "Logística" }
  ]

  return (
    <section id="about" className="py-16 md:py-32 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Lado das Imagens (Vem primeiro no mobile para melhor fluxo) */}
          <div className="order-1 lg:order-2 relative">
            {/* Decoração de fundo */}
            <div className="absolute -top-6 -right-6 w-32 h-32 md:w-64 md:h-64 bg-[rgb(187,212,46)]/10 rounded-full blur-3xl -z-10"></div>
            
            {/* Grid Adaptável */}
            <div className="grid grid-cols-2 lg:grid-cols-12 gap-3 md:gap-4">
              {/* Imagem 1 */}
              <div className="lg:col-span-7">
                <img
                  src={images[0].src}
                  alt={images[0].alt}
                  className="rounded-2xl md:rounded-3xl shadow-lg w-full h-40 md:h-64 lg:h-80 object-cover hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              {/* Imagem 2 */}
              <div className="lg:col-span-5 lg:pt-8">
                <img
                  src={images[1].src}
                  alt={images[1].alt}
                  className="rounded-2xl md:rounded-3xl shadow-lg w-full h-40 md:h-64 lg:h-64 object-cover hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              {/* Imagem 3 - Oculta em celulares muito pequenos se necessário, ou mantida no grid 2x2 */}
              <div className="lg:col-span-5 lg:-mt-8">
                <img
                  src={images[3].src}
                  alt={images[3].alt}
                  className="rounded-2xl md:rounded-3xl shadow-lg w-full h-40 md:h-64 lg:h-72 object-cover hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              {/* Imagem 4 */}
              <div className="lg:col-span-7">
                <img
                  src={images[2].src}
                  alt={images[2].alt}
                  className="rounded-2xl md:rounded-3xl shadow-lg w-full h-40 md:h-64 lg:h-60 object-cover hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>

            {/* Badge Flutuante - Ajustado para mobile */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[rgb(44,56,152)] text-white p-4 md:p-6 rounded-2xl shadow-2xl border-4 border-white scale-75 md:scale-100">
              <div className="text-center">
                <span className="block text-2xl md:text-4xl font-black text-[rgb(187,212,46)]">10+</span>
                <span className="text-[10px] md:text-xs uppercase font-bold tracking-tighter leading-tight">Anos de <br /> Referência</span>
              </div>
            </div>
          </div>

          {/* Lado do Texto */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[rgb(187,212,46)]/10 text-[rgb(44,56,152)] mb-6">
              <Award size={18} className="text-[rgb(187,212,46)]" />
              <span className="text-xs font-bold uppercase tracking-widest">Desde 2016</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold text-[rgb(44,56,152)] mb-6 md:mb-8 leading-tight">
              Liderança e Inovação em <br className="hidden md:block" />
              <span className="text-[rgb(187,212,46)] underline decoration-4 underline-offset-8">Energia Solar</span>
            </h2>

            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <p>
                A <span className="font-bold text-[rgb(44,56,152)]">Gerarsol Soluções Elétricas</span> nasceu em Luís Eduardo Magalhães com um propósito claro: entregar excelência técnica onde outros entregam apenas o básico.
              </p>
              <p>
                Projetamos <span className="text-[rgb(44,56,152)] font-semibold uppercase text-sm tracking-wide">independência energética</span> para empresas, fazendas e residências.
              </p>
            </div>

            {/* Diferenciais em Grid Responsivo */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 group">
                <Building2 className="text-[rgb(249,133,30)] mb-3 mx-auto lg:mx-0" size={28} />
                <h4 className="text-sm font-bold text-[rgb(44,56,152)]">Empresa</h4>
                <p className="text-xs text-gray-500">Desde 2016 em LEM.</p>
              </div>
              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 group">
                <Users className="text-[rgb(249,133,30)] mb-3 mx-auto lg:mx-0" size={28} />
                <h4 className="text-sm font-bold text-[rgb(44,56,152)]">Suporte</h4>
                <p className="text-xs text-gray-500">Atendimento especializado.</p>
              </div>
              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 group">
                <Target className="text-[rgb(249,133,30)] mb-3 mx-auto lg:mx-0" size={28} />
                <h4 className="text-sm font-bold text-[rgb(44,56,152)]">Missão</h4>
                <p className="text-xs text-gray-500">Energia limpa para todos.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
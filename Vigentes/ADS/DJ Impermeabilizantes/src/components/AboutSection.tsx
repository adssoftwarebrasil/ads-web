import { CheckCircle2, ShieldCheck, TrendingUp } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Elemento decorativo de fundo (sutil) - Ajustado para não vazar */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-gray-50 -skew-x-12 translate-x-20 z-0 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Coluna de Texto */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-8 h-[2px] bg-[#eeb932]"></span>
              <span className="text-[#eeb932] font-bold text-sm uppercase tracking-widest">
                Quem Somos
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#525152] mb-6 leading-tight">
              Excelência e compromisso em <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eeb932] to-yellow-600">Impermeabilização</span>
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Com sede em Jaraguá do Sul, a <strong>DJ Instalação e Manutenção Predial</strong> é especialista em proteger seu patrimônio. Desde 2018, combinamos técnica apurada e produtos de alta performance para entregar resultados definitivos contra infiltrações.
            </p>

            {/* Lista de Diferenciais Estilizada */}
            <div className="space-y-6">
              {[
                {
                  title: "Produtos Premium",
                  desc: "Trabalhamos apenas com marcas líderes e certificadas.",
                  icon: CheckCircle2
                },
                {
                  title: "Corpo Técnico Especializado",
                  desc: "Profissionais capacitados para diagnósticos precisos.",
                  icon: TrendingUp
                },
                {
                  title: "Garantia e Segurança",
                  desc: "Soluções duráveis que valorizam o seu imóvel.",
                  icon: ShieldCheck
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start group p-4 rounded-xl transition-all duration-300 hover:bg-gray-50 border border-transparent hover:border-gray-100">
                  <div className="bg-[#eeb932]/10 p-3 rounded-lg mr-4 group-hover:bg-[#eeb932] transition-colors duration-300">
                    <item.icon className="text-[#eeb932] group-hover:text-white transition-colors duration-300" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#525152] text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna de Imagem com Efeito de Camadas */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              {/* Overlay sutil ao passar o mouse */}
              <div className="absolute inset-0 bg-[#525152]/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              
              <img
                src="https://storage.lucasmendes.dev/site-sp/djimpermeabilizantes%2Ftintas-pinceis-ferramentas-estante-com-tintas.webp"
                alt="Estoque DJ Impermeabilizantes"
                className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>

            {/* Badge Flutuante - Elemento de Autoridade - Ajustado para não vazar */}
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 lg:-bottom-6 lg:-left-8 bg-white p-4 md:p-6 rounded-xl shadow-xl border-l-4 border-[#eeb932] max-w-[250px] hidden sm:block z-20">
              <div className="flex items-center gap-3">
                <div className="text-3xl md:text-4xl font-bold text-[#525152]">2018</div>
                <div className="text-xs md:text-sm text-gray-500 font-medium leading-tight">
                  Ano de<br/>Fundação
                </div>
              </div>
              <p className="mt-2 text-xs text-gray-400 border-t border-gray-100 pt-2">
                Histórico comprovado de qualidade na região de SC.
              </p>
            </div>

            {/* Elementos Decorativos de Fundo (Blobs) - Contidos */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#eeb932]/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-gray-200/50 rounded-full blur-3xl -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
import { Building2, Calendar, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="quem-somos" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block text-[#0072BA] font-bold text-sm tracking-widest uppercase mb-4">Nossa História</span>
            <h2 className="text-5xl md:text-7xl font-black text-[#004688] mb-6">
              Quem Somos
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-[#0072BA] to-transparent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="group relative overflow-hidden bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#0072BA]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#0072BA]/10 to-transparent rounded-bl-full"></div>
              <div className="relative">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#0072BA] to-[#004E9C] text-white rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg">
                  <Calendar size={36} />
                </div>
                <h3 className="text-3xl font-black text-[#004688] mb-3">Desde 2006</h3>
                <p className="text-gray-600 font-medium">Pioneira no mercado</p>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#0072BA]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#0072BA]/10 to-transparent rounded-bl-full"></div>
              <div className="relative">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#0072BA] to-[#004E9C] text-white rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg">
                  <Building2 size={36} />
                </div>
                <h3 className="text-3xl font-black text-[#004688] mb-3">Região Sul</h3>
                <p className="text-gray-600 font-medium">Atendimento completo</p>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#0072BA]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#0072BA]/10 to-transparent rounded-bl-full"></div>
              <div className="relative">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#0072BA] to-[#004E9C] text-white rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg">
                  <Award size={36} />
                </div>
                <h3 className="text-3xl font-black text-[#004688] mb-3">Qualidade</h3>
                <p className="text-gray-600 font-medium">Equipamentos modernos</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-10 md:p-12 border border-gray-100">
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p className="text-xl">
                Pioneira no ramo de locação de equipamentos para construção, a <strong className="text-[#0072BA] font-extrabold">Locadora Sul</strong> foi fundada em 2006, surgiu com o propósito de oferecer equipamentos novos, modernos e de alta performance para atender às demandas dos setores de construção civil, industrial e energético em todo o Sul do Brasil.
              </p>

              <p className="text-lg">
                Desde o início, a empresa se destaca pela qualidade do maquinário, agilidade no atendimento e comprometimento com cada cliente, tornando-se uma parceira estratégica para construtoras, usinas, PCHs (Pequenas Centrais Hidrelétricas) e profissionais da construção em geral.
              </p>

              <p className="text-lg">
                Com uma frota constantemente renovada e mantida em excelente estado de conservação, a Locadora Sul garante segurança, eficiência e produtividade em todas as etapas dos projetos que participa.
              </p>

              <p className="text-lg">
                Hoje, é reconhecida como uma empresa sólida e inovadora, que alia tradição, seriedade e tecnologia para oferecer o melhor em locação de máquinas e equipamentos, entregando resultados com qualidade e confiança a seus clientes em toda a região Sul.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Award, Shield, TrendingUp, Leaf, Droplet, TreePine, Building2, Fish } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A472A] mb-6">
            Mais de 20 anos de experiência a serviço da sua tranquilidade
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-[#333333] leading-relaxed mb-6">
              Fundada em 2013, a Planus Ambiental nasceu da visão de um profissional com vasta experiência no setor público,
              atuando por uma década no órgão ambiental do Estado de Goiás. Desde 2004 no mercado, acumulamos o conhecimento
              técnico e prático para navegar com segurança pelas complexidades da legislação ambiental.
            </p>
            <p className="text-lg text-[#333333] leading-relaxed">
              Nosso diferencial é o compromisso em legalizar e regularizar a situação dos nossos clientes. Essa experiência
              se traduz em <strong className="text-[#1A472A]">segurança jurídica, otimização de custos e acesso a novas
              oportunidades de negócio</strong> para você.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-[#F8F9FA] p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#8BC34A]">
              <div className="flex items-start">
                <div className="bg-[#8BC34A] p-3 rounded-lg mr-4">
                  <Award className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1A472A] mb-2">20+ Anos no Mercado</h3>
                  <p className="text-[#333333]">Experiência consolidada desde 2004, com atuação em órgão ambiental estadual</p>
                </div>
              </div>
            </div>

            <div className="bg-[#F8F9FA] p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#8BC34A]">
              <div className="flex items-start">
                <div className="bg-[#8BC34A] p-3 rounded-lg mr-4">
                  <Shield className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1A472A] mb-2">Segurança Jurídica</h3>
                  <p className="text-[#333333]">Conformidade total com a legislação, protegendo seu negócio de multas e sanções</p>
                </div>
              </div>
            </div>

            <div className="bg-[#F8F9FA] p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#8BC34A]">
              <div className="flex items-start">
                <div className="bg-[#8BC34A] p-3 rounded-lg mr-4">
                  <TrendingUp className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1A472A] mb-2">Crescimento Sustentável</h3>
                  <p className="text-[#333333]">Estratégias que abrem portas para novos negócios e investimentos</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-gradient-to-br from-[#1A472A] to-[#2d5e42] rounded-2xl overflow-hidden shadow-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">Soluções Completas em Gestão Ambiental</h3>
              <p className="text-lg md:text-xl text-white/90">Do planejamento à execução, transformando desafios ambientais em oportunidades de crescimento</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 border border-white/20">
              <div className="flex flex-col md:flex-row items-center gap-6 mb-8 pb-8 border-b border-white/20">
                <div className="w-20 h-20 bg-[#8BC34A] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Leaf className="text-[#1A472A]" size={40} />
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">PLANUS AMBIENTAL</h2>
                  <p className="text-xl text-[#8BC34A] font-semibold">Soluções Ambientais</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white/5 rounded-xl p-5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#8BC34A] rounded-lg flex items-center justify-center">
                      <Droplet className="text-[#1A472A]" size={24} />
                    </div>
                    <h4 className="text-white font-bold text-base">Outorgas e Recursos Hídricos</h4>
                  </div>
                  <ul className="text-white/80 text-sm space-y-2">
                    <li>• Outorga de uso da água de barramento</li>
                    <li>• Outorga de uso da água de irrigação</li>
                    <li>• Outorga de uso da água de piscicultura</li>
                    <li>• Outorga de poço artesiano</li>
                    <li>• Dispensa de mini poço</li>
                    <li>• Projeto de irrigação para pivô</li>
                    <li>• Levantamento planialtimétrico de barragem</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#8BC34A] rounded-lg flex items-center justify-center">
                      <TreePine className="text-[#1A472A]" size={24} />
                    </div>
                    <h4 className="text-white font-bold text-base">Gestão Ambiental Rural</h4>
                  </div>
                  <ul className="text-white/80 text-sm space-y-2">
                    <li>• Cadastro Ambiental Rural (CAR)</li>
                    <li>• Georreferenciamento</li>
                    <li>• Plano de Recuperação de Área Degradada (PRAD)</li>
                    <li>• Desmatamento</li>
                    <li>• Cabos ópticos para internet</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#8BC34A] rounded-lg flex items-center justify-center">
                      <Building2 className="text-[#1A472A]" size={24} />
                    </div>
                    <h4 className="text-white font-bold text-base">Licenciamento Industrial</h4>
                  </div>
                  <ul className="text-white/80 text-sm space-y-2">
                    <li>• Cerâmica</li>
                    <li>• Loteamento</li>
                    <li>• Posto de combustível</li>
                    <li>• Mecânica</li>
                    <li>• Mineração</li>
                    <li>• Lava jato</li>
                    <li>• Armazém de grãos</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#8BC34A] rounded-lg flex items-center justify-center">
                      <Fish className="text-[#1A472A]" size={24} />
                    </div>
                    <h4 className="text-white font-bold text-base">Piscicultura</h4>
                  </div>
                  <ul className="text-white/80 text-sm space-y-2">
                    <li>• Criação de peixe</li>
                    <li>• Projetos técnicos especializados</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
                  <div>
                    <p className="text-white font-bold text-xl mb-1">GIOVANI COSTA</p>
                    <p className="text-white/80 text-base">Engenheiro Ambiental</p>
                    <p className="text-white/80 text-base">Engenheiro de Segurança do Trabalho</p>
                  </div>
                  <div className="text-center md:text-right">
                    <p className="text-[#8BC34A] font-bold text-xl">(62) 98187-4429</p>
                    <p className="text-[#8BC34A] font-bold text-xl">(62) 99685-0017</p>
                    <p className="text-white/80 text-base mt-2">@planusambiental</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

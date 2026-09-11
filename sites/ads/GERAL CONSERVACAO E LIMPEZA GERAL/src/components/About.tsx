import { Building2, Users, Shield, Award } from 'lucide-react';

const stats = [
  { icon: Building2, value: '+500', label: 'Projetos Realizados' },
  { icon: Users, value: '+200', label: 'Colaboradores' },
  { icon: Shield, value: '100%', label: 'Conformidade' },
  { icon: Award, value: 'Top 1', label: 'Em Manaus' },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[rgb(3,171,255)] font-semibold text-sm md:text-base uppercase tracking-wider mb-4 block">
              Quem Somos
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Parceria, Segurança e Performance para o seu Negócio
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[rgb(2,103,253)] to-[rgb(3,171,255)] mx-auto rounded-full"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                A <strong className="text-[rgb(2,103,253)]">Geral Conservação &amp; Limpeza</strong> é uma
                empresa especializada em terceirização de serviços, facilities e soluções completas em
                limpeza profissional, manutenção predial e conservação.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Atendemos empresas, condomínios, indústrias, hospitais, clínicas e órgãos públicos em Manaus
                e região com equipes treinadas, supervisão contínua e total conformidade com normas como{' '}
                <strong>NR-35, NR-33, ANVISA, PMOC e ABNT</strong>.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Somos reconhecidos pela <strong className="text-[rgb(2,103,253)]">excelência</strong>, rapidez
                no atendimento e entregas técnicas com laudos fotográficos, FISPQ dos produtos utilizados e
                padrão profissional em todas as etapas.
              </p>
              <div className="pt-4">
                <a
                  href="https://wa.me/5592981671587?text=Olá! Gostaria de conhecer melhor os serviços da Geral."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-[rgb(2,103,253)] text-white px-8 py-4 rounded-full font-bold hover:bg-[rgb(3,171,255)] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <span>Conheça Mais Sobre Nós</span>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.label}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-2"
                  >
                    <div className="bg-gradient-to-br from-[rgb(2,103,253)] to-[rgb(3,171,255)] w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{s.value}</h3>
                    <p className="text-gray-600 font-medium">{s.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bg-gradient-to-r from-[rgb(2,103,253)] to-[rgb(3,171,255)] rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Mais do que serviços, oferecemos parceria
              </h3>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Com sede em Manaus e atuação em toda a região, entregamos eficiência, responsabilidade e
                resultados reais. Trabalhamos com excelência em serviços terceirizados, com qualidade e
                confiança.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

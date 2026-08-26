import { Award, Users, Target, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';

const stats = [
  { Icon: Award, value: '12+', label: 'Anos de Experiência' },
  { Icon: Users, value: '500+', label: 'Empresas Atendidas' },
  { Icon: Target, value: '100%', label: 'Foco em Resultados' },
  { Icon: TrendingUp, value: '40%', label: 'Economia Média em Impostos' },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-[rgb(245,134,52)]/10 rounded-full">
                <span className="text-[rgb(245,134,52)] font-semibold text-sm">
                  SOBRE NÓS
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[rgb(47,55,56)] mb-6">
                Especialistas em Contabilidade e Planejamento Tributário desde
                2012
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                A <strong>Soluções Contábeis E Assessoria</strong> nasceu com a
                missão de transformar a gestão tributária em um diferencial
                competitivo para empresas de médio e grande porte no Mato Grosso.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Desde 2012, oferecemos contabilidade e assessoria tributária
                especializada, promovendo crescimento empresarial por meio de
                planejamento e gestão tributária de alto desempenho. Nossa
                expertise em <strong>Lucro Real</strong> nos torna referência para
                supermercados, açougues e empresas do comércio varejista e
                atacadista.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Atendemos empresas em Rondonópolis, Jaciara, Juscimeira,
                Guiratinga, Água Boa, Querência, Itiquira e todas as cidades do
                Mato Grosso. Nosso objetivo é claro:{' '}
                <strong>
                  viabilizar economia, crescimento e ganhos de capital
                </strong>{' '}
                para empresas que buscam reduzir a carga tributária de forma legal
                e estratégica.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contato"
                  className="bg-[rgb(245,134,52)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[rgb(225,114,32)] transition-all transform hover:scale-105 text-center"
                >
                  Conheça Nossas Soluções
                </a>
                <a
                  href="https://www.instagram.com/solucoescontabeismt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-[rgb(245,134,52)] text-[rgb(245,134,52)] px-8 py-4 rounded-lg font-semibold hover:bg-[rgb(245,134,52)] hover:text-white transition-all text-center"
                >
                  Siga no Instagram
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[rgb(245,134,52)] to-[rgb(225,114,32)] rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map(({ Icon, value, label }) => (
                    <div
                      key={label}
                      className="bg-white rounded-xl p-6 text-center transform hover:scale-105 transition-transform"
                    >
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-[rgb(245,134,52)]/10 rounded-lg mb-3">
                        <Icon size={24} className="text-[rgb(245,134,52)]" />
                      </div>
                      <div className="text-3xl font-bold text-[rgb(47,55,56)] mb-1">
                        {value}
                      </div>
                      <div className="text-sm text-gray-600 font-medium">
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[rgb(245,134,52)]/20 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[rgb(245,134,52)]/20 rounded-full blur-3xl"></div>
            </div>
          </div>
          <div className="mt-16 pt-12 border-t border-gray-100">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-[rgb(47,55,56)] mb-12 max-w-3xl mx-auto">
              Antecipe-se às novas regras tributárias e coloque sua empresa na
              frente
            </h3>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-[rgb(245,134,52)] hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white p-2 rounded-lg shadow-sm">
                    <Lightbulb size={24} className="text-[rgb(245,134,52)]" />
                  </div>
                  <h4 className="text-xl font-bold text-[rgb(47,55,56)]">
                    Visão Estratégica
                  </h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Tenha visão estratégica para crescer enquanto outros ainda estão
                  tentando entender as mudanças fiscais. Reduza seus impostos de
                  forma legal, inteligente e altamente estruturada.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-[rgb(47,55,56)] hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white p-2 rounded-lg shadow-sm">
                    <ShieldCheck size={24} className="text-[rgb(47,55,56)]" />
                  </div>
                  <h4 className="text-xl font-bold text-[rgb(47,55,56)]">
                    Segurança Fiscal
                  </h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Dominamos profundamente os regimes{' '}
                  <strong>
                    Simples Nacional, Lucro Presumido e Lucro Real
                  </strong>
                  , criando a estrutura ideal para reduzir custos, eliminar
                  desperdícios e aumentar sua margem de lucro com total segurança.
                </p>
              </div>
            </div>
            <div className="text-center relative">
              <span className="text-6xl text-[rgb(245,134,52)]/20 absolute -top-8 left-1/2 -translate-x-1/2 font-serif">
                "
              </span>
              <p className="text-2xl font-bold text-[rgb(47,55,56)] italic relative z-10">
                Quem se antecipa economiza. Quem se planeja cresce.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

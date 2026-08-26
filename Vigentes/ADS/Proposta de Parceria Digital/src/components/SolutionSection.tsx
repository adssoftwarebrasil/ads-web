import { TrendingUp, Instagram, Code, CheckCircle2, Award } from 'lucide-react';

export default function SolutionSection() {
  return (
    <section id="solucao" className="py-20 bg-white" aria-label="Plano de Ação">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-900">O Plano de Ação: Sua Solução Completa</h2>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-slate-800 border-l-4 border-blue-500 pl-4">
            Performance e Aquisição (Tráfego Pago)
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 hover:border-blue-400 transition-all hover:shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-blue-500 p-3 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Google Ads</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Campanhas estratégicas na Rede de Pesquisa, Display e YouTube para capturar clientes no momento
                    exato da busca.
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-200">
                <div className="text-sm text-slate-500 mb-1">Investimento (Gestão)</div>
                <div className="text-3xl font-bold text-slate-900">
                  R$ 800<span className="text-lg text-slate-500">/mês</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 hover:border-blue-400 transition-all hover:shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-blue-500 p-3 rounded-lg">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Meta Ads (Facebook &amp; Instagram)</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Anúncios segmentados para construir audiência, gerar reconhecimento de marca e converter seguidores
                    em clientes.
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-200">
                <div className="text-sm text-slate-500 mb-1">Investimento (Gestão)</div>
                <div className="text-3xl font-bold text-slate-900">
                  R$ 700<span className="text-lg text-slate-500">/mês</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-slate-800 border-l-4 border-blue-500 pl-4">
            A Fundação Digital (Desenvolvimento Web)
          </h3>
          <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 rounded-xl border border-blue-200 shadow-md">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-blue-500 p-3 rounded-lg">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-slate-900 mb-2">Website Profissional de Alta Conversão</h4>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Um site focado em experiência do usuário, rápido e otimizado para seus objetivos de negócio.
                </p>
                <div className="bg-white p-4 rounded-lg mb-4 border border-slate-200">
                  <h5 className="font-semibold text-slate-900 mb-2 text-sm">Incluímos materiais profissionais:</h5>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Portifólio de sites prontos para agregar ao seu projeto</li>
                    <li>• Briefing personalizado com a logomarca da sua agência</li>
                    <li>
                      • Materiais de apoio para facilitar a aprovação com seu cliente (Ainda em "português", mas podem
                      ser alterados)
                    </li>
                  </ul>
                </div>
                <div className="inline-flex items-start gap-3 bg-green-100 text-green-800 px-4 py-3 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div className="font-semibold">
                    <div>Bônus:</div>
                    <div className="text-sm mt-1 space-y-1">
                      <div>• 1 ano de hospedagem premium</div>
                      <div>• 1 ano de domínio .com</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-blue-200">
              <div className="text-sm text-slate-500 mb-1">Investimento (Taxa Única)</div>
              <div className="text-3xl font-bold text-slate-900">
                R$ 949<span className="text-lg text-slate-500"> (único)</span>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-xl border border-slate-300 shadow-md">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-slate-700 p-3 rounded-lg">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-slate-900 mb-2">E-commerce Sob Medida</h4>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Loja virtual completa com sistema de pagamento, gestão de produtos e integração com marketplaces.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 p-3 rounded-lg">
                    <p className="text-sm text-amber-900">
                      <span className="font-semibold">Desenvolvimento personalizado:</span> Cada projeto é único e o
                      investimento varia conforme funcionalidades, integrações e volume de produtos.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-300">
                <div className="text-sm text-slate-500 mb-1">Investimento (a partir de)</div>
                <div className="text-3xl font-bold text-slate-900">
                  R$ 5.890<span className="text-lg text-slate-500"> (orçamento sob consulta)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-600" />
                Condições Especiais de Negociação
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Os valores apresentados podem ser negociados de acordo com a demanda e volume de projetos da agência.
                Entre em contato para discutirmos condições especiais para parcerias de longo prazo.
              </p>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Observação Importante</h3>
              <p className="text-slate-700">
                Valores de gestão mensal (Google Ads e Meta Ads) não incluem o investimento em mídia paga. Esses valores
                são apenas a taxa de gestão dos nossos especialistas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

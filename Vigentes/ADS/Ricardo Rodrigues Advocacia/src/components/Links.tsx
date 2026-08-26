import { ExternalLink } from 'lucide-react';

interface LinkItem {
  href: string;
  label: string;
}

interface LinkGroup {
  title: string;
  links: LinkItem[];
}

const groups: LinkGroup[] = [
  {
    title: 'Calculadoras e Índices',
    links: [
      {
        href: 'https://www3.bcb.gov.br/CALCIDADAO/publico/exibirFormFinanciamentoPrestacoesFixas.do?method=exibirFormFinanciamentoPrestacoesFixas',
        label: 'Calculadora Financiamento',
      },
      {
        href: 'https://www3.bcb.gov.br/CALCIDADAO/publico/corrigirPelaTaxaSelic.do?method=corrigirPelaTaxaSelic',
        label: 'Correção de Valores',
      },
      {
        href: 'https://www.ibge.gov.br/estatisticas/economicas/precos-e-custos/9256-indice-nacional-de-precos-ao-consumidor-amplo.html',
        label: 'Índices Oficiais - IBGE',
      },
      {
        href: 'https://www.bcb.gov.br/estatisticas/txjuros',
        label: 'Índices Oficiais - SELIC',
      },
      {
        href: 'https://veiculos.fipe.org.br/',
        label: 'Tabela FIPE',
      },
    ],
  },
  {
    title: 'Certidões',
    links: [
      {
        href: 'https://solucoes.receita.fazenda.gov.br/servicos/certidaointernet/pf/emitir',
        label: 'CND União - Pessoa Física',
      },
      {
        href: 'https://solucoes.receita.fazenda.gov.br/servicos/certidaointernet/pj/emitir',
        label: 'CND União - Pessoa Jurídica',
      },
      {
        href: 'https://www.sefaz.se.gov.br/',
        label: 'Certidão SEFAZ Sergipe',
      },
      {
        href: 'https://www.aracaju.se.gov.br/sefisc/',
        label: 'Certidão SEMFAZ Aracaju',
      },
    ],
  },
  {
    title: 'Serviços TJSE',
    links: [
      {
        href: 'https://www.tjse.jus.br/',
        label: 'Calendário Feriados',
      },
      {
        href: 'https://www.tjse.jus.br/jurisprudencia/sumulas',
        label: 'Súmulas TJSE',
      },
      {
        href: 'https://www.tjse.jus.br/consultas',
        label: 'Consulta Processos',
      },
    ],
  },
  {
    title: 'Tribunais e Justiça',
    links: [
      {
        href: 'https://portal.stf.jus.br/',
        label: 'STF - Supremo Tribunal Federal',
      },
      {
        href: 'https://www.stj.jus.br/',
        label: 'STJ - Superior Tribunal de Justiça',
      },
      {
        href: 'https://www.tst.jus.br/',
        label: 'TST - Tribunal Superior do Trabalho',
      },
      {
        href: 'https://www.trf5.jus.br/',
        label: 'TRF5 - Tribunal Regional Federal 5ª Região',
      },
    ],
  },
];

export default function Links() {
  return (
    <section id="links" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(47,44,34)] mb-4">Links Úteis</h2>
          <p className="text-xl text-gray-600">Acesso rápido a serviços e ferramentas jurídicas</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {groups.map((group) => (
            <div
              key={group.title}
              className="bg-gray-50 p-6 rounded-2xl hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-[rgb(47,44,34)] mb-4 pb-3 border-b-2 border-[#d9b33c]">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-2 text-gray-700 hover:text-[#d9b33c] transition-colors"
                    >
                      <ExternalLink
                        size={16}
                        className="flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
                      />
                      <span className="text-sm leading-relaxed">{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

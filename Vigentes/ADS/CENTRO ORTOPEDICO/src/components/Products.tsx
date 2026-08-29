import { Footprints, Accessibility, Shield, PersonStanding, Ruler, Boxes } from 'lucide-react';
import { WHATSAPP_PADRAO, whatsapp } from '../lib/contato';

const produtos = [
  {
    icon: Accessibility,
    titulo: 'Próteses',
    texto:
      'Próteses de membros superiores e inferiores, personalizadas e ajustadas ao coto e à rotina de cada paciente.',
  },
  {
    icon: Shield,
    titulo: 'Órteses',
    texto:
      'Órteses para estabilização, correção e suporte, em diversos materiais e níveis de rigidez.',
  },
  {
    icon: PersonStanding,
    titulo: 'Coletes 3D',
    texto:
      'Nossa especialidade histórica: coletes para tratamento de coluna produzidos por escaneamento e fresagem.',
  },
  {
    icon: Footprints,
    titulo: 'Palmilhas de silicone',
    texto:
      'Palmilhas sob medida, moldadas a partir da avaliação da pisada para aliviar dor e corrigir apoio.',
  },
  {
    icon: Ruler,
    titulo: 'Calçados ortopédicos',
    texto:
      'Calçados adaptados e sob medida para deformidades, discrepâncias de membros e pés sensíveis.',
  },
  {
    icon: Boxes,
    titulo: 'Linha pro-coluna',
    texto:
      'Suportes, imobilizadores e acessórios para prevenção e tratamento de problemas de coluna.',
  },
];

export default function Products() {
  return (
    <section id="produtos" className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <span className="text-[#0e6d8f] font-bold text-sm uppercase tracking-[0.2em]">
            O que fabricamos
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b3d5c] mt-3 mb-5 leading-tight">
            Produtos ortopédicos sob medida
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Toda a linha é produzida ou adaptada na nossa oficina, o que permite ajustar a peça
            durante o tratamento sempre que o paciente precisar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {produtos.map(({ icon: Icon, titulo, texto }) => (
            <div
              key={titulo}
              className="group bg-white border border-gray-100 rounded-2xl p-8 hover:border-[#0e6d8f]/40 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0e6d8f]/10 flex items-center justify-center mb-5 group-hover:bg-[#0e6d8f] transition-colors duration-300">
                <Icon size={24} className="text-[#0e6d8f] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#0b3d5c] mb-3">{titulo}</h3>
              <p className="text-gray-600 leading-relaxed mb-5">{texto}</p>
              <a
                href={whatsapp(`Olá! Gostaria de saber mais sobre: ${titulo}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0e6d8f] font-semibold hover:text-[#f59e0b] transition-colors"
              >
                Consultar disponibilidade →
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#0b3d5c] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              Não encontrou o que procura?
            </h3>
            <p className="text-white/70">
              Nossa linha é ampla e boa parte dos itens é feita sob encomenda. Fale com a equipe
              técnica.
            </p>
          </div>
          <a
            href={WHATSAPP_PADRAO}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-[#f59e0b] hover:bg-[#d97706] text-[#0b3d5c] px-7 py-4 rounded-xl font-bold transition-colors duration-300 text-center"
          >
            Falar com a equipe
          </a>
        </div>
      </div>
    </section>
  );
}

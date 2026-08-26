import { Award, Users, CheckCircle2, TrendingUp } from 'lucide-react';

const stats = [
  { Icon: Award, value: '+1000', label: 'Produtos Disponíveis', border: 'border-[#AA1C1F]', iconColor: 'text-[#AA1C1F]', mt: '' },
  { Icon: Users, value: '100%', label: 'Satisfação Cliente', border: 'border-[#0A1E55]', iconColor: 'text-[#0A1E55]', mt: 'mt-8' },
  { Icon: CheckCircle2, value: '2023', label: 'Ano de Fundação', border: 'border-[#0A1E55]', iconColor: 'text-[#AA1C1F]', mt: '' },
  { Icon: TrendingUp, value: 'Top', label: 'Marcas do Mercado', border: 'border-[#AA1C1F]', iconColor: 'text-[#0A1E55]', mt: 'mt-8' },
];

const reasons = [
  { title: 'Qualidade Garantida', desc: 'Produtos das melhores marcas' },
  { title: 'Atendimento Especializado', desc: 'Equipe qualificada e experiente' },
  { title: 'Variedade Completa', desc: 'Ferramentas para todas necessidades' },
  { title: 'Localização Estratégica', desc: 'Fácil acesso em Redenção - PA' },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-white to-[#E6E6E4]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#AA1C1F] font-semibold text-sm uppercase tracking-wide">Sobre Nós</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1E55] mt-3 mb-6">
              Sua Parceira em <span className="text-[#AA1C1F]">Ferramentas Profissionais</span>
            </h2>
            <div className="w-24 h-1 bg-[#AA1C1F] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                A <strong className="text-[#0A1E55]">FORTMAQ</strong> é uma loja especializada na venda de ferramentas e
                equipamentos voltados para diversos setores, oferecendo soluções tanto para profissionais quanto para o
                público em geral.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Localizada em <strong className="text-[#0A1E55]">Redenção, no estado do Pará</strong>, disponibilizamos
                uma ampla variedade de produtos que atendem áreas como construção civil, manutenção industrial,
                agricultura e uso doméstico.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nos destacamos por oferecer{' '}
                <strong className="text-[#AA1C1F]">ferramentas manuais, elétricas e pneumáticas</strong>, além de itens
                como equipamentos de proteção individual (EPIs), parafusadeiras, furadeiras, esmerilhadeiras, chaves,
                alicates, serras, compressores e muito mais.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Comprometidos com a <strong className="text-[#0A1E55]">qualidade e o bom atendimento</strong>, buscamos
                sempre as melhores marcas e condições para nossos clientes.
              </p>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                {stats.map(({ Icon, value, label, border, iconColor, mt }) => (
                  <div
                    key={label}
                    className={`bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border-t-4 ${border} ${mt}`}
                  >
                    <Icon className={`w-12 h-12 ${iconColor} mb-4`} />
                    <h3 className="text-3xl font-bold text-[#0A1E55] mb-2">{value}</h3>
                    <p className="text-gray-600 font-medium">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-[#0A1E55] rounded-3xl p-8 sm:p-12 text-center shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">Por que escolher a FORTMAQ?</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
              {reasons.map(({ title, desc }) => (
                <div key={title} className="flex flex-col items-center space-y-3">
                  <div className="bg-[#AA1C1F] p-4 rounded-full">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-white font-semibold text-lg">{title}</h4>
                  <p className="text-[#E6E6E4] text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Award, Leaf, Users, Lightbulb, type LucideIcon } from 'lucide-react';

interface Beneficio {
  icon: LucideIcon;
  titulo: string;
  texto: string;
}

const beneficios: Beneficio[] = [
  {
    icon: Award,
    titulo: 'Alta Qualidade',
    texto: 'Trabalhamos com produtos de marcas reconhecidas, garantindo durabilidade e desempenho superior em todos os projetos.',
  },
  {
    icon: Leaf,
    titulo: 'Eficiência Energética',
    texto: 'Todas as nossas soluções LED proporcionam economia de energia, aliando sustentabilidade e redução de custos.',
  },
  {
    icon: Users,
    titulo: 'Atendimento Especializado',
    texto: 'Nossa equipe técnica oferece consultoria personalizada para ajudar você a escolher a iluminação ideal para cada ambiente e necessidade.',
  },
  {
    icon: Lightbulb,
    titulo: 'Versatilidade',
    texto: 'Do residencial ao comercial, do básico ao decorativo: temos soluções para todas as ocasiões e estilos de projeto.',
  },
];

export default function Beneficios() {
  return (
    <section id="beneficios" className="py-20 md:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full text-yellow-400 text-sm font-semibold mb-4">
            Por Que Escolher a 4K
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Excelência em Cada Detalhe</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Mais do que produtos, oferecemos soluções completas com atendimento que faz a diferença
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {beneficios.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.titulo}
                className="group relative p-8 rounded-2xl bg-slate-800 border border-slate-700 hover:border-yellow-400/50 transition-all duration-300 hover:bg-slate-700/50 hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-xl bg-yellow-400/10 flex items-center justify-center mb-6 group-hover:bg-yellow-400/20 group-hover:scale-110 transition-all duration-300">
                  <Icon size={32} className="text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                  {b.titulo}
                </h3>
                <p className="text-gray-400 leading-relaxed">{b.texto}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

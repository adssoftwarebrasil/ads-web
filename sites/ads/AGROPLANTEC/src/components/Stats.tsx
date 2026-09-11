import { TrendingUp, Award, Package, Globe } from 'lucide-react';

const stats = [
  { Icon: TrendingUp, name: 'lucide-trending-up', value: '+25', label: 'Anos de Experiência', delay: 0 },
  { Icon: Award, name: 'lucide-award', value: '+150', label: 'Projetos Bem-sucedidos', delay: 100 },
  { Icon: Package, name: 'lucide-package', value: '+5000', label: 'Peças em estoque', delay: 200 },
  { Icon: Globe, name: 'lucide-globe', value: '100%', label: 'Atendimento Nacional', delay: 300 },
];

export default function Stats() {
  return (
    <section className="relative bg-gradient-to-b from-[rgb(29,29,27)] to-[rgb(20,20,18)] py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[rgb(138,154,39)] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[rgb(138,154,39)] rounded-full blur-3xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl lg:text-5xl font-bold mb-4">Números que Falam por Si</h2>
          <p className="text-gray-400 text-lg">Excelência comprovada ao longo dos anos</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map(({ Icon, name, value, label, delay }) => (
            <div
              key={label}
              className="group relative bg-gradient-to-br from-[rgb(29,29,27)] to-[rgb(45,45,43)] p-8 rounded-2xl transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-[rgb(138,154,39)]/20 opacity-100 translate-y-0"
              style={{ transitionDelay: `${delay}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[rgb(138,154,39)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
              <div className="relative flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-[rgb(138,154,39)]/20 rounded-xl group-hover:bg-[rgb(138,154,39)]/30 transition-colors">
                  <Icon className={`lucide ${name} w-8 h-8 text-[rgb(138,154,39)]`} />
                </div>
                <div className="text-white text-5xl lg:text-6xl font-bold">{value}</div>
                <div className="text-gray-300 text-sm uppercase tracking-wider font-semibold">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

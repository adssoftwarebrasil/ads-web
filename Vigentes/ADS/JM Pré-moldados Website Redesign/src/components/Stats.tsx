import { Award, Users, Briefcase, Package, type LucideIcon } from 'lucide-react';

const stats: { icon: LucideIcon; value: string; label: string }[] = [
  { icon: Award, value: '1+', label: 'Ano de Experiência' },
  { icon: Users, value: '50+', label: 'Clientes Satisfeitos' },
  { icon: Briefcase, value: '500+', label: 'Projetos Concluídos' },
  { icon: Package, value: '20+', label: 'Produtos Diferentes' },
];

export default function Stats() {
  return (
    <section className="py-16 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-2 hover:border-[#3b82f6] border-2 border-transparent"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="text-[#3b82f6]">
                  <Icon size={48} />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-[#0D1B4C]">{value}</div>
                <div className="text-[#A8AAAA] font-medium text-lg">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

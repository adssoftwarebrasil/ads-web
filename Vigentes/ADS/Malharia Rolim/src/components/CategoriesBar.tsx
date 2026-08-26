import { GraduationCap, Building2, HardHat, Stethoscope, type LucideIcon } from 'lucide-react';

interface Category {
  Icon: LucideIcon;
  title: string;
  subtitle: string;
}

const categories: Category[] = [
  { Icon: GraduationCap, title: 'Uniformes Escolares', subtitle: 'Camisetas, conjuntos e kits escolares' },
  { Icon: Building2, title: 'Uniformes Empresariais', subtitle: 'Polos, sociais e personalizados' },
  { Icon: HardHat, title: 'Uniformes Operacionais', subtitle: 'Refletivos, coletes e aventais' },
  { Icon: Stethoscope, title: 'Uniformes Profissionais', subtitle: 'Jalecos, scrubs e pijamas cirúrgicos' },
];

export default function CategoriesBar() {
  return (
    <section className="bg-brand-blue py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(({ Icon, title, subtitle }) => (
            <div key={title} className="flex flex-col items-center text-center gap-3 group">
              <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-all duration-300">
                <Icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-sm md:text-base">{title}</div>
                <div className="text-blue-200 text-xs mt-0.5">{subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

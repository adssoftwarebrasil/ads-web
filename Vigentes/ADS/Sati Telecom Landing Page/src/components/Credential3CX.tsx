import { Check, Smartphone, BarChart3, Shield, Puzzle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Resource = { Icon: LucideIcon; iconClass: string; label: string };
const resources: Resource[] = [
  { Icon: Smartphone, iconClass: 'lucide-smartphone', label: 'Mobilidade total' },
  { Icon: BarChart3, iconClass: 'lucide-bar-chart3', label: 'Gestão centralizada' },
  { Icon: BarChart3, iconClass: 'lucide-bar-chart3', label: 'Relatórios em tempo real' },
  { Icon: Shield, iconClass: 'lucide-shield', label: 'Segurança empresarial' },
  { Icon: Puzzle, iconClass: 'lucide-puzzle', label: 'Integração CRM' },
  { Icon: Smartphone, iconClass: 'lucide-smartphone', label: 'Aplicativos mobile iOS/Android' },
];

export default function Credential3CX() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#2a0070] via-[#3d009e] to-[#2a0070] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/20">
              <Check className="lucide lucide-check w-5 h-5 text-green-400 mr-2" />
              <span className="text-white text-sm font-semibold">Operadora Credenciada</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
              <h3 className="text-5xl font-bold mb-4">3CX</h3>
              <p className="text-xl text-white/90">
                A 3CX indica a Sati Telecom como operadora credenciada para soluções em nuvem
              </p>
            </div>
            <p className="text-lg text-white/80">
              Parceria estratégica que garante tecnologia de ponta e suporte especializado para sua empresa
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-8">Recursos Tecnológicos Avançados</h3>
            <ul className="space-y-4">
              {resources.map((r, i) => (
                <li key={i} className="flex items-center group">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-green-500/30 transition-colors">
                    <r.Icon className={`lucide ${r.iconClass} w-5 h-5 text-green-400`} />
                  </div>
                  <span className="text-white text-lg group-hover:text-white/90 transition-colors">
                    {r.label}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-white/80 text-sm">
                Tecnologia reconhecida mundialmente, implementada com a expertise de quase 40 anos da Sati Telecom
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

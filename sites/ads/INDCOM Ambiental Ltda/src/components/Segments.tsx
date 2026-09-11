import {
  Car, HardHat, TramFront, Factory, Building2, UtensilsCrossed, Sparkles,
  FileText, Wrench, Stethoscope, FlaskConical, Mountain, Droplet, Anchor,
  Truck, Wheat, ShoppingBag, Radio, Shield, Fuel, Hammer, Sofa, LucideIcon,
} from 'lucide-react';

interface Segment {
  Icon: LucideIcon;
  iconClass: string;
  name: string;
}

const SEGMENTS: Segment[] = [
  { Icon: Car, iconClass: 'lucide-car', name: 'Concessionárias' },
  { Icon: HardHat, iconClass: 'lucide-hard-hat', name: 'Construção Civil' },
  { Icon: TramFront, iconClass: 'lucide-tram-front', name: 'Ferrovias' },
  { Icon: Factory, iconClass: 'lucide-factory', name: 'Indústrias Automotivas' },
  { Icon: Building2, iconClass: 'lucide-building2', name: 'Indústrias Cimentícias' },
  { Icon: UtensilsCrossed, iconClass: 'lucide-utensils-crossed', name: 'Alimentos e Bebidas' },
  { Icon: Sparkles, iconClass: 'lucide-sparkles', name: 'Higiene, Cosmético e Saneante' },
  { Icon: FileText, iconClass: 'lucide-file-text', name: 'Papel e Celulose' },
  { Icon: Wrench, iconClass: 'lucide-wrench', name: 'Ferramentas e Eletrônicos' },
  { Icon: Stethoscope, iconClass: 'lucide-stethoscope', name: 'Farmacêuticas e Hospitais' },
  { Icon: FlaskConical, iconClass: 'lucide-flask-conical', name: 'Químicas e Petroquímicas' },
  { Icon: Mountain, iconClass: 'lucide-mountain', name: 'Mineradoras' },
  { Icon: Droplet, iconClass: 'lucide-droplet', name: 'Óleo e Gás' },
  { Icon: Anchor, iconClass: 'lucide-anchor', name: 'Portos e Hidroelétricas' },
  { Icon: Truck, iconClass: 'lucide-truck', name: 'Transportadoras e Armazenagem' },
  { Icon: Wheat, iconClass: 'lucide-wheat', name: 'Agronegócio' },
  { Icon: ShoppingBag, iconClass: 'lucide-shopping-bag', name: 'Estabelecimentos Comerciais' },
  { Icon: Radio, iconClass: 'lucide-radio', name: 'Telecomunicações' },
  { Icon: Shield, iconClass: 'lucide-shield', name: 'Seguradoras' },
  { Icon: Fuel, iconClass: 'lucide-fuel', name: 'Postos de Combustíveis' },
  { Icon: Hammer, iconClass: 'lucide-hammer', name: 'Siderurgia e Metalurgia' },
  { Icon: Sofa, iconClass: 'lucide-sofa', name: 'Indústrias Moveleiras' },
];

export default function Segments() {
  return (
    <section className="bg-white py-24 md:py-28">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center mb-14 transition-all duration-700 opacity-0 translate-y-8">
          <div className="text-sm font-semibold uppercase tracking-wider text-[rgb(130,196,92)] mb-4">
            Segmentos
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(40,120,80)] mb-4">
            Atendemos diversos setores
          </h2>
          <p className="text-lg text-gray-600">
            Experiência comprovada em múltiplos segmentos da indústria
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {SEGMENTS.map((seg, i) => (
            <div
              key={seg.name}
              className="bg-[rgb(245,247,250)] border-2 border-transparent rounded-2xl p-6 text-center hover:border-[rgb(130,196,92)] hover:bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer opacity-0 translate-y-8"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[rgba(130,196,92,0.15)] flex items-center justify-center">
                <seg.Icon className={`lucide ${seg.iconClass} w-7 h-7 text-[rgb(40,120,80)]`} />
              </div>
              <h3 className="text-[15px] font-semibold text-[rgb(40,120,80)] leading-snug">
                {seg.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

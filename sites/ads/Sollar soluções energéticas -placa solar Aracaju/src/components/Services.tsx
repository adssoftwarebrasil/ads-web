import { Home, Building2, Sun, Battery, Zap, Plug, TrendingUp, Landmark, DollarSign } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  text: string;
}

const services: Service[] = [
  { Icon: Home, iconClass: 'lucide lucide-home text-white', title: 'Energia Solar Residencial', text: 'Sistemas completos para sua casa com economia de até 95% na conta de luz.' },
  { Icon: Building2, iconClass: 'lucide lucide-building2 text-white', title: 'Energia Solar Comercial', text: 'Soluções escaláveis para empresas de todos os portes reduzirem custos operacionais.' },
  { Icon: Sun, iconClass: 'lucide lucide-sun text-white', title: 'Sistemas On-Grid', text: 'Conectados à rede elétrica, gerando créditos de energia e máxima economia.' },
  { Icon: Battery, iconClass: 'lucide lucide-battery text-white', title: 'Sistemas Off-Grid', text: 'Independência energética total com baterias de alta capacidade.' },
  { Icon: Zap, iconClass: 'lucide lucide-zap text-white', title: 'Sistemas Híbridos', text: 'Combine conexão à rede com autonomia de baterias para máxima eficiência.' },
  { Icon: Plug, iconClass: 'lucide lucide-plug text-white', title: 'Carregadores Elétricos', text: 'Infraestrutura completa para veículos elétricos com energia solar.' },
  { Icon: TrendingUp, iconClass: 'lucide lucide-trending-up text-white', title: 'Usinas de Investimento', text: 'Projetos de grande porte com alto retorno sobre investimento.' },
  { Icon: Landmark, iconClass: 'lucide lucide-landmark text-white', title: 'Subestações', text: 'Projetos especializados em infraestrutura elétrica de média e alta tensão.' },
  { Icon: DollarSign, iconClass: 'lucide lucide-dollar-sign text-white', title: 'Energia por Assinatura', text: 'Economia sem investimento inicial através de nosso modelo de assinatura.' },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 lg:py-32 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-[rgb(20,85,200)] mb-4">
            Nossas Soluções em Energia Solar
          </h2>
          <div className="w-20 h-1 bg-[rgb(255,100,30)] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos soluções completas e personalizadas para cada necessidade, do residencial ao industrial.
          </p>
        </div>
        <div className="w-full max-w-5xl mx-auto mb-16">
          <img
            src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=sollarsolucoes%2F487d08340fe0083353b51292b90978a1.jpg&version_id=null"
            alt="Fachada da Sollar Soluções Energéticas"
            className="w-full h-auto rounded-2xl shadow-xl object-cover"
            loading="lazy"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-xl p-8 border-t-4 border-[rgb(255,100,30)] shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[rgb(20,85,200)] to-[rgb(50,115,220)] rounded-lg flex items-center justify-center mb-6">
                <s.Icon width={32} height={32} className={s.iconClass} />
              </div>
              <h3 className="text-xl font-bold text-[rgb(20,85,200)] mb-3">{s.title}</h3>
              <p className="text-gray-600 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

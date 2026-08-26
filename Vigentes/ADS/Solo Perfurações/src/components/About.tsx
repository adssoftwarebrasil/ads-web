import { Clock, Building, MapPin, Shield, Users, Award } from 'lucide-react';

const features = [
  {
    icon: Building,
    color: 'text-teal-500',
    title: 'Desde 2000',
    text: 'Mais de duas décadas de experiência',
    delay: '0s',
  },
  {
    icon: MapPin,
    color: 'text-yellow-500',
    title: 'Jataí e Região',
    text: 'Atendimento em toda a região',
    delay: '0.1s',
  },
  {
    icon: Shield,
    color: 'text-[#004358]',
    title: 'Qualidade Garantida',
    text: 'Serviços com garantia e excelência',
    delay: '0.2s',
  },
  {
    icon: Users,
    color: 'text-teal-500',
    title: 'Equipe Especializada',
    text: 'Profissionais altamente qualificados',
    delay: '0.3s',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <div className="aspect-square relative">
                <img
                  src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=solo-perfuracao%2Fhero-fundo.webp&version_id=null"
                  alt="Equipamentos de perfuração SOLO PERFURAÇÕES"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#004358]/30 to-transparent"></div>
              </div>
              <div className="absolute top-4 right-4 bg-yellow-500 text-white rounded-full w-28 h-28 flex flex-col items-center justify-center shadow-2xl ring-4 ring-white animate-pulse">
                <Award className="w-6 h-6 mb-1 opacity-90" />
                <span className="text-4xl font-bold leading-none">20+</span>
                <span className="text-xs font-semibold tracking-wide">ANOS</span>
              </div>
            </div>
          </div>
          <div>
            <div className="mb-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#004358] mb-3">Sobre a SOLO PERFURAÇÕES</h2>
              <div className="w-20 h-1 bg-teal-500"></div>
            </div>
            <div className="space-y-5 text-gray-700 leading-loose mb-8">
              <p>
                A <span className="text-[#004358] font-bold">SOLO PERFURAÇÕES</span>, razão social{' '}
                <span className="text-[#004358] font-bold">LL DOS SANTOS</span>, é uma empresa sediada em Jataí-GO,
                especializada em perfuração de poços artesianos com mais de{' '}
                <span className="text-yellow-500 font-bold">20 anos</span> de experiência no mercado.
              </p>
              <p>
                Contamos com equipamentos modernos de alta tecnologia e uma equipe altamente qualificada, garantindo
                eficiência, segurança e qualidade em todos os nossos serviços.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-5 border-l-4 border-teal-500 mb-8 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-5 h-5 text-[#004358]" />
                <h3 className="font-bold text-[#004358] text-lg">Horário de Atendimento</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-3 text-gray-700">
                <div>
                  <span className="font-semibold text-[#004358]">SEGUNDA - SÁBADO:</span>
                  <br />
                  <span>08:00 às 20:00</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.title}
                    className="p-4 bg-gray-50 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 border-l-4 border-transparent hover:border-teal-500 hover:bg-teal-50/30"
                    style={{ animation: `0.6s ease-out ${f.delay} 1 normal both running fadeInUp` }}
                  >
                    <Icon className={`w-8 h-8 ${f.color} mb-2`} />
                    <h3 className="font-semibold text-[#004358] mb-1 text-sm lg:text-base">{f.title}</h3>
                    <p className="text-xs lg:text-sm text-gray-600">{f.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

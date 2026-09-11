import { Award, Shield, Activity, Clock, Users } from 'lucide-react';

const differentials = [
  {
    icon: Award,
    title: 'Experiência Comprovada',
    description: 'Mais de cinco décadas atendendo a comunidade de Foz do Iguaçu com excelência',
  },
  {
    icon: Shield,
    title: 'Confiança Institucional',
    description: 'Parceria consolidada com órgãos públicos e empresas da região',
  },
  {
    icon: Activity,
    title: 'Atendimento Integrado',
    description: 'Soluções completas: ambulâncias, medicina do trabalho e emergências',
  },
  {
    icon: Clock,
    title: 'Disponibilidade Total',
    description: 'Atendimento 24 horas, 7 dias por semana, incluindo finais de semana e feriados',
  },
  {
    icon: Users,
    title: 'Equipe Qualificada',
    description: 'Profissionais experientes e capacitados para qualquer situação',
  },
];

export default function Differentials() {
  return (
    <section className="bg-gradient-to-b from-ice to-white py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative animate-fade-in-left">
            <div className="relative z-10">
              <img
                src="https://storage.lucasmendes.dev/site-sp/coopermedicafoz%2Fambulancia_1_11zon.jpg"
                alt="Ambulância Coopermédica"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>

          <div className="animate-fade-in-right space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Mais de 50 Anos Cuidando de Foz do Iguaçu
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Desde 1973, a Coopermédica se dedica a oferecer atendimento médico de excelência para a comunidade de Foz do Iguaçu, construindo uma história de confiança e dedicação.
              </p>
            </div>

            <div className="space-y-6">
              {differentials.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex gap-4 group hover:translate-x-2 transition-transform"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href="https://wa.me/5545988038430"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white px-8 py-4 rounded-lg hover:bg-secondary transition-all hover:shadow-lg font-semibold"
            >
              Solicite Seu Atendimento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

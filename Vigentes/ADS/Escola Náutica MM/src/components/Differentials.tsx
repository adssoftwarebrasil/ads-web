import { Award, Users, Waves, BookOpen, Clock, MapPin } from 'lucide-react';

export default function Differentials() {
  const differentials = [
    {
      icon: Award,
      title: 'Certificação Oficial',
      description: 'Cursos reconhecidos e certificados pela Marinha do Brasil',
    },
    {
      icon: Users,
      title: 'Instrutores Experientes',
      description: 'Profissionais com anos de experiência em navegação',
    },
    {
      icon: Waves,
      title: 'Prática Real',
      description: 'Aulas práticas realizadas no ICLI - "Iate Clube Lago de Itaipu" de longe o melhor lugar para se aprender a pilotar, fora a excepcional infraestrutura do local.',
    },
    {
      icon: BookOpen,
      title: 'Material Completo',
      description: 'Apostilas e materiais didáticos atualizados inclusos',
    },
    {
      icon: Clock,
      title: 'Horários Flexíveis',
      description: 'Turmas em diferentes horários para sua comodidade',
    },
    {
      icon: MapPin,
      title: 'Localização Privilegiada',
      description: 'No coração de Foz do Iguaçu, fácil acesso',
    },
  ];

  return (
    <section className="py-20 bg-[#26367e] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#0caff0] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#c6272f] rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Por Que Escolher a Escola Náutica MM?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="glass-effect border border-white border-opacity-20 rounded-xl p-6 hover:bg-white hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">
                <div className="w-14 h-14 bg-[#0caff0] rounded-lg flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-white text-opacity-90 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

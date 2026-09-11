import { Heart, Zap, Handshake, Target } from 'lucide-react';

export default function Values() {
  const values = [
    {
      icon: Heart,
      title: 'Lealdade',
      description: 'Comprometidos com você',
    },
    {
      icon: Zap,
      title: 'Garra',
      description: 'Superação em cada treino',
    },
    {
      icon: Handshake,
      title: 'Respeito',
      description: 'Comunidade inclusiva',
    },
    {
      icon: Target,
      title: 'Excelência',
      description: 'Qualidade garantida',
    },
  ];

  return (
    <section className="py-20 bg-neutral-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Nossos Diferenciais
          </h2>
          <p className="text-xl text-neutral-dark max-w-2xl mx-auto">
            O que nos torna únicos na experiência esportiva
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all cursor-pointer group animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full mb-6 group-hover:rotate-12 transition-transform">
                <value.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">{value.title}</h3>
              <p className="text-neutral-dark">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { MapPin } from 'lucide-react';

const regions = [
  { title: 'Roraima', lines: ['Todo o Estado de Roraima', 'Boa Vista e região'] },
  { title: 'Brasil', lines: ['Manaus - AM', 'Transporte interestadual'] },
  { title: 'Internacional', lines: ['Santa Helena - Venezuela', 'Lethem - Guiana'] },
];

export default function Coverage() {
  return (
    <section className="py-16 lg:py-20 bg-holanda-green text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Onde Atuamos</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {regions.map((region) => (
            <div key={region.title} className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-2">
                <MapPin size={32} />
              </div>
              <h3 className="text-2xl font-bold">{region.title}</h3>
              <div className="space-y-2">
                {region.lines.map((line) => (
                  <p key={line} className="text-white/90 text-lg">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

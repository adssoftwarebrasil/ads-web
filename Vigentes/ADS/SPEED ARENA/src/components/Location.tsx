import { MapPin, Check } from 'lucide-react';

const units = [
  {
    name: 'Unidade Setor Sul',
    addressLines: [
      'Rua 94, 245, Qd. F-14, Lt. 31/33',
      'Setor Sul, Goiânia - GO',
      'CEP: 74083-105',
    ],
    embedSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.8580234567!2d-49.26892!3d-16.69845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef0f3e3e3e3e3%3A0x3e3e3e3e3e3e3e3e!2sR.%2094%2C%20245%20-%20Setor%20Sul%2C%20Goi%C3%A2nia%20-%20GO%2C%2074083-105!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr',
  },
  {
    name: 'Unidade Jardim Atlântico',
    addressLines: [
      'Avenida Leblon, Q. 131, L. 26',
      'Esquina com Av. do Parque',
      'Jardim Atlântico, Goiânia - GO',
    ],
    embedSrc:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d33235.60763413528!2d-49.2930745!3d-16.7218715!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef546563c3a27%3A0x66c02afdf21617c!2sSpeed%20arena%20(beach%20tennis%2C%20V%C3%B4lei%20de%20areia%2C%20Futev%C3%B4lei)!5e1!3m2!1spt-BR!2sbr!4v1781118010677!5m2!1spt-BR!2sbr',
  },
];

const neighborhoods = [
  'Setor Sul',
  'Setor Bueno',
  'Centro',
  'Jardim Goiás',
  'Setor Universitário',
  'Setor Oeste',
];

export default function Location() {
  return (
    <section id="localizacao" className="py-20 bg-primary-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Nossas Unidades</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Agora com duas unidades para você treinar e se divertir em Goiânia
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {units.map((unit, index) => (
            <div
              key={index}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-accent-green-vibrant flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">{unit.name}</h3>
                    <p className="text-white/90">
                      {unit.addressLines.map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < unit.addressLines.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-2xl h-[400px]">
                <iframe
                  src={unit.embedSrc}
                  title={`Mapa - ${unit.name}`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center animate-fade-up">
          <h3 className="font-bold text-xl mb-6">Bairros Atendidos</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {neighborhoods.map((neighborhood, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 text-white/90 bg-white/10 rounded-full px-4 py-2"
              >
                <div className="bg-accent-green-vibrant rounded-full p-1">
                  <Check className="w-3 h-3 text-primary-dark" />
                </div>
                <span>{neighborhood}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

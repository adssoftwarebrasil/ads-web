import { CheckCircle2 } from 'lucide-react';

interface Partner {
  name: string;
  logo: string;
  logoAlt: string;
  description: string;
  points: string[];
}

const partners: Partner[] = [
  {
    name: 'Trelleborg',
    logo: 'https://storage.lucasmendes.dev/site-sp/romaq%2Fimg2%2Flogo-trelleborg-representante-autorizado.webp',
    logoAlt: 'Trelleborg - Representante Autorizado',
    description:
      'Líder global no fornecimento de pneus e rodas para máquinas agrícolas e florestais, movimentação de materiais, máquinas de construção, empilhadeiras e outros segmentos especializados.',
    points: [
      'Pneus de alta performance e durabilidade',
      'Soluções especializadas para cada aplicação',
      'Garantia de qualidade internacional',
    ],
  },
  {
    name: 'Rodagás',
    logo: 'https://storage.lucasmendes.dev/site-sp/romaq%2Fimg2%2Ftexto-rodagas-vermelho-representante-autorizado.webp',
    logoAlt: 'Rodagás - Representante Autorizado',
    description:
      'Indústria de equipamento para utilização de GLP em empilhadeiras. Desde projetos, fabricação e venda de equipamentos para uso em sistemas a gás.',
    points: [
      'Sistemas completos de conversão para GLP',
      'Economia e sustentabilidade',
      'Assistência técnica especializada',
    ],
  },
];

export default function Partners() {
  return (
    <section className="py-20 bg-[rgb(66,66,66)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Representantes Autorizados</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Parceria com as melhores marcas do mercado para garantir qualidade e confiabilidade
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {partners.map((partner) => (
            <div key={partner.name} className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="flex justify-center mb-6">
                <img src={partner.logo} alt={partner.logoAlt} className="h-20 w-auto object-contain" />
              </div>
              <h3 className="text-2xl font-bold text-[rgb(66,66,66)] mb-4 text-center">{partner.name}</h3>
              <p className="text-gray-600 mb-6 text-center">{partner.description}</p>
              <ul className="space-y-3">
                {partner.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2
                      className="lucide lucide-check-circle2 text-[rgb(240,186,25)] flex-shrink-0 mt-1"
                      width={20}
                      height={20}
                    />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

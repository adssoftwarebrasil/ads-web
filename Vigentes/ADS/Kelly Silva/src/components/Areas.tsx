import { Scale, CheckCircle } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

interface AreaCard {
  title: string;
  items: string[];
}

const areas: AreaCard[] = [
  {
    title: 'BPC/LOAS',
    items: ['BPC/LOAS para Pessoas com Deficiência', 'BPC/LOAS para Idosos'],
  },
  {
    title: 'Auxílios',
    items: [
      'Auxílio por Incapacidade Temporária (Auxílio Doença)',
      'Auxílio-Acidente',
      'Auxílio-Reclusão',
    ],
  },
  {
    title: 'Aposentadorias Urbanas',
    items: ['Aposentadoria por Idade', 'Aposentadoria por Incapacidade Permanente'],
  },
  {
    title: 'Aposentadorias Rurais',
    items: [
      'Aposentadoria por Idade Rural',
      'Aposentadoria por Incapacidade Permanente Rural',
      'Aposentadoria Híbrida',
    ],
  },
  {
    title: 'Benefícios para Gestantes',
    items: ['Salário-Maternidade Urbano', 'Salário-Maternidade Rural'],
  },
  {
    title: 'Benefícios Especiais',
    items: ['Pensão por Morte', 'Pensão Especial Vitalícia (Zika Vírus)'],
  },
];

export default function Areas() {
  return (
    <section id="areas" className="bg-navy py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl lg:text-5xl text-off-white mb-4">Áreas de Atuação</h2>
          <p className="font-serif text-xl text-beige">Conheça os serviços especializados que oferecemos</p>
        </div>
        <div className="flex justify-center mb-16 transition-all duration-1000 opacity-100 scale-100">
          <div className="relative max-w-md w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-gold via-gold-medium to-gold-dark opacity-20 rounded-2xl transform rotate-3"></div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/kellysilva%2Fimg%2FAdvogada%20Kelly%20Silva%20olhando%20para%20direita.webp"
              alt="Dra. Kelly Silva - Advogada Previdenciária"
              className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-6 bg-gold text-navy px-6 py-4 rounded-xl shadow-xl">
              <p className="font-bold text-sm uppercase tracking-wider">OAB/GO</p>
              <p className="font-bold text-3xl">39.151</p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 transition-all duration-1000 delay-300 opacity-100 translate-y-0">
          {areas.map((area, i) => (
            <div
              key={area.title}
              className="bg-off-white bg-opacity-5 backdrop-blur-sm border border-gold-light border-opacity-20 rounded-xl p-6 lg:p-8 hover:border-gold-light hover:bg-opacity-10 transition-all duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <h3 className="font-bold text-2xl text-gold-light mb-4 flex items-center gap-3">
                <Scale className="w-6 h-6 flex-shrink-0" />
                {area.title}
              </h3>
              <ul className="space-y-3">
                {area.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 group">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5 group-hover:text-gold-light transition-colors" />
                    <span className="font-serif text-base lg:text-lg text-beige group-hover:text-off-white transition-colors leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-gradient-to-r from-gold-dark to-gold p-8 rounded-xl text-center shadow-2xl transition-all duration-1000 delay-500 opacity-100 translate-y-0">
          <p className="font-serif text-xl lg:text-2xl text-navy mb-4 font-semibold">Não encontrou o que procura?</p>
          <p className="font-serif text-base lg:text-lg text-navy mb-6 opacity-90">
            Entre em contato e tire suas dúvidas sobre outros benefícios previdenciários
          </p>
          <a
            href="https://wa.me/5562999714722?text=Olá"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-whatsapp to-whatsapp-dark text-off-white font-bold text-lg px-10 py-4 rounded-lg hover:from-whatsapp-dark hover:to-whatsapp transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-whatsapp/50"
          >
            Fale Conosco pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

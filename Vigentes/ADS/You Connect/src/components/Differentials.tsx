import { Rocket, Shield, Headset, MapPin } from 'lucide-react';

interface Diff {
  Icon: typeof Rocket;
  title: string;
  text: string;
}

const differentials: Diff[] = [
  {
    Icon: Rocket,
    title: 'Ultravelocidade de Verdade',
    text: 'Internet 100% fibra óptica de ponta a ponta, garantindo a entrega total da velocidade contratada.',
  },
  {
    Icon: Shield,
    title: 'Estabilidade Garantida',
    text: 'Navegue sem quedas e com sinal forte o dia todo, mesmo nos horários de pico.',
  },
  {
    Icon: Headset,
    title: 'Suporte Ágil e Humano',
    text: 'Cansado de robôs? Fale com quem entende sua realidade e resolve seu problema de verdade.',
  },
  {
    Icon: MapPin,
    title: 'Conhecemos a sua Região',
    text: 'Por sermos daqui, conhecemos cada rua e garantimos a melhor infraestrutura para o seu bairro.',
  },
];

export default function Differentials() {
  return (
    <section id="differentials">
      <section id="diferenciais" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-4">O Provedor Local que Faz</h2>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-[#FA6F2C] mb-16">Toda a Diferença.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentials.map((d) => {
              const { Icon } = d;
              return (
                <div className="text-center group" key={d.title}>
                  <div className="w-24 h-24 bg-gradient-to-br from-[#FA6F2C] to-[#E85E1B] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <Icon className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{d.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{d.text}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-16">
            <a
              href="https://wa.me/5581996833314?text=Olá!%20Gostaria%20de%20conhecer%20os%20planos%20da%20You%20Connect"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#FA6F2C] hover:bg-[#E85E1B] text-white px-10 py-5 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              CONHEÇA NOSSOS PLANOS
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}

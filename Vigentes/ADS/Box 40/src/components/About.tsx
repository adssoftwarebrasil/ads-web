import { CheckCircle } from 'lucide-react';

const features = [
  { text: 'Profissionais qualificados e experientes', delay: '0.3s' },
  { text: 'Equipamentos modernos e diagnóstico preciso', delay: '0.4s' },
  { text: 'Atendimento rápido e eficiente', delay: '0.5s' },
  { text: 'Localização estratégica em Brasília', delay: '0.6s' },
];

const images = [
  'https://storage.lucasmendes.dev/site-sp/box40%2Fimg%2Fquemsomos1.webp',
  'https://storage.lucasmendes.dev/site-sp/box40%2Fimg%2Fquemsomos2.webp',
  'https://storage.lucasmendes.dev/site-sp/box40%2Fimg%2Fquemsomos3.webp',
  'https://storage.lucasmendes.dev/site-sp/box40%2Fimg%2Fquemsomos4.webp',
];

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 lg:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 transition-all duration-800 opacity-100 translate-y-0">
          <span className="text-gold text-sm font-semibold tracking-wider uppercase">Quem somos</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-8">
            Box 40 Lava a Jato e Lubrificação Automotiva
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="transition-all duration-800 opacity-100 translate-x-0" style={{ transitionDelay: '0.2s' }}>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              O Box 40 atua no setor automotivo oferecendo serviços de alta qualidade em lavagem de veículos, polimento, higienização interna, troca de óleo de motor e de câmbio automático.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nosso diferencial está na troca de óleo de câmbio automático, realizada com equipamento moderno que garante uma manutenção eficiente e segura. Contamos com um scanner automotivo para diagnósticos precisos e profissionais com mais de 30 anos de experiência, garantindo um serviço confiável e especializado.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Atendemos clientes no Setor Hoteleiro Sul e Comercial Sul de Brasília, bem como frotas empresariais.
            </p>
            <div className="space-y-4 mb-8">
              {features.map((feature) => (
                <div
                  key={feature.text}
                  className="flex items-start space-x-3 transition-all duration-800 opacity-100 translate-x-0"
                  style={{ transitionDelay: feature.delay }}
                >
                  <CheckCircle size={24} className="lucide lucide-check-circle text-gold flex-shrink-0 mt-1" />
                  <span className="text-gray-900 text-lg">{feature.text}</span>
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/556198423838"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block gold-gradient text-black font-semibold text-lg px-10 py-4 rounded-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-gold/30"
            >
              Enviar WhatsApp
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4 transition-all duration-800 opacity-100 translate-x-0" style={{ transitionDelay: '0.4s' }}>
            {images.map((src, i) => (
              <div key={src} className="overflow-hidden rounded-xl aspect-square hover:scale-105 transition-transform duration-300 shadow-lg">
                <img src={src} alt={`Box 40 - Imagem ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

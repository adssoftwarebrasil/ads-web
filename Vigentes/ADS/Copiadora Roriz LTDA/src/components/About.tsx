import { CheckCircle2 } from 'lucide-react';
import { scrollToSection } from '../lib/whatsapp';

const features = [
  'Produtos personalizados com alta qualidade',
  'Entregas rápidas e dentro do prazo',
  'Atendimento especializado e personalizado',
  'Localização central e de fácil acesso',
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/so-copias%2Fso%20copias%2FQuem%20somos.jpeg"
              alt="Quem somos - Só Cópias"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
              Sobre Nós
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Referência em Personalização em <span className="text-blue-800">Porto Velho</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Com mais de 15 anos de experiência no mercado, a Só Cópias se consolidou como
              referência em produtos personalizados em Porto Velho. Nossa missão é transformar suas
              ideias em brindes e impressos de alta qualidade que fazem a diferença.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Atendemos empresas, eventos e pessoas físicas com dedicação e profissionalismo. Nossa
              equipe especializada está pronta para criar soluções personalizadas que fortalecem sua
              marca e encantam seus clientes.
            </p>
            <div className="space-y-4 pt-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="lucide-check-circle2 w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">{feature}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => scrollToSection('servicos')}
              className="mt-8 bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
            >
              Conheça Nossos Serviços
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

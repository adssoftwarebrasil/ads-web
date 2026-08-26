import { CheckCircle2 } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

const features = [
  'Preços Justos e Competitivos',
  'Qualidade Garantida',
  'Compromisso com Prazos',
  'Atendimento de Excelência',
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3"></div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/queirozmetais%2FQuem%20somos.jpg"
              alt="Queiroz Metais - Quem Somos"
              className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Quem <span className="text-primary">Somos</span>
            </h2>
            <div className="space-y-4 text-gray-600 text-lg mb-8">
              <p>
                A Queiroz Metais foi fundada em 2014, desde então se destacou pela qualidade e preço justo. Com uma missão de atender bem, a empresa se compromete com prazos e excelência no atendimento ao cliente.
              </p>
              <p>
                Com uma ampla gama de produtos metálicos, a Queiroz Metais se tornou referência no setor, oferecendo soluções para obras de todos os tamanhos.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

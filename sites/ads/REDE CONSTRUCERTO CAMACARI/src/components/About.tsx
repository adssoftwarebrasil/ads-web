import { Award } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <Award size={32} className="text-[#e8221a]" />
              <span className="text-[#253579] font-semibold text-sm uppercase tracking-wider">
                Quem Somos
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Rede Construcerto <span className="text-[#e8221a]">Camaçari</span>
            </h2>
            <div className="w-20 h-1 bg-[#e8221a]"></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              A Rede Construcerto Camaçari, fundada em 2024, é a escolha ideal para quem
              busca material de construção de qualidade e a preços competitivos. Focamos no
              atendimento a pessoas físicas, jurídicas e condomínios, oferecendo uma
              variedade de produtos que atendem as exigências do mercado da construção
              civil.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nossa associação com a Rede Construcerto, composta por 18 lojas em Salvador,
              fortalece nosso compromisso em ser uma das melhores empresas do segmento em
              Camaçari.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#253579] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#1d2958] transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Enviar WhatsApp
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://storage.lucasmendes.dev/site-sp/redeconstrucertocamari%2FQuem%20somos1.jpg"
              alt="Quem Somos 1"
              className="w-full h-64 object-cover rounded-2xl shadow-xl"
            />
            <img
              src="https://storage.lucasmendes.dev/site-sp/redeconstrucertocamari%2FQuem%20somos2.jpg"
              alt="Quem Somos 2"
              className="w-full h-64 object-cover rounded-2xl shadow-xl mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import { CheckCircle } from 'lucide-react';

const FEATURES = [
  'Revendedor Autorizado Yamaha',
  'Atendimento Personalizado',
  'Produtos de Alta Qualidade',
];

export default function About() {
  return (
    <section id="sobre" className="py-16 lg:py-24 bg-gray-100 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="transition-all duration-700 opacity-0 -translate-x-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[rgb(30,43,75)] mb-4 lg:mb-6 leading-tight">
              Dias Motors Náutica - Referência em Náutica em Goiânia
            </h2>
            <p className="text-base lg:text-lg text-gray-700 mb-4 lg:mb-6 leading-relaxed">
              Localizada na Avenida Independência, no Setor Aeroporto em Goiânia,
              a Dias Motors é especialista em soluções náuticas completas. Nossa
              empresa atende principalmente a região Centro-Oeste do Brasil,
              oferecendo embarcações, motores de popa Yamaha e jet-ski com
              qualidade e atendimento diferenciado.
            </p>
            <p className="text-base lg:text-lg text-gray-700 mb-6 lg:mb-8 leading-relaxed">
              Somos revendedores autorizados Yamaha, garantindo produtos
              originais com suporte técnico especializado. Seja para pesca, lazer
              ou esporte, temos a solução náutica ideal para você.
            </p>
            <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
              {FEATURES.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle
                    className="lucide lucide-check-circle text-[rgb(19,161,209)] flex-shrink-0 lg:w-6 lg:h-6"
                    size={20}
                  />
                  <span className="text-base lg:text-lg text-gray-700 font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/5562982830047?text=Olá! Gostaria de conhecer a loja"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[rgb(19,161,209)] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-[rgb(17,145,188)] hover:scale-105 transition-all shadow-md"
            >
              Conheça Nossa Loja
            </a>
          </div>
          <div className="transition-all duration-700 delay-300 opacity-0 translate-x-8">
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <img
                src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=diasmotors%2FCaptura%20de%20Tela%202025-11-20%20a%CC%80s%2010.06.32.png&version_id=null"
                alt="Dias Motors Náutica - Showroom"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

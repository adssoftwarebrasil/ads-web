import { Check, Shield } from 'lucide-react';

export default function Hero() {
  const treatments = [
    'Ansiedade persistente',
    'Pensamentos acelerados e dificuldade de desligar',
    'Autocobrança excessiva',
    'Procrastinação e dificuldade de agir',
    'Dificuldade em lidar com emoções'
  ];

  return (
    <section id="hero" className="pt-32 pb-20 bg-gradient-to-b from-white to-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-6 animate-fadeInUp">
            {/* Badge CRP mantido (padrão de segurança) */}
            <div className="inline-flex items-center gap-2 bg-beige-light/50 px-4 py-2 rounded-full text-sm font-medium text-text-main">
              <Shield className="w-4 h-4 text-brown-dark" />
              CRP 09/012935 • +7 anos de experiência
            </div>

            {/* 1. TÍTULO PRINCIPAL */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-main leading-tight uppercase">
              TERAPIA ONLINE PARA ADULTOS 
            </h1>

            {/* 1.6 INDICAÇÃO ONLINE E CONVÊNIOS */}
            <p className="text-red-600 font-semibold uppercase tracking-wide">
              Atendimento particular (sem Convênios)
            </p>

            {/* 2. SUBTÍTULO */}
            <p className="text-xl md:text-2xl text-beige-dark font-medium leading-relaxed">
              Especialista em Terapia Cognitivo-Comportamental (TCC)
            </p>

            {/* Imagem Mobile - Apenas visível no mobile */}
            <div className="lg:hidden my-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-beige-medium/30 max-h-64">
                <img
                  src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=ALINE%20RODRIGUES%20-%20SERVICOS%20DE%20PSICOLOGIA%2Fwhatsapp-image-2025-01-23-at-16.29.19-m5KLMQEjZLhj1Rjk.avif&version_id=null"
                  alt="Aline Rodrigues - Psicóloga"
                  className="w-full h-64 object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>

            {/* 4. NOVA LISTA DE TRATAMENTOS */}
            <div className="pt-2">
              <p className="font-semibold text-text-main mb-3">
                Algumas das demandas trabalhadas em terapia:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {treatments.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brown-dark/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-brown-dark" />
                    </div>
                    <span className="text-text-main">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. BOTÕES (Apenas Agendar) */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://wa.me/556282702366?text=Olá, gostaria de saber mais sobre como funciona a terapia."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-brown-dark text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all hover:-translate-y-0.5 w-full sm:w-auto text-center"
              >
                Agendar consulta
              </a>
            </div>
          </div>

          {/* Imagem Desktop - Oculta no mobile */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-beige-medium/30">
              <img
                src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=ALINE%20RODRIGUES%20-%20SERVICOS%20DE%20PSICOLOGIA%2Fwhatsapp-image-2025-01-23-at-16.29.19-m5KLMQEjZLhj1Rjk.avif&version_id=null"
                alt="Aline Rodrigues - Psicóloga"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-beige-light rounded-full -z-10 opacity-50"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-brown-dark/20 rounded-full -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
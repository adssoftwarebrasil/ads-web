import { BookOpen, Globe } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Coluna da Imagem (Mantida) */}
          <div className="order-2 lg:order-1 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-beige-medium">
              <img
                src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=ALINE%20RODRIGUES%20-%20SERVICOS%20DE%20PSICOLOGIA%2Fwhatsapp-image-2025-01-23-at-15.42.25-3-Yanq1K1jv3tZRKeR.avif&version_id=null"
                alt="Aline Rodrigues em atendimento"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-brown-dark/10 rounded-full -z-10"></div>
          </div>

          {/* Coluna de Texto */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 bg-cream px-4 py-2 rounded-full text-sm font-medium text-beige-dark">
              Conheça a Psicóloga
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-text-main">
              Aline Rodrigues
            </h2>

            <p className="text-lg text-beige-dark font-medium">
              CRP 09/012935 | Psicóloga Clínica
            </p>

            {/* Novo Texto */}
            <div className="space-y-4 text-text-main leading-relaxed">
              <p>
                Meu nome é Aline, sou psicóloga com mais de <strong>7 anos de experiência</strong> em 
                atendimento clínico e utilizo a <strong>Terapia Cognitivo-Comportamental (TCC)</strong> como 
                abordagem. Minha missão é ajudar você a ter mais qualidade de vida, superar 
                desafios emocionais e alcançar seus objetivos, seja qual for o momento da sua jornada.
              </p>
              
              <p>
                <strong>Atendo pacientes de forma online</strong>, oferecendo um espaço acolhedor e focado 
                em resultados. Também supervisiono outros psicólogos, unindo minha paixão por 
                compartilhar conhecimento com o desejo de contribuir para o crescimento de outros 
                profissionais.
              </p>

              <p>
                Nada me faz mais feliz do que acompanhar a evolução de cada pessoa que confia em 
                mim. Se você quer <strong>começar uma nova fase</strong> e investir em você, estou aqui para ajudar. 
                Vamos juntos? Entre em contato e <strong>agende sua primeira sessão!</strong>
              </p>
            </div>

            {/* 2 Quadradinhos solicitados */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 p-4 bg-cream rounded-lg">
                <BookOpen className="w-6 h-6 text-brown-dark flex-shrink-0" />
                <span className="text-text-main font-medium text-sm">Especialista em TCC</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-cream rounded-lg">
                <Globe className="w-6 h-6 text-brown-dark flex-shrink-0" />
                <span className="text-text-main font-medium text-sm">Atendimento em +10 países</span>
              </div>
            </div>

            {/* Botão Agendar Consulta */}
            <div className="pt-4">
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
        </div>
      </div>
    </section>
  );
}
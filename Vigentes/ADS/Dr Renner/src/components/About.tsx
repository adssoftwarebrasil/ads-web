import { useEffect, useRef } from 'react';
import { Shield, BookOpen, Award, Heart } from 'lucide-react';

const CREDENTIALS = [
  {
    icon: BookOpen,
    title: 'Formação Médica',
    description: 'Medicina pela IMEPAC – Centro Universitário (Instituto Master de Ensino Presidente Antônio Carlos)',
  },
  {
    icon: Award,
    title: 'Residência em Pediatria',
    description: 'Hospital Municipal da Criança e do Adolescente (HMCA), São Paulo – SP. Parecer técnico nº 1622/2014 da CNRM.',
  },
  {
    icon: Shield,
    title: 'Certificado em Reanimação Neonatal',
    description: 'Certificado pela Sociedade Brasileira de Pediatria (SBP) e membro ativo da instituição.',
  },
  {
    icon: Heart,
    title: 'Abordagem Humanizada',
    description: 'Atendimento que vai além do diagnóstico — acolhendo famílias com escuta ativa, empatia e orientação segura.',
  },
];

export default function About() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="sobre"
      className="py-24"
      style={{ background: 'linear-gradient(180deg, #FFFCE4 0%, #ffffff 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div ref={leftRef} className="section-observe relative">
            <div
              className="absolute -top-4 -left-4 w-32 h-32 rounded-full opacity-20"
              style={{ background: 'radial-gradient(circle, #4C6CA3 0%, transparent 70%)' }}
            />
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/dr%20renner%20amaral%20pediatra/img/sobre%20o%20doutor.webp"
                  alt="Dr. Renner Amaral com família"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/60 to-transparent" />
              </div>
              <div
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-brand-blue/10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-800">Membro Ativo SBP</p>
                    <p className="text-xs text-gray-500">Sociedade Brasileira de Pediatria</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div ref={rightRef} className="section-observe">
            <div className="inline-flex items-center gap-2 bg-brand-blue-pale text-brand-blue text-xs font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-wide">
              <Heart size={13} />
              Sobre o Médico
            </div>

            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
              Dr. Renner Amaral{' '}
              <span className="text-brand-blue">Pediatra</span>
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              Especialista em Pediatria com residência médica no renomado Hospital Municipal da
              Criança e do Adolescente em São Paulo, o Dr. Renner Amaral construiu sua experiência
              em instituições de saúde de referência no estado.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Acredito que cuidar de uma criança vai muito além de tratar sintomas — é estar
              presente nos momentos de dúvida, oferecer apoio nas horas difíceis e caminhar lado a
              lado com a família em cada etapa do desenvolvimento. Cada consulta é uma oportunidade
              de criar vínculos, construir segurança e oferecer não apenas um olhar médico, mas
              também humano, sensível e respeitoso.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {CREDENTIALS.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="flex gap-3 p-4 bg-white rounded-2xl shadow-sm border border-brand-blue/10"
                >
                  <div className="w-9 h-9 bg-brand-blue-pale rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-brand-blue" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-800 mb-1">{title}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="http://wa.me/553799766089"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Agendar com Dr. Renner
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

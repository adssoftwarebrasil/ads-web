import { useEffect, useRef } from 'react';
import { Award, Users, ThumbsUp, Calendar } from 'lucide-react';

const stats = [
  { icon: Calendar, value: '6+', label: 'Anos de experiência' },
  { icon: Users, value: '1.000+', label: 'Clientes atendidos' },
  { icon: ThumbsUp, value: '98%', label: 'Satisfação dos clientes' },
  { icon: Award, value: '5★', label: 'Avaliação no Google' },
];

const differentials = [
  'Diagnóstico eletrônico de última geração',
  'Equipe treinada e certificada',
  'Prazo de entrega sempre cumprido',
  'Orçamento transparente sem surpresas',
  'Peças originais e de primeira linha',
  'Atendimento humanizado e personalizado',
];

export default function About() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [
      { el: leftRef.current, cls: 'observe-animate-left' },
      { el: rightRef.current, cls: 'observe-animate-right' },
      { el: statsRef.current, cls: 'observe-animate' },
    ];

    elements.forEach(({ el, cls }) => {
      if (!el) return;
      el.classList.add(cls);
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add('visible');
            observer.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      observer.observe(el);
    });
  }, []);

  return (
    <section id="sobre" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          <div ref={leftRef}>
            <span className="section-tag">Sobre a RPN</span>
            <h2 className="section-title mb-6">
              Uma oficina que<br />
              <span className="text-rpn-red">respeita seu carro</span><br />
              e seu tempo.
            </h2>
            <p className="text-rpn-gray leading-relaxed mb-5">
              Fundada em março de 2019, a <strong className="text-gray-800">RPN Mecânica Automotiva</strong> nasceu com um propósito claro: oferecer manutenção automotiva de alta qualidade com honestidade, transparência e respeito ao cliente.
            </p>
            <p className="text-rpn-gray leading-relaxed mb-8">
              Localizada na Rod. BR-316, km 05, em Águas Lindas, Ananindeua-PA, nossa equipe de profissionais altamente qualificados utiliza tecnologia de diagnóstico avançada para garantir que seu veículo saia da oficina em perfeitas condições — e no prazo combinado.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {differentials.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-rpn-red/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-rpn-red" />
                  </div>
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="http://wa.me/559182696336?text=Olá!%20Gostaria%20de%20conhecer%20mais%20sobre%20a%20RPN%20Mecânica."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Falar com a equipe
            </a>
          </div>

          <div ref={rightRef} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="https://storage.lucasmendes.dev/site-sp/rpn%20mecanica%20automotiva/galeria/fachada-mecanica-automotiva-carros-estacionados_1280x960.webp"
                alt="Fachada da RPN Mecânica Automotiva"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-rpn-light max-w-[200px]">
              <img
                src="https://storage.lucasmendes.dev/site-sp/rpn%20mecanica%20automotiva/img/logo.webp"
                alt="Logo RPN"
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>

            <div className="absolute -top-4 -right-4 bg-rpn-red text-white rounded-2xl shadow-xl p-4 text-center">
              <div className="text-3xl font-black">6+</div>
              <div className="text-xs font-medium opacity-90">anos de<br />confiança</div>
            </div>
          </div>
        </div>

        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="bg-gray-50 border border-rpn-light rounded-2xl p-6 text-center hover:border-rpn-red/30 hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-rpn-red/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-rpn-red group-hover:scale-110 transition-all duration-300">
                <Icon size={22} className="text-rpn-red group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="text-3xl font-black text-gray-900 mb-1">{value}</div>
              <div className="text-rpn-gray text-sm">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

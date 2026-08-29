import { Check } from 'lucide-react';

const highlights = [
  'Experiência comprovada de mais de 50 anos no mercado',
  'Equipe altamente especializada e constantemente atualizada',
  'Consultoria estratégica focada em resultados reais',
  'Atendimento personalizado para cada segmento de negócio',
  'Tecnologia integrada para máxima eficiência',
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 transition-all duration-1000">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/exatidao%20contabilidade/img/quem-somos.webp"
              alt="Exatidão Contabilidade - Quem Somos"
              className="rounded-2xl shadow-2xl w-full aspect-video object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="text-sm uppercase tracking-widest text-[rgb(204,162,74)] font-semibold mb-4">
              DESDE 1968
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[rgb(54,55,58)] mb-6">Quem Somos</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
              <p>
                A <span className="font-semibold text-[rgb(202,162,106)]">Exatidão Contabilidade</span> é sinônimo de
                tradição, confiança e excelência em Goiânia. Há mais de cinco décadas, nossa história é construída
                geração após geração, sempre com o compromisso de ir além da contabilidade tradicional.
              </p>
              <p>
                Entendemos profundamente o negócio dos nossos clientes e oferecemos não apenas conformidade fiscal, mas
                estratégias personalizadas que transformam dados em ações concretas para o crescimento sustentável da
                sua empresa.
              </p>
            </div>
            <div className="space-y-4 mb-8">
              {highlights.map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-[rgb(202,162,106)] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{text}</span>
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/556232113304?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Exatidão%20Contabilidade."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[rgb(202,162,106)] hover:bg-[rgb(204,162,74)] text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Entre em Contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

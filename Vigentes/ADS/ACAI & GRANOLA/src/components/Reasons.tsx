import { useReveal } from '../hooks/useReveal';

function RevealCard({ delay, children }: { delay: number; children: React.ReactNode }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Reasons() {
  return (
    <section
      className="py-20 relative"
      style={{
        backgroundImage:
          'url("https://storage.lucasmendes.dev/site-sp/acai%20e%20granola%2Fimg%2Fpor-que-contratar-background.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-overlay"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Razões para Escolher a ACAI &amp; GRANOLA
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <RevealCard delay={0}>
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-8 border border-white border-opacity-20">
              <h3 className="text-2xl font-bold text-white mb-4">Inovação Contínua</h3>
              <p className="text-white text-lg leading-relaxed">
                Estamos sempre em busca de novas experiências e sabores para oferecer aos nossos clientes,
                mantendo nossa linha de produtos atualizada e surpreendente.
              </p>
            </div>
          </RevealCard>
          <RevealCard delay={200}>
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-8 border border-white border-opacity-20">
              <h3 className="text-2xl font-bold text-white mb-4">Compromisso com Sustentabilidade</h3>
              <p className="text-white text-lg leading-relaxed">
                Práticas que respeitam o meio ambiente e garantem a qualidade dos ingredientes, contribuindo
                para um futuro mais saudável.
              </p>
            </div>
          </RevealCard>
          <RevealCard delay={400}>
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <img
                src="https://storage.lucasmendes.dev/site-sp/acai%20e%20granola%2Fimg%2Fclientes-que-retornam-sempre-satisfeitos.png"
                alt="Clientes que retornam sempre satisfeitos"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Clientes que retornam sempre satisfeitos</h3>
              </div>
            </div>
          </RevealCard>
          <RevealCard delay={600}>
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <img
                src="https://storage.lucasmendes.dev/site-sp/acai%20e%20granola%2Fimg%2Fatendimento-a-revendedores-e-consumidores.jpg"
                alt="Atendimento a revendedores e consumidores"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Atendimento a revendedores e consumidores</h3>
              </div>
            </div>
          </RevealCard>
        </div>
      </div>
    </section>
  );
}

import { Shield, Heart, Clock } from 'lucide-react';

export function About() {
  const highlights = [
    { icon: Shield, title: 'Tradição e Confiança', color: 'text-[#FF6B00]' },
    { icon: Heart, title: 'Atendimento Personalizado', color: 'text-[#FF6B00]' },
    { icon: Clock, title: 'Delivery Até 23:30', color: 'text-[#FF6B00]' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-[#FF6B00] font-bold tracking-wide uppercase text-sm mb-4">
              QUEM SOMOS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-6 leading-tight">
              Manaus Baterias
              <span className="block mt-2">Uma Empresa Familiar com Mais de 46 Anos</span>
            </h2>
            <div className="text-[#334155] text-lg leading-relaxed space-y-4 mb-8">
              <p>
                A Manaus Baterias é uma empresa familiar que tem se destacado no mercado
                há mais de 46 anos, proporcionando atendimento personalizado e serviços de entrega
                de baterias em domicílio até às 23:30.
              </p>
              <p>
                Além de baterias, nos especializamos na manutenção de radiadores e arrefecimento de
                veículos, sempre priorizando a satisfação de nossos clientes.
              </p>
              <p>
                Estamos prontos para atender suas necessidades, seja na venda ou na manutenção.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#F3F4F6] border-l-4 border-[#FF6B00] p-4 rounded flex items-center space-x-3 hover:shadow-lg transition-shadow"
                >
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                  <span className="font-semibold text-[#1E3A8A]">{item.title}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-block bg-[#FF6B00] text-white px-8 py-4 rounded-lg hover:bg-[#1E3A8A] transition-all transform hover:scale-105 font-bold"
            >
              FALE CONOSCO
            </a>
          </div>

          <div className="relative">
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=sos-baterias%2FImagem%20do%20WhatsApp%20de%202025-11-26%20%C3%A0(s)%2015.31.20_7bfafe4a.jpg&version_id=null"
              alt="Fachada Manaus Baterias"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl animate-float">
              <img
                src="https://storage.lucasmendes.dev/site-sp/sos-baterias%2Fimagem-5-estrelas-google.png"
                alt="5 Estrelas Google"
                className="w-36"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

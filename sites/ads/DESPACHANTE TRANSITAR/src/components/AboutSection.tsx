import { CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    '20 anos de experiência no mercado',
    'Atendimento personalizado e eficiente',
    'Soluções rápidas para documentação de veículos',
    'Especialização em isenção de IPVA para PCD'
  ];

  const images = [
    'https://storage.lucasmendes.dev/site-sp/despachante%20transitar%2Fimgi_2_242367243_6482714408468626_7737986689468769733_n.jpg',
    'https://storage.lucasmendes.dev/site-sp/despachante%20transitar%2Fimgi_36_img-3.jpg',
    'https://storage.lucasmendes.dev/site-sp/despachante%20transitar%2Fimgi_38_img-1.jpg'
  ];

  return (
    <section id="sobre" className="bg-blue-off-white py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block bg-accent/10 px-4 py-2 rounded-full mb-4">
              <span className="text-accent font-bold text-sm uppercase tracking-wider">Quem Somos</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-secondary mb-4">
              DESPACHANTE TRANSITAR
            </h2>
            <div className="space-y-4 text-gray-700 text-base lg:text-lg leading-relaxed mb-8">
              <p>
                A <strong>DESPACHANTE TRANSITAR</strong> foi fundada em outubro de 2005 pela empresária Luciana Marques de Arruda, com o objetivo de otimizar o tempo de seus clientes. Ao longo de 20 anos de atuação, a empresa se destacou pela eficiência e agilidade na prestação de serviços como primeiro emplacamento, transferência de propriedade, segunda via do CRV, licenciamento anual, isenção de IPVA para PCD, cadastro ANTT e licenças AET.
              </p>
              <p>
                Com um atendimento personalizado e focado nas necessidades do cliente, a DESPACHANTE TRANSITAR garante a satisfação e a confiança de quem busca resolver questões relacionadas ao trânsito de maneira rápida e eficaz.
              </p>
            </div>

            <div className="space-y-3 mb-8">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-blue-very-light border-l-4 border-accent px-5 py-3 rounded-r-lg hover:bg-white transition-colors"
                >
                  <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700 font-medium">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="bg-white border-2 border-blue-pastel rounded-xl p-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-blue-light flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                  L.M.A
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary">Luciana Marques de Arruda</h3>
                  <p className="text-gray-600">Fundadora e Empresária</p>
                  <span className="inline-block mt-2 bg-accent px-3 py-1 rounded-full text-white text-xs font-bold">
                    Desde 2005
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/6699854973"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-center hover:scale-105 transition-transform shadow-lg"
              >
                Falar no WhatsApp
              </a>
              <button
                onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold hover:bg-primary hover:text-white transition-all"
              >
                Nossos Serviços
              </button>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <img
                  src={images[0]}
                  alt="Despachante Transitar"
                  className="w-full h-104 object-cover rounded-2xl border-4 border-white shadow-xl hover:scale-105 transition-transform"
                />
              </div>
              <div>
                <img
                  src={images[1]}
                  alt="Serviços"
                  className="w-full h-48 object-cover rounded-2xl border-4 border-white shadow-xl hover:scale-105 transition-transform"
                />
              </div>
              <div>
                <img
                  src={images[2]}
                  alt="Atendimento"
                  className="w-full h-48 object-cover rounded-2xl border-4 border-white shadow-xl hover:scale-105 transition-transform"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { CheckCircle, MessageCircle } from 'lucide-react';

export default function AutoPecasSection() {
  const features = [
    'Estoque completo para linha pesada',
    'Peças originais e de reposição',
    'Entrega rápida na região',
    'Preços competitivos'
  ];

  return (
    <section id="autopecas" className="py-16 md:py-24 bg-[#e1eff5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-slide-in-left">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=MECANICA-CAMPOS%2Frsz_2linha_alliance__divulgaCAo__mercedes-benz.png&version_id=null"
                alt="Auto Peças"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = '<div class="w-full h-full bg-[#152755] flex items-center justify-center text-white text-6xl">🔩</div>';
                  }
                }}
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 animate-slide-in-right">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#152755] mb-6">
              Auto Peças com os Melhores Preços
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Nossa loja conta com ampla variedade de peças automotivas para caminhões e
              máquinas pesadas. Trabalhamos com as principais marcas do mercado, garantindo
              qualidade e procedência.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#FF6B35] mr-3 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/5566996460016?text=Olá!%20Gostaria%20de%20consultar%20a%20disponibilidade%20de%20peças."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#FF6B35] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#e55a2a] transition-all transform hover:scale-105 shadow-lg"
            >
              <MessageCircle className="mr-2" size={24} />
              Consultar Disponibilidade
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { openWhatsApp } from '../lib/whatsapp';

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#f8f9fa]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="transition-all duration-1000 opacity-100 translate-x-0">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Quem somos - <span className="text-gradient">AÇAI &amp; GRANOLA</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              A ACAI &amp; GRANOLA é referência em gelatos comestíveis de altíssima qualidade. Com sabor
              incomparável e rigorosas certificações de segurança alimentar, nossa marca é sinônimo de
              confiança. Além do creme de açaí, oferecemos a Granola Da Boa, perfeita para variados
              momentos do dia. Nossa missão é proporcionar produtos que agradem ao paladar e contribuam
              para uma alimentação saudável, destacando-se pela qualidade e sabor excepcionais.
            </p>
            <button
              onClick={() => openWhatsApp()}
              className="bg-[rgb(6,173,244)] text-white px-8 py-3 rounded-full text-lg font-semibold hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              Enviar WhatsApp
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4 transition-all duration-1000 delay-300 opacity-100 translate-x-0">
            <div className="col-span-2">
              <img
                src="https://storage.lucasmendes.dev/site-sp/acai%20e%20granola%2Fimg%2Fquem-somos-1.jpg"
                alt="ACAI & GRANOLA - Produtos de qualidade"
                className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                loading="lazy"
              />
            </div>
            <div>
              <img
                src="https://storage.lucasmendes.dev/site-sp/acai%20e%20granola%2Fimg%2Fquem-somos-2.jpg"
                alt="ACAI & GRANOLA - Processo de produção"
                className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                loading="lazy"
              />
            </div>
            <div>
              <img
                src="https://storage.lucasmendes.dev/site-sp/acai%20e%20granola%2Fimg%2Fquem-somos-3.jpg"
                alt="ACAI & GRANOLA - Equipe dedicada"
                className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

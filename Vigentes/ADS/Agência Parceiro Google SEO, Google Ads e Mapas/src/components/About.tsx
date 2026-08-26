import { Building2, Video } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/ads-marketing%2Fimg-Google-Meu-Negocio-1024x292.webp"
                  alt="Google Partner"
                  className="h-20 w-auto object-contain"
                />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/ads-marketing%2FMet-Business-Partners.png"
                  alt="Meta Business Partner"
                  className="h-20 w-auto object-contain"
                />
              </div>
            </div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#212121] mb-6">
              Nós somos <span className="text-[#4285F4]">Parceiros Google</span> Oficiais.
            </h2>
            <p className="text-lg text-[#5F6368] leading-relaxed mb-6">
              Com sede no <strong>Terra Office Jardim América</strong>, ocupando dois andares, nossa
              equipe é certificada pelo Google para ajudar sua empresa a ser bem colocada nos
              resultados de busca e mapas. Aumentamos sua reputação e avaliações online.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Building2
                  size={24}
                  className="text-[#0F9D58] flex-shrink-0 mt-1"
                />
                <div>
                  <h3 className="font-bold text-[#212121] mb-1">Estrutura Profissional</h3>
                  <p className="text-[#5F6368]">
                    Dois andares dedicados no Terra Office, com equipe especializada e certificada
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Video size={24} className="text-[#F4B400] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-[#212121] mb-1">Filmagem Aérea</h3>
                  <p className="text-[#5F6368]">
                    Oferecemos também filmagem aérea para reconhecimento regional (consulte
                    condições)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

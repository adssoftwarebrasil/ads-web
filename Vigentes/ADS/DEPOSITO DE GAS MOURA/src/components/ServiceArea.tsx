import { MapPin, Check } from 'lucide-react';

const bairros = [
  'Faiçalville',
  'Vila Boa',
  'Jardim Atlântico',
  'Jardim Planalto',
  'Parque Anhanguera',
  'Jardim Presidente',
  'Três Marias',
  'Rio Formoso',
  'Cachoeira Dourada',
  'Novo Horizonte',
  'Jardim Europa',
  'Jardim Helvécia',
];

export default function ServiceArea() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(28,59,126)] mb-4">
            Área de Atendimento
          </h2>
          <div className="w-24 h-1 bg-[rgb(228,29,32)] mx-auto mb-6"></div>
          <p className="text-lg text-[rgb(162,173,190)] max-w-3xl mx-auto">
            Atendemos diversos bairros de Goiânia com entrega rápida e segura
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="bg-gradient-to-br from-[rgb(28,59,126)] to-[rgb(228,29,32)] rounded-2xl p-8 text-white mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/20 p-3 rounded-full">
                  <MapPin className="lucide lucide-map-pin text-white" width={32} height={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Nossa Localização</h3>
                  <p className="text-white/90">Fácil acesso e localização privilegiada</p>
                </div>
              </div>
              <p className="text-lg mb-2">Av. Olávo Bilac, 759 - Quadra 96 Lote 08</p>
              <p className="text-lg mb-6">Setor Faiçalville, Goiânia - GO, 74360-105</p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.google.com/maps/place/Dep%C3%B3sito+de+G%C3%A1s+Moura/@-16.7326839,-49.3183358,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[rgb(28,59,126)] px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-all"
                >
                  Ver no Mapa
                </a>
                <a
                  href="http://wa.me/5562982672012?text=Olá!%20Gostaria%20de%20saber%20se%20atendem%20minha%20região"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[rgb(228,29,32)] text-white px-6 py-3 rounded-full font-bold hover:bg-[rgb(200,25,28)] transition-all"
                >
                  Consultar Entrega
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-[rgb(28,59,126)] mb-6">Bairros Atendidos</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {bairros.map((bairro) => (
                  <div
                    key={bairro}
                    className="flex items-center gap-3 bg-gray-50 rounded-lg p-3 hover:bg-[rgb(228,29,32)]/5 transition-colors"
                  >
                    <div className="bg-[rgb(228,29,32)] rounded-full p-1 flex-shrink-0">
                      <Check className="lucide lucide-check text-white" width={16} height={16} />
                    </div>
                    <span className="text-gray-700 font-medium">{bairro}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-[rgb(162,173,190)] text-sm">
                * Consulte disponibilidade para outras regiões de Goiânia
              </p>
            </div>
          </div>
          <div className="sticky top-24">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.8830955038525!2d-49.3183358248499!3d-16.73268388404703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef71302d100ed%3A0x160b2e32c2a4960e!2sDep%C3%B3sito%20de%20G%C3%A1s%20Moura!5e0!3m2!1spt-BR!2sbr!4v1769018624914!5m2!1spt-BR!2sbr"
                width="100%"
                height={600}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Depósito de Gás Moura"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

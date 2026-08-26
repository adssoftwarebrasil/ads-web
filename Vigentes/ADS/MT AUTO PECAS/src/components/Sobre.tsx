import { Award, Users, Shield, TrendingUp } from 'lucide-react';

export default function Sobre() {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Sobre a <span className="text-[rgb(4,152,134)]">MT Auto Peças</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mais de 19 anos de tradição e excelência no ramo automotivo
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Nossa História</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A MT Auto Peças é uma empresa com mais de 19 anos de experiência no ramo automotivo, oferecendo uma
                  ampla variedade de produtos essenciais para o bom desempenho e segurança de veículos.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Atuamos na venda de peças, baterias, pneus e óleos lubrificantes, atendendo motos, carros, pick-ups,
                  caminhões, ônibus e carretas com qualidade e preços competitivos.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Nossa equipe especializada está pronta para fornecer um atendimento de qualidade, seja por WhatsApp,
                  telefone ou diretamente em nossa loja. Estamos presentes em diversas localidades como Ananindeua,
                  Belém, Benevides, Santa Izabel e Barcarena.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <Award size={32} className="text-[rgb(4,152,134)] mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">19+</div>
                  <div className="text-sm text-gray-600">Anos de Experiência</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <Users size={32} className="text-[rgb(4,152,134)] mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">1000+</div>
                  <div className="text-sm text-gray-600">Clientes Satisfeitos</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/mt%20autopecas/img/fachada.webp"
                  alt="Fachada MT Auto Peças"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-[rgb(4,152,134)] text-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                <div className="flex items-center gap-3 mb-2">
                  <Shield size={24} />
                  <span className="font-bold text-lg">Qualidade Garantida</span>
                </div>
                <p className="text-sm text-white/90">Produtos de qualidade com garantia e suporte especializado</p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/mt%20autopecas/img/interno%20loja.webp"
                  alt="Interior da Loja MT Auto Peças"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Por Que Escolher a MT Auto Peças?</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[rgb(4,152,134)]/10 rounded-full flex items-center justify-center">
                    <TrendingUp size={24} className="text-[rgb(4,152,134)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 mb-2">Amplo Estoque</h4>
                    <p className="text-gray-600">
                      Grande variedade de produtos para todos os tipos de veículos, sempre disponíveis para pronta
                      entrega.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[rgb(4,152,134)]/10 rounded-full flex items-center justify-center">
                    <Users size={24} className="text-[rgb(4,152,134)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 mb-2">Atendimento Especializado</h4>
                    <p className="text-gray-600">
                      Equipe qualificada pronta para orientar e encontrar a solução ideal para seu veículo.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[rgb(4,152,134)]/10 rounded-full flex items-center justify-center">
                    <Award size={24} className="text-[rgb(4,152,134)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 mb-2">Preços Competitivos</h4>
                    <p className="text-gray-600">
                      Melhores preços da região com facilidades de pagamento, inclusive aceitamos cartão.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

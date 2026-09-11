import { Check, Award, Clock, CreditCard, Truck } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0b0d10] mb-6">
              Mais de 13 Anos<br />Energizando o<br />Oeste Baiano
            </h2>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              A Mega Baterias é a maior e mais moderna loja de baterias da região,
              parceira oficial Moura. Reconhecidos por 4 anos consecutivos como
              Destaque do Ano pela ACELEM.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-[#ffef1d] p-2 rounded-full">
                  <Truck className="text-[#0b0d10]" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-[#0b0d10]">Tele-entrega gratuita na cidade</h3>
                  <p className="text-gray-600 text-sm">Levamos até você sem custo adicional</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-[#ffef1d] p-2 rounded-full">
                  <CreditCard className="text-[#0b0d10]" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-[#0b0d10]">Parcelamento em até 10x no cartão</h3>
                  <p className="text-gray-600 text-sm">Facilidade no pagamento</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-[#ffef1d] p-2 rounded-full">
                  <Clock className="text-[#0b0d10]" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-[#0b0d10]">Plantão aos finais de semana e feriados</h3>
                  <p className="text-gray-600 text-sm">Atendimento quando você mais precisa</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-[#ffef1d] p-2 rounded-full">
                  <Check className="text-[#0b0d10]" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-[#0b0d10]">Instalação gratuita</h3>
                  <p className="text-gray-600 text-sm">Serviço completo sem cobranças extras</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/megabaterias/EquipeMegaBaterias.webp"
              alt="Equipe Mega Baterias"
              className="rounded-3xl shadow-2xl object-cover w-full h-[500px]"
              loading="lazy"
            />
          </div>
        </div>

        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-[#0b0d10] flex items-center justify-center gap-3">
            <Award className="text-[#d7282d]" size={32} />
            Reconhecimento e Tradição
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <img
              src="https://storage.lucasmendes.dev/site-sp/megabaterias/EquipeMegaBateriasNoEventoRecebendoOPremio.webp"
              alt="Equipe recebendo prêmio"
              className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <img
              src="https://storage.lucasmendes.dev/site-sp/megabaterias/Trofeu-Destaque-Empresa-Bateria-2023.webp"
              alt="Troféu Destaque 2023"
              className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <img
              src="https://storage.lucasmendes.dev/site-sp/megabaterias/FotoBoloDeAniversarioDaMegaBateriaEDoisColaboradores.webp"
              alt="Aniversário Mega Baterias"
              className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
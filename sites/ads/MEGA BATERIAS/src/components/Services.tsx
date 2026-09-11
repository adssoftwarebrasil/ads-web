import { Phone, Clock, MapPin } from 'lucide-react';

export default function Services() {
  return (
    <section id="servicos" className="bg-gradient-to-br from-[#ffef1d] to-[#d7282d] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#0b0d10] p-4 rounded-full">
                <Phone className="text-[#ffef1d]" size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0b0d10]">
                Levamos até Você!
              </h2>
            </div>

            <p className="text-[#0b0d10] text-lg mb-8 leading-relaxed">
              Entrega gratuita via WhatsApp ou Telefone. Atendemos toda a cidade
              e cidades próximas com rapidez e segurança.
            </p>

            <div className="space-y-4">
              <a
                href="https://wa.me/5577999036565?text=Olá!%20Gostaria%20de%20solicitar%20uma%20entrega."
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#0b0d10] text-white px-8 py-6 rounded-full text-xl font-bold hover:scale-105 transition-transform text-center shadow-2xl"
              >
                📱 77 9 9903-6565
              </a>

              <a
                href="tel:+5577998206419"
                className="block bg-white text-[#0b0d10] px-8 py-6 rounded-full text-xl font-bold hover:scale-105 transition-transform text-center shadow-2xl"
              >
                📞 77 9 9820-6419
              </a>
            </div>

            <div className="mt-8 bg-white/20 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="text-[#0b0d10]" size={24} />
                <h3 className="font-bold text-[#0b0d10] text-lg">Entrega Gratuita</h3>
              </div>
              <p className="text-[#0b0d10]">
                Luís Eduardo Magalhães e região. Instalação incluída!
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#0b0d10] p-4 rounded-full">
                <Clock className="text-[#ffef1d]" size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0b0d10]">
                Plantão Especial
              </h2>
            </div>

            <p className="text-[#0b0d10] text-lg mb-8 leading-relaxed">
              Atendimento especial aos finais de semana e feriados.
              Porque emergências não têm hora marcada!
            </p>

            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-6">
              <h3 className="font-bold text-[#0b0d10] text-xl mb-4">
                🕒 Horários de Plantão
              </h3>
              <ul className="space-y-2 text-[#0b0d10]">
                <li className="flex items-center gap-2">
                  <span className="font-bold">•</span> Sábados
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold">•</span> Domingos
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold">•</span> Feriados
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="bg-[#0b0d10] text-white px-6 py-4 rounded-2xl text-center">
                <p className="text-sm mb-2">Atendimento na Loja</p>
                <p className="font-bold text-xl">📱 77 9 9903-6565</p>
              </div>

              <div className="bg-[#0b0d10] text-white px-6 py-4 rounded-2xl text-center">
                <p className="text-sm mb-2">WhatsApp Plantão</p>
                <p className="font-bold text-xl">📱 77 9 9820-6419</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white/20 backdrop-blur-md rounded-3xl p-8 text-center border border-white/20">
          <h3 className="text-2xl font-bold text-[#0b0d10] mb-4">
            💳 Facilidades de Pagamento
          </h3>
          <p className="text-[#0b0d10] text-lg">
            Parcelamento em até <span className="font-bold">10x sem juros</span> no cartão de crédito
          </p>
        </div>
      </div>
    </section>
  );
}

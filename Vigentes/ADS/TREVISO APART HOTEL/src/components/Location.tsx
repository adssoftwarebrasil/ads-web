import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="bg-[#fef5e6] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#b82626] uppercase tracking-[0.3em] text-xs font-semibold mb-3">
            Como chegar
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#212042] leading-tight">
            No coração de Linhares
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="w-16 h-1 bg-[#b82626] rounded-full" />
          </div>
          <p className="mt-5 text-[#a08f95] max-w-xl mx-auto text-base leading-relaxed">
            Localizado na principal avenida do centro de Linhares, com fácil acesso
            às principais empresas, comércio e pontos turísticos da cidade.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-xl h-80 sm:h-96 lg:h-[450px]">
            <iframe
              title="Localização Treviso Apart Hotel"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.6617!2d-40.0743!3d-19.3914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDIzJzI5LjAiUyA0MMKwMDQnMjcuNSJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr&q=Av.+Presidente+Getúlio+Vargas,+685,+Linhares,+ES"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex flex-col gap-5">
            <div className="bg-white rounded-xl p-5 shadow-sm border border-[#a08f95]/10">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#212042] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-[#b82626]" />
                </div>
                <div>
                  <h4 className="text-[#212042] font-bold text-sm mb-1">Endereço</h4>
                  <p className="text-[#a08f95] text-sm leading-relaxed">
                    Av. Presidente Getúlio Vargas, 685<br />
                    Centro – Linhares, ES
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-sm border border-[#a08f95]/10">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#212042] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-[#b82626]" />
                </div>
                <div>
                  <h4 className="text-[#212042] font-bold text-sm mb-1">Telefone / WhatsApp</h4>
                  <a href="tel:2733734333" className="text-[#a08f95] text-sm hover:text-[#212042] transition-colors block">
                    (27) 3373-4333
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-sm border border-[#a08f95]/10">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#212042] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-[#b82626]" />
                </div>
                <div>
                  <h4 className="text-[#212042] font-bold text-sm mb-1">Funcionamento</h4>
                  <p className="text-[#a08f95] text-sm">
                    24 horas por dia,<br />7 dias por semana
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Av.+Presidente+Getúlio+Vargas,+685,+Linhares,+ES"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#212042] hover:bg-[#1a1a35] text-[#fef5e6] font-semibold py-3.5 rounded-xl transition-all duration-200 shadow-lg"
            >
              <Navigation size={18} />
              Traçar Rota
            </a>

            <div className="bg-[#212042] rounded-xl p-5">
              <h4 className="text-[#fef5e6] font-bold text-sm mb-3">Atendemos hóspedes de:</h4>
              <div className="flex flex-wrap gap-2">
                {['Vitória', 'São Paulo', 'Rio de Janeiro', 'Bahia', 'Minas Gerais', 'Todo o Brasil'].map((city) => (
                  <span key={city} className="bg-[#b82626]/20 text-[#fef5e6]/80 text-xs px-3 py-1 rounded-full">
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

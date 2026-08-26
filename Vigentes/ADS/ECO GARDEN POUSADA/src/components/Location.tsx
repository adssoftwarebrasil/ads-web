import { MapPin, Clock } from 'lucide-react';

export default function Location() {
  return (
    <section id="localizacao" className="py-20 bg-[#f4f5e8]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2a2d1a] mb-12 text-center">
          Como Chegar
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-[#fbfcf2] rounded-xl p-8 shadow-md mb-6">
              <div className="flex items-start mb-6">
                <MapPin className="w-6 h-6 text-[#cbd01c] mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-[#2a2d1a] mb-2">
                    Endereço
                  </h3>
                  <p className="text-[#2a2d1a]/80">Rodovia BR 369 KM-1</p>
                  <p className="text-[#2a2d1a]/80">Zona Rural - Oliveira, MG</p>
                  <p className="text-[#2a2d1a]/80">CEP: 35540-000</p>
                  <p className="text-[#2a2d1a]/80 mt-2 font-semibold">
                    (Saída para Campo Belo)
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-6 h-6 text-[#cbd01c] mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-[#2a2d1a] mb-2">
                    Horário de Atendimento
                  </h3>
                  <p className="text-[#2a2d1a]/80">
                    Segunda a Sexta: 08h às 18h
                  </p>
                  <p className="text-[#2a2d1a]/80">Sábados: 08h às 19h</p>
                  <p className="text-[#2a2d1a]/80">Domingos: 08h às 16h</p>
                </div>
              </div>
            </div>

            <div className="bg-[#cbd01c]/20 rounded-xl p-6 border-2 border-[#cbd01c]">
              <p className="text-[#2a2d1a] font-semibold text-center">
                Fácil acesso pela BR 369
              </p>
              <p className="text-[#2a2d1a]/80 text-center mt-2">
                Próximo a Campo Belo e região
              </p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg h-96 md:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.8!2d-44.8!3d-20.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDQyJzAwLjAiUyA0NMKwNDgnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Eco Garden"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

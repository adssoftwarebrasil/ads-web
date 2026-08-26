import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Localizacao() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1 order-2 lg:order-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.8947208!2d-47.61401!3d-15.61944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDM3JzEwLjAiUyA0N8KwMzYnNTAuNCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr"
              className="w-full h-[450px] rounded-l-xl lg:rounded-l-xl lg:rounded-r-none rounded-r-xl"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Docctor Med Planaltina"
            />
          </div>

          <div className="flex-1 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d4a3e] mb-8">
              Visite Nossa Clínica
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#f37f1a] bg-opacity-10 rounded-full p-3 flex-shrink-0">
                  <MapPin size={24} className="text-[#f37f1a]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2d4a3e] mb-2">Endereço</h3>
                  <p className="text-[#a6a9a5] leading-relaxed">
                    Q CC LOTE 07, SOBRELOJA PARTE A<br />
                    R. do Centro Cívico, SN - Setor Oeste<br />
                    Planaltina - GO, 73750-005
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#f37f1a] bg-opacity-10 rounded-full p-3 flex-shrink-0">
                  <Phone size={24} className="text-[#f37f1a]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2d4a3e] mb-2">Telefones</h3>
                  <p className="text-[#a6a9a5] leading-relaxed">
                    <a
                      href="https://wa.me/5561982400076"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#f37f1a] hover:underline"
                    >
                      WhatsApp: (61) 98240-0076
                    </a>
                    <br />
                    Fixo: (61) 3142-0898
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#f37f1a] bg-opacity-10 rounded-full p-3 flex-shrink-0">
                  <Mail size={24} className="text-[#f37f1a]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2d4a3e] mb-2">Email</h3>
                  <p className="text-[#a6a9a5]">
                    <a
                      href="mailto:financeiro.dmplanaltinago@gmail.com"
                      className="text-[#f37f1a] hover:underline"
                    >
                      financeiro.dmplanaltinago@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#f37f1a] bg-opacity-10 rounded-full p-3 flex-shrink-0">
                  <Clock size={24} className="text-[#f37f1a]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2d4a3e] mb-2">
                    Horário de Funcionamento
                  </h3>
                  <p className="text-[#a6a9a5] leading-relaxed">
                    Segunda a Sexta: 7h às 18h<br />
                    Sábado: 7h às 12h
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="https://wa.me/5561982400076?text=Olá! Gostaria de agendar uma consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#f37f1a] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#d97015] transition-all duration-300 hover:scale-105"
              >
                Fale Conosco pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

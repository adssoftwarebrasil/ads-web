import { MapPin, Navigation, Clock } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Location() {
  return (
    <section id="localizacao" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[#009FC2] text-sm font-semibold tracking-widest uppercase mb-3">
            Localização
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#144170] leading-tight">
            Como Nos
            <span className="text-[#009FC2]"> Encontrar</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base">
            Consultório bem localizado no coração de Governador Valadares, com fácil acesso para toda a região.
          </p>
        </div>
        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          <div className="lg:col-span-3 rounded-2xl overflow-hidden shadow-lg border border-gray-100 min-h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3775.786476488601!2d-41.949668224800256!3d-18.85215958230686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb1a725ad8cef2f%3A0x6f67b5892f9945a5!2sDr.%20Sillas%20Mour%C3%A3o%20Coloproctologista%20em%20Gv!5e0!3m2!1spt-BR!2sbr!4v1772210446897!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa - Dr. Sillas Mourão"
              style={{ border: '0px', minHeight: '380px' }}
            ></iframe>
          </div>
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="bg-[#f5f8fc] rounded-2xl p-6 border border-gray-100 flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#009FC2]/15 flex items-center justify-center flex-shrink-0">
                  <MapPin width={20} height={20} className="lucide lucide-map-pin text-[#009FC2]" />
                </div>
                <div>
                  <p className="text-[#144170] font-bold text-base">Endereço</p>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                    Edifício Medical Center
                    <br />
                    R. 7 de Setembro, 2716 — Sala 1404
                    <br />
                    Centro, Gov. Valadares — MG
                    <br />
                    CEP: 35010-170
                  </p>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=Dr.+Sillas+Mour%C3%A3o+Coloproctologista+em+Gv"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#009FC2] text-sm font-semibold hover:underline"
              >
                <Navigation width={14} height={14} className="lucide lucide-navigation " />
                Abrir no Google Maps
              </a>
            </div>
            <div className="bg-[#f5f8fc] rounded-2xl p-6 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#009FC2]/15 flex items-center justify-center flex-shrink-0">
                  <Clock width={20} height={20} className="lucide lucide-clock text-[#009FC2]" />
                </div>
                <div className="flex-1">
                  <p className="text-[#144170] font-bold text-base mb-3">Horários de Atendimento</p>
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm">Segunda a Sexta</span>
                      <span className="text-[#144170] font-semibold text-sm bg-[#009FC2]/10 px-3 py-1 rounded-full">
                        08:00 – 18:00
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm">Sábado</span>
                      <span className="text-gray-400 text-sm bg-gray-100 px-3 py-1 rounded-full">Fechado</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm">Domingo</span>
                      <span className="text-gray-400 text-sm bg-gray-100 px-3 py-1 rounded-full">Fechado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#144170] rounded-2xl p-6 flex flex-col gap-3">
              <p className="text-white font-bold text-base">Área de Atendimento</p>
              <p className="text-white/70 text-sm leading-relaxed">
                Atendemos pacientes de Governador Valadares e toda a região, incluindo cidades do Vale do Rio Doce.
              </p>
              <a
                href="https://wa.me/553399711500"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#009FC2] hover:bg-[#007fa0] text-white px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200 justify-center mt-2"
              >
                <WhatsAppIcon className="w-4 h-4" />
                Fale Conosco
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

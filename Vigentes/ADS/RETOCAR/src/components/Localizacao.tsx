import { MapPin, Phone, Clock, Instagram, Mail } from 'lucide-react';

const WHATSAPP_URL =
  'https://api.whatsapp.com/send/?phone=556233396922&text&type=phone_number&app_absent=0';

const cidades = [
  'Santa Terezinha',
  'Crixás',
  'Alto Horizonte',
  'Nova Iguaçu',
  'Campos Verdes',
  'Uruaçu',
  'Nova Crixás',
  'Uirapuru',
  'Campinorte',
];

export default function Localizacao() {
  return (
    <section id="localizacao" className="py-24 md:py-32 bg-[#0D1B2A]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block text-[#DB151F] text-xs font-bold tracking-widest uppercase mb-4">
            Onde Estamos
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Localização e Contato</h2>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto">
            Estamos prontos para atender você presencialmente ou pelo WhatsApp.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/5 w-full h-72 md:h-96 lg:h-[480px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.739396874084!2d-49.69954820578102!3d-14.44217649606713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x934267f90750b533%3A0x1468e36eec3f28c3!2sRETOCAR%20%7C%20Ar%20condicionado%2C%20Mec%C3%A2nico%2C%20Eletricista%2C%20Alinhamento%20e%20balanceamento!5e0!3m2!1spt-BR!2sbr!4v1773324909731!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Retocar"
              style={{ border: '0px' }}
            ></iframe>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href="https://maps.google.com/?q=RETOCAR+Santa+Terezinha+de+Goias"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 bg-[#0A0A0A] border border-white/5 rounded-2xl p-5 hover:border-[#DB151F]/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="w-10 h-10 bg-[#DB151F]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="lucide lucide-map-pin text-[#DB151F]" width={18} height={18} />
              </div>
              <div>
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">
                  Endereço
                </p>
                <p className="text-white text-sm font-medium leading-relaxed">
                  AV DONA DITA N° 400 - CENTRO Santa Terezinha de Goiás, GO CEP: 76.500-000
                </p>
              </div>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 bg-[#0A0A0A] border border-white/5 rounded-2xl p-5 hover:border-[#DB151F]/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="w-10 h-10 bg-[#DB151F]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="lucide lucide-phone text-[#DB151F]" width={18} height={18} />
              </div>
              <div>
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">
                  Telefone / WhatsApp
                </p>
                <p className="text-white text-sm font-medium">+55 (62) 3339-6922</p>
              </div>
            </a>
            <div className="flex items-start gap-4 bg-[#0A0A0A] border border-white/5 rounded-2xl p-5">
              <div className="w-10 h-10 bg-[#DB151F]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="lucide lucide-clock text-[#DB151F]" width={18} height={18} />
              </div>
              <div>
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">
                  Horário de Funcionamento
                </p>
                <p className="text-white text-sm font-medium leading-relaxed">
                  Seg – Sex: 08:00 às 18:00
                  <br />
                  Sáb: 08:00 às 12:00
                </p>
              </div>
            </div>
            <a
              href="https://instagram.com/retocarltda"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 bg-[#0A0A0A] border border-white/5 rounded-2xl p-5 hover:border-[#DB151F]/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="w-10 h-10 bg-[#DB151F]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Instagram className="lucide lucide-instagram text-[#DB151F]" width={18} height={18} />
              </div>
              <div>
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">
                  Instagram
                </p>
                <p className="text-white text-sm font-medium">@retocarltda</p>
              </div>
            </a>
            <a
              href="mailto:adailton_tom@hotmail.com"
              className="flex items-start gap-4 bg-[#0A0A0A] border border-white/5 rounded-2xl p-5 hover:border-[#DB151F]/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="w-10 h-10 bg-[#DB151F]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="lucide lucide-mail text-[#DB151F]" width={18} height={18} />
              </div>
              <div>
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">
                  E-mail
                </p>
                <p className="text-white text-sm font-medium">adailton_tom@hotmail.com</p>
              </div>
            </a>
            <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-5">
              <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
                <MapPin className="lucide lucide-map-pin text-[#DB151F]" width={12} height={12} />
                Cidades Atendidas
              </p>
              <div className="flex flex-wrap gap-2">
                {cidades.map((cidade) => (
                  <span
                    key={cidade}
                    className="bg-[#DB151F]/10 text-[#DB151F] text-xs font-semibold px-3 py-1 rounded-full border border-[#DB151F]/20"
                  >
                    {cidade}
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

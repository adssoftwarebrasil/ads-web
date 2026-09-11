import { CheckCircle, Clock, MapPin, Heart } from 'lucide-react';

const highlights = [
  'Atendimento 100% humanizado e personalizado',
  'Especialista em estética dental e reabilitação oral',
  'Tecnologia de ponta e materiais premium',
  'Tratamentos para crianças e adultos',
  'Mais de 7 anos transformando sorrisos em MT',
];

const infos = [
  {
    icon: Clock,
    title: 'Horário de Atendimento',
    content: 'Seg–Sex: 08:00–11:00 e 14:00–18:00\nSábado: 08:00–11:00',
  },
  {
    icon: MapPin,
    title: 'Localização',
    content: 'Av. Brasil, 25 – Bairro Cristo Rei\nVárzea Grande – MT',
  },
  {
    icon: Heart,
    title: 'Áreas de Atendimento',
    content: 'Cuiabá e Várzea Grande\ne região metropolitana',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#098b90]/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#a4376e]/10 rounded-full blur-3xl" />

              <div className="relative grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <img
                    src="https://storage.lucasmendes.dev/site-sp/dra%20rafaella%20dal%20piva/img/dra-rafaella-dentista-azul-celular-consultorio-sorrindo_928x1652.webp"
                    alt="Dra. Rafaella Dal Piva no consultório"
                    // AUMENTADO: de h-[400px] para h-[450px]
                    className="w-full h-[450px] object-cover object-center rounded-3xl shadow-2xl"
                  />
                </div>
                <img
                  src="https://storage.lucasmendes.dev/site-sp/dra%20rafaella%20dal%20piva/img/dra-rafaella-dentista-escrevendo-dor-gengiva-nao-normal_1080x1920.webp"
                  alt="Dra. Rafaella em atendimento"
                  className="h-60 w-full object-cover object-center rounded-2xl shadow-xl"
                />
                <img
                  src="https://storage.lucasmendes.dev/site-sp/dra%20rafaella%20dal%20piva/img/dra-rafaella-mulher-ortodontista-segurando-modelo-de-dentes_1440x1800.webp"
                  alt="Dra. Rafaella com modelo dentário"
                  className="h-60 w-full object-cover object-center rounded-2xl shadow-xl"
                />
              </div>

              <div className="absolute top-6 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#a4376e]/10 rounded-xl flex items-center justify-center">
                    <Heart size={18} className="text-[#a4376e]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Fundada em</p>
                    <p className="text-sm font-bold text-gray-900">2018</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-block text-[#098b90] text-sm font-semibold tracking-widest uppercase mb-3">
              Sobre a Clínica
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Onde saúde, estética e{' '}
              <span className="text-[#a4376e]">cuidado humano</span>{' '}
              se encontram
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Desde 2018, a clínica da <strong>Dra. Rafaella Dal Piva</strong> nasceu com um propósito claro: oferecer odontologia de alto padrão com um olhar humano e acolhedor. Em Várzea Grande - MT, somos referência em estética dental e reabilitação oral para toda a família.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Especializada em ortodontia, ortopedia funcional e reabilitação oral, a Dra. Rafaella une tecnologia de ponta com atendimento personalizado — da primeira consulta infantil à reabilitação completa de adultos.
            </p>

            <div className="grid grid-cols-1 gap-3 mb-10">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#098b90] shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {infos.map((info) => (
                <div
                  key={info.title}
                  className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-9 h-9 bg-[#098b90]/10 rounded-xl flex items-center justify-center mb-3">
                    <info.icon size={16} className="text-[#098b90]" />
                  </div>
                  <p className="text-xs font-semibold text-gray-900 mb-1">{info.title}</p>
                  <p className="text-xs text-gray-500 whitespace-pre-line leading-relaxed">
                    {info.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
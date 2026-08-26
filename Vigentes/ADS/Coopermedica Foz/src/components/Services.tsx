import { Ambulance, Home, Briefcase, Siren, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Ambulance,
    title: 'Locação de Ambulâncias',
    description: 'Ambulâncias equipadas e equipe qualificada para eventos, remoções e atendimentos programados. Disponibilidade 24 horas com suporte completo.',
    image: 'https://storage.lucasmendes.dev/site-sp/coopermedicafoz%2Fambulancia-rua_5_11zon.jpg',
    color: 'primary',
  },
  {
    icon: Home,
    title: 'Atendimento Domiciliar',
    description: 'Cuidado médico no conforto da sua casa. Atendimento personalizado com profissionais experientes para consultas e procedimentos.',
    image: 'https://storage.lucasmendes.dev/site-sp/coopermedicafoz%2Fatendimento-medico-familiar_4_11zon.jpg',
    color: 'primary',
  },
  {
    icon: Briefcase,
    title: 'Medicina do Trabalho',
    description: 'Consultoria completa em segurança do trabalho, exames admissionais e periódicos. Soluções integradas para empresas.',
    image: 'https://storage.lucasmendes.dev/site-sp/coopermedicafoz%2Fatendimento-medico-em-escritorio_3_11zon.jpg',
    color: 'primary',
  },
  {
    icon: Siren,
    title: 'Remoção e Emergência',
    description: 'Atendimento emergencial e remoções inter-hospitalares com segurança e rapidez. Equipe preparada para situações críticas.',
    image: 'https://storage.lucasmendes.dev/site-sp/coopermedicafoz%2Fatendimento-medico-ambulancia%20(1)_2_11zon.jpg',
    color: 'emergency',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-24 md:py-32 overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header da Seção */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
            <span className="text-sm font-bold text-primary uppercase tracking-[0.2em] px-4 py-2 rounded-full bg-primary/5 border border-primary/10">
              Nossos Serviços
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Excelência em
            <span className="block bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mt-2">
              Atendimento Médico
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprometimento, tecnologia de ponta e profissionais altamente qualificados 
            para cuidar da sua saúde com segurança e eficiência
          </p>
        </div>

        {/* Grid de Serviços */}
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEmergency = service.color === 'emergency';
            
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-gray-100/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Borda gradiente animada */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br ${isEmergency ? 'from-emergency/20 via-transparent to-emergency/10' : 'from-primary/20 via-transparent to-blue-500/10'} rounded-2xl`}></div>
                
                {/* Container da Imagem */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Overlay sutil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent"></div>
                  
                  {/* Badge do ícone */}
                  <div className="absolute top-6 left-6">
                    <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl backdrop-blur-md bg-white/90 shadow-xl border ${isEmergency ? 'border-emergency/20' : 'border-primary/20'} group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className={`${isEmergency ? 'text-emergency' : 'text-primary'}`} size={28} strokeWidth={2.5} />
                      
                      {/* Pulse effect */}
                      <div className={`absolute inset-0 rounded-2xl ${isEmergency ? 'bg-emergency/10' : 'bg-primary/10'} animate-ping opacity-0 group-hover:opacity-75`}></div>
                    </div>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="relative p-8 bg-white">
                  {/* Linha decorativa superior */}
                  <div className={`w-12 h-1 rounded-full mb-5 ${isEmergency ? 'bg-gradient-to-r from-emergency to-red-400' : 'bg-gradient-to-r from-primary to-blue-500'}`}></div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6 text-[15px]">
                    {service.description}
                  </p>
                  
                  {/* Link com efeito sofisticado */}
                  <a
                    href="https://wa.me/5545988038430"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-3 font-bold text-sm ${isEmergency ? 'text-emergency' : 'text-primary'} group/link transition-all duration-300`}
                  >
                    <span className="relative">
                      Solicitar Atendimento
                      <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${isEmergency ? 'bg-emergency' : 'bg-primary'} group-hover/link:w-full transition-all duration-300`}></span>
                    </span>
                    <ArrowRight 
                      size={18} 
                      className="group-hover/link:translate-x-2 transition-transform duration-300" 
                      strokeWidth={3}
                    />
                  </a>
                </div>

                {/* Número decorativo */}
                <div className="absolute top-8 right-8 text-7xl font-bold text-gray-100 opacity-50 select-none">
                  0{index + 1}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action Premium */}
        <div className="text-center relative">
          <div className="inline-flex flex-col items-center gap-4">
            <p className="text-gray-600 text-sm font-medium">
              Precisa de um atendimento personalizado?
            </p>
            <a
              href="https://wa.me/5545988038430"
              target="_blank"
              rel="noopener noreferrer"
              className="group/cta relative inline-flex items-center gap-4 bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary text-white font-bold px-10 py-5 rounded-full shadow-2xl hover:shadow-primary/50 transition-all duration-500 hover:scale-105 overflow-hidden"
            >
              {/* Efeito de brilho animado */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/cta:translate-x-full transition-transform duration-1000"></div>
              
              <span className="relative z-10 text-lg">Fale com Nossa Equipe</span>
              <Siren size={24} className="relative z-10 group-hover/cta:rotate-12 transition-transform duration-300" strokeWidth={2.5} />
            </a>
            
            <p className="text-gray-500 text-xs">
              Atendimento disponível 24 horas por dia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
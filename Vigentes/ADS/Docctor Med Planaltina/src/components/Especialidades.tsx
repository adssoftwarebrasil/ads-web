import { 
  Stethoscope, 
  Baby, 
  Heart as HeartIcon, 
  Activity, 
  Droplet, 
  Bone, 
  Users, 
  Brain, 
  UserCheck, 
  Apple, 
  ArrowRight,
  Waves // Adicionado para Ultrassonografia
} from 'lucide-react';

// Dados atualizados com as fotos e nomes reais dos arquivos enviados
const especialidades = [
  { 
    name: 'Clínica Geral', 
    doctorName: 'Dra. Juliana Diniz',
    icon: Stethoscope, 
    image: 'https://storage.lucasmendes.dev/site-sp/docctormedplanaltina%2Ffotos-medicos%2FDra.%20Juliana%20Diniz%20-%20Cl%C3%ADnica%20geral.PNG',
    link: '/especialidades/clinica-geral' 
  },
  { 
    name: 'Pediatria e Gastro', 
    doctorName: 'Dra. Raquel Souza',
    icon: Baby, 
    image: 'https://storage.lucasmendes.dev/site-sp/docctormedplanaltina%2Ffotos-medicos%2FDra.%20Raquel%20Souza%20-%20Pediatria%20e%20Gastroenterologia%20Pedi%C3%A1trica.PNG',
    link: '/especialidades/pediatria' 
  },
  { 
    name: 'Ginecologia', 
    doctorName: 'Dra. Fernanda Tourino',
    icon: Users, 
    image: 'https://storage.lucasmendes.dev/site-sp/docctormedplanaltina%2Ffotos-medicos%2FDra.%20Fernanda%20Tourino%20-%20Ginecologia.PNG',
    link: '/especialidades/ginecologia' 
  },
  { 
    name: 'Cardiologia', 
    doctorName: 'Dra. Rafaella Pestana',
    icon: HeartIcon, 
    image: 'https://storage.lucasmendes.dev/site-sp/docctormedplanaltina%2Ffotos-medicos%2FDra.%20Rafaella%20Pestana%20-%20Cardiologia.PNG',
    link: '/especialidades/cardiologia' 
  },
  { 
    name: 'Dermatologia', 
    doctorName: 'Dra. Cinara Matos',
    icon: Droplet, 
    image: 'https://storage.lucasmendes.dev/site-sp/docctormedplanaltina%2Ffotos-medicos%2FDra.%20Cinara%20Matos%20-%20Dermatologia.PNG',
    link: '/especialidades/dermatologia' 
  },
  { 
    name: 'Ortopedia', 
    doctorName: 'Dr. Isaías Freire',
    icon: Bone, 
    image: 'https://storage.lucasmendes.dev/site-sp/docctormedplanaltina%2Ffotos-medicos%2FDr.%20Isa%C3%ADas%20Freire%20-%20Ortopedia.PNG',
    link: '/especialidades/ortopedia' 
  },
  { 
    name: 'Endocrinologia', 
    doctorName: 'Dra. Esther Ottoni',
    icon: Activity, 
    image: 'https://storage.lucasmendes.dev/site-sp/docctormedplanaltina%2Ffotos-medicos%2FDra.%20Esther%20Ottoni%20-%20Endocrinologia.PNG',
    link: '/especialidades/endocrinologia' 
  },
  { 
    name: 'Psiquiatria', 
    doctorName: 'Dr. William Rios',
    icon: Brain, 
    image: 'https://storage.lucasmendes.dev/site-sp/docctormedplanaltina%2Ffotos-medicos%2FDr.%20William%20Rios%20-%20Psiquiatria2.PNG',
    link: '/especialidades/psiquiatria' 
  },
  { 
    name: 'Psicologia', 
    doctorName: 'Psi. Helaine Rosa',
    icon: UserCheck, 
    image: 'https://storage.lucasmendes.dev/site-sp/docctormedplanaltina%2Ffotos-medicos%2FPsi.%20Helaine%20Rosa%20-%20Psicologia.PNG',
    link: '/especialidades/psicologia' 
  },
  { 
    name: 'Nutrição', 
    doctorName: 'Nutri. Bruna Lemos',
    icon: Apple, 
    image: 'https://storage.lucasmendes.dev/site-sp/docctormedplanaltina%2Ffotos-medicos%2FNutri.%20Bruna%20Lemos%20-%20Nutri%C3%A7%C3%A3o.PNG',
    link: '/especialidades/nutricao' 
  },
  { 
    name: 'Ultrassonografia', 
    doctorName: 'Dr. Igor Calvert',
    icon: Waves, 
    image: 'https://storage.lucasmendes.dev/site-sp/docctormedplanaltina%2Ffotos-medicos%2FDr.%20Igor%20Calvert%20-%20Ultrassonografista.PNG',
    link: '/especialidades/ultrassonografia-igor' 
  },
  { 
    name: 'Ultrassonografia', 
    doctorName: 'Dr. Rafael Cardoso',
    icon: Waves, 
    image: 'https://storage.lucasmendes.dev/site-sp/docctormedplanaltina%2Ffotos-medicos%2FDr.%20Rafael%20Cardoso%20-%20Ultrassonografista.PNG',
    link: '/especialidades/ultrassonografia-rafael' 
  },
];

export default function Especialidades() {
  return (
    <section
      id="especialidades"
      className="py-16 md:py-24 relative overflow-hidden"
      style={{
        background: '#2d4a3e',
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.03) 0%, transparent 50%)',
      }}
    >
      <div className="container-custom mx-auto px-4">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-[#f37f1a] bg-opacity-20 text-[#f37f1a] text-sm font-bold tracking-wider mb-3 uppercase">
            Corpo Clínico
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Nossas Especialidades
          </h2>
          <p className="text-lg md:text-xl text-white text-opacity-80 max-w-3xl mx-auto font-light">
            Conheça os especialistas renomados prontos para cuidar da sua saúde.
          </p>
        </div>
        
        {/* Grid de Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {especialidades.map((esp, index) => {
            const Icon = esp.icon;
            return (
              <a
                key={index}
                href={esp.link}
                className="group relative bg-white rounded-2xl overflow-visible shadow-md hover:shadow-2xl hover:shadow-[#f37f1a]/20 transition-all duration-300 transform hover:-translate-y-2 mt-8 sm:mt-0"
              >
                {/* Imagem do Médico (Parte Superior) */}
                <div className="relative h-56 w-full overflow-hidden rounded-t-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-40 group-hover:opacity-20 transition-opacity duration-300" />
                  <img 
                    src={esp.image} 
                    alt={`Foto de ${esp.doctorName}`} 
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Conteúdo do Card (Parte Inferior) */}
                <div className="relative pt-12 pb-6 px-4 text-center rounded-b-2xl bg-white z-20">
                  {/* Ícone Flutuante (Centralizado na borda entre a imagem e o branco) */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
                    <div className="bg-[#f37f1a] text-white p-3 rounded-xl shadow-lg group-hover:bg-[#d97015] transition-colors duration-300 border-4 border-white">
                      <Icon size={24} strokeWidth={2.5} />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#2d4a3e] mb-1 group-hover:text-[#f37f1a] transition-colors duration-300 line-clamp-1" title={esp.name}>
                    {esp.name}
                  </h3>
                  <p className="text-sm text-gray-500 font-medium mb-4">
                    {esp.doctorName}
                  </p>
                  
                  <div className="flex items-center justify-center gap-2 text-sm font-semibold text-[#f37f1a] opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 h-0 group-hover:h-auto">
                    <span>Agendar Consulta</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Botão CTA Principal */}
        <div className="text-center mt-16">
          <a 
            href="https://wa.me/5561982400076?text=Olá! Gostaria de agendar uma consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#f37f1a] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#d97015] transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl ring-4 ring-[#f37f1a]/30"
          >
            Agende pelo WhatsApp
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
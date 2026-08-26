interface Membro {
  image: string;
  role: string;
  name: string;
}

const membros: Membro[] = [
  {
    image: 'https://storage.lucasmendes.dev/site-sp/ricardorodrigues/time%20Advogado%20%20Dr.%20Ricardo%20Rodrigues.webp',
    role: 'Sócio Fundador',
    name: 'Dr. Ricardo Rodrigues',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/ricardorodrigues/time%20Advogada%20%20Dra.%20Sandra%20Melo.webp',
    role: 'Advogada Associada',
    name: 'Dra. Sandra Melo',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/ricardorodrigues/time%20Advogado%20%20Dr.%20Bruno%20de%20Macedo.webp',
    role: 'Advogado Associado',
    name: 'Dr. Bruno de Macedo',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/ricardorodrigues/time%20Advogado%20%20Dr.%20Lucas%20Saloma%CC%83o.webp',
    role: 'Advogado Associado',
    name: 'Dr. Lucas Salomão',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/ricardorodrigues/time%20Advogado%20%20Dr.%20Clayton%20Oliveira.webp',
    role: 'Advogado Associado',
    name: 'Dr. Clayton Oliveira',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/ricardorodrigues/time%20Advogada%20%20Dra.%20Luanda%20Aguiar.webp',
    role: 'Advogada Associada',
    name: 'Dra. Luanda Aguiar',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/ricardorodrigues/time%20Acade%CC%82mico%20%20%20Leonardo%20Santos.webp',
    role: 'Acadêmico de Direito',
    name: 'Leonardo Santos',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/ricardorodrigues/time%20Acade%CC%82mico%20%20%20Guilherme%20Albuquerque.webp',
    role: 'Acadêmico de Direito',
    name: 'Guilherme Albuquerque',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/ricardorodrigues/time%20Acade%CC%82mica%20%20%20Yzadora%20Nascimento.webp',
    role: 'Acadêmica de Direito',
    name: 'Yzadora Nascimento',
  },
];

export default function Equipe() {
  return (
    <section id="equipe" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-[#d9b33c] font-bold tracking-[0.2em] text-sm uppercase">Corpo Jurídico</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">
            Conheça Nossa <span className="text-[#d9b33c]">Equipe</span>
          </h2>
          <div className="h-1 w-24 bg-[#d9b33c] mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Profissionais altamente qualificados e comprometidos com a defesa técnica e estratégica dos
            seus interesses.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {membros.map((m) => (
            <div key={m.name} className="group relative flex flex-col items-center text-center">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out">
                <div className="absolute inset-0 border-0 group-hover:border-[12px] border-[#d9b33c]/10 transition-all duration-500 z-10 pointer-events-none"></div>
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              </div>
              <div className="relative z-20">
                <p className="text-[#d9b33c] text-xs font-bold tracking-widest uppercase mb-2">{m.role}</p>
                <h3 className="text-2xl font-bold tracking-tight group-hover:text-[#d9b33c] transition-colors duration-300">
                  {m.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

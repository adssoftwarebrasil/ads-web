import { MapPin, Phone, Sparkles, ArrowRight } from 'lucide-react';

const units = [
  {
    name: 'Matriz',
    badge: 'Unidade Principal',
    badgeColor: 'rgb(17,157,219)',
    address: 'Rua São Francisco de Assis, 1493 · Novos Campos',
    phone: '(66) 9 9717-3455',
    phoneLink: 'tel:+5566997173455',
  },
  {
    name: 'Filial Centro Norte',
    badge: 'Nova Unidade',
    badgeColor: 'rgb(108,189,81)',
    address: 'Av. Tancredo Neves, 1722 · Centro Norte',
    phone: '(66) 9 9633-2057',
    phoneLink: 'tel:+5566996332057',
  },
];

export default function NewBranchBanner() {
  const scrollToUnidades = () => {
    document.querySelector('#unidades')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-14 lg:py-16 overflow-hidden" style={{ backgroundColor: 'rgb(248,249,250)' }}>
      <div
        className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ backgroundColor: 'rgb(108,189,81)' }}
      />
      <div
        className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ backgroundColor: 'rgb(17,157,219)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: 'rgba(108,189,81,0.15)', color: 'rgb(108,189,81)' }}
            >
              <Sparkles size={16} /> Novidade em Sorriso
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black leading-tight mb-4">
              Inauguramos nossa{' '}
              <span style={{ color: 'rgb(108,189,81)' }}>nova filial</span>{' '}
              no Centro Norte!
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 max-w-xl">
              Agora somos <strong className="text-black">2 unidades em Sorriso - MT</strong> para
              atender você ainda mais perto, com estoque completo e pronta entrega em toda a cidade.
            </p>
            <button
              onClick={scrollToUnidades}
              className="inline-flex items-center gap-2 text-white font-bold px-7 py-3.5 rounded-full text-sm transition-all duration-200 hover:scale-105 shadow-lg"
              style={{ backgroundColor: 'rgb(17,157,219)' }}
            >
              Ver todas as unidades
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {units.map((u) => (
              <div
                key={u.name}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-lg transition-all duration-300"
              >
                <span
                  className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3"
                  style={{ backgroundColor: `${u.badgeColor}20`, color: u.badgeColor }}
                >
                  {u.badge}
                </span>
                <h3 className="text-lg font-black text-black mb-3">{u.name}</h3>
                <div className="flex items-start gap-2 mb-2">
                  <MapPin size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600 text-sm leading-snug">{u.address}</p>
                </div>
                <a
                  href={u.phoneLink}
                  className="flex items-center gap-2 text-sm font-medium text-black hover:text-[rgb(17,157,219)] transition-colors"
                >
                  <Phone size={16} className="text-gray-400 flex-shrink-0" />
                  {u.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

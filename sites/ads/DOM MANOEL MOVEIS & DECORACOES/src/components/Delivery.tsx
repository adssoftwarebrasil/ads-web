import { Truck, MapPin } from 'lucide-react';

const cities = [
  'Sinop',
  'Sorriso',
  'Alta Floresta',
  'Guarantã do Norte',
  'Itaúba',
  'Matupá',
  'Peixoto de Azevedo',
  'Colíder',
  'Nova Canaã do Norte',
  'Tabaporã',
  'Juara',
  'Lucas do Rio Verde',
  'Nova Mutum',
];

export default function Delivery() {
  return (
    <section className="py-20 bg-[rgb(250,245,238)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Truck size={20} className="text-[rgb(183,149,108)]" />
              <span className="text-[rgb(183,149,108)] text-sm font-semibold uppercase tracking-widest">
                Frota própria
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-[rgb(103,66,42)] font-bold leading-tight mb-5">
              Entregamos na
              <br />
              <span className="text-[rgb(183,149,108)]">sua cidade</span>
            </h2>
            <p className="text-[rgb(103,66,42)]/65 text-lg leading-relaxed mb-8">
              Com frota própria, levamos nossos móveis até você com segurança, cuidado e
              pontualidade. Atendemos Sinop e toda a região com agilidade.
            </p>
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <MapPin size={15} className="text-[rgb(183,149,108)]" />
                <span className="text-[rgb(103,66,42)] font-bold text-xs uppercase tracking-widest">
                  Cidades atendidas
                </span>
              </div>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                {cities.map((city) => (
                  <div key={city} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[rgb(183,149,108)] flex-shrink-0"></span>
                    <span className="text-[rgb(103,66,42)]/75 text-sm">{city}</span>
                  </div>
                ))}
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[rgb(183,149,108)] flex-shrink-0"></span>
                  <span className="text-[rgb(103,66,42)]/60 text-sm italic">E proximidades</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="http://wa.me/556696455950?text=Ol%C3%A1!%20Gostaria%20de%20consultar%20a%20disponibilidade%20de%20entrega%20para%20minha%20regi%C3%A3o."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[rgb(103,66,42)] hover:bg-[rgb(85,52,30)] text-white font-bold px-7 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-sm"
              >
                <Truck size={17} />
                Consultar Entrega
              </a>
              <a
                href="http://wa.me/556696455950?text=Ol%C3%A1!%20Gostaria%20de%20retirar%20meu%20m%C3%B3vel%20diretamente%20na%20loja."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-[rgb(103,66,42)] text-[rgb(103,66,42)] hover:bg-[rgb(103,66,42)] hover:text-white font-bold px-7 py-4 rounded-full transition-all duration-300 text-sm"
              >
                <MapPin size={17} />
                Retirar no Local
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="https://storage.lucasmendes.dev/site-sp/dom-manoel-moveis-e-decoracoes/bancos-1/caminhao-dom-manoel.jpeg"
                alt="Caminhão de entrega Dom Manoel na frente da loja"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 w-28 h-28 bg-[rgb(183,149,108)]/15 rounded-full -z-10"></div>
            <div className="absolute -top-5 -right-5 w-20 h-20 bg-[rgb(103,66,42)]/10 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { WhatsAppIcon } from './icons';

const WA = 'http://wa.me/556198770047';
const STORAGE =
  'https://storage.lucasmendes.dev/site-sp/cia%20solda%20e%20ferramentas/EPIs%20Solda/';

interface Epi {
  name: string;
  image: string;
}

const epis: Epi[] = [
  { name: 'Máscara Automática de Solda', image: STORAGE + 'M%C3%A1scara%20Autom%C3%A1tica%20de%20Solda.jpg' },
  { name: 'Blusão de Raspa', image: STORAGE + 'Blusao%20de%20Raspa.jpg' },
  { name: 'Luva de Raspa', image: STORAGE + 'Luva%20de%20Raspa.webp' },
  { name: 'Luva de Vaqueta para Soldador', image: STORAGE + 'Luva%20de%20vaqueta%20soldador.jpg' },
  {
    name: 'Capacete com Aba Frontal',
    image: STORAGE + 'Capacete%20com%20aba%20frontal%2C%20Varios%20modelos.jpg',
  },
  {
    name: 'Botina de Couro',
    image: STORAGE + 'Botina%20de%20couro%2C%20com%20el%C3%A1stico%2C%20biqueira%20de%20composite.jpg',
  },
  {
    name: 'Biombo / Cortina Anti Chama',
    image: STORAGE + 'Biombo%20Tipo%20Lona%20(Cortina%20Anti%20Chama).jpg',
  },
];

function epiHref(name: string) {
  return `${WA}?text=${encodeURIComponent(`Olá! Gostaria de informações sobre: ${name}`)}`;
}

export default function Epis() {
  return (
    <section id="epis" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-brand-orange/10 text-brand-orange text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Segurança em Primeiro Lugar
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-dark">EPIs para Soldagem</h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Trabalhe com segurança. Temos linha completa de Equipamentos de Proteção Individual
            específicos para soldagem.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {epis.map((epi) => (
            <a
              key={epi.name}
              href={epiHref(epi.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-50 border border-gray-100 rounded-xl overflow-hidden hover:border-brand-orange/40 hover:shadow-lg hover:shadow-brand-orange/8 transition-all duration-300 flex flex-col"
            >
              <div className="aspect-square overflow-hidden bg-white">
                <img
                  src={epi.image}
                  alt={epi.name}
                  className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-3">
                <p className="text-xs font-semibold text-brand-dark leading-tight text-center">
                  {epi.name}
                </p>
                <p className="text-[10px] text-brand-orange text-center mt-1 font-medium">Consultar</p>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-10 bg-brand-orange/5 border border-brand-orange/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-brand-dark text-lg">Segurança nunca é demais</h3>
            <p className="text-gray-500 text-sm mt-1">
              Consulte nossos especialistas para escolher os EPIs certos para sua atividade.
            </p>
          </div>
          <a
            href="http://wa.me/556198770047?text=Preciso%20de%20indica%C3%A7%C3%A3o%20de%20EPIs%20para%20soldagem."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-6 py-3 rounded-xl transition-all duration-200"
          >
            <WhatsAppIcon className="w-4 h-4 fill-current" />
            Consultar EPIs
          </a>
        </div>
      </div>
    </section>
  );
}

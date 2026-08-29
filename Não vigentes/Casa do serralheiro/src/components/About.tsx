import { Award, Users, Wrench } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

interface Feature {
  Icon: LucideIcon;
  title: string;
  desc: string;
}

const features: Feature[] = [
  { Icon: Award, title: 'Ferro e Aço de Qualidade', desc: 'Materiais premium certificados' },
  { Icon: Users, title: 'Compromisso com o Cliente', desc: 'Atendimento personalizado' },
  { Icon: Wrench, title: 'Projetos Personalizados', desc: 'Soluções sob medida' },
];

export default function About() {
  return (
    <section id="sobre" className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-50 to-transparent opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[rgb(122,21,25)]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[rgb(122,21,25)] to-[rgb(90,15,18)] rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-xl"></div>
            <div className="relative">
              <img
                src="https://storage.lucasmendes.dev/site-sp/casadoserralheirolavras%2Fcasadoserralheirolavras%2FQuem%20somos.png"
                alt="Casa do Serralheiro - Estruturas Metálicas"
                className="w-full aspect-square object-cover rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center space-x-2 bg-red-50 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-[rgb(122,21,25)] rounded-full animate-pulse"></div>
              <span className="text-[rgb(122,21,25)] text-sm uppercase tracking-wider font-bold">
                Quem Somos
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Casa do Serralheiro
              <span className="block text-[rgb(122,21,25)] mt-2">Tradição desde 1979</span>
            </h2>
            <div className="text-gray-600 leading-relaxed space-y-4 mb-8 text-base sm:text-lg">
              <p>
                A Casa do Serralheiro de Lavras é um{' '}
                <strong className="text-gray-900">legado que remonta a 1979</strong>, idealizado por
                João Gabé, um visionário que transformou sua paixão pela serralheria em um negócio
                próspero.
              </p>
              <p>
                Com um forte compromisso com a qualidade, nos destacamos pela fabricação de{' '}
                <strong className="text-gray-900">
                  telhas Galvalume, calhas e estruturas metálicas
                </strong>
                , servindo com excelência mais de 40 cidades da região.
              </p>
              <p>
                Mantemos os princípios de{' '}
                <strong className="text-gray-900">honestidade e atendimento humano</strong> que João
                Gabé estabeleceu, honrando seu legado com produtos de alta qualidade.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl border border-gray-100 hover:border-[rgb(122,21,25)]/30 hover:shadow-md transition-all duration-300 group"
                >
                  <f.Icon className="w-8 h-8 text-[rgb(122,21,25)] mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-bold text-gray-900 text-sm mb-1 leading-tight">{f.title}</h3>
                  <p className="text-xs text-gray-500">{f.desc}</p>
                </div>
              ))}
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[rgb(122,21,25)] text-white px-8 py-4 rounded-xl hover:bg-[rgb(90,15,18)] hover:shadow-xl hover:scale-105 transition-all duration-300 font-bold text-base group"
            >
              <svg
                className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Fale com um Especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

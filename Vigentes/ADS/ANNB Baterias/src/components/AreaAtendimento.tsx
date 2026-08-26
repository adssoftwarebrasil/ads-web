import { CheckCircle2, MapPin } from 'lucide-react';

const regioes = [
  'Asa Norte',
  'Asa Sul',
  'Lago Sul',
  'Lago Norte',
  'Cruzeiro',
  'Octogonal',
  'Sudoeste',
  'Guará',
  'SIA',
  'Núcleo Bandeirante',
  'Taguatinga',
  'Águas Claras',
  'Vicente Pires',
  'Ceilândia',
  'Samambaia',
  'Riacho Fundo I e II',
  'Recanto das Emas',
  'Sobradinho',
];

export default function AreaAtendimento() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="transition-all duration-700 opacity-0 -translate-x-8">
            <span className="inline-block text-brand-green font-bold text-sm uppercase tracking-widest mb-3">
              Área de Atendimento
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-4 leading-tight">
              Atendemos em toda
              <br />
              <span className="text-brand-green">Brasília e Região</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Não importa onde você esteja no DF, nosso técnico vai até você. Levamos e instalamos a
              bateria no conforto do seu local — seja em casa, no trabalho ou na rua.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {regioes.map((r, i) => (
                <div
                  key={r}
                  className="flex items-center gap-2 transition-all duration-500 opacity-0 -translate-x-4"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  <CheckCircle2
                    width={16}
                    height={16}
                    className="lucide lucide-check-circle2 text-brand-green flex-shrink-0"
                  />
                  <span className="text-gray-700 text-sm font-medium">{r}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-brand-light border border-green-100 rounded-xl flex items-start gap-3">
              <MapPin
                width={20}
                height={20}
                className="lucide lucide-map-pin text-brand-red flex-shrink-0 mt-0.5"
              />
              <div>
                <p className="text-brand-dark font-semibold text-sm">Loja Física</p>
                <p className="text-gray-500 text-sm mt-0.5">
                  St. Sudoeste QMSW 2 conjunto c lote 22 loja 2
                  <br />
                  Sudoeste/Octogonal — Brasília-DF, 70680-209
                </p>
              </div>
            </div>
          </div>
          <div className="transition-all duration-700 delay-300 opacity-0 translate-x-8">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 h-96 md:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.2940353107174!2d-47.9208744248701!3d-15.788442484851053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3b66989bbcd1%3A0x7a198092060e53a2!2sANNB%20BATERIAS!5e0!3m2!1spt-BR!2sbr!4v1772817019459!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização ANNB Baterias"
                style={{ border: '0px' }}
              ></iframe>
            </div>
            <a
              href="https://maps.app.goo.gl/ANNBBATERIAS"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 w-full bg-brand-dark text-white font-semibold py-3 rounded-xl hover:bg-brand-green transition-colors duration-200"
            >
              <MapPin width={18} height={18} className="lucide lucide-map-pin" />
              Ver no Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

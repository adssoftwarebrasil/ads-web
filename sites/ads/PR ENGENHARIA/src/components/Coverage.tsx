import { MapPin } from 'lucide-react';

const cities = [
  'Campinorte',
  'Alto Horizonte',
  'Nova Iguaçu de Goiás',
  'Mara Rosa',
  'Uruaçu',
  'Niquelândia',
  'Barro Alto',
];

export default function Coverage() {
  return (
    <section className="py-24 bg-pr-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="divider-line"></div>
            <h2 className="section-heading mb-4">Atendemos Todo o Norte Goiano</h2>
            <p className="section-subheading mb-8">
              Com sede em Campinorte – GO, levamos soluções completas de engenharia e arquitetura a toda a região norte
              do estado, garantindo a mesma excelência técnica independentemente da cidade.
            </p>
            <ul className="grid grid-cols-2 gap-3">
              {cities.map((city) => (
                <li key={city} className="flex items-center gap-2.5">
                  <MapPin
                    width={14}
                    height={14}
                    strokeWidth={2}
                    className="lucide lucide-map-pin text-pr-rose flex-shrink-0"
                  />
                  <span className="text-pr-dark text-sm font-medium">{city}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 p-5 bg-pr-rose/20 border-l-4 border-pr-rose">
              <p className="text-pr-dark text-sm leading-relaxed">
                <strong>Não está na lista?</strong> Entre em contato — avaliamos seu projeto em qualquer localidade do
                norte goiano e regiões próximas.
              </p>
            </div>
            <a
              href="http://wa.me/556284826969"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8 inline-flex"
            >
              Verificar Disponibilidade
            </a>
          </div>
          <div className="w-full overflow-hidden shadow-md border border-pr-taupe">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3865.953312991079!2d-49.15534982489938!3d-14.314144686138986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9343a4dd35fcdfef%3A0x2c577d0f2b3bcb11!2sPR%20Engenharia%20e%20Constru%C3%A7%C3%B5es!5e0!3m2!1spt-BR!2sbr!4v1776703546371!5m2!1spt-BR!2sbr"
              width="100%"
              height="420"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização PR Engenharia"
              style={{ border: '0px' }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

import { CheckCircle } from 'lucide-react';

const cities = [
  'Acará', 'Ananindeua', 'Barcarena', 'Belém', 'Benevides', 'Capitão Poço',
  'Castanhal', 'Icoaraci', 'Ilha do Marajó', 'Mãe do Rio', 'Marituba',
  'Mosqueiro', 'Outeiro', 'Paragominas', 'Quatro Bocas', 'Salinas', 'Santa Maria',
];

export default function Coverage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-force-blue text-center mb-16">
          Atendemos Toda a Região de Belém e Interior do Pará
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.511941666716!2d-48.4702955!3d-1.4662481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48d93d0ac4d05%3A0x6d150ad8c88dfa7f!2sFORCE%20LOCACOES!5e0!3m2!1spt-BR!2sbr!4v1761182638139!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: '0px' }}
            ></iframe>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-force-blue mb-6">Principais Cidades Atendidas:</h3>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {cities.map((c) => (
                <div key={c} className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-force-yellow flex-shrink-0" />
                  <span className="text-force-gray font-medium">{c}</span>
                </div>
              ))}
            </div>
            <div className="bg-blue-50 border-2 border-force-blue rounded-lg p-6">
              <p className="text-force-gray leading-relaxed">
                <strong>Consulte-nos sobre atendimento em outras localidades do Estado do Pará.</strong>{' '}
                Estamos preparados para atender todo o território paraense.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

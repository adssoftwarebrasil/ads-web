import { MapPin, Navigation } from 'lucide-react';

export default function Map() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Como <span className="text-[rgb(246,182,31)]">Chegar</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos localizados em uma região de fácil acesso, no coração de Cuiabá.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid lg:grid-cols-3">
            <div className="lg:col-span-2 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.0051332531107!2d-56.0908801!3d-15.5913746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939db1bd6e736671%3A0x5fe6cbaa036eebcf!2sBEEVOX%20-%20SOLU%C3%87%C3%95ES%20AUDITIVAS!5e0!3m2!1spt-BR!2sbr!4v1768323970312!5m2!1spt-BR!2sbr"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[400px] lg:min-h-[500px]"
              />
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-8 lg:p-10 flex flex-col justify-center space-y-6">
              <div>
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[rgb(246,182,31)]/10 rounded-xl mb-4">
                  <MapPin className="w-7 h-7 text-[rgb(246,182,31)]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Nosso Endereço</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  R. Gago Coutinho, 350
                  <br />
                  Araés, Cuiabá - MT
                  <br />
                  CEP: 78005-730
                </p>
              </div>

              <a
                href="https://www.google.com/maps/dir//BEEVOX+-+SOLU%C3%87%C3%95ES+AUDITIVAS,+R.+Gago+Coutinho,+350+-+Araes,+Cuiab%C3%A1+-+MT,+78010-000/@-15.5913746,-56.0908801,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[rgb(246,182,31)] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[rgb(226,162,11)] transition-all shadow-lg hover:shadow-xl space-x-2"
              >
                <Navigation className="w-5 h-5" />
                <span>Como Chegar</span>
              </a>

              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-2">Fácil Acesso</p>
                <p className="text-gray-700">
                  Estacionamento disponível nas proximidades. Localização central com acesso por
                  transporte público.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
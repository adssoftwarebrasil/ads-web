import { MapPin, Clock, Phone } from 'lucide-react';

export default function Location() {
  return (
    <section className="bg-black py-16 md:py-24 px-4 md:px-8 lg:px-16 fade-in">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12">Visite Nossa Loja</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="aspect-video rounded-lg overflow-hidden shadow-2xl border border-gray-800">
            <iframe
              src="https://maps.google.com/maps?q=R.%20Hayel%20Bon%20Faker%2C%202672%20-%20Jardim%20Caramuru%2C%20Dourados%20-%20MS%2C%2079810-050&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Órion Celulares Dourados"
              className="grayscale hover:grayscale-0 transition-all duration-500"
              style={{ border: '0px' }}
            ></iframe>
          </div>
          <div className="space-y-6 flex flex-col justify-center">
            <div className="flex gap-4 bg-[rgb(20,20,20)] p-6 rounded-lg hover:border-[rgb(231,189,44)] border border-transparent transition-colors">
              <MapPin className="w-6 h-6 flex-shrink-0 stroke-[rgb(231,189,44)]" />
              <div>
                <h3 className="text-white font-semibold mb-1">Endereço</h3>
                <p className="text-gray-300">R. Hayel Bon Faker, 2672 - sala b - Jardim Caramuru<br />Dourados - MS, 79810-050</p>
              </div>
            </div>
            <div className="flex gap-4 bg-[rgb(20,20,20)] p-6 rounded-lg hover:border-[rgb(231,189,44)] border border-transparent transition-colors">
              <Clock className="w-6 h-6 flex-shrink-0 stroke-[rgb(231,189,44)]" />
              <div>
                <h3 className="text-white font-semibold mb-1">Horário de Funcionamento</h3>
                <p className="text-gray-300">Segunda a Sexta: 8:00 - 18:00<br />Sábado: 8:00 - 12:00</p>
              </div>
            </div>
            <div className="flex gap-4 bg-[rgb(20,20,20)] p-6 rounded-lg hover:border-[rgb(231,189,44)] border border-transparent transition-colors">
              <Phone className="w-6 h-6 flex-shrink-0 stroke-[rgb(231,189,44)]" />
              <div>
                <h3 className="text-white font-semibold mb-1">Telefone</h3>
                <a href="tel:+5567981368931" className="text-[rgb(231,189,44)] hover:underline font-medium text-lg">(67) 98136-8931</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

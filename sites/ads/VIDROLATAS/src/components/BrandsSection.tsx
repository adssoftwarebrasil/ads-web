import { Award } from 'lucide-react';

export default function BrandsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#012d78] mb-4">
            Trabalhamos com as Melhores Marcas
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex items-center gap-4 bg-[#f8f9fa] px-8 py-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <Award className="text-[#0298d2]" size={48} />
            <div>
              <p className="text-2xl font-bold text-[#012d78]">Sekurit Partner</p>
              <p className="text-gray-600">Parceiro certificado</p>
            </div>
          </div>

          <p className="text-center text-gray-600 max-w-2xl leading-relaxed">
            Utilizamos vidros originais e certificados das melhores marcas do mercado,
            garantindo segurança, qualidade e durabilidade para seu veículo.
          </p>
        </div>
      </div>
    </section>
  );
}

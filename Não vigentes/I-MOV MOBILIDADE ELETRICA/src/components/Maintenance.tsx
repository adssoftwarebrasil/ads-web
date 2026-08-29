import { CheckCircle, Wrench } from 'lucide-react';

const services = [
  'Manutenção preventiva',
  'Consertos e reparos',
  'Troca de peças originais',
  'Revisão completa',
  'Atualização de sistemas',
];

export default function Maintenance() {
  return (
    <section id="manutencao" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#035772] mb-4">
                SERVIÇOS ESPECIALIZADOS
              </h2>
              <p className="text-xl text-gray-600">Oficina própria com equipe qualificada</p>
            </div>
            <div className="space-y-4">
              {services.map((service, i) => (
                <div
                  key={service}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:translate-x-2 animate-fade-in-up"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <CheckCircle
                    width={24}
                    height={24}
                    className="text-[#e0fd2c] flex-shrink-0 mt-1"
                  />
                  <span className="text-lg text-gray-700 font-medium">{service}</span>
                </div>
              ))}
            </div>
            <div className="pt-6">
              <a
                href="https://wa.me/5541988248004?text=Olá! Gostaria de solicitar um orçamento para manutenção"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#e0fd2c] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-[#035772] hover:text-white transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Wrench width={20} height={20} />
                SOLICITAR ORÇAMENTO
              </a>
            </div>
          </div>
          <div className="animate-fade-in-right">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-[#e0fd2c] to-[#035772] p-1">
                <div className="w-full h-full bg-white rounded-3xl flex items-center justify-center">
                  <img
                    src="https://storage.lucasmendes.dev/site-sp/i-move%2FLOGO.webp"
                    alt="I-MOV Manutenção"
                    className="w-3/4 h-auto object-contain p-8"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#e0fd2c] rounded-full opacity-30 blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#035772] rounded-full opacity-30 blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

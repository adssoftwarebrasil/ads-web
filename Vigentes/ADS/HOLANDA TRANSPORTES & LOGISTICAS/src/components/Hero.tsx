import { CheckCircle, MapPin, Clock } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const stats = [
  { icon: MapPin, label: 'Localização', value: 'Boa Vista - RR' },
  { icon: Clock, label: 'Horário', value: 'Seg-Sex: 8h-18h' },
  { icon: CheckCircle, label: 'Alcance', value: 'Internacional' },
];

export default function Hero() {
  const scrollToServices = () => {
    const el = document.getElementById('servicos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden"
    >
      <div className="absolute top-20 right-0 w-96 h-96 bg-holanda-green/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-holanda-light/10 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-holanda-green/10 to-holanda-light/10 text-holanda-green px-4 py-2 rounded-full text-sm font-semibold border border-holanda-green/20">
              <CheckCircle size={16} />
              <span>6 Anos de Experiência em Roraima</span>
            </div>
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-holanda-gray leading-tight">
              Soluções Completas em{' '}
              <span className="text-holanda-green">Transporte e Logística</span> para Roraima e Região
            </h1>
            <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
              Transporte de cargas secas e refrigeradas para Manaus, Venezuela e Guiana. Venda e aluguel de containers refrigerados de 20 e 40 pés com armazenamento seguro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="https://wa.me/5595991507264?text=Olá! Gostaria de solicitar um orçamento."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center bg-holanda-green text-white px-8 py-4 rounded-xl hover:bg-holanda-dark transition-all duration-300 font-semibold shadow-lg shadow-holanda-green/30 hover:shadow-xl hover:shadow-holanda-green/40 hover:scale-105"
              >
                <WhatsAppIcon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Solicitar Orçamento
              </a>
              <button
                onClick={scrollToServices}
                className="inline-flex items-center justify-center bg-white border-2 border-holanda-green text-holanda-green px-8 py-4 rounded-xl hover:bg-holanda-green hover:text-white transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
              >
                Nossos Serviços
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="p-2 bg-holanda-green/10 rounded-lg">
                    <stat.icon size={20} className="text-holanda-green flex-shrink-0" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">{stat.label}</p>
                    <p className="text-sm font-semibold text-holanda-gray">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative animate-fade-in-delayed flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-holanda-green/20 to-holanda-light/20 rounded-3xl blur-2xl transform scale-105"></div>
              <div className="relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-2xl border border-gray-100">
                <img
                  src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=holandatransportes%2Fholanda.jpg&version_id=null"
                  alt="Caminhão Holanda Transportes"
                  className="w-full h-auto max-w-sm lg:max-w-md xl:max-w-lg drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

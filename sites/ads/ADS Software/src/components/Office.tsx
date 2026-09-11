import { useState } from 'react';
import { MapPin, Clock, Phone, Mail, ChevronLeft, ChevronRight } from 'lucide-react';

const officeImages = [
  { src: 'https://storage.lucasmendes.dev/site-sp/ads-site%2FCapturar.webp', alt: 'Escritório ADS Software - Vista 1' },
  { src: 'https://storage.lucasmendes.dev/site-sp/ads-site%2FCapturar2.webp', alt: 'Escritório ADS Software - Vista 2' },
  { src: 'https://storage.lucasmendes.dev/site-sp/ads-site%2FCapturar3.webp', alt: 'Escritório ADS Software - Vista 3' },
  { src: 'https://storage.lucasmendes.dev/site-sp/ads-site%2FCapturar4.webp', alt: 'Escritório ADS Software - Vista 4' },
  { src: 'https://storage.lucasmendes.dev/site-sp/ads-site%2FCapturar5.webp', alt: 'Escritório ADS Software - Vista 5' },
];

export default function Office() {
  const [current, setCurrent] = useState(1);
  const total = officeImages.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#EBFFF4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#1264C6] to-[#19355E] rounded-2xl mb-6">
            <MapPin className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#19355E] mb-4">Conheça Nosso Escritório</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Estrutura completa para atender sua empresa com excelência e profissionalismo
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#19355E] mb-6">Visite Nossa Sede</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Localizada estrategicamente em Goiânia, nossa sede está equipada com tecnologia de ponta e uma equipe altamente qualificada pronta para transformar seu negócio digital.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#1264C6] to-[#19355E] rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#19355E] mb-1">Endereço</h4>
                    <p className="text-gray-600">
                      Av. C-4, 931 - Jardim América<br />Goiânia - GO, CEP 74265-040
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#1264C6] to-[#19355E] rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#19355E] mb-1">Horário de Atendimento</h4>
                    <p className="text-gray-600">
                      Segunda a Sexta: 9h às 18h<br />Sábado: 9h às 13h
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#1264C6] to-[#19355E] rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#19355E] mb-1">Telefone</h4>
                    <p className="text-gray-600">0800 780 0040</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#1264C6] to-[#19355E] rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#19355E] mb-1">Email</h4>
                    <p className="text-gray-600">contato@adssoftware.com.br</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-200">
                <a
                  href="https://wa.me/558007800040"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full bg-[#33a753] hover:bg-[#2d9249] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  Agendar Visita
                </a>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#1264C6] to-[#19355E] rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <div className="relative h-[400px] sm:h-[500px]">
                  {officeImages.map((image, index) => (
                    <div
                      key={image.src}
                      className={`absolute inset-0 transition-opacity duration-700 ${index === current ? 'opacity-100' : 'opacity-0'}`}
                    >
                      <img src={image.src} alt={image.alt} loading="lazy" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#19355E]/30 to-transparent"></div>
                    </div>
                  ))}
                </div>
                <button
                  onClick={prev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#19355E] rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 hover:scale-110 z-10"
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                <button
                  onClick={next}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#19355E] rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 hover:scale-110 z-10"
                  aria-label="Próxima imagem"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {officeImages.map((image, index) => (
                    <button
                      key={image.src}
                      onClick={() => setCurrent(index)}
                      className={`transition-all duration-300 rounded-full ${index === current ? 'bg-white w-8 h-3' : 'bg-white/50 hover:bg-white/75 w-3 h-3'}`}
                      aria-label={`Ir para imagem ${index + 1}`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

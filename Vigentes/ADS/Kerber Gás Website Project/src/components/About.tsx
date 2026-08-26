import { Award, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://storage.lucasmendes.dev/site-sp/kerbergas%2Fquemsomos.jpg"
              alt="Sobre Kerber Gás"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-[rgb(248,130,31)] rounded-full filter blur-3xl opacity-20 -z-10"></div>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Sobre a <span className="text-[rgb(248,130,31)]">Kerber Gás</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Há 5 anos atendendo Sinop - MT com excelência, garantindo agilidade,
              qualidade e bom atendimento para sua casa ou empresa.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Nossa missão é oferecer produtos de qualidade com entrega rápida e sem
              taxa, proporcionando comodidade e confiança para nossos clientes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-xl p-4 flex items-start space-x-3">
                <div className="w-12 h-12 rounded-full bg-[rgb(248,130,31)]/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-[rgb(248,130,31)]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Experiência</h3>
                  <p className="text-sm text-gray-600">
                    5 anos de atendimento de excelência em Sinop
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 flex items-start space-x-3">
                <div className="w-12 h-12 rounded-full bg-[rgb(248,130,31)]/10 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-[rgb(248,130,31)]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Compromisso</h3>
                  <p className="text-sm text-gray-600">
                    Qualidade e bom atendimento sempre
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

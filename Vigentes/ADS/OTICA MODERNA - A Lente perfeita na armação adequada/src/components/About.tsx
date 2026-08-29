import { CheckCircle2, ArrowRight } from 'lucide-react';

const bullets = [
  'Atendimento humanizado e personalizado',
  'Laboratório óptico de alta precisão',
  'As melhores marcas de armações do mundo',
];

export default function About() {
  return (
    <section id="sobre" className="relative py-20 md:py-32 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-72 h-72 bg-gray-100 rounded-full blur-3xl opacity-50"></div>
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <img
                src="https://storage.lucasmendes.dev/site-sp/oticamodernago%2FQuem%20somos.webp"
                alt="Interior da Ótica Moderna"
                className="w-full h-[400px] md:h-[550px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[rgb(231,28,31)]/10 rounded-2xl -z-10 hidden md:block"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-[rgb(231,28,31)]/20 rounded-2xl -z-10 hidden md:block"></div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[rgb(231,28,31)] text-sm font-bold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[rgb(231,28,31)]"></span>
              </span>
              Nossa História
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Excelência Visual em <span className="text-[rgb(231,28,31)]">Goiânia</span> desde 1966.
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              A <span className="font-semibold text-gray-900">Ótica Moderna</span> não é apenas uma loja, é um legado de cuidado com a sua visão. Combinamos a precisão técnica de décadas com o que há de mais atual em tendências e tecnologia de lentes.
            </p>
            <ul className="space-y-4 mb-10">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="lucide lucide-check-circle2 w-5 h-5 text-[rgb(231,28,31)]" width={24} height={24} />
                  {b}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://api.whatsapp.com/send?phone=556293756868&text=Olá! Gostaria de saber mais sobre os serviços da Ótica Moderna."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-[rgb(231,28,31)] text-white px-8 py-4 rounded-xl font-bold hover:bg-[rgb(173,19,21)] transition-all duration-300 shadow-lg shadow-red-200"
              >
                Falar com Especialista
                <ArrowRight className="lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform" width={24} height={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Check } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/5599991458080?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações';

const features = [
  'Tradicional',
  'Especialistas em veículos',
  'Inovação constante',
  'Compromisso com qualidade',
];

export default function Sobre() {
  return (
    <section id="sobre" className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center transition-all duration-700 opacity-100 translate-y-0">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/PNEU%20ZERO%2Fimg%2FQuem%20somos.jpg"
              alt="Quem Somos"
              className="w-full rounded-3xl shadow-xl"
            />
          </div>
          <div>
            <p className="text-[rgb(227,17,35)] uppercase tracking-wider text-sm font-semibold mb-3">
              Quem somos
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[rgb(3,3,4)] mb-6">
              Auto Center Pneu Zero
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Desde 1980, o Auto Center Pneu Zero se estabelece como um líder em soluções
              automotivas no Maranhão. Com uma herança de mais de quatro décadas no setor
              automotivo, nos especializamos em uma ampla gama de serviços e produtos de qualidade
              para veículos. Nosso objetivo é garantir a satisfação total dos clientes, oferecendo
              soluções inovadoras e um atendimento exemplar que nos posiciona como uma referência
              regional.
            </p>
            <ul className="space-y-4 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[rgb(227,17,35)] rounded-full flex items-center justify-center">
                    <Check width={16} height={16} strokeWidth={2} className="lucide lucide-check text-white" />
                  </div>
                  <span className="text-gray-800 text-lg">{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[rgb(227,17,35)] text-white px-10 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              Enviar WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

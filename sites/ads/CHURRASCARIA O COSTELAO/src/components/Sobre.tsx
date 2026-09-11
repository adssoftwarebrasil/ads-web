import { Award, Users, Heart, TrendingUp } from 'lucide-react';

const features = [
  { Icon: Award, title: 'Qualidade', desc: 'Ingredientes selecionados' },
  { Icon: Users, title: 'Familiar', desc: 'Ambiente acolhedor' },
  { Icon: Heart, title: 'Tradição', desc: 'Receitas autênticas' },
  { Icon: TrendingUp, title: 'Experiência', desc: '38 anos no mercado' },
];

export default function Sobre() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[rgb(61,61,67)] mb-4">
              Nossa <span className="text-[rgb(212,178,37)]">História</span>
            </h2>
            <div className="w-24 h-1 bg-[rgb(212,86,96)] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Um legado de sabor que atravessa gerações
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <img
                src="https://storage.lucasmendes.dev/site-sp/churrascaria%20costelao/img/imagem-estabelecimento-lado.webp"
                alt="Churrascaria Costelão - Vista do estabelecimento"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-[rgb(212,178,37)] text-[rgb(61,61,67)] p-6 rounded-xl shadow-xl">
                <p className="text-4xl font-bold">38</p>
                <p className="text-sm font-semibold">Anos de Tradição</p>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[rgb(61,61,67)] mb-6">
                Tradição que Passa de Geração em Geração
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Com uma tradição de 38 anos, somos um negócio passado de geração em geração.
                Oferecemos o melhor da comida caseira e churrasco assado na hora, combinando
                experiência de mercado com um preço justo e qualidade inquestionável.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Nossa missão é proporcionar refeições que aquecem o coração e fortalecem os laços
                familiares, mantendo viva a essência da verdadeira culinária brasileira.
              </p>
              <a
                href="https://wa.me/5545999434290"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[rgb(212,86,96)] text-white px-8 py-3 rounded-full font-semibold hover:bg-[rgb(212,178,37)] hover:text-[rgb(61,61,67)] transition-all duration-300 shadow-lg"
              >
                Entre em Contato
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <Icon className="w-12 h-12 text-[rgb(212,178,37)] mx-auto mb-4" />
                <h4 className="font-bold text-[rgb(61,61,67)] mb-2">{title}</h4>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

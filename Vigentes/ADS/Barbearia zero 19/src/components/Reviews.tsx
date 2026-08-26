import { Star, MapPin, ExternalLink } from 'lucide-react';

interface Review {
  text: string;
  author: string;
  delay: number;
}

const reviews: Review[] = [
  {
    text: '"Ótima barbearia com excelentes profissionais e um ambiente agradável com mesa de sinuca, sofás para aguardar, televisão, ar condicionado, bebidas e fliperama. Já corto cabelo com eles a mais de 4 anos."',
    author: 'Lucas Miranda',
    delay: 0,
  },
  {
    text: '"Muito boa a experiência, fiz meu corte com o Cauê, Gente fina demais. Corte sensacional exatamente do jeito que eu esperava. Ambiente bem agradável. Certamente voltarei outras vezes."',
    author: 'Guilherme Marciano',
    delay: 200,
  },
  {
    text: '"Ahhhhh!!! Muito suspeita a falar pois, são excelentes em tudo!!! Trabalho maravilhoso, ambiente super aconchegante e divertido com jogos, bebidas, fantástico, melhor lugar de Campinas."',
    author: 'Maysla Rodrigues',
    delay: 400,
  },
];

const mapsUrl =
  'https://www.google.com/maps/place/Barbearia+Zero19/@-22.9069909,-47.100405,17z/data=!4m18!1m9!3m8!1s0x94c8c7d5f3b29c83:0x32f5c237fc59f83f!2sBarbearia+Zero19!8m2!3d-22.9069909!4d-47.0978301!9m1!1b1!16s%2Fg%2F11c1rgthxy!3m7!1s0x94c8c7d5f3b29c83:0x32f5c237fc59f83f!8m2!3d-22.9069909!4d-47.0978301!9m1!1b1!16s%2Fg%2F11c1rgthxy?entry=ttu';

export default function Reviews() {
  return (
    <section id="depoimentos" className="py-24 bg-white text-zinc-900 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-4 animate-fade-in-up">
            O que dizem os <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-800 to-premium-red">clientes</span>
          </h2>
          <p className="text-zinc-600 max-w-2xl mx-auto font-light">A excelência que você vê nos resultados e sente no atendimento, confirmada pela nossa comunidade no Google Meu Negócio.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {reviews.map((review) => (
            <div
              key={review.author}
              className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-xl hover:border-premium-red/30 hover:shadow-2xl transition-all group flex flex-col h-full animate-fade-in-up"
              style={{ animationDelay: `${review.delay}ms` }}
            >
              <div className="flex gap-1 text-premium-google-yellow mb-6">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="italic text-zinc-700 mb-8 font-light leading-relaxed flex-grow">{review.text}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-zinc-900 font-outfit font-bold text-sm">{review.author}</span>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Google Review</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-zinc-50 hover:bg-zinc-100 text-zinc-700 hover:text-zinc-900 px-8 py-4 rounded-xl border border-zinc-200 shadow-sm transition-all font-outfit font-medium group animate-fade-in-up"
          >
            <MapPin className="w-5 h-5 text-premium-red group-hover:scale-110 transition-transform" />
            Ver todas as avaliações no Google
            <ExternalLink className="w-4 h-4 opacity-50" />
          </a>
        </div>
      </div>
    </section>
  );
}

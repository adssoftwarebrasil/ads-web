import { Instagram, Facebook, Youtube } from 'lucide-react';

const gallery = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/orquidario%20orquidea%2Fatualizadas%2FBLC.%20Ann%20Cleo%20Star%20and%20Stripe.webp',
    label: 'BLC. Ann Cleo Star and Stripe',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/orquidario%20orquidea%2Fatualizadas%2FCattleya%20granulosa.webp',
    label: 'Cattleya Granulosa',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/orquidario%20orquidea%2Fatualizadas%2FCattleya%20schilleriana.webp',
    label: 'Cattleya Schilleriana',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/orquidario%20orquidea%2Fatualizadas%2FChysiis%20limminguei.webp',
    label: 'Chysis Limminguei',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/orquidario%20orquidea%2Fgaleria%2FCattleya%20%28H%C3%ADbrida%29.webp',
    label: 'Cattleya Híbrida',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/orquidario%20orquidea%2Fgaleria%2FCymbidium%20%28Rosa%29.webp',
    label: 'Cymbidium Rosa',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/orquidario%20orquidea%2Fgaleria%2FCymbidium.webp',
    label: 'Cymbidium',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/orquidario%20orquidea%2Fgaleria%2FDendrobium%20thyrsiflorum.webp',
    label: 'Dendrobium Thyrsiflorum',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/orquidario%20orquidea%2Fgaleria%2FOncidium%20%28tipo%20Chuva%20de%20Ouro%20ou%20Tigrina%29.webp',
    label: 'Oncidium (Chuva de Ouro)',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/orquidario%20orquidea%2Fgaleria%2FVanda%20%28H%C3%ADbrida%20Amarela%29.webp',
    label: 'Vanda Híbrida Amarela',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/orquidario%20orquidea%2Fgaleria%2FVanda%20%28Rosa%20com%20Pintas%29.webp',
    label: 'Vanda Rosa Pintada',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/orquidario%20orquidea%2Fatualizadas%2Farranjos%20personalizados.webp',
    label: 'Arranjos Personalizados',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/orquidario%20orquidea%2Fatualizadas%2Fdecoracao%20excluziva.webp',
    label: 'Decoração Exclusiva',
    extraClass: 'md:col-start-2',
  },
];

const socials = [
  {
    href: 'https://www.instagram.com/amoorquideaoficial/',
    icon: Instagram,
    color: 'rgb(227, 97, 222)',
    title: 'Instagram',
    handle: '@amoorquideaoficial',
  },
  {
    href: 'https://www.facebook.com/OrquideaeCia/',
    icon: Facebook,
    color: 'rgb(22, 126, 79)',
    title: 'Facebook',
    handle: '/OrquideaeCia',
  },
  {
    href: 'https://www.youtube.com/@orquidarioorquideacia13',
    icon: Youtube,
    color: 'rgb(163, 206, 15)',
    title: 'YouTube',
    handle: '@orquidarioorquideacia13',
  },
];

export default function Gallery() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[rgb(22,126,79)] font-semibold text-sm uppercase tracking-wider mb-3 block">
            Galeria
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Conheça Nossa Variedade</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Uma pequena amostra da beleza que você encontra no Orquidário Orquídea&amp;Cia
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {gallery.map((item) => (
            <div
              key={item.label}
              className={`group relative overflow-hidden rounded-2xl aspect-square shadow-lg hover:shadow-2xl transition-all duration-300 ${item.extraClass ?? ''}`}
            >
              <img
                src={item.src}
                alt={item.label}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-lg font-bold drop-shadow-md">{item.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Siga-nos nas Redes Sociais
            </h3>
            <p className="text-gray-600 text-lg">
              Acompanhe nosso dia a dia e fique por dentro das novidades
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.title}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center p-6 rounded-2xl hover:shadow-lg transition-all duration-300 border-2 border-gray-100 hover:border-gray-200"
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: social.color }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{social.title}</h4>
                  <p className="text-gray-600 text-sm">{social.handle}</p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Zap } from 'lucide-react';
import { waLink } from '../lib/site';

const partners = [
  'https://storage.lucasmendes.dev/site-sp/casadasbombasipatinga%2Ffabricante-3.jpg',
  'https://storage.lucasmendes.dev/site-sp/casadasbombasipatinga%2Ffabricante-4.jpg',
  'https://storage.lucasmendes.dev/site-sp/casadasbombasipatinga%2Ffabricante-6.jpg',
  'https://storage.lucasmendes.dev/site-sp/casadasbombasipatinga%2Ffabricante-7.jpg',
  'https://storage.lucasmendes.dev/site-sp/casadasbombasipatinga%2Ffabricante-9.jpg',
  'https://storage.lucasmendes.dev/site-sp/casadasbombasipatinga%2Ffabricante-10.jpg',
  'https://storage.lucasmendes.dev/site-sp/casadasbombasipatinga%2Ffabricante-11.jpg',
  'https://storage.lucasmendes.dev/site-sp/casadasbombasipatinga%2Ffabricante-12.jpg',
  'https://storage.lucasmendes.dev/site-sp/casadasbombasipatinga%2Ffabricante-13.jpg',
  'https://storage.lucasmendes.dev/site-sp/casadasbombasipatinga%2Ffabricante-14.jpg',
  'https://storage.lucasmendes.dev/site-sp/casadasbombasipatinga%2Ffabricante-15.jpg',
  'https://storage.lucasmendes.dev/site-sp/casadasbombasipatinga%2Ffabricante-16.jpg',
  'https://storage.lucasmendes.dev/site-sp/casadasbombasipatinga%2Ffabricante-17.jpg',
  'https://storage.lucasmendes.dev/site-sp/casadasbombasipatinga%2Ffabricante-19.jpg',
];

export default function Partners() {
  return (
    <section className="py-16 lg:py-28 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-lg font-semibold mb-2" style={{ color: 'rgb(37, 155, 208)' }}>
            CONFIANÇA E PARCERIA
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4" style={{ color: 'rgb(1, 8, 82)' }}>
            Trabalhamos Apenas com Fabricantes de Primeira Linha
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: 'rgb(37, 155, 208)' }}></div>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Nossa parceria com as marcas líderes do mercado é a garantia de qualidade e confiabilidade em todos os
            serviços e produtos.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-y-8 gap-x-12 lg:gap-x-16">
          {partners.map((src, i) => (
            <div
              key={src}
              className="flex items-center justify-center p-2 rounded-lg transition-all duration-300 transform hover:scale-105"
              style={{ width: '150px' }}
            >
              <img
                src={src}
                alt={`Fabricante parceiro ${i + 1}`}
                className="w-full max-h-16 object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <a
            href={waLink('Olá! Gostaria de falar sobre assistência técnica e peças.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-xl text-white shadow-xl transition-all duration-300 transform hover:scale-105"
            style={{ backgroundColor: 'rgb(37, 155, 208)' }}
          >
            <Zap className="w-5 h-5 mr-3" />
            Fale Conosco Sobre Assistência Técnica
          </a>
        </div>
      </div>
    </section>
  );
}

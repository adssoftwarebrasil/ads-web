import { Instagram, Facebook, MapPin } from 'lucide-react';
import { StarIcon } from './icons';

export default function Sobre() {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-brand-orange/10 text-brand-orange text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
              Nossa História
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-dark leading-tight mb-5">
              Sobre a
              <br />
              <span className="text-brand-orange">Sia Solda</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                A <strong className="text-brand-dark">Sia Solda</strong> é uma empresa especializada
                no segmento de soldagem, localizada em Brasília-DF.
              </p>
              <p>
                Atuamos com uma linha completa de produtos: máquinas de solda MIG, TIG, Plasma e
                Eletrodo para venda e locação, consumíveis de alta qualidade, EPIs certificados,
                ferramentas elétricas das melhores marcas e muito mais.
              </p>
              <p>
                Nosso grande diferencial está no{' '}
                <strong className="text-brand-dark">atendimento com consultores especializados</strong>
                , que orientam cada cliente a encontrar a solução ideal para seu projeto. Atendemos
                em todo o Distrito Federal e o Estado de Goiás.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.instagram.com/sia.solda/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-brand-dark text-white text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-brand-dark-light transition-colors"
              >
                <Instagram className="lucide lucide-instagram" width={16} height={16} />
                Instagram
              </a>
              <a
                href="https://www.facebook.com/siasolda/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-brand-dark text-white text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-brand-dark-light transition-colors"
              >
                <Facebook className="lucide lucide-facebook" width={16} height={16} />
                Facebook
              </a>
            </div>
            <div className="mt-6 flex items-start gap-2.5 text-sm text-gray-500">
              <MapPin
                className="lucide lucide-map-pin text-brand-orange shrink-0 mt-0.5"
                width={16}
                height={16}
              />
              <span>SIA Trecho 17 Rua 14, Lt 70/90 — SIA, Brasília-DF, 71200-240</span>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-brand-dark/20">
              <img
                src="https://storage.lucasmendes.dev/site-sp/cia%20solda%20e%20ferramentas/img/logo.webp"
                alt="Sia Solda"
                className="w-full object-contain bg-white p-12"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-brand-orange text-white rounded-2xl p-4 shadow-xl">
              <div className="text-3xl font-black">5.0</div>
              <div className="flex gap-0.5 mt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 fill-yellow-300" />
                ))}
              </div>
              <div className="text-xs text-white/80 mt-1">Google Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

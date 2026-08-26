import { Sparkles, Users, MapPin } from 'lucide-react';
import { WHATSAPP_URL, ACCENT, SOFT_BG } from '../data';

const features = [
  {
    Icon: Sparkles,
    title: 'Ambiente Confortável',
    description: 'Experimente um espaço climatizado e acolhedor.',
  },
  {
    Icon: Users,
    title: 'Profissionais Qualificadas',
    description: 'Uma equipe dedicada a proporcionar o melhor atendimento.',
  },
  {
    Icon: MapPin,
    title: 'Localização Privilegiada',
    description: 'Estamos no coração de Fortaleza, perto de você.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <div>
                <span
                  className="text-sm font-semibold tracking-wider uppercase"
                  style={{ color: ACCENT }}
                >
                  Quem somos
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mt-3 mb-6">
                  Beleza por Fernanda de Jesus
                </h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Beleza por Fernanda de Jesus nasceu com a missão de oferecer serviços de beleza de
                alta qualidade em um ambiente acolhedor. Fundada há 5 anos no Centro de Fortaleza,
                nossa equipe é composta por profissionais apaixonadas por cuidar de cabelos, unhas e
                sobrancelhas.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Priorizamos a satisfação do cliente e utilizamos produtos de primeira linha para
                garantir resultados excepcionais. Venha nos conhecer!
              </p>
              <div className="pt-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg"
                  style={{ backgroundColor: ACCENT }}
                >
                  Agendar um horário
                </a>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=belezaporfernanda%2Fimg%2FWhatsApp%20Image%202025-12-17%20at%2009.53.34%20(1).jpeg&version_id=null"
                alt="Sobre nós"
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
        <div className="mt-16 w-full flex justify-center">
          <iframe
            className="instagram-media instagram-media-rendered"
            id="instagram-embed-0"
            src="https://www.instagram.com/reel/DOlIde3D3vl/embed/captioned/?cr=1&v=14&wp=540&rd=https%3A%2F%2Fbelezaporfernanda.netlify.app&rp=%2F"
            allowTransparency
            allowFullScreen
            frameBorder={0}
            height={1005}
            scrolling="no"
            style={{
              background: 'white',
              maxWidth: '540px',
              width: '99.375%',
              borderRadius: '3px',
              border: '1px solid rgb(219, 219, 219)',
              boxShadow: 'none',
              display: 'block',
              margin: '0px 0px 12px',
              minWidth: '326px',
              padding: '0px',
            }}
          ></iframe>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {features.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="text-center p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ backgroundColor: SOFT_BG }}
            >
              <div
                className="inline-flex items-center justify-center w-16 h-16 text-white rounded-2xl mb-4"
                style={{ backgroundColor: ACCENT }}
              >
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

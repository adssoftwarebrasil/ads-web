import { Star, MapPin, MessageCircle } from 'lucide-react';

const WHATSAPP_URL =
  'https://api.whatsapp.com/send/?phone=5511947279099&text&type=phone_number&app_absent=0';

const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/place/Animaly+Pet+Shop+%2F+Banho+e+Tosa/@-23.601952,-46.894899,14z/data=!4m18!1m9!3m8!1s0x94cf0759b09e3c53:0xc8c166750cfd0e4b!2sAnimaly+Pet+Shop+%2F+Banho+e+Tosa!8m2!3d-23.601952!4d-46.8948987!9m1!1b1!16s%2Fg%2F11btww51t0!3m7!1s0x94cf0759b09e3c53:0xc8c166750cfd0e4b!8m2!3d-23.601952!4d-46.8948987!9m1!1b1!16s%2Fg%2F11btww51t0?hl=pt-BR&entry=ttu&g_ep=EgoyMDI2MDExOS4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D';

const testimonials = [
  {
    initial: 'R',
    text: '"O melhor Pet Shop de Cotia, o tratamento com minha cachorrinha é "VIP", não só a minha, tratam bem com muito amor e carinho sempre, ela vem feliz para casa, o dia do rolê dela, qdo o Léo vem buscar, ela já sabe!! Todos que trabalham amam o que fazem."',
    name: 'Rosana Celi Filliettaz Martins do Prado',
    role: 'Local Guide',
  },
  {
    initial: 'I',
    text: '"Eles são maravilhosos, sempre cuidaram bem dos cachorros da família, o nosso myke tem 14 anos, sempre com os cuidados do Animaly, entregam excelência, tem amor e carinho pelo que faz, sempre atenciosos e cuidadosos com os bichinhos."',
    name: 'Iana Roberta Rocha',
    role: 'Local Guide',
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-[#b900ba] to-[#38d060] text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            Depoimentos
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A satisfação dos nossos clientes e o bem-estar dos pets são nossa
            maior recompensa.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 flex flex-col justify-between hover:-translate-y-2 border border-gray-100"
            >
              <div>
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="text-[#38d060] fill-[#38d060]"
                      size={20}
                    />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic text-lg">
                  {t.text}
                </p>
              </div>
              <div className="flex items-center space-x-4 border-t pt-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#b900ba] to-[#38d060] rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {t.initial}
                </div>
                <div>
                  <div className="font-bold text-gray-900 leading-tight">
                    {t.name}
                  </div>
                  <div className="text-sm text-[#38d060] font-medium">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mb-20">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-[#b900ba] font-bold hover:text-[#38d060] transition-colors group"
          >
            <MapPin
              className="group-hover:animate-bounce"
              size={20}
            />
            <span className="border-b-2 border-transparent hover:border-[#38d060]">
              Ler mais avaliações ou deixar sua nota no Google
            </span>
          </a>
        </div>
        <div className="mt-16 text-center bg-gradient-to-r from-[#b900ba] to-[#38d060] rounded-3xl p-12 shadow-xl">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Agende Seu Horário
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Assim como a Rosana e a Iana, proporcione um dia "VIP" para o seu
            melhor amigo!
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white text-[#b900ba] px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <MessageCircle size={22} />
            <span>Enviar WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}

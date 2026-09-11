import { Star, Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      '"Ótimo atendimento, qualidade e comprometimento com seus clientes. Recomendo a AL Personaliza para qualquer serviço de comunicação visual."',
    name: 'Daniel Walker',
    role: 'Cliente — Google',
    avatar:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    quote:
      '"Mandei fazer uns adesivos e fui muito bem atendida. Os adesivos superaram minhas expectativas! Qualidade de impressão ótima, bem embalado e entregou no prazo. Me ajudaram com o arquivo que estava errado."',
    name: 'Bruna Marques',
    role: 'Guia Local — Google',
    avatar:
      'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    quote:
      '"Atenderam-me muito bem, fizeram o pedido do jeitinho que pedi. Profissionais atenciosos e resultado excelente. Com certeza voltarei a fazer negócios!"',
    name: 'Karoll Gonçalves',
    role: 'Guia Local — Google',
    avatar:
      'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
];

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="py-20 lg:py-28 bg-gradient-to-br from-[#102694] to-[#3E4194] relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#FFC734]/10 blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[#FFC734] font-semibold text-sm uppercase tracking-widest mb-3">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Quem confia na AL Personaliza <span className="text-[#FFC734]">recomenda</span>
          </h2>
          <p className="text-white/70 max-w-xl mx-auto text-base">
            A satisfação dos nossos clientes é o nosso maior troféu. Veja o que eles dizem sobre nosso
            trabalho.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    width={16}
                    height={16}
                    strokeWidth={2}
                    className="lucide lucide-star text-[#FFC734] fill-[#FFC734]"
                  />
                ))}
              </div>
              <Quote
                width={28}
                height={28}
                strokeWidth={2}
                className="lucide lucide-quote text-[#FFC734]/40 mb-3"
              />
              <p className="text-white/90 text-sm leading-relaxed mb-6">{t.quote}</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-[#FFC734]/30"
                />
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-white/50 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-white/60 text-sm mb-4">Avaliado no Google por clientes reais</p>
          <div className="flex items-center justify-center gap-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/272px-Google_2015_logo.svg.png"
              alt="Google"
              className="h-5 opacity-70"
            />
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  width={14}
                  height={14}
                  strokeWidth={2}
                  className="lucide lucide-star text-[#FFC734] fill-[#FFC734]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

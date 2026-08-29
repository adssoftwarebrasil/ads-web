import { Quote, Star, MessageCircle } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  text: string;
  borderColor: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Carla Alice Schimanko',
    role: 'Cliente',
    text: '"Lugar repleto de opções para artesanato. Loja muito completa, oferece cursos e orientações. Ótimo atendimento."',
    borderColor: 'border-[#E63428]',
    avatar: 'https://ui-avatars.com/api/?name=Carla+Alice&background=e53326&color=fff&size=200',
  },
  {
    name: 'Emanuela Dotti Chioquetta',
    role: 'Cliente',
    text: '"Melhor loja de Foz! Eu ficaria horas olhando tudo que tem, é a loja para todo amante de artesanato e com dotes artísticos. E o pessoal do atendimento é muito gentil, adoro comprar lá."',
    borderColor: 'border-[#0186C6]',
    avatar: 'https://ui-avatars.com/api/?name=Emanuela+Dotti&background=0186c6&color=fff&size=200',
  },
  {
    name: 'Ana Rafhaela',
    role: 'Cliente',
    text: '"Loja incrível, fiz o pedido personalizado pelo whatsapp e retirei no local com ótimo atendimento."',
    borderColor: 'border-[#EB097C]',
    avatar: 'https://ui-avatars.com/api/?name=Ana+Rafhaela&background=eb097c&color=fff&size=200',
  },
];

function Stars() {
  return (
    <>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="lucide lucide-star w-5 h-5 fill-[#FDBA16] text-[#FDBA16]" />
      ))}
    </>
  );
}

export default function Testimonials() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-slate-50">
      <div className="absolute inset-0 z-0 bg-[#EAF2F8] opacity-60 pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a2e5a]">O Que Nossos <span className="text-[#E63428]">Clientes Dizem</span></h2>
          <p className="text-lg text-gray-600 font-medium">Veja o que nossos clientes satisfeitos têm a dizer sobre a experiência na Vida Kriativa</p>
          <div className="h-1.5 w-24 mx-auto rounded-full bg-gradient-to-r from-[#E63428] via-[#EB097C] to-[#0186C6]"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-3xl p-8 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 relative flex flex-col h-full">
              <div className="absolute top-6 right-8 text-gray-100">
                <Quote className="lucide lucide-quote w-12 h-12 transform rotate-180" fill="currentColor" />
              </div>
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className={`p-1 rounded-full border-2 ${t.borderColor} bg-white shadow-sm`}>
                  <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-[#1a2e5a] leading-tight">{t.name}</h4>
                  <p className="text-sm text-gray-500 font-medium">{t.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                <Stars />
              </div>
              <p className="text-gray-600 leading-relaxed italic relative z-10 flex-grow">{t.text}</p>
            </div>
          ))}
        </div>
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl mx-auto max-w-5xl">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a2e5a] via-[#274981] to-[#0186C6]"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#EB097C] opacity-10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>
          <div className="relative p-8 md:p-12 text-center text-white">
            <div className="grid md:grid-cols-3 gap-8 mb-12 border-b border-white/10 pb-12">
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-[#FDBA16]">5.0</div>
                <div className="flex justify-center gap-1 mb-2">
                  <Stars />
                </div>
                <p className="text-blue-100 font-medium text-sm uppercase tracking-wide">Avaliação Média</p>
              </div>
              <div className="space-y-2 md:border-x border-white/10 px-4">
                <div className="text-4xl md:text-5xl font-bold text-[#EB097C]">100%</div>
                <p className="text-blue-100 font-medium text-sm uppercase tracking-wide mt-4">Clientes Satisfeitos</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-[#009CA6]">5000+</div>
                <p className="text-blue-100 font-medium text-sm uppercase tracking-wide mt-4">Vendas Realizadas</p>
              </div>
            </div>
            <div className="max-w-2xl mx-auto space-y-8">
              <div>
                <h3 className="text-2xl md:text-4xl font-bold mb-4">Faça Parte da Nossa Comunidade Criativa</h3>
                <p className="text-lg text-blue-100 leading-relaxed">Junte-se a milhares de artesãos que confiam na Vida Kriativa para dar vida aos seus projetos mais especiais.</p>
              </div>
              <a href="http://wa.me/554599938248" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-[#1a2e5a] px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 hover:shadow-lg hover:scale-105 transition-all duration-300">
                <MessageCircle className="lucide lucide-message-circle w-5 h-5" />
                Entre em Contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

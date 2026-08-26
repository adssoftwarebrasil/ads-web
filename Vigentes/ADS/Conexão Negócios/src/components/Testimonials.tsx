import { Star, CheckCircle2, Quote, MapPin } from 'lucide-react';

const GOOGLE_LOGO = 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg';

interface Review {
  initials: string;
  name: string;
  localGuide: boolean;
  reviews: string;
  photos: string | null;
  text: string;
  time: string;
}

const reviews: Review[] = [
  {
    initials: 'MA',
    name: 'Marcos Artur',
    localGuide: true,
    reviews: '37 avaliações',
    photos: '79 fotos',
    text: '"Empresa boa! Flexivel, parceira e com preços justos. Atendem o telefone fora de hora! São bons comercialmente e NÃO ME DEIXARAM NA MÃO QUANDO MAIS PRECISEI!"',
    time: '3 meses atrás',
  },
  {
    initials: 'JD',
    name: 'Joana Darcs',
    localGuide: false,
    reviews: '4 avaliações',
    photos: '1 fotos',
    text: '"Muito bom! Excelente. Levei minha SW4 Hilux por indicação de um outro profissional; Serviço executado com sucesso."',
    time: '3 meses atrás',
  },
  {
    initials: 'GA',
    name: 'Gabriela Almeida',
    localGuide: true,
    reviews: '46 avaliações',
    photos: '13 fotos',
    text: '"Melhor lugar em Goiânia para comprar turbinas e fazer reparos. Atendimento impecável e produtos originais."',
    time: '2 meses atrás',
  },
  {
    initials: 'IM',
    name: 'Ilton Morais',
    localGuide: false,
    reviews: '1 avaliações',
    photos: null,
    text: '"Já tem 15 anos parceria com a conexão empresa boa responsável Semper cumpre seu compromisso"',
    time: '3 meses atrás',
  },
  {
    initials: 'WB',
    name: 'Willian Borges',
    localGuide: false,
    reviews: '1 avaliações',
    photos: null,
    text: '"Ótimo atendimento"',
    time: '3 meses atrás',
  },
  {
    initials: 'JM',
    name: 'Josias Mendes',
    localGuide: true,
    reviews: '19 avaliações',
    photos: '1 fotos',
    text: '"Top equipe nota 10. Serviço de primeira qualidade em turbinas e sistema hidráulico."',
    time: '3 anos atrás',
  },
];

const CardStar = () => (
  <Star size={16} fill="#FBBF24" strokeWidth={0} className="text-yellow-400" />
);

export default function Testimonials() {
  return (
    <section id="depoimentos">
      <section id="depoimentos" className="bg-white py-20 sm:py-28 px-4 sm:px-6 w-full overflow-hidden">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-md bg-yellow-50 text-yellow-700 text-sm font-bold uppercase tracking-wider mb-4 border border-yellow-100">
              Prova Social
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-gray-900 leading-tight mb-6">
              O que dizem sobre nós
            </h2>
            <div className="flex flex-col sm:flex-row items-center gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="text-4xl font-bold text-gray-900">5.0</span>
                <div className="flex flex-col items-start">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        fill="#FBBF24"
                        strokeWidth={0}
                        className="text-yellow-400 border-none"
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 font-medium mt-1">Baseado em avaliações do Google</span>
                </div>
              </div>
              <div className="hidden sm:block w-[1px] h-10 bg-gray-300 mx-2"></div>
              <p className="text-gray-600 text-sm max-w-xs">
                Excelência comprovada por quem entende de turbinas e sistema hidráulico.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {reviews.map((r) => (
              <div
                key={r.name}
                className="group relative bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-gray-200 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
              >
                <Quote
                  size={40}
                  strokeWidth={2}
                  className="absolute top-6 right-6 text-gray-100 group-hover:text-blue-50 transition-colors duration-300"
                />
                <div className="flex items-start gap-4 mb-6 relative z-10">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-blue to-blue-700 flex items-center justify-center text-white text-base font-bold shadow-md">
                      {r.initials}
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-[2px]">
                      <CheckCircle2 size={14} strokeWidth={2} className="text-green-500 fill-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-900 leading-tight">{r.name}</div>
                    {r.localGuide && (
                      <div className="flex items-center gap-1 mt-1">
                        <Star size={12} fill="currentColor" strokeWidth={2} className="text-orange-500" />
                        <span className="text-xs font-medium text-gray-500">Local Guide</span>
                      </div>
                    )}
                    <div className="text-[11px] text-gray-400 mt-1 flex items-center gap-1">
                      <span>{r.reviews}</span>
                      {r.photos && (
                        <>
                          <span>•</span>
                          <span>{r.photos}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <CardStar key={i} />
                  ))}
                </div>
                <p className="text-[15px] text-gray-600 leading-relaxed mb-6 flex-grow">{r.text}</p>
                <div className="pt-4 border-t border-gray-50 flex items-center gap-2 text-xs font-medium text-gray-400">
                  <span className="flex items-center gap-1">
                    <img src={GOOGLE_LOGO} alt="Google" className="w-3 h-3 opacity-60" />
                    Google Review
                  </span>
                  <span>•</span>
                  <span>{r.time}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href="https://www.google.com/maps/search/Conexão+Negócios+Turbina+Goiânia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-blue font-bold hover:text-blue-700 transition-colors border-b-2 border-primary-blue/20 hover:border-primary-blue pb-1"
            >
              <MapPin size={18} strokeWidth={2} />
              Ver todas as avaliações no Google
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}

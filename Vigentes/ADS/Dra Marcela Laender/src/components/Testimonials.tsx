import { Quote, Star } from 'lucide-react';

const WHATSAPP_URL = 'http://wa.me/553399711500';

const testimonials = [
  {
    text: 'Está mulher maravilhosa chamada Dr. Marcela é uma profissional competente. Comprometida em estudar para ajudar! Muito educada, muito entendida na sua profissão! Já tinha passado por 5 profissionais da área de ginecologia e ela me ajudou a entender e passar de forma consciente está nova fase da minha vida!',
    name: 'Claudia Matos',
    role: 'Paciente',
  },
  {
    text: 'Simplesmente encantada com a Dr Marcela, a melhor médica que já me consultei 🙏🏼🥰',
    name: 'Hadassa DeSouza',
    role: 'Paciente',
  },
  {
    text: 'Tive a feliz oportunidade de fazer meu pré natal e parto com ela, e foi a melhor escolha que fiz. Sempre muito atenciosa comigo em todo tempo, me fazendo sentir segura durante todo processo da gestação.',
    name: 'Natália Barros',
    role: 'Paciente',
  },
];

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="py-16 sm:py-24 bg-gradient-to-br from-[#613C45] to-[#7D4D5A]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium inline-block mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            O Que Minhas Pacientes Dizem
          </h2>
          <p className="text-lg text-white/90">
            A confiança e satisfação das minhas pacientes são a minha maior realização. Veja o que
            elas têm a dizer sobre o atendimento.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 shadow-xl transform hover:-translate-y-2 transition-all duration-300 h-full flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <Quote size={32} className="text-[#D88B9B]" />
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={18} className="text-[#D88B9B] fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 flex-grow">{t.text}</p>
              <div className="pt-6 border-t border-gray-200">
                <p className="font-semibold text-[#613C45]">{t.name}</p>
                <p className="text-sm text-gray-600">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#613C45] px-10 py-4 rounded-full hover:bg-[#D88B9B] hover:text-white transition-all duration-300 font-medium shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Quero Fazer Parte Dessas Histórias
          </a>
        </div>
      </div>
    </section>
  );
}

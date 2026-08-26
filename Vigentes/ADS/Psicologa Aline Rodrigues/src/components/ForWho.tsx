import { Check } from 'lucide-react';

export default function ForWho() {
  const items = [
    'Sofre com ansiedade e/ou ataques de pânico', // Item corrigido
    'Sente que se autossabota constantemente',
    'Luta contra perfeccionismo e procrastinação',
    'Quer melhorar sua autoestima e confiança',
    'Busca autoconhecimento e crescimento pessoal',
    'Precisa de ajuda emocional em um momento difícil',
    'Mora fora do Brasil e busca atendimento em português',
    'Valoriza um trabalho sério, ético e baseado em ciência',
  ];

  return (
    <section id="forwho" className="py-20 bg-beige-light overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="text-center mb-12">
          {/* Título com tamanho reduzido para caber em uma linha */}
          <h2 className="text-3xl md:text-4xl font-bold text-text-main">
            A Terapia é Para Você Que:
          </h2>
        </div>

        {/* Lista reorganizada em grid para melhor visualização sem a coluna lateral */}
        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm mb-10">
          <ul className="grid md:grid-cols-2 gap-x-12 gap-y-4">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brown-dark flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-text-main font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Botão Adicionado */}
        <div className="text-center">
          <a
            href="https://wa.me/556282702366?text=Olá, gostaria de saber mais sobre como funciona a terapia."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-brown-dark text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all hover:-translate-y-0.5 text-lg"
          >
            Agendar consulta
          </a>
        </div>

      </div>
    </section>
  );
}
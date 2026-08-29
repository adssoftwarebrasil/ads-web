import { Brain } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-brown-dark/10 rounded-full mb-6">
            <Brain className="w-8 h-8 text-brown-dark" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-text-main mb-6">
            Terapia Cognitivo-Comportamental
          </h2>
        </div>

        {/* Conteúdo do Texto */}
        <div className="space-y-6 text-lg text-beige-dark leading-relaxed text-justify md:text-center">
          <p>
            A Terapia Cognitivo-Comportamental (TCC) é uma abordagem eficaz não só para 
            transtornos psicológicos — como ansiedade, depressão, TOC, fobias e bipolaridade — 
            mas também para dificuldades do dia a dia, como <strong>autoestima baixa, procrastinação, 
            conflitos nos relacionamentos, inseguranças e padrões repetitivos de 
            comportamento</strong>.
          </p>

          <p>
            Baseada em evidências científicas, a TCC ajuda a identificar e modificar pensamentos e 
            comportamentos que mantêm o sofrimento, <strong>promovendo mudanças práticas,</strong> claras e 
            sustentáveis. É uma terapia estruturada, objetiva e <strong>focada em resultados.</strong>
          </p>

          <p>
            Se você quer superar desafios emocionais, mudar hábitos, fortalecer sua autoestima e 
            desenvolver estratégias mais saudáveis para sua vida, a <strong>TCC é uma das abordagens 
            mais eficazes para te ajudar nesse caminho.</strong>
          </p>
        </div>

        {/* Botão de Ação (Mantido para conversão) */}
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/556282702366?text=Olá, gostaria de saber mais sobre como funciona a terapia."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-brown-dark text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all hover:-translate-y-0.5"
          >
           Agendar consulta
          </a>
        </div>

      </div>
    </section>
  );
}
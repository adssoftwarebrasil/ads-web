import { Shield, Award, Clock } from 'lucide-react';

export default function CTASection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-brown-dark to-beige-medium overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Pronto para Transformar sua Vida?
        </h2>

        <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
          Dê o primeiro passo rumo ao seu bem-estar emocional. Agende sua primeira sessão e comece
          sua jornada de autoconhecimento.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="https://wa.me/556282702366?text=Olá, gostaria de saber mais sobre como funciona a terapia."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-brown-dark px-8 py-4 rounded-lg font-semibold hover:shadow-2xl transition-all hover:-translate-y-1"
          >
            Agendar pelo WhatsApp
          </a>
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-brown-dark transition-all"
          >
            Conhecer Mais
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/90">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            <span>Atendimento sigiloso e ético</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5" />
            <span>Profissional registrada no CRP</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span>Mais de 7 anos de experiência</span>
          </div>
        </div>
      </div>
    </section>
  );
}

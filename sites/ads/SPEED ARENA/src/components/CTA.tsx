import { MessageCircle, Mail } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://storage.lucasmendes.dev/site-sp/speedarena%2Fspeed%205%20(1)_ultra.webp)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary/90 to-primary-light/85"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-accent-green-vibrant/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse-slow"></div>
        <div className="absolute w-96 h-96 bg-accent-pink/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-up">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight text-shadow">
            Pronto para Começar<br />Sua Jornada?
          </h2>

          <p className="text-2xl text-white/90">
            Entre em contato e garanta sua vaga nas próximas turmas!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <a
              href="https://wa.me/5562983092884"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-accent-green-vibrant text-primary-dark px-10 py-5 rounded-full text-xl font-bold hover:scale-105 hover:shadow-2xl transition-all inline-flex items-center space-x-3"
            >
              <MessageCircle className="w-6 h-6 group-hover:animate-bounce" />
              <span>(62) 98309-2884</span>
            </a>

            <a
              href="mailto:speedarena94@gmail.com"
              className="group border-3 border-white text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-white hover:text-primary transition-all inline-flex items-center space-x-3"
            >
              <Mail className="w-6 h-6 group-hover:animate-bounce" />
              <span>speedarena94@gmail.com</span>
            </a>
          </div>

          <div className="pt-8">
            <p className="text-lg text-white/80">
              Não perca tempo! As turmas preenchem rapidamente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

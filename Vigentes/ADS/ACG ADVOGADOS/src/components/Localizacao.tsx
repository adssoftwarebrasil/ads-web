import { MapPin, Navigation } from 'lucide-react';

const cidades = ['Araguaína - TO', 'Gurupi - TO', 'Taguatinga - TO', 'Atendemos todo o Estado do Tocantins'];

export default function Localizacao() {
  return (
    <section className="py-24 bg-[rgb(16,17,12)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[rgb(175,145,93)] font-bold text-sm tracking-widest uppercase">Localização</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Visite Nosso Escritório</h2>
          <p className="text-xl text-[rgb(199,195,192)] max-w-3xl mx-auto leading-relaxed">
            Estamos localizados no coração de Palmas, prontos para atendê-lo
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-[rgb(30,31,27)] border border-[rgb(175,145,93)]/20 rounded-xl p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-[rgb(175,145,93)]/20 p-3 rounded-lg flex-shrink-0">
                  <MapPin size={28} className="text-[rgb(175,145,93)]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Endereço Principal</h3>
                  <p className="text-[rgb(199,195,192)] leading-relaxed">
                    ARSE 23 (208 SUL), Al. 15, QI H, Lote 38, Casa 3<br />
                    Plano Diretor Sul<br />
                    Palmas - TO, 77020-574
                  </p>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/dir//ACG+Advogados/@-10.1962969,-48.3191639,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 w-full bg-[rgb(175,145,93)] text-[rgb(16,17,12)] px-6 py-3 rounded-lg hover:bg-[rgb(199,195,192)] transition-all duration-300 font-bold"
              >
                <Navigation size={20} />
                <span>Como Chegar</span>
              </a>
            </div>
            <div className="bg-[rgb(30,31,27)] border border-[rgb(175,145,93)]/20 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Outras Cidades</h3>
              <div className="space-y-3 text-[rgb(199,195,192)]">
                {cidades.map((c) => (
                  <p key={c} className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-[rgb(175,145,93)] rounded-full"></span>
                    <span>{c}</span>
                  </p>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-r from-[rgb(175,145,93)] to-[rgb(175,145,93)]/90 rounded-xl p-8 text-[rgb(16,17,12)]">
              <h3 className="text-2xl font-bold mb-4">Prefere um Atendimento Online?</h3>
              <p className="mb-6 leading-relaxed font-medium">
                Oferecemos consultas por videoconferência para sua comodidade. Entre em contato e agende.
              </p>
              <a
                href="http://wa.me/556399974853"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[rgb(16,17,12)] text-[rgb(175,145,93)] px-6 py-3 rounded-lg hover:bg-[rgb(16,17,12)]/90 transition-all duration-300 font-bold"
              >
                Agendar Consulta Online
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-[rgb(175,145,93)]/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.807323727301!2d-48.319163924966084!3d-10.196296889919362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9324cd002004bebd%3A0x9fff8cea2e501847!2sACG%20Advogados!5e0!3m2!1spt-BR!2sbr!4v1768239510079!5m2!1spt-BR!2sbr"
                width="100%"
                height="600"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

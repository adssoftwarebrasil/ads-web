import { MapPin } from 'lucide-react';

export default function MapSection() {
  return (
    <section className="bg-[#F5F9FC] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-[#000000] mb-4">
            Nossa Localização
          </h2>
          <p className="text-[#666666] text-lg">
            Rua João Reffo, 872 - Santa Felicidade, Curitiba/PR
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.8753245876243!2d-49.33449!3d-25.4156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce3d8f8d8f8d8%3A0x1234567890!2sRua%20Jo%C3%A3o%20Reffo%2C%20872%20-%20Santa%20Felicidade%2C%20Curitiba%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de localização Balanças Nova Era"
            />
          </div>

          <div className="text-center mt-8">
            <a
              href="https://www.google.com/maps/dir//Rua+Jo%C3%A3o+Reffo,+872+-+Santa+Felicidade,+Curitiba+-+PR"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#0162B1] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#003D6B] transition-all transform hover:scale-105 shadow-lg"
            >
              <MapPin size={24} />
              Como Chegar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

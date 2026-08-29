import { MapPin, Facebook, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#fdfaff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2e3094] mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-[#21201e]">
            Estamos prontos para atender você e sua empresa
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-[#2e3094] to-[#1a1d5c] p-3 rounded-lg flex-shrink-0">
                  <MapPin className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#2e3094] mb-3">Endereço</h3>
                  <p className="text-[#21201e] text-lg leading-relaxed">
                    Fl 27, Qd 14 - Lt 22<br />
                    Vila Militar Pres. Medice<br />
                    Marabá - PA<br />
                    CEP: 68509-230
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#2e3094] to-[#1a1d5c] rounded-xl p-8 shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-6">Redes Sociais</h3>
              <div className="space-y-4">
                <a
                  href="https://www.instagram.com/vetorassessoriacontabil/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-all transform hover:scale-105"
                >
                  <Instagram size={32} className="text-[#f0851a]" />
                  <div>
                    <p className="font-semibold">Instagram</p>
                    <p className="text-blue-200">@vetorassessoriacontabil</p>
                  </div>
                </a>

                <a
                  href="https://www.facebook.com/vetorcontabil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-all transform hover:scale-105"
                >
                  <Facebook size={32} className="text-[#f0851a]" />
                  <div>
                    <p className="font-semibold">Facebook</p>
                    <p className="text-blue-200">vetorcontabil</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d269.9387094625502!2d-49.0985238699579!3d-5.3460262792610695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d650270b654c3c1%3A0xcacd985f874b7b62!2sVetorcontabil%20Contabilidade!5e1!3m2!1spt-BR!2sbr!4v1768308252606!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Vetorcontabil"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

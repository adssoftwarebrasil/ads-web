import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const logo =
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=aeafreios%2Flogo%20(2).jpg&version_id=null';

const brands = ['VOLVO', 'SCANIA', 'MERCEDES', 'IVECO', 'DAF', 'MAN'];

export default function Footer() {
  return (
    <footer className="bg-[rgb(8,36,75)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-6">Trabalhamos com as Principais Marcas</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50 grayscale">
            {brands.map((b) => (
              <div key={b} className="text-3xl font-bold">
                {b}
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-white/20 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <img src={logo} alt="AEA Freios" className="h-16 mb-4" />
              <p className="text-gray-300 leading-relaxed">
                Referência nacional em diagnóstico e reparo de sistemas ABS e freios para frota pesada. Tecnologia de
                ponta aliada a 13 anos de experiência.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Contato</h4>
              <div className="space-y-3">
                <a
                  href="tel:+5585987753852"
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition"
                >
                  <Phone width={20} height={20} />
                  <span>(85) 98775-3852</span>
                </a>
                <a
                  href="mailto:contato@aeafreios.com.br"
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition"
                >
                  <Mail width={20} height={20} />
                  <span>contato@aeafreios.com.br</span>
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Rua%20Generoso%20de%20Fran%C3%A7a%2C%20Paupina%2C%20Fortaleza%20-%20CE%2C%2060874-350"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 text-gray-300 hover:text-white transition"
                >
                  <MapPin className="lucide lucide-map-pin flex-shrink-0 mt-1" width={20} height={20} />
                  <span>Rua Generoso de França - Paupina, Fortaleza - CE, 60874-350</span>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Horário de Atendimento</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Clock className="lucide lucide-clock flex-shrink-0 mt-1" width={20} height={20} />
                  <div>
                    <p className="font-semibold">Segunda a Sexta</p>
                    <p className="text-gray-300">08:00 - 18:00</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="lucide lucide-clock flex-shrink-0 mt-1" width={20} height={20} />
                  <div>
                    <p className="font-semibold">Sábado</p>
                    <p className="text-gray-300">08:00 - 12:00</p>
                  </div>
                </div>
                <div className="mt-4 bg-[rgb(230,10,12)] rounded-lg p-3">
                  <p className="text-sm font-semibold">Atendimento de Emergência</p>
                  <p className="text-sm text-gray-100">Disponível 24/7 via WhatsApp</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-gray-400 text-sm">
            <p>© 2026 AEA Freios. Todos os direitos reservados.</p>
            <p className="mt-2">Uma das 3 empresas especialistas em ABS do Brasil</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

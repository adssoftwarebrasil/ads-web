import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-fade-in-left">
            <div className="rounded-3xl overflow-hidden shadow-2xl h-full min-h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.0234!2d-49.2627!3d-25.4449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce45c6c7f6b8b%3A0x5e6c5e0e5e0e5e0e!2sAv.%20Get%C3%BAlio%20Vargas%2C%201353%20-%20Rebou%C3%A7as%2C%20Curitiba%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
          <div className="animate-fade-in-up space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#035772] mb-4">VISITE NOSSA LOJA</h2>
              <p className="text-xl text-gray-600">Venha conhecer pessoalmente nossos produtos</p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-md hover:shadow-lg transition-all">
                <div className="bg-[#e0fd2c] p-3 rounded-full">
                  <MapPin width={24} height={24} className="text-[#035772]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#035772] text-lg mb-2">ENDEREÇO</h3>
                  <p className="text-gray-700">
                    Av Getúlio Vargas, 1353
                    <br />
                    Bairro Rebouças
                    <br />
                    Curitiba - Paraná
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-md hover:shadow-lg transition-all">
                <div className="bg-[#e0fd2c] p-3 rounded-full">
                  <Clock width={24} height={24} className="text-[#035772]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#035772] text-lg mb-2">HORÁRIOS DE ATENDIMENTO</h3>
                  <p className="text-gray-700">
                    Segunda a Sexta: 9h às 18h
                    <br />
                    Sábado: 9h30 às 13h30
                    <br />
                    Domingo: Fechado
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-md hover:shadow-lg transition-all">
                <div className="bg-[#e0fd2c] p-3 rounded-full">
                  <Phone width={24} height={24} className="text-[#035772]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#035772] text-lg mb-2">TELEFONES</h3>
                  <p className="text-gray-700">
                    <a href="tel:+5541988248004" className="hover:text-[#035772] transition-colors">
                      (41) 98824-8004
                    </a>
                    <br />
                    <a href="tel:+5541988240021" className="hover:text-[#035772] transition-colors">
                      (41) 98824-0021
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-md hover:shadow-lg transition-all">
                <div className="bg-[#e0fd2c] p-3 rounded-full">
                  <Mail width={24} height={24} className="text-[#035772]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#035772] text-lg mb-2">E-MAIL</h3>
                  <p className="text-gray-700">
                    <a
                      href="mailto:imovcuritiba@gmail.com"
                      className="hover:text-[#035772] transition-colors"
                    >
                      imovcuritiba@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

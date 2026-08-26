import { Phone, MapPin, Clock, Award } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/feira%20fios%2Fimg%2Flogo-com-texto-sem-fundo.webp"
              alt="Feira Fios"
              className="h-16 w-auto mb-6"
            />
            <p className="text-gray-400 leading-relaxed mb-4">
              Especialistas em manutenção e rebobinagem de motores elétricos com 15 anos de experiência.
            </p>
            <div className="flex items-center gap-2 text-[#01904B]">
              <Award className="w-5 h-5" />
              <span className="font-semibold">Oficina Autorizada Mercosul</span>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Serviços</h3>
            <ul className="space-y-3">
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-[#01904B] transition-colors">
                  Rebobinagem de Motores
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-[#01904B] transition-colors">
                  Manutenção Preventiva
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-[#01904B] transition-colors">
                  Manutenção Corretiva
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-[#01904B] transition-colors">
                  Soluções Personalizadas
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#01904B] flex-shrink-0 mt-1" />
                <div>
                  <a href="tel:7536263728" className="text-gray-400 hover:text-white transition-colors block">
                    (75) 3626-3728
                  </a>
                  <a href="tel:75991231578" className="text-gray-400 hover:text-white transition-colors block">
                    (75) 99123-1578
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#01904B] flex-shrink-0 mt-1" />
                <p className="text-gray-400">
                  R. Rio de Contas, 255<br />
                  Brasília, Feira de Santana - BA<br />
                  CEP: 44088-396
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Horário de Funcionamento</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#01904B] flex-shrink-0 mt-1" />
                <div className="text-gray-400">
                  <p className="font-semibold text-white mb-2">Segunda a Quinta</p>
                  <p>07:00 às 18:00</p>
                  <p className="font-semibold text-white mt-3 mb-2">Sexta-feira</p>
                  <p>07:00 às 17:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              {currentYear} Feira Fios LTDA. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-center md:text-right">
              CNPJ: 20.822.462/0001-00
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

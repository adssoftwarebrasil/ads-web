import { Instagram, Facebook, Linkedin, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[rgb(28,58,122)] to-[rgb(26,21,92)] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/megga%20auto%20pecas/img/logo-quadrada.png"
              alt="Megga Auto Peças"
              className="h-20 w-auto mb-6"
            />
            <p className="text-gray-300 mb-6 leading-relaxed">
              Distribuidor de peças para caminhões, ônibus, picapes, vans e máquinas.
              13 anos de excelência e confiança.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/megga_autopecas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[rgb(216,32,38)] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/p/Megga-Auto-Pe%C3%A7as-100064029551019"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[rgb(216,32,38)] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://br.linkedin.com/company/megga-auto-pecas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[rgb(216,32,38)] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Matriz - Aracaju/SE</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[rgb(216,32,38)] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300">Av. Chanceler Osvaldo Aranha, 161</p>
                  <p className="text-gray-300">Novo Paraíso, Aracaju - SE</p>
                  <p className="text-gray-300">CEP: 49085-100</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[rgb(216,32,38)] flex-shrink-0" />
                <a
                  href="tel:7932411388"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  (79) 3241-1388
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[rgb(216,32,38)] flex-shrink-0" />
                <a
                  href="https://wa.me/5579998036999"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  (79) 99803-6999
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Filial - Maceió/AL</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[rgb(216,32,38)] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300">Av. Menino Marcelo, 1040</p>
                  <p className="text-gray-300">Cidade Universitária, Maceió - AL</p>
                  <p className="text-gray-300">CEP: 57073-495</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[rgb(216,32,38)] flex-shrink-0" />
                <a
                  href="tel:8221212750"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  (82) 2121-2750
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[rgb(216,32,38)] flex-shrink-0" />
                <a
                  href="https://wa.me/5582982102088"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  (82) 98210-2088
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Informações</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[rgb(216,32,38)] flex-shrink-0" />
                <a
                  href="mailto:meggaautopecas@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  meggaautopecas@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[rgb(216,32,38)] flex-shrink-0 mt-1" />
                <div className="text-gray-300">
                  <p className="font-semibold text-white mb-1">Horário de Atendimento</p>
                  <p>Seg - Sex: 08:00 às 18:00</p>
                  <p>Sábado: 08:00 às 12:00</p>
                  <p>Domingo: Fechado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm text-center md:text-left">
              © 2026 Megga Auto Peças. Todos os direitos reservados.
            </p>
            <p className="text-gray-300 text-sm text-center md:text-right">
              Desenvolvido com dedicação para oferecer a melhor experiência.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

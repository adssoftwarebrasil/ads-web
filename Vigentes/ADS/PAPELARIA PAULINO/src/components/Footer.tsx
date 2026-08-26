import { Instagram, Facebook, Phone, MapPin, Clock } from 'lucide-react';

const quickLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

const hours = [
  { day: 'Segunda a Sexta', time: '08:15 - 17:45' },
  { day: 'Sábado', time: '08:30 - 12:30' },
  { day: 'Domingo e Feriados', time: 'Fechado' },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[rgb(61,61,147)] to-[rgb(41,41,127)] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=papelaria%20paulino%2Fimg%2Flogo.jpg&version_id=null"
              alt="Papelaria Paulino"
              className="h-16 w-auto mb-4"
            />
            <p className="text-blue-100 leading-relaxed mb-4">
              Sua papelaria de confiança em Campinas desde 1940. Qualidade, tradição e atendimento
              diferenciado.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/papelaria.paulino/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm p-3 rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/papelariapaulino/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm p-3 rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-blue-100 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone size={20} className="mt-1 flex-shrink-0" />
                <div>
                  <a
                    href="tel:1937399090"
                    className="text-blue-100 hover:text-white transition-colors block"
                  >
                    (19) 3739-9090
                  </a>
                  <a
                    href="https://wa.me/5519982880081"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-100 hover:text-white transition-colors block"
                  >
                    (19) 98288-0081
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <p className="text-blue-100">
                  R. Dr. Quirino, 1234 - Centro
                  <br />
                  Campinas - SP, 13015-080
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Horário de Funcionamento</h3>
            <ul className="space-y-3">
              {hours.map((h) => (
                <li key={h.day} className="flex items-start space-x-3">
                  <Clock size={20} className="mt-1 flex-shrink-0" />
                  <div className="text-blue-100">
                    <p className="font-semibold text-white">{h.day}</p>
                    <p>{h.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-blue-100 text-center md:text-left">
              © 2026 Papelaria Paulino LTDA. Todos os direitos reservados.
            </p>
            <p className="text-blue-100 text-center md:text-right">CNPJ: 45.988.227/0001-25</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

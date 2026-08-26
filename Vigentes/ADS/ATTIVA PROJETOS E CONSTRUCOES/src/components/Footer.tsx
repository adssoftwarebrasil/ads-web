import { Phone, Mail, Clock, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Vim pelo site e gostaria de solicitar um orçamento para meu projeto.');
    window.open(`https://wa.me/5562992287419?text=${message}`, '_blank');
  };

  const services = [
    'Projetos Arquitetônicos',
    'Projetos Estruturais',
    'Projetos Elétricos',
    'Projetos Hidrossanitários',
    'Aprovação em Órgãos Públicos',
    'Desmembramento e Remembramento',
  ];

  return (
    <footer id="contato" className="bg-primary-blue-dark text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/attiva%2Flogomarca.png"
              alt="ATTIVA Projetos e Construções"
              className="h-12 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-gray-300 mb-6 leading-relaxed">
              Há 15 anos transformando sonhos em projetos de engenharia e arquitetura na Grande Goiânia.
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-primary-orange-light transition-colors"
            >
              <Instagram size={24} />
              <span>Siga-nos no Instagram</span>
            </a>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Serviços</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#servicos"
                    className="text-gray-300 hover:text-primary-orange-light transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={20} className="flex-shrink-0 mt-1 text-primary-orange-light" />
                <div>
                  <p className="text-sm text-gray-400 mb-1">Telefone</p>
                  <a href="tel:+556230971648" className="text-gray-300 hover:text-primary-orange-light transition-colors">
                    (62) 3097-1648
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle size={20} className="flex-shrink-0 mt-1 text-primary-orange-light" />
                <div>
                  <p className="text-sm text-gray-400 mb-1">WhatsApp</p>
                  <button
                    onClick={handleWhatsAppClick}
                    className="text-gray-300 hover:text-primary-orange-light transition-colors text-left"
                  >
                    (62) 99228-7419
                  </button>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="flex-shrink-0 mt-1 text-primary-orange-light" />
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email</p>
                  <a
                    href="mailto:fabricio@attivaprojetos.com.br"
                    className="text-gray-300 hover:text-primary-orange-light transition-colors break-all"
                  >
                    fabricio@attivaprojetos.com.br
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Horário de Atendimento</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Clock size={20} className="flex-shrink-0 mt-1 text-primary-orange-light" />
                <div>
                  <p className="text-gray-300">Segunda a Sábado</p>
                  <p className="text-sm text-gray-400">08h às 17h</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={20} className="flex-shrink-0 mt-1 text-primary-orange-light" />
                <div>
                  <p className="text-gray-300">Domingo</p>
                  <p className="text-sm text-gray-400">08h às 17h</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2024 ATTIVA Projetos e Construções. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary-orange-light transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-orange-light transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

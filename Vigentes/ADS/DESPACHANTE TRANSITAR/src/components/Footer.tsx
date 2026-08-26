import { Phone, Mail, MapPin, Facebook, Instagram, CheckCircle } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const highlights = [
    '20 anos de experiência no mercado',
    'Atendimento personalizado e eficiente',
    'Soluções rápidas para documentação de veículos',
    'Especialização em isenção de IPVA para PCD'
  ];

  const services = [
    'Licenças AET',
    'Cadastro ANTT',
    'Isenção IPVA PCD',
    'Licenciamento Anual',
    'Segunda Via CRV',
    'Transferência',
    'Primeiro Emplacamento'
  ];

  return (
    <footer className="bg-secondary text-white pt-20 pb-8 relative overflow-hidden diagonal-pattern border-t-4 border-primary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/despachante%20transitar%2Fimgi_1_logo-4.png"
              alt="Despachante Transitar"
              className="h-16 w-auto object-contain mb-6 brightness-0 invert"
            />
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              A DESPACHANTE TRANSITAR foi fundada em outubro de 2005 pela empresária Luciana Marques de Arruda, com o objetivo de otimizar o tempo de seus clientes.
            </p>
            <div className="space-y-2">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-white/70 text-xs">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Navegação</h3>
            <nav className="space-y-3">
              <button
                onClick={() => scrollToSection('inicio')}
                className="block text-blue-soft hover:text-accent hover:pl-2 transition-all"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="block text-blue-soft hover:text-accent hover:pl-2 transition-all"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('servicos')}
                className="block text-blue-soft hover:text-accent hover:pl-2 transition-all"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('vantagens')}
                className="block text-blue-soft hover:text-accent hover:pl-2 transition-all"
              >
                Vantagens
              </button>
              <button
                onClick={() => scrollToSection('depoimentos')}
                className="block text-blue-soft hover:text-accent hover:pl-2 transition-all"
              >
                Depoimentos
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="block text-blue-soft hover:text-accent hover:pl-2 transition-all"
              >
                Contato
              </button>
            </nav>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Nossos Serviços</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-blue-soft text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Fale Conosco</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Phone size={18} className="text-accent" />
                  <span className="font-semibold">Telefones</span>
                </div>
                <a href="tel:+556699539486" className="block text-blue-soft hover:text-accent transition-colors text-sm">
                  (66) 9 9953-9486
                </a>
                <a href="tel:+556634222732" className="block text-blue-soft hover:text-accent transition-colors text-sm">
                  (66) 3422-2732
                </a>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Mail size={18} className="text-accent" />
                  <span className="font-semibold">E-mail</span>
                </div>
                <a href="mailto:despachantetransitarmt@gmail.com" className="text-blue-soft hover:text-accent transition-colors text-sm break-all">
                  despachantetransitarmt@gmail.com
                </a>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={18} className="text-accent" />
                  <span className="font-semibold">Endereço</span>
                </div>
                <p className="text-blue-soft text-sm">
                  Rua presidente João Goulart, 22<br />
                  vila aurora II, Rondonópolis - MT
                </p>
              </div>

              <div>
                <p className="font-semibold mb-3">Redes Sociais</p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/15 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-sm text-center md:text-left">
            © 2024 Despachante Transitar. Todos os direitos reservados.
          </p>
          <p className="text-white/70 text-sm text-center md:text-right">
            Desenvolvido com tecnologia moderna
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

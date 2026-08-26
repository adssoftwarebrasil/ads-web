import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-[#1e1e42] text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#c9a962] to-[#4a90a4] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <div>
                <div className="text-white font-bold text-xl leading-tight">Protons</div>
                <div className="text-white/60 text-xs">Consultoria</div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Especialistas em contabilidade e planejamento tributário desde 2010.
            </p>
            <a
              href="https://instagram.com/protonsconsultoriaa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-white/70 hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span className="text-sm">@protonsconsultoriaa</span>
            </a>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Serviços</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Contabilidade de Alta Performance
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Planejamento Tributário
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Recuperação de Créditos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Consultoria Financeira
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Compliance e Integridade
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#c9a962] flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm leading-relaxed">
                  Av. Deputado Jamel Cecilio, Qd. B34, Lt 1A, Sala 1004<br />
                  Jardim Goiás, Goiânia – GO<br />
                  CEP 74810-100
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#c9a962] flex-shrink-0 mt-0.5" />
                <div className="text-white/70 text-sm">
                  <div>(62) 99800-5803</div>
                  <div>(62) 99689-2965</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#c9a962] flex-shrink-0 mt-0.5" />
                <div className="text-white/70 text-sm">
                  <div className="break-all">fernando@protonsconsultoria.com</div>
                  <div className="break-all">wilderson@protonsconsultoria.com</div>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Horário de Atendimento</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-[#c9a962] flex-shrink-0 mt-0.5" />
                <div className="text-white/70 text-sm">
                  <div className="font-semibold text-white mb-2">Segunda a Sexta</div>
                  <div>08:00 às 18:00</div>
                  <div className="font-semibold text-white mt-4 mb-2">Sábado e Domingo</div>
                  <div>Fechado</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/50 text-sm text-center md:text-left">
            © 2024 Protons Consultoria. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-sm">
            <button className="text-white/50 hover:text-white transition-colors">
              Política de Privacidade
            </button>
            <button className="text-white/50 hover:text-white transition-colors">
              Termos de Uso
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Home, Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
const scrollToAcomodacoes = () =>
  document.getElementById('acomodacoes')?.scrollIntoView({ behavior: 'smooth' });

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                <Home className="lucide lucide-home w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Aluga Goiânia</h3>
                <p className="text-emerald-300 text-sm">Aluguel por temporada</p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed max-w-md">
              Oferecemos as melhores acomodações para sua estadia em Goiânia. Cada imóvel é
              cuidadosamente selecionado para garantir conforto, praticidade e uma experiência
              única na capital goiana.
            </p>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300">
                <Instagram className="lucide lucide-instagram w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300">
                <Facebook className="lucide lucide-facebook w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-emerald-300">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={scrollToTop}
                  className="text-slate-300 hover:text-emerald-300 transition-colors duration-300 flex items-center space-x-2"
                >
                  <span>Início</span>
                </button>
              </li>
              <li>
                <button
                  onClick={scrollToAcomodacoes}
                  className="text-slate-300 hover:text-emerald-300 transition-colors duration-300 flex items-center space-x-2"
                >
                  <span>Acomodações</span>
                </button>
              </li>
              <li>
                <button className="text-slate-300 hover:text-emerald-300 transition-colors duration-300 flex items-center space-x-2">
                  <span>Contato</span>
                </button>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-emerald-300">Contato</h4>
            <ul className="space-y-4">
              <li>
                <button className="text-slate-300 hover:text-emerald-300 transition-colors duration-300 flex items-center space-x-3">
                  <Phone className="lucide lucide-phone w-5 h-5 flex-shrink-0" />
                  <span>(62) 99695-9797</span>
                </button>
              </li>
              <li className="flex items-center space-x-3 text-slate-300">
                <Mail className="lucide lucide-mail w-5 h-5 flex-shrink-0" />
                <span>contato@alugagoiania.com.br</span>
              </li>
              <li className="flex items-start space-x-3 text-slate-300">
                <MapPin className="lucide lucide-map-pin w-5 h-5 flex-shrink-0 mt-1" />
                <span>
                  Goiânia, Goiás
                  <br />
                  Brasil
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700/50 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-slate-400 text-sm">
              © 2026 Aluga Goiânia. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <button className="hover:text-emerald-300 transition-colors duration-300">
                Política de Privacidade
              </button>
              <button className="hover:text-emerald-300 transition-colors duration-300">
                Termos de Uso
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

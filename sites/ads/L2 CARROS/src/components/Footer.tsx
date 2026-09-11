import { Phone, Mail, MapPin, Clock, Heart } from 'lucide-react';

const menuItems = ['Sobre Nós', 'Serviços', 'Veículos', 'Avaliações', 'Contato'];
const menuIds = ['sobre', 'servicos', 'veiculos', 'avaliacoes', 'contato'];

export default function Footer() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/l2%20carros%2Fimg%2Flogo.webp"
              alt="L2 Carros"
              className="h-16 w-auto mb-6"
            />
            <p className="text-gray-400 leading-relaxed mb-6">
              Transformando sonhos em realidade desde 2021, com ética, transparência e mais de 20 anos de experiência no setor automotivo.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/l2carros/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-purple-600 to-pink-500 p-3 rounded-lg hover:scale-110 transition-transform duration-300"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100063795782070"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 p-3 rounded-lg hover:scale-110 transition-transform duration-300"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://wa.me/5537999236447"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 p-3 rounded-lg hover:scale-110 transition-transform duration-300"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Menu</h3>
            <ul className="space-y-3">
              {menuItems.map((label, i) => (
                <li key={label}>
                  <button
                    onClick={() => scrollTo(menuIds[i])}
                    className="text-gray-400 hover:text-red-600 transition-colors duration-300"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contato</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/5537999236447"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-400 hover:text-red-600 transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>(37) 99923-6447</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:l2.carross@gmail.com"
                  className="flex items-start gap-3 text-gray-400 hover:text-red-600 transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>l2.carross@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/place/L2+CARROS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-400 hover:text-red-600 transition-colors duration-300"
                >
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>Av. Paraná, 145 - Planalto, Divinópolis - MG</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Horário</h3>
            <div className="flex items-start gap-3 text-gray-400">
              <Clock className="w-5 h-5 mt-1 flex-shrink-0" />
              <div>
                <p className="mb-2">Segunda a Sexta:</p>
                <p className="font-semibold text-white mb-4">08:00 - 18:00</p>
                <p className="mb-2">Sábado:</p>
                <p className="font-semibold text-white">08:00 - 12:00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2 flex-wrap">
            2026 L2 Carros. Todos os direitos reservados. Feito com
            <Heart className="w-4 h-4 text-red-600 fill-red-600" />
            em Divinópolis - MG
          </p>
        </div>
      </div>
    </footer>
  );
}

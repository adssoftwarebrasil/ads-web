import { MapPin, Phone, Clock, Instagram, Facebook, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#230015] to-[#350020] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=Biolune%20cosm%C3%A9ticos%20e%20beleza%2Flogotipo-biolune-sem-fundo.webp&version_id=null"
              alt="Biolune"
              className="h-16 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-white/70 leading-relaxed mb-6">
              Sua loja completa de cosméticos e beleza em Goiânia. Qualidade, variedade e os melhores preços.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linktr.ee/Biolune"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[#c40278] p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linktr.ee/Biolune"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[#c40278] p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5562999597617"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[#c40278] p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-[#f4ccd4]">Loja Negrão de Lima</h3>
            <div className="space-y-4 text-white/70">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#c40278] flex-shrink-0 mt-1" />
                <div className="text-sm">
                  <p>Rua Roberto Valadares esq. com</p>
                  <p>Senador Pericles, Qd 32, Lote 13, nº 508</p>
                  <p>Setor Negrão de Lima</p>
                  <p>CEP 74650-270</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#c40278] flex-shrink-0" />
                <div className="text-sm">
                  <p>(62) 3223-1069</p>
                  <p>(62) 99959-7617</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-[#f4ccd4]">Loja Vera Cruz II</h3>
            <div className="space-y-4 text-white/70">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#c40278] flex-shrink-0 mt-1" />
                <div className="text-sm">
                  <p>Av. Frei Confalone</p>
                  <p>Qd 112, Lote 14A</p>
                  <p>Conjunto Vera Cruz II</p>
                  <p>CEP 74495-060</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#c40278] flex-shrink-0" />
                <div className="text-sm">
                  <p>(62) 3639-1570</p>
                  <p>(62) 98173-3003</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-[#f4ccd4]">Horário de Funcionamento</h3>
            <div className="space-y-4 text-white/70">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-[#c40278] flex-shrink-0 mt-1" />
                <div className="text-sm">
                  <p className="font-semibold text-white mb-2">Ambas as Lojas:</p>
                  <p>Segunda a Sexta: 09h às 19h</p>
                  <p>Sábado: 09h às 15h</p>
                  <p>Domingo: Fechado</p>
                </div>
              </div>
              <a
                href="https://linktr.ee/Biolune"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-[#c40278] hover:text-[#f4ccd4] font-semibold text-sm transition-colors"
              >
                <span>Nossas Redes Sociais</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {currentYear} Biolune Cosméticos e Beleza. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60">
              <button
                onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-[#c40278] transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-[#c40278] transition-colors"
              >
                Produtos
              </button>
              <button
                onClick={() => document.getElementById('lojas')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-[#c40278] transition-colors"
              >
                Lojas
              </button>
              <button
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-[#c40278] transition-colors"
              >
                Contato
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

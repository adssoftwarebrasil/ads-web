import { Instagram, MessageCircle, MapPin, Phone, Clock } from 'lucide-react';

const cities = [
  'Aracaju',
  'Itabaiana',
  'Lagarto',
  'Estância',
  'Nossa Sra. do Socorro',
  'São Cristóvão',
  'Tobias Barreto',
  'Simão Dias',
];

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-slate-300 pt-20 pb-10 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[rgb(26,91,178)] via-[rgb(240,53,41)] to-[rgb(26,91,178)]"></div>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <div className="inline-block bg-white p-3 rounded-xl shadow-lg shadow-white/5">
              <img
                src="https://storage.lucasmendes.dev/site-sp/goes%20flex%2Fimg%2Flogo-sem-fundo.png"
                alt="Goes Flex Logo"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-slate-400 leading-relaxed text-sm max-w-sm">
              Há 15 anos transformando noites de sono em qualidade de vida. Tecnologia terapêutica e consultoria
              especializada em Sergipe.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.instagram.com/drsonoaracaju/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 p-3 rounded-full hover:bg-[rgb(240,53,41)] hover:text-white transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="lucide lucide-instagram" width={20} height={20} />
              </a>
              <a
                href="http://wa.me/557988094313"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 p-3 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="lucide lucide-message-circle" width={20} height={20} />
              </a>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg border-l-4 border-[rgb(240,53,41)] pl-3">Fale Conosco</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <MapPin
                  className="lucide lucide-map-pin text-[rgb(240,53,41)] mt-1 group-hover:animate-bounce flex-shrink-0"
                  width={20}
                  height={20}
                />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=R.+Itaporanga,+351+-+Loja+C+-+Centro,+Aracaju+-+SE,+49010-140"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white transition-colors leading-relaxed"
                >
                  R. Itaporanga, 0351 - Loja C - Centro
                  <br />
                  Aracaju - SE, 49010-140
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone
                  className="lucide lucide-phone text-[rgb(240,53,41)] flex-shrink-0"
                  width={20}
                  height={20}
                />
                <a href="http://wa.me/557988094313" className="text-sm hover:text-white transition-colors">
                  (79) 98809-4313
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock
                  className="lucide lucide-clock text-[rgb(240,53,41)] mt-1 flex-shrink-0"
                  width={20}
                  height={20}
                />
                <div className="text-sm text-slate-400">
                  <p>Seg-Sex: 08h às 18h</p>
                  <p>Sábado: 08h às 12h</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg border-l-4 border-[rgb(26,91,178)] pl-3">Atendemos em</h3>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-3 text-sm">
              {cities.map((city) => (
                <li
                  key={city}
                  className="flex items-center gap-2 text-slate-400 hover:text-[rgb(26,91,178)] transition-colors cursor-default"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div>
                  {city}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div className="text-center md:text-left">
            <p className="font-medium text-slate-400">Goes Flex Colchões Terapêuticos</p>
            <p>CNPJ: 54.843.190/0001-38</p>
          </div>
          <div className="flex gap-6 cursor-default">
            <span>Termos de Uso</span>
            <span>Privacidade</span>
          </div>
          <div className="text-center md:text-right">
            <p>© 2026 Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

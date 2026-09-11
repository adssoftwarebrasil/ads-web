import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Avaliações', id: 'avaliacoes' },
  { label: 'Contato', id: 'contato' },
];

const serviceItems = [
  'Consulta Coloproctológica',
  'Colonoscopia',
  'Cirurgia a Laser (CO2)',
  'Videolaparoscopia',
  'Manometria Anorretal',
  'Tempo de Trânsito Colônico',
];

export default function Footer() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  const scrollServices = () => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-[#0d2a4d] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-5">
            <img
              src="https://storage.lucasmendes.dev/site-sp/dr%20sillas%20mourao/img/logo-sem-fundo.webp"
              alt="Dr. Sillas Mourão"
              className="h-16 w-auto object-contain"
            />
            <p className="text-white/60 text-sm leading-relaxed">
              Especialista em Coloproctologia em Governador Valadares. Atendimento humanizado com tecnologia de ponta
              para cuidar da sua saúde intestinal.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/dr.sillasmourao/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#009FC2] rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                <Instagram width={16} height={16} className="lucide lucide-instagram " />
              </a>
              <a
                href="https://www.facebook.com/dr.sillasmourao"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#009FC2] rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                <Facebook width={16} height={16} className="lucide lucide-facebook " />
              </a>
              <a
                href="https://wa.me/553399711500"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#25D366] rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div>
            <p className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Navegação</p>
            <ul className="flex flex-col gap-2.5">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-white/60 hover:text-[#009FC2] text-sm transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Serviços</p>
            <ul className="flex flex-col gap-2.5">
              {serviceItems.map((item) => (
                <li key={item}>
                  <button
                    onClick={scrollServices}
                    className="text-white/60 hover:text-[#009FC2] text-sm transition-colors cursor-pointer text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Contato</p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin
                  width={15}
                  height={15}
                  className="lucide lucide-map-pin text-[#009FC2] flex-shrink-0 mt-0.5"
                />
                <span className="text-white/60 text-sm leading-relaxed">
                  R. 7 de Setembro, 2716
                  <br />
                  Sala 1404 — Centro
                  <br />
                  Gov. Valadares — MG
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone width={15} height={15} className="lucide lucide-phone text-[#009FC2] flex-shrink-0" />
                <a
                  href="https://wa.me/553399711500"
                  className="text-white/60 hover:text-[#009FC2] text-sm transition-colors"
                >
                  (33) 9 9971-1500
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail width={15} height={15} className="lucide lucide-mail text-[#009FC2] flex-shrink-0" />
                <a
                  href="mailto:sillasmourao@gmail.com"
                  className="text-white/60 hover:text-[#009FC2] text-sm transition-colors"
                >
                  sillasmourao@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock
                  width={15}
                  height={15}
                  className="lucide lucide-clock text-[#009FC2] flex-shrink-0 mt-0.5"
                />
                <span className="text-white/60 text-sm leading-relaxed">
                  Seg – Sex: 08h às 18h
                  <br />
                  Sáb e Dom: Fechado
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row gap-3 justify-between items-center">
          <p className="text-white/40 text-xs text-center sm:text-left">
            © 2026 Dr. Sillas Mourão — Coloproctologista. Todos os direitos reservados.
          </p>
          <p className="text-white/30 text-xs">CRM MG | Especialista em Coloproctologia</p>
        </div>
      </div>
    </footer>
  );
}

import { MapPin, Phone, Mail, Instagram, Facebook, Heart } from 'lucide-react';

const courseLinks = [
  'Técnico em Enfermagem',
  'Técnico em Estética',
  'Técnico em Radiologia',
  'Técnico em Segurança do Trabalho',
  'Técnico em Agropecuária',
  'Instrumentação Cirúrgica',
];

export default function Footer() {
  return (
    <footer
      className="text-white"
      style={{
        background: 'linear-gradient(180deg, rgb(30,32,80) 0%, rgb(18,20,55) 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/cientec/img/logo.webp"
              alt="Cientec"
              className="h-12 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Referência em educação profissional no Mato Grosso há 24 anos. Transformando vidas por meio do ensino de qualidade.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/cientecmt/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110 hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #f09433, #dc2743, #bc1888)' }}
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center transition-all hover:scale-110 hover:bg-blue-500"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-5 text-white/90">Cursos</h4>
            <ul className="space-y-2.5">
              {courseLinks.map((c) => (
                <li key={c}>
                  <a
                    href="#cursos"
                    className="text-sm text-white/55 hover:text-white transition-colors"
                  >
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-5 text-white/90">Links Rápidos</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Início', href: '#inicio' },
                { label: 'Sobre o Cientec', href: '#sobre' },
                { label: 'Nossos Cursos', href: '#cursos' },
                { label: 'Galeria de Fotos', href: '#galeria' },
                { label: 'Vídeos', href: '#depoimentos-video' },
                { label: 'Contato', href: '#contato' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/55 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-5 text-white/90">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="flex-shrink-0 mt-0.5 text-white/40" />
                <span className="text-sm text-white/55 leading-snug">
                  R. das Azaléias, 2095 - St. Comercial, Sinop - MT, 78550-000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="flex-shrink-0 text-white/40" />
                <a
                  href="http://wa.me/556699893074"
                  className="text-sm text-white/55 hover:text-white transition-colors"
                >
                  (66) 9 9989-3074
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="flex-shrink-0 text-white/40" />
                <a
                  href="mailto:cientec_sinop@hotmail.com"
                  className="text-sm text-white/55 hover:text-white transition-colors break-all"
                >
                  cientec_sinop@hotmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Cientec — Centro Integrado de Ensino Técnico. Todos os direitos reservados.
          </p>
          <p className="text-xs text-white/30 flex items-center gap-1">
            Feito com <Heart size={12} className="text-red-400" fill="currentColor" /> em Sinop - MT
          </p>
        </div>
      </div>
    </footer>
  );
}

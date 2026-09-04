import { Instagram, Facebook, Youtube, Phone, Mail, MapPin, Clock } from 'lucide-react';

const services = [
  'Sonorização Profissional Importada',
  'Iluminação para Eventos',
  'Painel de LED',
  'Palcos e Camarotes',
  'Tendas e Coberturas',
  'Banheiro Químico de Luxo',
  'Piso Modular IRMARFER',
  'Estruturas de Alumínio',
  'Gerador de Energia',
];

const cities = [
  'Sorriso - MT',
  'Sinop - MT',
  'Lucas do Rio Verde - MT',
  'Nova Mutum - MT',
  'Alta Floresta - MT',
  'Cuiabá - MT',
  'Rondonópolis - MT',
  'Todo o Mato Grosso',
];

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[rgb(3,7,8)] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/rg%20eventos/img/logo-sem-fundo.webp"
              alt="Roberto Guimarães Eventos"
              className="h-12 w-auto object-contain mb-4"
            />
            <p className="text-[rgb(245,244,249)]/55 text-sm leading-relaxed mb-6">
              Desde 1995, transformando eventos em memórias inesquecíveis em Sorriso e toda a região do Mato Grosso. A única empresa full service da região.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/robertoguimaraeseventos/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[rgb(39,41,45)] hover:bg-[#C9962F]/20 border border-white/10 hover:border-[#C9962F]/40 flex items-center justify-center text-[rgb(245,244,249)]/60 hover:text-[#C9962F] transition-all"
              >
                <Instagram size={17} />
              </a>
              <a
                href="https://www.facebook.com/robertoguimaraesproducaoeeventos"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[rgb(39,41,45)] hover:bg-[#C9962F]/20 border border-white/10 hover:border-[#C9962F]/40 flex items-center justify-center text-[rgb(245,244,249)]/60 hover:text-[#C9962F] transition-all"
              >
                <Facebook size={17} />
              </a>
              <a
                href="https://www.youtube.com/channel/UC2yesbUCp_ydx4pqWEHWLGg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[rgb(39,41,45)] hover:bg-[#C9962F]/20 border border-white/10 hover:border-[#C9962F]/40 flex items-center justify-center text-[rgb(245,244,249)]/60 hover:text-[#C9962F] transition-all"
              >
                <Youtube size={17} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[rgb(245,244,249)] font-bold text-sm uppercase tracking-widest mb-5">
              Serviços
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo('#servicos')}
                    className="text-[rgb(245,244,249)]/55 hover:text-[#C9962F] text-sm transition-colors text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[rgb(245,244,249)] font-bold text-sm uppercase tracking-widest mb-5">
              Área de Atendimento
            </h4>
            <ul className="space-y-2.5">
              {cities.map((c) => (
                <li key={c} className="text-[rgb(245,244,249)]/55 text-sm">
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[rgb(245,244,249)] font-bold text-sm uppercase tracking-widest mb-5">
              Contato
            </h4>
            <ul className="space-y-4">
              {[
                {
                  icon: Phone,
                  lines: ['(66) 9 9902-2313', '(66) 9 9978-1716'],
                  href: 'tel:+5566999022313',
                },
                {
                  icon: Mail,
                  lines: ['comercial@robertoguimaraeseventos.com.br'],
                  href: 'mailto:comercial@robertoguimaraeseventos.com.br',
                },
                {
                  icon: MapPin,
                  lines: ['Av. Adolino Bedin, 799', 'Jardim das Américas, Sorriso - MT'],
                  href: 'https://maps.google.com/?q=Roberto+Guimarães+Eventos',
                },
                {
                  icon: Clock,
                  lines: ['Seg - Sex: 07:30 – 11:30', '13:30 – 17:30'],
                  href: undefined,
                },
              ].map(({ icon: Icon, lines, href }, i) => {
                const content = (
                  <div className="flex items-start gap-3">
                    <Icon size={16} className="text-[#C9962F] shrink-0 mt-0.5" />
                    <div>
                      {lines.map((line) => (
                        <div key={line} className="text-[rgb(245,244,249)]/55 text-sm leading-snug">
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>
                );
                return href ? (
                  <li key={i}>
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="hover:text-[#C9962F] transition-colors block"
                    >
                      {content}
                    </a>
                  </li>
                ) : (
                  <li key={i}>{content}</li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[rgb(245,244,249)]/35 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Roberto Guimarães Eventos. Todos os direitos reservados.
          </p>
          <p className="text-[rgb(245,244,249)]/35 text-xs">
            CNPJ: Sorriso - MT · Desde 1995
          </p>
        </div>
      </div>
    </footer>
  );
}

import { Instagram, Facebook, MapPin, Phone, Clock } from 'lucide-react';

const navItems = [
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Resultados', id: 'resultados' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

const tratamentos = [
  'Queda Capilar',
  'Alopecia',
  'Psoríase Capilar',
  'Eflúvio Telógeno',
  'Dermatite Seborreica',
  'Calvície',
  'Pré e Pós-operatório',
  'Regeneração da Pele',
];

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2d2d2d] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/tatiane-terapeuta-capilar/img/logo-sem-fundo.webp"
              alt="Dr. Tatiane Fernandes"
              className="h-14 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="text-white/60 text-xs leading-relaxed mb-5">
              Biomédica e tricologista capilar especializada em tratamentos personalizados para saúde
              e regeneração dos cabelos em Pouso Alegre – MG.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/tatianeterapeutacapilar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#F8E5E4] hover:text-[#737373] rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram width={15} height={15} className="lucide lucide-instagram " />
              </a>
              <a
                href="https://www.facebook.com/p/Tatiane-terapeuta-capilar-100076147218205/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#F8E5E4] hover:text-[#737373] rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook width={15} height={15} className="lucide lucide-facebook " />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-5 text-white/90">Navegação</h4>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-5 text-white/90">Tratamentos</h4>
            <ul className="space-y-2">
              {tratamentos.map((t) => (
                <li key={t} className="text-white/50 text-xs">
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-5 text-white/90">Informações</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin
                  width={14}
                  height={14}
                  className="lucide lucide-map-pin text-[#F8E5E4] flex-shrink-0 mt-0.5"
                />
                <p className="text-white/50 text-xs leading-relaxed">
                  Av. Luiz Carlos Vilela, 850
                  <br />
                  Sala 7 – Santa Rita
                  <br />
                  Pouso Alegre – MG
                </p>
              </div>
              <div className="flex gap-3">
                <Phone
                  width={14}
                  height={14}
                  className="lucide lucide-phone text-[#F8E5E4] flex-shrink-0 mt-0.5"
                />
                <a
                  href="tel:+553588973804"
                  className="text-white/50 hover:text-white text-xs transition-colors"
                >
                  (35) 9 8897-3804
                </a>
              </div>
              <div className="flex gap-3">
                <Clock
                  width={14}
                  height={14}
                  className="lucide lucide-clock text-[#F8E5E4] flex-shrink-0 mt-0.5"
                />
                <div className="text-white/50 text-xs leading-relaxed">
                  <p>Seg – Sex: 08:00 – 18:00</p>
                  <p>Sáb: 09:00 – 17:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs text-center">
            © 2026 Dr. Tatiane Fernandes – CNPJ: 056.833.736-03 – Todos os direitos reservados.
          </p>
          <p className="text-white/20 text-xs">Pouso Alegre · MG · Brasil</p>
        </div>
      </div>
    </footer>
  );
}

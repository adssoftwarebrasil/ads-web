import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

const navItems = [
  { label: 'Inicio', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Servicos', id: 'servicos' },
  { label: 'Diferenciais', id: 'diferenciais' },
  { label: 'Contato', id: 'contato' },
];

const servicos = [
  'Rastreamento Veicular',
  'Gestão de Frotas',
  'Reboque e Guincho 24h',
  'Serviço de Táxi',
  'Monitoramento em Tempo Real',
];

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-[rgb(2,66,147)] via-[rgb(0,68,139)] to-[rgb(2,66,147)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/ts%20tecnologia%2Fimg%2Flogo-fundo-azul.webp"
              alt="TS Serviços"
              className="h-16 w-auto mb-6"
            />
            <p className="text-gray-300 leading-relaxed mb-6">
              Há mais de 9 anos oferecendo soluções completas em rastreamento
              veicular, reboque 24h e serviços de transporte com qualidade e
              segurança.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/tsrastreamento?igsh=ZWhhMzZ5ZWhydzgw"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[rgb(16,215,237)] rounded-full flex items-center justify-center hover:bg-white transition-colors group"
              >
                <Instagram className="w-5 h-5 text-[rgb(2,66,147)] group-hover:text-[rgb(0,68,139)]" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-[rgb(16,215,237)]">
              Navegação
            </h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-gray-300 hover:text-[rgb(16,215,237)] transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-[rgb(16,215,237)]">
              Nossos Serviços
            </h3>
            <ul className="space-y-3 text-gray-300">
              {servicos.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-[rgb(16,215,237)]">
              Contato
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[rgb(16,215,237)] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  Rua Faustino Bispo dos Santos, 724
                  <br />
                  Santo Antônio - Alagoinhas/BA
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[rgb(16,215,237)] flex-shrink-0 mt-0.5" />
                <a
                  href="https://wa.me/557598115869"
                  className="text-gray-300 text-sm hover:text-[rgb(16,215,237)] transition-colors"
                >
                  (75) 9 9811-5869
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[rgb(16,215,237)] flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:financeiro@tsrastreamento.com.br"
                  className="text-gray-300 text-sm hover:text-[rgb(16,215,237)] transition-colors break-all"
                >
                  financeiro@tsrastreamento.com.br
                </a>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-white bg-opacity-10 rounded-xl border border-white border-opacity-20">
              <p className="text-xs text-center">
                <strong className="text-[rgb(16,215,237)]">Emergências 24h</strong>
                <br />
                (75) 9 9811-5869
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-white border-opacity-20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm text-center md:text-left">
              © 2026 TS Serviços. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-xs text-center md:text-right">
              Rastreamento Veicular | Reboque 24h | Serviços de Transporte
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

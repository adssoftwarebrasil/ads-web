import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const menuItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Vantagens', id: 'vantagens' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

const serviceItems = [
  'Serviço de Guincho Barato',
  'Reboque Especializado',
  'Reboque Imediato',
  'Transporte de Veículos',
  'Socorro Mecânico',
  'Atendimento 7h até 23h30',
];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[hsl(211,66%,25%)] text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/gabricioguincho%2Flogo.webp"
              alt="Fabrício Guincho Auto Socorro"
              className="h-12 mb-4"
              style={{ width: '180px' }}
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Fabrício Guincho Auto Socorro disponibiliza serviços especializados em reboque e assistência automotiva,
              prontos para atuar em casos de pane, acidentes ou necessidade de transporte de veículos. Nossa equipe está
              à disposição de 7h da manhã até 23h30, todos os dias, assegurando um atendimento ágil, seguro e eficiente.
              Operamos no Residencial Zanetti, em Franca – SP, e em regiões próximas, sempre preparados para oferecer o
              melhor suporte automotivo.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Menu</h3>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Serviços</h3>
            <ul className="space-y-2">
              {serviceItems.map((label) => (
                <li key={label}>
                  <button
                    onClick={() => scrollTo('servicos')}
                    className="text-gray-300 hover:text-white transition-colors text-sm text-left"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <div className="space-y-3">
              <a
                href="tel:+5516991837044"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
              >
                <Phone width={16} height={16} className="lucide lucide-phone " />
                (16) 99183-7044
              </a>
              <a
                href="mailto:fabricio@guinchoautosocorro.com.br"
                className="flex items-start gap-2 text-gray-300 hover:text-white transition-colors text-sm"
              >
                <Mail width={16} height={16} className="lucide lucide-mail mt-0.5" />
                fabricio@guinchoautosocorro.com.br
              </a>
              <div className="flex items-start gap-2 text-gray-300 text-sm">
                <MapPin width={16} height={16} className="lucide lucide-map-pin mt-0.5 flex-shrink-0" />
                <p>Rua Aparecida de Melo Oliveira, 3270, Residencial Zanetti, Franca – SP. CEP: 14412-340</p>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Redes Sociais</h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="bg-white/10 hover:bg-[hsl(211,66%,41%)] p-2 rounded-lg transition-all hover:scale-110"
                >
                  <Facebook width={20} height={20} className="lucide lucide-facebook " />
                </a>
                <a
                  href="#"
                  className="bg-white/10 hover:bg-[hsl(211,66%,41%)] p-2 rounded-lg transition-all hover:scale-110"
                >
                  <Instagram width={20} height={20} className="lucide lucide-instagram " />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center text-sm text-gray-300">
          <p>Copyright © 2025 – Desenvolvido por Parceiro Google</p>
        </div>
      </div>
    </footer>
  );
}

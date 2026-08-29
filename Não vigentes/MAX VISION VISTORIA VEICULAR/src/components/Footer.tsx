import { MapPin, Instagram, Clock } from 'lucide-react';

const WHATSAPP_NUMBER = '556231239052';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá!%20Gostaria%20de%20agendar%20uma%20vistoria%20veicular.`;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/max-vision%2FLogomarca-Com-Fundo-Amarelo.png"
              alt="Max Vision Vistoria Veicular"
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-500 text-sm leading-relaxed">
              Credenciada pelo Detran-GO, a Max Vision realiza vistorias veiculares com agilidade, precisão e confiança.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.instagram.com/maxvision_vistoria_veicular/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 hover:bg-[#efcf05] text-white hover:text-black w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
              >
                <Instagram size={18} />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 hover:bg-[#efcf05] text-white hover:text-black w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black text-base mb-5 border-b border-gray-800 pb-3">Serviços</h4>
            <ul className="space-y-3">
              {[
                'Vistoria para Transferência',
                'Vistoria para Seguradoras',
                'Identificação Veicular',
                'Verificação de Chassi/Motor',
                'Regularização Veicular',
              ].map((item) => (
                <li key={item}>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 text-sm hover:text-[#efcf05] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-[#efcf05] rounded-full flex-shrink-0" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black text-base mb-5 border-b border-gray-800 pb-3">Navegação</h4>
            <ul className="space-y-3">
              {[
                { label: 'Início', href: '#inicio' },
                { label: 'Serviços', href: '#servicos' },
                { label: 'Como Funciona', href: '#como-funciona' },
                { label: 'Veículos', href: '#veiculos' },
                { label: 'Contato', href: '#contato' },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-gray-500 text-sm hover:text-[#efcf05] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-gray-600 rounded-full flex-shrink-0" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black text-base mb-5 border-b border-gray-800 pb-3">Localização</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#efcf05] mt-0.5 flex-shrink-0" />
                <p className="text-gray-500 text-sm leading-relaxed">
                  Av. Euclídes da Cunha, Qd. 03 Lt. 09<br />
                  Conj. Residencial Storil<br />
                  Aparecida de Goiânia - GO
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={16} className="text-[#efcf05] mt-0.5 flex-shrink-0" />
                <div className="text-gray-500 text-sm space-y-1">
                  <p>Seg-Sex: 08h às 17h</p>
                  <p>Sáb-Dom: 08h às 12h</p>
                </div>
              </div>
              <div className="mt-4">
                <span className="inline-flex items-center gap-2 bg-[#efcf05]/10 text-[#efcf05] text-xs font-bold px-3 py-1.5 rounded-full">
                  CNPJ: 43.011.364/0003-41
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs text-center sm:text-left">
            &copy; {year} Max Vision Vistoria Veicular. Todos os direitos reservados.
          </p>
          <p className="text-gray-700 text-xs">
            Maxima Vision Vistoria Veicular Ltda &mdash; CNPJ: 43.011.364/0003-41
          </p>
        </div>
      </div>
    </footer>
  );
}

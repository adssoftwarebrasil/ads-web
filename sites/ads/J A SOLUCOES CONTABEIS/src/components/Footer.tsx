import { Instagram, Mail, MapPin, Phone } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const servicos = [
  'Planejamento Tributário',
  'Abertura de Empresas',
  'Lucro Real',
  'Recursos Humanos',
  'Assessoria Fiscal',
  'Projeto de Incêndio',
];

const regioes = [
  'Rondonópolis',
  'Jaciara',
  'Juscimeira',
  'Guiratinga',
  'Água Boa',
  'Querência',
];

export default function Footer() {
  return (
    <footer className="bg-[rgb(47,55,56)] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/j%20a%20solucoes%20contabeis/img/logo-sem-fundo.png"
              alt="Soluções Contábeis"
              className="h-16 w-auto object-contain mb-6 brightness-0 invert"
            />
            <p className="text-gray-300 mb-6 leading-relaxed">
              Desde 2012 transformando a gestão tributária em diferencial
              competitivo para empresas no Mato Grosso.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/solucoescontabeismt"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-lg hover:bg-[rgb(245,134,52)] transition-all"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:solucoes.contabileassessoria@hotmail.com"
                className="bg-white/10 p-3 rounded-lg hover:bg-[rgb(245,134,52)] transition-all"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://wa.me/5566999215475"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-lg hover:bg-[rgb(245,134,52)] transition-all"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-[rgb(245,134,52)]">
              Serviços
            </h3>
            <ul className="space-y-3">
              {servicos.map((s) => (
                <li key={s}>
                  <a
                    href="#servicos"
                    className="text-gray-300 hover:text-[rgb(245,134,52)] transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-[rgb(245,134,52)]">
              Regiões Atendidas
            </h3>
            <ul className="space-y-3">
              {regioes.map((r) => (
                <li key={r} className="text-gray-300">
                  {r}
                </li>
              ))}
            </ul>
            <p className="text-gray-400 text-sm mt-4">
              E toda região do Mato Grosso
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-[rgb(245,134,52)]">
              Contato
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="text-[rgb(245,134,52)] flex-shrink-0 mt-1"
                />
                <p className="text-gray-300 text-sm">
                  Av. Maringá, 1819
                  <br />
                  Jardim Rondônia
                  <br />
                  Rondonópolis - MT
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone
                  size={20}
                  className="text-[rgb(245,134,52)] flex-shrink-0"
                />
                <div className="text-gray-300 text-sm">
                  <p>(66) 3423-3245</p>
                  <p>(66) 9 9979-0844</p>
                  <p>(66) 9 9921-5475</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail
                  size={20}
                  className="text-[rgb(245,134,52)] flex-shrink-0 mt-1"
                />
                <p className="text-gray-300 text-sm break-words">
                  solucoes.contabileassessoria@hotmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 Soluções Contábeis E Assessoria. Todos os direitos
              reservados.
            </p>
            <p className="text-gray-400 text-sm text-center md:text-right">
              CNPJ: 28.464.365/0001-96
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

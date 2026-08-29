import { Star, Leaf } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Sobre() {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-[#F1F1FF]">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative transition-all duration-800 opacity-100 translate-x-0">
            <div className="relative">
              <img
                src="https://storage.lucasmendes.dev/site-sp/EXP%20MADEIRAS%2Fimg%2FQuem%20somos.png"
                alt="EXP Madeiras"
                className="w-full rounded-xl shadow-2xl"
              />
              <img
                src="https://storage.lucasmendes.dev/site-sp/EXP%20MADEIRAS%2Fimg%2FQuem%20somos%2002.png"
                alt="Detalhes EXP Madeiras"
                className="absolute -bottom-8 -right-8 w-3/5 rounded-xl border-8 border-[#F1F1FF] shadow-xl hidden md:block"
                style={{ animationDelay: '0.3s' }}
              />
            </div>
          </div>
          <div className="transition-all duration-800 delay-300 opacity-100 translate-x-0">
            <div
              className="inline-block mb-4 px-6 py-2 rounded-full"
              style={{ backgroundColor: 'rgba(46, 32, 15, 0.1)', color: 'rgb(46, 32, 15)' }}
            >
              <span className="text-sm font-medium">Mais de 20 anos</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E200F] mb-6">
              EXP Madeiras: Tradição e<br />Excelência em Acabamentos
            </h2>
            <div className="space-y-4 text-lg text-[#2E200F] opacity-80 leading-relaxed mb-8">
              <p>
                A EXP MADEIRAS nasceu da paixão e experiência de profissionais do setor de marcenaria
                e construção. Com sede em Sinop (MT), atuamos há mais de 20 anos oferecendo acabamentos
                de madeira que se destacam pela durabilidade e estética refinada.
              </p>
              <p>
                Nosso compromisso é atender tanto residências quanto construtoras, sempre com foco
                total na satisfação do cliente. Nos destacamos pela qualidade superior da matéria-prima,
                acabamentos impecáveis e atendimento personalizado que acompanha você desde a escolha
                dos produtos até a instalação final.
              </p>
              <p>
                Somos referência em acabamentos de madeira na região, comprometidos com a excelência
                em cada detalhe do seu projeto.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-start">
                <Star className="lucide lucide-star text-[#B88654] mb-2" width={32} height={32} strokeWidth={2} />
                <h3 className="font-semibold text-[#2E200F] mb-1">Experiência Comprovada</h3>
                <p className="text-sm text-[#2E200F] opacity-70">Mais de 20 anos no mercado</p>
              </div>
              <div className="flex flex-col items-start">
                <Leaf className="lucide lucide-leaf text-[#B88654] mb-2" width={32} height={32} strokeWidth={2} />
                <h3 className="font-semibold text-[#2E200F] mb-1">Matéria-Prima Selecionada</h3>
                <p className="text-sm text-[#2E200F] opacity-70">Madeiras nobres e sustentáveis</p>
              </div>
            </div>
            <a
              href="https://api.whatsapp.com/send?phone=5566999857466&text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20equipe!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#2E200F] text-[#F1F1FF] rounded-lg font-medium hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <WhatsAppIcon fill="currentColor" width={20} height={20} />
              Fale com Nossa Equipe
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

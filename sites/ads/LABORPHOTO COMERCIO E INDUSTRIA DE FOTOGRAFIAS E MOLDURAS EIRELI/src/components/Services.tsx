import { Image, Frame, Camera, FileImage, Video, BookOpen, Sparkles, Film } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  Icon: LucideIcon;
  gradient: string;
  title: string;
  text: string;
}

const services: Service[] = [
  {
    Icon: Image,
    gradient: 'from-[rgb(2,126,198)] to-[rgb(6,51,133)]',
    title: 'Revelação de Fotos',
    text: 'Revele suas fotos com qualidade profissional e garanta que suas melhores memórias durem para sempre.',
  },
  {
    Icon: Frame,
    gradient: 'from-[rgb(6,51,133)] to-[rgb(34,9,92)]',
    title: 'Molduras e Porta-Retratos',
    text: 'Fabricação e venda de molduras personalizadas para quadros e porta-retratos. Designs exclusivos para valorizar suas fotografias.',
  },
  {
    Icon: Camera,
    gradient: 'from-[rgb(2,126,198)] to-[rgb(6,51,133)]',
    title: 'Fotografia de Estúdio',
    text: 'Sessões fotográficas profissionais em estúdio com equipamentos de última geração e equipe experiente.',
  },
  {
    Icon: FileImage,
    gradient: 'from-[rgb(34,9,92)] to-[rgb(6,51,133)]',
    title: 'Fotos para Documentos',
    text: 'Fotografias para documentos com padrão oficial. Atendimento rápido e qualidade garantida.',
  },
  {
    Icon: Video,
    gradient: 'from-[rgb(6,51,133)] to-[rgb(2,126,198)]',
    title: 'Filmagens e Eventos',
    text: 'Cobertura completa de eventos sociais e corporativos. Filmagens profissionais para eternizar seus momentos especiais.',
  },
  {
    Icon: BookOpen,
    gradient: 'from-[rgb(2,126,198)] to-[rgb(34,9,92)]',
    title: 'Encadernação de Álbuns',
    text: 'Criação e encadernação de álbuns fotográficos personalizados com acabamento premium e materiais de alta qualidade.',
  },
  {
    Icon: Sparkles,
    gradient: 'from-[rgb(34,9,92)] to-[rgb(2,126,198)]',
    title: 'Restauração de Fotos',
    text: 'Restauração profissional de fotografias antigas e danificadas. Resgate suas memórias com nossa expertise de 40 anos.',
  },
  {
    Icon: Film,
    gradient: 'from-[rgb(6,51,133)] to-[rgb(34,9,92)]',
    title: 'Ampliações Grandes Formatos',
    text: 'Ampliações fotográficas em formatos grandes, únicos na região. Perfeito para decoração e exposições.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[rgb(2,126,198)] font-bold text-sm uppercase tracking-wider">
            O Que Fazemos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Serviços{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(2,126,198)] to-[rgb(6,51,133)]">
              Completos
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Da revelação tradicional à fotografia digital, oferecemos soluções completas para todas
            as suas necessidades fotográficas
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map(({ Icon, gradient, title, text }) => (
            <div
              key={title}
              className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent hover:-translate-y-2"
            >
              <div
                className={`w-14 h-14 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[rgb(2,126,198)] transition-colors">
                {title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">{text}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="http://wa.me/556192241725"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[rgb(2,126,198)] to-[rgb(6,51,133)] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </section>
  );
}

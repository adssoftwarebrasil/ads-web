import { MessageCircle } from 'lucide-react';
import { scrollToSection } from '../lib/scroll';

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://storage.lucasmendes.dev/site-sp/petshowe%2FQuem%20somos.jpeg"
              alt="Quem somos"
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#09b588] text-white p-8 rounded-2xl shadow-xl">
              <p className="text-5xl font-bold">10+</p>
              <p className="text-sm font-medium mt-2">Anos de Experiência</p>
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-[#09b588] uppercase tracking-wide mb-4">
              Quem Somos
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pet Show Estética Animal
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              A Pet Show Estética Animal, fundada em 15 de outubro de 2013, é referência em serviços
              de higiene e embelezamento de animais domésticos em Cascavel, Paraná.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Com uma equipe experiente e apaixonada por pets, nossa missão é oferecer cuidados de
              alta qualidade para garantir a saúde e bem-estar dos nossos clientes peludos. Estamos
              comprometidos em proporcionar a melhor experiência possível para seu animal, com amor e
              profissionalismo.
            </p>
            <button
              onClick={() => scrollToSection('contato')}
              className="inline-flex items-center gap-3 bg-[#09b588] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-900 transition-all duration-300 shadow-lg hover:scale-105"
            >
              <MessageCircle size={24} />
              Enviar WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

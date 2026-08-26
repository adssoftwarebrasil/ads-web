import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import { Button } from './Button';

export const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    nome: '',
    bairro: '',
    servico: '',
    mensagem: '',
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mensagemWhatsApp = `Olá, meu nome é ${formData.nome}. Sou de ${formData.bairro}. Gostaria de falar sobre ${formData.servico}. Detalhes: ${formData.mensagem}`;
    const url = `https://wa.me/5562993531722?text=${encodeURIComponent(mensagemWhatsApp)}`;

    window.open(url, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contato"
      ref={sectionRef}
      className="py-20 bg-[#f0f0f0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid md:grid-cols-2 gap-8 md:gap-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#050a1e] mb-4 md:mb-6">
              Vamos tirar seu projeto do papel?
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed">
              Atendemos Goiânia e região e Aparecida de Goiânia.
            </p>

            <div className="space-y-5 md:space-y-6">
              <div className="flex items-start gap-3 md:gap-4">
                <MapPin className="text-[#07dde5] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-[#050a1e] mb-1 text-sm md:text-base">Endereço</h3>
                  <p className="text-gray-700 text-sm md:text-base">
                    Eldorado Business Tower<br />
                    Av. C-255, 400 - Salas 912 e 913<br />
                    Nova Suíça, Goiânia - GO, 74280-010
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <Clock className="text-[#07dde5] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-[#050a1e] mb-1 text-sm md:text-base">Horário de Atendimento</h3>
                  <p className="text-gray-700 text-sm md:text-base">
                    Seg a Sex: 08h às 18h<br />
                    Sáb: 08h às 12h
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <Phone className="text-[#07dde5] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-[#050a1e] mb-1 text-sm md:text-base">Telefone</h3>
                  <div className="text-gray-700 text-sm md:text-base space-y-1">
                    <a href="tel:+5562993531722" className="block hover:text-[#07dde5] transition-colors">
                      WhatsApp: (62) 99353-1722
                    </a>
                    <a href="tel:+556234136426" className="block hover:text-[#07dde5] transition-colors">
                      Fixo: (62) 3413-6426
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-bold text-[#050a1e] mb-6">
              Solicite seu Orçamento
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="nome" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#07dde5] focus:outline-none transition-colors"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="bairro" className="block text-sm font-semibold text-gray-700 mb-2">
                  Bairro/Cidade
                </label>
                <input
                  type="text"
                  id="bairro"
                  name="bairro"
                  required
                  value={formData.bairro}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#07dde5] focus:outline-none transition-colors"
                  placeholder="Onde você está?"
                />
              </div>

              <div>
                <label htmlFor="servico" className="block text-sm font-semibold text-gray-700 mb-2">
                  Tipo de Serviço
                </label>
                <select
                  id="servico"
                  name="servico"
                  required
                  value={formData.servico}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#07dde5] focus:outline-none transition-colors"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="Construção Residencial">Construção Residencial</option>
                  <option value="Reforma">Reforma</option>
                  <option value="Projeto">Projeto</option>
                  <option value="Financiamento">Financiamento</option>
                </select>
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  required
                  value={formData.mensagem}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#07dde5] focus:outline-none transition-colors resize-none"
                  placeholder="Conte-nos sobre seu projeto..."
                />
              </div>

              <Button type="submit" variant="secondary" className="w-full">
                Enviar via WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

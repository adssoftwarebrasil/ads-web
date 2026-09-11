import { Heart, Users, Star } from 'lucide-react';

const stats = [
  { Icon: Heart, title: 'Paixão', text: 'Em cada peça' },
  { Icon: Users, title: 'Família', text: 'Negócio familiar' },
  { Icon: Star, title: 'Qualidade', text: 'Garantida' },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block bg-[rgb(245,241,220)] text-[rgb(84,10,1)] px-4 py-2 rounded-full text-sm font-bold mb-4">
              NOSSA HISTÓRIA
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[rgb(84,10,1)] mb-6">
              Tradição Familiar e Paixão pela Cutelaria
            </h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              A <span className="font-bold">Bielliz Facas e Presentes</span> foi inaugurada em Abril
              de 2025, no coração de Campinas. O nome "Bielliz" nasceu da união familiar do CEO Luiz
              Carlos Honorato Dias com seus filhos Gabriel e Liz, representando o amor e dedicação
              que colocamos em cada detalhe.
            </p>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Nosso objetivo é entregar <span className="font-bold">qualidade e beleza</span> aos
              nossos clientes, oferecendo o melhor da cutelaria gaúcha. Trabalhamos com renomadas
              cutelarias do sul, incluindo Doma Crioula, Corte Nobre, Tatu, D'Ávila e Ferreiros
              Artesãos.
            </p>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Além de facas artesanais de aço carbono, inox e damasco, oferecemos katanas, canivetes,
              miniaturas em resina, bonecos de personagens e personalização de facas e copos em
              geral.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {stats.map(({ Icon, title, text }) => (
                <div key={title} className="text-center">
                  <div className="bg-[rgb(245,241,220)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon size={28} className="text-[rgb(84,10,1)]" />
                  </div>
                  <h4 className="font-bold text-[rgb(84,10,1)] text-lg">{title}</h4>
                  <p className="text-gray-600 text-sm">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[rgb(84,10,1)] to-[rgb(120,30,20)] rounded-2xl transform rotate-3"></div>
              <img
                src="https://storage.lucasmendes.dev/site-sp/cutelaria%20bielliz%2Fimg%2Ffrente-da-loja.webp"
                alt="Fachada da Cutelaria Bielliz"
                className="relative rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

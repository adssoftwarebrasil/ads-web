import React from 'react';

import { Zap, Factory, Sun, Shield, Gauge, Wrench, Building2, Battery, ArrowUpRight } from 'lucide-react';



interface ServiceCard {

  icon: React.ReactNode;

  title: string;

  description: string;

  image: string;

}



const Services: React.FC = () => {

  const services: ServiceCard[] = [

    {

      icon: <Zap className="w-10 h-10" />,

      title: 'Redes de Distribuição',

      description: 'Construção e manutenção de redes de energia com padrões rigorosos de segurança.',

      image: 'https://storage.lucasmendes.dev/site-sp/mais%20luz%20service%2Fimg%2Fsubestacao-eletrica-cerca.webp'

    },

    {

      icon: <Factory className="w-10 h-10" />,

      title: 'Energia Industrial',

      description: 'Instalação de equipamentos industriais com acompanhamento técnico especializado.',

      image: 'https://storage.lucasmendes.dev/site-sp/mais%20luz%20service%2Fimg%2Fequipamento-eletrico-industrial.webp'

    },

    {

      icon: <Sun className="w-10 h-10" />,

      title: 'Energia Solar',

      description: 'Projetos completos de energia solar fotovoltaica para empresas e indústrias.',

      image: 'https://storage.lucasmendes.dev/site-sp/mais%20luz%20service%2Fimg%2Fpaineis-solares-fazenda.webp'

    },

    {

      icon: <Building2 className="w-10 h-10" />,

      title: 'Subestações',

      description: 'Montagem e manutenção preventiva de subestações de alta e média tensão.',

      image: 'https://storage.lucasmendes.dev/site-sp/mais%20luz%20service%2Fimg%2Fsubestacao-eletrica-manutencao.webp'

    },

    {

      icon: <Shield className="w-10 h-10" />,

      title: 'Quadros Elétricos',

      description: 'Fabricação customizada de quadros de distribuição e controle certificados.',

      image: 'https://storage.lucasmendes.dev/site-sp/mais%20luz%20service%2Fimg%2Fpainel-eletrico-aberto.webp'

    },

    {

      icon: <Gauge className="w-10 h-10" />,

      title: 'Medição e Faturamento',

      description: 'Sistemas de medição para faturamento com precisão e conformidade regulatória.',

      image: 'https://storage.lucasmendes.dev/site-sp/mais%20luz%20service%2Fimg%2Fequipamento-medicao-eletrica.webp'

    },

    {

      icon: <Wrench className="w-10 h-10" />,

      title: 'Manutenção Elétrica',

      description: 'Suporte técnico contínuo e manutenção preventiva para sua infraestrutura.',

      image: 'https://storage.lucasmendes.dev/site-sp/mais%20luz%20service%2Fimg%2Ftrabalhador-subestacao-eletrica.webp'

    },

    {

      icon: <Battery className="w-10 h-10" />,

      title: 'Instalações Elétricas',

      description: 'Instalações elétricas completas para obras industriais e comerciais de grande porte.',

      image: 'https://storage.lucasmendes.dev/site-sp/mais%20luz%20service%2Fimg%2Fconstrucao-equipamentos-eletricos.webp'

    }

  ];



  return (

    <section id="services" className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}

        <div className="text-center mb-16 space-y-4">

          <span className="text-blue-900 font-semibold tracking-wider uppercase text-sm bg-blue-100 px-4 py-1 rounded-full">

            Nossa Expertise

          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900">

            Soluções em Engenharia Elétrica

          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">

            Da concepção à manutenção: expertise técnica para sistemas críticos e de alta demanda em todo o território nacional.

          </p>

        </div>



        {/* Container Flex com Centralização 

          - 'justify-center': Centraliza a última linha se ela não estiver completa

          - 'gap-6': Espaçamento consistente

        */}

        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">

          {services.map((service, index) => (

            <div

              key={index}

              className="group relative w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-2rem)] aspect-[4/3] overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500"

            >

              {/* Image Container com Zoom Suave */}

              <div className="absolute inset-0 overflow-hidden">

                <img

                  src={service.image}

                  alt={service.title}

                  className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"

                  loading="lazy"

                />

                {/* Gradiente Overlay (Melhor leitura que brilho simples) */}

                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-900/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

              </div>



              {/* Content */}

              <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">

                <div className="flex items-start justify-between mb-3">

                  <div className="text-yellow-400 p-2 bg-white/10 backdrop-blur-sm rounded-lg">

                    {service.icon}

                  </div>

                  {/* Ícone de seta que aparece no hover */}

                  <ArrowUpRight className="text-yellow-400 w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100" />

                </div>

                

                <h3 className="text-2xl font-bold text-white mb-2 leading-tight">

                  {service.title}

                </h3>

                

                <p className="text-gray-200 text-sm leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">

                  {service.description}

                </p>

                

                {/* Linha decorativa amarela */}

                <div className="w-0 group-hover:w-full h-1 bg-yellow-400 mt-4 transition-all duration-700 ease-out" />

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

};



export default Services;
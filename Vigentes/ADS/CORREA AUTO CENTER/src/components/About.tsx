import { Award, Users, Target, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Conheça a <span className="text-[rgb(207,30,37)]">Correa Auto Center</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              A <strong>Correa Auto Center</strong> surgiu no dia{' '}
              <strong>19 de março de 2024</strong>, na cidade de <strong>Sinop – MT</strong>. Em
              2025, estamos completando 1 ano de atuação no mercado automotivo, oferecendo serviços
              com qualidade, confiança e tecnologia de ponta.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Trabalhamos com manutenção completa para seu veículo, incluindo motor, câmbio,
              suspensão, freio, injeção eletrônica, diagnóstico com scanner e osciloscópio, troca de
              óleo, alinhamento e balanceamento, borracharia e serviço de guincho. Nosso compromisso
              é entregar atendimento profissional, diagnóstico preciso e soluções eficientes,
              garantindo segurança e desempenho para o seu veículo.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[rgb(207,30,37)] to-[rgb(167,10,17)] p-6 rounded-xl shadow-lg text-white">
                <Award className="w-10 h-10 mb-3" />
                <h3 className="text-2xl font-bold mb-1">1 Ano</h3>
                <p className="text-white/90">de experiência e crescimento</p>
              </div>
              <div className="bg-gradient-to-br from-black to-gray-800 p-6 rounded-xl shadow-lg text-white">
                <Users className="w-10 h-10 mb-3" />
                <h3 className="text-2xl font-bold mb-1">100+</h3>
                <p className="text-white/90">clientes satisfeitos</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img
                src="https://storage.lucasmendes.dev/site-sp/correa%20auto%20center%2Fimg%2Fequipe-correa-auto-center.webp"
                alt="Equipe Correa Auto Center"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white text-xl font-bold">Nossa Equipe Profissional</p>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <img
                src="https://storage.lucasmendes.dev/site-sp/correa%20auto%20center%2Fimg%2Ffachada-loja.webp"
                alt="Fachada da Loja"
                className="w-full h-48 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <img
                src="https://storage.lucasmendes.dev/site-sp/correa%20auto%20center%2Fimg%2Foficina-carros-elevador.webp"
                alt="Oficina"
                className="w-full h-48 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gray-50 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300">
            <div className="bg-[rgb(207,30,37)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-3">Missão</h3>
            <p className="text-gray-700 leading-relaxed">
              Oferecer serviços automotivos de excelência com diagnóstico preciso, atendimento
              profissional e soluções que garantam a segurança e satisfação dos nossos clientes.
            </p>
          </div>
          <div className="text-center p-8 bg-gray-50 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300">
            <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-3">Valores</h3>
            <p className="text-gray-700 leading-relaxed">
              Confiabilidade, transparência, qualidade e carisma. Tratamos cada cliente com respeito
              e honestidade, sempre buscando as melhores soluções.
            </p>
          </div>
          <div className="text-center p-8 bg-gray-50 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300">
            <div className="bg-[rgb(207,30,37)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-3">Visão</h3>
            <p className="text-gray-700 leading-relaxed">
              Ser referência em serviços automotivos em Sinop e região, reconhecida pela qualidade
              técnica, tecnologia de ponta e atendimento humanizado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

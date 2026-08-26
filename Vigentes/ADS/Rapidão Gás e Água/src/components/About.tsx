import { ShieldCheck, Clock, Users, Award } from 'lucide-react';

const cards = [
  {
    title: 'Preço Justo',
    text: 'Trabalhamos com valores acessíveis para que você nunca fique sem gás ou água em casa.',
  },
  {
    title: 'Entrega Rápida',
    text: 'Equipe ágil e motos prontas para atender todos os bairros de Primavera do Leste.',
  },
  {
    title: 'Equipe Especializada',
    text: 'Profissionais treinados e comprometidos com a segurança e satisfação do cliente.',
  },
  {
    title: 'Produtos de Qualidade',
    text: 'Trabalhamos apenas com gás GLP de origem certificada e água mineral de qualidade.',
  },
];

const stats = [
  { icon: <Clock size={22} strokeWidth={2} />, value: '+15 anos', label: 'de experiência' },
  { icon: <Users size={22} strokeWidth={2} />, value: 'Milhares', label: 'de clientes atendidos' },
  { icon: <ShieldCheck size={22} strokeWidth={2} />, value: '100%', label: 'segurança garantida' },
  { icon: <Award size={22} strokeWidth={2} />, value: '5 estrelas', label: 'avaliação média' },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div
              className="absolute -top-6 -left-6 w-48 h-48 rounded-full opacity-20"
              style={{ background: 'radial-gradient(circle, rgb(243, 159, 29), transparent)' }}
            ></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[3/4] max-w-sm mx-auto lg:mx-0">
              <img
                src="https://storage.lucasmendes.dev/site-sp/rapidao%20gas%20e%20agua/img/dois-botijoes-de-gas-azul-empilhados_3024x4032.webp"
                alt="Botijões de gás Rapidão"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-6 text-white"
                style={{ background: 'linear-gradient(to top, rgba(24, 82, 151, 0.95), transparent)' }}
              >
                <p className="text-3xl font-black">Desde 2010</p>
                <p className="text-white/80 text-sm font-medium">abastecendo Primavera do Leste</p>
              </div>
            </div>
            <div
              className="absolute -bottom-4 -right-4 lg:right-0 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
              style={{ border: '2px solid rgba(241, 93, 34, 0.15)' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'rgba(241, 93, 34, 0.1)' }}
              >
                <ShieldCheck size={24} strokeWidth={2} style={{ color: 'rgb(241, 93, 34)' }} />
              </div>
              <div>
                <p className="text-gray-900 font-black text-sm">Segurança em 1º lugar</p>
                <p className="text-gray-500 text-xs">Equipe certificada</p>
              </div>
            </div>
          </div>
          <div>
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
              style={{ backgroundColor: 'rgba(24, 82, 151, 0.08)', color: 'rgb(24, 82, 151)' }}
            >
              Nossa História
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Tradição e confiança
              <br />
              <span style={{ color: 'rgb(241, 93, 34)' }}>em cada entrega</span>
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-5">
              Fundada em <strong className="text-gray-900">2010</strong>, a Rapidão Gás e Água nasceu
              com um propósito claro: oferecer gás GLP e água de qualidade com preço justo e
              atendimento ágil para todos os moradores de Primavera do Leste — MT.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              São mais de 15 anos de história, construídos com responsabilidade, segurança e o
              compromisso de sempre colocar o cliente em primeiro lugar. Nossa equipe especializada
              garante que cada entrega seja feita com eficiência e cuidado.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-10">
              {cards.map((c) => (
                <div
                  key={c.title}
                  className="p-4 rounded-2xl"
                  style={{
                    backgroundColor: 'rgba(241, 93, 34, 0.05)',
                    border: '1px solid rgba(241, 93, 34, 0.1)',
                  }}
                >
                  <p className="font-black text-gray-900 text-sm mb-1">{c.title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{c.text}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div key={s.value} className="text-center">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-2"
                    style={{ backgroundColor: 'rgba(24, 82, 151, 0.08)', color: 'rgb(24, 82, 151)' }}
                  >
                    {s.icon}
                  </div>
                  <p className="font-black text-gray-900 text-sm">{s.value}</p>
                  <p className="text-gray-500 text-xs">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

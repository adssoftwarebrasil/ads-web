import { Award, Users, Heart } from 'lucide-react';

export default function Sobre() {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance" style={{ color: 'rgb(2, 73, 119)' }}>
            Uma História de Fé e Educação
          </h2>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: 'rgb(246, 174, 9)' }}></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          <div className="order-2 lg:order-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/escolamodelocristao%2Fcriancas-sala-aula.jpg"
              alt="Crianças em sala de aula"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              A Escola Modelo Cristão nasceu em 1997 do sonho do pastor Davi Klawa, mantenedor da Primeira Igreja Batista da Lapa. Nosso propósito é oferecer uma educação que une excelência acadêmica e princípios cristãos, formando crianças em sabedoria, caráter e espiritualidade.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Atendemos crianças de 3 a 10 anos na Educação Infantil e Ensino Fundamental I, proporcionando um ambiente acolhedor onde cada aluno é valorizado e acompanhado de perto em seu desenvolvimento acadêmico, emocional, social e espiritual.
            </p>
            <div className="pt-4 md:pt-6">
              <img
                src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=escolamodelocristao%2Fimg%2FDEVOCIONAL%20DIA%CC%81RIO.jpeg&version_id=null"
                alt="Crianças em aula de leitura"
                className="rounded-xl shadow-lg w-full h-auto object-cover aspect-[16/9]"
              />
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="text-center p-6 md:p-8 rounded-xl bg-gradient-to-br from-[#024977] to-[#035a93] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/20 mb-4">
              <Award className="lucide lucide-award md:w-8 md:h-8" width={28} height={28} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">+25 anos</h3>
            <p className="text-sm md:text-base text-gray-100">de tradição em educação cristã</p>
          </div>
          <div
            className="text-center p-6 md:p-8 rounded-xl text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            style={{ background: 'linear-gradient(135deg, rgb(246, 174, 9) 0%, rgb(255, 140, 66) 100%)' }}
          >
            <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/20 mb-4">
              <Users className="lucide lucide-users md:w-8 md:h-8" width={28} height={28} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Turmas Reduzidas</h3>
            <p className="text-sm md:text-base text-gray-100">para acompanhamento personalizado</p>
          </div>
          <div className="text-center p-6 md:p-8 rounded-xl bg-gradient-to-br from-[#024977] to-[#035a93] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:col-span-2 lg:col-span-1">
            <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/20 mb-4">
              <Heart className="lucide lucide-heart md:w-8 md:h-8" width={28} height={28} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Educação Integral</h3>
            <p className="text-sm md:text-base text-gray-100">fundamentada em valores bíblicos</p>
          </div>
        </div>
      </div>
    </section>
  );
}

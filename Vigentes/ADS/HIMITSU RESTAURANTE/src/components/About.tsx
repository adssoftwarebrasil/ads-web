import { ChefHat, Clock, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="bg-white py-16 md:py-24 px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <div>
              <p className="text-[#E02023] font-exo font-semibold text-lg mb-2">
                Desde 2012 em Goiânia
              </p>
              <h2 className="font-exo font-bold text-4xl md:text-5xl text-black mb-6">
                Uma Experiência Gastronômica Única
              </h2>
            </div>
            <p className="font-exo text-gray-700 text-lg leading-relaxed max-w-prose">
              O Himitsu une a autêntica tradição japonesa com toques
              contemporâneos, criando uma experiência gastronômica incomparável.
              Localizado no coração do Jardim Europa em Goiânia, oferecemos um
              ambiente acolhedor e sofisticado, perfeito para momentos especiais
              com família e amigos.
            </p>
            <p className="font-exo text-gray-700 text-lg leading-relaxed max-w-prose">
              Nossos chefs selecionam cuidadosamente os ingredientes mais frescos
              para preparar pratos que celebram o melhor da culinária japonesa,
              sempre com um toque de inovação que surpreende e encanta.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 pt-6">
              <div className="flex flex-col items-center text-center group">
                <div className="bg-[#E02023]/10 p-4 rounded-full mb-3 group-hover:bg-[#E02023]/20 transition-all group-hover:-translate-y-1">
                  <ChefHat className="lucide lucide-chef-hat w-8 h-8 text-[#E02023]" />
                </div>
                <p className="font-exo font-semibold text-black">Autenticidade</p>
              </div>
              <div className="flex flex-col items-center text-center group">
                <div className="bg-[#E02023]/10 p-4 rounded-full mb-3 group-hover:bg-[#E02023]/20 transition-all group-hover:-translate-y-1">
                  <Clock className="lucide lucide-clock w-8 h-8 text-[#E02023]" />
                </div>
                <p className="font-exo font-semibold text-black">Seg a Sáb</p>
                <p className="font-exo text-sm text-gray-600">19h às 00h</p>
              </div>
              <div className="flex flex-col items-center text-center group">
                <div className="bg-[#E02023]/10 p-4 rounded-full mb-3 group-hover:bg-[#E02023]/20 transition-all group-hover:-translate-y-1">
                  <MapPin className="lucide lucide-map-pin w-8 h-8 text-[#E02023]" />
                </div>
                <p className="font-exo font-semibold text-black">Jardim Europa</p>
                <p className="font-exo text-sm text-gray-600">Goiânia - GO</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=himitsu%2Fimage%2068.png&version_id=null"
              alt="Combinado Himitsu de 40 peças"
              className="w-full h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

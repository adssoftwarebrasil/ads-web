import { Instagram, Facebook } from 'lucide-react';

export default function Social() {
  return (
    <section className="py-20 bg-[rgb(245,245,245)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-black mb-12">
          Siga-nos nas Redes Sociais
        </h2>
        <div className="flex justify-center items-center gap-8">
          <a
            href="https://www.instagram.com/sj_bikeoficial"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-full p-1 hover:scale-110 transition-transform duration-300">
              <div className="bg-white rounded-full p-6">
                <Instagram className="lucide lucide-instagram w-16 h-16 text-purple-600" />
              </div>
            </div>
            <p className="mt-4 font-bold text-black">@sj_bikeoficial</p>
          </a>
          <a
            href="https://www.facebook.com/SJBIKEOFICIAL?locale=pt_BR"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="bg-blue-600 rounded-full p-1 hover:scale-110 transition-transform duration-300">
              <div className="bg-white rounded-full p-6">
                <Facebook className="lucide lucide-facebook w-16 h-16 text-blue-600" />
              </div>
            </div>
            <p className="mt-4 font-bold text-black">SJ Bike</p>
          </a>
        </div>
      </div>
    </section>
  );
}

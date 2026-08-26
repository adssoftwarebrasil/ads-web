import { useEffect, useState } from 'react';

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href="http://wa.me/556684533788?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20toldo%20ou%20cobertura."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 transition-all duration-500 group ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <span className="bg-white text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap hidden sm:inline-block opacity-0 group-hover:opacity-100 transition-opacity">
        Fale conosco!
      </span>
      <div className="relative">
        <div className="relative w-14 h-14 bg-green-500 hover:bg-green-400 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="white" className="w-8 h-8">
            <path d="M16 0C7.163 0 0 7.163 0 16c0 2.826.737 5.477 2.028 7.782L0 32l8.468-2.003A15.944 15.944 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.25c-2.475 0-4.9-.665-7.017-1.923l-.503-.3-5.026 1.19 1.19-4.9-.328-.52A13.19 13.19 0 012.75 16C2.75 8.694 8.694 2.75 16 2.75S29.25 8.694 29.25 16 23.306 29.25 16 29.25zm7.26-9.87c-.397-.198-2.35-1.16-2.714-1.293-.364-.132-.63-.198-.895.199-.264.397-1.026 1.293-1.258 1.557-.232.264-.463.297-.86.099-.397-.198-1.676-.618-3.193-1.97-1.18-1.052-1.977-2.352-2.209-2.749-.232-.397-.025-.611.174-.809.179-.178.397-.463.595-.694.199-.232.264-.397.397-.661.132-.264.066-.496-.033-.694-.099-.198-.895-2.158-1.226-2.953-.323-.775-.651-.67-.895-.683l-.762-.013c-.264 0-.694.099-1.058.496-.364.397-1.39 1.359-1.39 3.318 0 1.959 1.423 3.852 1.622 4.116.198.264 2.8 4.276 6.783 5.997.948.409 1.688.653 2.265.836.952.302 1.818.26 2.503.158.764-.114 2.35-.961 2.682-1.889.331-.928.331-1.723.232-1.889-.099-.165-.364-.264-.762-.462z" />
          </svg>
        </div>
      </div>
    </a>
  );
}

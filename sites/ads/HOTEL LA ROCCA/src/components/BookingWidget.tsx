import { useEffect } from 'react';

const WIDGET_SRC = 'https://widgets.soufoco.com.br/search/index.js';

export default function BookingWidget() {
  useEffect(() => {
    if (document.querySelector(`script[src="${WIDGET_SRC}"]`)) return;
    const script = document.createElement('script');
    script.type = 'module';
    script.src = WIDGET_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="reservas" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Reserve{' '}
            <span className="text-[rgb(190,0,3)]">direto com o hotel</span>
          </h2>
          <div className="h-1 w-24 bg-[rgb(190,0,3)] mx-auto mb-4"></div>
          <p className="text-gray-600 leading-relaxed">
            Consulte disponibilidade e faça sua reserva sem intermediários.
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div id="motor-reserva-widget-search" establishment-id="4642"></div>
        </div>
      </div>
    </section>
  );
}

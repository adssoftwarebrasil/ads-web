const ABOUT_IMG = 'https://storage.lucasmendes.dev/site-sp/cotec%2FQuem%20somos.webp';

export default function About() {
  return (
    <section id="about" className="relative py-16 md:py-24 bg-white overflow-hidden">
      <div
        className="absolute top-10 right-10 w-96 h-96 rounded-full bg-[#FB6F11] opacity-5 pointer-events-none"
        style={{ filter: 'blur(80px)' }}
      ></div>
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="transition-all duration-800 opacity-100 translate-x-0">
            <img
              src={ABOUT_IMG}
              alt="Quem somos"
              className="rounded-3xl shadow-xl w-full h-auto"
              loading="lazy"
            />
          </div>
          <div className="transition-all duration-800 opacity-100 translate-x-0">
            <h2 className="text-[#333333] font-bold mb-4 text-3xl md:text-4xl lg:text-5xl">Quem somos</h2>
            <h3 className="text-[#FB6F11] font-semibold mb-6 text-2xl md:text-3xl">Cotec Produtos Ortopédicos</h3>
            <p className="text-[#333333] text-opacity-80 leading-relaxed text-lg">
              Na COTEC Produtos Ortopédicos, cuidamos do seu movimento. Nossa dedicação à inovação e ao bem-estar dos
              nossos pacientes é o que nos impulsiona a oferecer soluções ortopédicas de alta qualidade, adaptadas às
              necessidades individuais de cada pessoa. Nos destacamos pela excelência e tecnologia no desenvolvimento de
              próteses e órteses que promovem a reabilitação, mobilidade e qualidade de vida.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

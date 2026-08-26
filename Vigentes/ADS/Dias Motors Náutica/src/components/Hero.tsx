import WhatsappIcon from './WhatsappIcon';

const PARTICLES = [
  { width: '5.6886px', height: '3.01224px', left: '18.8097%', top: '75.9939%', animationDelay: '2.25305s', animationDuration: '14.0315s' },
  { width: '2.46831px', height: '7.41543px', left: '9.1694%', top: '33.1446%', animationDelay: '3.85904s', animationDuration: '14.9803s' },
  { width: '4.37937px', height: '4.96522px', left: '76.2211%', top: '88.2142%', animationDelay: '1.64177s', animationDuration: '17.0183s' },
  { width: '5.11125px', height: '4.53808px', left: '29.0346%', top: '31.5452%', animationDelay: '2.53275s', animationDuration: '10.9421s' },
  { width: '7.04343px', height: '7.95973px', left: '0.942399%', top: '15.9511%', animationDelay: '4.14017s', animationDuration: '19.8015s' },
  { width: '5.16486px', height: '3.86415px', left: '14.5702%', top: '13.7657%', animationDelay: '2.52976s', animationDuration: '15.4917s' },
  { width: '6.31139px', height: '2.78683px', left: '3.47523%', top: '71.3048%', animationDelay: '1.4236s', animationDuration: '14.0889s' },
  { width: '4.87092px', height: '3.21495px', left: '82.8256%', top: '94.0997%', animationDelay: '1.88597s', animationDuration: '18.3702s' },
  { width: '6.30307px', height: '6.65244px', left: '0.30799%', top: '95.851%', animationDelay: '0.794824s', animationDuration: '15.2024s' },
  { width: '7.57464px', height: '7.05298px', left: '55.8738%', top: '28.0274%', animationDelay: '2.84587s', animationDuration: '16.3902s' },
  { width: '7.31719px', height: '3.08361px', left: '49.3564%', top: '78.7849%', animationDelay: '4.58553s', animationDuration: '17.0933s' },
  { width: '4.01358px', height: '6.81613px', left: '67.6309%', top: '40.5431%', animationDelay: '1.86566s', animationDuration: '15.5807s' },
  { width: '5.28954px', height: '3.87421px', left: '94.0769%', top: '40.0036%', animationDelay: '2.69703s', animationDuration: '11.7873s' },
  { width: '3.62984px', height: '4.72708px', left: '48.5117%', top: '77.7745%', animationDelay: '3.52287s', animationDuration: '14.6509s' },
  { width: '7.88521px', height: '4.67706px', left: '53.4948%', top: '36.0949%', animationDelay: '3.12468s', animationDuration: '12.0186s' },
];

const WHATSAPP_URL =
  'https://wa.me/5562982830047?text=Olá! Gostaria de saber mais sobre os produtos da Dias Motors.';

export default function Hero() {
  const scrollToProdutos = () => {
    document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'linear-gradient(135deg, rgb(30, 43, 75) 0%, rgb(19, 161, 209) 100%)',
          transform: 'translateY(0px)',
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
          <svg
            className="absolute bottom-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="rgba(255,255,255,0.05)"
              d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              className="animate-wave"
            ></path>
            <path
              fill="rgba(255,255,255,0.03)"
              d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              className="animate-wave-slow"
            ></path>
          </svg>
        </div>
      </div>
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {PARTICLES.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10 animate-float"
            style={p}
          ></div>
        ))}
      </div>
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-20 text-center pt-20">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-8 animate-fade-in">
          <div className="w-2 h-2 bg-[rgb(19,161,209)] rounded-full animate-pulse"></div>
          <span className="text-white/90 text-sm font-medium">
            Revenda Autorizada Yamaha
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
          Sua Aventura Náutica
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[rgb(19,161,209)]">
            Começa Aqui
          </span>
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto mb-4 animate-fade-in-up animation-delay-200 leading-relaxed">
          Embarcações, Motores Yamaha e Jet-Ski em Goiânia
        </p>
        <p className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mx-auto mb-12 animate-fade-in-up animation-delay-300">
          Tradição e qualidade para navegar com segurança
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up animation-delay-400">
          <button
            onClick={scrollToProdutos}
            className="group relative w-full sm:w-auto bg-[rgb(19,161,209)] text-white px-8 py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-[rgb(17,145,188)] transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[rgb(19,161,209)]/30 overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Conheça Nossos Produtos
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          </button>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto border-2 border-white/80 text-white px-8 py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-white hover:text-[rgb(30,43,75)] hover:border-white transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2"
          >
            <WhatsappIcon size={20} />
            Fale com Especialista
            <div className="w-0 group-hover:w-2 h-2 rounded-full bg-[rgb(19,161,209)] transition-all duration-300"></div>
          </a>
        </div>
      </div>
      <button
        onClick={scrollToProdutos}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-2 group cursor-pointer"
        aria-label="Scroll para produtos"
      >
        <span className="text-white/70 text-sm font-medium animate-fade-in-up animation-delay-600">
          Descubra mais
        </span>
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2 group-hover:border-white/70 transition-colors">
          <div className="w-1 h-2 bg-white/70 rounded-full animate-scroll-down"></div>
        </div>
      </button>
    </section>
  );
}

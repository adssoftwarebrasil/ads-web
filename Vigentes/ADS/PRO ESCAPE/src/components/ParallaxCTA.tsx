interface ParallaxCTAProps {
  title: string
  subtitle: string
  buttonText: string
  backgroundImage: string
  onButtonClick: () => void
}

export const ParallaxCTA = ({ title, subtitle, buttonText, backgroundImage, onButtonClick }: ParallaxCTAProps) => {
  return (
    <section className="relative h-[500px] bg-fixed bg-center bg-cover flex items-center justify-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-5xl lg:text-6xl font-extrabold text-white mb-6">
          {title}
        </h2>
        <p className="text-2xl text-[rgb(254,182,32)] mb-10 font-light">
          {subtitle}
        </p>
        <button
          onClick={onButtonClick}
          className="bg-[rgb(254,182,32)] text-black px-14 py-5 rounded-full text-xl font-bold hover:scale-105 hover:shadow-[0_20px_60px_rgba(254,182,32,0.5)] transition-all duration-300"
        >
          {buttonText}
        </button>
      </div>
    </section>
  )
}

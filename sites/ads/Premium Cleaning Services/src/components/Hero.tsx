import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://iili.io/KwXUPpa.jpg")', filter: 'brightness(0.4)' }}
      ></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Exceptional Cleaning,
          <br />
          Unmatched Reliability
        </h1>
        <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Transform your space with professional cleaning services trusted by 500+ clients
        </p>
        <button className="bg-[#D4AF78] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#B59C6B] transition-all hover:scale-105 inline-flex items-center gap-2">
          Get a Free Estimate
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}

import { Instagram, ArrowRight } from 'lucide-react';

export default function InstagramCTA() {
  return (
    <section className="py-16 bg-[rgb(250,245,238)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] p-1">
          <div className="bg-[#1a0a00]/90 rounded-[22px] px-8 py-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] mb-6 shadow-lg">
              <Instagram size={32} className="text-white" />
            </div>
            <div className="flex items-center gap-3 mb-4 justify-center">
              <span className="h-px w-10 bg-[rgb(183,149,108)]"></span>
              <span className="text-[rgb(183,149,108)] text-xs font-semibold uppercase tracking-widest">
                @dom_manoel
              </span>
              <span className="h-px w-10 bg-[rgb(183,149,108)]"></span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-bold mb-4 leading-tight">
              Conheça mais sobre os nossos
              <br />
              <span className="text-[rgb(183,149,108)]">produtos no Instagram</span>
            </h2>
            <p className="text-white/65 text-base mb-8 max-w-lg mx-auto">
              Acompanhe nossos lançamentos, inspirações de decoração e novidades em primeira mão.
            </p>
            <a
              href="https://www.instagram.com/dom_manoel/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white font-bold px-10 py-4 rounded-full hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300 shadow-lg text-base"
            >
              <Instagram size={20} />
              Seguir no Instagram
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

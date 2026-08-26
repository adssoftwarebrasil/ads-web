import { useEffect, useRef, useState } from 'react';
import { Instagram } from 'lucide-react';

export default function InstagramFeed() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && !scriptLoaded.current) {
      const script = document.createElement('script');
      script.async = true;
      script.src = '//www.instagram.com/embed.js';
      document.body.appendChild(script);
      scriptLoaded.current = true;

      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    }
  }, [isVisible]);

  const posts = [
    'https://www.instagram.com/reel/DN6a9RwkVE8/',
    'https://www.instagram.com/reel/DIMEo02M4vJ/',
    'https://www.instagram.com/reel/DCHRn-yu2xM/',
  ];

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={`text-center mb-12 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          } transition-all duration-700`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="text-[#00adec]" size={36} />
            <h2 className="text-3xl lg:text-4xl font-bold text-[#172059]">
              Siga-nos no Instagram
            </h2>
          </div>
          <div className="w-24 h-1 bg-[#81c227] mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">
            Confira nossas novidades, produtos e promoções
          </p>
          <a
            href="https://www.instagram.com/3gcelulareschapeco/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-[#00adec] hover:text-[#0095cd] font-semibold transition-colors"
          >
            @3gcelulareschapeco
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((postUrl, index) => (
            <div
              key={index}
              className={`${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } transition-all duration-700`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-[#f5f5f5] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <blockquote
                  className="instagram-media"
                  data-instgrm-captioned
                  data-instgrm-permalink={`${postUrl}?utm_source=ig_embed&utm_campaign=loading`}
                  data-instgrm-version="14"
                  style={{
                    background: '#FFF',
                    border: 0,
                    borderRadius: '3px',
                    boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                    margin: '1px',
                    maxWidth: '540px',
                    minWidth: '326px',
                    padding: 0,
                    width: '100%',
                  }}
                ></blockquote>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.instagram.com/3gcelulareschapeco/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 hover:shadow-lg hover:scale-105"
          >
            <Instagram size={24} />
            Ver Mais no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

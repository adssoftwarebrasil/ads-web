interface Reel {
  label: string;
  src: string;
  height: number;
}

const embedStyle: React.CSSProperties = {
  background: 'white',
  maxWidth: '540px',
  width: '99.375%',
  borderRadius: '3px',
  border: '1px solid rgb(219, 219, 219)',
  boxShadow: 'none',
  display: 'block',
  margin: '0px 0px 12px',
  minWidth: '326px',
  padding: '0px',
};

const reels: Reel[] = [
  {
    label: 'Formatura',
    src: 'https://www.instagram.com/reel/DDs1EVDPjLm/embed/captioned/?cr=1&v=14&wp=360&rd=https%3A%2F%2Fespaconobremt.com.br&rp=%2F',
    height: 846,
  },
  {
    label: 'Casamento',
    src: 'https://www.instagram.com/reel/CrERBXeOUif/embed/captioned/?cr=1&v=14&wp=360&rd=https%3A%2F%2Fespaconobremt.com.br&rp=%2F',
    height: 870,
  },
  {
    label: '15 Anos',
    src: 'https://www.instagram.com/reel/DPa4cHHDWNB/embed/captioned/?cr=1&v=14&wp=360&rd=https%3A%2F%2Fespaconobremt.com.br&rp=%2F',
    height: 744,
  },
  {
    label: 'Gastronomia',
    src: 'https://www.instagram.com/p/DPRz1yOEcle/embed/captioned/?cr=1&v=14&wp=360&rd=https%3A%2F%2Fespaconobremt.com.br&rp=%2F',
    height: 791,
  },
  {
    label: 'Infantil',
    src: 'https://www.instagram.com/p/DO1ZNN1kfHy/embed/captioned/?cr=1&v=14&wp=360&rd=https%3A%2F%2Fespaconobremt.com.br&rp=%2F',
    height: 779,
  },
  {
    label: 'Aniversário',
    src: 'https://www.instagram.com/p/DNVgpZqumaP/embed/captioned/?cr=1&v=14&wp=360&rd=https%3A%2F%2Fespaconobremt.com.br&rp=%2F',
    height: 602,
  },
];

export default function Momentos() {
  return (
    <section className="py-24 bg-gradient-to-b from-amber-50/30 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Momentos{' '}
            <span className="bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent">
              Inesquecíveis
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Confira nossos eventos reais no Instagram
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reels.map((reel, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="mb-4">
                <span className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md">
                  {reel.label}
                </span>
              </div>
              <iframe
                className="instagram-media instagram-media-rendered"
                id={`instagram-embed-${i}`}
                src={reel.src}
                allowTransparency
                allowFullScreen
                frameBorder={0}
                height={reel.height}
                scrolling="no"
                style={embedStyle}
              ></iframe>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/espaconobre_"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition transform hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Siga @espaconobre_
          </a>
        </div>
      </div>
    </section>
  );
}

const BRAND = 'rgb(172, 0, 0)';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5591993424086"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Falar no WhatsApp"
    >
      <div className="relative">
        <div
          className="absolute inset-0 rounded-full blur-lg opacity-60 group-hover:opacity-80 transition-opacity"
          style={{ backgroundColor: BRAND }}
        ></div>
        <div
          className="relative w-16 h-16 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300"
          style={{ backgroundColor: BRAND }}
        >
          <svg
            viewBox="0 0 32 32"
            className="w-9 h-9"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 0C7.164 0 0 7.164 0 16c0 2.825.738 5.478 2.028 7.778L0 32l8.384-2.018A15.91 15.91 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm8.282 22.668c-.36.995-1.785 1.82-2.912 2.058-.753.158-1.735.288-5.044-.988-4.238-1.63-6.972-5.91-7.184-6.188-.212-.278-1.73-2.296-1.73-4.378 0-2.082 1.095-3.106 1.485-3.53.39-.425.85-.53 1.133-.53.283 0 .565.003.813.013.26.012.61-.098.954.727.36.865 1.228 2.994 1.337 3.21.108.216.18.468.036.746-.144.278-.216.45-.432.693-.216.242-.454.54-.648.725-.216.206-.44.43-.19.843.252.413 1.12 1.845 2.402 2.99 1.65 1.474 3.042 1.933 3.468 2.15.425.216.675.18.923-.108.252-.288 1.08-1.26 1.368-1.692.288-.432.576-.36.972-.216.396.144 2.508 1.182 2.937 1.397.43.216.72.324.824.504.108.18.108 1.044-.252 2.04z"></path>
          </svg>
        </div>
        <div
          className="absolute -top-1 -right-1 w-4 h-4 rounded-full animate-ping"
          style={{ backgroundColor: BRAND }}
        ></div>
        <div
          className="absolute -top-1 -right-1 w-4 h-4 rounded-full"
          style={{ backgroundColor: BRAND }}
        ></div>
      </div>
    </a>
  );
}

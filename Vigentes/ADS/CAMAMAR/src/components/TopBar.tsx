import { Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="bg-primary py-2 px-4 hidden md:flex items-center justify-between text-primary-foreground text-sm">
      <div className="flex items-center gap-6">
        <a href="tel:6232751030" className="flex items-center gap-1 hover:opacity-80">
          <Phone size={14} />
          <span>(62) 3275-1030</span>
        </a>
        <a href="https://wa.me/5562982972917" className="flex items-center gap-1 hover:opacity-80">
          <FaWhatsapp size={14} />
          <span>(62) 98297-2917</span>
        </a>
        <a href="https://wa.me/5562985374315" className="flex items-center gap-1 hover:opacity-80">
          <FaWhatsapp size={14} />
          <span>(62) 98537-4315</span>
        </a>
      </div>
      <div className="flex items-center gap-3">
        <a href="https://www.facebook.com/Camamargoiania" target="_blank" rel="noopener noreferrer" className="hover:opacity-80"><FaFacebookF size={14} /></a>
        <a href="https://www.instagram.com/Camamargoiania/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80"><FaInstagram size={14} /></a>
        <a href="https://twitter.com/camamar_goiania" target="_blank" rel="noopener noreferrer" className="hover:opacity-80"><FaTwitter size={14} /></a>
      </div>
    </div>
  );
};

export default TopBar;

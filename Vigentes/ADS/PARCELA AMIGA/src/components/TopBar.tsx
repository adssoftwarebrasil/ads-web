import { IconFacebook, IconInstagram, IconPhone } from './icons';

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-inner">
        <span>🛡️ Reduza a parcela do seu automóvel com segurança jurídica</span>
        <div className="topbar-right">
          <div className="topbar-phone">
            <IconPhone /> 0800 555 2569
          </div>
          <div className="topbar-socials">
            <a href="https://www.facebook.com/parcelaamiga" className="social-btn social-fb" title="Facebook">
              <IconFacebook />
            </a>
            <a href="https://www.instagram.com/parcelaamiga/" className="social-btn social-ig" title="Instagram">
              <IconInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

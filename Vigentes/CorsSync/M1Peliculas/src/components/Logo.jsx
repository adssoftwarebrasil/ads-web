import brandArtwork from "../assets/identidade-m1.png";

export default function Logo() {
  return (
    <span className="brand-logo">
      <img src={brandArtwork} alt="M1 Películas" width="1280" height="853" />
    </span>
  );
}

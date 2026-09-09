import hotelLogo from "../assets/brand/paris-hotel-logo.png";

function BrandMark({ compact = false }) {
  return (
    <span className={`brand-mark${compact ? " brand-mark--compact" : ""}`}>
      <img src={hotelLogo} alt="Paris Hotel" />
    </span>
  );
}

export default BrandMark;

export default function Logo({ inverse = false, compact = false }) {
  const ink = inverse ? "#fff8e9" : "#303033";

  return (
    <span className={`brand-logo ${compact ? "brand-logo--compact" : ""}`}>
      <svg
        className="brand-logo__mark"
        viewBox="0 0 58 48"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M10 36.5c0-10.8 8.2-26.5 22.8-31.3 1.4 8.7 12.4 14.3 13.9 24 1.4 9.2-5.6 14.4-15.1 14.4-8 0-13.2-3-13.2-8.1 0-4.1 3.5-7 7.6-7.2"
          fill="none"
          stroke="#f36f21"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="7.4"
        />
        <circle cx="9.5" cy="39" r="6.2" fill="#f36f21" />
      </svg>
      <span className="brand-logo__type" style={{ color: ink }}>
        <strong>ovos</strong>
        <b>Amano</b>
      </span>
    </span>
  );
}

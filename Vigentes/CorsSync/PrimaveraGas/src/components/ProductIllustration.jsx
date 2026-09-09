import { useId } from 'react';

export default function ProductIllustration({ type }) {
  const id = useId().replace(/:/g, '');
  if (type === 'gas') {
    return (
      <svg
        className="product-illustration gas-illustration"
        viewBox="0 0 260 300"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id={`${id}-body`}
            x1="52"
            y1="190"
            x2="214"
            y2="170"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#929A9F" />
            <stop offset=".3" stopColor="#E1E6E7" />
            <stop offset=".55" stopColor="#C5CDCF" />
            <stop offset="1" stopColor="#7D888D" />
          </linearGradient>
          <linearGradient
            id={`${id}-top`}
            x1="66"
            y1="52"
            x2="180"
            y2="120"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#EDF0F0" />
            <stop offset="1" stopColor="#879399" />
          </linearGradient>
        </defs>
        <ellipse
          cx="130"
          cy="275"
          rx="87"
          ry="12"
          fill="#5C2925"
          opacity=".12"
        />
        <path d="M75 248h110v15c0 8-110 8-110 0v-15Z" fill="#899397" />
        <path
          d="M89 87c-27 9-40 25-40 54v78c0 34 25 45 81 45s81-11 81-45v-78c0-29-13-45-40-54H89Z"
          fill={`url(#${id}-body)`}
          stroke="#7C898F"
          strokeWidth="2"
        />
        <path
          d="M54 223c31 13 122 13 152 0M50 157c35 11 125 11 160 0"
          stroke="#7A858A"
          strokeOpacity=".48"
          strokeWidth="3"
        />
        <path
          d="M64 125c25-24 106-23 131 0"
          stroke="#F8FAFA"
          strokeOpacity=".65"
          strokeWidth="3"
        />
        <rect x="117" y="58" width="25" height="39" rx="5" fill="#AF8044" />
        <path
          d="M110 61h40"
          stroke="#D8A455"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M80 45c20-9 79-9 100 0v53c-21 12-79 12-100 0V45Zm16 10v29c17 5 50 5 67 0V55c-20-5-48-5-67 0Z"
          fill={`url(#${id}-top)`}
          fillRule="evenodd"
          stroke="#879399"
          strokeWidth="1.5"
        />
        <rect x="78" y="169" width="104" height="46" rx="23" fill="#F6F5ED" />
        <path d="M104 181c-12 8 3 13-3 21 14-5 9-12 3-21Z" fill="#ED2D29" />
        <text
          x="119"
          y="196"
          fill="#3B3D3C"
          fontSize="12"
          fontFamily="sans-serif"
          fontWeight="700"
        >
          GÁS
        </text>
      </svg>
    );
  }
  return (
    <svg
      className="product-illustration water-illustration"
      viewBox="0 0 260 300"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id={`${id}-water`}
          x1="57"
          y1="180"
          x2="211"
          y2="180"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#438CC5" />
          <stop offset=".33" stopColor="#99C9E7" />
          <stop offset=".59" stopColor="#7EB6DC" />
          <stop offset="1" stopColor="#397DAD" />
        </linearGradient>
      </defs>
      <ellipse cx="130" cy="279" rx="78" ry="11" fill="#285D7D" opacity=".12" />
      <path
        d="M106 46h48v31c0 15 45 32 47 62v104c0 25-18 31-71 31s-71-6-71-31V139c2-30 47-47 47-62V46Z"
        fill={`url(#${id}-water)`}
        stroke="#548FBD"
        strokeWidth="2"
      />
      <rect x="103" y="38" width="54" height="21" rx="5" fill="#28688E" />
      <path
        d="M112 43v11m9-11v11m9-11v11m9-11v11m9-11v11"
        stroke="#5793B8"
        strokeWidth="2"
      />
      <path
        d="M82 125c-8 9-11 16-11 33v69"
        stroke="#CFE8F6"
        strokeOpacity=".55"
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path
        d="M61 149c39 7 99 7 138 0m-138 14c39 7 99 7 138 0m-138 64c39 7 99 7 138 0m-138 14c39 7 99 7 138 0"
        stroke="#377CAB"
        strokeOpacity=".6"
        strokeWidth="4"
      />
      <path d="M84 180c25-4 67-4 92 0v33c-28 4-64 4-92 0v-33Z" fill="#F6FBFD" />
      <path
        d="M110 185s-8 10-8 15a8 8 0 0 0 16 0c0-5-8-15-8-15Z"
        fill="#589BC8"
      />
      <text
        x="126"
        y="201"
        fill="#28688E"
        fontSize="11"
        fontFamily="sans-serif"
        fontWeight="700"
      >
        ÁGUA
      </text>
      <path
        d="M86 258c28 4 62 4 89-1"
        stroke="#B4D8EC"
        strokeOpacity=".65"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

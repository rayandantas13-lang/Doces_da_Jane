type BrandMarkProps = {
  size?: number;
  ring?: string;
  whisk?: string;
  heart?: string;
  className?: string;
};

/**
 * Emblema da Docinhos da Jane recriado em SVG:
 * anel duplo, batedor (whisk) e corações com seus fiozinhos.
 */
export default function BrandMark({
  size = 48,
  ring = "#ec5f86",
  whisk = "#5f3529",
  heart = "#ec5f86",
  className = "",
}: BrandMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* anel duplo */}
      <circle cx="100" cy="100" r="92" stroke={ring} strokeWidth="2.4" />
      <circle cx="100" cy="100" r="84" stroke={ring} strokeWidth="1.2" opacity="0.7" />

      {/* florezinhas laterais (9h e 3h) */}
      {[
        { cx: 12, cy: 100 },
        { cx: 188, cy: 100 },
      ].map((f, i) => (
        <g key={i} transform={`translate(${f.cx} ${f.cy})`} opacity="0.85">
          {[0, 72, 144, 216, 288].map((a) => (
            <ellipse
              key={a}
              cx="0"
              cy="-5"
              rx="2.4"
              ry="5"
              fill={ring}
              transform={`rotate(${a})`}
            />
          ))}
          <circle r="2.2" fill="#fff" />
        </g>
      ))}

      {/* fiozinhos com corações saindo do cabo */}
      <path
        d="M104 70 C 78 64, 66 70, 58 78"
        stroke={ring}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M120 64 C 142 58, 152 64, 158 72"
        stroke={ring}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M58 78 c -5 -6 -13 -2 -10 5 c 2 5 10 9 10 9 c 0 0 8 -4 10 -9 c 3 -7 -5 -11 -10 -5 z"
        fill={heart}
      />
      <path
        d="M158 72 c -4 -5 -11 -2 -8 4 c 2 4 8 7 8 7 c 0 0 6 -3 8 -7 c 3 -6 -4 -9 -8 -4 z"
        fill={heart}
      />

      {/* batedor (whisk) rotacionado */}
      <g transform="rotate(-32 112 78)">
        {/* cabo */}
        <rect x="104" y="36" width="16" height="34" rx="8" fill={whisk} />
        <rect x="104" y="64" width="16" height="8" rx="3" fill={heart} />
        {/* cabeça: aro + fios */}
        <path
          d="M96 74 C 96 104, 128 104, 128 74"
          stroke={ring}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path d="M103 74 C 103 100, 121 100, 121 74" stroke={ring} strokeWidth="2.4" />
        <path d="M110 74 C 110 98, 114 98, 114 74" stroke={ring} strokeWidth="2.2" />
        <line x1="96" y1="74" x2="128" y2="74" stroke={ring} strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>
  );
}

type SealProps = {
  size?: number;
  className?: string;
};

/** Selo circular com texto girando — "FEITO COM AMOR · DOCINHOS DA JANE ·". */
export default function Seal({ size = 132, className = "" }: SealProps) {
  const text = "FEITO COM AMOR · DOCINHOS DA JANE · ";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={className}
      aria-label="Feito com amor"
    >
      <defs>
        <path
          id="seal-path"
          d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0"
          fill="none"
        />
      </defs>
      <circle cx="100" cy="100" r="96" fill="#fff7fa" />
      <circle cx="100" cy="100" r="92" fill="none" stroke="#ec5f86" strokeWidth="1.5" opacity="0.5" />
      <g className="animate-spin-slow" style={{ transformOrigin: "100px 100px" }}>
        <text
          fill="#cf3a68"
          style={{
            fontFamily: "Nunito, sans-serif",
            fontWeight: 800,
            fontSize: "15px",
            letterSpacing: "2.4px",
          }}
        >
          <textPath href="#seal-path" startOffset="0">
            {text}
          </textPath>
        </text>
      </g>
      <text
        x="100"
        y="100"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="58"
        aria-hidden="true"
      >
        🧁
      </text>
    </svg>
  );
}

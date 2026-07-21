import { useRef } from "react";
import { TESTIMONIALS } from "../data/testimonials";
import Reveal from "./Reveal";

const VARIANT = [
  {
    card: "bg-white border border-blush rotate-[-1deg]",
    quote: "text-cocoa",
    mark: "text-rosa/25",
    avatar: "bg-blush",
    role: "text-cocoasoft",
  },
  {
    card: "bg-rosa text-cream rotate-[1.3deg] shadow-soft",
    quote: "text-cream",
    mark: "text-cream/25",
    avatar: "bg-cream/20",
    role: "text-cream/70",
  },
  {
    card: "bg-blush border-2 border-dashed border-rosa/40 rotate-[-0.6deg]",
    quote: "text-cocoa",
    mark: "text-rosa/30",
    avatar: "bg-white",
    role: "text-cocoasoft",
  },
];

export default function Testimonials() {
  const scroller = useRef<HTMLDivElement | null>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 380), behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-blush py-24">
      {/* aspas gigante de fundo */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 right-2 select-none font-serif text-[16rem] leading-none text-rosa/10 sm:text-[22rem]"
      >
        &rdquo;
      </span>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-rosadeep">
              Quem prova, volta
            </span>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-cocoa sm:text-5xl">
              Carinho em forma de <span className="font-script text-rosa">recadinho</span>
            </h2>
          </div>

          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Ver depoimento anterior"
              className="grid h-12 w-12 place-items-center rounded-full border border-rosa/40 bg-white text-rosadeep transition-all hover:-translate-y-0.5 hover:bg-rosa hover:text-cream active:scale-95"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Ver próximo depoimento"
              className="grid h-12 w-12 place-items-center rounded-full border border-rosa/40 bg-white text-rosadeep transition-all hover:-translate-y-0.5 hover:bg-rosa hover:text-cream active:scale-95"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </Reveal>
      </div>

      {/* carrossel full-bleed */}
      <div
        ref={scroller}
        className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 pb-8 sm:px-8"
      >
        {/* respiro inicial alinhado ao container em telas grandes */}
        <span aria-hidden="true" className="hidden w-[max(0px,calc((100vw-80rem)/2))] shrink-0 lg:block" />

        {TESTIMONIALS.map((t, i) => {
          const v = VARIANT[i % VARIANT.length];
          const wide = i % VARIANT.length === 0;
          return (
            <figure
              key={t.name}
              className={[
                "relative shrink-0 snap-start rounded-[28px] p-7 shadow-[var(--shadow-card)] transition-transform duration-500 hover:rotate-0",
                wide ? "min-w-[82vw] sm:min-w-[420px]" : "min-w-[80vw] sm:min-w-[330px]",
                v.card,
              ].join(" ")}
            >
              <span
                aria-hidden="true"
                className={`pointer-events-none absolute left-5 top-2 select-none font-serif text-7xl leading-none ${v.mark}`}
              >
                &ldquo;
              </span>

              <div className="flex items-center gap-1 text-rosa" aria-label="5 de 5 estrelas">
                {"★★★★★".split("").map((s, k) => (
                  <span key={k} className="text-sm">{s}</span>
                ))}
              </div>

              <blockquote className={`mt-4 font-serif text-lg italic leading-relaxed ${v.quote}`}>
                {t.quote}
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3">
                <span className={`grid h-11 w-11 place-items-center rounded-full text-xl ${v.avatar}`}>
                  {t.emoji}
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="font-sans text-sm font-extrabold">{t.name}</span>
                  <span className={`text-[11px] font-bold uppercase tracking-wider ${v.role}`}>
                    {t.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          );
        })}

        <span aria-hidden="true" className="w-1 shrink-0 sm:w-4" />
      </div>
    </section>
  );
}

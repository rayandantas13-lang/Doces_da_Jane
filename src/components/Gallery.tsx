import type { CSSProperties } from "react";
import g1 from "../assets/gallery-1.jpg";
import g2 from "../assets/gallery-2.jpg";
import g3 from "../assets/gallery-3.jpg";
import Reveal from "./Reveal";

type Item =
  | { kind: "photo"; src: string; alt: string; caption: string; aspect: string; rot: string }
  | {
      kind: "polaroid";
      emoji: string;
      caption: string;
      grad: string;
      aspect: string;
      rot: string;
      tape: string;
    };

const ITEMS: Item[] = [
  {
    kind: "photo",
    src: g1,
    alt: "Fileira de brigadeiros gourmet com coberturas variadas",
    caption: "Brigadeiros de colher, um a um",
    aspect: "aspect-[3/4]",
    rot: "-1.4deg",
  },
  {
    kind: "polaroid",
    emoji: "🧁",
    caption: "fornada de terça",
    grad: "from-petal via-blush to-cream",
    aspect: "aspect-[4/5]",
    rot: "2.2deg",
    tape: "bg-rosa/30",
  },
  {
    kind: "photo",
    src: g2,
    alt: "Mesa de festa rosa com doces variados e balões ao fundo",
    caption: "Mesa posta pra celebrar 🎉",
    aspect: "aspect-[4/3]",
    rot: "1deg",
  },
  {
    kind: "polaroid",
    emoji: "🍓",
    caption: "morango do dia",
    grad: "from-rosasoft/60 via-petal to-blush",
    aspect: "aspect-square",
    rot: "-2.6deg",
    tape: "bg-rosasoft/40",
  },
  {
    kind: "photo",
    src: g3,
    alt: "Caixa presente rosa aberta com doces artesanais e pétalas",
    caption: "Presente pronto pra emocionar",
    aspect: "aspect-square",
    rot: "-1deg",
  },
  {
    kind: "polaroid",
    emoji: "🍫",
    caption: "banho de chocolate",
    grad: "from-cocoa/20 via-petal to-blush",
    aspect: "aspect-[4/5]",
    rot: "1.8deg",
    tape: "bg-cocoa/25",
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="relative scroll-mt-28 bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-rosadeep">
            Da nossa vitrine
          </span>
          <h2 className="mt-3 font-serif text-4xl leading-tight text-cocoa sm:text-5xl">
            Um pouquinho do que sai <span className="font-script text-rosa">do forno</span>
          </h2>
          <p className="mt-4 text-lg text-cocoasoft">
            Cada docinho é fotografado com o mesmo carinho com que é feito. Dá uma espiada —
            e depois corre pro cardápio. 😉
          </p>
        </Reveal>
      </div>

      <Reveal delay={100} className="mx-auto mt-12 max-w-7xl px-5 sm:px-8">
        <div className="columns-2 gap-5 md:columns-3 [&>*]:mb-5">
          {ITEMS.map((item, i) =>
            item.kind === "photo" ? (
              <figure
                key={i}
                className="group relative block break-inside-avoid overflow-hidden rounded-[24px] shadow-[var(--shadow-card)]"
                style={{ transform: `rotate(${item.rot})` } as CSSProperties}
              >
                <div className={`${item.aspect} w-full overflow-hidden`}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-3 bg-gradient-to-t from-cocoa/80 via-cocoa/30 to-transparent p-4 font-serif text-base italic text-cream opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {item.caption}
                </figcaption>
              </figure>
            ) : (
              <figure
                key={i}
                className="relative block break-inside-avoid rounded-[6px] bg-white p-3 pb-10 shadow-[var(--shadow-card)] transition-transform duration-500 hover:rotate-0"
                style={{ transform: `rotate(${item.rot})` } as CSSProperties}
              >
                {/* fita washi */}
                <span
                  aria-hidden="true"
                  className={`absolute -top-2 left-1/2 h-5 w-20 -translate-x-1/2 -rotate-6 ${item.tape}`}
                />
                <div className={`${item.aspect} grid w-full place-items-center rounded-[3px] bg-gradient-to-br ${item.grad}`}>
                  <span className="animate-floaty-slow text-7xl drop-shadow-sm">{item.emoji}</span>
                </div>
                <figcaption className="absolute inset-x-0 bottom-2 text-center font-script text-lg text-rosadeep">
                  {item.caption}
                </figcaption>
              </figure>
            ),
          )}
        </div>
      </Reveal>
    </section>
  );
}

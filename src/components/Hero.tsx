import type { CSSProperties } from "react";
import heroDoces from "../assets/hero-doces.jpg";
import { useCart } from "../context/CartContext";
import Reveal from "./Reveal";
import Seal from "./Seal";

const BADGES = [
  { icon: "🌿", text: "Sem conservantes" },
  { icon: "🌅", text: "Feito no dia" },
  { icon: "🎀", text: "Embalado com carinho" },
];

export default function Hero() {
  const { openDrawer } = useCart();

  return (
    <section id="inicio" className="dot-paper relative overflow-hidden scroll-mt-28">
      {/* halos ambientes */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-petal/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-rosasoft/25 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-28 lg:pt-20">
        {/* ---------- Texto ---------- */}
        <Reveal className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-petal bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-rosadeep">
            <span className="h-2 w-2 animate-heartbeat rounded-full bg-rosa" />
            Confeitaria artesanal
          </span>

          <h1 className="mt-6 font-script text-5xl leading-[1.05] text-rosa sm:text-6xl xl:text-7xl">
            Docinhos da Jane
          </h1>
          <p className="mt-2 font-serif text-3xl italic leading-tight text-cocoa sm:text-4xl xl:text-5xl">
            feitos à mão,
            <br />
            com <span className="scribble text-rosadeep">amor</span> de verdade.
          </p>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-cocoasoft">
            Brigadeiros de colher, brownies molhadinhos e doces finos pra deixar qualquer
            celebração mais gostosa. Escolha seus favoritos, monte a sacolinha e eu cuido do
            resto — do forno até o seu coração. 🌸
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#cardapio"
              className="group inline-flex items-center gap-2 rounded-full bg-rosa px-7 py-3.5 font-sans text-base font-extrabold text-cream shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-rosadeep active:scale-95"
            >
              Ver o cardápio
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <button
              type="button"
              onClick={openDrawer}
              className="inline-flex items-center gap-2 rounded-full border-2 border-rosa/40 bg-white/60 px-7 py-3 font-sans text-base font-extrabold text-rosadeep transition-all duration-300 hover:border-rosa hover:bg-white active:scale-95"
            >
              🧺 Montar pedido
            </button>
          </div>

          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
            {BADGES.map((b) => (
              <li key={b.text} className="flex items-center gap-2 text-sm font-bold text-cocoa">
                <span className="text-lg">{b.icon}</span>
                {b.text}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* ---------- Imagem ---------- */}
        <Reveal delay={140} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] w-full rotate-[1.5deg]">
            <div className="absolute inset-0 rounded-[46%_54%_52%_48%/52%_46%_54%_48%] bg-white p-3 shadow-[var(--shadow-card)]">
              <img
                src={heroDoces}
                alt="Mesa de doces artesanais da Docinhos da Jane"
                className="h-full w-full rounded-[44%_56%_50%_50%/50%_44%_56%_50%] object-cover"
                loading="eager"
              />
            </div>
          </div>

          {/* selo girando */}
          <div className="absolute -left-4 -top-6 sm:-left-8">
            <Seal size={128} className="drop-shadow-[0_10px_20px_rgba(207,58,104,0.25)]" />
          </div>

          {/* flutuantes */}
          <span
            className="animate-floaty absolute -right-2 top-6 text-4xl drop-shadow"
            style={{ "--rot": "12deg" } as CSSProperties}
          >
            🍓
          </span>
          <span className="animate-floaty-slow absolute -bottom-3 left-2 text-5xl drop-shadow">🧁</span>
          <span className="animate-sway absolute right-6 -bottom-4 text-3xl">🌷</span>

          {/* card de avaliação */}
          <div className="animate-floaty-slow absolute -bottom-6 right-0 max-w-[15rem] rounded-2xl border border-blush bg-white/95 p-4 shadow-[var(--shadow-card)] sm:-right-6">
            <div className="flex items-center gap-1 text-rosa" aria-hidden="true">
              {"★★★★★".split("").map((s, i) => (
                <span key={i} className="text-sm">{s}</span>
              ))}
            </div>
            <p className="mt-1 font-serif text-sm italic leading-snug text-cocoa">
              “O brigadeiro de pistache mudou minha vida. Encomendo todo mês!”
            </p>
            <p className="mt-1 text-xs font-bold text-cocoasoft">— cliente apaixonada 💕</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { useMemo, useState } from "react";
import { CATEGORIES, PRODUCTS, formatBRL } from "../data/products";
import { useCart } from "../context/CartContext";
import { getProductImage } from "../data/productImages";
import Reveal from "./Reveal";

const FILTERS = ["Todos", ...CATEGORIES] as const;

export default function Catalog() {
  const { add } = useCart();
  const [active, setActive] = useState<string>("Todos");

  const filtered = useMemo(
    () => (active === "Todos" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active)),
    [active],
  );

  return (
    <section id="cardapio" className="relative scroll-mt-28 py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-rosadeep">
            O cardápio
          </span>
          <h2 className="mt-3 font-serif text-4xl leading-tight text-cocoa sm:text-5xl">
            Escolha seus <span className="font-script text-rosa">docinhos</span>
          </h2>
          <p className="mt-4 text-lg text-cocoasoft">
            Toque no <span className="font-bold text-rosadeep">+</span> pra colocar na sacolinha.
            Quando estiver babando de vontade, é só enviar o pedido pelo WhatsApp. 💌
          </p>
        </Reveal>

        {/* filtros */}
        <Reveal delay={80} className="mt-10 flex flex-wrap justify-center gap-2.5">
          {FILTERS.map((cat) => {
            const isActive = cat === active;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={[
                  "rounded-full px-5 py-2.5 font-sans text-sm font-bold transition-all duration-300 active:scale-95",
                  isActive
                    ? "bg-rosa text-cream shadow-soft"
                    : "border border-petal bg-white text-cocoasoft hover:border-rosa hover:text-rosadeep",
                ].join(" ")}
              >
                {cat}
              </button>
            );
          })}
        </Reveal>

        {/* grid */}
        <div
          key={active}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((p, i) => {
            const image = getProductImage(p.id);

            return (
            <Reveal key={p.id} delay={(i % 3) * 90}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-blush bg-white p-6 shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-2 hover:border-rosa/40">
                {p.tag && (
                  <span className="absolute right-4 top-4 rounded-full bg-blush px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-rosadeep">
                    {p.tag}
                  </span>
                )}

                {/* prato com foto do produto */}
                <div className="relative mx-auto grid h-32 w-32 place-items-center">
                  <span className="absolute inset-0 rounded-full border-2 border-dashed border-petal transition-transform duration-700 group-hover:rotate-180" />
                  <span className="absolute inset-2 rounded-full bg-blush" />
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                    className="relative h-24 w-24 rounded-full object-cover shadow-[0_14px_28px_-16px_rgba(95,53,41,0.8)] ring-4 ring-white transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110"
                  />
                </div>

                <h3 className="mt-5 text-center font-serif text-xl font-semibold text-cocoa">
                  {p.name}
                </h3>
                <p className="mt-2 flex-1 text-center text-sm leading-relaxed text-cocoasoft">
                  {p.description}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="font-sans text-xl font-extrabold text-rosa">
                    {formatBRL(p.price)}
                  </span>
                  <button
                    type="button"
                    onClick={() => add(p.id)}
                    aria-label={`Adicionar ${p.name}`}
                    className="grid h-11 w-11 place-items-center rounded-full bg-rosa text-cream shadow-soft transition-all duration-300 hover:rotate-90 hover:bg-rosadeep active:scale-90"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </button>
                </div>
              </article>
            </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

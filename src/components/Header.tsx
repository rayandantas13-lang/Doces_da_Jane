import { useCart } from "../context/CartContext";
import BrandMark from "./BrandMark";

const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Galeria", href: "#galeria" },
  { label: "Cardápio", href: "#cardapio" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const { count, openDrawer } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-petal/60 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a href="#inicio" className="group flex items-center gap-3" aria-label="Docinhos da Jane — início">
          <span className="transition-transform duration-500 group-hover:rotate-[18deg]">
            <BrandMark size={46} />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-script text-2xl text-rosa sm:text-[28px]">Docinhos</span>
            <span className="font-serif text-[11px] font-semibold uppercase tracking-[0.42em] text-cocoa">
              da Jane
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative font-sans text-sm font-bold text-cocoasoft transition-colors hover:text-rosadeep"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-rosa transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={openDrawer}
          aria-label="Abrir sacolinha de pedidos"
          className="relative grid h-12 w-12 place-items-center rounded-full bg-rosa text-cream shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-rosadeep active:scale-95"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
            <path d="M3 6h18" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          {count > 0 && (
            <span
              key={count}
              className="animate-pop absolute -right-1 -top-1 grid h-6 min-w-6 place-items-center rounded-full bg-cocoa px-1 text-xs font-extrabold text-cream ring-2 ring-cream"
            >
              {count}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}

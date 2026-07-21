import BrandMark from "./BrandMark";
import { EMAIL, INSTAGRAM_HANDLE, instagramLink, whatsappLink } from "../data/contact";

const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Cardápio", href: "#cardapio" },
  { label: "Sobre", href: "#sobre" },
];

export default function Footer() {
  return (
    <footer id="contato" className="relative scroll-mt-28 bg-cocoa text-cream/90">
      <svg
        className="block w-full text-blush"
        viewBox="0 0 1440 70"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0,30 C240,80 480,0 720,25 C960,50 1200,5 1440,40 L1440,0 L0,0 Z"
        />
      </svg>

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3">
            <BrandMark size={50} ring="#f9c8d6" whisk="#fff7fa" heart="#f487a4" />
            <span className="flex flex-col leading-none">
              <span className="font-script text-2xl text-petal">Docinhos</span>
              <span className="font-serif text-[11px] font-semibold uppercase tracking-[0.42em] text-cream/80">
                da Jane
              </span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
            Confeitaria artesanal feita com amor, do nosso forno pro seu coração. 🌸
          </p>
        </div>

        <div>
          <h3 className="font-serif text-lg text-petal">Navegue</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-cream/75 transition-colors hover:text-petal">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-lg text-petal">Contato</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={whatsappLink("Oi, Jane! Vim pelo site 🌸")}
                target="_blank"
                rel="noopener"
                className="group inline-flex items-center gap-2 text-cream/75 transition-colors hover:text-petal"
              >
                <span className="grid h-8 w-8 place-items-center rounded-full bg-cream/10 transition-colors group-hover:bg-rosa">💬</span>
                Pedidos no WhatsApp
              </a>
            </li>
            <li>
              <a
                href={instagramLink()}
                target="_blank"
                rel="noopener"
                className="group inline-flex items-center gap-2 text-cream/75 transition-colors hover:text-petal"
              >
                <span className="grid h-8 w-8 place-items-center rounded-full bg-cream/10 transition-colors group-hover:bg-rosa">📸</span>
                @{INSTAGRAM_HANDLE}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${EMAIL}`}
                className="group inline-flex items-center gap-2 text-cream/75 transition-colors hover:text-petal"
              >
                <span className="grid h-8 w-8 place-items-center rounded-full bg-cream/10 transition-colors group-hover:bg-rosa">✉️</span>
                {EMAIL}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-lg text-petal">Encomendas</h3>
          <p className="mt-4 text-sm leading-relaxed text-cream/75">
            De terça a sábado, das 9h às 18h.
            <br />
            Pedidos com <strong className="text-petal">48h de antecedência</strong>, combinado? 🎀
          </p>
          <a
            href="#cardapio"
            className="mt-5 inline-flex rounded-full bg-rosa px-5 py-2.5 text-sm font-extrabold text-cream transition-all hover:-translate-y-0.5 hover:bg-rosasoft"
          >
            Montar meu pedido
          </a>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-cream/60 sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} Docinhos da Jane · Feito com 🤍 e muito açúcar.</p>
          <p className="font-serif italic">“Feito com amor” 🌷</p>
        </div>
      </div>
    </footer>
  );
}

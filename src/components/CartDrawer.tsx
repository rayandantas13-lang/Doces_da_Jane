import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { PRODUCT_MAP, formatBRL } from "../data/products";
import { WHATSAPP_NUMBER } from "../data/contact";
import { getProductImage } from "../data/productImages";

const pad = (n: number) => String(n).padStart(2, "0");
const isoTodayPlus = (days: number) => {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
};
const isoToBR = (iso: string) => {
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
};

export default function CartDrawer() {
  const { lines, total, count, drawerOpen, closeDrawer, inc, dec, remove, clear } = useCart();
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState("");
  const [nameError, setNameError] = useState(false);

  const minDate = isoTodayPlus(2);

  // trava o scroll do fundo enquanto o drawer estiver aberto
  useEffect(() => {
    if (!drawerOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeDrawer();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [drawerOpen, closeDrawer]);

  if (!drawerOpen) return null;

  const buildMessage = () => {
    const itemsBlock = lines
      .map((l) => {
        const p = PRODUCT_MAP[l.id];
        if (!p) return null;
        return `• ${l.qty}× ${p.name} — ${formatBRL(p.price * l.qty)}`;
      })
      .filter(Boolean)
      .join("\n");

    return [
      "🌸 *Novo pedido — Docinhos da Jane* 🌸",
      "",
      "Oi, Jane! Tudo bem? 💕",
      "Montei meu pedido aí no site e gostaria de encomendar:",
      "",
      "🧁 *Meus docinhos*",
      itemsBlock,
      "",
      `💰 *Total: ${formatBRL(total)}*`,
      "",
      `👤 *Nome:* ${name.trim()}`,
      date ? `📅 *Data de entrega:* ${isoToBR(date)}` : null,
      notes.trim() ? `📝 *Observações:* ${notes.trim()}` : null,
      "",
      "Obrigada, espero ansiosa! 🌷",
    ]
      .filter((line) => line !== null)
      .join("\n");
  };

  const sendToWhatsapp = () => {
    if (!name.trim()) {
      setNameError(true);
      return;
    }
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildMessage())}`;
    window.open(url, "_blank", "noopener");
  };

  return (
    <div className="fixed inset-0 z-50">
      <div className="animate-fade absolute inset-0 bg-cocoa/40 backdrop-blur-sm" onClick={closeDrawer} />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Sacolinha de pedidos"
        className="animate-drawer absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-cream shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-petal/70 px-6 py-5">
          <div className="flex items-baseline gap-2">
            <h2 className="font-script text-3xl text-rosa">Sacolinha</h2>
            {count > 0 && (
              <span className="font-sans text-sm font-bold text-cocoasoft">
                {count} {count === 1 ? "item" : "itens"}
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={closeDrawer}
            aria-label="Fechar"
            className="grid h-10 w-10 place-items-center rounded-full text-cocoa transition-colors hover:bg-blush hover:text-rosadeep"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <span className="animate-floaty text-7xl">🧺</span>
            <h3 className="mt-5 font-serif text-2xl text-cocoa">Sua sacolinha está vazia</h3>
            <p className="mt-2 text-cocoasoft">
              Que tal começar pelo brigadeiro de pistache? Ele é um abraço. 🌸
            </p>
            <button
              type="button"
              onClick={closeDrawer}
              className="mt-6 rounded-full bg-rosa px-6 py-3 font-sans text-sm font-extrabold text-cream shadow-soft transition-all hover:-translate-y-0.5 hover:bg-rosadeep active:scale-95"
            >
              Ver o cardápio
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-3 overflow-y-auto px-6 py-5">
              {lines.map((l) => {
                const p = PRODUCT_MAP[l.id];
                if (!p) return null;
                const image = getProductImage(p.id);
                return (
                  <div
                    key={l.id}
                    className="flex items-center gap-3 rounded-2xl border border-blush bg-white p-3"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-14 w-14 shrink-0 rounded-xl bg-blush object-cover ring-2 ring-blush"
                    />
                    <div className="min-w-0 flex-1">
                      <h4 className="truncate font-serif text-base font-semibold text-cocoa">
                        {p.name}
                      </h4>
                      <p className="text-sm font-bold text-rosa">{formatBRL(p.price)}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <button
                        type="button"
                        onClick={() => remove(l.id)}
                        aria-label={`Remover ${p.name}`}
                        className="text-cocoasoft/70 transition-colors hover:text-rosadeep"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m2 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                        </svg>
                      </button>
                      <div className="flex items-center gap-1 rounded-full bg-blush p-1">
                        <button
                          type="button"
                          onClick={() => dec(l.id)}
                          aria-label="Diminuir"
                          className="grid h-7 w-7 place-items-center rounded-full bg-white text-cocoa shadow-sm transition-transform active:scale-90"
                        >
                          −
                        </button>
                        <span className="w-6 text-center font-sans text-sm font-extrabold text-cocoa">
                          {l.qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => inc(l.id)}
                          aria-label="Aumentar"
                          className="grid h-7 w-7 place-items-center rounded-full bg-rosa text-cream shadow-sm transition-transform active:scale-90"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}

              <button
                type="button"
                onClick={clear}
                className="w-full pt-1 text-center text-xs font-bold uppercase tracking-wider text-cocoasoft/70 transition-colors hover:text-rosadeep"
              >
                Limpar sacolinha
              </button>
            </div>

            <div className="border-t border-petal/70 bg-white/70 px-6 py-5">
              <label className="block">
                <span className="text-xs font-bold uppercase tracking-wider text-cocoasoft">
                  Seu nome
                </span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (nameError) setNameError(false);
                  }}
                  placeholder="Como te chamo? 🌷"
                  className={[
                    "mt-1 w-full rounded-xl border bg-cream px-4 py-2.5 font-sans text-cocoa outline-none transition-colors placeholder:text-cocoasoft/60 focus:border-rosa",
                    nameError ? "border-rosadeep" : "border-petal",
                  ].join(" ")}
                />
                {nameError && (
                  <span className="mt-1 block text-xs font-bold text-rosadeep">
                    Me conta seu nome pra eu saber pra quem é o pedido 💕
                  </span>
                )}
              </label>

              <label className="mt-3 block">
                <span className="text-xs font-bold uppercase tracking-wider text-cocoasoft">
                  Data de entrega{" "}
                  <span className="font-medium normal-case text-cocoasoft/60">(mín. 48h)</span>
                </span>
                <input
                  type="date"
                  value={date}
                  min={minDate}
                  onChange={(e) => setDate(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-petal bg-cream px-4 py-2.5 font-sans text-cocoa outline-none transition-colors focus:border-rosa"
                />
              </label>

              <label className="mt-3 block">
                <span className="text-xs font-bold uppercase tracking-wider text-cocoasoft">
                  Observações{" "}
                  <span className="font-medium normal-case text-cocoasoft/60">(opcional)</span>
                </span>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={2}
                  placeholder="Alergias, recadinho, endereço de entrega…"
                  className="mt-1 w-full resize-none rounded-xl border border-petal bg-cream px-4 py-2.5 font-sans text-cocoa outline-none transition-colors placeholder:text-cocoasoft/60 focus:border-rosa"
                />
              </label>

              <div className="mt-4 flex items-center justify-between">
                <span className="font-sans text-sm font-bold text-cocoasoft">Total</span>
                <span className="font-sans text-2xl font-extrabold text-rosa">
                  {formatBRL(total)}
                </span>
              </div>

              <button
                type="button"
                onClick={sendToWhatsapp}
                className="group mt-4 flex w-full items-center justify-center gap-2.5 rounded-full bg-rosadeep px-6 py-4 font-sans text-base font-extrabold text-cream shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-rosa active:scale-[0.98]"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.514 5.26l-.999 3.648 3.974-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                Enviar pedido no WhatsApp
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
              <p className="mt-2 text-center text-[11px] text-cocoasoft/80">
                Você será levada(o) ao WhatsApp com a mensagem prontinha ✨
              </p>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}

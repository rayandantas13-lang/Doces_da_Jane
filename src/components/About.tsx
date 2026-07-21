import BrandMark from "./BrandMark";
import Reveal from "./Reveal";

const VALUES = [
  {
    icon: "🍫",
    title: "Ingredientes selecionados",
    text: "Chocolate nobre, manteiga de verdade e frutas frescas. Sem atalhos.",
  },
  {
    icon: "🌅",
    title: "Produção fresca, toda semana",
    text: "Cada encomenda é feita perto da entrega, pra chegar no ponto perfeito.",
  },
  {
    icon: "🎀",
    title: "Embalagem com carinho",
    text: "Caixinhas, laços e um bilhetinho. Presente pronto pra emocionar.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="relative scroll-mt-28 bg-blush pb-24 pt-28">
      {/* onda de separação vinda da seção de cima */}
      <svg
        className="absolute -top-px left-0 w-full text-cream"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0,40 C240,90 480,0 720,30 C960,60 1200,10 1440,45 L1440,0 L0,0 Z"
        />
      </svg>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        {/* painel ilustrado */}
        <Reveal className="order-2 lg:order-1">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-0 rotate-[-4deg] rounded-[40px] bg-rosa/15" />
            <div className="absolute inset-0 grid place-items-center rounded-[40px] border-2 border-dashed border-rosa/40 bg-white/70">
              <BrandMark size={230} />
            </div>
            <span className="animate-floaty absolute -right-3 top-6 text-4xl">🍪</span>
            <span className="animate-floaty-slow absolute -left-3 bottom-10 text-4xl">🍓</span>
            <span className="animate-sway absolute right-10 -bottom-3 text-3xl">🌸</span>
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-cocoa px-5 py-2 font-script text-lg text-cream shadow-soft">
              feito com amor
            </div>
          </div>
        </Reveal>

        {/* texto */}
        <Reveal delay={120} className="order-1 lg:order-2">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-rosadeep">
            Nossa história
          </span>
          <h2 className="mt-3 font-serif text-4xl leading-tight text-cocoa sm:text-5xl">
            Oi, eu sou a <span className="font-script text-rosa">Jane</span> 🌷
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-cocoasoft">
            Tudo começou numa cozinha pequena, um batedor herdado da minha avó e a certeza de
            que doce bom é o que carrega lembrança. Hoje a <strong className="text-cocoa">Docinhos
            da Jane</strong> é o meu jeito de espalhar afeto em forma de brigadeiro.
          </p>
          <p className="mt-3 text-lg leading-relaxed text-cocoasoft">
            Cada receita é testada, provada e aprovada com calma — porque aqui a pressa não
            entra na cozinha. Só o capricho.
          </p>

          <ul className="mt-8 space-y-4">
            {VALUES.map((v) => (
              <li key={v.title} className="flex gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white text-2xl shadow-[var(--shadow-soft)]">
                  {v.icon}
                </span>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-cocoa">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-cocoasoft">{v.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

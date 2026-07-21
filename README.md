# 🌸 Docinhos da Jane

Site da confeitaria artesanal **Docinhos da Jane** — catálogo interativo onde o cliente monta a
sacolinha e envia o pedido formatado direto pro **WhatsApp**.

Feito com React + Vite + Tailwind CSS. O build gera **um único `index.html`** (JS, CSS e imagens
inline), o que torna a publicação trivial em qualquer hospedagem estática — inclusive GitHub Pages.

---

## ✨ O que o site tem

- Hero com a identidade visual da marca (logo recriado em SVG + selo "feito com amor" girando).
- Seção **Sobre** com a história da Jane.
- **Galeria** em masonry (fotos reais + polaroids decorativas).
- **Cardápio** com 20 doces e filtros por categoria.
- **Sacolinha de pedidos** (drawer) com quantidades, nome, **data de entrega** (mín. 48h) e
  observações — monta uma mensagem bonitinha e abre o WhatsApp.
- **Depoimentos** em carrossel horizontal.
- Rodapé com contatos e horário de encomendas.

---

## ⚙️ Antes de publicar: coloque seus dados

Edite `src/data/contact.ts`:

```ts
export const WHATSAPP_NUMBER = "5511999999999"; // 55 + DDD + número, só dígitos
export const INSTAGRAM_HANDLE = "docinhosdajane";
export const EMAIL = "encomendas@docinhosdajane.com";
```

> O número do WhatsApp precisa estar no formato internacional **sem** `+`, espaços ou traços.
> Exemplo: `(11) 98765-4321` → `5511987654321`.

Se quiser, também ajuste os doces em `src/data/products.ts` e os depoimentos em
`src/data/testimonials.ts`.

---

## 🚀 Publicar no GitHub Pages (recomendado — via GitHub Actions)

O repositório já vem com o workflow `.github/workflows/deploy.yml`, que faz o build e publica
automaticamente a cada push na branch `main` (ou `master`).

1. Suba este projeto para um repositório no GitHub (`git init`, `git add .`, `git commit`,
   `git remote add origin …`, `git push -u origin main`).
2. No GitHub, abra o repositório → **Settings** → **Pages**.
3. Em **Build and deployment** → **Source**, escolha **GitHub Actions**.
4. Pronto. Na aba **Actions** você verá o job *Deploy to GitHub Pages* rodando. Quando terminar,
   o site estará no ar em:
   - `https://SEU-USUARIO.github.io/` (se o repo se chamar `SEU-USUARIO.github.io`), ou
   - `https://SEU-USUARIO.github.io/NOME-DO-REPO/` (qualquer outro nome de repo).

> Como o build é *single-file* (tudo dentro de um único `index.html`, sem referências a
> `/assets/...`), **não é preciso configurar `base`** no Vite — funciona em qualquer caminho.

### Renomeou a branch principal?
O workflow dispara em `main` e `master`. Se sua branch tiver outro nome, ajuste a linha
`branches: [main, master]` no arquivo `.github/workflows/deploy.yml`.

---

## 🛠 Publicar manualmente (sem Actions)

Se preferir não usar Actions:

```bash
npm install
npm run build
```

Isso gera a pasta `dist/` com um único `index.html`. Você pode:

- subir o **conteúdo** de `dist/` numa branch chamada `gh-pages` e, em **Settings → Pages**,
  apontar a source para a branch `gh-pages` (raiz `/`); ou
- hospedar `dist/index.html` em qualquer lugar estático (Netlify, Vercel, Cloudflare Pages,
  servidor próprio etc.).

O arquivo `public/.nojekyll` (copiado para `dist/.nojekyll` no build) garante que o GitHub Pages
não tente processar o site com Jekyll.

---

## 💻 Rodando localmente

```bash
npm install
npm run dev      # ambiente de desenvolvimento
npm run build    # build de produção (gera dist/index.html)
npm run preview  # pré-visualiza o build
```

---

## 📝 Observações

- Este é um site de **uma página só**, sem rotas internas — então não é necessário nenhum
  arquivo de fallback (`404.html`, `spa-fallback`, etc.) no GitHub Pages.
- As fontes (Pacifico, Fraunces e Nunito) são carregadas do Google Fonts; é preciso conexão com
  a internet para exibi-las. Sem conexão, o navegador usa as fontes de fallback definidas no CSS.

Feito com 🤍 e muito açúcar.

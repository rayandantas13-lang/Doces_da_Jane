import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

function showFatal(message: string, error?: unknown) {
  console.error(message, error);
  const root = document.getElementById("root");
  if (root) {
    root.innerHTML = `
      <div style="min-height:100vh;display:grid;place-items:center;padding:24px;background:#fff7fa;font-family:Nunito,system-ui,sans-serif;color:#5f3529">
        <div style="max-width:480px;text-align:center;background:white;border:1px solid #fde7ee;border-radius:24px;padding:32px;box-shadow:0 24px 50px -28px rgba(95,53,41,.35)">
          <div style="font-size:48px">🧁</div>
          <h1 style="font-family:Fraunces,serif;font-size:28px;margin:16px 0 8px">Ops! Algo deu errado</h1>
          <p style="opacity:.8;line-height:1.6">${message}</p>
          <p style="margin-top:12px;font-size:12px;opacity:.6;word-break:break-all">${error ? String((error as any)?.message || error) : ""}</p>
          <button onclick="location.reload()" style="margin-top:20px;background:#ec5f86;color:white;border:0;border-radius:999px;padding:12px 20px;font-weight:800;cursor:pointer">Recarregar</button>
        </div>
      </div>
    `;
  }
}

const rootEl = document.getElementById("root");
if (!rootEl) {
  showFatal("Elemento #root não encontrado. Verifique o index.html.");
} else {
  try {
    // Logs globais para facilitar debug se der tela branca
    window.addEventListener("error", (e) => {
      console.error("Global error:", e.error || e.message);
    });
    window.addEventListener("unhandledrejection", (e) => {
      console.error("Unhandled promise:", e.reason);
    });

    console.log("✨ Docinhos da Jane iniciando...");

    createRoot(rootEl).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  } catch (err) {
    showFatal("Falha ao iniciar o app.", err);
  }
}

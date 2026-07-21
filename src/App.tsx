import { Component, type ErrorInfo, type ReactNode } from "react";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Catalog from "./components/Catalog";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import Toast from "./components/Toast";

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean; error: unknown }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error: unknown) {
    return { hasError: true, error };
  }
  componentDidCatch(error: unknown, info: ErrorInfo) {
    console.error("ErrorBoundary capturou:", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-cream grid place-items-center p-6">
          <div className="max-w-md w-full bg-white border border-blush rounded-[24px] p-8 text-center shadow-card">
            <div className="text-5xl">🧁</div>
            <h1 className="mt-4 font-serif text-2xl text-cocoa">Ops! Deu um errinho</h1>
            <p className="mt-2 text-cocoasoft">Recarregue a página. Se persistir, me chama no WhatsApp 💕</p>
            <pre className="mt-4 text-left text-xs bg-blush p-3 rounded-xl overflow-auto max-h-40">
              {String((this.state.error as any)?.message || this.state.error)}
            </pre>
            <button
              onClick={() => location.reload()}
              className="mt-6 rounded-full bg-rosa px-6 py-3 font-bold text-cream"
            >
              Recarregar
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <CartProvider>
        <div className="min-h-screen bg-cream">
          <Header />
          <main>
            <Hero />
            <About />
            <Gallery />
            <Catalog />
            <Testimonials />
          </main>
          <Footer />
          <CartDrawer />
          <Toast />
        </div>
      </CartProvider>
    </ErrorBoundary>
  );
}

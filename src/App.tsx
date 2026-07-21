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

export default function App() {
  return (
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
  );
}

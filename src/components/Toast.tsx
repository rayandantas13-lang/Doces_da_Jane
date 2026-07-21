import { useCart } from "../context/CartContext";

export default function Toast() {
  const { toast } = useCart();
  if (!toast) return null;
  return (
    <div
      role="status"
      aria-live="polite"
      className="animate-toast pointer-events-none fixed bottom-6 left-1/2 z-[70] -translate-x-1/2 rounded-full bg-cocoa px-6 py-3 text-sm font-bold text-cream shadow-[var(--shadow-soft)]"
    >
      {toast}
    </div>
  );
}

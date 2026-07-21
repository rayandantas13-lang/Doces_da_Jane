import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { PRODUCT_MAP } from "../data/products";

export type CartLine = {
  id: string;
  qty: number;
};

type CartContextValue = {
  lines: CartLine[];
  count: number;
  total: number;
  drawerOpen: boolean;
  toast: string | null;
  add: (id: string) => void;
  inc: (id: string) => void;
  dec: (id: string) => void;
  remove: (id: string) => void;
  clear: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Record<string, number>>({});
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<number | null>(null);

  const showToast = useCallback((message: string) => {
    setToast(message);
    if (toastTimer.current) window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(null), 2000);
  }, []);

  const add = useCallback(
    (id: string) => {
      setItems((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
      const product = PRODUCT_MAP[id];
      showToast(product ? `${product.name} na sacolinha!` : "Adicionado!");
    },
    [showToast],
  );

  const inc = useCallback((id: string) => {
    setItems((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  }, []);

  const dec = useCallback((id: string) => {
    setItems((prev) => {
      const next = { ...prev };
      const q = (next[id] ?? 0) - 1;
      if (q <= 0) delete next[id];
      else next[id] = q;
      return next;
    });
  }, []);

  const remove = useCallback((id: string) => {
    setItems((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  }, []);

  const clear = useCallback(() => setItems({}), []);
  const openDrawer = useCallback(() => setDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  const lines = useMemo<CartLine[]>(
    () => Object.entries(items).map(([id, qty]) => ({ id, qty })),
    [items],
  );

  const count = useMemo(() => lines.reduce((s, l) => s + l.qty, 0), [lines]);

  const total = useMemo(
    () =>
      lines.reduce((s, l) => {
        const p = PRODUCT_MAP[l.id];
        return s + (p ? p.price * l.qty : 0);
      }, 0),
    [lines],
  );

  const value = useMemo<CartContextValue>(
    () => ({
      lines,
      count,
      total,
      drawerOpen,
      toast,
      add,
      inc,
      dec,
      remove,
      clear,
      openDrawer,
      closeDrawer,
    }),
    [lines, count, total, drawerOpen, toast, add, inc, dec, remove, clear, openDrawer, closeDrawer],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart deve ser usado dentro de CartProvider");
  return ctx;
}

// useOnScreenElement.tsx
import { useEffect, useState, useCallback } from "react";

type Options = {
  rootMargin?: string;
  threshold?: number;
  triggerOnce?: boolean;
};

export function useOnScreenElement<T extends Element = Element>({
  rootMargin = "0px",
  threshold = 0.1,
  triggerOnce = true,
}: Options = {}) {
  const [node, setNode] = useState<T | null>(null);
  const [visible, setVisible] = useState(false);

  // callback ref estable que puedes pasar directo a ref={}
  const setRef = useCallback((el: T | null) => {
    setNode(el);
  }, []);

  useEffect(() => {
    const el = node;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (triggerOnce) obs.disconnect();
        } else {
          if (!triggerOnce) setVisible(false);
        }
      },
      { root: null, rootMargin, threshold }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [node, rootMargin, threshold, triggerOnce]);

  return { setRef, visible };
}




import { useEffect, useRef, useState } from "react";

/**
 * Tracks whether a referenced element has scrolled into the viewport.
 * Used to trigger fade-up / reveal animations on scroll.
 *
 * @param {number} threshold - Fraction of the element that must be visible (0-1).
 * @returns {[React.RefObject, boolean]} ref to attach + whether it's in view.
 */
export function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, inView];
}
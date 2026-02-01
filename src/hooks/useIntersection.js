// hooks/useIntersection.js
import { useEffect, useState, useRef } from "react";

/**
 * Generic Intersection Observer hook
 *
 * @param {Object} options IntersectionObserver options: root, rootMargin, threshold
 * @returns [ref, isIntersecting] - ref to attach + boolean if element is in view
 */
export function useIntersection(options = {}) {
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [ref, options.root, options.rootMargin, options.threshold]);

  return [ref, isIntersecting];
}

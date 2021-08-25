import { useRef, useState, useEffect, MutableRefObject } from 'react';

const useElementOnScreen = (options: IntersectionObserverInit) => {
  const containerRef = useRef<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFn = (entries: any) => {
    const [ entry ] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFn, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current)
    }
  }, [containerRef, options])

  return [containerRef, isVisible];
};

export default useElementOnScreen;

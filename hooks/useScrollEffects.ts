import { useEffect, useState } from 'react';

export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
}

export function useScrollTransform(scrollY: number) {
  const rotation = Math.max(45 - scrollY / 10, 0); // Starts at 45 degrees, straightens to 0
  const scale = Math.max(1 - scrollY / 2000, 0.8); // Slight scale down

  return { rotation, scale };
}

import { useEffect, useState } from 'react';

export const useScrollText = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isTransformed, setIsTransformed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsTransformed(currentScrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollY, isTransformed };
};
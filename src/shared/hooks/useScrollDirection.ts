import { useEffect, useState } from 'react';

export const useScrollDirection = () => {
  const [direction, setDirection] = useState<'up' | 'down'>('up');
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (Math.abs(currentY - lastY) < 10) {
        return;
      };

      setDirection(currentY > lastY ? 'down' : 'up');
      setLastY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastY]);

  return direction;
};

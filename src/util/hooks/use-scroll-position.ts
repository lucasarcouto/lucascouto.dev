import { useEffect, useState } from 'react';

type ScrollDirection = 'up' | 'down';

export function useScrollPosition() {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>('up');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleScrollUpdate() {
      const currentScrollY = window.scrollY;
      const currentScrollDirection = currentScrollY > scrollY ? 'down' : 'up';
      setScrollDirection(currentScrollDirection);
      setScrollY(Math.max(currentScrollY, 0));
    }

    handleScrollUpdate();

    window.addEventListener('scroll', handleScrollUpdate, {
      capture: true,
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScrollUpdate);
    };
  }, [scrollY]);

  return { scrollY, scrollDirection };
}

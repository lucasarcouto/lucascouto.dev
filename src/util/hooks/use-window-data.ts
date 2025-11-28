import { useEffect, useState } from 'react';

export type WindowData = {
  width: number;
  height: number;
  isMobile: boolean;
};

export function useWindowData() {
  const [windowData, setWindowData] = useState<WindowData>({
    height: 0,
    width: 0,
    isMobile: false,
  });

  useEffect(() => {
    function handleResize() {
      const isMobile = window.innerWidth < 768;

      setWindowData({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: isMobile,
      });

      // Appends or removes the mobile class to the body so we don't have
      // to do this manually everytime we need to make this check
      if (isMobile) {
        document.body.classList.add('mobile');
      } else {
        document.body.classList.remove('mobile');
      }
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowData;
}

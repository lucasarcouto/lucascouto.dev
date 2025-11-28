import { useScrollPosition } from '@utils/hooks/use-scroll-position';
import { useWindowData } from '@utils/hooks/use-window-data';

export function useScrolledPastIntroSection() {
  const windowData = useWindowData();
  const scrollPosition = useScrollPosition();
  return scrollPosition.scrollY > windowData.height - 65;
}

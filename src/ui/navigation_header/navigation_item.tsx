import { cn } from '@utils/cn';
import { useScrolledPastIntroSection } from '@utils/hooks/use-scrolled-past-intro-section';
import Link from 'next/link';

interface NavigationItemProps {
  className?: string;
  label: string;
  linkTo: string;
  isMobile: boolean;
  toggleMobileMenu: () => void;
}

export function NavigationItem({
  className,
  label,
  linkTo,
  isMobile,
  toggleMobileMenu,
}: Readonly<NavigationItemProps>) {
  const scrolledPastIntroSection = useScrolledPastIntroSection();

  function handleClick() {
    if (isMobile) {
      toggleMobileMenu();
    }
  }

  return (
    <li className={cn('navigation-item', scrolledPastIntroSection ? 'past-intro' : '', className)}>
      <Link className="link" href={linkTo} onClick={handleClick}>
        {label}
      </Link>
    </li>
  );
}

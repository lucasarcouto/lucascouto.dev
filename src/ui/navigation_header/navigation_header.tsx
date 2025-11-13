import { NavigationMobileMenuToggle } from './navigation_mobile_menu_toggle';
import { useCallback, useEffect, useState } from 'react';
import { cn } from '@utils/cn';
import { NavigationItem } from './navigation_item';
import { useWindowData } from '@utils/hooks/use-window-data';
import { useScrolledPastIntroSection } from '@utils/hooks/use-scrolled-past-intro-section';
import { ThemeToggle } from '@ui/theme_toggle';

export function MainNavigationHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const windowData = useWindowData();

  const scrolledPastIntroSection = useScrolledPastIntroSection();

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!windowData.isMobile && isMobileMenuOpen) {
      toggleMobileMenu();
    }
  }, [isMobileMenuOpen, toggleMobileMenu, windowData.isMobile]);

  return (
    <div className={cn('navigation-container', isMobileMenuOpen ? 'open' : '')}>
      <button
        type="button"
        className={cn('navigation-overlay', isMobileMenuOpen ? 'open' : '')}
        onClick={toggleMobileMenu}
        aria-label="Close navigation menu"
        aria-hidden={!isMobileMenuOpen}
        tabIndex={isMobileMenuOpen ? 0 : -1}
      />

      <div className={cn('navigation-menu', scrolledPastIntroSection ? 'show-background' : '')}>
        <NavigationMobileMenuToggle
          className={isMobileMenuOpen ? 'open' : ''}
          onClick={toggleMobileMenu}
        />
        <div className={cn('navigation-menu-items', isMobileMenuOpen ? 'open' : '')}>
          <ul>
            <NavigationItem label="Home" linkTo="#home" toggleMobileMenu={toggleMobileMenu} />
            <NavigationItem label="About" linkTo="#about" toggleMobileMenu={toggleMobileMenu} />
            <NavigationItem label="Skills" linkTo="#skills" toggleMobileMenu={toggleMobileMenu} />
            <NavigationItem
              label="Projects"
              linkTo="#projects"
              toggleMobileMenu={toggleMobileMenu}
            />
            <NavigationItem
              label="Experience"
              linkTo="#experience"
              toggleMobileMenu={toggleMobileMenu}
            />
            <NavigationItem label="Contact" linkTo="#contact" toggleMobileMenu={toggleMobileMenu} />
            <ThemeToggle />
          </ul>
        </div>
      </div>
    </div>
  );
}

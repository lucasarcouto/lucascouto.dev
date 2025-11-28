import { cn } from '@utils/cn';

interface NavigationMobileMenuToggleProps {
  className?: string;
  onClick: () => void;
}

export function NavigationMobileMenuToggle({
  className,
  onClick,
}: Readonly<NavigationMobileMenuToggleProps>) {
  return (
    <button
      type="button"
      className={cn('header-mobile-menu visible md:invisible', className)}
      onClick={onClick}
      aria-label="Toggle mobile menu"
    >
      <div className="toggle-container">
        <div className="toggle" />
        <div className="toggle" />
        <div className="toggle" />
      </div>
    </button>
  );
}

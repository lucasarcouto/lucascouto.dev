import { cn } from '@utils/cn';
import { useState } from 'react';

interface DropdownMenuProps {
  className?: string;
  items: string[];
  selectedItem: string;
  isInline?: boolean;
  onItemSelected?: (selectedItem: string) => void;
}

export function DropdownMenu({
  className,
  items,
  selectedItem,
  isInline = false,
  onItemSelected,
}: Readonly<DropdownMenuProps>) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  function handleItemClick(item: string) {
    onItemSelected?.(item);
    setIsOpen(false);
  }

  return (
    <div className={cn('dropdown', className)}>
      <button className="button" onClick={handleToggle}>
        <h1>{selectedItem}</h1>
        <div className="arrow-dropdown" />
      </button>
      {isOpen && (
        <ul className={cn('dropdown-menu', isInline ? 'inline-menu' : '')}>
          {items.map((item, index) => {
            return (
              <li key={index} onClick={() => handleItemClick(item)}>
                <h1>{item}</h1>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

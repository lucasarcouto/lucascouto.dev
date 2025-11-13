import { useRouter } from 'next/router';
import { DropdownMenu } from '@ui/dropdown_menu';

export function LocaleSwitcher() {
  const router = useRouter();

  const locales = router.locales!.map(locale => locale.toUpperCase());

  return (
    <DropdownMenu
      className="locale-switcher"
      items={locales}
      selectedItem={router.locale!.toUpperCase()}
      onItemSelected={selectedLocale => {
        router.replace(router.asPath, undefined, {
          locale: selectedLocale.toLowerCase(),
        });
      }}
    />
  );
}

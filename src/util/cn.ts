export function cn(...classNames: (string | undefined | null)[]): string {
  return classNames.filter(c => c != null).join(' ');
}

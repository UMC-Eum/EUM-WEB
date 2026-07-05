type ClassValue = string | false | null | undefined;

/** falsy 값을 걸러내고 클래스 문자열을 병합한다. */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(' ');
}

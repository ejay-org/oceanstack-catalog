import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * 아이콘이 URL인지 확인
 * @param icon - 아이콘 문자열 (URL 또는 아이콘 이름)
 * @returns URL 형식이면 true, 아니면 false
 */
export function isIconUrl(icon?: string): boolean {
  if (!icon) return false;
  return icon.startsWith('http://') || icon.startsWith('https://') || icon.startsWith('/');
}

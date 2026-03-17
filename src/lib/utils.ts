import { clsx, type ClassValue } from "clsx";
import * as SimpleIcons from "simple-icons";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getIcon = (iconSlug: string | null) => {
  if (!iconSlug) return null;
  const iconKey = `si${iconSlug.charAt(0).toUpperCase()}${iconSlug.slice(
    1,
  )}` as keyof typeof SimpleIcons;
  return SimpleIcons[iconKey] || null;
};

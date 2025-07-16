// lib/utils.ts

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS classes conditionally with support for deduplication and override.
 *
 * Example:
 * ```ts
 * cn("bg-red-500", condition && "bg-blue-500", "text-white")
 * // Result: "bg-blue-500 text-white" (if condition is true)
 * ```
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(...inputs));
}

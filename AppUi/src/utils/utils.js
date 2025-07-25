// Utility to conditionally join classNames together
export function cn(...args) {
  return args.flat(Infinity).filter(Boolean).join(" ");
}

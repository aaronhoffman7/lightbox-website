export function useRouter() {
  return {
    push: () => {},
    replace: () => {},
    refresh: () => {},
    back: () => {},
    forward: () => {},
    prefetch: async () => {},
  };
}
export function usePathname() { return "/"; }
export function useSearchParams() { return new URLSearchParams(); }

// Custom hooks — barrel export.
// Note: `useTheme` lives in `providers/ThemeProvider` since it needs context.
export { useLocalStorage } from "./useLocalStorage";
export { useMediaQuery, useIsMobile, useIsDesktop } from "./useMediaQuery";
export { useDebounce } from "./useDebounce";
export { useToggle } from "./useToggle";
export { useCopyToClipboard } from "./useCopyToClipboard";
export { useOnClickOutside } from "./useOnClickOutside";

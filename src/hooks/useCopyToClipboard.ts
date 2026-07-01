import { useCallback, useState } from "react";

/**
 * Copy text to the clipboard and expose a transient `copied` flag.
 * @example const { copied, copy } = useCopyToClipboard()
 */
export function useCopyToClipboard(resetDelay = 2000) {
    const [copied, setCopied] = useState(false);

    const copy = useCallback(
        async (text: string) => {
            try {
                await navigator.clipboard.writeText(text);
                setCopied(true);
                setTimeout(() => setCopied(false), resetDelay);
                return true;
            } catch (error) {
                console.error("Failed to copy:", error);
                setCopied(false);
                return false;
            }
        },
        [resetDelay],
    );

    return { copied, copy };
}

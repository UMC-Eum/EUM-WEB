import { useCallback, useEffect, useRef, useState } from 'react';

const RESET_DELAY_MS = 2000;

/** 텍스트를 클립보드에 복사하고, 잠시 동안 copied 상태를 유지한다. */
export function useCopyToClipboard(resetDelayMs = RESET_DELAY_MS) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number>();

  useEffect(() => () => window.clearTimeout(timeoutRef.current), []);

  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard?.writeText(text);
      } catch {
        // 클립보드 접근이 막혀도 안내 라벨은 그대로 보여준다.
      }
      setCopied(true);
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => setCopied(false), resetDelayMs);
    },
    [resetDelayMs],
  );

  return { copied, copy };
}

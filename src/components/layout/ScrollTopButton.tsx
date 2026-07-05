import { AnimatePresence, motion } from 'framer-motion';
import { useScrolled } from '@/hooks/useScrolled';
import { scrollToTop } from '@/utils/scroll';

const SHOW_AFTER_PX = 560;

export function ScrollTopButton() {
  const visible = useScrolled(SHOW_AFTER_PX);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl text-brand shadow-card transition-colors hover:bg-brand-soft focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          type="button"
          aria-label="맨 위로 이동"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.2 }}
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
}

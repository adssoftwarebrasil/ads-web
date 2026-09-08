import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LOGO } from '../data/products';

export default function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const start = Date.now();
    const finish = () => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, 1400 - elapsed);
      setTimeout(() => setShow(false), remaining);
    };

    if (document.readyState === 'complete') {
      finish();
    } else {
      window.addEventListener('load', finish, { once: true });
      return () => window.removeEventListener('load', finish);
    }
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-brand-gold"
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-brand-red/20 blur-3xl animate-pulse" />
            <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-brand-brown/20 blur-3xl animate-pulse" />
          </div>

          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 -m-8 rounded-full border-2 border-dashed border-brand-brown/30"
              />
              <div className="relative bg-white rounded-3xl p-8 shadow-card">
                <img src={LOGO} alt="Veranita" className="h-24 md:h-28 w-auto" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-10 flex items-center gap-2"
            >
              <span className="block w-2 h-2 rounded-full bg-brand-brown animate-bounce" />
              <span
                className="block w-2 h-2 rounded-full bg-brand-red animate-bounce"
                style={{ animationDelay: '120ms' }}
              />
              <span
                className="block w-2 h-2 rounded-full bg-brand-brown animate-bounce"
                style={{ animationDelay: '240ms' }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-6 text-xs font-bold tracking-[0.4em] uppercase text-brand-brown"
            >
              Tradição desde 1976
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

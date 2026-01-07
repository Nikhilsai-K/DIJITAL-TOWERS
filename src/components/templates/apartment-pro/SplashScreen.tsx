'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function SplashScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress bar
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ backgroundColor: '#cccccc' }}
        >
          <div className="text-center">
            {/* Top decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="w-12 h-px mx-auto mb-12 origin-center"
              style={{ backgroundColor: '#1a1a1a' }}
            />

            {/* Main Japanese text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="overflow-hidden"
            >
              <h1
                className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wider mb-4"
                style={{ color: '#0a0a0a' }}
              >
                一生ものに、住む。
              </h1>
            </motion.div>

            {/* English subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <p
                className="text-xs sm:text-sm tracking-[0.4em] uppercase"
                style={{ color: '#333333' }}
              >
                Live in a Lifelong Home
              </p>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="mt-16 flex flex-col items-center"
            >
              <div className="w-48 h-px overflow-hidden" style={{ backgroundColor: 'rgba(0,0,0,0.15)' }}>
                <motion.div
                  style={{
                    width: `${progress}%`,
                    backgroundColor: '#1a1a1a'
                  }}
                  className="h-full transition-all duration-100"
                />
              </div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="text-[10px] tracking-[0.3em] mt-4 uppercase"
                style={{ color: '#555555' }}
              >
                Loading
              </motion.span>
            </motion.div>

            {/* Brand name at bottom */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-20"
            >
              <p
                className="font-serif text-sm tracking-[0.2em]"
                style={{ color: '#2a2a2a' }}
              >
                ザ・パークハウス東銀座
              </p>
              <p
                className="text-[10px] tracking-[0.3em] mt-2 uppercase"
                style={{ color: '#666666' }}
              >
                The Park House Higashi-Ginza
              </p>
            </motion.div>

            {/* Bottom decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="w-12 h-px mx-auto mt-12 origin-center"
              style={{ backgroundColor: '#1a1a1a' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

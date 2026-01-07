'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const heroVideos = [
  '/templates/apartment-pro/videos/1.mp4',
  '/templates/apartment-pro/videos/2.mp4',
];

const VIDEO_DURATION = 12000;

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroVideos.length);
    }, VIDEO_DURATION);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (video) {
        if (idx === currentIndex) {
          video.currentTime = 0;
          video.play().catch(() => {});
        }
      }
    });
  }, [currentIndex]);

  const titleLine1 = "ザ・パークハウス";
  const titleLine2 = "東銀座";

  return (
    <motion.section
      ref={containerRef}
      className="relative h-[100svh] w-full overflow-hidden bg-primary"
    >
      {/* Video Background */}
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        {heroVideos.map((video, idx) => (
          <motion.div
            key={video}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: idx === currentIndex ? 1 : 0 }}
            transition={{ opacity: { duration: 3, ease: [0.4, 0, 0.2, 1] } }}
          >
            <video
              ref={(el) => { videoRefs.current[idx] = el; }}
              src={video}
              muted
              loop
              playsInline
              autoPlay={idx === 0}
              preload="auto"
              onCanPlay={() => idx === 0 && setIsLoaded(true)}
              className="w-full h-full object-cover scale-105"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-transparent to-primary/70 z-[2]" />
      <div className="absolute inset-0 bg-primary/20 z-[2]" />
      <div className="absolute top-0 left-0 right-0 h-[8vh] bg-gradient-to-b from-primary to-transparent z-[3]" />
      <div className="absolute bottom-0 left-0 right-0 h-[8vh] bg-gradient-to-t from-primary to-transparent z-[3]" />

      {/* Main Content */}
      <motion.div
        className="relative h-full flex flex-col justify-center items-center px-4 sm:px-6 z-10"
        style={{ opacity }}
      >
        <div className="text-center w-full max-w-5xl">

          {/* Tagline - NOW AT TOP */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-8 sm:mb-12"
          >
            <span className="text-secondary text-[10px] sm:text-xs tracking-[0.4em] uppercase">
              Premium Residence in Ginza
            </span>
          </motion.div>

          {/* Main Title */}
          <div className="overflow-hidden mb-2 sm:mb-4">
            <motion.h1
              initial={{ y: '100%' }}
              animate={isLoaded ? { y: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extralight text-dark tracking-tight leading-none"
            >
              {titleLine1}
            </motion.h1>
          </div>

          <div className="overflow-hidden mb-8 sm:mb-12">
            <motion.h1
              initial={{ y: '100%' }}
              animate={isLoaded ? { y: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight text-dark/70 tracking-wide"
            >
              {titleLine2}
            </motion.h1>
          </div>

          {/* Decorative Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-8"
          >
            <span className="w-8 sm:w-12 h-px bg-secondary/40" />
            <span className="text-secondary text-lg sm:text-xl">✦</span>
            <span className="w-8 sm:w-12 h-px bg-secondary/40" />
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-dark/50 text-sm sm:text-base md:text-lg lg:text-xl font-light italic tracking-widest">
              &ldquo;Where peaceful living begins.&rdquo;
            </p>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-12 sm:bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-12 sm:h-16 bg-gradient-to-b from-secondary/50 to-transparent"
          />
        </motion.div>

        {/* Side Accents */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isLoaded ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 1.8 }}
          className="hidden lg:block absolute left-8 xl:left-12 top-1/2 -translate-y-1/2 z-20"
        >
          <div className="flex flex-col items-center gap-4">
            <span className="w-px h-20 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
            <span className="text-dark/20 text-[10px] tracking-widest uppercase writing-vertical">Tokyo</span>
            <span className="w-px h-20 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isLoaded ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 1.8 }}
          className="hidden lg:block absolute right-8 xl:right-12 top-1/2 -translate-y-1/2 z-20"
        >
          <div className="flex flex-col items-center gap-4">
            <span className="w-px h-20 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
            <span className="text-dark/20 text-[10px] tracking-widest uppercase writing-vertical">Ginza</span>
            <span className="w-px h-20 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
          </div>
        </motion.div>
      </motion.div>

      {/* Loading Overlay */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-primary z-50 flex items-center justify-center"
          >
            <motion.div
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex flex-col items-center gap-4"
            >
              <span className="w-8 h-px bg-secondary/60" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

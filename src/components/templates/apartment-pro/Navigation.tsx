'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { href: '/', label: 'Home', labelJp: 'ホーム' },
  { href: '/about', label: 'About', labelJp: '概要' },
  { href: '/gallery', label: 'Gallery', labelJp: 'ギャラリー' },
  { href: '/location', label: 'Access', labelJp: 'アクセス' },
  { href: '/reviews', label: 'Reviews', labelJp: 'レビュー' },
  { href: '/contact', label: 'Contact', labelJp: 'お問い合わせ' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const isHomePage = pathname === '/';

  // Animation variants for mobile menu
  const menuVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 + i * 0.08,
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    }),
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ease-smooth ${
          isScrolled || !isHomePage
            ? 'bg-primary/95 backdrop-blur-md py-3 sm:py-4'
            : 'bg-transparent py-4 sm:py-6'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="relative z-50">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col"
            >
              <span className={`text-sm sm:text-base lg:text-lg tracking-[0.2em] sm:tracking-[0.3em] font-light transition-colors duration-300 ${
                isOpen ? 'text-primary' : 'text-dark'
              }`}>
                THE PARK HOUSE
              </span>
              <span className={`text-[8px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.5em] transition-colors duration-300 ${
                isOpen ? 'text-secondary' : 'text-dark/50'
              }`}>
                HIGASHI-GINZA
              </span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10 xl:gap-12">
            {menuItems.slice(0, -1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative group"
              >
                <span className={`text-xs tracking-[0.15em] uppercase transition-colors duration-300 ${
                  pathname === item.href ? 'text-secondary' : 'text-dark/60 hover:text-dark'
                }`}>
                  {item.label}
                </span>
                <span className={`absolute -bottom-1 left-0 h-px bg-secondary transition-all duration-300 ${
                  pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-5 xl:px-6 py-2.5 border border-dark/20 text-xs tracking-[0.15em] uppercase text-dark/80 hover:border-secondary hover:text-secondary transition-all duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button - Larger touch target */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-50 w-12 h-12 -mr-2 flex flex-col justify-center items-center"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <motion.span
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 0 : -4,
              }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className={`block h-[1.5px] w-6 transition-colors duration-300 ${
                isOpen ? 'bg-primary' : 'bg-dark'
              }`}
            />
            <motion.span
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? 0 : 4,
              }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className={`block h-[1.5px] w-6 transition-colors duration-300 ${
                isOpen ? 'bg-primary' : 'bg-dark'
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-dark z-40 lg:hidden"
          >
            <div className="h-full flex flex-col justify-center px-8 sm:px-12">
              {/* Menu Items */}
              <nav className="flex flex-col gap-1">
                {menuItems.map((item, idx) => (
                  <motion.div
                    key={item.href}
                    custom={idx}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                  >
                    <Link
                      href={item.href}
                      className={`group flex items-baseline gap-4 py-3 transition-colors duration-300 ${
                        pathname === item.href ? 'text-secondary' : 'text-primary'
                      }`}
                    >
                      <span className="text-[10px] text-primary/30 tabular-nums">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="text-3xl sm:text-4xl font-serif tracking-wide group-hover:text-secondary transition-colors">
                        {item.label}
                      </span>
                      <span className="text-xs text-primary/40 hidden sm:inline">
                        {item.labelJp}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Contact Info - Mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-12 pt-8 border-t border-primary/10"
              >
                <a
                  href="tel:050-5527-2652"
                  className="text-primary/60 text-sm block mb-2 hover:text-secondary transition-colors"
                >
                  050-5527-2652
                </a>
                <p className="text-primary/30 text-xs">
                  10:00 - 20:00
                </p>
              </motion.div>

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-8 left-8 right-8 sm:left-12 sm:right-12"
              >
                <p className="text-primary/20 text-[10px] tracking-[0.2em] uppercase">
                  The Park House Higashi-Ginza
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

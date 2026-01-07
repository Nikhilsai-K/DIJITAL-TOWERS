'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ContactPreview() {
  return (
    <section className="bg-primary pt-12 sm:pt-16 md:pt-20 pb-24 sm:pb-32 md:pb-40 lg:pb-48 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-secondary rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-secondary rounded-full" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-secondary" />
              <span className="text-secondary text-[10px] sm:text-xs tracking-[0.3em] uppercase">
                Contact
              </span>
              <div className="h-px w-8 bg-secondary" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-dark mb-6 sm:mb-8">
              お問い合わせ
            </h2>

            <p className="text-dark/50 text-sm sm:text-base mb-10 sm:mb-14 leading-[1.9] max-w-lg mx-auto">
              物件に関するご質問、内覧のご希望など、お気軽にお問い合わせください。専門スタッフが丁寧にご案内いたします。
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-10 sm:px-14 py-4 sm:py-5 bg-secondary text-primary text-xs sm:text-sm tracking-[0.2em] uppercase hover:bg-secondary/90 transition-colors"
                >
                  Contact Form
                </motion.button>
              </Link>
              <a href="tel:050-5527-2652" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-10 sm:px-14 py-4 sm:py-5 border border-dark/20 text-dark text-xs sm:text-sm tracking-[0.15em] hover:border-secondary hover:text-secondary transition-all"
                >
                  050-5527-2652
                </motion.button>
              </a>
            </div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-12 sm:mt-16 flex items-center justify-center gap-6"
            >
              <span className="w-12 h-px bg-dark/10" />
              <p className="text-dark/30 text-[10px] sm:text-xs tracking-[0.3em] uppercase">
                Open 10:00 - 20:00
              </p>
              <span className="w-12 h-px bg-dark/10" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-secondary text-sm md:text-base font-montserrat tracking-[0.3em] uppercase mb-4 block"
          >
            PRICING
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold font-serif mb-6"
          >
            推定売買相場価格
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 w-24 bg-secondary mx-auto"
          />
        </div>

        {/* Main Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border-2 border-secondary/30 rounded-3xl p-8 md:p-12 shadow-2xl">
            {/* Price Range */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  16,546
                  <span className="text-3xl md:text-4xl text-gray-400">万円</span>
                </div>
                <div className="text-lg text-secondary">719.8万円/坪</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 }}
                className="text-4xl text-secondary"
              >
                〜
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  17,569
                  <span className="text-3xl md:text-4xl text-gray-400">万円</span>
                </div>
                <div className="text-lg text-secondary">764.3万円/坪</div>
              </motion.div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent mb-12" />

            {/* Details Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9 }}
                className="text-center md:text-left"
              >
                <h4 className="text-secondary text-lg font-semibold mb-3 tracking-wider">
                  推定相場賃料
                </h4>
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  37.1万円 〜 41.0万円
                </div>
                <p className="text-gray-400 text-sm">16,151円/坪 〜 17,851円/坪</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.0 }}
                className="text-center md:text-left"
              >
                <h4 className="text-secondary text-lg font-semibold mb-3 tracking-wider">
                  推定表面利回り
                </h4>
                <div className="text-5xl md:text-6xl font-bold text-secondary">
                  2.74%
                </div>
              </motion.div>
            </div>

            {/* Note */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.1 }}
              className="text-center text-sm text-gray-400 italic"
            >
              ※条件: 76㎡、10F、南向き、角部屋
            </motion.p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row justify-center gap-6 mt-12"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-secondary text-black font-bold text-lg rounded-lg shadow-lg shadow-secondary/50 hover:shadow-2xl hover:shadow-secondary/70 transition-all duration-300 text-center"
          >
            購入相談
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 border-2 border-white/80 text-white font-bold text-lg rounded-lg hover:bg-white hover:text-black transition-all duration-300 text-center"
          >
            無料査定
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

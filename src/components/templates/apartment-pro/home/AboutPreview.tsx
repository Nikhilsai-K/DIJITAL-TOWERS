'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 px-6 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="text-secondary text-sm uppercase tracking-wider font-semibold">About</span>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mt-2">物件概要</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop&q=90"
              alt="Building"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-dark mb-4">銀座の洗練された住空間</h3>
            <p className="text-lg text-dark/70 mb-6 leading-relaxed">
              東京の中心、銀座エリアに位置する「ザ・パークハウス東銀座」は、都会の喧騒を忘れさせる洗練された住空間を提供します。13階建ての堂々たる佇まいは、周辺環境と調和しながらも存在感を放つデザインとなっています。
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-primary rounded-xl">
                <div className="text-3xl font-bold text-secondary">13</div>
                <div className="text-sm text-dark/60">階建て</div>
              </div>
              <div className="text-center p-4 bg-primary rounded-xl">
                <div className="text-3xl font-bold text-secondary">36</div>
                <div className="text-sm text-dark/60">総戸数</div>
              </div>
              <div className="text-center p-4 bg-primary rounded-xl">
                <div className="text-3xl font-bold text-secondary">2015</div>
                <div className="text-sm text-dark/60">竣工年</div>
              </div>
            </div>

            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                詳細を見る →
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

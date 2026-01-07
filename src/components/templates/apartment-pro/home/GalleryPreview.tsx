'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const previewImages = [
  '/templates/apartment-pro/images/apart-0.png',
  '/templates/apartment-pro/images/apart-1.png',
  '/templates/apartment-pro/images/apart-2.png',
  '/templates/apartment-pro/images/apart-3.png',
];

export default function GalleryPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 px-6 bg-primary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="text-secondary text-sm uppercase tracking-wider font-semibold">Gallery</span>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mt-2">ギャラリー</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {previewImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square rounded-xl overflow-hidden shadow-lg"
            >
              <Image src={img} alt={`Gallery ${index + 1}`} fill className="object-cover" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Link href="/gallery">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-secondary text-white px-10 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              全ての写真を見る →
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const galleryImages = [
  {
    src: '/templates/apartment-pro/images/upscale_pk_reception2_f.png',
    title: 'Reception',
    jpTitle: 'レセプション',
  },
  {
    src: '/templates/apartment-pro/images/kitchen_f.png',
    title: 'Kitchen',
    jpTitle: 'キッチン',
  },
  {
    src: '/templates/apartment-pro/images/outside_pov_f.png',
    title: 'Exterior',
    jpTitle: '外観',
  },
];

export default function GalleryModern() {
  return (
    <section className="bg-light py-20 sm:py-28 md:py-32 lg:py-40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16 gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-secondary" />
              <span className="text-secondary text-xs uppercase tracking-[0.2em] font-medium">Gallery</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-dark leading-tight">
              空間の魅力
            </h2>
            <p className="text-dark/40 text-sm mt-2 font-light">Aesthetic Living</p>
          </div>

          <Link href="/gallery" className="hidden md:flex items-center gap-2 group">
            <span className="text-xs uppercase tracking-[0.2em] text-dark/60 group-hover:text-secondary transition-colors">View All Photos</span>
            <span className="text-secondary transform group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>

        {/* Simple 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href="/gallery">
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-card">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Text on Hover */}
                  <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="text-white text-xl font-serif">{item.jpTitle}</h3>
                    <p className="text-white/60 text-sm mt-1">{item.title}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile View All CTA */}
        <div className="mt-10 text-center md:hidden">
          <Link href="/gallery">
            <button className="text-xs uppercase tracking-[0.2em] border-b border-dark/30 pb-1 text-dark hover:text-secondary hover:border-secondary transition-colors">
              View All Gallery
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}

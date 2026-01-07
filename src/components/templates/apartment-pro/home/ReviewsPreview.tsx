'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const reviews = [
  {
    rating: 5,
    title: '静かでいい環境',
    text: '閑静で住みやすい。交番もすぐ近くにあり、治安が良いです。',
  },
  {
    rating: 4,
    title: '銀座の端ですが便利',
    text: '他の路線が歩いて使える距離にあります。飲食店も豊富です。',
  },
];

export default function ReviewsPreview() {
  return (
    <section className="bg-primary pt-20 sm:pt-28 md:pt-32 lg:pt-40 pb-12 sm:pb-16 md:pb-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 sm:mb-12 lg:mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-secondary" />
              <span className="text-secondary text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase">
                Reviews
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-dark">
              入居者の声
            </h2>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 mt-4 sm:mt-0">
            <span className="text-dark text-2xl sm:text-3xl font-light">4.0</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`text-xs sm:text-sm ${i < 4 ? 'text-secondary' : 'text-dark/20'}`}>
                  ★
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-30px" }}
              className="bg-light p-5 sm:p-6 md:p-8 border-l-2 border-secondary/30 hover:border-secondary active:border-secondary transition-colors duration-300"
            >
              <div className="flex gap-0.5 mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-[10px] sm:text-xs ${i < review.rating ? 'text-secondary' : 'text-dark/20'}`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <h3 className="text-dark text-base sm:text-lg font-light mb-2 sm:mb-3">{review.title}</h3>
              <p className="text-dark/50 text-sm leading-relaxed">{review.text}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-10 sm:mt-12"
        >
          <Link href="/reviews">
            <span className="group inline-flex items-center gap-3 text-dark text-sm tracking-wider">
              <span className="border-b border-dark/30 pb-1 group-hover:border-secondary group-active:border-secondary transition-colors">
                All Reviews
              </span>
              <span className="group-hover:translate-x-1 group-active:translate-x-1 transition-transform">→</span>
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

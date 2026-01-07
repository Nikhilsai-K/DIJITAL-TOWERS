'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const ratings = [
  { name: '最寄り駅の充実度', value: 4.0 },
  { name: '周辺環境', value: 4.0 },
  { name: '買い物・食事', value: 4.0 },
  { name: '暮らし・子育て', value: 4.0 },
];

const reviews = [
  {
    date: '2023年10月31日',
    rating: 4,
    title: '銀座の端ですが他の路線が歩いて使える距離',
    content:
      '銀座の端ですが他の路線が歩いて使える距離にあります。全てが高いですが、高いなりのよさが享受できます。おしゃれな店が多く、ビジネス街でもあるので飲食店も豊富です。多くの人が利用しますが、治安は良いです。',
  },
  {
    date: '2021年12月12日',
    rating: 5,
    title: '静かでいい環境',
    content:
      '静かでいい。駅の出口にすぐローソンあるし、閑静で住みやすいと思う。交番もすぐ近くにあるし、特に悪いと思うところはない。築地との距離が近く、様々な駅とのアクセスもいいと思う。駅構内は綺麗で治安が悪いイメージはない。',
  },
];

export default function Reviews() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [animatedRatings, setAnimatedRatings] = useState(ratings.map(() => 0));

  useEffect(() => {
    if (isInView) {
      ratings.forEach((rating, index) => {
        setTimeout(() => {
          setAnimatedRatings((prev) => {
            const newRatings = [...prev];
            newRatings[index] = rating.value;
            return newRatings;
          });
        }, 500 + index * 150);
      });
    }
  }, [isInView]);

  return (
    <section id="reviews" ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-secondary text-sm md:text-base font-montserrat tracking-[0.3em] uppercase mb-4 block"
          >
            REVIEWS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold font-serif mb-6"
          >
            口コミ
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 w-24 bg-secondary mx-auto"
          />
        </div>

        {/* Overall Rating */}
        <div className="grid md:grid-cols-12 gap-8 lg:gap-12 mb-16">
          {/* Rating Number */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="md:col-span-3 flex flex-col items-center justify-center bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-2xl p-8 border border-secondary/30"
          >
            <div className="text-7xl md:text-8xl font-bold text-secondary mb-4">4.0</div>
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`text-2xl ${i < 4 ? 'text-secondary' : 'text-gray-600'}`}>
                  ★
                </span>
              ))}
            </div>
            <div className="text-gray-400 text-sm tracking-wider">総合評価</div>
          </motion.div>

          {/* Rating Bars */}
          <div className="md:col-span-9 space-y-6">
            {ratings.map((rating, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-40 text-sm md:text-base text-gray-300">{rating.name}</div>
                <div className="flex-1 h-3 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(animatedRatings[index] / 5) * 100}%` }}
                    transition={{ duration: 1, delay: 0.6 + index * 0.1, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-secondary to-amber-400 rounded-full"
                  />
                </div>
                <div className="w-12 text-right font-bold text-secondary">{rating.value}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + index * 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 p-8 rounded-2xl hover:border-secondary/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-sm text-gray-400">{review.date}</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-lg ${i < review.rating ? 'text-secondary' : 'text-gray-600'}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <h4 className="text-xl font-bold mb-4 leading-tight">{review.title}</h4>
              <p className="text-gray-300 leading-relaxed">{review.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

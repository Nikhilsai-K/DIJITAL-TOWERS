'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const stations = [
  {
    name: '新富町駅',
    time: '徒歩1分',
    lines: ['東京メトロ有楽町線'],
    highlight: true,
  },
  {
    name: '築地駅',
    time: '徒歩5分',
    lines: ['東京メトロ日比谷線'],
  },
  {
    name: '銀座一丁目駅',
    time: '徒歩8分',
    lines: ['東京メトロ有楽町線'],
  },
  {
    name: '東銀座駅',
    time: '徒歩8分',
    lines: ['東京メトロ日比谷線', '都営浅草線'],
  },
];

export default function Location() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="location" ref={ref} className="py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-secondary text-sm md:text-base font-montserrat tracking-[0.3em] uppercase mb-4 block"
          >
            LOCATION
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold font-serif mb-6"
          >
            アクセス
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 w-24 bg-secondary mx-auto"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Access Information */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              抜群のアクセス環境
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-300 mb-10 leading-relaxed"
            >
              複数の駅が徒歩圏内にあり、都心各地へのアクセスが非常に便利です。
            </motion.p>

            {/* Stations List */}
            <div className="space-y-4">
              {stations.map((station, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className={`group bg-gradient-to-r ${station.highlight
                      ? 'from-secondary/20 to-secondary/5 border-l-4 border-secondary'
                      : 'from-gray-800/50 to-gray-900/50 border-l-4 border-gray-600'
                    } p-6 rounded-r-xl hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-xl md:text-2xl font-bold group-hover:text-secondary transition-colors">
                      {station.name}
                    </h4>
                    <span
                      className={`${station.highlight ? 'bg-secondary text-black' : 'bg-gray-700 text-white'
                        } px-4 py-1 rounded-full text-sm font-semibold whitespace-nowrap ml-4`}
                    >
                      {station.time}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {station.lines.map((line, lineIndex) => (
                      <span
                        key={lineIndex}
                        className="text-sm text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full"
                      >
                        {line}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="h-[600px] rounded-2xl overflow-hidden border-2 border-gray-700/50 shadow-2xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.0123456789!2d139.77!3d35.67!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQwJzEyLjAiTiAxMznCsDQ2JzEyLjAiRQ!5e0!3m2!1sja!2sjp!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
        </div>

        {/* Address */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-secondary uppercase tracking-wider mb-2 font-montserrat">
            ADDRESS
          </p>
          <p className="text-2xl md:text-3xl font-bold">
            〒104-0041 東京都中央区新富2丁目7番7号
          </p>
        </motion.div>
      </div>
    </section>
  );
}

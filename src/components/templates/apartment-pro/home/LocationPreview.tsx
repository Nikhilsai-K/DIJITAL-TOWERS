'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const topStations = [
  { name: '新富町駅', time: '徒歩1分', line: '東京メトロ有楽町線', distance: '1 min' },
  { name: '築地駅', time: '徒歩5分', line: '東京メトロ日比谷線', distance: '5 min' },
  { name: '宝町駅', time: '徒歩8分', line: '東京メトロ銀座線', distance: '8 min' },
];

export default function LocationPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="bg-primary">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-16 bg-secondary" />
            <span className="text-secondary text-xs uppercase tracking-[0.3em] font-medium">
              Location
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-dark mb-4">
            抜群のアクセス
          </h2>
          <p className="text-dark/60 text-sm md:text-base font-light max-w-2xl">
            複数路線が利用可能、都心各地へスムーズにアクセス
          </p>
        </motion.div>

        <div className="space-y-1 mb-16">
          {topStations.map((station, index) => (
            <div
              key={index}
              className="group"
            >
              <div className="flex items-center justify-between py-4 border-b border-dark/10 hover:border-secondary/30 transition-colors duration-300">
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-light text-dark mb-1 group-hover:text-secondary transition-colors duration-300">
                    {station.name}
                  </h3>
                  <p className="text-xs text-dark/50 tracking-wide">{station.line}</p>
                </div>
                <div className="text-right">
                  <div className="text-xl md:text-2xl font-light text-secondary mb-1">
                    {station.distance}
                  </div>
                  <p className="text-xs text-dark/40 uppercase tracking-wider">Walk</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/location">
            <button className="group inline-flex items-center gap-3 text-dark hover:text-secondary transition-colors duration-300">
              <span className="text-sm uppercase tracking-[0.2em] border-b border-dark group-hover:border-secondary pb-1 transition-colors">
                View Full Map
              </span>
              <span className="text-xl transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('お問い合わせありがとうございます。担当者より折り返しご連絡いたします。');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" ref={ref} className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop&q=85"
          alt="Luxury Interior"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-secondary text-sm md:text-base font-montserrat tracking-[0.3em] uppercase mb-4 block"
          >
            CONTACT
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold font-serif mb-6"
          >
            お問い合わせ
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 w-24 bg-secondary mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            物件に関するご質問、内覧のご希望など、
            <br />
            お気軽にお問い合わせください。
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Quick Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="grid sm:grid-cols-2 gap-6 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="bg-secondary text-black px-8 py-6 rounded-xl font-bold text-lg shadow-lg shadow-secondary/50 hover:shadow-2xl hover:shadow-secondary/70 transition-all duration-300"
            >
              <span className="block text-3xl mb-2">📞</span>
              購入相談
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-sm border-2 border-white/80 text-white px-8 py-6 rounded-xl font-bold text-lg hover:bg-white hover:text-black transition-all duration-300"
            >
              <span className="block text-3xl mb-2">💰</span>
              無料査定
            </motion.button>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 md:p-12 shadow-2xl"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-300">
                  お名前 <span className="text-secondary">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/50 outline-none transition-all text-white"
                  placeholder="山田 太郎"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-300">
                  メールアドレス <span className="text-secondary">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/50 outline-none transition-all text-white"
                  placeholder="example@email.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-gray-300">
                電話番号
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/50 outline-none transition-all text-white"
                placeholder="090-1234-5678"
              />
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-300">
                お問い合わせ内容 <span className="text-secondary">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/50 outline-none transition-all resize-none text-white"
                placeholder="お問い合わせ内容をご記入ください..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-secondary text-black px-8 py-5 rounded-xl font-bold text-lg shadow-lg shadow-secondary/50 hover:shadow-2xl hover:shadow-secondary/70 transition-all duration-300"
            >
              送信する
            </motion.button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2 }}
            className="mt-12 text-center text-gray-300"
          >
            <p className="text-lg mb-2">営業時間: 9:00 - 18:00（年中無休）</p>
            <p className="text-sm text-gray-400">
              ※お問い合わせから3営業日以内にご返信いたします。
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

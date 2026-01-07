'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutModern() {
    return (
        <section className="bg-primary overflow-hidden">
            <div className="relative min-h-[80vh] lg:min-h-[90vh]">
                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh] lg:min-h-[90vh]">

                    {/* Left - Text Content */}
                    <div className="flex items-center px-6 sm:px-12 lg:px-16 xl:px-24 py-20 lg:py-0 order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="max-w-xl"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-[1px] w-12 bg-secondary" />
                                <span className="text-secondary text-xs uppercase tracking-[0.2em] font-medium">
                                    Concept
                                </span>
                            </div>

                            <h2 className="text-4xl md:text-5xl xl:text-6xl font-serif text-dark mb-8 leading-[1.1]">
                                銀座を、<br />
                                <span className="text-dark/60">暮らしの庭にする。</span>
                            </h2>

                            <div className="space-y-5 text-dark/50 font-light leading-[1.9] text-base">
                                <p>
                                    三菱地所レジデンスが贈る、最高峰の邸宅「ザ・パークハウス」。
                                    華やぎと静寂が交差する東銀座の地で、新しいラグジュアリーの形をご提案します。
                                </p>
                                <p>
                                    全戸南向きの開放的な設計。光と風が通り抜ける空間は、
                                    都会にいることを忘れさせるほどの静寂に包まれています。
                                </p>
                            </div>

                            {/* Stats */}
                            <div className="flex gap-12 mt-10 mb-10">
                                <div>
                                    <span className="text-xs text-dark/40 uppercase tracking-wider block mb-1">Floors</span>
                                    <span className="font-serif text-3xl text-dark">13<span className="text-sm ml-1 text-dark/40">F</span></span>
                                </div>
                                <div>
                                    <span className="text-xs text-dark/40 uppercase tracking-wider block mb-1">Units</span>
                                    <span className="font-serif text-3xl text-dark">36</span>
                                </div>
                            </div>

                            <Link href="/about">
                                <motion.button
                                    whileHover={{ x: 5 }}
                                    className="group flex items-center gap-3 text-dark font-medium hover:text-secondary transition-colors duration-300"
                                >
                                    <span className="border-b border-dark pb-1 group-hover:border-secondary transition-colors">
                                        View Details
                                    </span>
                                    <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">→</span>
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right - Full Image with Blurry/Fading Borders */}
                    <div className="relative h-[50vh] lg:h-auto order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, scale: 1.1 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2 }}
                            viewport={{ once: true }}
                            className="absolute inset-0"
                        >
                            <Image
                                src="/templates/apartment-pro/images/upscale_pk_outside_night_view_f.png"
                                alt="The Park House Exterior"
                                fill
                                className="object-cover"
                                sizes="50vw"
                                priority
                            />
                        </motion.div>

                        {/* Blurry/Fading Border Effects */}
                        {/* Left fade - blends into content */}
                        <div className="absolute inset-y-0 left-0 w-32 lg:w-48 bg-gradient-to-r from-primary via-primary/80 to-transparent z-10" />

                        {/* Top fade */}
                        <div className="absolute inset-x-0 top-0 h-24 lg:h-32 bg-gradient-to-b from-primary via-primary/60 to-transparent z-10" />

                        {/* Bottom fade */}
                        <div className="absolute inset-x-0 bottom-0 h-24 lg:h-32 bg-gradient-to-t from-primary via-primary/60 to-transparent z-10" />

                        {/* Right fade (subtle) */}
                        <div className="absolute inset-y-0 right-0 w-16 lg:w-24 bg-gradient-to-l from-primary/40 to-transparent z-10" />

                        {/* Corner blurs for extra smoothness */}
                        <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-primary via-primary/50 to-transparent z-10" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-primary via-primary/50 to-transparent z-10" />
                    </div>

                </div>
            </div>
        </section>
    );
}

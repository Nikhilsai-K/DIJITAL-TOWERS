"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, Palette, Code, Rocket, Clock, CheckCircle2 } from "lucide-react";
import { processSteps } from "@/data/content";

const stepIcons = [Search, Palette, Code, Rocket];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#0a0a0a]" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        {/* Gradient Orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 container-luxury">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 mb-6 text-sm text-gold-400 border border-gold-500/30 rounded-full"
          >
            Our Process
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">From Vision to </span>
            <span className="gradient-text">Digital Reality</span>
          </h2>
          <p className="text-lg text-zinc-400">
            Our proven four-step process ensures every project delivers exceptional results, on time and beyond expectations.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-0.5">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="h-full bg-gradient-to-r from-gold-500/50 via-gold-400/50 to-gold-500/50 origin-left"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {processSteps.map((step, index) => {
              const IconComponent = stepIcons[index];
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
                  className="relative text-center group"
                >
                  {/* Step Number Circle */}
                  <div className="relative inline-flex mb-6">
                    <motion.div
                      className="w-20 h-20 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center relative z-10"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <IconComponent className="w-8 h-8 text-black" />
                    </motion.div>
                    {/* Glow */}
                    <div className="absolute inset-0 rounded-full bg-gold-500/30 blur-xl group-hover:bg-gold-500/50 transition-all duration-500" />
                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-black border-2 border-gold-500 flex items-center justify-center z-20">
                      <span className="text-gold-400 font-bold text-sm">{step.step}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold-100 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Duration Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                    <Clock className="w-4 h-4 text-gold-400" />
                    <span className="text-sm text-zinc-300">{step.duration}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="mt-20 grid md:grid-cols-3 gap-6"
        >
          {[
            { title: "Transparent Communication", desc: "Weekly updates and 24/7 access to project dashboard" },
            { title: "Quality Assurance", desc: "Rigorous testing across all devices and browsers" },
            { title: "Post-Launch Support", desc: "Ongoing maintenance and optimization services" }
          ].map((feature, index) => (
            <div
              key={feature.title}
              className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/10 hover:border-gold-500/30 transition-colors"
            >
              <CheckCircle2 className="w-6 h-6 text-gold-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                <p className="text-sm text-zinc-400">{feature.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

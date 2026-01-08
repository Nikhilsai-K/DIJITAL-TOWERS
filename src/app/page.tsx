"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Building2, Landmark, Home as HomeIcon, Sparkles, Zap, Shield, Clock, Eye, Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { services, portfolioItems, processSteps, testimonials } from "@/data/content";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

const iconMap = {
  Building2: Building2,
  Landmark: Landmark,
};

export default function Home() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const features = [
    { icon: Sparkles, title: t.features.beautiful.title, description: t.features.beautiful.desc, color: "blue" },
    { icon: Zap, title: t.features.fast.title, description: t.features.fast.desc, color: "green" },
    { icon: Shield, title: t.features.secure.title, description: t.features.secure.desc, color: "purple" },
    { icon: Clock, title: t.features.quick.title, description: t.features.quick.desc, color: "amber" },
  ];

  const templates = [
    { id: 1, name: t.templatesSection.items[0].name, category: t.templatesSection.items[0].cat, image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80", color: "blue", link: "/templates" },
    { id: 2, name: t.templatesSection.items[1].name, category: t.templatesSection.items[1].cat, image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80", color: "purple", link: "/templates" },
    { id: 3, name: t.templatesSection.items[2].name, category: t.templatesSection.items[2].cat, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80", color: "green", link: "/templates/apartment-pro/preview" },
    { id: 4, name: t.templatesSection.items[3].name, category: t.templatesSection.items[3].cat, image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80", color: "amber", link: "/templates" },
  ];

  return (
    <main className="relative">
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Features Section - Compact & Elegant */}
      <section className="py-16 bg-gradient-to-b from-white to-slate-50/50">
        <div className="container-main">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feature, index) => {
              const colorMap = {
                blue: { bg: "bg-blue-50", text: "text-blue-600", iconBg: "bg-blue-600" },
                green: { bg: "bg-green-50", text: "text-green-600", iconBg: "bg-green-600" },
                purple: { bg: "bg-purple-50", text: "text-purple-600", iconBg: "bg-purple-600" },
                amber: { bg: "bg-amber-50", text: "text-amber-600", iconBg: "bg-amber-600" },
              };

              const colors = colorMap[feature.color as keyof typeof colorMap];

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200/60 p-6 hover:shadow-lg hover:border-slate-300 transition-all duration-300 group text-center"
                >
                  <div className={`${colors.iconBg} w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-white">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-8"
          >
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2 block">
              {t.services.label}
            </span>
            <h2 className="heading-2 mb-3">
              {t.services.titlePrefix} <span className="gradient-text">{t.services.titleHighlight}</span>
            </h2>
            <p className="body-text">
              {t.services.desc}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {t.services.items.map((service, index) => {
              // We'll map the index back to the icons since the translation array doesn't hold icons
              const icons = ["Building2", "Landmark"];
              const IconComponent = iconMap[icons[index] as keyof typeof iconMap];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="card p-8 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    className="feature-icon mb-6 group-hover:shadow-glow-blue transition-all duration-300"
                  >
                    <IconComponent className="w-6 h-6" />
                  </motion.div>
                  <h3 className="heading-3 mb-4 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                  <p className="body-text-sm mb-6">{service.desc}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        <span className="text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Templates Preview Section */}
      <section className="py-12 bg-gradient-to-br from-slate-50 to-white">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-8"
          >
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2 block">
              {t.templatesSection.label}
            </span>
            <h2 className="heading-2 mb-3">
              {t.templatesSection.titlePrefix} <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">{t.templatesSection.titleHighlight}</span>
            </h2>
            <p className="body-text">
              {t.templatesSection.desc}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {templates.map((template, index) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <Link href={template.link}>
                  <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-500 bg-white border border-slate-100">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src={template.image}
                        alt={template.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="text-base font-bold mb-0.5">{template.name}</h3>
                        <p className="text-xs text-white/90">{template.category}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-8"
          >
            <Link href="/templates">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg inline-flex items-center gap-2"
              >
                {t.templatesSection.cta}
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 section-alt">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-8"
          >
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2 block">
              {t.process.label}
            </span>
            <h2 className="heading-2 mb-3">
              {t.process.titlePrefix} <span className="gradient-text">{t.process.titleHighlight}</span>
            </h2>
            <p className="body-text">
              {t.process.desc}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200" />

            {t.process.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative z-10 inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6 shadow-lg"
                >
                  <span className="text-3xl font-bold text-white">{index + 1}</span>
                </motion.div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 max-w-xs mx-auto">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates CTA Section */}
      <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
        />

        <div className="container-main relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {t.ctaSection.title}
            </h2>
            <p className="text-slate-300 text-lg max-w-xl mx-auto mb-8">
              {t.ctaSection.desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/templates">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-slate-900 font-semibold px-8 py-4 rounded-xl hover:bg-slate-100 transition-colors inline-flex items-center gap-2"
                >
                  {t.ctaSection.btn1}
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors"
                >
                  {t.ctaSection.btn2}
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-lg bg-white">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-10 lg:p-16 text-center text-white relative overflow-hidden"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ scale: [1.2, 1, 1.2] }}
              transition={{ duration: 12, repeat: Infinity }}
              className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"
            />

            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                {t.finalCta.title}
              </h2>
              <p className="text-blue-100 text-lg max-w-xl mx-auto mb-8">
                {t.finalCta.desc}
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
                >
                  {t.finalCta.btn}
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

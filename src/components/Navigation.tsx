"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { navItems, siteConfig } from "@/data/content";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { lang, setLang } = useLanguage();
  const t = translations[lang].nav;

  const translatedNavItems = [
    { label: t.home, href: "/" },
    { label: t.templates, href: "/templates" },
    { label: t.about, href: "/portfolio" },
    { label: t.contact, href: "/contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-white/95 backdrop-blur-2xl shadow-elegant border-b border-slate-200/80"
          : "bg-transparent backdrop-blur-sm border-b border-white/20"
          }`}
      >
        <nav className="container-main">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Image
                src="/images/logo.png"
                alt="DigiHome"
                width={80}
                height={80}
                className="h-20 w-20 object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
              <span className="-ml-2 text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent transition-all duration-300">
                DigiHome
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {translatedNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative py-2"
                >
                  <span className={`text-[15px] font-semibold transition-all duration-300 ${pathname === item.href
                    ? "text-blue-600"
                    : "text-slate-700 hover:text-slate-900"
                    }`}>
                    {item.label}
                  </span>
                  {pathname === item.href && (
                    <motion.div
                      layoutId="navUnderline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {pathname !== item.href && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-slate-300 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                  )}
                </Link>
              ))}
            </div>

            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === "en" ? "ja" : "en")}
              className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-slate-200 hover:border-blue-400 bg-white/80 backdrop-blur-sm transition-all duration-300 group"
            >
              <Globe className="w-4 h-4 text-slate-500 group-hover:text-blue-600 transition-colors" />
              <span className={`text-sm font-bold transition-colors ${lang === "en" ? "text-blue-600" : "text-slate-400"}`}>
                EN
              </span>
              <span className="text-slate-300">/</span>
              <span className={`text-sm font-bold transition-colors ${lang === "ja" ? "text-blue-600" : "text-slate-400"}`}>
                JP
              </span>
            </button>

            {/* Contact CTA */}
            <Link
              href="/contact"
              className="hidden lg:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Contact
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-slate-700 hover:text-slate-900 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Premium Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-40 lg:hidden"
        >
          {/* Animated Backdrop with Blur */}
          <motion.div
            initial={{ opacity: 0, scale: 1.2, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 1.1, rotate: -5 }}
            transition={{
              duration: 0.5,
              ease: [0.19, 1, 0.22, 1]
            }}
            className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-blue-900/50 to-purple-900/60 backdrop-blur-2xl"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu Panel with Dramatic Entry */}
          <motion.div
            initial={{
              x: "120%",
              opacity: 0,
              scale: 0.8,
              rotateY: -25,
              rotateZ: 5
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
              rotateY: 0,
              rotateZ: 0
            }}
            exit={{
              x: "120%",
              opacity: 0,
              scale: 0.85,
              rotateY: -20,
              rotateZ: 3
            }}
            transition={{
              type: "spring",
              damping: 22,
              stiffness: 180,
              mass: 1,
              velocity: 2
            }}
            style={{
              perspective: 1200,
              transformStyle: "preserve-3d"
            }}
            className="absolute right-0 top-0 bottom-0 w-[320px] bg-white/98 backdrop-blur-3xl shadow-2xl border-l border-slate-200/50"
          >
            {/* Gradient Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

            {/* Floating Orbs for Ambiance */}
            <div className="absolute top-20 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-40 left-10 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl" />

            <div className="relative h-full flex flex-col p-6 pt-8">
              {/* Close Button - Premium Design */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 w-10 h-10 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 hover:from-blue-50 hover:to-purple-50 flex items-center justify-center shadow-lg hover:shadow-xl transition-all group"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors" />
              </motion.button>

              {/* Logo Section */}
              <motion.div
                initial={{ y: -30, opacity: 0, scale: 0.8, rotateX: -20 }}
                animate={{ y: 0, opacity: 1, scale: 1, rotateX: 0 }}
                transition={{
                  delay: 0.2,
                  type: "spring",
                  stiffness: 200,
                  damping: 15
                }}
                className="mb-8"
              >
                <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all">
                    <span className="text-white font-bold text-lg">DH</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      DigiHome
                    </h3>
                    <p className="text-xs text-slate-500">Premium Web Design</p>
                  </div>
                </Link>
              </motion.div>

              {/* Navigation Items with Stagger Animation */}
              <nav className="flex-1 space-y-2">
                {translatedNavItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{
                        x: 80,
                        opacity: 0,
                        scale: 0.85,
                        rotateX: -15,
                        rotateY: 20
                      }}
                      animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1,
                        rotateX: 0,
                        rotateY: 0
                      }}
                      transition={{
                        delay: 0.25 + index * 0.1,
                        type: "spring",
                        stiffness: 220,
                        damping: 18,
                        mass: 0.8
                      }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`group block relative px-5 py-4 rounded-xl transition-all duration-300 ${isActive
                          ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                          : "text-slate-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600"
                          }`}
                      >
                        <div className="flex items-center gap-3">
                          {/* Active Indicator */}
                          {isActive && (
                            <motion.div
                              layoutId="activeIndicator"
                              className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r-full"
                              transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                          )}

                          <span className={`text-lg font-semibold ${isActive ? "text-white" : ""}`}>
                            {item.label}
                          </span>

                          <motion.div
                            initial={false}
                            animate={{ x: isActive ? 0 : -5, opacity: isActive ? 1 : 0 }}
                            className="ml-auto"
                          >
                            <ArrowRight className={`w-5 h-5 ${isActive ? "text-white" : "text-blue-600"}`} />
                          </motion.div>
                        </div>

                        {/* Hover Shine Effect */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] duration-700" />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Language Toggle - Mobile */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.55, type: "spring", stiffness: 180, damping: 20 }}
                className="pt-4 border-t border-slate-200"
              >
                <button
                  onClick={() => setLang(lang === "en" ? "ja" : "en")}
                  className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-slate-50 to-slate-100 hover:from-blue-50 hover:to-purple-50 transition-all duration-300 group"
                >
                  <Globe className="w-5 h-5 text-slate-500 group-hover:text-blue-600 transition-colors" />
                  <span className={`text-base font-bold transition-colors ${lang === "en" ? "text-blue-600" : "text-slate-400"}`}>
                    English
                  </span>
                  <div className="w-12 h-6 rounded-full bg-slate-200 relative transition-colors">
                    <motion.div
                      animate={{ x: lang === "ja" ? 24 : 0 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-md"
                    />
                  </div>
                  <span className={`text-base font-bold transition-colors ${lang === "ja" ? "text-blue-600" : "text-slate-400"}`}>
                    日本語
                  </span>
                </button>
              </motion.div>

              {/* Contact Info Section */}
              <motion.div
                initial={{
                  y: 40,
                  opacity: 0,
                  scale: 0.9,
                  rotateX: 20
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  rotateX: 0
                }}
                transition={{
                  delay: 0.6,
                  type: "spring",
                  stiffness: 180,
                  damping: 20
                }}
                className="space-y-4 pt-6 border-t border-slate-200"
              >
                {/* Contact Info */}
                <div className="text-sm text-slate-600 space-y-3 px-2">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="font-medium">{siteConfig.contact.email}</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="font-medium">{siteConfig.contact.phone}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter, ArrowUp, Heart } from "lucide-react";
import { siteConfig, navItems } from "@/data/content";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: "Luxury Property Websites", href: "#services" },
      { label: "Tower & High-Rise Solutions", href: "#services" },
      { label: "Real Estate Branding", href: "#services" },
      { label: "Performance Marketing", href: "#services" },
    ],
    company: [
      { label: "About Us", href: "#" },
      { label: "Our Portfolio", href: "#portfolio" },
      { label: "Process", href: "#process" },
      { label: "Careers", href: "#" },
    ],
    resources: [
      { label: "Blog", href: "#" },
      { label: "Case Studies", href: "#portfolio" },
      { label: "FAQ", href: "#pricing" },
      { label: "Contact", href: "#contact" },
    ],
  };

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-grid opacity-10" />

      <div className="relative z-10 container-luxury">
        {/* Top Section */}
        <div className="grid lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#" className="inline-flex items-center gap-3 mb-6 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 rounded-lg flex items-center justify-center shadow-lg shadow-gold-500/20">
                  <span className="text-black font-bold text-2xl">D</span>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold">
                  <span className="text-white">DIJITAL</span>
                  <span className="gradient-text ml-1">TOWERS</span>
                </h2>
              </div>
            </a>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              {siteConfig.tagline}
            </p>
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: siteConfig.social.instagram },
                { icon: Linkedin, href: siteConfig.social.linkedin },
                { icon: Twitter, href: siteConfig.social.twitter },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-gold-500/20 border border-white/10 hover:border-gold-500/30 flex items-center justify-center text-zinc-400 hover:text-gold-400 transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-3 grid sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-zinc-400 hover:text-gold-400 text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-zinc-400 hover:text-gold-400 text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-zinc-400 hover:text-gold-400 text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-12 border-b border-white/10">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-xl font-bold text-white mb-3">
              Stay Updated with Luxury Real Estate Trends
            </h3>
            <p className="text-zinc-400 text-sm mb-6">
              Subscribe to our newsletter for insights on Japanese luxury property market and digital innovation.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:border-gold-500/50 focus:outline-none focus:ring-2 focus:ring-gold-500/20 transition-all"
              />
              <motion.button
                type="submit"
                className="btn-luxury whitespace-nowrap"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-zinc-500">
            <span>&copy; {currentYear} DIJITAL TOWERS. All rights reserved.</span>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-zinc-500 flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in Tokyo
            </span>
            <motion.button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-gold-500/20 border border-white/10 hover:border-gold-500/30 flex items-center justify-center text-zinc-400 hover:text-gold-400 transition-all"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}

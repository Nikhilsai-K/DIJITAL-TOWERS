"use client";

import Link from "next/link";
import { Instagram, Linkedin, Twitter, ArrowUp, Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/data/content";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: "Luxury Property Websites", href: "/services" },
      { label: "Tower & High-Rise Solutions", href: "/services" },
      { label: "Real Estate Branding", href: "/services" },
      { label: "Performance Marketing", href: "/services" },
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Our Portfolio", href: "/portfolio" },
      { label: "Careers", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    resources: [
      { label: "Blog", href: "/" },
      { label: "Case Studies", href: "/portfolio" },
      { label: "FAQ", href: "/contact" },
      { label: "Privacy Policy", href: "/" },
    ],
  };

  return (
    <footer className="footer pt-20 pb-8">
      <div className="container-main">
        {/* Top Section */}
        <div className="grid lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">D</span>
              </div>
              <div>
                <h2 className="text-xl font-bold">
                  <span className="text-white">DIJITAL</span>
                  <span className="text-blue-400 ml-1">TOWERS</span>
                </h2>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {siteConfig.tagline}
            </p>
            <div className="flex gap-3">
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
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-blue-500/20 border border-white/10 hover:border-blue-500/30 flex items-center justify-center text-slate-400 hover:text-blue-400 transition-all"
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
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-slate-400">
                  <Mail className="w-4 h-4 mt-0.5 text-blue-400" />
                  <span>{siteConfig.contact.email}</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-400">
                  <Phone className="w-4 h-4 mt-0.5 text-blue-400" />
                  <span>{siteConfig.contact.phone}</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-400">
                  <MapPin className="w-4 h-4 mt-0.5 text-blue-400" />
                  <span>{siteConfig.contact.address}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-slate-500">
            <span>&copy; {currentYear} DIJITAL TOWERS. All rights reserved.</span>
            <span className="hidden md:inline text-slate-700">|</span>
            <Link href="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="hidden md:inline text-slate-700">|</span>
            <Link href="/" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl bg-white/5 hover:bg-blue-500/20 border border-white/10 hover:border-blue-500/30 flex items-center justify-center text-slate-400 hover:text-blue-400 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

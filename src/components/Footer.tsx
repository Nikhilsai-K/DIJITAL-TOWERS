"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUp, Mail, Phone, MapPin } from "lucide-react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { siteConfig } from "@/data/content";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    templates: [
      { label: "Tower Elite", href: "/templates" },
      { label: "Villa Luxe", href: "/templates" },
      { label: "Apartment Pro", href: "/templates" },
      { label: "Penthouse Premium", href: "/templates" },
    ],
    company: [
      { label: "About Us", href: "/portfolio" },
      { label: "Templates", href: "/templates" },
      { label: "Contact", href: "/contact" },
    ],
  };

  return (
    <footer className="footer pt-20 pb-8 relative overflow-hidden">
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-95" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="container-main relative z-10">
        {/* Top Section */}
        <div className="grid lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <Image
                src="/images/logo.png"
                alt="DigiHome"
                width={180}
                height={50}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {siteConfig.tagline}
            </p>
            <div className="flex gap-3">
              {[
                { icon: FaInstagram, href: siteConfig.social.instagram },
                { icon: FaLinkedin, href: siteConfig.social.linkedin },
                { icon: FaTwitter, href: siteConfig.social.twitter },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 rounded-xl bg-white/5 hover:bg-blue-500/20 border border-white/10 hover:border-blue-500/40 flex items-center justify-center text-slate-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:shadow-glow-blue"
                >
                  <social.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-3 grid sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Templates</h3>
              <ul className="space-y-3">
                {footerLinks.templates.map((link) => (
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
            <span>&copy; {currentYear} DigiHome. All rights reserved.</span>
            <span className="hidden md:inline text-slate-700">|</span>
            <Link href="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="hidden md:inline text-slate-700">|</span>
            <Link href="/" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>

          <button
            onClick={scrollToTop}
            className="group w-10 h-10 rounded-xl bg-white/5 hover:bg-blue-500/20 border border-white/10 hover:border-blue-500/40 flex items-center justify-center text-slate-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:shadow-glow-blue hover:-translate-y-1"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

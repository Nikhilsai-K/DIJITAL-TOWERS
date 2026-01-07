"use client";

import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { siteConfig, faqs } from "@/data/content";

export default function ContactPage() {
  return (
    <main className="relative">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-blue-600 font-semibold text-lg mb-6"
            >
              Contact Us
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            >
              <span className="text-slate-900">Let&apos;s Create Something</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Extraordinary
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-slate-600 max-w-3xl mx-auto"
            >
              Ready to transform your luxury property into a digital masterpiece? Get in touch with our team.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-lg">
        <div className="container-main">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-3xl shadow-elegant hover-shadow-luxe transition-all duration-500 p-8 lg:p-12 border border-slate-100">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Send us a message</h2>
                <p className="text-slate-600 mb-10">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="form-label">Your Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="form-label">Email Address</label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="form-label">Company / Property Name</label>
                      <input
                        type="text"
                        placeholder="Your Company"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+81 3-1234-5678"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="form-label">Project Type</label>
                    <select className="form-input">
                      <option value="">Select a service</option>
                      <option value="website">Luxury Property Website</option>
                      <option value="tower">Tower & High-Rise Solutions</option>
                      <option value="branding">Real Estate Branding</option>
                      <option value="marketing">Performance Marketing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="form-label">Project Details</label>
                    <textarea
                      rows={5}
                      placeholder="Tell us about your property and project requirements..."
                      className="form-input resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary w-full flex items-center justify-center gap-2"
                  >
                    Send Message
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Contact Details */}
              <div className="bg-white rounded-3xl shadow-elegant hover-shadow-elegant transition-all duration-500 p-8 border border-slate-100">
                <h3 className="font-semibold text-lg text-slate-900 mb-8">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="feature-icon flex-shrink-0 w-10 h-10">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 mb-1">Email</p>
                      <a href={`mailto:${siteConfig.contact.email}`} className="font-medium text-slate-900 hover:text-blue-600 transition-colors">
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="feature-icon flex-shrink-0 w-10 h-10">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 mb-1">Phone</p>
                      <a href={`tel:${siteConfig.contact.phone}`} className="font-medium text-slate-900 hover:text-blue-600 transition-colors">
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="feature-icon flex-shrink-0 w-10 h-10">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 mb-1">Office</p>
                      <p className="font-medium text-slate-900">
                        {siteConfig.contact.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="feature-icon flex-shrink-0 w-10 h-10">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 mb-1">Business Hours</p>
                      <p className="font-medium text-slate-900">Mon - Fri: 9:00 - 18:00 JST</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-lg section-alt">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <p className="text-blue-600 font-semibold text-lg mb-4">FAQ</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-elegant hover-shadow-luxe transition-all duration-500 p-8 border border-slate-100 cursor-pointer"
                >
                  <h3 className="font-semibold text-xl text-slate-900 mb-4">{faq.question}</h3>
                  <p className="text-slate-600 leading-relaxed text-base">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

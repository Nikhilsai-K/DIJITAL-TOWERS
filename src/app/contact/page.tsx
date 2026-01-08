"use client";

import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { siteConfig } from "@/data/content";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function ContactPage() {
  const { lang } = useLanguage();
  const t = translations[lang];

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
              {t.contactPage.hero.badge}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            >
              <span className="text-slate-900">{t.contactPage.hero.titlePrefix}</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {t.contactPage.hero.titleHighlight}
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-slate-600 max-w-3xl mx-auto"
            >
              {t.contactPage.hero.desc}
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
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{t.contactPage.form.title}</h2>
                <p className="text-slate-600 mb-10">{t.contactPage.form.desc}</p>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="form-label">{t.contactPage.form.labels.name}</label>
                      <input
                        type="text"
                        placeholder={t.contactPage.form.placeholders.name}
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="form-label">{t.contactPage.form.labels.email}</label>
                      <input
                        type="email"
                        placeholder={t.contactPage.form.placeholders.email}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="form-label">{t.contactPage.form.labels.company}</label>
                      <input
                        type="text"
                        placeholder={t.contactPage.form.placeholders.company}
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="form-label">{t.contactPage.form.labels.phone}</label>
                      <input
                        type="tel"
                        placeholder={t.contactPage.form.placeholders.phone}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="form-label">{t.contactPage.form.labels.projectType}</label>
                    <select className="form-input">
                      <option value="">{t.contactPage.form.options.default}</option>
                      <option value="website">{t.contactPage.form.options.website}</option>
                      <option value="tower">{t.contactPage.form.options.tower}</option>
                      <option value="branding">{t.contactPage.form.options.branding}</option>
                      <option value="marketing">{t.contactPage.form.options.marketing}</option>
                      <option value="other">{t.contactPage.form.options.other}</option>
                    </select>
                  </div>

                  <div>
                    <label className="form-label">{t.contactPage.form.labels.projectDetails}</label>
                    <textarea
                      rows={5}
                      placeholder={t.contactPage.form.placeholders.details}
                      className="form-input resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary w-full flex items-center justify-center gap-2"
                  >
                    {t.contactPage.form.btn}
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
                <h3 className="font-semibold text-lg text-slate-900 mb-8">{t.contactPage.info.title}</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="feature-icon flex-shrink-0 w-10 h-10">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 mb-1">{t.contactPage.info.labels.email}</p>
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
                      <p className="text-sm text-slate-500 mb-1">{t.contactPage.info.labels.phone}</p>
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
                      <p className="text-sm text-slate-500 mb-1">{t.contactPage.info.labels.office}</p>
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
                      <p className="text-sm text-slate-500 mb-1">{t.contactPage.info.labels.hours}</p>
                      <p className="font-medium text-slate-900">{t.contactPage.info.labels.hoursValue}</p>
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
            <p className="text-blue-600 font-semibold text-lg mb-4">{t.contactPage.faq.badge}</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              {t.contactPage.faq.titlePrefix}{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {t.contactPage.faq.titleHighlight}
              </span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {t.contactPage.faq.items.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-elegant hover-shadow-luxe transition-all duration-500 p-8 border border-slate-100 cursor-pointer"
                >
                  <h3 className="font-semibold text-xl text-slate-900 mb-4">{faq.q}</h3>
                  <p className="text-slate-600 leading-relaxed text-base">{faq.a}</p>
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

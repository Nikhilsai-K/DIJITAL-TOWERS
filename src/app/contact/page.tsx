import Link from "next/link";
import { Mail, Phone, MapPin, Clock, ArrowRight, MessageSquare } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { siteConfig, faqs } from "@/data/content";

export default function ContactPage() {
  return (
    <main className="relative">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-30" />

        <div className="relative container-main">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-blue-600 font-semibold mb-4">Contact Us</p>
            <h1 className="heading-1 mb-6">
              Let&apos;s Create Something{" "}
              <span className="gradient-text">Extraordinary</span>
            </h1>
            <p className="body-text">
              Ready to transform your luxury property into a digital masterpiece? Get in touch with our team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-lg">
        <div className="container-main">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="card p-8 lg:p-10">
                <h2 className="heading-3 mb-2">Send us a message</h2>
                <p className="text-slate-500 mb-8">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>

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

                  <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                    Send Message
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Details */}
              <div className="card p-8">
                <h3 className="font-semibold text-lg text-slate-900 mb-6">Contact Information</h3>
                <div className="space-y-5">
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

              {/* Quick Response */}
              <div className="card p-8 bg-blue-50 border-blue-100">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Quick Response</h3>
                    <p className="text-sm text-slate-600">
                      We typically respond to all inquiries within 24 hours during business days.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-lg section-alt">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-blue-600 font-semibold mb-3">FAQ</p>
            <h2 className="heading-2 mb-6">
              Frequently Asked{" "}
              <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="card p-6">
                  <h3 className="font-semibold text-slate-900 mb-3">{faq.question}</h3>
                  <p className="text-slate-500">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

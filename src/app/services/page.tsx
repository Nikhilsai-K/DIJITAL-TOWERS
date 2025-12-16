import Link from "next/link";
import { ArrowRight, Check, Building2, Landmark, Palette, TrendingUp, Zap, Shield, Clock, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { services, processSteps } from "@/data/content";

const iconMap = {
  Building2: Building2,
  Landmark: Landmark,
  Palette: Palette,
  TrendingUp: TrendingUp,
};

export default function ServicesPage() {
  return (
    <main className="relative">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-30" />

        <div className="relative container-main">
          <div className="max-w-3xl">
            <p className="text-blue-600 font-semibold mb-4">Our Services</p>
            <h1 className="heading-1 mb-6">
              Comprehensive Digital Solutions for{" "}
              <span className="gradient-text">Luxury Real Estate</span>
            </h1>
            <p className="body-text max-w-2xl mb-8">
              From stunning website design to performance marketing, we offer end-to-end digital services tailored specifically for the luxury property market in Japan.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Discuss Your Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-lg">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap];
              return (
                <div key={service.id} className="card p-8 lg:p-10">
                  <div className="flex items-start gap-6">
                    <div className="feature-icon flex-shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h2 className="heading-3 mb-4">{service.title}</h2>
                      <p className="body-text-sm mb-6">{service.description}</p>

                      <div className="grid sm:grid-cols-2 gap-3 mb-6">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2 text-sm">
                            <Check className="w-4 h-4 text-blue-500 flex-shrink-0" />
                            <span className="text-slate-600">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Link
                        href="/contact"
                        className="link-primary inline-flex items-center gap-2 text-sm"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-lg section-alt">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-blue-600 font-semibold mb-3">Why Choose Us</p>
            <h2 className="heading-2 mb-6">
              What Sets Us{" "}
              <span className="gradient-text">Apart</span>
            </h2>
            <p className="body-text">
              We combine deep industry expertise with cutting-edge technology to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: "Fast Performance",
                description: "Lightning-fast websites optimized for the best user experience",
              },
              {
                icon: Shield,
                title: "Secure & Reliable",
                description: "Enterprise-grade security for your valuable property data",
              },
              {
                icon: Clock,
                title: "On-Time Delivery",
                description: "We meet deadlines without compromising on quality",
              },
              {
                icon: Users,
                title: "Dedicated Support",
                description: "Personal account managers for seamless communication",
              },
            ].map((item) => (
              <div key={item.title} className="card p-6 text-center">
                <div className="feature-icon mx-auto mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-lg">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-blue-600 font-semibold mb-3">Our Process</p>
            <h2 className="heading-2 mb-6">
              From Vision to{" "}
              <span className="gradient-text">Digital Reality</span>
            </h2>
            <p className="body-text">
              Our proven four-step process ensures every project delivers exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="relative">
                {/* Step Number */}
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl flex items-center justify-center mb-6">
                  {step.step}
                </div>

                <h3 className="font-semibold text-xl text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-lg section-alt">
        <div className="container-main">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-10 lg:p-16 text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10">
              Let&apos;s discuss how we can help elevate your property&apos;s digital presence.
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Building2, Landmark, Palette, TrendingUp, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { stats, services, portfolioItems, testimonials } from "@/data/content";

const iconMap = {
  Building2: Building2,
  Landmark: Landmark,
  Palette: Palette,
  TrendingUp: TrendingUp,
};

export default function Home() {
  return (
    <main className="relative">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-3xl opacity-50" />

        <div className="relative container-main">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="badge mb-8">
              <span className="w-2 h-2 bg-blue-500 rounded-full" />
              Japan&apos;s Premier Luxury Property Web Design
            </div>

            {/* Main Heading */}
            <h1 className="heading-1 mb-6">
              We Create{" "}
              <span className="gradient-text">Digital Masterpieces</span>
              <br />
              For Luxury Properties
            </h1>

            {/* Subtitle */}
            <p className="body-text max-w-2xl mx-auto mb-10">
              We create stunning, conversion-focused websites for luxury mansions, towers, and premium apartments across Japan. Transform your prestigious property into a digital masterpiece.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
              <Link href="/portfolio" className="btn-primary flex items-center gap-2">
                View Our Work
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="btn-secondary flex items-center gap-2">
                Start a Project
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <div className="stat-number">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="section-lg section-alt">
        <div className="container-main">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-blue-600 font-semibold mb-3">Our Services</p>
            <h2 className="heading-2 mb-6">
              Elevate Your Property&apos;s{" "}
              <span className="gradient-text">Digital Presence</span>
            </h2>
            <p className="body-text">
              We offer comprehensive digital solutions tailored specifically for the luxury real estate market in Japan.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap];
              return (
                <div key={service.id} className="card p-8 lg:p-10">
                  {/* Icon */}
                  <div className="feature-icon mb-6">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <h3 className="heading-3 mb-4">{service.title}</h3>
                  <p className="body-text-sm mb-6">{service.description}</p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        <span className="text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/services" className="btn-secondary inline-flex items-center gap-2">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="section-lg">
        <div className="container-main">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-blue-600 font-semibold mb-3">Our Portfolio</p>
            <h2 className="heading-2 mb-6">
              Showcasing Japan&apos;s{" "}
              <span className="gradient-text">Most Prestigious Properties</span>
            </h2>
            <p className="body-text">
              Explore our collection of stunning digital experiences we&apos;ve created for luxury real estate across Japan.
            </p>
          </div>

          {/* Portfolio Grid - Show first 3 */}
          <div className="grid-portfolio mb-12">
            {portfolioItems.slice(0, 3).map((item) => (
              <div key={item.id} className="card-elevated overflow-hidden group">
                <div className="image-container aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-blue-600 uppercase tracking-wide">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-semibold text-slate-900 mt-2 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 mb-3">{item.location}</p>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/portfolio" className="btn-primary inline-flex items-center gap-2">
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-lg section-alt">
        <div className="container-main">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-blue-600 font-semibold mb-3">Testimonials</p>
            <h2 className="heading-2 mb-6">
              Trusted by Japan&apos;s{" "}
              <span className="gradient-text">Leading Developers</span>
            </h2>
            <p className="body-text">
              Don&apos;t just take our word for it. Here&apos;s what our clients have to say.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-slate-600 mb-6 leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-100">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-lg">
        <div className="container-main">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-10 lg:p-16 text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Transform Your Property?
            </h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10">
              Let&apos;s create something extraordinary together. Get in touch to discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/portfolio"
                className="border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

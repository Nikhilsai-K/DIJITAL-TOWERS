import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award, Users, Target, Heart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { teamMembers, siteConfig } from "@/data/content";

export default function AboutPage() {
  return (
    <main className="relative">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-30" />

        <div className="relative container-main">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-blue-600 font-semibold mb-4">About Us</p>
              <h1 className="heading-1 mb-6">
                Crafting Digital Excellence for{" "}
                <span className="gradient-text">Luxury Properties</span>
              </h1>
              <p className="body-text mb-8">
                Founded in Tokyo, {siteConfig.name} is Japan&apos;s premier digital agency specializing exclusively in luxury real estate. We combine cutting-edge technology with sophisticated design to create digital experiences that match the prestige of your properties.
              </p>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Work With Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-large">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                  alt="DIGITAL TOWERS Office"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-luxe p-8 border border-slate-100">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">10+</div>
                <div className="text-sm font-medium text-slate-600 mt-1">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-lg section-alt">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-blue-600 font-semibold mb-3">Our Values</p>
            <h2 className="heading-2 mb-6">
              What Drives{" "}
              <span className="gradient-text">Our Work</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: "Excellence",
                description: "We pursue perfection in every pixel and every line of code.",
              },
              {
                icon: Users,
                title: "Collaboration",
                description: "We work closely with clients to understand their unique vision.",
              },
              {
                icon: Target,
                title: "Results",
                description: "We focus on delivering measurable business outcomes.",
              },
              {
                icon: Heart,
                title: "Passion",
                description: "We love what we do and it shows in our work.",
              },
            ].map((value) => (
              <div key={value.title} className="bg-white rounded-2xl shadow-elegant hover-shadow-luxe transition-all duration-500 p-10 text-center border border-slate-100 group cursor-pointer hover:-translate-y-2">
                <div className="feature-icon mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-xl text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-lg">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-blue-600 font-semibold mb-3">Our Team</p>
            <h2 className="heading-2 mb-6">
              Meet the{" "}
              <span className="gradient-text">Experts</span>
            </h2>
            <p className="body-text">
              A team of passionate professionals dedicated to creating exceptional digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="group">
                <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-elegant hover-shadow-luxe transition-all duration-500 hover:border-blue-200 hover:-translate-y-3">
                  {/* Image Container */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 text-center">
                    <h3 className="font-semibold text-xl text-slate-900 mb-1">{member.name}</h3>
                    <p className="text-slate-500 text-sm font-medium mb-3">{member.role}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-2 text-slate-600 font-medium hover:text-slate-900 transition-colors group">
              View all
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-lg section-alt">
        <div className="container-main">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "150+", label: "Projects Delivered" },
              { value: "50+", label: "Team Members" },
              { value: "10+", label: "Years Experience" },
              { value: "98%", label: "Client Retention" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl shadow-elegant hover-shadow-luxe transition-all duration-500 p-8 hover:-translate-y-2 cursor-pointer">
                <div className="stat-number bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-lg">
        <div className="container-main">
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl shadow-luxe p-12 lg:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Ready to Work Together?
              </h2>
              <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                Let&apos;s discuss how we can help transform your property&apos;s digital presence.
              </p>
              <Link
                href="/contact"
                className="bg-white text-blue-600 font-semibold px-10 py-5 rounded-xl hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center gap-2"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

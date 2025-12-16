import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award, Users, Target, Heart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { teamMembers } from "@/data/content";

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
                Founded in Tokyo, DIJITAL TOWERS is Japan&apos;s premier digital agency specializing exclusively in luxury real estate. We combine cutting-edge technology with sophisticated design to create digital experiences that match the prestige of your properties.
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
                  alt="DIJITAL TOWERS Office"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-large p-6">
                <div className="text-3xl font-bold text-blue-600">10+</div>
                <div className="text-sm text-slate-500">Years of Excellence</div>
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
              <div key={value.title} className="card p-8 text-center">
                <div className="feature-icon mx-auto mb-6">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-xl text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-500">{value.description}</p>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="text-center group">
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 shadow-medium">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-semibold text-lg text-slate-900">{member.name}</h3>
                <p className="text-blue-600 text-sm font-medium mb-2">{member.role}</p>
                <p className="text-slate-500 text-sm">{member.bio}</p>
              </div>
            ))}
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
              <div key={stat.label}>
                <div className="stat-number">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
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
              Ready to Work Together?
            </h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10">
              Let&apos;s discuss how we can help transform your property&apos;s digital presence.
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

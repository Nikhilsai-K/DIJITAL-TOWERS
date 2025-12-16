import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { portfolioItems } from "@/data/content";

export default function PortfolioPage() {
  return (
    <main className="relative">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-30" />

        <div className="relative container-main">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-blue-600 font-semibold mb-4">Our Portfolio</p>
            <h1 className="heading-1 mb-6">
              Showcasing Japan&apos;s{" "}
              <span className="gradient-text">Most Prestigious Properties</span>
            </h1>
            <p className="body-text max-w-2xl mx-auto">
              Explore our collection of stunning digital experiences we&apos;ve created for luxury real estate across Japan.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-lg">
        <div className="container-main">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["All", "Mansion", "Penthouse", "Tower", "Villa"].map((filter) => (
              <button
                key={filter}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  filter === "All"
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <div key={item.id} className="card-elevated overflow-hidden group">
                <div className="image-container aspect-[4/3] relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-600 text-xs font-semibold rounded-full">
                      {item.price}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-blue-600 uppercase tracking-wide">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-semibold text-slate-900 mt-2 mb-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-sm text-slate-500 mb-3">
                    <MapPin className="w-4 h-4" />
                    {item.location}
                  </div>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="btn-secondary inline-flex items-center gap-2">
              Load More Projects
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-lg section-alt">
        <div className="container-main">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "150+", label: "Projects Completed" },
              { value: "¥50B+", label: "Property Value" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "15", label: "Design Awards" },
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
              Want to See Your Property Here?
            </h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10">
              Let&apos;s create a stunning digital presence for your luxury property.
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

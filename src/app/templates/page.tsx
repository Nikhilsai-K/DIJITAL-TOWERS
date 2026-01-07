"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Check, Star, Building2, Landmark, Home,
  Zap, Search, Eye, Smartphone, Monitor, X, Sparkles,
  Award, Users, Play, ChevronRight, MapPin, Building, ArrowLeft
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const templates = [
  {
    id: 1,
    name: "Tower Elite",
    category: "High-Rise Tower",
    description: "Sophisticated design for luxury residential towers",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop&q=80",
    icon: Building2,
    gradient: "from-blue-600 to-cyan-600",
    color: "blue",
  },
  {
    id: 2,
    name: "Villa Luxe",
    category: "Mansion & Villa",
    description: "Elegant template for luxury mansions",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop&q=80",
    icon: Landmark,
    gradient: "from-purple-600 to-pink-600",
    color: "purple",
  },
  {
    id: 3,
    name: "Apartment Pro",
    category: "Apartment Complex",
    description: "Modern design for apartment buildings",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop&q=80",
    icon: Home,
    gradient: "from-green-600 to-emerald-600",
    color: "green",
  },
  {
    id: 4,
    name: "Penthouse Premium",
    category: "Luxury Penthouse",
    description: "Ultra-premium template for exclusive listings",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop&q=80",
    icon: Building2,
    gradient: "from-amber-600 to-orange-600",
    color: "amber",
  },
];

// Template Preview Component - Shows a mock website with user's details
function TemplatePreview({
  template,
  propertyName,
  city,
  onClose
}: {
  template: typeof templates[0];
  propertyName: string;
  city: string;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 z-50 overflow-auto"
    >
      {/* Browser Chrome */}
      <div className="sticky top-0 bg-slate-800 border-b border-slate-700 px-4 py-3 flex items-center gap-4 z-10">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-slate-700 rounded-lg px-4 py-1.5 text-sm text-slate-300 flex items-center gap-2">
            <span className="text-green-400">🔒</span>
            {propertyName.toLowerCase().replace(/\s+/g, "-")}.digihome.com
          </div>
        </div>
        <button
          onClick={onClose}
          className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors"
        >
          <X className="w-4 h-4" />
          Close Preview
        </button>
      </div>

      {/* Mock Website Content */}
      <div className="bg-white min-h-screen">
        {/* Hero Section */}
        <div className="relative h-[70vh] overflow-hidden">
          <Image
            src={template.image}
            alt={propertyName}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* Navigation */}
          <nav className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between">
            <div className="text-white font-bold text-2xl">{propertyName}</div>
            <div className="flex items-center gap-6 text-white/90">
              <span className="hover:text-white cursor-pointer">Home</span>
              <span className="hover:text-white cursor-pointer">Units</span>
              <span className="hover:text-white cursor-pointer">Amenities</span>
              <span className="hover:text-white cursor-pointer">Location</span>
              <button className={`bg-gradient-to-r ${template.gradient} px-5 py-2 rounded-lg font-semibold`}>
                Contact Us
              </button>
            </div>
          </nav>

          {/* Hero Content */}
          <div className="absolute bottom-0 left-0 right-0 p-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p className={`text-sm font-semibold uppercase tracking-wider mb-4 bg-gradient-to-r ${template.gradient} bg-clip-text text-transparent`}>
                Premium Living in {city}
              </p>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                {propertyName}
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mb-8">
                Experience luxury living at its finest. Discover your dream home with world-class amenities and stunning views.
              </p>
              <div className="flex gap-4">
                <button className={`bg-gradient-to-r ${template.gradient} text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2`}>
                  Explore Units
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold border border-white/20">
                  Virtual Tour
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20 px-12 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Why Choose {propertyName}</h2>
            <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              Discover the perfect blend of luxury, comfort, and convenience
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Prime Location", desc: `Located in the heart of ${city}` },
                { title: "Modern Design", desc: "Contemporary architecture and interiors" },
                { title: "Premium Amenities", desc: "World-class facilities at your doorstep" },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-lg"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${template.gradient} flex items-center justify-center mb-4`}>
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Units Preview */}
        <div className="py-20 px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Available Units</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {["1 BHK", "2 BHK", "3 BHK"].map((unit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
                >
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={template.image}
                      alt={unit}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{unit} Apartment</h3>
                    <p className="text-slate-600 mb-4">Starting from ¥{(i + 1) * 50},000/month</p>
                    <button className={`w-full py-3 rounded-xl bg-gradient-to-r ${template.gradient} text-white font-semibold`}>
                      View Details
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className={`py-20 px-12 bg-gradient-to-r ${template.gradient}`}>
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Make {propertyName} Your Home?</h2>
            <p className="text-white/80 text-lg mb-8">Contact us today to schedule a viewing</p>
            <button className="bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold">
              Schedule a Visit
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-12 px-12">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div>
              <div className="text-2xl font-bold mb-2">{propertyName}</div>
              <p className="text-slate-400">{city}</p>
            </div>
            <p className="text-slate-400 text-sm">
              Powered by DigiHome
            </p>
          </div>
        </footer>
      </div>
    </motion.div>
  );
}

// Final Website View after selection
function FinalWebsite({
  template,
  propertyName,
  city,
  onExit
}: {
  template: typeof templates[0];
  propertyName: string;
  city: string;
  onExit: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-white z-50 overflow-auto"
    >
      {/* Success Banner */}
      <div className={`bg-gradient-to-r ${template.gradient} text-white py-3 px-6 flex items-center justify-between`}>
        <div className="flex items-center gap-3">
          <Sparkles className="w-5 h-5" />
          <span className="font-medium">Your website is ready! Template: {template.name}</span>
        </div>
        <button
          onClick={onExit}
          className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Exit Playground
        </button>
      </div>

      {/* Full Website */}
      <div className="min-h-screen">
        {/* Hero */}
        <div className="relative h-screen overflow-hidden">
          <Image
            src={template.image}
            alt={propertyName}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

          {/* Navigation */}
          <nav className="absolute top-0 left-0 right-0 p-8 flex items-center justify-between">
            <div className="text-white font-bold text-3xl">{propertyName}</div>
            <div className="flex items-center gap-8 text-white/90 text-lg">
              <span className="hover:text-white cursor-pointer">Home</span>
              <span className="hover:text-white cursor-pointer">Units</span>
              <span className="hover:text-white cursor-pointer">Amenities</span>
              <span className="hover:text-white cursor-pointer">Gallery</span>
              <span className="hover:text-white cursor-pointer">Location</span>
              <button className={`bg-gradient-to-r ${template.gradient} px-6 py-3 rounded-xl font-semibold`}>
                Contact Us
              </button>
            </div>
          </nav>

          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-12">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="max-w-3xl"
              >
                <div className="flex items-center gap-2 mb-6">
                  <MapPin className="w-5 h-5 text-white/80" />
                  <span className="text-white/80">{city}</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
                  {propertyName}
                </h1>
                <p className="text-2xl text-white/80 mb-10 leading-relaxed">
                  Experience the pinnacle of luxury living. Where modern design meets timeless elegance.
                </p>
                <div className="flex gap-4">
                  <button className={`bg-gradient-to-r ${template.gradient} text-white px-10 py-5 rounded-2xl font-semibold text-lg flex items-center gap-3 shadow-2xl`}>
                    Explore Units
                    <ArrowRight className="w-6 h-6" />
                  </button>
                  <button className="bg-white/10 backdrop-blur-md text-white px-10 py-5 rounded-2xl font-semibold text-lg border border-white/30">
                    Virtual Tour
                  </button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-8 h-12 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
            >
              <div className="w-1.5 h-3 bg-white rounded-full" />
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-12">
            <div className="grid grid-cols-4 gap-8">
              {[
                { value: "500+", label: "Units Available" },
                { value: "50+", label: "Amenities" },
                { value: "24/7", label: "Security" },
                { value: "5★", label: "Rating" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className={`text-5xl font-bold bg-gradient-to-r ${template.gradient} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-12">
            <h2 className="text-5xl font-bold text-center mb-4">Premium Living Experience</h2>
            <p className="text-xl text-slate-600 text-center mb-16 max-w-2xl mx-auto">
              Every detail has been carefully crafted to provide you with the ultimate living experience
            </p>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                { title: "Prime Location", desc: `Situated in the heart of ${city} with easy access to everything` },
                { title: "Modern Architecture", desc: "Award-winning design with floor-to-ceiling windows" },
                { title: "Smart Home Ready", desc: "Fully integrated smart home technology in every unit" },
                { title: "Premium Finishes", desc: "High-end materials and craftsmanship throughout" },
                { title: "Wellness Amenities", desc: "Spa, gym, pool, and yoga studio on-site" },
                { title: "Concierge Service", desc: "24/7 concierge to cater to your every need" },
              ].map((feature, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${template.gradient} flex items-center justify-center mb-5`}>
                    <Check className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={`py-24 bg-gradient-to-r ${template.gradient}`}>
          <div className="max-w-4xl mx-auto text-center px-12">
            <h2 className="text-5xl font-bold text-white mb-6">Your Dream Home Awaits</h2>
            <p className="text-xl text-white/80 mb-10">
              Schedule a private viewing today and discover your perfect space at {propertyName}
            </p>
            <button className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-semibold text-lg shadow-2xl">
              Book a Viewing
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-16 px-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-start mb-12">
              <div>
                <div className="text-3xl font-bold mb-4">{propertyName}</div>
                <p className="text-slate-400 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {city}
                </p>
              </div>
              <div className="grid grid-cols-3 gap-16">
                <div>
                  <h4 className="font-semibold mb-4">Quick Links</h4>
                  <div className="space-y-2 text-slate-400">
                    <p className="hover:text-white cursor-pointer">Home</p>
                    <p className="hover:text-white cursor-pointer">Units</p>
                    <p className="hover:text-white cursor-pointer">Amenities</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Contact</h4>
                  <div className="space-y-2 text-slate-400">
                    <p>+81 123-456-7890</p>
                    <p>info@{propertyName.toLowerCase().replace(/\s+/g, "")}.com</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Follow Us</h4>
                  <div className="flex gap-4">
                    {["Facebook", "Instagram", "Twitter"].map((social) => (
                      <div key={social} className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-slate-700">
                        <span className="text-xs">{social[0]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-slate-800 pt-8 flex justify-between items-center text-slate-400 text-sm">
              <p>© 2024 {propertyName}. All rights reserved.</p>
              <p>Powered by DigiHome</p>
            </div>
          </div>
        </footer>
      </div>
    </motion.div>
  );
}

export default function TemplatesPage() {
  const [playgroundStep, setPlaygroundStep] = useState<"input" | "select" | "preview" | "final">("input");
  const [propertyName, setPropertyName] = useState("");
  const [city, setCity] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);
  const [previewTemplate, setPreviewTemplate] = useState<number | null>(null);

  const currentTemplate = templates.find((t) => t.id === selectedTemplate);
  const previewingTemplate = templates.find((t) => t.id === previewTemplate);

  const handleStartPlayground = () => {
    if (propertyName.trim() && city.trim()) {
      setPlaygroundStep("select");
    }
  };

  const handlePreview = (templateId: number) => {
    setPreviewTemplate(templateId);
  };

  const handleSelect = (templateId: number) => {
    setSelectedTemplate(templateId);
  };

  const handleFinish = () => {
    if (selectedTemplate) {
      setPlaygroundStep("final");
    }
  };

  const handleExit = () => {
    setPlaygroundStep("input");
    setPropertyName("");
    setCity("");
    setSelectedTemplate(null);
    setPreviewTemplate(null);
  };

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
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6"
            >
              <Play className="w-4 h-4" />
              Interactive Playground
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            >
              <span className="text-slate-900">Build Your Website</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                In Minutes
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-slate-600 max-w-2xl mx-auto"
            >
              Enter your property details, preview templates with your content, and see your website come to life
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Playground Section */}
      <section className="py-20 bg-white">
        <div className="container-main">
          {/* Step 1: Input Details */}
          {playgroundStep === "input" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl mx-auto"
            >
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs">1</span>
                  Step 1 of 2
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-3">Enter Your Property Details</h2>
                <p className="text-slate-600">Tell us about your property to see personalized previews</p>
              </div>

              <div className="bg-slate-50 rounded-3xl p-8 shadow-xl">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Property Name
                    </label>
                    <div className="relative">
                      <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="text"
                        value={propertyName}
                        onChange={(e) => setPropertyName(e.target.value)}
                        placeholder="e.g., Sky Tower Residence"
                        className="w-full pl-12 pr-4 py-4 bg-white border-2 border-slate-200 rounded-xl text-lg focus:border-blue-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      City / Location
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="e.g., Tokyo, Shibuya"
                        className="w-full pl-12 pr-4 py-4 bg-white border-2 border-slate-200 rounded-xl text-lg focus:border-blue-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleStartPlayground}
                    disabled={!propertyName.trim() || !city.trim()}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl transition-all"
                  >
                    Continue to Templates
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 2: Select Template */}
          {playgroundStep === "select" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <span className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs">2</span>
                  Step 2 of 2
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-3">Choose Your Template</h2>
                <p className="text-slate-600">
                  Preview each template with your property: <span className="font-semibold text-slate-900">{propertyName}</span> in <span className="font-semibold text-slate-900">{city}</span>
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-10">
                {templates.map((template) => {
                  const IconComponent = template.icon;
                  const isSelected = selectedTemplate === template.id;

                  return (
                    <motion.div
                      key={template.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`relative bg-white rounded-2xl overflow-hidden shadow-lg transition-all cursor-pointer ${
                        isSelected ? "ring-4 ring-blue-500 shadow-xl" : "hover:shadow-xl"
                      }`}
                      onClick={() => handleSelect(template.id)}
                    >
                      {isSelected && (
                        <div className="absolute top-4 right-4 z-10">
                          <div className="bg-blue-600 text-white p-2 rounded-full">
                            <Check className="w-5 h-5" />
                          </div>
                        </div>
                      )}

                      <div className="aspect-[16/9] relative">
                        <Image
                          src={template.image}
                          alt={template.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center gap-2 mb-2">
                            <div className={`p-2 rounded-lg bg-gradient-to-r ${template.gradient}`}>
                              <IconComponent className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-white font-bold text-lg">{template.name}</span>
                          </div>
                          <p className="text-white/80 text-sm">{template.description}</p>
                        </div>
                      </div>

                      <div className="p-4 flex gap-3">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePreview(template.id);
                          }}
                          className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors"
                        >
                          <Eye className="w-4 h-4" />
                          Preview
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSelect(template.id);
                          }}
                          className={`flex-1 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors ${
                            isSelected
                              ? `bg-gradient-to-r ${template.gradient} text-white`
                              : "bg-slate-900 text-white hover:bg-slate-800"
                          }`}
                        >
                          {isSelected ? (
                            <>
                              <Check className="w-4 h-4" />
                              Selected
                            </>
                          ) : (
                            "Select"
                          )}
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Actions */}
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => setPlaygroundStep("input")}
                  className="px-6 py-3 text-slate-600 hover:text-slate-900 font-semibold flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
                <button
                  onClick={handleFinish}
                  disabled={!selectedTemplate}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl transition-all"
                >
                  <Sparkles className="w-5 h-5" />
                  Finish & View Website
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Template Preview Modal */}
      <AnimatePresence>
        {previewTemplate && previewingTemplate && (
          <TemplatePreview
            template={previewingTemplate}
            propertyName={propertyName}
            city={city}
            onClose={() => setPreviewTemplate(null)}
          />
        )}
      </AnimatePresence>

      {/* Final Website View */}
      <AnimatePresence>
        {playgroundStep === "final" && currentTemplate && (
          <FinalWebsite
            template={currentTemplate}
            propertyName={propertyName}
            city={city}
            onExit={handleExit}
          />
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}

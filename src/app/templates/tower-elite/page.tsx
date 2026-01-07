"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, MapPin, Phone, Mail, Building2, Sparkles, Shield, Car, Dumbbell, Waves, TreePine, Check } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function TowerElitePage() {
  const [activeFloor, setActiveFloor] = useState("penthouse");

  // Listen for theme customization messages from parent
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === 'APPLY_THEME') {
        const { primaryColor, secondaryColor, fontFamily } = event.data.theme;
        document.documentElement.style.setProperty('--primary-color', primaryColor);
        document.documentElement.style.setProperty('--secondary-color', secondaryColor);
        document.documentElement.style.setProperty('--font-family', fontFamily);

        const style = document.createElement('style');
        style.id = 'theme-customizer-styles';
        const existingStyle = document.getElementById('theme-customizer-styles');
        if (existingStyle) existingStyle.remove();

        style.textContent = `
          * { font-family: ${fontFamily} !important; }
          .bg-blue-600, .bg-blue-700, .text-blue-600, .border-blue-600 {
            background: linear-gradient(135deg, ${primaryColor}, ${secondaryColor}) !important;
            border-color: ${primaryColor} !important;
            color: white !important;
          }
          .hover\\:bg-blue-700:hover {
            background: linear-gradient(135deg, ${secondaryColor}, ${primaryColor}) !important;
          }
        `;
        document.head.appendChild(style);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const floorPlans = {
    penthouse: [
      { name: "Penthouse A", size: "450 sqm", bedrooms: 4, bathrooms: 4, price: "¥280,000,000", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80" },
      { name: "Penthouse B", size: "380 sqm", bedrooms: 3, bathrooms: 3, price: "¥220,000,000", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80" },
    ],
    premium: [
      { name: "Premium Suite 40F", size: "180 sqm", bedrooms: 3, bathrooms: 2, price: "¥95,000,000", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" },
      { name: "Premium Suite 38F", size: "160 sqm", bedrooms: 2, bathrooms: 2, price: "¥78,000,000", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80" },
      { name: "Premium Suite 35F", size: "150 sqm", bedrooms: 2, bathrooms: 2, price: "¥68,000,000", image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80" },
    ],
    standard: [
      { name: "Standard A (20-30F)", size: "95 sqm", bedrooms: 2, bathrooms: 1, price: "¥45,000,000", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80" },
      { name: "Standard B (10-19F)", size: "75 sqm", bedrooms: 1, bathrooms: 1, price: "¥32,000,000", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80" },
    ],
  };

  const amenities = [
    { icon: Dumbbell, name: "Fitness Center", description: "24/7 state-of-the-art gym" },
    { icon: Waves, name: "Infinity Pool", description: "Rooftop pool with city views" },
    { icon: Car, name: "Valet Parking", description: "Premium underground parking" },
    { icon: Shield, name: "24/7 Security", description: "Advanced security systems" },
    { icon: TreePine, name: "Sky Garden", description: "Lush rooftop gardens" },
    { icon: Sparkles, name: "Concierge", description: "Premium concierge service" },
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-lg z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
            <Link href="/templates">
              <motion.div
                whileHover={{ x: -5 }}
                className="flex items-center gap-1 sm:gap-2 text-gray-300 hover:text-white cursor-pointer text-xs sm:text-sm"
              >
                <ArrowLeft size={16} className="sm:w-5 sm:h-5" />
                <span className="font-medium hidden sm:inline">Back to Templates</span>
                <span className="font-medium sm:hidden">Back</span>
              </motion.div>
            </Link>
            <div className="flex items-center gap-2">
              <Building2 className="text-blue-500 w-5 h-5 sm:w-6 sm:h-6" />
              <h1 className="text-sm sm:text-lg md:text-2xl font-bold text-white">Sky Tower Residence</h1>
            </div>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-2 py-1 sm:px-4 sm:py-2 md:px-6 md:py-2 rounded text-xs sm:text-sm md:text-base font-semibold hover:bg-blue-700 transition-all"
              >
                Schedule Tour
              </motion.button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[80vh] md:h-screen flex items-center justify-center overflow-hidden pt-14 sm:pt-16 md:pt-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900"></div>

        <div className="relative z-10 text-center px-2 sm:px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 px-4 py-2 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium">Premium Living in Tokyo</span>
            </motion.div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight">
              Sky Tower <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Residence</span>
            </h1>
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              52 floors of unparalleled luxury. Experience living above the clouds in the heart of Tokyo.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center px-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-4 py-2 sm:px-8 sm:py-3 md:px-10 md:py-4 rounded-lg text-sm sm:text-base md:text-lg font-semibold hover:bg-blue-700 transition-all shadow-xl inline-flex items-center justify-center gap-2"
              >
                View Floor Plans
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-4 py-2 sm:px-8 sm:py-3 md:px-10 md:py-4 rounded-lg text-sm sm:text-base md:text-lg font-semibold hover:bg-white hover:text-slate-900 transition-all"
              >
                Virtual Tour
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-lg border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:py-6">
            <div className="grid grid-cols-4 gap-4 text-center">
              {[
                { value: "52", label: "Floors" },
                { value: "248", label: "Units" },
                { value: "6", label: "Amenities" },
                { value: "2025", label: "Completion" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                Redefining <span className="text-blue-400">Urban Living</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6">
                Sky Tower Residence represents the pinnacle of luxury high-rise living in Tokyo.
                With breathtaking panoramic views, world-class amenities, and meticulous attention
                to detail, every residence is designed for those who expect nothing but the best.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Prime Minato Location",
                  "Floor-to-Ceiling Windows",
                  "Smart Home Technology",
                  "Private Elevator Access",
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                    <span className="text-xs sm:text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                alt="Luxury Interior"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Floor Plans Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Floor Plans
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
              Choose from our selection of premium residences designed for luxury living
            </p>
          </motion.div>

          {/* Floor Category Tabs */}
          <div className="flex justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 flex-wrap">
            {["penthouse", "premium", "standard"].map((category) => (
              <button
                key={category}
                onClick={() => setActiveFloor(category)}
                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-all ${
                  activeFloor === category
                    ? "bg-blue-600 text-white"
                    : "bg-slate-800 text-gray-300 hover:bg-slate-700"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Floor Plan Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {floorPlans[activeFloor as keyof typeof floorPlans].map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-slate-800 rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all group"
              >
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={plan.image}
                    alt={plan.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {plan.price}
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{plan.name}</h3>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-slate-700 rounded-lg p-2">
                      <div className="text-blue-400 text-sm font-semibold">{plan.size}</div>
                      <div className="text-xs text-gray-400">Size</div>
                    </div>
                    <div className="bg-slate-700 rounded-lg p-2">
                      <div className="text-blue-400 text-sm font-semibold">{plan.bedrooms}</div>
                      <div className="text-xs text-gray-400">Beds</div>
                    </div>
                    <div className="bg-slate-700 rounded-lg p-2">
                      <div className="text-blue-400 text-sm font-semibold">{plan.bathrooms}</div>
                      <div className="text-xs text-gray-400">Baths</div>
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-blue-600/20 border border-blue-500/50 text-blue-400 px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              World-Class <span className="text-blue-400">Amenities</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {amenities.map((amenity, index) => (
              <motion.div
                key={amenity.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-900 p-6 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all"
              >
                <amenity.icon className="text-blue-500 mb-4 w-8 h-8" />
                <h3 className="text-lg font-semibold text-white mb-2">{amenity.name}</h3>
                <p className="text-sm text-gray-400">{amenity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                Prime <span className="text-blue-400">Location</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-300 mb-6">
                Situated in the prestigious Minato district, Sky Tower Residence offers
                unparalleled access to Tokyo&apos;s finest dining, shopping, and entertainment.
              </p>
              <div className="space-y-4">
                {[
                  { icon: MapPin, text: "1-2-3 Minato-ku, Tokyo 106-0045" },
                  { icon: Phone, text: "+81 3-1234-5678" },
                  { icon: Mail, text: "info@skytower-residence.jp" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 text-gray-300">
                    <item.icon className="text-blue-500 w-5 h-5" />
                    <span className="text-sm sm:text-base">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-64 sm:h-80 rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80"
                alt="Tokyo Skyline"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Begin Your Elevated Living Experience
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Schedule a private viewing and discover why Sky Tower Residence
              is Tokyo&apos;s most prestigious address.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-sm sm:text-base font-semibold hover:bg-blue-50 transition-all inline-flex items-center gap-2"
              >
                Schedule Private Viewing
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-8 sm:py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Building2 className="text-blue-500 w-6 h-6" />
            <h3 className="text-xl font-bold text-white">Sky Tower Residence</h3>
          </div>
          <p className="text-sm text-gray-400 mb-4">Premium Living Above the Clouds</p>
          <p className="text-gray-500 text-xs">
            © 2024 Sky Tower Residence. All rights reserved. | Template Preview
          </p>
        </div>
      </footer>
    </div>
  );
}

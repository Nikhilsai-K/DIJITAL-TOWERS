"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Landmark, Home, Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const propertyTypes = [
  {
    id: "tower",
    name: "Tower",
    icon: Building2,
    basePrice: 500000,
    description: "High-rise residential tower",
  },
  {
    id: "apartment",
    name: "Apartment",
    icon: Home,
    basePrice: 300000,
    description: "Apartment complex",
  },
  {
    id: "mansion",
    name: "Mansion",
    icon: Landmark,
    basePrice: 400000,
    description: "Luxury mansion or villa",
  },
];

const features = [
  { id: "virtualTour", name: "360° Virtual Tour", price: 100000 },
  { id: "floorPlans", name: "Interactive Floor Plans", price: 80000 },
  { id: "unitGallery", name: "Unit Gallery System", price: 60000 },
  { id: "booking", name: "Online Booking System", price: 120000 },
  { id: "multilingual", name: "Multi-language Support", price: 50000 },
  { id: "analytics", name: "Analytics Dashboard", price: 40000 },
];

const pageOptions = [
  { id: "5", name: "Up to 5 pages", multiplier: 1 },
  { id: "10", name: "Up to 10 pages", multiplier: 1.3 },
  { id: "20", name: "Up to 20 pages", multiplier: 1.6 },
  { id: "unlimited", name: "Unlimited pages", multiplier: 2 },
];

export default function PriceCalculator() {
  const [propertyType, setPropertyType] = useState("tower");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [pageCount, setPageCount] = useState("5");

  const toggleFeature = (featureId: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(featureId)
        ? prev.filter((id) => id !== featureId)
        : [...prev, featureId]
    );
  };

  const calculatePrice = () => {
    const property = propertyTypes.find((p) => p.id === propertyType);
    const pages = pageOptions.find((p) => p.id === pageCount);
    const basePrice = property?.basePrice || 0;
    const multiplier = pages?.multiplier || 1;
    const featuresPrice = selectedFeatures.reduce((total, featureId) => {
      const feature = features.find((f) => f.id === featureId);
      return total + (feature?.price || 0);
    }, 0);
    return Math.round((basePrice + featuresPrice) * multiplier);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2 block">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Get an Instant <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Quote</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Customize your website package and get an estimated price instantly
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden"
          >
            <div className="p-8 lg:p-10">
              {/* Property Type */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">
                  1. Select Property Type
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {propertyTypes.map((type) => (
                    <motion.button
                      key={type.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setPropertyType(type.id)}
                      className={`p-4 rounded-xl border-2 text-center transition-all ${
                        propertyType === type.id
                          ? "border-blue-500 bg-blue-50"
                          : "border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <type.icon
                        className={`w-8 h-8 mx-auto mb-2 ${
                          propertyType === type.id
                            ? "text-blue-600"
                            : "text-slate-400"
                        }`}
                      />
                      <div
                        className={`font-semibold ${
                          propertyType === type.id
                            ? "text-blue-600"
                            : "text-slate-700"
                        }`}
                      >
                        {type.name}
                      </div>
                      <div className="text-xs text-slate-500 mt-1">
                        {type.description}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Page Count */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">
                  2. Number of Pages
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {pageOptions.map((option) => (
                    <motion.button
                      key={option.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setPageCount(option.id)}
                      className={`p-3 rounded-xl border-2 text-center transition-all ${
                        pageCount === option.id
                          ? "border-blue-500 bg-blue-50"
                          : "border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <div
                        className={`font-semibold text-sm ${
                          pageCount === option.id
                            ? "text-blue-600"
                            : "text-slate-700"
                        }`}
                      >
                        {option.name}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">
                  3. Add Features (Optional)
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {features.map((feature) => (
                    <motion.button
                      key={feature.id}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => toggleFeature(feature.id)}
                      className={`p-4 rounded-xl border-2 text-left transition-all ${
                        selectedFeatures.includes(feature.id)
                          ? "border-blue-500 bg-blue-50"
                          : "border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <div
                            className={`font-medium text-sm ${
                              selectedFeatures.includes(feature.id)
                                ? "text-blue-600"
                                : "text-slate-700"
                            }`}
                          >
                            {feature.name}
                          </div>
                          <div className="text-xs text-slate-500 mt-1">
                            +{formatPrice(feature.price)}
                          </div>
                        </div>
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center ${
                            selectedFeatures.includes(feature.id)
                              ? "bg-blue-500"
                              : "border-2 border-slate-300"
                          }`}
                        >
                          {selectedFeatures.includes(feature.id) && (
                            <Check size={12} className="text-white" />
                          )}
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Price Display */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 lg:p-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="text-white">
                  <div className="text-sm font-medium text-blue-100 mb-1">
                    Estimated Price
                  </div>
                  <div className="text-4xl md:text-5xl font-bold">
                    {formatPrice(calculatePrice())}
                  </div>
                  <div className="text-sm text-blue-100 mt-2">
                    * Final price may vary based on requirements
                  </div>
                </div>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 whitespace-nowrap"
                  >
                    Get Started
                    <ArrowRight size={20} />
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, X, Check, Type, Sparkles } from "lucide-react";

export interface ThemeSettings {
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
  borderRadius: string;
  style: string;
}

interface ThemeCustomizerProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (theme: ThemeSettings) => void;
  currentTheme: ThemeSettings;
}

const colorPresets = [
  { name: "Blue", primary: "#3b82f6", secondary: "#1d4ed8" },
  { name: "Purple", primary: "#8b5cf6", secondary: "#6d28d9" },
  { name: "Green", primary: "#10b981", secondary: "#059669" },
  { name: "Orange", primary: "#f59e0b", secondary: "#d97706" },
  { name: "Red", primary: "#ef4444", secondary: "#dc2626" },
  { name: "Pink", primary: "#ec4899", secondary: "#db2777" },
  { name: "Teal", primary: "#14b8a6", secondary: "#0d9488" },
  { name: "Indigo", primary: "#6366f1", secondary: "#4f46e5" },
];

const fontPresets = [
  { name: "Modern", value: "'Inter', sans-serif" },
  { name: "Elegant", value: "'Playfair Display', serif" },
  { name: "Clean", value: "'Roboto', sans-serif" },
  { name: "Bold", value: "'Montserrat', sans-serif" },
];

const stylePresets = [
  { name: "Minimal", value: "minimal", description: "Clean and simple" },
  { name: "Luxury", value: "luxury", description: "Elegant and premium" },
  { name: "Modern", value: "modern", description: "Bold and contemporary" },
  { name: "Classic", value: "classic", description: "Timeless and refined" },
];

const radiusPresets = [
  { name: "Sharp", value: "0px" },
  { name: "Subtle", value: "8px" },
  { name: "Rounded", value: "16px" },
  { name: "Pill", value: "9999px" },
];

export default function ThemeCustomizer({
  isOpen,
  onClose,
  onApply,
  currentTheme,
}: ThemeCustomizerProps) {
  const [theme, setTheme] = useState<ThemeSettings>(currentTheme);
  const [activeTab, setActiveTab] = useState<"colors" | "typography" | "style">("colors");

  const handleApply = () => {
    onApply(theme);
  };

  const handleReset = () => {
    setTheme({
      primaryColor: "#3b82f6",
      secondaryColor: "#1d4ed8",
      fontFamily: "'Inter', sans-serif",
      borderRadius: "16px",
      style: "modern",
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          transition={{ type: "spring", damping: 25 }}
          className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl text-white">
                <Palette size={20} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Customize Theme</h3>
                <p className="text-sm text-slate-500">Make it yours</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <X size={20} className="text-slate-500" />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 p-4 border-b border-slate-100">
            {[
              { id: "colors", label: "Colors", icon: Palette },
              { id: "typography", label: "Typography", icon: Type },
              { id: "style", label: "Style", icon: Sparkles },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg font-medium text-sm transition-all ${
                  activeTab === tab.id
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <tab.icon size={16} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {activeTab === "colors" && (
              <div className="space-y-6">
                {/* Primary Color */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    Color Preset
                  </label>
                  <div className="grid grid-cols-4 gap-3">
                    {colorPresets.map((preset) => (
                      <motion.button
                        key={preset.name}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>
                          setTheme({
                            ...theme,
                            primaryColor: preset.primary,
                            secondaryColor: preset.secondary,
                          })
                        }
                        className={`relative flex flex-col items-center gap-2 p-3 rounded-xl border-2 transition-all ${
                          theme.primaryColor === preset.primary
                            ? "border-slate-900 bg-slate-50"
                            : "border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        <div
                          className="w-10 h-10 rounded-lg shadow-md"
                          style={{
                            background: `linear-gradient(135deg, ${preset.primary}, ${preset.secondary})`,
                          }}
                        />
                        <span className="text-xs font-medium text-slate-600">
                          {preset.name}
                        </span>
                        {theme.primaryColor === preset.primary && (
                          <div className="absolute top-1 right-1 w-4 h-4 bg-slate-900 rounded-full flex items-center justify-center">
                            <Check size={10} className="text-white" />
                          </div>
                        )}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Custom Color Picker */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    Custom Primary Color
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={theme.primaryColor}
                      onChange={(e) =>
                        setTheme({ ...theme, primaryColor: e.target.value })
                      }
                      className="w-12 h-12 rounded-lg cursor-pointer border-0"
                    />
                    <input
                      type="text"
                      value={theme.primaryColor}
                      onChange={(e) =>
                        setTheme({ ...theme, primaryColor: e.target.value })
                      }
                      className="flex-1 px-4 py-2 border border-slate-200 rounded-lg text-sm font-mono"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "typography" && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    Font Style
                  </label>
                  <div className="space-y-2">
                    {fontPresets.map((font) => (
                      <motion.button
                        key={font.name}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        onClick={() =>
                          setTheme({ ...theme, fontFamily: font.value })
                        }
                        className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                          theme.fontFamily === font.value
                            ? "border-slate-900 bg-slate-50"
                            : "border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        <span
                          className="text-lg"
                          style={{ fontFamily: font.value }}
                        >
                          {font.name}
                        </span>
                        {theme.fontFamily === font.value && (
                          <div className="w-5 h-5 bg-slate-900 rounded-full flex items-center justify-center">
                            <Check size={12} className="text-white" />
                          </div>
                        )}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "style" && (
              <div className="space-y-6">
                {/* Style Presets */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    Design Style
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {stylePresets.map((preset) => (
                      <motion.button
                        key={preset.value}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() =>
                          setTheme({ ...theme, style: preset.value })
                        }
                        className={`relative p-4 rounded-xl border-2 text-left transition-all ${
                          theme.style === preset.value
                            ? "border-slate-900 bg-slate-50"
                            : "border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        <div className="font-semibold text-slate-900 mb-1">
                          {preset.name}
                        </div>
                        <div className="text-xs text-slate-500">
                          {preset.description}
                        </div>
                        {theme.style === preset.value && (
                          <div className="absolute top-2 right-2 w-4 h-4 bg-slate-900 rounded-full flex items-center justify-center">
                            <Check size={10} className="text-white" />
                          </div>
                        )}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Border Radius */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    Corner Style
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {radiusPresets.map((preset) => (
                      <motion.button
                        key={preset.name}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>
                          setTheme({ ...theme, borderRadius: preset.value })
                        }
                        className={`p-3 border-2 transition-all ${
                          theme.borderRadius === preset.value
                            ? "border-slate-900 bg-slate-50"
                            : "border-slate-200 hover:border-slate-300"
                        }`}
                        style={{ borderRadius: preset.value }}
                      >
                        <span className="text-xs font-medium text-slate-600">
                          {preset.name}
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Preview */}
          <div className="p-4 border-t border-slate-100">
            <div
              className="p-4 rounded-xl"
              style={{
                background: `linear-gradient(135deg, ${theme.primaryColor}20, ${theme.secondaryColor}10)`,
                borderRadius: theme.borderRadius,
              }}
            >
              <div className="text-center">
                <div
                  className="text-lg font-bold mb-2"
                  style={{ color: theme.primaryColor, fontFamily: theme.fontFamily }}
                >
                  Live Preview
                </div>
                <button
                  className="px-6 py-2 text-white text-sm font-semibold transition-all"
                  style={{
                    background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.secondaryColor})`,
                    borderRadius: theme.borderRadius === "9999px" ? "9999px" : "8px",
                  }}
                >
                  Sample Button
                </button>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 p-6 border-t border-slate-200">
            <button
              onClick={handleReset}
              className="flex-1 py-3 border-2 border-slate-200 rounded-xl font-semibold text-slate-600 hover:bg-slate-50 transition-all"
            >
              Reset
            </button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleApply}
              className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg"
            >
              Apply Theme
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface WebsiteComparisonSliderProps {
  type: "tower" | "mansion";
}

export default function WebsiteComparisonSlider({ type }: WebsiteComparisonSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleGlobalMouseUp);
    return () => window.removeEventListener("mouseup", handleGlobalMouseUp);
  }, []);

  // Old broken 2000s website mockup
  const OldWebsite = () => {
    if (type === "tower") {
      return (
        <div className="w-full h-full bg-gradient-to-b from-[#000080] via-[#0000cd] to-[#4169e1] text-white overflow-hidden" style={{ fontFamily: "'Comic Sans MS', cursive, sans-serif" }}>
          {/* Awful 2000s Nav */}
          <div className="bg-gradient-to-r from-[#ff6600] to-[#ffcc00] px-2 py-1 flex items-center justify-between border-b-4 border-[#800000]">
            <div className="flex items-center gap-1">
              <span className="text-[10px] font-bold text-[#800000] animate-pulse">★</span>
              <span className="text-[10px] font-bold text-[#000080] drop-shadow-sm" style={{ textShadow: "1px 1px 0 #fff" }}>SKY TOWER INC.</span>
              <span className="text-[10px] font-bold text-[#800000] animate-pulse">★</span>
            </div>
            <div className="flex gap-1">
              <span className="text-[7px] text-[#000080] underline cursor-pointer">Home</span>
              <span className="text-[7px] text-[#000080]">|</span>
              <span className="text-[7px] text-[#000080] underline cursor-pointer">Guestbook</span>
              <span className="text-[7px] text-[#000080]">|</span>
              <span className="text-[7px] text-[#000080] underline cursor-pointer">Links</span>
            </div>
          </div>

          {/* Marquee */}
          <div className="bg-[#ffff00] text-[#ff0000] text-[8px] py-0.5 overflow-hidden font-bold">
            <div className="animate-marquee whitespace-nowrap">
              ★★★ WELCOME TO SKY TOWER!!! ★★★ BEST VIEWED IN INTERNET EXPLORER 6.0 ★★★ LAST UPDATED: 12/25/2003 ★★★ YOU ARE VISITOR #000347 ★★★
            </div>
          </div>

          {/* Main Content */}
          <div className="p-2">
            {/* Hero with table layout */}
            <table className="w-full" style={{ borderCollapse: "collapse" }}>
              <tbody>
                <tr>
                  <td className="p-2 text-center" style={{ background: "linear-gradient(to bottom, #333, #666)" }}>
                    {/* Under construction GIF placeholder */}
                    <div className="flex justify-center mb-1">
                      <div className="bg-yellow-400 text-black text-[8px] px-2 py-0.5 animate-pulse font-bold border-2 border-black">
                        🚧 UNDER CONSTRUCTION 🚧
                      </div>
                    </div>
                    <h1 className="text-sm font-bold" style={{ color: "#00ffff", textShadow: "2px 2px 0 #000" }}>
                      WELCOME TO SKY TOWER!!!
                    </h1>
                    <div className="text-[8px] text-[#ff00ff] animate-pulse my-1">
                      ✨ Tokyo&apos;s #1 Apartment Building ✨
                    </div>
                    {/* Broken image placeholder */}
                    <div className="mx-auto my-2 w-20 h-12 bg-gray-200 border-2 border-red-500 flex items-center justify-center">
                      <span className="text-[6px] text-red-600">❌ IMAGE NOT FOUND</span>
                    </div>
                    <p className="text-[7px] text-[#90ee90]">
                      Click here to see our AMAZING apartments!!!
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Hit counter and badges */}
            <div className="flex justify-center items-center gap-2 mt-2 flex-wrap">
              <div className="bg-black text-[#00ff00] text-[8px] px-2 py-0.5 border border-[#00ff00] font-mono">
                Visitors: 00347
              </div>
              <div className="bg-[#ffcc00] text-[8px] text-black px-1 py-0.5 border-2 border-[#ff6600]">
                Best viewed 800x600
              </div>
            </div>

            {/* Awful buttons */}
            <div className="flex justify-center gap-2 mt-2">
              <button className="bg-gradient-to-b from-[#c0c0c0] to-[#808080] text-[8px] text-black px-3 py-1 border-2 border-t-white border-l-white border-b-[#404040] border-r-[#404040] font-bold">
                ENTER SITE
              </button>
              <button className="bg-gradient-to-b from-[#c0c0c0] to-[#808080] text-[8px] text-black px-3 py-1 border-2 border-t-white border-l-white border-b-[#404040] border-r-[#404040] font-bold">
                CONTACT US
              </button>
            </div>

            {/* Footer mess */}
            <div className="text-center mt-2 text-[6px] text-[#ffcc00]">
              <p>© 2003 Sky Tower Inc. All Rights Reserved.</p>
              <p className="text-[#00ffff]">Sign our Guestbook! | Add to Favorites | Make Homepage</p>
            </div>
          </div>
        </div>
      );
    } else {
      // Mansion old website
      return (
        <div className="w-full h-full bg-[#2f4f4f] overflow-hidden" style={{ fontFamily: "'Times New Roman', serif" }}>
          {/* Ugly nav */}
          <div className="bg-gradient-to-r from-[#8b4513] to-[#a0522d] px-2 py-1 border-b-4 border-double border-[#ffd700]">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-[#ffd700] italic font-bold" style={{ textShadow: "1px 1px 2px #000" }}>
                ☆ AZABU MANSION ☆
              </span>
              <div className="flex gap-1 text-[7px] text-[#ffdead]">
                <span className="underline">Home</span>
                <span>|</span>
                <span className="underline">Photos</span>
                <span>|</span>
                <span className="underline">Email</span>
              </div>
            </div>
          </div>

          {/* Blinking text */}
          <div className="bg-[#800000] text-[#ffd700] text-[8px] text-center py-0.5">
            <span className="animate-pulse">★ ★ ★ LUXURY LIVING IN TOKYO ★ ★ ★</span>
          </div>

          {/* Main with frames aesthetic */}
          <div className="p-2 bg-[#696969]">
            <table className="w-full border-4 border-[#8b4513]" style={{ background: "repeating-linear-gradient(45deg, #3a3a3a, #3a3a3a 5px, #4a4a4a 5px, #4a4a4a 10px)" }}>
              <tbody>
                <tr>
                  <td className="p-2 text-center">
                    <div className="bg-[#000] p-2 border-2 border-[#ffd700]">
                      <h1 className="text-sm text-[#ffd700] mb-1" style={{ fontFamily: "'Papyrus', fantasy" }}>
                        Welcome to Azabu Mansion
                      </h1>
                      {/* Broken image */}
                      <div className="mx-auto w-24 h-14 bg-gray-300 border-4 border-inset border-gray-400 flex items-center justify-center mb-1">
                        <div className="text-center">
                          <span className="text-[20px]">🖼️</span>
                          <p className="text-[5px] text-gray-600">Loading...</p>
                        </div>
                      </div>
                      <p className="text-[8px] text-[#00ff00] italic">
                        &quot;Experience True Luxury&quot;
                      </p>
                      <p className="text-[6px] text-[#ff69b4] mt-1">
                        Last updated: November 2002
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Webring */}
            <div className="mt-2 text-center">
              <div className="bg-[#2f2f2f] border border-[#ffd700] p-1 inline-block">
                <p className="text-[6px] text-[#c0c0c0]">This site is part of the</p>
                <p className="text-[7px] text-[#00ffff] font-bold">Tokyo Real Estate WebRing</p>
                <div className="flex justify-center gap-1 text-[6px] text-[#ffcc00]">
                  <span>[&lt; Prev]</span>
                  <span>[Random]</span>
                  <span>[Next &gt;]</span>
                </div>
              </div>
            </div>

            {/* Old buttons */}
            <div className="flex justify-center gap-2 mt-2">
              <button className="bg-[#8b4513] text-[#ffd700] text-[7px] px-2 py-1 border-2 border-[#ffd700]">
                📧 Email Us
              </button>
              <button className="bg-[#8b4513] text-[#ffd700] text-[7px] px-2 py-1 border-2 border-[#ffd700]">
                📞 Call Now
              </button>
            </div>

            <p className="text-center text-[5px] text-[#808080] mt-2">
              © 2002 Azabu Mansion. Best viewed in Netscape Navigator.
            </p>
          </div>
        </div>
      );
    }
  };

  // Modern sleek website mockup
  const NewWebsite = () => {
    if (type === "tower") {
      return (
        <div className="w-full h-full bg-slate-900 overflow-hidden">
          {/* Modern Nav */}
          <div className="bg-white/10 backdrop-blur-md px-4 py-2 flex items-center justify-between border-b border-white/10">
            <span className="text-xs font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              SKY TOWER
            </span>
            <div className="flex gap-3 items-center">
              <span className="text-[8px] text-white/60">Home</span>
              <span className="text-[8px] text-white/60">Units</span>
              <span className="text-[8px] text-white/60">Amenities</span>
              <span className="text-[8px] bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-0.5 rounded-full font-medium">
                Book Tour
              </span>
            </div>
          </div>

          {/* Hero */}
          <div className="relative h-32 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center px-4">
              <span className="text-[7px] text-blue-400 font-bold tracking-[0.2em] mb-1">LUXURY LIVING</span>
              <h1 className="text-lg font-bold text-white mb-1 leading-tight">
                Sky Tower
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Tokyo</span>
              </h1>
              <p className="text-[8px] text-white/70 mb-2">45 stories of unparalleled luxury above the clouds</p>
              <div className="flex gap-2">
                <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-[8px] px-3 py-1 rounded-lg font-semibold shadow-lg shadow-blue-500/25">
                  Schedule Tour →
                </button>
                <button className="bg-white/10 backdrop-blur text-white text-[8px] px-3 py-1 rounded-lg border border-white/20">
                  Virtual Tour
                </button>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-2 right-2 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl" />
          </div>

          {/* Features */}
          <div className="p-3 bg-gradient-to-b from-slate-900 to-slate-800">
            <div className="flex gap-2 mb-2">
              <div className="flex-1 bg-white/5 backdrop-blur rounded-lg p-2 border border-white/10">
                <div className="text-[10px] font-bold text-white">45</div>
                <div className="text-[6px] text-white/50">Floors</div>
              </div>
              <div className="flex-1 bg-white/5 backdrop-blur rounded-lg p-2 border border-white/10">
                <div className="text-[10px] font-bold text-blue-400">360°</div>
                <div className="text-[6px] text-white/50">Views</div>
              </div>
              <div className="flex-1 bg-white/5 backdrop-blur rounded-lg p-2 border border-white/10">
                <div className="text-[10px] font-bold text-purple-400">24/7</div>
                <div className="text-[6px] text-white/50">Concierge</div>
              </div>
            </div>
            <div className="flex gap-1">
              <span className="bg-blue-500/20 text-blue-300 text-[6px] px-2 py-0.5 rounded-full">3D Floor Plans</span>
              <span className="bg-purple-500/20 text-purple-300 text-[6px] px-2 py-0.5 rounded-full">Virtual Tours</span>
            </div>
          </div>
        </div>
      );
    } else {
      // Modern Mansion website
      return (
        <div className="w-full h-full bg-stone-900 overflow-hidden">
          {/* Modern Nav */}
          <div className="bg-white/5 backdrop-blur-md px-4 py-2 flex items-center justify-between border-b border-amber-500/20">
            <span className="text-xs font-light tracking-[0.3em] text-white">
              AZABU <span className="text-amber-400 font-normal">MANSION</span>
            </span>
            <div className="flex gap-3 items-center">
              <span className="text-[8px] text-white/50">Gallery</span>
              <span className="text-[8px] text-white/50">Features</span>
              <span className="text-[8px] bg-amber-500 text-white px-2 py-0.5 rounded-full font-medium">
                Inquire
              </span>
            </div>
          </div>

          {/* Hero */}
          <div className="relative h-32 bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900">
            {/* Luxury overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

            {/* Gold accent line */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-end px-4 pb-3">
              <span className="text-[6px] text-amber-400/80 tracking-[0.3em] mb-1">EXCLUSIVE PROPERTY</span>
              <h1 className="text-lg font-light text-white mb-0.5 tracking-wide">
                Azabu Mansion
              </h1>
              <p className="text-[8px] text-white/60 mb-2 italic">Timeless elegance in Tokyo&apos;s finest district</p>
              <div className="flex gap-2">
                <button className="bg-gradient-to-r from-amber-500 to-amber-600 text-white text-[8px] px-3 py-1 rounded-lg font-medium shadow-lg shadow-amber-500/25">
                  360° Tour
                </button>
                <button className="bg-white/5 backdrop-blur text-white text-[8px] px-3 py-1 rounded-lg border border-amber-500/30">
                  Gallery
                </button>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="p-3 bg-gradient-to-b from-stone-900 to-stone-950">
            <div className="flex gap-2 mb-2">
              <div className="flex-1 bg-amber-500/10 backdrop-blur rounded-lg p-2 border border-amber-500/20">
                <div className="text-[10px] font-light text-amber-400">800m²</div>
                <div className="text-[6px] text-white/40">Living Space</div>
              </div>
              <div className="flex-1 bg-amber-500/10 backdrop-blur rounded-lg p-2 border border-amber-500/20">
                <div className="text-[10px] font-light text-amber-400">Private</div>
                <div className="text-[6px] text-white/40">Garden</div>
              </div>
              <div className="flex-1 bg-amber-500/10 backdrop-blur rounded-lg p-2 border border-amber-500/20">
                <div className="text-[10px] font-light text-amber-400">VIP</div>
                <div className="text-[6px] text-white/40">Viewing</div>
              </div>
            </div>
            <div className="flex gap-1">
              <span className="bg-amber-500/10 text-amber-300 text-[6px] px-2 py-0.5 rounded-full border border-amber-500/20">HD Photos</span>
              <span className="bg-white/5 text-white/60 text-[6px] px-2 py-0.5 rounded-full border border-white/10">VIP Access</span>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-2xl border border-slate-200"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* New Website (Full width, behind) - AFTER */}
      <div className="absolute inset-0">
        <NewWebsite />
        {/* After Label */}
        <div className="absolute bottom-3 right-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-lg flex items-center gap-1.5">
          <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
          After
        </div>
      </div>

      {/* Old Website (Clipped) - BEFORE */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <OldWebsite />
        {/* Before Label */}
        <div className="absolute bottom-3 left-3 bg-slate-700 text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-lg">
          Before
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize z-10"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        {/* Handle Circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-slate-200">
          <div className="flex gap-0.5">
            <div className="w-0.5 h-4 bg-slate-400 rounded-full" />
            <div className="w-0.5 h-4 bg-slate-400 rounded-full" />
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute top-3 left-1/2 transform -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-xs font-medium pointer-events-none">
        ← Drag to compare →
      </div>
    </motion.div>
  );
}

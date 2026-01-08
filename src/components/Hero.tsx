"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, Star, Search, Globe, Bookmark, Share, MoreHorizontal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { stats } from "@/data/content";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

// iPhone App Icons
const appIcons = [
    { name: "Messages", color: "from-green-400 to-green-600", icon: "💬" },
    { name: "Calendar", color: "from-red-400 to-red-600", icon: "📅" },
    { name: "Photos", color: "from-orange-400 to-pink-500", icon: "🖼️" },
    { name: "Camera", color: "from-gray-600 to-gray-800", icon: "📷" },
    { name: "Safari", color: "from-blue-400 to-blue-600", icon: "🧭", isSafari: true },
    { name: "Mail", color: "from-blue-400 to-blue-600", icon: "✉️" },
    { name: "Music", color: "from-pink-500 to-red-500", icon: "🎵" },
    { name: "Settings", color: "from-gray-400 to-gray-600", icon: "⚙️" },
];

// Keyboard layout
const keyboardRows = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["⇧", "z", "x", "c", "v", "b", "n", "m", "⌫"],
    ["123", "🌐", "space", ".", "Go"],
];

export default function Hero() {
    const { lang } = useLanguage();
    const t = translations[lang].hero;
    const [animationStage, setAnimationStage] = useState(0);
    const [typedText, setTypedText] = useState("");
    const [activeKey, setActiveKey] = useState("");
    const [cycleKey, setCycleKey] = useState(0);
    const searchText = "digihome.com";

    // Stage progression effect - SUPER FAST
    useEffect(() => {
        const timeouts: NodeJS.Timeout[] = [];

        // Stage transitions - Quick action in 2 seconds!
        // Stage 0: Initial load
        // Stage 1: Home screen fully visible (stays for 2 seconds)
        // Stage 2: Safari tap animation
        // Stage 3: Safari opens
        // Stage 4: Keyboard appears
        // Stage 5: Typing starts
        // Stage 6: Loading
        // Stage 7: Website loads (stays for 8 seconds)
        timeouts.push(setTimeout(() => setAnimationStage(1), 500));    // Show home screen
        timeouts.push(setTimeout(() => setAnimationStage(2), 2000));   // Start Safari tap (after 2s!)
        timeouts.push(setTimeout(() => setAnimationStage(3), 2800));   // Safari opens
        timeouts.push(setTimeout(() => setAnimationStage(4), 3500));   // Keyboard appears
        timeouts.push(setTimeout(() => setAnimationStage(5), 4200));   // Start typing

        return () => timeouts.forEach(clearTimeout);
    }, [cycleKey]);

    // Typing effect - only runs at stage 5
    useEffect(() => {
        if (animationStage !== 5) return;

        let charIndex = 0;
        setTypedText("");

        const typeInterval = setInterval(() => {
            if (charIndex < searchText.length) {
                const currentChar = searchText[charIndex];
                setActiveKey(currentChar);
                setTypedText(searchText.slice(0, charIndex + 1));
                charIndex++;
                setTimeout(() => setActiveKey(""), 100);
            } else {
                clearInterval(typeInterval);
                setTimeout(() => {
                    setActiveKey("Go");
                    setTimeout(() => {
                        setActiveKey("");
                        setAnimationStage(6);
                        setTimeout(() => setAnimationStage(7), 800);
                    }, 300);
                }, 500);
            }
        }, 150);

        return () => clearInterval(typeInterval);
    }, [animationStage, searchText]);

    // Reset animation loop - Faster cycle
    useEffect(() => {
        if (animationStage !== 7) return;

        const resetTimeout = setTimeout(() => {
            setAnimationStage(0);
            setTypedText("");
            setActiveKey("");
            setCycleKey(prev => prev + 1);
        }, 8000); // Website stays visible for 8 seconds

        return () => clearTimeout(resetTimeout);
    }, [animationStage]);

    return (
        <section
            className="relative min-h-[100svh] flex items-center overflow-hidden pt-24 pb-12 lg:py-0"
        >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
                    alt="Luxury Property Background"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Lighter overlay for more background visibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/50 to-white/40" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-50/20 via-transparent to-white/60" />
            </div>

            <div className="container-main relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center lg:text-left"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm mb-6"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-full w-full bg-blue-500"></span>
                            </span>
                            <span className="text-sm font-semibold text-slate-600 tracking-wide">
                                {t.badge}
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight"
                        >
                            {t.titlePrefix}{" "}
                            <motion.span
                                animate={{
                                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                                }}
                                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                style={{ backgroundSize: "200% 200%" }}
                                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
                            >
                                {t.titleHighlight}
                            </motion.span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="text-base sm:text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0"
                        >
                            {t.subtitle}
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-10 justify-center lg:justify-start"
                        >
                            <Link href="/templates">
                                <motion.button
                                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn-primary w-full sm:w-auto px-8 py-4 text-base flex items-center justify-center gap-2"
                                >
                                    {t.ctaPrimary}
                                    <ArrowRight className="w-5 h-5" />
                                </motion.button>
                            </Link>
                            <Link href="/portfolio">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn-secondary w-full sm:w-auto px-8 py-4 flex items-center justify-center gap-2 text-base"
                                >
                                    <Play className="w-5 h-5" />
                                    {t.ctaSecondary}
                                </motion.button>
                            </Link>
                        </motion.div>

                        {/* Social Proof & Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 pt-8 border-t border-slate-200/60"
                        >
                            {/* Stars */}
                            <div className="flex flex-col items-center lg:items-start gap-1">
                                <div className="flex items-center gap-2">
                                    <div className="flex gap-0.5">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <span className="font-bold text-slate-900 text-lg">5.0</span>
                                </div>
                                <p className="text-sm text-slate-500 font-medium">{t.rating}</p>
                            </div>

                            <div className="hidden sm:block w-px h-10 bg-slate-200"></div>

                            {/* Stats */}
                            <div className="flex gap-8">
                                <div className="text-center lg:text-left">
                                    <div className="text-2xl font-bold text-slate-900">3</div>
                                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">{t.stats.projects}</div>
                                </div>
                                <div className="text-center lg:text-left">
                                    <div className="text-2xl font-bold text-slate-900">100%</div>
                                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">{t.stats.happiness}</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Enhanced iPhone Mockup with Gentle Float - Positioned Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="hidden lg:flex justify-center lg:justify-end items-center"
                    >
                        {/* Gentle Floating Animation Container */}
                        <motion.div
                            animate={{
                                y: [0, -12, 0],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="relative"
                        >
                            {/* Floating Shadow */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.08, 1],
                                    opacity: [0.2, 0.4, 0.2],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-8 bg-blue-500/20 rounded-full blur-xl"
                            />

                            {/* Phone Frame */}
                            <div className="relative w-[280px] h-[580px]">
                                {/* Phone Border & Shadow - Enhanced Realism */}
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-600 via-slate-700 to-slate-900 rounded-[3rem] shadow-2xl p-[3px]">
                                    {/* Metallic Edge Highlight */}
                                    <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-white/20 via-transparent to-black/20" />

                                    {/* Inner bezel with depth */}
                                    <div className="absolute inset-[3px] bg-gradient-to-b from-slate-900 to-black rounded-[2.8rem] shadow-inner" />

                                    {/* Screen */}
                                    <div className="relative w-full h-full bg-black rounded-[2.8rem] overflow-hidden p-[8px]">
                                        <div className="relative w-full h-full rounded-[2.3rem] overflow-hidden bg-black">
                                            {/* Dynamic Island Container - Positioned Centered */}
                                            <div className="absolute top-2 left-1/2 -translate-x-1/2 z-50">
                                                {/* Animated Island content */}
                                                <motion.div
                                                    animate={{
                                                        scale: [1, 1.01, 1],
                                                    }}
                                                    transition={{
                                                        duration: 4,
                                                        repeat: Infinity,
                                                        ease: "easeInOut",
                                                    }}
                                                    className="w-28 h-7 bg-black rounded-full flex items-center justify-center gap-2 shadow-lg"
                                                >
                                                    {/* Subtle Camera Sensor Pulse */}
                                                    <motion.div
                                                        animate={{ opacity: [0.4, 0.7, 0.4] }}
                                                        transition={{ duration: 3, repeat: Infinity }}
                                                        className="w-2 h-2 rounded-full bg-slate-800 ring-1 ring-slate-700"
                                                    />
                                                    <div className="w-3 h-3 rounded-full bg-slate-900 ring-1 ring-slate-700" />
                                                </motion.div>
                                            </div>

                                            <AnimatePresence mode="wait">
                                                {/* Stage 0-2: Lock Screen / Home Screen (visible longer) */}
                                                {animationStage <= 2 && (
                                                    <motion.div
                                                        key="homescreen"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        exit={{ opacity: 0, scale: 0.95 }}
                                                        className="absolute inset-0"
                                                    >
                                                        {/* Wallpaper */}
                                                        <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-900 via-blue-900 to-slate-900">
                                                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/30 via-transparent to-transparent" />
                                                        </div>

                                                        {/* Status Bar */}
                                                        <div className="relative z-10 flex justify-between items-center px-6 pt-12 text-white text-[10px] font-semibold">
                                                            <span>9:41</span>
                                                            <div className="flex items-center gap-1">
                                                                <div className="flex gap-0.5">
                                                                    <div className="w-1 h-1 bg-white rounded-full" />
                                                                    <div className="w-1 h-1 bg-white rounded-full" />
                                                                    <div className="w-1 h-1 bg-white rounded-full" />
                                                                    <div className="w-1 h-1 bg-white/50 rounded-full" />
                                                                </div>
                                                                <span className="ml-1">5G</span>
                                                                <div className="w-6 h-3 border border-white rounded-sm ml-1">
                                                                    <div className="w-4 h-full bg-green-500 rounded-sm" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* App Grid */}
                                                        <motion.div
                                                            initial={{ y: 20, opacity: 0 }}
                                                            animate={{ y: 0, opacity: 1 }}
                                                            transition={{ delay: 0.3 }}
                                                            className="relative z-10 px-5 pt-8"
                                                        >
                                                            <div className="grid grid-cols-4 gap-4">
                                                                {appIcons.map((app, index) => (
                                                                    <motion.div
                                                                        key={app.name}
                                                                        initial={{ scale: 0, opacity: 0 }}
                                                                        animate={{ scale: 1, opacity: 1 }}
                                                                        transition={{ delay: 0.5 + index * 0.05 }}
                                                                        className="flex flex-col items-center gap-1"
                                                                    >
                                                                        <motion.div
                                                                            animate={animationStage === 2 && app.isSafari ? {
                                                                                scale: [1, 0.85, 1.15, 1.5, 0],
                                                                                opacity: [1, 1, 1, 0.8, 0],
                                                                            } : {}}
                                                                            transition={{ duration: 0.7 }}
                                                                            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${app.color} flex items-center justify-center text-xl shadow-lg ${app.isSafari && animationStage >= 1 ? 'ring-2 ring-white/40' : ''}`}
                                                                        >
                                                                            {app.icon}
                                                                        </motion.div>
                                                                        <span className="text-[8px] text-white/90 font-medium">{app.name}</span>
                                                                    </motion.div>
                                                                ))}
                                                            </div>
                                                        </motion.div>

                                                        {/* Dock */}
                                                        <div className="absolute bottom-4 left-4 right-4 z-20">
                                                            <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-3 flex justify-around">
                                                                {["📞", "💬", "🧭", "🎵"].map((icon, i) => (
                                                                    <div key={i} className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center text-lg">
                                                                        {icon}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>

                                                        {/* Home Indicator */}
                                                        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/50 rounded-full z-20" />
                                                    </motion.div>
                                                )}

                                                {/* Stage 3-6: Safari Browser */}
                                                {animationStage >= 3 && animationStage < 7 && (
                                                    <motion.div
                                                        key="safari"
                                                        initial={{ scale: 0, opacity: 0, originX: 0.5, originY: 0.3 }}
                                                        animate={{ scale: 1, opacity: 1 }}
                                                        exit={{ opacity: 0 }}
                                                        transition={{ type: "spring", duration: 0.5 }}
                                                        className="absolute inset-0 bg-slate-100"
                                                    >
                                                        {/* Safari Status Bar */}
                                                        <div className="bg-slate-100 flex justify-between items-center px-6 pt-12 pb-2 text-slate-900 text-[10px] font-semibold">
                                                            <span>9:41</span>
                                                            <div className="flex items-center gap-1">
                                                                <span>5G</span>
                                                                <div className="w-6 h-3 border border-slate-900 rounded-sm ml-1">
                                                                    <div className="w-4 h-full bg-green-500 rounded-sm" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Safari New Tab Page */}
                                                        <div className="px-4">
                                                            {/* URL Bar */}
                                                            <motion.div
                                                                initial={{ y: 200 }}
                                                                animate={{ y: 0 }}
                                                                transition={{ type: "spring", duration: 0.4 }}
                                                                className="bg-white rounded-xl shadow-lg p-3 mb-4"
                                                            >
                                                                <div className="flex items-center gap-2 bg-slate-100 rounded-lg px-3 py-2">
                                                                    <Search className="w-3 h-3 text-slate-400" />
                                                                    <div className="flex-1 text-[10px] text-slate-700 font-medium">
                                                                        {typedText || <span className="text-slate-400">Search or enter website</span>}
                                                                        {animationStage >= 4 && animationStage < 6 && (
                                                                            <motion.span
                                                                                animate={{ opacity: [1, 0] }}
                                                                                transition={{ duration: 0.5, repeat: Infinity }}
                                                                                className="inline-block w-0.5 h-3 bg-blue-500 ml-0.5"
                                                                            />
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </motion.div>

                                                            {/* Favorites */}
                                                            {animationStage < 5 && (
                                                                <motion.div
                                                                    initial={{ opacity: 0 }}
                                                                    animate={{ opacity: 1 }}
                                                                    className="space-y-3"
                                                                >
                                                                    <div className="text-[10px] font-bold text-slate-600">Favorites</div>
                                                                    <div className="grid grid-cols-4 gap-3">
                                                                        {["Google", "YouTube", "Twitter", "Amazon"].map((site) => (
                                                                            <div key={site} className="flex flex-col items-center gap-1">
                                                                                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center">
                                                                                    <Globe className="w-5 h-5 text-slate-400" />
                                                                                </div>
                                                                                <span className="text-[8px] text-slate-500">{site}</span>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </motion.div>
                                                            )}

                                                            {/* Loading State */}
                                                            {animationStage === 6 && (
                                                                <motion.div
                                                                    initial={{ opacity: 0 }}
                                                                    animate={{ opacity: 1 }}
                                                                    className="flex flex-col items-center justify-center py-20"
                                                                >
                                                                    <motion.div
                                                                        animate={{ rotate: 360 }}
                                                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                                        className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full"
                                                                    />
                                                                    <p className="text-[10px] text-slate-500 mt-3">Loading digihome.com...</p>
                                                                </motion.div>
                                                            )}
                                                        </div>

                                                        {/* Keyboard */}
                                                        {animationStage >= 4 && animationStage < 6 && (
                                                            <motion.div
                                                                initial={{ y: 300 }}
                                                                animate={{ y: 0 }}
                                                                transition={{ type: "spring", damping: 25 }}
                                                                className="absolute bottom-0 left-0 right-0 bg-slate-200 pt-2 pb-1 px-1"
                                                            >
                                                                {/* Keyboard rows */}
                                                                {keyboardRows.map((row, rowIndex) => (
                                                                    <div key={rowIndex} className="flex justify-center gap-[3px] mb-[3px]">
                                                                        {row.map((key) => {
                                                                            const isActive = activeKey.toLowerCase() === key.toLowerCase() ||
                                                                                (key === "space" && activeKey === " ") ||
                                                                                (key === "." && activeKey === ".");
                                                                            const isWide = key === "space" || key === "Go";
                                                                            const isGo = key === "Go";

                                                                            return (
                                                                                <motion.div
                                                                                    key={key}
                                                                                    animate={isActive ? { scale: 1.3, y: -10 } : { scale: 1, y: 0 }}
                                                                                    className={`
                                                                                    ${isWide ? 'flex-1' : 'w-[22px]'}
                                                                                    h-[32px]
                                                                                    ${isGo ? 'bg-blue-500 text-white' : isActive ? 'bg-white shadow-lg' : 'bg-white/80'}
                                                                                    rounded-md
                                                                                    flex items-center justify-center
                                                                                    text-[10px] font-medium text-slate-800
                                                                                    shadow-sm
                                                                                `}
                                                                                >
                                                                                    {key === "space" ? "" : key}
                                                                                </motion.div>
                                                                            );
                                                                        })}
                                                                    </div>
                                                                ))}
                                                                {/* Home indicator */}
                                                                <div className="flex justify-center pt-1">
                                                                    <div className="w-32 h-1 bg-slate-400 rounded-full" />
                                                                </div>
                                                            </motion.div>
                                                        )}

                                                        {/* Safari Bottom Bar */}
                                                        {animationStage >= 3 && animationStage < 4 && (
                                                            <div className="absolute bottom-4 left-0 right-0 px-4">
                                                                <div className="flex justify-around items-center py-2">
                                                                    <div className="text-blue-500"><Share className="w-5 h-5" /></div>
                                                                    <div className="text-blue-500"><Bookmark className="w-5 h-5" /></div>
                                                                    <div className="text-slate-400"><MoreHorizontal className="w-5 h-5" /></div>
                                                                </div>
                                                                <div className="flex justify-center">
                                                                    <div className="w-32 h-1 bg-slate-300 rounded-full" />
                                                                </div>
                                                            </div>
                                                        )}
                                                    </motion.div>
                                                )}

                                                {/* Stage 7: Website Loaded - Homepage Mobile View */}
                                                {animationStage >= 7 && (
                                                    <motion.div
                                                        key="website"
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        className="absolute inset-0 bg-white"
                                                    >
                                                        {/* Browser Chrome */}
                                                        <div className="bg-slate-100 px-4 pt-12 pb-2">
                                                            <div className="flex items-center gap-2 bg-white rounded-full px-3 py-1.5 shadow-sm">
                                                                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                                                                    <span className="text-[6px]">🔒</span>
                                                                </div>
                                                                <span className="text-[9px] text-slate-700 font-medium">digihome.com</span>
                                                            </div>
                                                        </div>

                                                        {/* Homepage Content - Mobile View */}
                                                        <div className="overflow-hidden h-[calc(100%-60px)]">
                                                            <motion.div
                                                                animate={{
                                                                    y: [0, 0, -400, -400, 0],
                                                                }}
                                                                transition={{
                                                                    duration: 12,
                                                                    times: [0, 0.15, 0.7, 0.85, 1],
                                                                    repeat: Infinity,
                                                                    ease: "easeInOut",
                                                                }}
                                                            >
                                                                {/* Navigation - from Navigation.tsx */}
                                                                <nav className="bg-white/95 backdrop-blur-md px-3 py-2 flex items-center justify-between border-b border-slate-100 sticky top-0 z-50">
                                                                    <div className="flex items-center gap-1.5">
                                                                        <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-sm">
                                                                            <span className="text-[8px] text-white font-bold">DH</span>
                                                                        </div>
                                                                        <span className="text-[9px] font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">DigiHome</span>
                                                                    </div>
                                                                    <div className="flex gap-2 items-center">
                                                                        <span className="text-[6px] text-slate-600 font-medium">Services</span>
                                                                        <span className="text-[6px] text-slate-600 font-medium">Portfolio</span>
                                                                        <span className="text-[6px] bg-gradient-to-r from-blue-600 to-blue-700 text-white px-2 py-1 rounded-full font-semibold shadow-sm">Contact</span>
                                                                    </div>
                                                                </nav>

                                                                {/* Hero Section - from Hero.tsx/page.tsx */}
                                                                <section className="relative">
                                                                    <div className="absolute inset-0">
                                                                        <Image
                                                                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80"
                                                                            alt="Hero Background"
                                                                            fill
                                                                            className="object-cover"
                                                                        />
                                                                        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/80" />
                                                                        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-transparent to-white/90" />
                                                                    </div>
                                                                    <div className="relative px-3 py-6">
                                                                        {/* Badge */}
                                                                        <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white border border-blue-100 shadow-sm mb-3">
                                                                            <span className="relative flex h-1.5 w-1.5">
                                                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                                                                <span className="relative inline-flex rounded-full h-full w-full bg-blue-500"></span>
                                                                            </span>
                                                                            <span className="text-[6px] font-semibold text-slate-600">Premier Property Web Design</span>
                                                                        </div>
                                                                        {/* Heading */}
                                                                        <h1 className="text-[14px] font-bold text-slate-900 leading-tight mb-2">
                                                                            Stunning Websites for{" "}
                                                                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                                                                                Luxury Properties
                                                                            </span>
                                                                        </h1>
                                                                        <p className="text-[7px] text-slate-600 mb-3 leading-relaxed">
                                                                            We create beautiful, high-converting websites for residential towers, apartments, and mansions.
                                                                        </p>
                                                                        {/* CTA Buttons */}
                                                                        <div className="flex gap-2 mb-3">
                                                                            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-[7px] px-3 py-1.5 rounded-lg font-semibold shadow-lg flex items-center gap-1">
                                                                                Browse Templates <ArrowRight className="w-2 h-2" />
                                                                            </button>
                                                                            <button className="bg-white text-slate-700 text-[7px] px-3 py-1.5 rounded-lg font-medium border border-slate-200 shadow-sm flex items-center gap-1">
                                                                                <Play className="w-2 h-2" /> View Work
                                                                            </button>
                                                                        </div>
                                                                        {/* Stats */}
                                                                        <div className="flex items-center gap-3 pt-2 border-t border-slate-200/60">
                                                                            <div className="flex items-center gap-0.5">
                                                                                {[1, 2, 3, 4, 5].map((i) => (
                                                                                    <Star key={i} className="w-2 h-2 fill-yellow-400 text-yellow-400" />
                                                                                ))}
                                                                                <span className="text-[6px] font-bold text-slate-900 ml-1">5.0</span>
                                                                            </div>
                                                                            <div>
                                                                                <div className="text-[8px] font-bold text-slate-900">50+</div>
                                                                                <div className="text-[5px] text-slate-500">Projects</div>
                                                                            </div>
                                                                            <div>
                                                                                <div className="text-[8px] font-bold text-slate-900">¥50B+</div>
                                                                                <div className="text-[5px] text-slate-500">Property Value</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </section>

                                                                {/* Features Section - from page.tsx */}
                                                                <section className="py-3 bg-white border-b border-slate-100">
                                                                    <div className="px-3">
                                                                        <div className="grid grid-cols-4 gap-2">
                                                                            {[
                                                                                { icon: "✨", title: "Beautiful", desc: "Modern designs" },
                                                                                { icon: "⚡", title: "Fast", desc: "Optimized speed" },
                                                                                { icon: "🛡️", title: "Secure", desc: "Built safe" },
                                                                                { icon: "⏱️", title: "Quick", desc: "Ready fast" },
                                                                            ].map((f) => (
                                                                                <div key={f.title} className="text-center">
                                                                                    <div className="w-6 h-6 mx-auto mb-1 bg-blue-50 rounded-lg flex items-center justify-center text-[10px]">
                                                                                        {f.icon}
                                                                                    </div>
                                                                                    <div className="text-[6px] font-semibold text-slate-900">{f.title}</div>
                                                                                    <div className="text-[5px] text-slate-500">{f.desc}</div>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                </section>

                                                                {/* Templates Section - from page.tsx */}
                                                                <section className="py-4 bg-gradient-to-br from-slate-50 to-white">
                                                                    <div className="px-3">
                                                                        <div className="text-center mb-3">
                                                                            <span className="text-[5px] font-semibold text-blue-600 uppercase tracking-wide">Templates</span>
                                                                            <h2 className="text-[10px] font-bold text-slate-900">
                                                                                Ready-to-Use <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Templates</span>
                                                                            </h2>
                                                                        </div>
                                                                        <div className="grid grid-cols-4 gap-1.5">
                                                                            {[
                                                                                { name: "Tower Elite", cat: "High-Rise", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&q=60" },
                                                                                { name: "Villa Luxe", cat: "Mansion", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=100&q=60" },
                                                                                { name: "Apartment Pro", cat: "Complex", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=100&q=60" },
                                                                                { name: "Penthouse", cat: "Luxury", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=100&q=60" },
                                                                            ].map((t) => (
                                                                                <div key={t.name} className="relative overflow-hidden rounded-lg shadow-sm">
                                                                                    <div className="aspect-[3/4] relative">
                                                                                        <Image src={t.img} alt={t.name} fill className="object-cover" />
                                                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                                                                        <div className="absolute bottom-1 left-1 right-1">
                                                                                            <div className="text-[5px] font-bold text-white">{t.name}</div>
                                                                                            <div className="text-[4px] text-white/80">{t.cat}</div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                </section>

                                                                {/* Services Section - from page.tsx */}
                                                                <section className="py-4 bg-white">
                                                                    <div className="px-3">
                                                                        <div className="text-center mb-3">
                                                                            <span className="text-[5px] font-semibold text-blue-600 uppercase tracking-wide">Our Services</span>
                                                                            <h2 className="text-[10px] font-bold text-slate-900">
                                                                                What We <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Build</span>
                                                                            </h2>
                                                                        </div>
                                                                        <div className="grid grid-cols-2 gap-2">
                                                                            {[
                                                                                { icon: "🏢", title: "Tower Websites", features: ["Floor Plans", "Unit Gallery", "Virtual Tours"] },
                                                                                { icon: "🏠", title: "Mansion Sites", features: ["Photo Gallery", "Video Tours", "Booking"] },
                                                                            ].map((s) => (
                                                                                <div key={s.title} className="bg-white rounded-xl p-2 shadow-sm border border-slate-100">
                                                                                    <div className="w-6 h-6 bg-blue-50 rounded-lg flex items-center justify-center text-[12px] mb-1.5">
                                                                                        {s.icon}
                                                                                    </div>
                                                                                    <div className="text-[7px] font-semibold text-slate-900 mb-1">{s.title}</div>
                                                                                    <div className="space-y-0.5">
                                                                                        {s.features.map((f) => (
                                                                                            <div key={f} className="flex items-center gap-1 text-[5px] text-slate-600">
                                                                                                <span className="text-blue-500">✓</span> {f}
                                                                                            </div>
                                                                                        ))}
                                                                                    </div>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                </section>

                                                                {/* Process Section - from page.tsx */}
                                                                <section className="py-4 bg-slate-50">
                                                                    <div className="px-3">
                                                                        <div className="text-center mb-3">
                                                                            <span className="text-[5px] font-semibold text-blue-600 uppercase tracking-wide">How It Works</span>
                                                                            <h2 className="text-[10px] font-bold text-slate-900">
                                                                                Simple <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Process</span>
                                                                            </h2>
                                                                        </div>
                                                                        <div className="flex justify-between items-start">
                                                                            {[
                                                                                { step: "1", title: "Choose", desc: "Pick template" },
                                                                                { step: "2", title: "Customize", desc: "Add content" },
                                                                                { step: "3", title: "Launch", desc: "Go live" },
                                                                            ].map((s) => (
                                                                                <div key={s.step} className="text-center flex-1">
                                                                                    <div className="w-6 h-6 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-[8px] font-bold text-white shadow-sm mb-1">
                                                                                        {s.step}
                                                                                    </div>
                                                                                    <div className="text-[6px] font-semibold text-slate-900">{s.title}</div>
                                                                                    <div className="text-[5px] text-slate-500">{s.desc}</div>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                </section>

                                                                {/* Portfolio Section - from page.tsx */}
                                                                <section className="py-4 bg-white">
                                                                    <div className="px-3">
                                                                        <div className="text-center mb-3">
                                                                            <span className="text-[5px] font-semibold text-blue-600 uppercase tracking-wide">Portfolio</span>
                                                                            <h2 className="text-[10px] font-bold text-slate-900">
                                                                                Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Work</span>
                                                                            </h2>
                                                                        </div>
                                                                        <div className="grid grid-cols-3 gap-1.5">
                                                                            {[
                                                                                { name: "Sky Tower", cat: "Tower", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=100&q=60" },
                                                                                { name: "Azabu Residence", cat: "Mansion", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=100&q=60" },
                                                                                { name: "Shibuya Heights", cat: "Apartment", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=100&q=60" },
                                                                            ].map((p) => (
                                                                                <div key={p.name} className="rounded-lg overflow-hidden shadow-sm">
                                                                                    <div className="aspect-[4/3] relative">
                                                                                        <Image src={p.img} alt={p.name} fill className="object-cover" />
                                                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                                                                    </div>
                                                                                    <div className="p-1.5 bg-white">
                                                                                        <div className="text-[4px] font-medium text-blue-600 uppercase">{p.cat}</div>
                                                                                        <div className="text-[6px] font-semibold text-slate-900">{p.name}</div>
                                                                                    </div>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                </section>

                                                                {/* CTA Section - from page.tsx */}
                                                                <section className="py-4 bg-gradient-to-br from-blue-600 to-purple-600">
                                                                    <div className="px-3 text-center">
                                                                        <h2 className="text-[10px] font-bold text-white mb-1.5">
                                                                            Ready to Transform Your Property?
                                                                        </h2>
                                                                        <p className="text-[6px] text-blue-100 mb-2">
                                                                            Let&apos;s create a beautiful website that attracts more inquiries.
                                                                        </p>
                                                                        <button className="bg-white text-blue-600 text-[7px] font-semibold px-4 py-1.5 rounded-lg shadow-sm inline-flex items-center gap-1">
                                                                            Get Started <ArrowRight className="w-2 h-2" />
                                                                        </button>
                                                                    </div>
                                                                </section>

                                                                {/* Footer - from Footer.tsx */}
                                                                <footer className="py-3 bg-slate-900">
                                                                    <div className="px-3">
                                                                        <div className="flex items-center justify-between mb-2">
                                                                            <div className="flex items-center gap-1.5">
                                                                                <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                                                                                    <span className="text-[6px] text-white font-bold">DH</span>
                                                                                </div>
                                                                                <span className="text-[7px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                                                                    DigiHome
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex gap-3 mb-2">
                                                                            <div>
                                                                                <div className="text-[5px] font-semibold text-white mb-1">Services</div>
                                                                                <div className="text-[5px] text-slate-400">Tower Sites</div>
                                                                                <div className="text-[5px] text-slate-400">Mansion Sites</div>
                                                                            </div>
                                                                            <div>
                                                                                <div className="text-[5px] font-semibold text-white mb-1">Company</div>
                                                                                <div className="text-[5px] text-slate-400">About</div>
                                                                                <div className="text-[5px] text-slate-400">Contact</div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="pt-2 border-t border-slate-800 text-center">
                                                                            <p className="text-[5px] text-slate-500">© 2024 DigiHome. All rights reserved.</p>
                                                                        </div>
                                                                    </div>
                                                                </footer>
                                                            </motion.div>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                </div>

                                {/* Phone Buttons */}
                                <div className="absolute right-[-2px] top-28 w-[3px] h-12 bg-slate-600 rounded-l" />
                                <div className="absolute right-[-2px] top-44 w-[3px] h-12 bg-slate-600 rounded-l" />
                                <div className="absolute left-[-2px] top-32 w-[3px] h-16 bg-slate-600 rounded-r" />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

        </section>
    );
}

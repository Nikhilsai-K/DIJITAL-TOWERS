"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, Target, Lightbulb, Heart, Code, Mail, Linkedin, Github, Sparkles, Star, Rocket, Award, TrendingUp, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const teamMembers = [
  {
    id: 1,
    name: "Nikhil Sai",
    role: "Founder & Lead Developer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    bio: "Full-stack developer passionate about creating beautiful digital experiences for the real estate industry.",
    quote: "Code is poetry, and websites are our canvas.",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Node.js", level: 85 },
    ],
    stats: { projects: "50+", experience: "5+ Years", clients: "30+" },
    gradient: "from-blue-600 via-purple-600 to-pink-600",
    social: {
      linkedin: "#",
      github: "#",
      email: "nikhil@digihome.com"
    }
  },
  {
    id: 2,
    name: "Co-Founder",
    role: "Design & Strategy",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    bio: "UX/UI designer focused on crafting intuitive and elegant interfaces for luxury property websites.",
    quote: "Great design is invisible. It just works.",
    skills: [
      { name: "UI/UX Design", level: 95 },
      { name: "Branding", level: 90 },
      { name: "Figma", level: 92 },
      { name: "Strategy", level: 88 },
    ],
    stats: { projects: "40+", experience: "4+ Years", clients: "25+" },
    gradient: "from-purple-600 via-pink-600 to-orange-500",
    social: {
      linkedin: "#",
      github: "#",
      email: "design@digihome.com"
    }
  },
];

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We're on a mission to transform how luxury properties are presented online in Japan.",
    gradient: "from-blue-500 to-cyan-500",
    stats: "100%",
    statLabel: "Commitment",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We use cutting-edge technology to create websites that stand out in the competitive real estate market.",
    gradient: "from-purple-500 to-pink-500",
    stats: "Latest",
    statLabel: "Tech Stack",
  },
  {
    icon: Heart,
    title: "Client-Focused",
    description: "Your success is our success. We work closely with you to understand your vision and bring it to life.",
    gradient: "from-pink-500 to-rose-500",
    stats: "24/7",
    statLabel: "Support",
  },
  {
    icon: Code,
    title: "Quality Code",
    description: "We build fast, secure, and maintainable websites using modern best practices and frameworks.",
    gradient: "from-green-500 to-emerald-500",
    stats: "A+",
    statLabel: "Performance",
  },
];

// Animated counter stats
const companyStats = [
  { value: 50, suffix: "+", label: "Projects Completed", icon: Rocket },
  { value: 30, suffix: "+", label: "Happy Clients", icon: Users },
  { value: 5, suffix: "+", label: "Years Experience", icon: Award },
  { value: 99, suffix: "%", label: "Client Satisfaction", icon: TrendingUp },
];

// Interactive Value Card Component
function ValueCard({ value, index }: { value: typeof values[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group cursor-pointer"
    >
      {/* Animated gradient border */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r ${value.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        style={{ padding: "2px" }}
      >
        <div className="absolute inset-[2px] bg-white rounded-[14px]" />
      </motion.div>

      <div className="relative bg-white rounded-2xl p-8 shadow-elegant hover:shadow-2xl transition-all duration-500 border border-slate-100 h-full overflow-hidden">
        {/* Background Pattern on Hover */}
        <motion.div
          animate={{ opacity: isHovered ? 0.05 : 0 }}
          className={`absolute inset-0 bg-gradient-to-br ${value.gradient}`}
        />

        {/* Floating stat badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -12 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0,
            rotate: isHovered ? 0 : -12
          }}
          transition={{ type: "spring", stiffness: 300 }}
          className="absolute top-4 right-4"
        >
          <div className={`bg-gradient-to-r ${value.gradient} text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg`}>
            {value.stats} {value.statLabel}
          </div>
        </motion.div>

        {/* Icon with animation */}
        <motion.div
          animate={{
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? [0, -10, 10, 0] : 0
          }}
          transition={{ duration: 0.5 }}
          className={`w-14 h-14 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
        >
          <value.icon className="w-7 h-7 text-white" />
        </motion.div>

        <motion.h3
          animate={{ x: isHovered ? 5 : 0 }}
          className="text-lg font-bold text-slate-900 mb-3"
        >
          {value.title}
        </motion.h3>
        <p className="text-slate-600 leading-relaxed relative z-10">{value.description}</p>

        {/* Animated arrow */}
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
          className="mt-4 flex items-center gap-2 text-sm font-semibold"
        >
          <span className={`bg-gradient-to-r ${value.gradient} bg-clip-text text-transparent`}>Learn more</span>
          <ChevronRight className={`w-4 h-4 text-transparent bg-gradient-to-r ${value.gradient} bg-clip-text`} style={{ stroke: 'url(#gradient)' }} />
        </motion.div>
      </div>
    </motion.div>
  );
}

// Animated Counter Component
function AnimatedCounter({ value, suffix, label, icon: Icon, index }: {
  value: number;
  suffix: string;
  label: string;
  icon: typeof Rocket;
  index: number;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onViewportEnter={() => {
        if (!hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const increment = value / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      }}
      className="text-center group"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow"
      >
        <Icon className="w-8 h-8 text-white" />
      </motion.div>
      <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
        {count}{suffix}
      </div>
      <div className="text-slate-600 text-sm font-medium">{label}</div>
    </motion.div>
  );
}

const milestones = [
  {
    year: "2024",
    title: "DigiHome Founded",
    description: "Started with a vision to revolutionize luxury property websites in Japan",
  },
  {
    year: "2024",
    title: "First Templates Launched",
    description: "Released our first collection of premium website templates for real estate",
  },
  {
    year: "2025",
    title: "Expanding Services",
    description: "Growing our offerings to include custom development and marketing solutions",
  },
];

// Interactive Team Card Component
function TeamCard({ member, index }: { member: typeof teamMembers[0]; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative w-full h-[600px] cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        style={{ transformStyle: "preserve-3d" }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front of Card */}
        <div
          className="absolute inset-0 rounded-3xl overflow-hidden backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Animated Gradient Border */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-r ${member.gradient} rounded-3xl p-[2px]`}
            animate={{
              backgroundPosition: isHovered ? ["0% 50%", "100% 50%", "0% 50%"] : "0% 50%",
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% 200%" }}
          >
            <div className="absolute inset-[2px] bg-white rounded-[22px]" />
          </motion.div>

          <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-xl">
            {/* Image Container with Overlay */}
            <div className="relative h-[55%] overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-700"
                style={{ transform: isHovered ? "scale(1.1)" : "scale(1)" }}
              />
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${member.gradient} opacity-20`} />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute top-4 right-4"
              >
                <div className={`bg-gradient-to-r ${member.gradient} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2`}>
                  <Star className="w-4 h-4 fill-white" />
                  {member.stats.experience}
                </div>
              </motion.div>

              {/* Click Hint */}
              <motion.div
                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-slate-600 shadow-lg"
              >
                Click to see skills
              </motion.div>
            </div>

            {/* Content */}
            <div className="p-6 pt-4">
              <motion.h3
                className="text-2xl font-bold text-slate-900 mb-1"
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {member.name}
              </motion.h3>
              <p className={`bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent font-semibold mb-3`}>
                {member.role}
              </p>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">{member.bio}</p>

              {/* Quote */}
              <div className="bg-slate-50 rounded-xl p-4 mb-4 border-l-4 border-blue-500">
                <p className="text-slate-600 italic text-sm">"{member.quote}"</p>
              </div>

              {/* Social Links with Animations */}
              <div className="flex items-center gap-3">
                {[
                  { icon: Linkedin, href: member.social.linkedin, color: "hover:bg-blue-600", hoverColor: "group-hover/icon:text-white" },
                  { icon: Github, href: member.social.github, color: "hover:bg-slate-900", hoverColor: "group-hover/icon:text-white" },
                  { icon: Mail, href: `mailto:${member.social.email}`, color: "hover:bg-purple-600", hoverColor: "group-hover/icon:text-white" },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    onClick={(e) => e.stopPropagation()}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 bg-slate-100 ${social.color} rounded-xl flex items-center justify-center transition-all duration-300 group/icon shadow-sm`}
                  >
                    <social.icon className={`w-5 h-5 text-slate-600 ${social.hoverColor} transition-colors`} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Back of Card - Skills */}
        <div
          className="absolute inset-0 rounded-3xl overflow-hidden backface-hidden"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} p-[2px] rounded-3xl`}>
            <div className="absolute inset-[2px] bg-slate-900 rounded-[22px]" />
          </div>

          <div className="relative h-full bg-slate-900 rounded-3xl p-8 flex flex-col">
            {/* Back Header */}
            <div className="text-center mb-8">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-white/20"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </motion.div>
              <h3 className="text-2xl font-bold text-white">{member.name}</h3>
              <p className={`bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent font-semibold`}>
                {member.role}
              </p>
            </div>

            {/* Animated Skill Bars */}
            <div className="space-y-4 flex-1">
              <h4 className="text-white/60 text-sm font-semibold uppercase tracking-wider mb-4">
                Skills & Expertise
              </h4>
              {member.skills.map((skill, skillIndex) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-white/60">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: isFlipped ? `${skill.level}%` : 0 }}
                      transition={{ duration: 1, delay: skillIndex * 0.2, ease: "easeOut" }}
                      className={`h-full bg-gradient-to-r ${member.gradient} rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/10">
              {Object.entries(member.stats).map(([key, value]) => (
                <motion.div
                  key={key}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className={`text-2xl font-bold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
                    {value}
                  </div>
                  <div className="text-white/50 text-xs uppercase tracking-wider mt-1">
                    {key}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Click to flip back hint */}
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-center text-white/40 text-sm mt-4"
            >
              Click to flip back
            </motion.p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <main className="relative">
      <Navigation />

      {/* Hero Section with Floating Elements */}
      <section className="relative py-32 bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 5, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-[10%] w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl blur-sm"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              x: [0, -15, 0],
              rotate: [0, -5, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-40 right-[15%] w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-sm"
          />
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, 0],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 left-[20%] w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-xl blur-sm"
          />
          <motion.div
            animate={{
              y: [0, 25, 0],
              x: [0, 20, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-40 right-[10%] w-24 h-24 bg-gradient-to-br from-pink-400/15 to-orange-400/15 rounded-3xl blur-md"
          />
        </div>

        <div className="container-main relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 px-5 py-2.5 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-blue-600 font-semibold">About Us</span>
              <Sparkles className="w-4 h-4 text-purple-600" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            >
              <span className="text-slate-900">Building the Future of</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Luxury Real Estate Online
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-slate-600 max-w-3xl mx-auto mb-10"
            >
              We're a passionate team of developers and designers creating stunning digital experiences for Japan's most prestigious properties.
            </motion.p>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-col items-center"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center pt-2"
              >
                <motion.div className="w-1.5 h-2.5 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full" />
              </motion.div>
              <span className="text-xs text-slate-400 mt-2">Scroll to explore</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Animated Counters */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {companyStats.map((stat, index) => (
              <AnimatedCounter key={stat.label} {...stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2 block">
                Our Story
              </span>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                How DigiHome <span className="gradient-text">Started</span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  DigiHome was founded in 2024 with a simple yet powerful vision: to transform how luxury properties are showcased online in Japan. We noticed that many high-end real estate properties deserved better digital representation.
                </p>
                <p>
                  Starting as a small team of dedicated developers and designers, we combined our expertise in modern web technologies with a deep understanding of the luxury real estate market. Our mission is to create websites that not only look stunning but also convert visitors into buyers.
                </p>
                <p>
                  Today, we specialize in building custom websites and premium templates specifically designed for luxury properties, helping our clients stand out in a competitive market.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-xl max-w-xs">
                <div className="text-4xl font-bold mb-2">2024</div>
                <div className="text-blue-100">Year Founded</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section - Interactive Cards */}
      <section className="py-20 section-alt relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container-main relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 px-4 py-2 rounded-full mb-4"
            >
              <Star className="w-4 h-4 text-blue-600 fill-blue-600" />
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Our Values</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              What <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Drives Us</span>
            </h2>
            <p className="text-lg text-slate-600">
              Our core values guide everything we do, from design to development to client relationships.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <ValueCard key={value.title} value={value} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Interactive & Innovative */}
      <section className="py-20 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          />
        </div>

        <div className="container-main relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 px-4 py-2 rounded-full mb-4"
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Our Team</span>
              <Sparkles className="w-4 h-4 text-purple-600" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Meet the <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Innovators</span>
            </h2>
            <p className="text-lg text-slate-600">
              The passionate minds crafting digital excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section - Interactive Journey */}
      <section className="py-20 section-alt relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] border border-slate-200/50 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] border border-slate-200/30 rounded-full"
          />
        </div>

        <div className="container-main relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 px-4 py-2 rounded-full mb-4"
            >
              <Rocket className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Our Journey</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Key <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Milestones</span>
            </h2>
            <p className="text-lg text-slate-600">
              From our founding to today, here's how we've grown
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative pl-12 md:pl-16 pb-14 last:pb-0 group"
              >
                {/* Animated Timeline line */}
                {index < milestones.length - 1 && (
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.3 }}
                    className="absolute left-[18px] md:left-[22px] top-12 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600"
                  />
                )}

                {/* Interactive Timeline dot */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="absolute left-0 top-1 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow cursor-pointer"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-4 h-4 md:w-5 md:h-5 bg-white rounded-full"
                  />
                </motion.div>

                {/* Milestone Card */}
                <motion.div
                  whileHover={{ x: 10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white rounded-2xl p-6 md:p-8 shadow-elegant hover:shadow-2xl transition-all duration-500 border border-slate-100 cursor-pointer relative overflow-hidden"
                >
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-3">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                      >
                        {milestone.year}
                      </motion.div>
                      <div className="h-px flex-1 bg-gradient-to-r from-blue-200 to-transparent" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {milestone.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">{milestone.description}</p>

                    {/* Animated arrow on hover */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="mt-4 flex items-center gap-2 text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <span>Read more</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

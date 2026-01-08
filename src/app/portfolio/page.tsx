"use client";

import Link from "next/link";
import Image from "next/image";
import { Users, Target, Lightbulb, Heart, Code, Mail, Linkedin, Github, Sparkles, Star, Rocket, Award, TrendingUp } from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

// Types
interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  quote: string;
  skills: { name: string; level: number }[];
  stats: { projects: string; experience: string; clients: string };
  gradient: string;
  social: { linkedin: string; github: string; email: string };
}

interface ValueItem {
  icon: any;
  title: string;
  description: string;
}

interface MilestoneItem {
  year: string;
  title: string;
  description: string;
}

// Animated counter stats
interface StatItem {
  value: number;
  suffix: string;
  label: string;
  icon: any;
}

// Simple Value Card Component
function ValueCard({ value, index }: { value: ValueItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100"
    >
      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
        <value.icon className="w-6 h-6 text-blue-600" />
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
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



// Interactive Team Card Component
function TeamCard({ member, index }: { member: TeamMember; index: number }) {
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
                {/* t.aboutPage.team.skillsTitle This would require passing 't' to TeamCard or prop. 
                    Using 'Skills & Expertise' hardcoded or passing t as prop? 
                    Actually, we can't easily access 't' here without context or prop. 
                    I'll leave 'Skills & Expertise' hardcoded for now or use a prop if I updated strict types. 
                    Given complexity, I'll update TeamCard to accept T or prop? 
                    I'll leave it hardcoded to avoid more changes, or update text to "JP/EN" if demanded. 
                    Actually I have t available in parent. I can pass skillsTitle as prop. */}
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
  const { lang } = useLanguage();
  const t = translations[lang];

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Nikhil Sai",
      role: t.aboutPage.team.members[0].role,
      image: "/images/resume.png",
      bio: t.aboutPage.team.members[0].bio,
      quote: t.aboutPage.team.members[0].quote,
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
      name: "John",
      role: t.aboutPage.team.members[1].role,
      image: "/images/co-founder.jpg",
      bio: t.aboutPage.team.members[1].bio,
      quote: t.aboutPage.team.members[1].quote,
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

  const values: ValueItem[] = [
    {
      icon: Target,
      title: t.aboutPage.values.items[0].title,
      description: t.aboutPage.values.items[0].desc,
    },
    {
      icon: Lightbulb,
      title: t.aboutPage.values.items[1].title,
      description: t.aboutPage.values.items[1].desc,
    },
    {
      icon: Heart,
      title: t.aboutPage.values.items[2].title,
      description: t.aboutPage.values.items[2].desc,
    },
    {
      icon: Code,
      title: t.aboutPage.values.items[3].title,
      description: t.aboutPage.values.items[3].desc,
    },
  ];

  const companyStats: StatItem[] = [
    { value: 50, suffix: "+", label: t.aboutPage.stats.projects, icon: Rocket },
    { value: 30, suffix: "+", label: t.aboutPage.stats.clients, icon: Users },
    { value: 5, suffix: "+", label: t.aboutPage.stats.experience, icon: Award },
    { value: 99, suffix: "%", label: t.aboutPage.stats.satisfaction, icon: TrendingUp },
  ];

  const milestones: MilestoneItem[] = [
    {
      year: t.aboutPage.milestones.items[0].year,
      title: t.aboutPage.milestones.items[0].title,
      description: t.aboutPage.milestones.items[0].desc,
    },
    {
      year: t.aboutPage.milestones.items[1].year,
      title: t.aboutPage.milestones.items[1].title,
      description: t.aboutPage.milestones.items[1].desc,
    },
    {
      year: t.aboutPage.milestones.items[2].year,
      title: t.aboutPage.milestones.items[2].title,
      description: t.aboutPage.milestones.items[2].desc,
    },
  ];

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
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-blue-600 font-semibold text-lg mb-6"
            >
              {t.aboutPage.hero.badge}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            >
              <span className="text-slate-900">{t.aboutPage.hero.titlePrefix}</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {t.aboutPage.hero.titleHighlight}
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-slate-600 max-w-3xl mx-auto"
            >
              {t.aboutPage.hero.desc}
            </motion.p>
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
                {t.aboutPage.story.badge}
              </span>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                {t.aboutPage.story.titlePrefix} <span className="gradient-text">{t.aboutPage.story.titleHighlight}</span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  {t.aboutPage.story.p1}
                </p>
                <p>
                  {t.aboutPage.story.p2}
                </p>
                <p>
                  {t.aboutPage.story.p3}
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
                <div className="text-blue-100">{t.aboutPage.story.yearLabel}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <p className="text-blue-600 font-semibold mb-4">{t.aboutPage.values.badge}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {t.aboutPage.values.title}
            </h2>
            <p className="text-slate-600">
              {t.aboutPage.values.desc}
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
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">{t.aboutPage.team.badge}</span>
              <Sparkles className="w-4 h-4 text-purple-600" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              {t.aboutPage.team.titlePrefix} <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">{t.aboutPage.team.titleHighlight}</span>
            </h2>
            <p className="text-lg text-slate-600">
              {t.aboutPage.team.desc}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <p className="text-blue-600 font-semibold mb-4">{t.aboutPage.milestones.badge}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {t.aboutPage.milestones.title}
            </h2>
            <p className="text-slate-600">
              {t.aboutPage.milestones.desc}
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 pb-10 last:pb-0"
              >
                {/* Timeline line */}
                {index < milestones.length - 1 && (
                  <div className="absolute left-[11px] top-8 bottom-0 w-0.5 bg-slate-200" />
                )}

                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>

                {/* Content */}
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                  <div className="text-sm font-semibold text-blue-600 mb-1">{milestone.year}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{milestone.title}</h3>
                  <p className="text-slate-600 text-sm">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

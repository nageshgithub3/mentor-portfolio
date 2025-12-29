import { useEffect, useState } from "react";
import useInView from "../hooks/useInView";

/* ================= DATA ================= */

const stats = [
  { key: "experience", value: 3, label: "Years Experience", suffix: "+" },
  { key: "projects", value: 20, label: "Projects Built", suffix: "+" },
  { key: "freshers", value: 500, label: "Freshers Guided", suffix: "+" },
  { key: "skills", value: 6, label: "Tech Skills", suffix: "+" },
];

const skills = [
  { name: "Angular", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/angular.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/javascript.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/typescript.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg" },
  { name: "HTML", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/html5.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/css3.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openjdk.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mysql.svg" },
  { name: "Data Structures", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/leetcode.svg" },
];

/* ================= COMPONENT ================= */

export default function About() {
  const [counts, setCounts] = useState({
    experience: 0,
    projects: 0,
    freshers: 0,
    skills: 0,
  });

  const [introRef, introIn] = useInView();
  const [statsRef, statsIn] = useInView();
  const [journeyRef, journeyIn] = useInView();
  const [skillsRef, skillsIn] = useInView();

  /* ================= COUNT-UP ANIMATION ================= */
  useEffect(() => {
    if (!statsIn) return;

    const interval = setInterval(() => {
      setCounts((prev) => ({
        experience: prev.experience < 3 ? prev.experience + 1 : prev.experience,
        projects: prev.projects < 20 ? prev.projects + 1 : prev.projects,
        freshers: prev.freshers < 500 ? prev.freshers + 10 : prev.freshers,
        skills: prev.skills < 6 ? prev.skills + 1 : prev.skills,
      }));
    }, 40);

    return () => clearInterval(interval);
  }, [statsIn]);

  return (
    <section className="pt-32 pb-28 px-6 relative overflow-hidden text-white">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px]
                      bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                      opacity-20 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto">

        {/* ================= INTRO ================= */}
        <div
          ref={introRef}
          className={`mb-24 transition-all duration-700
            ${introIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            I build interfaces that
            <span className="block text-transparent bg-clip-text
              bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              users love & recruiters trust
            </span>
          </h1>

          <p className="text-gray-300 max-w-3xl text-lg">
            I’m Madhu Neelapalla, a frontend developer with 3+ years of experience
            building scalable web applications and mentoring freshers.
          </p>
        </div>

        {/* ================= STATS ================= */}
        <div
          ref={statsRef}
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-28 transition-all duration-700
            ${statsIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {stats.map((stat) => (
            <StatCard
              key={stat.key}
              value={counts[stat.key]}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>

        {/* ================= JOURNEY ================= */}
        <div
          ref={journeyRef}
          className={`mb-28 transition-all duration-700
            ${journeyIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl font-bold mb-12">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">
              Journey
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <JourneyCard
              year="2016 – 2020"
              title="CS Student"
              desc="Strong foundations in Java, JavaScript & problem solving."
              color="from-indigo-500 to-purple-500"
            />
            <JourneyCard
              year="2021 – 2024"
              title="Frontend Dev · HCLTech"
              desc="Angular SPAs, CRUD apps, enterprise UI systems."
              color="from-purple-500 to-pink-500"
            />
            <JourneyCard
              year="2024 – Present"
              title="Frontend Dev · Subex"
              desc="AI team · scalable Angular · UX focused."
              color="from-green-400 to-emerald-500"
            />
          </div>
        </div>

        {/* ================= SKILLS ================= */}
        <div
          ref={skillsRef}
          className={`transition-all duration-700
            ${skillsIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl font-bold mb-8">Skills I Work With</h2>

          <div className="flex flex-wrap gap-5">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-3 px-5 py-3 rounded-full
                           bg-white/10 border border-white/20
                           hover:bg-indigo-500/30 hover:scale-110
                           hover:shadow-[0_0_20px_rgba(99,102,241,0.8)]
                           transition-all duration-300 cursor-pointer"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  loading="lazy"
                  decoding="async"
                  className="w-6 h-6 invert"
                />
                <span className="text-sm font-semibold">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

/* ================= SUB COMPONENTS ================= */

function StatCard({ value, suffix, label }) {
  return (
    <div className="relative p-6 rounded-2xl bg-white/5 border border-white/10
                    hover:scale-105 transition-all duration-300">
      <div className="absolute inset-0 rounded-2xl blur-xl opacity-70
                      bg-gradient-to-r from-indigo-500 to-pink-500" />
      <div className="relative z-10">
        <h3 className="text-4xl font-extrabold">
          {value}{suffix}
        </h3>
        <p className="text-sm text-gray-300 mt-1">{label}</p>
      </div>
    </div>
  );
}

function JourneyCard({ year, title, desc, color }) {
  return (
    <div className="relative group">
      <div className={`absolute -inset-1 rounded-2xl blur-xl opacity-60
                       bg-gradient-to-r ${color}
                       group-hover:opacity-100 transition`} />
      <div className="relative bg-gray-900 border border-white/10
                      rounded-2xl p-6 h-full
                      group-hover:-translate-y-2 transition-all duration-300">
        <span className="text-sm text-gray-400">{year}</span>
        <h3 className="text-xl font-semibold mt-2">{title}</h3>
        <p className="text-gray-300 mt-3">{desc}</p>
      </div>
    </div>
  );
}

import { useState } from "react";
import contentImg from "../assets/2.png";


const TABS = ["YouTube", "LinkedIn", "Instagram", "Topmate"];

export default function Content() {
  const [activeTab, setActiveTab] = useState("YouTube");

  return (
    <section className="pt-32 pb-28 px-6 text-white max-w-7xl mx-auto">

      {/* HEADER */}
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Content &
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">
            {" "}Knowledge Hub
          </span>
        </h1>
        <p className="text-gray-300 max-w-2xl">
          Explore curated content across platforms focused on frontend
          development, interviews, and career guidance.
        </p>
      </div>

      {/* TABS */}
      <div className="flex gap-4 mb-14">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300
              ${
                activeTab === tab
                  ? "bg-indigo-600 neon:bg-yellow-400 text-white neon:text-black shadow-[0_0_20px_rgba(99,102,241,0.8)]"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* TAB CONTENT */}
      <div className="transition-all duration-500">
        {activeTab === "YouTube" && <YouTube />}
        {activeTab === "LinkedIn" && <LinkedIn />}
        {activeTab === "Instagram" && <Instagram />}
        {activeTab === "Topmate" && <Topmate />}

      </div>

    </section>
  );
}

/* ================= TAB SECTIONS ================= */

function YouTube() {
  const videos = [
    {
      id: "lYGgwjjjpjk",
      title: "24 LPA Dream Job Journey 🚀",
      desc: "A real journey on how to crack high-paying IT jobs with the right mindset and skills.",
    },
    {
      id: "QErpoKKrXSg",
      title: "Fake Experience in IT Jobs ⚠️",
      desc: "An honest discussion about fake experience, risks, and the right way to grow in IT.",
    },
    {
      id: "pyVQG85FDuQ",
      title: "If You Want a Job, Watch This 💡",
      desc: "Clear guidance for freshers on how to approach learning and job preparation.",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {videos.map((video) => (
        <a
          key={video.id}
          href={`https://www.youtube.com/watch?v=${video.id}`}
          target="_blank"
          rel="noreferrer"
          className="relative group block"
        >
          {/* GLOW */}
          <div
            className="absolute -inset-1 rounded-2xl blur-xl opacity-60
                       bg-gradient-to-r from-red-500 to-pink-500
                       group-hover:opacity-100 transition"
          />

          {/* CARD */}
          <div className="relative bg-gray-900 border border-white/10
                          rounded-2xl overflow-hidden
                          group-hover:-translate-y-2
                          transition-all duration-300">

            {/* THUMBNAIL */}
            <div className="relative">
              <img
                src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                alt={video.title}
                className="w-full h-48 object-cover"
              />

              {/* PLAY ICON */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-black/60
                                flex items-center justify-center
                                group-hover:scale-110 transition">
                  ▶
                </div>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
              <p className="text-gray-300 text-sm">{video.desc}</p>
            </div>

          </div>
        </a>
      ))}
    </div>
  );
}



function LinkedIn() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <ContentCard
        title="Frontend Roadmaps"
        desc="Clear learning paths and industry advice."
        link="https://www.linkedin.com/in/madhu-neelapalla-151637131/"
        color="from-blue-500 to-indigo-500"
      />
      <ContentCard
        title="Interview Experiences"
        desc="Real interview insights and preparation strategies."
        link="https://www.linkedin.com/in/madhu-neelapalla-151637131/"
        color="from-indigo-500 to-purple-500"
      />
    </div>
  );
}

function Instagram() {
  const reels = [
    {
      id: "DSxFdSGksfE",
      title: "Companies Don’t Care About Your College 🎓",
      desc: "Why skills, consistency, and mindset matter more than college name.",
      link: "https://www.instagram.com/reel/DSxFdSGksfE/",
    },
    {
      id: "DSm9NF9krzd",
      title: "Best Programming Language for DSA 🤔",
      desc: "Clear explanation on which language to choose for DSA preparation.",
      link: "https://www.instagram.com/reel/DSm9NF9krzd/",
    },
    {
      id: "DRUsjM8kiYO",
      title: "My 24 LPA Dream Job Journey 🚀",
      desc: "Short reel explaining the mindset and journey behind cracking a dream job.",
      link: "https://www.instagram.com/reel/DRUsjM8kiYO/",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {reels.map((reel) => (
        <a
          key={reel.id}
          href={reel.link}
          target="_blank"
          rel="noreferrer"
          className="relative group block h-full"
        >
          {/* NEON GLOW */}
          <div
            className="absolute -inset-1 rounded-2xl blur-xl opacity-60
                       bg-gradient-to-r from-pink-500 to-purple-500
                       group-hover:opacity-100 transition"
          />

          {/* CARD */}
          <div
            className="relative bg-gray-900 border border-white/10
                       rounded-2xl overflow-hidden
                       h-full flex flex-col
                       group-hover:-translate-y-2
                       transition-all duration-300"
          >

            {/* THUMBNAIL – FIXED HEIGHT */}
            <div
              className="relative h-48 flex-shrink-0
                         bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-600
                         flex items-center justify-center text-white font-bold"
            >
              Instagram Reel

              {/* PLAY ICON */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-14 h-14 rounded-full bg-black/60
                             flex items-center justify-center
                             group-hover:scale-110 transition"
                >
                  ▶
                </div>
              </div>
            </div>

            {/* CONTENT – FLEXIBLE */}
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-lg font-semibold mb-2">
                {reel.title}
              </h3>

              <p className="text-gray-300 text-sm flex-1">
                {reel.desc}
              </p>

              <span className="mt-4 text-sm font-semibold text-pink-400">
                View →
              </span>
            </div>

          </div>
        </a>
      ))}
    </div>
  );
}

function Topmate() {
  const sessions = [
    {
      title: "College Students Only – 1:1 🎓",
      desc: "Quick call with special discount. College ID mandatory.",
      duration: "Video Meeting · 15 mins",
      price: "₹69",
      original: "₹299",
      badge: "Popular",
    },
    {
      title: "Fresher Mock Interview",
      desc: "Real-time frontend mock interview with feedback.",
      duration: "Video Meeting · 30 mins",
      price: "₹129",
      original: "₹299",
    },
    {
      title: "Career Guidance",
      desc: "Clear your career confusion and get direction.",
      duration: "Video Meeting · 20 mins",
      price: "₹149",
      original: "₹349",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {sessions.map((session, idx) => (
        <a
          key={idx}
          href="https://topmate.io/madhu_neelapalla"
          target="_blank"
          rel="noreferrer"
          className="relative group block h-full"
        >
          {/* NEON GLOW */}
          <div className="absolute -inset-1 rounded-2xl blur-xl opacity-60
                          bg-gradient-to-r from-indigo-500 to-pink-500
                          group-hover:opacity-100s̶ transition" />

          {/* CARD */}
          <div className="relative bg-gray-900 border border-white/10
                          rounded-2xl overflow-hidden
                          h-full flex flex-col
                          group-hover:-translate-y-2
                          transition-all duration-300">

            {/* IMAGE HEADER */}
            <div className="relative h-49 flex-shrink-0
                            bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900
                            flex items-center justify-center p-3">
              <img
                src={contentImg}
                alt="Topmate Session"
                className="w-full h-full object-contain rounded-lg"
              />

              {session.badge && (
                <span className="absolute top-3 right-3 text-xs font-bold px-3 py-1
                                 rounded-full bg-yellow-400 text-black">
                  {session.badge}
                </span>
              )}
            </div>

            {/* CONTENT */}
            <div className="p-5 flex flex-col flex-1">
              <p className="text-sm text-gray-400">{session.duration}</p>

              <h3 className="text-lg font-semibold mt-2">
                {session.title}
              </h3>

              <p className="text-gray-300 text-sm flex-1">
                {session.desc}
              </p>

              <div className="mt-4 flex items-center gap-3">
                <span className="text-2xl font-extrabold text-indigo-400">
                  {session.price}
                </span>
                <span className="line-through text-gray-400 text-sm">
                  {session.original}
                </span>
              </div>

              <span className="mt-4 text-sm font-semibold text-indigo-400">
                Book on Topmate →
              </span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}





/* ================= REUSABLE CARD ================= */

function ContentCard({ title, desc, link, color }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="relative group block"
    >
      {/* GLOW */}
      <div
        className={`absolute -inset-1 rounded-2xl blur-xl opacity-60
                    bg-gradient-to-r ${color}
                    group-hover:opacity-100 transition`}
      />

      {/* CARD */}
      <div className="relative bg-gray-900 border border-white/10
                      rounded-2xl p-6 h-full
                      group-hover:-translate-y-2
                      transition-all duration-300">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 text-sm">{desc}</p>

        <span className="inline-block mt-4 text-sm font-semibold text-indigo-400">
          View →
        </span>
      </div>
    </a>
  );
}

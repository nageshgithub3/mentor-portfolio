import { useState } from "react";
import serviceImg from "../assets/2.png";

export default function Services() {
  // 1️⃣ User type state
  const [userType, setUserType] = useState("college");

  // 2️⃣ Services data
  const services = [
    {
      title: "College Students Only – 1:1 🎓",
      subtitle: "Quick call · Special discount · ID mandatory",
      duration: "Video Meeting · 15 mins",
      price: 69,
      original: 299,
      audience: "college",
    },
    {
      title: "Fresher Mock Interview",
      subtitle: "Real interview simulation",
      duration: "Video Meeting · 30 mins",
      price: 129,
      original: 299,
      audience: "fresher",
    },
    {
      title: "Career Guidance",
      subtitle: "Confusion → clarity",
      duration: "Video Meeting · 20 mins",
      price: 149,
      original: 349,
      audience: "fresher",
    },
    {
      title: "Job Roadmap (College / 1–4 Yrs)",
      subtitle: "Frontend career path",
      duration: "Video Meeting · 25 mins",
      price: 189,
      original: 399,
      audience: "college",
    },
    {
      title: "16–24 LPA Frontend Mock Interview",
      subtitle: "Advanced interview prep",
      duration: "Video Meeting · 30 mins",
      price: 199,
      original: 399,
      audience: "experienced",
    },
    {
      title: "Quick Chat",
      subtitle: "Instant doubt clearing",
      duration: "Video Meeting · 15 mins",
      price: 99,
      audience: "college",
    },
    {
      title: "Fresher Resume Review",
      subtitle: "ATS + recruiter-friendly",
      duration: "Video Meeting · 20 mins",
      price: 149,
      original: 299,
      audience: "fresher",
    },
    {
      title: "Job Interview Prep & Tips",
      subtitle: "Confidence booster",
      duration: "Video Meeting · 25 mins",
      price: 149,
      original: 499,
      audience: "experienced",
    },
    {
      title: "24 LPA Frontend Job Tips",
      subtitle: "Dream job preparation",
      duration: "Video Meeting · 25 mins",
      price: 199,
      original: 499,
      audience: "experienced",
    },
  ];

  return (
    <section className="pt-32 pb-28 px-6 text-white max-w-7xl mx-auto">

      {/* HEADER */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
        1:1 Mentorship &
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">
          {" "}Topmate Sessions
        </span>
      </h1>

      <p className="text-gray-300 mb-10 max-w-2xl">
        Select your profile to get recommended sessions.
      </p>

      {/* 3️⃣ USER TYPE BUTTONS */}
      <div className="flex gap-4 mb-14">
        {["college", "fresher", "experienced"].map((type) => (
          <button
            key={type}
            onClick={() => setUserType(type)}
            className={`px-6 py-2 rounded-full font-semibold capitalize
              ${
                userType === type
                  ? "bg-indigo-600 text-white"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* SERVICES GRID */}
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <ServiceCard
            key={idx}
            {...service}
            recommended={service.audience === userType}
          />
        ))}
      </div>

    </section>
  );
}

/* ================= CARD ================= */

function ServiceCard({
  title,
  subtitle,
  duration,
  price,
  original,
  recommended,
}) {
  return (
    <a
      href="https://topmate.io/madhu_neelapalla"
      target="_blank"
      rel="noreferrer"
      className="relative group block h-full"
    >
      {/* GLOW */}
      <div className="absolute -inset-1 rounded-2xl blur-xl opacity-60
                      bg-gradient-to-r from-indigo-500 to-pink-500
                      group-hover:opacity-100 transition" />

      {/* CARD */}
      <div className="relative bg-gray-900 border border-white/10
                      rounded-2xl overflow-hidden
                      h-full flex flex-col
                      group-hover:-translate-y-2 transition">

        {/* RECOMMENDED BADGE */}
        {recommended && (
          <span className="absolute top-3 left-3 text-xs font-bold px-3 py-1
                           rounded-full bg-emerald-400 text-black">
            Recommended for You
          </span>
        )}

        {/* IMAGE */}
        <div className="h-55 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900
                        flex items-center justify-center p-3">
          <img
            src={serviceImg}
            alt="Topmate"
            className="w-full h-full object-contain rounded-lg"
          />
        </div>

        {/* CONTENT */}
        <div className="p-5 flex flex-col flex-1">
          <p className="text-sm text-gray-400">{duration}</p>

          <h3 className="text-lg font-semibold mt-2">{title}</h3>
          <p className="text-gray-300 text-sm flex-1">{subtitle}</p>

          <div className="mt-4 flex items-center gap-3">
            <span className="text-2xl font-extrabold text-indigo-400">
              ₹{price}
            </span>
            {original && (
              <span className="line-through text-gray-400 text-sm">
                ₹{original}
              </span>
            )}
          </div>

          <button className="mt-5 w-full py-3 rounded-full font-bold
                             bg-indigo-600 text-white hover:scale-105 transition">
            Book on Topmate
          </button>
        </div>

      </div>
    </a>
  );
}

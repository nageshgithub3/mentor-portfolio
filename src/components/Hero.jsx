import NeonStat from "./NeonStat";
import heroImg from "../assets/1.jpg"; // ✅ IMAGE IMPORT

export default function Hero() {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">

      {/* Neon Background Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px]
                      bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                      opacity-30 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Helping Freshers <br />
            <span className="text-transparent bg-clip-text
              bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Crack Frontend Interviews
            </span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg max-w-xl">
            Learn frontend development, interview strategies, and career growth
            directly from real industry experience.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="https://topmate.io/madhu_neelapalla"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 rounded-full font-bold
                bg-indigo-600 neon:bg-yellow-400
                text-white neon:text-black
                hover:scale-110 hover:shadow-[0_0_30px_rgba(255,255,0,0.9)]
                transition-all duration-300"
            >
              Book 1:1
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE + STATS */}
        <div className="flex flex-col items-center gap-8">

          {/* IMAGE WITH NEON RING */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full
                            bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                            blur-xl opacity-70" />
            <img
              src={heroImg}
              alt="Mentor"
              className="relative w-48 h-48 md:w-60 md:h-60 object-cover rounded-full
                         border-4 border-white/20 shadow-xl"
            />
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 gap-6">
            <a href="https://www.youtube.com/@JVM-JobVithMadhu" target="_blank" rel="noreferrer">
              <NeonStat value="6K+" label="YouTube Subscribers" color="from-red-500 to-pink-500" />
            </a>

            <a href="https://www.linkedin.com/in/madhu-neelapalla-151637131/" target="_blank" rel="noreferrer">
              <NeonStat value="400+" label="LinkedIn Followers" color="from-blue-500 to-indigo-500" />
            </a>

            <a href="https://www.instagram.com/jvmmadhuofficial/?igsh=MXE0amd2cHdxdjNjYg%3D%3D" target="_blank" rel="noreferrer">
              <NeonStat value="250+" label="Instagram Followers" color="from-pink-500 to-purple-500" />
            </a>

            <a href="https://topmate.io/madhu_neelapalla" target="_blank" rel="noreferrer">
              <NeonStat value="3+ Years" label="Industry Experience" color="from-green-400 to-emerald-500" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

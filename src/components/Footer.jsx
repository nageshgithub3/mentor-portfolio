export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">

          {/* BRAND */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-extrabold">
              Mentor
              <span className="text-indigo-400 neon:text-yellow-400">Hub</span>
            </h2>
            <p className="text-gray-400 text-sm mt-2 max-w-sm">
              Helping students and freshers crack frontend interviews
              and build high-paying careers.
            </p>
          </div>

          {/* CTA + SOCIAL */}
          <div className="flex flex-col items-center md:items-end gap-6">

            {/* BOOK 1:1 CTA */}
            <a
              href="https://topmate.io/madhu_neelapalla"
              target="_blank"
              rel="noreferrer"
              className="relative group"
            >
              {/* GLOW */}
              <div
                className="absolute -inset-1 rounded-full blur-lg opacity-70
                           bg-gradient-to-r from-indigo-500 to-pink-500
                           group-hover:opacity-100 transition"
              />

              {/* BUTTON */}
              <div
                className="relative px-8 py-3 rounded-full font-bold
                           bg-indigo-600 neon:bg-yellow-400
                           text-white neon:text-black
                           hover:scale-110 transition-all duration-300"
              >
                Book 1:1 Session
              </div>
            </a>

            {/* SOCIAL LINKS */}
            <div className="flex gap-4">
              <SocialButton
                label="YouTube"
                link="https://www.youtube.com/@JVM-JobVithMadhu"
                gradient="from-red-500 to-pink-500"
                icon="▶"
              />
              <SocialButton
                label="Instagram"
                link="https://www.instagram.com/jvmmadhuofficial/"
                gradient="from-pink-500 to-purple-500"
                icon="📸"
              />
              <SocialButton
                label="LinkedIn"
                link="https://www.linkedin.com/in/madhu-neelapalla-151637131/"
                gradient="from-blue-500 to-indigo-500"
                icon="💼"
              />
            </div>

          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-10 border-t border-white/10" />

        {/* BOTTOM SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} MentorHub. All rights reserved.
          </p>
          <p>
            Built with Nagesh❤️ using Recent Technologies
          </p>
        </div>

      </div>
    </footer>
  );
}

/* ================= SOCIAL BUTTON ================= */

function SocialButton({ label, link, gradient, icon }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="relative group"
    >
      {/* GLOW */}
      <div
        className={`absolute -inset-1 rounded-full blur-lg opacity-60
                    bg-gradient-to-r ${gradient}
                    group-hover:opacity-100 transition`}
      />

      {/* BUTTON */}
      <div
        className="relative flex items-center gap-2 px-5 py-2 rounded-full
                   bg-gray-900 border border-white/10
                   text-sm font-semibold
                   group-hover:scale-105 transition-all duration-300"
      >
        <span>{icon}</span>
        <span>{label}</span>
      </div>
    </a>
  );
}

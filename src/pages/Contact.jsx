export default function Contact() {
  return (
    <section className="pt-32 pb-28 px-6 text-white max-w-6xl mx-auto">

      {/* HEADER */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Get in
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">
            {" "}Touch
          </span>
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Have questions about interviews, frontend roadmap, or mentorship?
          Reach out directly — I personally respond.
        </p>
      </div>

      {/* CONTACT CARDS */}
      <div className="grid md:grid-cols-3 gap-8">

        {/* WHATSAPP */}
        <ContactCard
  title="Instagram"
  desc="Quick replies & content updates"
  action="Message on Instagram"
  link="https://www.instagram.com/jvmmadhuofficial/"
  gradient="from-pink-400 to-purple-500"
  icon="📸"
/>


        {/* EMAIL */}
        <ContactCard
  title="Email"
  desc="Detailed questions & collaborations"
  action="Send Email"
  link="https://mail.google.com/mail/?view=cm&fs=1&to=askjvmchannel@gmail.com&su=Mentorship%20Inquiry"
  gradient="from-indigo-400 to-blue-500"
  icon="📧"
/>


        {/* TOPMATE */}
        <ContactCard
          title="1:1 Mentorship"
          desc="Book a personal video session"
          action="Book on Topmate"
          link="https://topmate.io/madhu_neelapalla"
          gradient="from-pink-400 to-purple-500"
          icon="🎥"
        />

      </div>

      {/* FOOTER NOTE */}
      <p className="mt-16 text-center text-sm text-gray-400">
        I usually respond within 24 hours. For urgent queries, prefer Topmate.
      </p>

    </section>
  );
}

/* ================= CONTACT CARD ================= */

function ContactCard({ title, desc, action, link, gradient, icon }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="relative group block h-full"
    >
      {/* NEON GLOW */}
      <div
        className={`absolute -inset-1 rounded-2xl blur-xl opacity-60
                    bg-gradient-to-r ${gradient}
                    group-hover:opacity-100 transition`}
      />

      {/* CARD */}
      <div
        className="relative bg-gray-900 border border-white/10
                   rounded-2xl p-8 h-full flex flex-col items-center text-center
                   group-hover:-translate-y-2
                   transition-all duration-300"
      >
        {/* ICON */}
        <div className="text-5xl mb-4">{icon}</div>

        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 text-sm mb-6">{desc}</p>

        <span
          className={`mt-auto px-6 py-3 rounded-full font-bold
                      bg-gradient-to-r ${gradient}
                      text-black
                      group-hover:scale-105 transition-all duration-300`}
        >
          {action}
        </span>
      </div>
    </a>
  );
}

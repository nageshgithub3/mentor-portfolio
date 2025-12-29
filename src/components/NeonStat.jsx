export default function NeonStat({ value, label, color }) {
  return (
    <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur
                    border border-white/10
                    hover:scale-105 transition-all duration-300">
      <div
        className={`absolute inset-0 rounded-2xl blur-xl opacity-70
                    bg-gradient-to-r ${color}`}
      />

      <div className="relative z-10">
        <h3 className="text-3xl font-extrabold text-white">{value}</h3>
        <p className="text-sm text-gray-300 mt-1">{label}</p>
      </div>
    </div>
  );
}

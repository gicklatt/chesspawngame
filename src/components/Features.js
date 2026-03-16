const features = [
  {
    icon: "\u265C",
    title: "400 Handcrafted Levels",
    description:
      "Progress through 12 difficulty tiers from Tutorial to Final Boss with walls, blocked cells, and multi-card strategies.",
  },
  {
    icon: "\u2605",
    title: "Daily Challenges",
    description:
      "A new puzzle every day from the hardest level pool. Complete it for bonus rewards and keep your streak alive.",
  },
  {
    icon: "\u265B",
    title: "Weekly Events",
    description:
      "Rotating events like Knight Week, Bishop Blitz, Royal Rush and more with coin multipliers and special filters.",
  },
  {
    icon: "\u2666",
    title: "12 Board Themes",
    description:
      "Classic, Midnight, Ocean, Forest, Ember, Royal, Gold, Marble, Obsidian, Cherry, Arctic, and Neon.",
  },
  {
    icon: "\u2738",
    title: "AI-Powered Hints",
    description:
      "Smart hint system highlights the optimal move so you can learn and improve your strategy.",
  },
  {
    icon: "\u26A1",
    title: "Combo System",
    description:
      "Chain consecutive captures for combo bonuses. Master the combo system to earn 3 stars on every level.",
  },
  {
    icon: "\u265E",
    title: "4 Piece Sets",
    description:
      "Unique art styles for your chess pieces. Unlock everything with in-game coins \u2014 no paywalls.",
  },
  {
    icon: "\u2734",
    title: "Play Offline",
    description:
      "No internet required for puzzle gameplay. Perfect for commutes, travel, or anywhere without WiFi.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-gray-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Why You&apos;ll Love ChessPawn
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            A chess puzzle experience like no other. Strategy, creativity, and
            fun packed into every level.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-deft-50 text-2xl text-deft-600 transition-colors group-hover:bg-deft-500 group-hover:text-white">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { value: "400+", label: "Levels" },
            { value: "12", label: "Themes" },
            { value: "10", label: "Languages" },
            { value: "4", label: "Piece Sets" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-extrabold text-deft-600 sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm font-medium text-gray-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

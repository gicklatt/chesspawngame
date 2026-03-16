const steps = [
  {
    step: "01",
    icon: "\u265A",
    title: "Start at Your Position",
    description:
      "Each level presents a grid board with pawns scattered across it. You begin at a fixed starting position on the board.",
  },
  {
    step: "02",
    icon: "\u2660",
    title: "Use Movement Cards",
    description:
      "Receive movement cards \u2014 Knight, Bishop, Rook, Queen, or King \u2014 each with a set number of moves. Choose wisely which card to play.",
  },
  {
    step: "03",
    icon: "\u2605",
    title: "Capture All Pawns",
    description:
      "Move across the board to capture every pawn in the fewest moves possible. Chain combos and earn up to 3 stars per level.",
  },
];

export default function HowToPlay() {
  return (
    <section id="how-to-play" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            How to Play
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Simple to learn, challenging to master. Here&apos;s how ChessPawn works.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((item, index) => (
            <div key={item.step} className="relative text-center">
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-16 hidden h-px w-full translate-x-1/2 bg-gradient-to-r from-deft-200 to-transparent md:block" />
              )}

              <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-deft-500 to-deft-700 text-4xl text-white shadow-lg">
                {item.icon}
                <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-gold-400 text-xs font-extrabold text-deft-900">
                  {item.step}
                </span>
              </div>

              <h3 className="mb-3 text-xl font-bold text-gray-900">
                {item.title}
              </h3>
              <p className="mx-auto max-w-xs text-sm leading-relaxed text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

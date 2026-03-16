import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-deft-800 via-deft-700 to-deft-600 pb-20 pt-32 md:pb-32 md:pt-40">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-deft-500/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-gold-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-sm font-medium text-gold-300">
              <span>&#9822;</span>
              Chess Puzzle Game
            </div>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Think like a{" "}
              <span className="text-gold-400">chess master.</span>
              <br />
              Solve like a{" "}
              <span className="text-gold-400">puzzle genius.</span>
            </h1>

            <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-deft-100/80 lg:mx-0">
              ChessPawn is a unique chess puzzle game that challenges you to capture
              all pawns using chess piece movement cards. Plan your path, chain
              combos, and earn up to 3 stars on every level.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#download"
                className="group flex items-center gap-3 rounded-2xl bg-white px-7 py-4 shadow-xl transition-all hover:-translate-y-0.5 hover:shadow-2xl"
              >
                <svg
                  className="h-8 w-8"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] font-medium text-gray-500">
                    Download on the
                  </div>
                  <div className="text-lg font-semibold leading-tight text-gray-900">
                    App Store
                  </div>
                </div>
              </a>

              <a
                href="#download"
                className="group flex items-center gap-3 rounded-2xl bg-white px-7 py-4 shadow-xl transition-all hover:-translate-y-0.5 hover:shadow-2xl"
              >
                <svg
                  className="h-8 w-8"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3.18 23.76c-.42-.24-.76-.72-.76-1.32V1.56c0-.6.34-1.08.76-1.32l11.06 11.76L3.18 23.76zm14.28-8.5L5.5 22.32l9.08-9.64 2.88 2.58zm1.89-1.05l-2.3-1.29-3.1 3.29 3.1 3.29 2.3-1.29c.82-.46 1.32-1.12 1.32-1.93V16.3c0-.81-.5-1.53-1.32-1.93v-.16zM5.5 1.68l11.96 7.06-2.88 2.58L5.5 1.68z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] font-medium text-gray-500">
                    GET IT ON
                  </div>
                  <div className="text-lg font-semibold leading-tight text-gray-900">
                    Google Play
                  </div>
                </div>
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-deft-200/60 lg:justify-start">
              <span className="flex items-center gap-1.5">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Free to play
              </span>
              <span className="flex items-center gap-1.5">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                No paywalls
              </span>
              <span className="flex items-center gap-1.5">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Play offline
              </span>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-br from-gold-400/20 to-transparent blur-2xl" />
              <div className="relative w-[260px] overflow-hidden rounded-[2.5rem] border-[6px] border-deft-900/50 bg-deft-900 shadow-2xl sm:w-[280px]">
                <Image
                  src="/screenshots/gameplay.png"
                  alt="ChessPawn Chess Puzzle - Gameplay"
                  width={280}
                  height={607}
                  className="h-auto w-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

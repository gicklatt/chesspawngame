export default function DownloadCTA() {
  return (
    <section
      id="download"
      className="relative overflow-hidden bg-gradient-to-br from-deft-700 via-deft-600 to-deft-500 py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-gold-400/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-deft-400/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-sm font-medium text-gold-300">
          Free to Play
        </div>

        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
          Ready to Challenge Your Mind?
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-lg text-deft-100/70">
          Download ChessPawn and start solving 400 handcrafted chess puzzles today.
          Available on iOS and Android.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://apps.apple.com/us/app/chesspawn/id6760585822"
            target="_blank"
            rel="noopener noreferrer"
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
            href="https://play.google.com/store/apps/details?id=com.gicklatt.chesspawn"
            target="_blank"
            rel="noopener noreferrer"
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

        <p className="mt-8 text-sm text-deft-200/50">
          Available in English, Turkish, German, Russian, Spanish, Hindi,
          Chinese, French, Arabic, and Portuguese.
        </p>
      </div>
    </section>
  );
}

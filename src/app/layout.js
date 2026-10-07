import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://gicklatt.github.io/chesspawngame/"),
  alternates: { canonical: "https://gicklatt.github.io/chesspawngame/" },
  title: "ChessPawn - Chess Puzzle Game",
  description:
    "Capture every pawn using chess movement cards. Explore 400 puzzles, daily challenges, 12 board themes and six colorful piece collections. Play on iOS and Android.",
  keywords:
    "chess, puzzle, strategy, brain, logic, board game, daily challenge, pawn, capture, move, ChessPawn",
  openGraph: {
    title: "ChessPawn - Chess Puzzle Game",
    description:
      "Capture all pawns using chess movement cards. 400 puzzles, daily challenges, 12 themes and six piece collections. Free to play!",
    url: "https://gicklatt.github.io/chesspawngame/",
    images: [{ url: "https://gicklatt.github.io/chesspawngame/social-preview.png", width: 1200, height: 630, alt: "ChessPawn chess puzzle game" }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChessPawn - Chess Puzzle Game",
    description:
      "Think like a chess master. Solve like a puzzle genius. 400 puzzles, daily challenges and six colorful piece collections.",
    images: ["https://gicklatt.github.io/chesspawngame/social-preview.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}

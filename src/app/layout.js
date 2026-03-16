import "./globals.css";

export const metadata = {
  title: "ChessPawn - Chess Puzzle Game",
  description:
    "Think like a chess master. Solve like a puzzle genius. A unique chess puzzle game with 400 handcrafted levels, daily challenges, weekly events, and 12 board themes.",
  keywords:
    "chess, puzzle, strategy, brain, logic, board game, daily challenge, pawn, capture, move, ChessPawn",
  openGraph: {
    title: "ChessPawn - Chess Puzzle Game",
    description:
      "Capture all pawns using chess movement cards. 400 levels, daily challenges, weekly events & 12 themes. Free to play!",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChessPawn - Chess Puzzle Game",
    description:
      "Think like a chess master. Solve like a puzzle genius. 400 handcrafted levels, daily challenges & more.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}

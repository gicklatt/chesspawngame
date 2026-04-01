import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="text-2xl">&#9822;</span>
            <span className="text-xl font-extrabold tracking-tight text-deft-700">
              ChessPawn
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link
              href="/privacy"
              className="text-gray-600 transition-colors hover:text-deft-600"
            >
              Privacy Policy
            </Link>
            <a
              href="mailto:gicklatt@gmail.com"
              className="text-gray-600 transition-colors hover:text-deft-600"
            >
              Support
            </a>
            <a
              href="#features"
              className="text-gray-600 transition-colors hover:text-deft-600"
            >
              Features
            </a>
          </nav>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} ChessPawn. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

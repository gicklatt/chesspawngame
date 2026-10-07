import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - ChessPawn Chess Puzzle Game",
  description: "Privacy Policy for ChessPawn Chess Puzzle Game",
  alternates: { canonical: "https://gicklatt.github.io/chesspawngame/privacy/" },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-100">
        <div className="mx-auto max-w-4xl px-6 py-4">
          <Link
            href="/"
            className="text-deft-600 hover:text-deft-700 font-semibold transition-colors"
          >
            &larr; Back to Home
          </Link>
        </div>
      </nav>

      <article className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="mb-2 text-4xl font-bold text-gray-900">
          Privacy Policy
        </h1>
        <p className="mb-10 text-sm text-gray-500">
          Last updated: October 7, 2026
        </p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              1. Introduction
            </h2>
            <p>
              This Privacy Policy describes how ChessPawn (&quot;we&quot;,
              &quot;our&quot;, or &quot;us&quot;) collects, uses, and shares
              information when you use our mobile application ChessPawn - Chess
              Puzzle Game (the &quot;App&quot;), published by Gicklatt / Akif Sarı.
              This policy explains local game storage and data processed by
              the advertising and consent services used in version 1.1.0.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              2. Information We Collect
            </h2>

            <h3 className="mb-2 mt-4 text-lg font-medium text-gray-800">
              2.1 Information Collected Automatically
            </h3>
            <ul className="ml-6 list-disc space-y-2">
              <li>
                <strong>Device Information:</strong> Device type, operating
                system version, unique device identifiers, and mobile network
                information.
              </li>
              <li>
                <strong>Advertising interactions:</strong> Ad impressions,
                clicks, video views, and related app or device interactions
                processed by Google&apos;s advertising SDK.
              </li>
              <li>
                <strong>Diagnostics:</strong> Crash reports, technical details,
                and performance data processed by the advertising SDK. We do
                not use Firebase Analytics or upload your level progress to
                an analytics service.
              </li>
            </ul>

            <h3 className="mb-2 mt-4 text-lg font-medium text-gray-800">
              2.2 Information We Do Not Collect
            </h3>
            <ul className="ml-6 list-disc space-y-2">
              <li>The game does not ask for your name, email address, or phone number.</li>
              <li>We do not collect your precise location data.</li>
              <li>
                We do not require account creation to use the App.
              </li>
            </ul>
            <p className="mt-3">
              If you contact support by email, we receive the information you
              choose to share and use it to respond to your request.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              3. Advertising
            </h2>
            <p>
              Our App displays advertisements provided by Google AdMob. AdMob
              processes data to deliver, measure, and secure advertisements,
              including fraud prevention. ChessPawn requests non-personalized
              ads; these ads still involve data processing. This includes:
            </p>
            <ul className="ml-6 mt-2 list-disc space-y-2">
              <li>Device and app identifiers; the Android advertising ID when available</li>
              <li>Device information and IP address, which may be used to infer approximate location</li>
              <li>Ad interaction data (impressions, clicks)</li>
              <li>Crash, diagnostic, and performance data</li>
            </ul>
            <p className="mt-3">
              The app does not request App Tracking Transparency permission or
              access to IDFA on iOS. Where required, Google&apos;s User Messaging
              Platform presents consent choices before ads are requested. You
              can revisit available choices under Settings → Privacy choices.
              Device settings also let you restrict or reset advertising IDs.
              For more information about how Google uses data, please
              visit{" "}
              <a
                href="https://policies.google.com/privacy"
                className="text-deft-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google&apos;s Privacy Policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              4. Rewarded Ads
            </h2>
            <p>
              The App offers optional rewarded video advertisements that provide
              in-game coins or optional gameplay helpers when completed.
              Watching rewarded ads is entirely
              voluntary and not required to play the game.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              5. Data Storage
            </h2>
            <p>
              All game progress data (levels completed, coins earned, settings,
              and preferences) is stored locally on your device. We do not store
              your game data on external servers. If you uninstall the App, your
              local game data will be deleted, subject to any device backup
              you maintain. Advertising and consent data may be transmitted
              to Google and its advertising partners and retained under their
              policies. We do not control their retention periods.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              6. Third-Party Services
            </h2>
            <p>Our App uses the following third-party services:</p>
            <ul className="ml-6 mt-2 list-disc space-y-2">
              <li>
                <strong>Google AdMob:</strong> For displaying advertisements.
              </li>
              <li>
                <strong>Google User Messaging Platform:</strong> For managing
                advertising consent and privacy choices. It processes device
                information, approximate location from IP address, interaction
                data, and technical performance information to operate consent
                messages.
              </li>
            </ul>
            <p className="mt-3">
              Each of these services has its own privacy policy governing the
              data they collect.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              7. Children&apos;s Privacy
            </h2>
            <p>
              ChessPawn is intended for users aged 13 and older and is not
              directed to children under 13. Store content ratings describe the
              game&apos;s content and are different from its intended audience.
              We do not knowingly collect personal information from children
              under 13. Contact us if you believe such information has been
              provided. Advertising requests use Google&apos;s G maximum content
              rating.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              8. Data Security
            </h2>
            <p>
              We take reasonable measures to protect the information collected
              through the App. However, no method of electronic storage is 100%
              secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              9. Your Rights
            </h2>
            <p>You have the right to:</p>
            <ul className="ml-6 mt-2 list-disc space-y-2">
              <li>Manage available advertising consent choices in the app&apos;s Settings</li>
              <li>Reset your advertising identifier</li>
              <li>Reset level progress in Settings or delete local app data by uninstalling</li>
              <li>
                Request information about data collected by contacting us
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              10. Offline Functionality
            </h2>
            <p>
              The core puzzle gameplay functions offline without an internet
              connection. Internet is only required for displaying
              advertisements and online consent messages. Daily puzzles and
              game progress are generated or stored on your device; the app
              does not synchronize them with a game server.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              11. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the &quot;Last updated&quot; date.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              12. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <p className="mt-2">
              <a
                href="mailto:gicklatt@gmail.com"
                className="text-deft-600 underline"
              >
                gicklatt@gmail.com
              </a>
            </p>
          </section>
        </div>
      </article>

      <footer className="border-t border-gray-100 py-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} ChessPawn. All rights reserved.
      </footer>
    </div>
  );
}

import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - ChessPawn Chess Puzzle Game",
  description: "Privacy Policy for ChessPawn Chess Puzzle Game",
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
          Last updated: March 16, 2026
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
              Puzzle Game (the &quot;App&quot;). By using the App, you agree to
              the collection and use of information in accordance with this
              policy.
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
                <strong>Usage Data:</strong> Game progress, levels completed,
                scores, achievements, and in-app activity.
              </li>
              <li>
                <strong>Analytics Data:</strong> App usage patterns, session
                duration, crash reports, and performance data.
              </li>
            </ul>

            <h3 className="mb-2 mt-4 text-lg font-medium text-gray-800">
              2.2 Information We Do Not Collect
            </h3>
            <ul className="ml-6 list-disc space-y-2">
              <li>We do not collect your name, email address, or phone number.</li>
              <li>We do not collect your precise location data.</li>
              <li>
                We do not require account creation to use the App.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              3. Advertising
            </h2>
            <p>
              Our App displays advertisements provided by Google AdMob. AdMob
              may collect and use certain data to provide personalized
              advertisements. This includes:
            </p>
            <ul className="ml-6 mt-2 list-disc space-y-2">
              <li>Advertising identifiers (IDFA on iOS, GAID on Android)</li>
              <li>Device information and IP address</li>
              <li>Ad interaction data (impressions, clicks)</li>
            </ul>
            <p className="mt-3">
              You can opt out of personalized advertising through your device
              settings. For more information about how Google uses data, please
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
              in-game coins when viewed. Watching rewarded ads is entirely
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
              local game data will be deleted.
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
                <strong>Firebase Analytics:</strong> For understanding app usage
                and improving user experience.
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
              ChessPawn is rated 4+ (iOS) / Everyone (Android). We do not knowingly
              collect personal information from children. The game does not
              require any personal data to play. Advertisements shown comply
              with applicable regulations for family-friendly content.
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
              <li>Opt out of personalized advertising via device settings</li>
              <li>Reset your advertising identifier</li>
              <li>
                Delete all local data by uninstalling the App
              </li>
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
              advertisements, syncing daily challenges, and accessing weekly
              events.
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

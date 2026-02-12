import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Cookie Policy for MyFoodFit - information about how we use cookies and similar technologies.",
  alternates: {
    canonical: "/cookies",
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="section-spacing">
      <section className="card-primary rounded-2xl border border-zinc-200 bg-white">
        <p className="text-sm font-medium text-zinc-500">
          Last updated: February 2025
        </p>
        <h1 className="page-title mt-2 sm:mt-3">Cookie Policy</h1>
        <p className="body-text mt-4 max-w-3xl text-zinc-600 sm:mt-6">
          This Cookie Policy explains how Food Signal Ltd ("we", "us", "our")
          uses cookies and similar technologies on the MyFoodFit website
          (myfoodfit.co). This policy should be read alongside our{" "}
          <a
            className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
            href="/privacy"
          >
            Privacy Policy
          </a>
          .
        </p>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">What Are Cookies?</h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          Cookies are small text files that are stored on your device (computer,
          tablet, or mobile) when you visit a website. They are widely used to
          make websites work more efficiently and to provide information to
          website owners.
        </p>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          Similar technologies include web beacons, pixels, and local storage,
          which function in comparable ways.
        </p>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">How We Use Cookies</h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          We use cookies for the following purposes:
        </p>

        <div className="mt-4 space-y-4 sm:mt-6 sm:space-y-6">
          <div>
            <p className="subsection-header">Essential cookies</p>
            <p className="body-text mt-2 text-zinc-600 sm:mt-3">
              These cookies are necessary for the website to function properly.
              They enable core functionality such as security, network
              management, and accessibility. You cannot opt out of these cookies
              as the website would not function without them.
            </p>
          </div>

          <div>
            <p className="subsection-header">Analytics cookies</p>
            <p className="body-text mt-2 text-zinc-600 sm:mt-3">
              These cookies help us understand how visitors interact with our
              website by collecting and reporting information anonymously. This
              helps us improve the website experience. We only use analytics
              cookies with your consent.
            </p>
          </div>

          <div>
            <p className="subsection-header">Preference cookies</p>
            <p className="body-text mt-2 text-zinc-600 sm:mt-3">
              These cookies allow the website to remember choices you make (such
              as your preferred language or region) and provide enhanced, more
              personal features.
            </p>
          </div>
        </div>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">Cookies We Use</h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          The following table lists the cookies used on our website:
        </p>

        <div className="mt-4 overflow-x-auto sm:mt-6">
          <table className="body-text w-full text-left text-zinc-600">
            <thead>
              <tr className="border-b border-zinc-200">
                <th className="pb-3 pr-4 font-medium text-zinc-900">Name</th>
                <th className="pb-3 pr-4 font-medium text-zinc-900">Purpose</th>
                <th className="pb-3 pr-4 font-medium text-zinc-900">Type</th>
                <th className="pb-3 font-medium text-zinc-900">Duration</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200">
              <tr>
                <td className="py-3 pr-4">cookie_consent</td>
                <td className="py-3 pr-4">
                  Stores your cookie preferences
                </td>
                <td className="py-3 pr-4">Essential</td>
                <td className="py-3">1 year</td>
              </tr>
              <tr>
                <td className="py-3 pr-4">session_id</td>
                <td className="py-3 pr-4">
                  Maintains your session state
                </td>
                <td className="py-3 pr-4">Essential</td>
                <td className="py-3">Session</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="body-text mt-4 text-zinc-500 sm:mt-6">
          Note: The MyFoodFit mobile app does not use cookies. This policy
          applies only to the myfoodfit.co website.
        </p>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">Third-Party Cookies</h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          We minimise the use of third-party cookies. Where third-party services
          are used (such as embedded content or analytics), those providers may
          set their own cookies. We recommend reviewing their privacy policies
          for more information.
        </p>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          We do not use cookies for advertising or tracking across other
          websites.
        </p>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">Managing Cookies</h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          You have several options for managing cookies:
        </p>

        <div className="mt-4 space-y-4 sm:mt-6 sm:space-y-6">
          <div>
            <p className="subsection-header">Browser settings</p>
            <p className="body-text mt-2 text-zinc-600 sm:mt-3">
              Most web browsers allow you to control cookies through their
              settings. You can usually find these in the "Options" or
              "Preferences" menu of your browser. You can set your browser to
              block or delete cookies.
            </p>
          </div>

          <div>
            <p className="subsection-header">Cookie consent</p>
            <p className="body-text mt-2 text-zinc-600 sm:mt-3">
              When you first visit our website, you will be asked to consent to
              non-essential cookies. You can change your preferences at any time
              by clearing your cookies and revisiting the site.
            </p>
          </div>

          <div>
            <p className="subsection-header">Opt-out links</p>
            <p className="body-text mt-2 text-zinc-600 sm:mt-3">
              For third-party analytics services, you can often opt out directly
              through the provider's website.
            </p>
          </div>
        </div>

        <p className="body-text mt-4 text-zinc-600 sm:mt-6">
          Please note that blocking certain cookies may impact your experience
          on our website and limit the functionality available to you.
        </p>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">Browser-Specific Instructions</h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          Here are links to cookie management instructions for common browsers:
        </p>
        <ul className="body-text mt-3 space-y-2 text-zinc-600 sm:mt-4">
          <li>
            •{" "}
            <a
              className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
              href="https://support.google.com/chrome/answer/95647"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Chrome
            </a>
          </li>
          <li>
            •{" "}
            <a
              className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
              href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mozilla Firefox
            </a>
          </li>
          <li>
            •{" "}
            <a
              className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
              href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac"
              target="_blank"
              rel="noopener noreferrer"
            >
              Safari (Mac)
            </a>
          </li>
          <li>
            •{" "}
            <a
              className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
              href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
              target="_blank"
              rel="noopener noreferrer"
            >
              Microsoft Edge
            </a>
          </li>
        </ul>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">Changes to This Policy</h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          We may update this Cookie Policy from time to time to reflect changes
          in our practices or for legal, regulatory, or operational reasons. The
          "Last updated" date at the top of this page indicates when this policy
          was last revised.
        </p>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">Contact Us</h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          If you have any questions about our use of cookies, please contact us:
        </p>
        <ul className="body-text mt-3 space-y-1 text-zinc-600 sm:mt-4">
          <li>
            Email:{" "}
            <a
              className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
              href="mailto:privacy@myfoodfit.co"
            >
              privacy@myfoodfit.co
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

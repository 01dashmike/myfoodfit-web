import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Requests",
  description:
    "Submit a data subject access request (DSAR) - request a copy of your data, deletion, or exercise other GDPR rights.",
  alternates: {
    canonical: "/data-requests",
  },
};

export default function DataRequestsPage() {
  return (
    <div className="section-spacing">
      <section className="card-primary rounded-2xl border border-zinc-200 bg-white">
        <h1 className="page-title">Data Requests</h1>
        <p className="body-text mt-4 max-w-3xl text-zinc-600 sm:mt-6">
          Under the UK General Data Protection Regulation (UK GDPR) and the Data
          Protection Act 2018, you have rights regarding your personal data.
          This page explains how to exercise those rights.
        </p>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">Your Rights</h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          You have the right to:
        </p>
        <ul className="body-text mt-3 space-y-2 text-zinc-600 sm:mt-4">
          <li>
            <strong>Access your data (Article 15)</strong> — Request a copy of
            all personal data we hold about you
          </li>
          <li>
            <strong>Correct your data (Article 16)</strong> — Request correction
            of inaccurate or incomplete data
          </li>
          <li>
            <strong>Delete your data (Article 17)</strong> — Request erasure of
            your personal data ("right to be forgotten")
          </li>
          <li>
            <strong>Restrict processing (Article 18)</strong> — Request that we
            limit how we use your data
          </li>
          <li>
            <strong>Data portability (Article 20)</strong> — Receive your data
            in a structured, machine-readable format
          </li>
          <li>
            <strong>Object to processing (Article 21)</strong> — Object to
            processing based on legitimate interests
          </li>
          <li>
            <strong>Withdraw consent</strong> — Where processing is based on
            consent, withdraw it at any time
          </li>
        </ul>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">How to Submit a Request</h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          You can submit a data request in two ways:
        </p>

        <div className="mt-4 space-y-4 sm:mt-6 sm:space-y-6">
          <div>
            <p className="subsection-header">Option 1: Email us</p>
            <p className="body-text mt-2 text-zinc-600 sm:mt-3">
              Send your request to{" "}
              <a
                className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
                href="mailto:support@myfoodfit.co.uk"
              >
                support@myfoodfit.co.uk
              </a>
            </p>
            <p className="body-text mt-2 text-zinc-600 sm:mt-3">
              Please include:
            </p>
            <ul className="body-text mt-2 space-y-1 text-zinc-600">
              <li>• Your full name</li>
              <li>• The email address associated with your MyFoodFit account</li>
              <li>• A clear description of what you are requesting</li>
              <li>
                • Any information that helps us locate your data (e.g., account
                username)
              </li>
            </ul>
          </div>

          <div>
            <p className="subsection-header">Option 2: Use the app</p>
            <p className="body-text mt-2 text-zinc-600 sm:mt-3">
              In the MyFoodFit app, go to <strong>Settings → Privacy</strong> where
              you can:
            </p>
            <ul className="body-text mt-2 space-y-1 text-zinc-600">
              <li>• Export a copy of your data</li>
              <li>• Delete your account and all associated data</li>
              <li>• Manage your preferences</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">Identity Verification</h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          To protect your privacy, we may need to verify your identity before
          processing your request. This is to ensure we do not disclose personal
          data to the wrong person.
        </p>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          Verification may involve:
        </p>
        <ul className="body-text mt-3 space-y-1 text-zinc-600 sm:mt-4">
          <li>
            • Confirming the request from the email address linked to your
            account
          </li>
          <li>
            • Asking security questions about your account
          </li>
          <li>
            • In some cases, requesting additional documentation
          </li>
        </ul>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">Response Times</h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          We will respond to your request within <strong>one month</strong> of
          receiving it. If your request is complex or we receive a high volume
          of requests, we may extend this period by up to two additional months.
          We will inform you of any extension within the first month.
        </p>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          In most cases, we will handle your request free of charge. If a
          request is manifestly unfounded or excessive, we may charge a
          reasonable fee or refuse to act on it.
        </p>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">What You Will Receive</h2>

        <div className="mt-4 space-y-4 sm:mt-6 sm:space-y-6">
          <div>
            <p className="subsection-header">For access requests</p>
            <p className="body-text mt-2 text-zinc-600 sm:mt-3">
              We will provide a copy of your personal data in a commonly used
              electronic format (typically JSON or CSV), along with information
              about:
            </p>
            <ul className="body-text mt-2 space-y-1 text-zinc-600">
              <li>• The purposes of processing</li>
              <li>• Categories of data concerned</li>
              <li>• Recipients or categories of recipients</li>
              <li>• Retention periods</li>
              <li>• Your rights under GDPR</li>
            </ul>
          </div>

          <div>
            <p className="subsection-header">For deletion requests</p>
            <p className="body-text mt-2 text-zinc-600 sm:mt-3">
              We will confirm once your data has been deleted. Note that some
              data may be retained where we have a legal obligation (e.g., tax
              records) or legitimate grounds to retain it.
            </p>
          </div>

          <div>
            <p className="subsection-header">For portability requests</p>
            <p className="body-text mt-2 text-zinc-600 sm:mt-3">
              We will provide your data in a structured, commonly used,
              machine-readable format that you can transfer to another service.
            </p>
          </div>
        </div>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">Account Deletion</h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          To delete your MyFoodFit account and all associated data:
        </p>
        <ul className="body-text mt-3 space-y-2 text-zinc-600 sm:mt-4">
          <li>
            <strong>In the app:</strong> Go to Settings → Privacy → Delete
            Account
          </li>
          <li>
            <strong>By email:</strong> Send a deletion request to{" "}
            <a
              className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
              href="mailto:support@myfoodfit.co.uk"
            >
              support@myfoodfit.co.uk
            </a>
          </li>
        </ul>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          Account deletion is permanent. All your data will be removed within 30
          days, except where retention is required by law.
        </p>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">Not Satisfied?</h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          If you are not happy with how we have handled your request, you have
          the right to lodge a complaint with the UK's supervisory authority:
        </p>
        <div className="body-text mt-3 text-zinc-600 sm:mt-4">
          <p className="font-medium text-zinc-900">
            Information Commissioner's Office (ICO)
          </p>
          <ul className="mt-2 space-y-1">
            <li>
              Website:{" "}
              <a
                className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
                href="https://ico.org.uk"
                target="_blank"
                rel="noopener noreferrer"
              >
                ico.org.uk
              </a>
            </li>
            <li>Phone: 0303 123 1113</li>
          </ul>
        </div>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          We encourage you to contact us first so we can try to resolve your
          concern directly.
        </p>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">Contact</h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          For any questions about data requests or your privacy rights:
        </p>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          <strong>Email:</strong>{" "}
          <a
            className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
            href="mailto:support@myfoodfit.co.uk"
          >
            support@myfoodfit.co.uk
          </a>
        </p>
      </section>
    </div>
  );
}

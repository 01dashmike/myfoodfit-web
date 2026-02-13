import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sub-Processors",
  description:
    "List of third-party sub-processors that process personal data on behalf of MyFoodFit.",
  alternates: {
    canonical: "/sub-processors",
  },
};

export default function SubProcessorsPage() {
  return (
    <div className="section-spacing">
      <section className="card-primary rounded-2xl border border-zinc-200 bg-white">
        <p className="text-sm font-medium text-zinc-500">
          Last updated: February 2026
        </p>
        <h1 className="page-title mt-2 sm:mt-3">Sub-Processors</h1>
        <p className="body-text mt-4 max-w-3xl text-zinc-600 sm:mt-6">
          This page lists the third-party service providers (sub-processors)
          that process personal data on behalf of Food Signal Ltd to deliver the
          MyFoodFit service. We maintain appropriate contracts with all
          sub-processors to ensure GDPR compliance.
        </p>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">Current Sub-Processors</h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          The following sub-processors are currently engaged to process personal
          data:
        </p>

        <div className="mt-6 space-y-6">
          {/* Supabase */}
          <div className="border-b border-zinc-200 pb-6">
            <p className="subsection-header">Supabase Inc.</p>
            <div className="body-text mt-3 space-y-2 text-zinc-600">
              <p>
                <strong>Purpose:</strong> Database hosting, user authentication,
                and file storage
              </p>
              <p>
                <strong>Data processed:</strong> User accounts, dietary
                preferences, saved products, usage data
              </p>
              <p>
                <strong>Location:</strong> United States (with EU region
                available)
              </p>
              <p>
                <strong>Transfer mechanism:</strong> Standard Contractual
                Clauses (SCCs)
              </p>
              <p>
                <strong>Website:</strong>{" "}
                <a
                  className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
                  href="https://supabase.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  supabase.com
                </a>
              </p>
              <p>
                <strong>Privacy Policy:</strong>{" "}
                <a
                  className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
                  href="https://supabase.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  supabase.com/privacy
                </a>
              </p>
            </div>
          </div>

          {/* Stripe */}
          <div className="border-b border-zinc-200 pb-6">
            <p className="subsection-header">Stripe Inc.</p>
            <div className="body-text mt-3 space-y-2 text-zinc-600">
              <p>
                <strong>Purpose:</strong> Payment processing and subscription
                management
              </p>
              <p>
                <strong>Data processed:</strong> Name, email, payment card
                details (handled directly by Stripe), billing address,
                transaction history
              </p>
              <p>
                <strong>Location:</strong> United States, Ireland
              </p>
              <p>
                <strong>Transfer mechanism:</strong> Standard Contractual
                Clauses (SCCs), Stripe is certified under various compliance
                frameworks
              </p>
              <p>
                <strong>Website:</strong>{" "}
                <a
                  className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
                  href="https://stripe.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  stripe.com
                </a>
              </p>
              <p>
                <strong>Privacy Policy:</strong>{" "}
                <a
                  className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
                  href="https://stripe.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  stripe.com/privacy
                </a>
              </p>
            </div>
          </div>

          {/* Apple */}
          <div className="border-b border-zinc-200 pb-6">
            <p className="subsection-header">Apple Inc.</p>
            <div className="body-text mt-3 space-y-2 text-zinc-600">
              <p>
                <strong>Purpose:</strong> Sign In with Apple authentication
              </p>
              <p>
                <strong>Data processed:</strong> Apple ID identifier, email
                address (if shared by user)
              </p>
              <p>
                <strong>Location:</strong> United States, Ireland
              </p>
              <p>
                <strong>Transfer mechanism:</strong> Standard Contractual
                Clauses (SCCs)
              </p>
              <p>
                <strong>Website:</strong>{" "}
                <a
                  className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
                  href="https://apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  apple.com
                </a>
              </p>
              <p>
                <strong>Privacy Policy:</strong>{" "}
                <a
                  className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
                  href="https://www.apple.com/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  apple.com/privacy
                </a>
              </p>
            </div>
          </div>

          {/* Nutritionix */}
          <div className="border-b border-zinc-200 pb-6">
            <p className="subsection-header">Nutritionix (Syndigo LLC)</p>
            <div className="body-text mt-3 space-y-2 text-zinc-600">
              <p>
                <strong>Purpose:</strong> Food and nutrition database API
              </p>
              <p>
                <strong>Data processed:</strong> Product barcodes scanned,
                search queries for food items
              </p>
              <p>
                <strong>Location:</strong> United States
              </p>
              <p>
                <strong>Transfer mechanism:</strong> Standard Contractual
                Clauses (SCCs)
              </p>
              <p>
                <strong>Website:</strong>{" "}
                <a
                  className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
                  href="https://nutritionix.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  nutritionix.com
                </a>
              </p>
              <p>
                <strong>Privacy Policy:</strong>{" "}
                <a
                  className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
                  href="https://www.nutritionix.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  nutritionix.com/privacy
                </a>
              </p>
            </div>
          </div>

          {/* Expo */}
          <div className="pb-2">
            <p className="subsection-header">Expo (650 Industries Inc.)</p>
            <div className="body-text mt-3 space-y-2 text-zinc-600">
              <p>
                <strong>Purpose:</strong> Mobile app delivery and over-the-air
                updates, push notifications
              </p>
              <p>
                <strong>Data processed:</strong> Device identifiers, push
                notification tokens, app version information
              </p>
              <p>
                <strong>Location:</strong> United States
              </p>
              <p>
                <strong>Transfer mechanism:</strong> Standard Contractual
                Clauses (SCCs)
              </p>
              <p>
                <strong>Website:</strong>{" "}
                <a
                  className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
                  href="https://expo.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  expo.dev
                </a>
              </p>
              <p>
                <strong>Privacy Policy:</strong>{" "}
                <a
                  className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
                  href="https://expo.dev/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  expo.dev/privacy
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">Data Processing Agreements</h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          We have entered into Data Processing Agreements (DPAs) with all
          sub-processors listed above. These agreements ensure that:
        </p>
        <ul className="body-text mt-3 space-y-2 text-zinc-600 sm:mt-4">
          <li>• Personal data is processed only on our documented instructions</li>
          <li>
            • Sub-processors implement appropriate technical and organisational
            security measures
          </li>
          <li>
            • Sub-processors assist us in responding to data subject requests
          </li>
          <li>
            • Personal data is deleted or returned upon termination of the
            service
          </li>
          <li>
            • Sub-processors make available information necessary to demonstrate
            compliance
          </li>
        </ul>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">International Transfers</h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          Several of our sub-processors are based in the United States. For
          transfers of personal data outside the UK/EEA, we rely on:
        </p>
        <ul className="body-text mt-3 space-y-2 text-zinc-600 sm:mt-4">
          <li>
            <strong>Standard Contractual Clauses (SCCs)</strong> — EU/UK
            Commission-approved contractual terms that provide appropriate
            safeguards for data transfers
          </li>
          <li>
            <strong>Adequacy decisions</strong> — Where the destination country
            has been deemed to provide adequate data protection
          </li>
          <li>
            <strong>Supplementary measures</strong> — Additional technical and
            organisational measures where required
          </li>
        </ul>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">Changes to Sub-Processors</h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          We may update this list from time to time as we add or change
          sub-processors. Material changes will be reflected in the "Last
          updated" date at the top of this page.
        </p>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          If you have concerns about a specific sub-processor, please contact us
          at{" "}
          <a
            className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
            href="mailto:support@myfoodfit.co.uk"
          >
            support@myfoodfit.co.uk
          </a>
          .
        </p>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">Enterprise & DPA Requests</h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          If you are an enterprise customer or health organisation that requires
          a signed Data Processing Agreement with Food Signal Ltd, please
          contact us at{" "}
          <a
            className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
            href="mailto:support@myfoodfit.co.uk"
          >
            support@myfoodfit.co.uk
          </a>{" "}
          to discuss your requirements.
        </p>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">Contact</h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          For questions about our sub-processors or data processing practices:
        </p>
        <ul className="body-text mt-3 space-y-1 text-zinc-600 sm:mt-4">
          <li>
            Email:{" "}
            <a
              className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
              href="mailto:support@myfoodfit.co.uk"
            >
              support@myfoodfit.co.uk
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

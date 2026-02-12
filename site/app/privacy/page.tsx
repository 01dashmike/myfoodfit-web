import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for MyFoodFit - how we collect, use, and protect your personal data under UK GDPR.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="section-spacing">
      {/* Hero Section */}
      <section className="card-primary rounded-2xl border border-zinc-200 bg-white">
        <p className="text-sm font-medium text-zinc-500">
          Last updated: February 2026
        </p>
        <h1 className="page-title mt-2 sm:mt-3">Privacy Policy</h1>
      </section>

      {/* Section 1: Introduction */}
      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">1. Introduction</h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          MyFoodFit is a food scanning and diet evaluation tool designed to help
          you understand the nutritional characteristics of foods. This Privacy
          Policy explains what personal data we collect, how we use it, and your
          rights regarding that data.
        </p>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          MyFoodFit is operated from the United Kingdom and complies with UK and
          EU data protection requirements, including the UK General Data
          Protection Regulation (UK GDPR). The app is distributed via the Apple
          App Store and Google Play Store.
        </p>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          We are committed to transparency and minimal data collection. We do
          not sell your data, display third-party advertising, or track you
          across other apps or websites.
        </p>
      </section>

      {/* Section 2: What Data We Collect */}
      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">2. What Data We Collect</h2>

        <div className="mt-4 space-y-6 sm:mt-6">
          {/* 2.1 Account Information */}
          <div>
            <p className="subsection-header">2.1 Account Information</p>
            <p className="body-text mt-2 text-zinc-600 sm:mt-3">
              When you create an account, we collect:
            </p>
            <ul className="body-text mt-2 space-y-1 text-zinc-600 sm:mt-3">
              <li>
                • <strong>Email address</strong> – used for account login (via
                one-time passcode or Apple Sign-In) and essential service
                communications
              </li>
            </ul>
            <p className="body-text mt-3 text-zinc-600 sm:mt-4">
              Optionally, you may provide:
            </p>
            <ul className="body-text mt-2 space-y-1 text-zinc-600 sm:mt-3">
              <li>
                • <strong>Profile name</strong> – a display name for
                personalisation within the app
              </li>
            </ul>
            <p className="body-text mt-3 text-zinc-600 sm:mt-4">
              We do <strong>not</strong> collect:
            </p>
            <ul className="body-text mt-2 space-y-1 text-zinc-600 sm:mt-3">
              <li>• Phone number</li>
              <li>• Physical address</li>
              <li>• Precise location data</li>
              <li>• Medical records or clinical health data</li>
              <li>• Advertising identifiers (IDFA/GAID)</li>
            </ul>
          </div>

          {/* 2.2 Health & Dietary Information */}
          <div>
            <p className="subsection-header">2.2 Health & Dietary Information</p>
            <p className="body-text mt-2 text-zinc-600 sm:mt-3">
              To personalise your food evaluations, you may provide:
            </p>
            <ul className="body-text mt-2 space-y-1 text-zinc-600 sm:mt-3">
              <li>
                • <strong>Dietary preferences</strong> – such as vegetarian,
                vegan, keto, paleo, pescatarian
              </li>
              <li>
                • <strong>Food allergies and intolerances</strong> – such as
                nuts, dairy, gluten, shellfish
              </li>
              <li>
                • <strong>Health goals</strong> – such as general health, heart
                health, blood sugar management, weight management, gut health
              </li>
              <li>
                • <strong>Medical dietary needs</strong> – such as
                diabetes-friendly, low-sodium for heart health, low-FODMAP for
                IBS
              </li>
              <li>
                • <strong>Body metrics (optional)</strong> – weight and height,
                used only for BMI-based recommendations if you choose to provide
                them
              </li>
            </ul>
            <p className="body-text mt-3 text-zinc-600 sm:mt-4">
              This information is stored locally on your device and synced to
              your account when you sign in. It is used solely to calculate
              personalised food scores and recommendations.
            </p>
            <p className="body-text mt-3 text-zinc-600 sm:mt-4">
              <strong>Important:</strong> MyFoodFit is not a medical device.
              Health preferences are used for informational food scoring only,
              not for medical diagnosis or treatment.
            </p>
          </div>

          {/* 2.3 Food Scans and Usage Data */}
          <div>
            <p className="subsection-header">2.3 Food Scans and Usage Data</p>
            <p className="body-text mt-2 text-zinc-600 sm:mt-3">
              When you use the app:
            </p>
            <ul className="body-text mt-2 space-y-1 text-zinc-600 sm:mt-3">
              <li>
                • <strong>Barcode scans</strong> – product barcodes are sent to
                look up nutritional information from our database and partner
                databases
              </li>
              <li>
                • <strong>Food log entries</strong> – foods you log, including
                product names, scores, and timestamps
              </li>
              <li>
                • <strong>Saved products</strong> – items you save to your
                cupboard or favourites
              </li>
              <li>
                • <strong>Recipes</strong> – recipes you create within the app
              </li>
              <li>
                • <strong>Voice input</strong> – if you use voice logging,
                speech is processed locally on your device using iOS/Android
                speech recognition. Audio is{" "}
                <strong>never recorded, stored, or transmitted</strong> to our
                servers.
              </li>
              <li>
                • <strong>Photos</strong> – images used for scanning are
                processed in memory and{" "}
                <strong>not stored permanently</strong> or uploaded to our
                servers
              </li>
            </ul>
          </div>

          {/* 2.4 Subscription Information */}
          <div>
            <p className="subsection-header">2.4 Subscription Information</p>
            <p className="body-text mt-2 text-zinc-600 sm:mt-3">
              If you subscribe to MyFoodFit Premium:
            </p>
            <ul className="body-text mt-2 space-y-1 text-zinc-600 sm:mt-3">
              <li>
                • <strong>Subscription status</strong> – whether you have an
                active subscription, the plan type, and validity period
              </li>
              <li>
                • <strong>Stripe customer reference</strong> – a unique
                identifier used by our payment processor
              </li>
            </ul>
            <p className="body-text mt-3 text-zinc-600 sm:mt-4">
              We do <strong>not</strong> store or have access to your payment
              card details. All payment processing is handled securely by
              Stripe.
            </p>
          </div>

          {/* 2.5 Technical and Analytics Information */}
          <div>
            <p className="subsection-header">
              2.5 Technical and Analytics Information
            </p>
            <p className="body-text mt-2 text-zinc-600 sm:mt-3">
              We automatically collect limited technical information:
            </p>
            <ul className="body-text mt-2 space-y-1 text-zinc-600 sm:mt-3">
              <li>• Device type and operating system version</li>
              <li>• App version</li>
              <li>
                • Error logs and crash reports – to diagnose technical issues
              </li>
              <li>
                • Anonymous usage analytics – feature usage, session duration,
                and interaction patterns
              </li>
            </ul>
            <p className="body-text mt-3 text-zinc-600 sm:mt-4">
              Analytics collection requires your consent and, on iOS, respects
              your App Tracking Transparency choice. You can opt out of
              analytics at any time in the app's privacy settings.
            </p>
            <p className="body-text mt-3 text-zinc-600 sm:mt-4">
              This information does not identify you personally and is used only
              for technical support and service improvement.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: How We Use Your Data */}
      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">3. How We Use Your Data</h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          We use the data we collect for the following purposes:
        </p>
        <ul className="body-text mt-3 space-y-2 text-zinc-600 sm:mt-4">
          <li>
            • <strong>Service delivery</strong> – to provide food scanning,
            nutritional analysis, personalised scoring, and diet evaluation
            features
          </li>
          <li>
            • <strong>Personalisation</strong> – to tailor food scores and
            recommendations based on your dietary preferences and health goals
          </li>
          <li>
            • <strong>Account management</strong> – to authenticate your login
            and manage your account
          </li>
          <li>
            • <strong>Subscription management</strong> – to verify your premium
            access and manage billing
          </li>
          <li>
            • <strong>Customer support</strong> – to respond to your enquiries
            and resolve technical issues
          </li>
          <li>
            • <strong>Service improvement</strong> – to understand how the app
            is used and identify areas for enhancement (with your consent)
          </li>
          <li>
            • <strong>Legal compliance</strong> – to comply with applicable laws
            and respond to lawful requests from authorities
          </li>
        </ul>

        <p className="body-text mt-4 text-zinc-600 sm:mt-6">
          We do <strong>not</strong> use your data for:
        </p>
        <ul className="body-text mt-3 space-y-2 text-zinc-600 sm:mt-4">
          <li>• Third-party advertising</li>
          <li>• Cross-app or cross-site tracking</li>
          <li>• Selling or renting to third parties</li>
          <li>• Medical diagnosis or treatment recommendations</li>
          <li>• Building advertising profiles</li>
        </ul>
      </section>

      {/* Section 4: Data Storage and Security */}
      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">4. Data Storage and Security</h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          Your data is stored securely using industry-standard practices:
        </p>
        <ul className="body-text mt-3 space-y-2 text-zinc-600 sm:mt-4">
          <li>• Data is encrypted in transit using TLS/SSL protocols</li>
          <li>
            • Data at rest is stored on secure servers with access controls
          </li>
          <li>
            • We use reputable third-party infrastructure providers that comply
            with UK and EU data protection standards
          </li>
          <li>
            • Sensitive data (dietary preferences, health goals) is stored
            locally on your device and synced securely when authenticated
          </li>
        </ul>

        <div className="mt-4 sm:mt-6">
          <p className="subsection-header">Local-first approach</p>
          <p className="body-text mt-2 text-zinc-600 sm:mt-3">
            Many features work entirely on your device. Data is only transmitted
            to our servers when necessary for account synchronisation or
            features that require server processing.
          </p>
        </div>

        <p className="body-text mt-4 text-zinc-600 sm:mt-6">
          While we implement appropriate security measures, no system is
          completely secure. You are responsible for maintaining the
          confidentiality of your account credentials.
        </p>
      </section>

      {/* Section 5: Third-Party Services */}
      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">5. Third-Party Services</h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          We use the following trusted third-party services to operate
          MyFoodFit:
        </p>

        {/* Third-party services table */}
        <div className="mt-4 overflow-hidden rounded-lg border border-zinc-200 sm:mt-6">
          <div className="divide-y divide-zinc-200">
            {/* Header */}
            <div className="hidden bg-zinc-100 px-4 py-3 sm:grid sm:grid-cols-4 sm:gap-4">
              <div className="text-sm font-semibold text-zinc-900">Service</div>
              <div className="text-sm font-semibold text-zinc-900">Purpose</div>
              <div className="text-sm font-semibold text-zinc-900">
                Data Shared
              </div>
              <div className="text-sm font-semibold text-zinc-900">
                Privacy Policy
              </div>
            </div>

            {/* Supabase */}
            <div className="px-4 py-3 sm:grid sm:grid-cols-4 sm:gap-4">
              <div className="font-medium text-zinc-900">Supabase</div>
              <div className="mt-1 text-sm text-zinc-600 sm:mt-0">
                Authentication, database, backend
              </div>
              <div className="mt-1 text-sm text-zinc-600 sm:mt-0">
                Email, profile data (encrypted)
              </div>
              <div className="mt-1 sm:mt-0">
                <a
                  className="text-sm font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
                  href="https://supabase.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  supabase.com/privacy
                </a>
              </div>
            </div>

            {/* Stripe */}
            <div className="px-4 py-3 sm:grid sm:grid-cols-4 sm:gap-4">
              <div className="font-medium text-zinc-900">Stripe</div>
              <div className="mt-1 text-sm text-zinc-600 sm:mt-0">
                Payment processing
              </div>
              <div className="mt-1 text-sm text-zinc-600 sm:mt-0">
                Email (for receipts), subscription status
              </div>
              <div className="mt-1 sm:mt-0">
                <a
                  className="text-sm font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
                  href="https://stripe.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  stripe.com/privacy
                </a>
              </div>
            </div>

            {/* Nutritionix */}
            <div className="px-4 py-3 sm:grid sm:grid-cols-4 sm:gap-4">
              <div className="font-medium text-zinc-900">Nutritionix</div>
              <div className="mt-1 text-sm text-zinc-600 sm:mt-0">
                Nutrition data lookup
              </div>
              <div className="mt-1 text-sm text-zinc-600 sm:mt-0">
                Food search queries (no personal data)
              </div>
              <div className="mt-1 sm:mt-0">
                <a
                  className="text-sm font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
                  href="https://www.nutritionix.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  nutritionix.com/privacy
                </a>
              </div>
            </div>

            {/* Open Food Facts */}
            <div className="px-4 py-3 sm:grid sm:grid-cols-4 sm:gap-4">
              <div className="font-medium text-zinc-900">Open Food Facts</div>
              <div className="mt-1 text-sm text-zinc-600 sm:mt-0">
                Product database
              </div>
              <div className="mt-1 text-sm text-zinc-600 sm:mt-0">
                Barcode numbers (no personal data)
              </div>
              <div className="mt-1 sm:mt-0">
                <a
                  className="text-sm font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
                  href="https://world.openfoodfacts.org/terms-of-use"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  openfoodfacts.org/terms
                </a>
              </div>
            </div>

            {/* Apple Sign-In */}
            <div className="px-4 py-3 sm:grid sm:grid-cols-4 sm:gap-4">
              <div className="font-medium text-zinc-900">Apple Sign-In</div>
              <div className="mt-1 text-sm text-zinc-600 sm:mt-0">
                Authentication (optional)
              </div>
              <div className="mt-1 text-sm text-zinc-600 sm:mt-0">
                Handled by Apple; you control via Hide My Email
              </div>
              <div className="mt-1 sm:mt-0">
                <a
                  className="text-sm font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
                  href="https://www.apple.com/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  apple.com/privacy
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="body-text mt-4 text-zinc-600 sm:mt-6">
          These services process data on our behalf under strict contractual
          obligations and are not permitted to use your data for their own
          purposes.
        </p>

        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          We do <strong>not</strong> share your data with:
        </p>
        <ul className="body-text mt-2 space-y-1 text-zinc-600 sm:mt-3">
          <li>• Advertising networks</li>
          <li>• Data brokers</li>
          <li>
            • Social media platforms (unless you explicitly choose to share
            content)
          </li>
        </ul>

        <div className="mt-4 space-y-4 sm:mt-6 sm:space-y-6">
          <div>
            <p className="subsection-header">Academic Research</p>
            <p className="body-text mt-2 text-zinc-600 sm:mt-3">
              With your explicit consent, we may share anonymised, aggregated
              data for academic research purposes. Individual users are never
              identifiable in such data.
            </p>
          </div>

          <div>
            <p className="subsection-header">Legal Requirements</p>
            <p className="body-text mt-2 text-zinc-600 sm:mt-3">
              We may disclose data if required by law, court order, or to
              protect our rights or the safety of others.
            </p>
          </div>

          <div>
            <p className="subsection-header">Business Transfers</p>
            <p className="body-text mt-2 text-zinc-600 sm:mt-3">
              If MyFoodFit is acquired or merged, your data may be transferred
              to the new entity, subject to this Privacy Policy.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Your Rights and Controls */}
      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">6. Your Rights and Controls</h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          Under UK and EU data protection law (UK GDPR), you have the following
          rights:
        </p>

        {/* Rights table */}
        <div className="mt-4 overflow-hidden rounded-lg border border-zinc-200 sm:mt-6">
          <div className="divide-y divide-zinc-200">
            <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4">
              <div className="font-medium text-zinc-900">Access</div>
              <div className="col-span-2 mt-1 text-sm text-zinc-600 sm:mt-0">
                Request a copy of the personal data we hold about you
              </div>
            </div>
            <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4">
              <div className="font-medium text-zinc-900">Correction</div>
              <div className="col-span-2 mt-1 text-sm text-zinc-600 sm:mt-0">
                Update or correct inaccurate data
              </div>
            </div>
            <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4">
              <div className="font-medium text-zinc-900">Deletion</div>
              <div className="col-span-2 mt-1 text-sm text-zinc-600 sm:mt-0">
                Request deletion of your account and associated data
              </div>
            </div>
            <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4">
              <div className="font-medium text-zinc-900">Portability</div>
              <div className="col-span-2 mt-1 text-sm text-zinc-600 sm:mt-0">
                Request your data in a structured, machine-readable format
              </div>
            </div>
            <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4">
              <div className="font-medium text-zinc-900">Objection</div>
              <div className="col-span-2 mt-1 text-sm text-zinc-600 sm:mt-0">
                Object to certain types of data processing
              </div>
            </div>
            <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4">
              <div className="font-medium text-zinc-900">
                Restrict Processing
              </div>
              <div className="col-span-2 mt-1 text-sm text-zinc-600 sm:mt-0">
                Request we limit how we use your data
              </div>
            </div>
            <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4">
              <div className="font-medium text-zinc-900">Withdraw Consent</div>
              <div className="col-span-2 mt-1 text-sm text-zinc-600 sm:mt-0">
                Where processing is based on consent, withdraw it at any time
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 sm:mt-6">
          <p className="subsection-header">How to Exercise Your Rights</p>
          <div className="body-text mt-2 text-zinc-600 sm:mt-3">
            <p>
              <strong>In the app:</strong>
            </p>
            <ul className="mt-2 space-y-1">
              <li>
                • Go to Settings → Privacy Settings to manage consent
                preferences
              </li>
              <li>• Go to Settings → Delete Account to delete your account</li>
            </ul>
          </div>
          <div className="body-text mt-3 text-zinc-600 sm:mt-4">
            <p>
              <strong>By email:</strong>
            </p>
            <ul className="mt-2 space-y-1">
              <li>
                • Contact{" "}
                <a
                  className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
                  href="mailto:support@myfoodfit.co.uk"
                >
                  support@myfoodfit.co.uk
                </a>{" "}
                with your request
              </li>
            </ul>
          </div>
          <div className="body-text mt-3 text-zinc-600 sm:mt-4">
            <p>
              <strong>Data deletion request form:</strong>
            </p>
            <ul className="mt-2 space-y-1">
              <li>
                • Visit{" "}
                <a
                  className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
                  href="/data-deletion"
                >
                  www.myfoodfit.co.uk/data-deletion
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 sm:mt-6">
          <p className="subsection-header">
            What Happens When You Delete Your Account
          </p>
          <p className="body-text mt-2 text-zinc-600 sm:mt-3">
            Account deletion will permanently remove:
          </p>
          <ul className="body-text mt-2 space-y-1 text-zinc-600 sm:mt-3">
            <li>• Your email address and profile information</li>
            <li>• Food scan history and logs</li>
            <li>• Saved products and recipes</li>
            <li>• Dietary preferences and health goals</li>
            <li>
              • Subscription data (note: Stripe retains records for tax/legal
              compliance)
            </li>
          </ul>
          <p className="body-text mt-3 text-zinc-600 sm:mt-4">
            Anonymous analytics data that is not linked to your identity may be
            retained for service improvement.
          </p>
        </div>
      </section>

      {/* Section 7: Cookies and Tracking */}
      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">7. Cookies and Tracking</h2>

        <div className="mt-4 space-y-4 sm:mt-6 sm:space-y-6">
          <div>
            <p className="subsection-header">7.1 Website</p>
            <p className="body-text mt-2 text-zinc-600 sm:mt-3">
              Our website (www.myfoodfit.co.uk) uses only essential cookies
              required for basic functionality. We do <strong>not</strong> use:
            </p>
            <ul className="body-text mt-2 space-y-1 text-zinc-600 sm:mt-3">
              <li>• Third-party analytics cookies</li>
              <li>• Advertising cookies</li>
              <li>• Social media tracking pixels</li>
            </ul>
          </div>

          <div>
            <p className="subsection-header">7.2 Mobile App</p>
            <p className="body-text mt-2 text-zinc-600 sm:mt-3">
              The mobile app does not use cookies.
            </p>
            <p className="body-text mt-3 text-zinc-600 sm:mt-4">
              <strong>iOS App Tracking Transparency:</strong> On iOS 14.5+, we
              request your permission before collecting analytics data that
              could be used to track you. You can change this permission at any
              time in your device's Settings → Privacy → Tracking.
            </p>
            <p className="body-text mt-3 text-zinc-600 sm:mt-4">
              <strong>Android:</strong> Analytics collection is controlled via
              in-app privacy settings.
            </p>
            <p className="body-text mt-3 text-zinc-600 sm:mt-4">
              We do <strong>not</strong> use advertising identifiers (IDFA on
              iOS, GAID on Android) or track you across other apps or websites.
            </p>
          </div>
        </div>
      </section>

      {/* Section 8: Children's Privacy */}
      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">8. Children's Privacy</h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          MyFoodFit is not intended for use by children under the age of 13 (or
          16 in some EU jurisdictions). We do not knowingly collect personal
          data from children.
        </p>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          If you believe we have inadvertently collected data from a child,
          please contact us immediately at{" "}
          <a
            className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
            href="mailto:support@myfoodfit.co.uk"
          >
            support@myfoodfit.co.uk
          </a>{" "}
          and we will delete such data.
        </p>
      </section>

      {/* Section 9: International Data Transfers */}
      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">9. International Data Transfers</h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          Your data may be processed and stored in countries outside the UK and
          EU (our infrastructure providers operate globally). Where this occurs,
          we ensure appropriate safeguards are in place:
        </p>
        <ul className="body-text mt-3 space-y-2 text-zinc-600 sm:mt-4">
          <li>
            • Standard Contractual Clauses (SCCs) approved by the UK Information
            Commissioner's Office (ICO) or European Commission
          </li>
          <li>
            • Adequacy decisions recognising equivalent data protection
            standards
          </li>
          <li>• Additional technical measures such as encryption</li>
        </ul>
      </section>

      {/* Section 10: Data Retention */}
      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">10. Data Retention</h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          We retain your data only as long as necessary:
        </p>

        {/* Retention table */}
        <div className="mt-4 overflow-hidden rounded-lg border border-zinc-200 sm:mt-6">
          <div className="divide-y divide-zinc-200">
            <div className="hidden bg-zinc-100 px-4 py-3 sm:grid sm:grid-cols-2 sm:gap-4">
              <div className="text-sm font-semibold text-zinc-900">
                Data Type
              </div>
              <div className="text-sm font-semibold text-zinc-900">
                Retention Period
              </div>
            </div>
            <div className="px-4 py-3 sm:grid sm:grid-cols-2 sm:gap-4">
              <div className="font-medium text-zinc-900">Account data</div>
              <div className="mt-1 text-sm text-zinc-600 sm:mt-0">
                Until you delete your account
              </div>
            </div>
            <div className="px-4 py-3 sm:grid sm:grid-cols-2 sm:gap-4">
              <div className="font-medium text-zinc-900">Food logs</div>
              <div className="mt-1 text-sm text-zinc-600 sm:mt-0">
                Rolling limit of 500 entries; older entries automatically
                removed
              </div>
            </div>
            <div className="px-4 py-3 sm:grid sm:grid-cols-2 sm:gap-4">
              <div className="font-medium text-zinc-900">Analytics</div>
              <div className="mt-1 text-sm text-zinc-600 sm:mt-0">
                Aggregated indefinitely (not linked to identity)
              </div>
            </div>
            <div className="px-4 py-3 sm:grid sm:grid-cols-2 sm:gap-4">
              <div className="font-medium text-zinc-900">
                Subscription records
              </div>
              <div className="mt-1 text-sm text-zinc-600 sm:mt-0">
                As required by tax/legal obligations (managed by Stripe)
              </div>
            </div>
            <div className="px-4 py-3 sm:grid sm:grid-cols-2 sm:gap-4">
              <div className="font-medium text-zinc-900">Support requests</div>
              <div className="mt-1 text-sm text-zinc-600 sm:mt-0">
                2 years after resolution
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: Changes to This Policy */}
      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">11. Changes to This Policy</h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          We may update this Privacy Policy to reflect changes in our practices
          or legal requirements. When we make material changes:
        </p>
        <ul className="body-text mt-3 space-y-2 text-zinc-600 sm:mt-4">
          <li>
            • We will update the "Last updated" date at the top of this page
          </li>
          <li>
            • We will notify you via email or in-app notification for
            significant changes
          </li>
          <li>• We will request your consent if required by law</li>
        </ul>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          Your continued use of MyFoodFit after changes are posted constitutes
          acceptance of the updated policy.
        </p>
      </section>

      {/* Section 12: Contact Information */}
      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">12. Contact Information</h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          If you have questions about this Privacy Policy, wish to exercise your
          data rights, or need to contact us for any other privacy-related
          matter:
        </p>
        <ul className="body-text mt-3 space-y-2 text-zinc-600 sm:mt-4">
          <li>
            <strong>Email:</strong>{" "}
            <a
              className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
              href="mailto:support@myfoodfit.co.uk"
            >
              support@myfoodfit.co.uk
            </a>
          </li>
          <li>
            <strong>Website:</strong>{" "}
            <a
              className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
              href="https://www.myfoodfit.co.uk"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.myfoodfit.co.uk
            </a>
          </li>
          <li>
            <strong>Data Protection Enquiries:</strong>{" "}
            <a
              className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
              href="mailto:privacy@myfoodfit.co.uk"
            >
              privacy@myfoodfit.co.uk
            </a>
          </li>
        </ul>

        <div className="mt-4 sm:mt-6">
          <p className="subsection-header">Supervisory Authority</p>
          <p className="body-text mt-2 text-zinc-600 sm:mt-3">
            You have the right to lodge a complaint with the UK Information
            Commissioner's Office (ICO) if you believe your data protection
            rights have been violated:
          </p>
          <ul className="body-text mt-2 space-y-1 text-zinc-600 sm:mt-3">
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
            <li>Helpline: 0303 123 1113</li>
          </ul>
        </div>
      </section>

      {/* Section 13: Important Disclaimer */}
      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">13. Important Disclaimer</h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          MyFoodFit is an informational tool designed to help you understand
          nutritional characteristics of foods.
        </p>
        <p className="body-text mt-3 font-medium text-zinc-900 sm:mt-4">
          It is not a medical device and does not provide medical advice,
          diagnosis, or treatment.
        </p>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          The health preferences and dietary information you provide are used
          solely to personalise food scoring within the app. Always consult
          qualified healthcare professionals for medical guidance, especially if
          you have specific health conditions.
        </p>
        <p className="body-text mt-4 text-sm text-zinc-500 sm:mt-6">
          This policy is effective as of the "Last updated" date shown above.
        </p>
      </section>
    </div>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delete Your Data",
  description:
    "Request deletion of your MyFoodFit account and personal data. Learn what data will be removed and how to submit a deletion request.",
  alternates: {
    canonical: "/data-deletion",
  },
};

export default function DataDeletionPage() {
  return (
    <div className="section-spacing">
      {/* Hero Section */}
      <section className="card-primary rounded-2xl border border-zinc-200 bg-white">
        <h1 className="page-title">Delete Your Data</h1>
        <p className="body-text mt-4 max-w-3xl text-zinc-600 sm:mt-6">
          You have the right to request deletion of your personal data at any
          time. This page explains what will be deleted, what may be retained,
          and how to submit a deletion request.
        </p>
      </section>

      {/* What Will Be Deleted */}
      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">What Will Be Deleted</h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          When you delete your account, we will permanently remove:
        </p>
        <ul className="body-text mt-3 space-y-2 text-zinc-600 sm:mt-4">
          <li>
            <strong>Account information</strong> – your email address and
            profile name
          </li>
          <li>
            <strong>Food scan history</strong> – all products you have scanned
            and logged
          </li>
          <li>
            <strong>Saved products</strong> – items in your cupboard and
            favourites
          </li>
          <li>
            <strong>Recipes</strong> – any recipes you have created in the app
          </li>
          <li>
            <strong>Dietary preferences</strong> – your dietary requirements,
            allergies, and restrictions
          </li>
          <li>
            <strong>Health goals</strong> – any health-related preferences you
            have set
          </li>
          <li>
            <strong>Body metrics</strong> – weight and height data (if provided)
          </li>
          <li>
            <strong>Subscription data</strong> – your subscription status and
            preferences within our system
          </li>
        </ul>
        <p className="body-text mt-4 text-zinc-600 sm:mt-6">
          Deletion is <strong>permanent and irreversible</strong>. Once your
          data is deleted, it cannot be recovered.
        </p>
      </section>

      {/* What May Be Retained */}
      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">What May Be Retained</h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          Some data may be retained after account deletion due to legal
          requirements or technical reasons:
        </p>
        <ul className="body-text mt-3 space-y-2 text-zinc-600 sm:mt-4">
          <li>
            <strong>Payment records</strong> – Stripe retains transaction
            records for tax and legal compliance. We do not control this
            retention; contact Stripe directly for payment data requests.
          </li>
          <li>
            <strong>Anonymous analytics</strong> – Aggregated, anonymised usage
            data that is not linked to your identity may be retained for service
            improvement. This data cannot be used to identify you.
          </li>
          <li>
            <strong>Legal obligations</strong> – If we are required by law to
            retain certain data (e.g., for fraud prevention or regulatory
            compliance), we may retain the minimum necessary data for the
            required period.
          </li>
        </ul>
      </section>

      {/* How to Request Deletion */}
      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">How to Request Deletion</h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          You can request deletion of your data using one of the following
          methods:
        </p>

        <div className="mt-4 space-y-4 sm:mt-6 sm:space-y-6">
          <div>
            <p className="subsection-header">Option 1: In the App</p>
            <p className="body-text mt-2 text-zinc-600 sm:mt-3">
              The quickest way to delete your account:
            </p>
            <ol className="body-text mt-2 space-y-1 text-zinc-600 sm:mt-3">
              <li>1. Open the MyFoodFit app</li>
              <li>2. Go to <strong>Settings</strong></li>
              <li>3. Tap <strong>Delete Account</strong></li>
              <li>4. Confirm your decision</li>
            </ol>
            <p className="body-text mt-2 text-zinc-600 sm:mt-3">
              Your account will be queued for deletion immediately.
            </p>
          </div>

          <div>
            <p className="subsection-header">Option 2: By Email</p>
            <p className="body-text mt-2 text-zinc-600 sm:mt-3">
              If you cannot access the app, send an email to:
            </p>
            <p className="body-text mt-2 sm:mt-3">
              <a
                className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
                href="mailto:support@myfoodfit.co.uk?subject=Data%20Deletion%20Request"
              >
                support@myfoodfit.co.uk
              </a>
            </p>
            <p className="body-text mt-3 text-zinc-600 sm:mt-4">
              Please include:
            </p>
            <ul className="body-text mt-2 space-y-1 text-zinc-600 sm:mt-3">
              <li>• The email address associated with your MyFoodFit account</li>
              <li>• A clear statement that you wish to delete your account and all associated data</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Processing Timeline */}
      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">Processing Timeline</h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          We process deletion requests as follows:
        </p>
        <ul className="body-text mt-3 space-y-2 text-zinc-600 sm:mt-4">
          <li>
            <strong>In-app requests:</strong> Processing begins immediately.
            Your data will be fully deleted within 30 days.
          </li>
          <li>
            <strong>Email requests:</strong> We will verify your identity and
            begin processing within 30 days of receiving your request.
          </li>
        </ul>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          You will receive confirmation by email once your data has been
          deleted.
        </p>
      </section>

      {/* Identity Verification */}
      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">Identity Verification</h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          To protect your privacy and prevent unauthorised deletions, we may
          need to verify your identity before processing your request. This
          typically involves:
        </p>
        <ul className="body-text mt-3 space-y-2 text-zinc-600 sm:mt-4">
          <li>
            • Confirming your request from the email address linked to your
            account
          </li>
          <li>
            • Asking you to confirm account details that only you would know
          </li>
        </ul>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          If you submit a deletion request from a different email address, we
          may require additional verification.
        </p>
      </section>

      {/* Before You Delete */}
      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">Before You Delete</h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          Before deleting your account, you may want to:
        </p>
        <ul className="body-text mt-3 space-y-2 text-zinc-600 sm:mt-4">
          <li>
            <strong>Export your data</strong> – Request a copy of your data via
            Settings → Privacy in the app, or by emailing us
          </li>
          <li>
            <strong>Cancel any active subscription</strong> – If you have a
            premium subscription, cancel it first to avoid future charges
          </li>
        </ul>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          If you only want to take a break, you can simply stop using the app.
          Your account will remain inactive but your data will be preserved if
          you decide to return.
        </p>
      </section>

      {/* Other Data Requests */}
      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">Other Data Requests</h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          If you want to exercise other data rights (such as accessing,
          correcting, or exporting your data without deleting your account),
          please visit our{" "}
          <a
            className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
            href="/data-requests"
          >
            Data Requests page
          </a>
          .
        </p>
      </section>

      {/* Contact */}
      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">Contact</h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          If you have questions about data deletion or need assistance:
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
        <p className="body-text mt-4 text-zinc-600 sm:mt-6">
          For more information about how we handle your data, please see our{" "}
          <a
            className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
            href="/privacy"
          >
            Privacy Policy
          </a>
          .
        </p>
      </section>
    </div>
  );
}

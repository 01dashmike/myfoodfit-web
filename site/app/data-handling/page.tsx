import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Handling",
  description:
    "An overview of how MyFoodFit handles data, what information is processed, and how users maintain control.",
  alternates: {
    canonical: "/data-handling",
  },
};

export default function DataHandlingPage() {
  return (
    <div className="section-spacing">
      <section className="card-primary rounded-2xl border border-zinc-200 bg-white">
        <h1 className="page-title">
          Data Handling
        </h1>
        <p className="body-text mt-4 max-w-3xl text-zinc-600 sm:mt-6">
          This page explains how MyFoodFit handles data at a high level.
        </p>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">
          What data is processed
        </h2>
        <p className="subsection-header mt-4 sm:mt-6">Product data</p>
        <p className="body-text mt-2 text-zinc-600 sm:mt-3">
          When you use MyFoodFit, the app processes information about food
          products. This includes ingredients, nutritional values, and other
          details typically found on product packaging.
        </p>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          This information is used to generate interpretations and signals that
          help you understand products.
        </p>

        <p className="subsection-header mt-4 sm:mt-6">User preferences</p>
        <p className="body-text mt-2 text-zinc-600 sm:mt-3">
          If you choose to set preferences, such as dietary considerations or
          items to avoid, this information is used to tailor the feedback you
          receive.
        </p>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          Preferences help tailor the experience to your needs, but they are
          entirely optional.
        </p>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">
          What data is not processed
        </h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          MyFoodFit does not collect, process, or store medical records,
          diagnosis data, or health information.
        </p>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          The app is designed to interpret food products, not to provide
          medical advice or handle sensitive health data.
        </p>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">
          User control
        </h2>
        <p className="subsection-header mt-4 sm:mt-6">Modify preferences</p>
        <p className="body-text mt-2 text-zinc-600 sm:mt-3">
          You can change your preferences at any time. This allows you to
          adjust how the app interprets products based on your current needs.
        </p>

        <p className="subsection-header mt-4 sm:mt-6">Remove saved items</p>
        <p className="body-text mt-2 text-zinc-600 sm:mt-3">
          If you save products or information within the app, you can remove
          these items whenever you choose.
        </p>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          You remain in control of what is stored and what is removed.
        </p>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">Questions</h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          If you have questions about how data is handled, please contact{" "}
          <a
            className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
            href="mailto:privacy@myfoodfit.co"
          >
            privacy@myfoodfit.co
          </a>
          .
        </p>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          For detailed information about your privacy rights and how we process
          personal data, please see our{" "}
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

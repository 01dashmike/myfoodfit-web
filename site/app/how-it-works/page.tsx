import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  alternates: {
    canonical: "/how-it-works",
  },
};

export default function HowItWorksPage() {
  return (
    <div className="section-spacing">
      <section className="card-primary rounded-2xl border border-zinc-200 bg-white">
        <h1 className="page-title">
          How MyFoodFit works
        </h1>
        <p className="body-text mt-4 max-w-3xl text-zinc-600 sm:mt-6">
          MyFoodFit translates food label information into clear green / amber /
          red signals. Each signal is explainable and tied to a documented rule,
          rather than a statistical model.
        </p>
      </section>

      <section className="grid gap-4 sm:gap-6 md:grid-cols-2">
        <div className="card-secondary rounded-2xl border border-zinc-200 bg-white">
          <h2 className="section-header">Inputs we use</h2>
          <ul className="body-text mt-3 space-y-3 text-zinc-600 sm:mt-5">
            <li>Ingredient lists and ordering.</li>
            <li>Nutrition facts per serving and per 100g where available.</li>
            <li>Declared serving size and packaging context.</li>
          </ul>
        </div>
        <div className="card-secondary rounded-2xl border border-zinc-200 bg-white">
          <h2 className="section-header">
            Rule-based logic
          </h2>
          <p className="body-text mt-3 text-zinc-600 sm:mt-5">
            Rules are derived from public guidance and nutrition labeling
            standards. Each rule uses explicit thresholds and definitions, so
            the app can state why a signal appears.
          </p>
        </div>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">Explainability</h2>
        <p className="body-text mt-3 max-w-3xl text-zinc-600 sm:mt-4">
          Every signal includes the reason and the rule behind it. Users can see
          what triggered the result and where the logic comes from. There is no
          hidden model or black box scoring.
        </p>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">Decision-first rating flow</h2>
        <p className="body-text mt-3 max-w-3xl text-zinc-600 sm:mt-4">
          MyFoodFit is designed to answer the primary question first: "Does this
          fit my dietary needs?"
        </p>
        <p className="body-text mt-3 max-w-3xl text-zinc-600 sm:mt-4">
          The green / amber / red model provides rule-based clarity tuned to the
          user's primary dietary constraint. This model is a summary signal, not
          a judgement system.
        </p>
        <p className="body-text mt-3 max-w-3xl text-zinc-600 sm:mt-4">
          Explanations and nutritional details are available secondarily, so users
          can understand the reasoning without being overwhelmed by data before
          reaching a decision.
        </p>
        <p className="body-text mt-3 max-w-3xl text-zinc-600 sm:mt-4">
          This flow keeps the primary answer visible before deeper details.
        </p>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">When information is incomplete</h2>
        <p className="body-text mt-3 max-w-3xl text-zinc-600 sm:mt-4">
          Some food data may be missing or partial. When this occurs, the product
          flags uncertainty clearly and applies conservative defaults where needed.
        </p>
        <p className="body-text mt-3 max-w-3xl text-zinc-600 sm:mt-4">
          Users are invited to contribute missing information if they choose, but
          this is optional. The system does not infer or assume data that is not
          available.
        </p>
        <p className="body-text mt-3 max-w-3xl text-zinc-600 sm:mt-4">
          All outputs remain informational and are presented with appropriate
          context about data quality.
        </p>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">
          Current Beta Interface
        </h2>
        <div className="mt-4 grid gap-4 sm:mt-6 md:grid-cols-3">
          <div className="rounded-xl border border-zinc-200 bg-white p-4">
            <p className="subsection-header">
              Explainability of results
            </p>
            <div className="mt-3 aspect-[9/16] w-full max-w-xs mx-auto rounded-lg overflow-hidden border border-zinc-200 shadow-sm">
              <Image
                src="/screenshots/scan-result.png"
                alt="Explainability of results screenshot"
                width={375}
                height={667}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-3 text-xs text-zinc-500">
              Screens shown reflect the current beta implementation and may
              change.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-4">
            <p className="subsection-header">
              Preference-driven evaluation
            </p>
            <div className="mt-3 aspect-[9/16] w-full max-w-xs mx-auto rounded-lg overflow-hidden border border-zinc-200 shadow-sm">
              <Image
                src="/screenshots/upf-context.png"
                alt="Preference-driven evaluation screenshot"
                width={375}
                height={667}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-3 text-xs text-zinc-500">
              Screens shown reflect the current beta implementation and may
              change.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-4">
            <p className="subsection-header">
              Data confidence indicators
            </p>
            <div className="mt-3 aspect-[9/16] w-full max-w-xs mx-auto rounded-lg overflow-hidden border border-zinc-200 shadow-sm">
              <Image
                src="/screenshots/cupboard.png"
                alt="Data confidence indicators screenshot"
                width={375}
                height={667}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-3 text-xs text-zinc-500">
              Screens shown reflect the current beta implementation and may
              change.
            </p>
          </div>
        </div>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">Limitations</h2>
        <ul className="body-text mt-3 space-y-3 text-zinc-600 sm:mt-4">
          <li>
            Food labels can be incomplete or inconsistent; outputs are only as
            reliable as the label.
          </li>
          <li>
            The beta does not adapt to medical history, allergies, or clinical
            needs.
          </li>
          <li>
            The rule set is evolving and may change as we incorporate feedback
            and external review.
          </li>
        </ul>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <p className="text-sm text-zinc-500">
          MyFoodFit provides educational information and does not provide
          medical advice, diagnosis, or treatment.
        </p>
      </section>
    </div>
  );
}

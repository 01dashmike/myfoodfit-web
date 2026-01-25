import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Responsible Use & Limitations",
  description:
    "Understanding what MyFoodFit is, what it is not, and how we handle limitations responsibly.",
  alternates: {
    canonical: "/responsible-use",
  },
};

export default function ResponsibleUsePage() {
  return (
    <div className="section-spacing">
      <section className="card-primary rounded-2xl border border-zinc-200 bg-white">
        <h1 className="page-title">
          Responsible Use & Limitations
        </h1>
        <p className="body-text mt-4 max-w-3xl text-zinc-600 sm:mt-6">
          This page explains what MyFoodFit is designed to do, what it is not,
          and how we approach known limitations with transparency and care.
        </p>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">
          What MyFoodFit is
        </h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          MyFoodFit is an informational tool designed to explain packaged food
          products more clearly.
        </p>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          It uses transparent, rule-based logic to evaluate products based on
          ingredients, nutrition data, and user preferences where provided.
        </p>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          The system is explainable. Each evaluation can be traced back to
          specific rules and data points, so users can see how results are
          formed.
        </p>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          Our goal is to support informed choice, not to prescribe or replace
          individual judgment.
        </p>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          The product aims to reduce guesswork in food decisions, not to enforce
          behaviour. Users retain full agency over their choices. The system
          does not target restriction intensity or adherence.
        </p>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">
          What MyFoodFit is not
        </h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          MyFoodFit is explicitly not a medical device.
        </p>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          It does not diagnose, treat, or prevent any health condition.
        </p>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          It is not a substitute for professional medical, dietary, or
          nutritional advice.
        </p>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          If you have specific health concerns or dietary requirements, please
          consult a qualified healthcare professional.
        </p>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">
          Known limitations
        </h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          Data completeness varies by product. Some products have full
          ingredient and nutrition information, while others have partial or
          outdated data.
        </p>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          Ingredient lists and nutrition panels may be incomplete or change over
          time as manufacturers reformulate products.
        </p>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          Results are context-dependent. What works for one person's goals or
          preferences may not suit another's.
        </p>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          The system is rule-based, not predictive. It does not claim to
          forecast health outcomes or guarantee specific results.
        </p>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">
          How this is handled responsibly
        </h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          We use confidence indicators to signal when data is limited or
          uncertain, so users can interpret results with appropriate caution.
        </p>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          Explainability is surfaced throughout the interface. Users can see
          which rules were applied and why a product received a particular
          evaluation.
        </p>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          Where data is incomplete, we apply conservative defaults rather than
          making assumptions that could mislead.
        </p>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          We are open to external review, critique, and collaboration with
          academic, public-sector, and community partners to improve the
          approach over time.
        </p>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          MyFoodFit is in active beta, and we expect the system to evolve as we
          learn from feedback and evidence.
        </p>
      </section>
    </div>
  );
}

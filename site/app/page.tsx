import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="section-spacing">
      <section className="card-primary rounded-2xl border border-zinc-200 bg-white">
        <p className="text-sm font-medium text-zinc-500">Early-stage, in beta</p>
        {/* Mobile: reduced mt-2, desktop: mt-3 unchanged */}
        <h1 className="page-title mt-2 sm:mt-3">
          MyFoodFit helps people understand food choices against their dietary
          needs using a clear green / amber / red system.
        </h1>
        {/* Mobile: reduced mt-4, desktop: mt-6 unchanged */}
        <p className="body-text mt-4 max-w-2xl text-zinc-600 sm:mt-6">
          Scan packaged foods to see how they align with dietary preferences.
          Each rating includes a short explanation and the rule used. The
          product is early-stage and focused on transparency over claims.
        </p>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">
          Product scope (current stage)
        </h2>
        {/* Mobile: reduced mt-4 and space-y-4, desktop: mt-6 and space-y-6 unchanged */}
        <div className="mt-4 space-y-4 sm:mt-6 sm:space-y-6">
          <div>
            <p className="subsection-header">Live in beta</p>
            {/* Mobile: reduced mt-2, desktop: mt-3 unchanged */}
            <ul className="body-text mt-2 space-y-2 text-zinc-600 sm:mt-3">
              <li>• Explainable food evaluation with rule-based logic</li>
              <li>• Preference-based scoring and green / amber / red signals</li>
            </ul>
          </div>
          <div>
            <p className="subsection-header">In development</p>
            <ul className="body-text mt-2 space-y-2 text-zinc-600 sm:mt-3">
              <li>• Structured data review and quality workflows</li>
              <li>• Contributor tools for rule refinement</li>
            </ul>
          </div>
          <div>
            <p className="subsection-header">Planned / exploratory</p>
            <ul className="body-text mt-2 space-y-2 text-zinc-600 sm:mt-3">
              <li>• Research datasets for academic use</li>
              <li>• Institutional APIs and integration pathways</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">
          Who MyFoodFit is for
        </h2>
        <div className="mt-4 space-y-4 sm:mt-6 sm:space-y-6">
          <div>
            <p className="subsection-header">
              Individuals wanting clearer food information
            </p>
            <p className="body-text mt-2 text-zinc-600 sm:mt-3">
              People who want to check packaged foods against dietary needs
              without wading through complex labels.
            </p>
          </div>
          <div>
            <p className="subsection-header">
              Researchers exploring explainable food evaluation
            </p>
            <p className="body-text mt-2 text-zinc-600 sm:mt-3">
              Academic teams interested in transparent, rule-based approaches to
              nutrition information and label interpretation.
            </p>
          </div>
          <div>
            <p className="subsection-header">
              Partners interested in transparent food-label research
            </p>
            <p className="body-text mt-2 text-zinc-600 sm:mt-3">
              Universities, public-sector programs, and innovation groups
              seeking early-stage collaboration on food-label clarity.
            </p>
          </div>
        </div>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">
          Research & Collaboration
        </h2>
        <p className="body-text mt-3 max-w-3xl text-zinc-600 sm:mt-4">
          MyFoodFit uses transparent, rule-based logic rather than black-box
          recommendations, so reviewers can see how outputs are formed.
        </p>
        <p className="body-text mt-3 max-w-3xl text-zinc-600 sm:mt-4">
          The product is designed to support understanding of food choices, not
          to diagnose, treat, or replace professional guidance.
        </p>
        <p className="body-text mt-3 max-w-3xl text-zinc-600 sm:mt-4">
          The project is early-stage and open to academic, public-sector, and
          innovation partnerships.
        </p>
        <p className="mt-4 text-sm text-zinc-500 sm:mt-6">
          <a
            className="underline underline-offset-4 transition hover:text-zinc-700"
            href="/for-funders"
          >
            Read the research approach
          </a>
        </p>
      </section>

      {/* Mobile: reduced gap-4, desktop: gap-6 unchanged */}
      <section className="grid gap-4 sm:gap-6 md:grid-cols-2">
        <div className="card-secondary rounded-2xl border border-zinc-200 bg-white">
          <h2 className="section-header">
            What MyFoodFit does today
          </h2>
          <ul className="body-text mt-3 space-y-3 text-zinc-600 sm:mt-5">
            <li>
              Shows green / amber / red ratings based on stated preferences.
            </li>
            <li>
              Explains why a rating appears, with references to the underlying
              rule.
            </li>
            <li>
              Includes ingredients and nutrition facts with the rating for
              context.
            </li>
          </ul>
        </div>
        <div className="card-secondary rounded-2xl border border-zinc-200 bg-white">
          <h2 className="section-header">
            What MyFoodFit does not do
          </h2>
          <ul className="body-text mt-3 space-y-3 text-zinc-600 sm:mt-5">
            <li>Does not diagnose, treat, or prevent any condition.</li>
            <li>Does not replace professional dietary advice.</li>
            <li>
              Does not adapt to medical history or clinical data in this beta.
            </li>
          </ul>
        </div>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">
          Why we are building this
        </h2>
        <p className="body-text mt-3 max-w-3xl text-zinc-600 sm:mt-4">
          Food labels are dense and inconsistent. We are testing whether a
          transparent, rules-first approach can make label information easier to
          interpret without oversimplifying or promising outcomes.
        </p>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">
          Openness to collaboration
        </h2>
        <p className="body-text mt-3 max-w-3xl text-zinc-600 sm:mt-4">
          We welcome conversations with university innovation teams, public
          health groups, and research collaborators who want to evaluate the
          approach, review the rules, or co-design studies appropriate for an
          early-stage product.
        </p>
      </section>
    </div>
  );
}

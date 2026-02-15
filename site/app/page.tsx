import type { Metadata } from "next";
import RegisterInterestForm from "./components/RegisterInterestForm";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col gap-12 sm:gap-16">
      {/* 1. Hero */}
      <section className="card-primary rounded-2xl border border-zinc-200 bg-white transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md animate-[fadeIn_0.6s_ease-out_forwards]">
        <p className="mt-0 text-xs uppercase tracking-widest text-zinc-500">
          Early-stage, in beta
        </p>
        <h1 className="mt-2 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-[var(--gunmetal)] sm:mt-3 sm:text-4xl">
          MyFoodFit helps people understand food choices against their dietary
          needs using a clear green / amber / red system.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 sm:mt-6 sm:text-lg">
          Scan packaged foods to see how they align with dietary preferences.
          Each rating includes a short explanation and the rule used. The
          product is early-stage and focused on transparency over claims.
        </p>
        <p className="mt-8">
          <span
            className="btn btn-primary btn-large inline-flex items-center justify-center rounded-xl opacity-75 cursor-not-allowed"
          >
            Coming Soon
          </span>
        </p>
        <RegisterInterestForm />
      </section>

      {/* 2. Phone Mockup Section */}
      <section
        id="download"
        className="flex flex-col items-center overflow-x-hidden bg-gradient-to-b from-white to-zinc-50 py-20 sm:py-24 animate-[fadeIn_0.6s_ease-out_forwards]"
      >
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center sm:flex-row sm:justify-center sm:gap-4 md:gap-6">
          <div
            className="hidden shrink-0 sm:block sm:w-[22%] sm:max-w-[100px] md:w-[24%] md:max-w-[120px] opacity-50 blur-sm md:opacity-60"
            aria-hidden
          >
            <div className="aspect-[9/16] w-full overflow-hidden rounded-xl bg-zinc-200 shadow-xl flex items-center justify-center">
              <span className="text-xs text-zinc-400">App</span>
            </div>
          </div>

          <div
            className="shrink-0 w-full max-w-[180px] sm:max-w-[220px] md:max-w-[260px]"
            aria-hidden
          >
            <div className="aspect-[9/16] w-full overflow-hidden rounded-xl bg-zinc-100 shadow-xl flex items-center justify-center transition-transform duration-500 hover:scale-[1.03]">
              <span className="text-sm text-zinc-400">App preview</span>
            </div>
          </div>

          <div
            className="hidden shrink-0 sm:block sm:w-[22%] sm:max-w-[100px] md:w-[24%] md:max-w-[120px] opacity-50 blur-sm md:opacity-60"
            aria-hidden
          >
            <div className="aspect-[9/16] w-full overflow-hidden rounded-xl bg-zinc-200 shadow-xl flex items-center justify-center">
              <span className="text-xs text-zinc-400">App</span>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8 sm:gap-y-4">
          <p className="text-center text-xs uppercase tracking-widest text-zinc-500">
            Personal dietary scoring
          </p>
          <p className="text-center text-xs uppercase tracking-widest text-zinc-500">
            Clear green / amber / red signals
          </p>
          <p className="text-center text-xs uppercase tracking-widest text-zinc-500">
            Explainable rule-based logic
          </p>
        </div>

        <p className="mt-6 text-center text-sm text-zinc-500">
          Built with transparency at its core.
        </p>
      </section>

      {/* 3. Product scope (current stage) */}
      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md animate-[fadeIn_0.6s_ease-out_forwards]">
        <h2 className="mt-0 text-3xl font-semibold leading-tight tracking-tight text-[var(--gunmetal)] sm:text-4xl">
          Product scope (current stage)
        </h2>
        <div className="mt-4 space-y-4 sm:mt-6 sm:space-y-6">
          <div>
            <p className="mt-0 text-base font-medium text-[var(--gunmetal)] sm:text-lg">
              Live in beta
            </p>
            <ul className="mt-2 space-y-3 text-base leading-relaxed text-zinc-600 sm:mt-3 sm:text-lg">
              <li>• Explainable food evaluation with rule-based logic</li>
              <li>• Preference-based scoring and green / amber / red signals</li>
            </ul>
          </div>
          <div>
            <p className="mt-0 text-base font-medium text-[var(--gunmetal)] sm:text-lg">
              In development
            </p>
            <ul className="mt-2 space-y-3 text-base leading-relaxed text-zinc-600 sm:mt-3 sm:text-lg">
              <li>• Structured data review and quality workflows</li>
              <li>• Contributor tools for rule refinement</li>
            </ul>
          </div>
          <div>
            <p className="mt-0 text-base font-medium text-[var(--gunmetal)] sm:text-lg">
              Planned / exploratory
            </p>
            <ul className="mt-2 space-y-3 text-base leading-relaxed text-zinc-600 sm:mt-3 sm:text-lg">
              <li>• Research datasets for academic use</li>
              <li>• Institutional APIs and integration pathways</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Who MyFoodFit is for */}
      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md animate-[fadeIn_0.6s_ease-out_forwards]">
        <h2 className="mt-0 text-3xl font-semibold leading-tight tracking-tight text-[var(--gunmetal)] sm:text-4xl">
          Who MyFoodFit is for
        </h2>
        <div className="mt-4 space-y-4 sm:mt-6 sm:space-y-6">
          <div>
            <p className="mt-0 text-base font-medium text-[var(--gunmetal)] sm:text-lg">
              Individuals wanting clearer food information
            </p>
            <p className="mt-2 max-w-3xl text-base leading-relaxed text-zinc-600 sm:mt-3 sm:text-lg">
              People who want to check packaged foods against dietary needs
              without wading through complex labels.
            </p>
          </div>
          <div>
            <p className="mt-0 text-base font-medium text-[var(--gunmetal)] sm:text-lg">
              Researchers exploring explainable food evaluation
            </p>
            <p className="mt-2 max-w-3xl text-base leading-relaxed text-zinc-600 sm:mt-3 sm:text-lg">
              Academic teams interested in transparent, rule-based approaches to
              nutrition information and label interpretation.
            </p>
          </div>
          <div>
            <p className="mt-0 text-base font-medium text-[var(--gunmetal)] sm:text-lg">
              Partners interested in transparent food-label research
            </p>
            <p className="mt-2 max-w-3xl text-base leading-relaxed text-zinc-600 sm:mt-3 sm:text-lg">
              Universities, public-sector programs, and innovation groups
              seeking early-stage collaboration on food-label clarity.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Research & Collaboration */}
      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md animate-[fadeIn_0.6s_ease-out_forwards]">
        <h2 className="mt-0 text-3xl font-semibold leading-tight tracking-tight text-[var(--gunmetal)] sm:text-4xl">
          Research & Collaboration
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-600 sm:mt-4 sm:text-lg">
          MyFoodFit uses transparent, rule-based logic rather than black-box
          recommendations, so reviewers can see how outputs are formed.
        </p>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-600 sm:text-lg">
          The product is designed to support understanding of food choices, not
          to diagnose, treat, or replace professional guidance.
        </p>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-600 sm:text-lg">
          The project is early-stage and open to academic, public-sector, and
          innovation partnerships.
        </p>
        <p className="mt-4 text-sm text-zinc-500 sm:mt-6">
          <a
            className="underline underline-offset-2 transition hover:text-zinc-700"
            href="/for-funders"
          >
            Read the research approach
          </a>
        </p>
      </section>

      {/* 6. Two-column grid: What does / doesn't do */}
      <section className="grid gap-4 sm:gap-6 md:grid-cols-2">
        <div className="card-secondary rounded-2xl border border-zinc-200 bg-white transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md animate-[fadeIn_0.6s_ease-out_forwards]">
          <h2 className="mt-0 text-3xl font-semibold leading-tight tracking-tight text-[var(--gunmetal)] sm:text-4xl">
            What MyFoodFit does today
          </h2>
          <ul className="mt-4 space-y-3 text-base leading-relaxed text-zinc-600 sm:mt-6 sm:text-lg">
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
        <div className="card-secondary rounded-2xl border border-zinc-200 bg-white transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md animate-[fadeIn_0.6s_ease-out_forwards]">
          <h2 className="mt-0 text-3xl font-semibold leading-tight tracking-tight text-[var(--gunmetal)] sm:text-4xl">
            What MyFoodFit does not do
          </h2>
          <ul className="mt-4 space-y-3 text-base leading-relaxed text-zinc-600 sm:mt-6 sm:text-lg">
            <li>Does not diagnose, treat, or prevent any condition.</li>
            <li>Does not replace professional dietary advice.</li>
            <li>
              Does not adapt to medical history or clinical data in this beta.
            </li>
          </ul>
        </div>
      </section>

      {/* 7. Why we are building this */}
      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md animate-[fadeIn_0.6s_ease-out_forwards]">
        <h2 className="mt-0 text-3xl font-semibold leading-tight tracking-tight text-[var(--gunmetal)] sm:text-4xl">
          Why we are building this
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-600 sm:mt-4 sm:text-lg">
          Food labels are dense and inconsistent. We are testing whether a
          transparent, rules-first approach can make label information easier to
          interpret without oversimplifying or promising outcomes.
        </p>
      </section>

      {/* 8. Openness to collaboration */}
      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md animate-[fadeIn_0.6s_ease-out_forwards]">
        <h2 className="mt-0 text-3xl font-semibold leading-tight tracking-tight text-[var(--gunmetal)] sm:text-4xl">
          Openness to collaboration
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-600 sm:mt-4 sm:text-lg">
          We welcome conversations with university innovation teams, public
          health groups, and research collaborators who want to evaluate the
          approach, review the rules, or co-design studies appropriate for an
          early-stage product.
        </p>
      </section>
    </div>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="section-spacing">
      <section className="card-primary rounded-2xl border border-zinc-200 bg-white">
        <h1 className="page-title">
          About MyFoodFit
        </h1>
        <p className="body-text mt-4 max-w-3xl text-zinc-600 sm:mt-6">
          MyFoodFit is a founder-led project exploring how transparent,
          rule-based explanations can make packaged food labels easier to
          interpret.
        </p>
      </section>

      <section className="grid gap-4 sm:gap-6 md:grid-cols-2">
        <div className="card-secondary rounded-2xl border border-zinc-200 bg-white">
          <h2 className="section-header">Mission</h2>
          <p className="body-text mt-3 text-zinc-600 sm:mt-5">
            Provide clear, explainable information about packaged foods without
            overstating certainty or making medical claims.
          </p>
        </div>
        <div className="card-secondary rounded-2xl border border-zinc-200 bg-white">
          <h2 className="section-header">Values</h2>
          <ul className="body-text mt-3 space-y-3 text-zinc-600 sm:mt-5">
            <li>Clarity over persuasion.</li>
            <li>Traceable rules over opaque scoring.</li>
            <li>Respect for scientific and public-sector review.</li>
          </ul>
        </div>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">Product reality</h2>
        <p className="body-text mt-3 max-w-3xl text-zinc-600 sm:mt-4">
          The app is in beta and the rule set is still evolving. We are focused
          on improving explainability, accuracy of label interpretation, and
          feedback from research partners.
        </p>
      </section>
    </div>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grant Appendix: Scope and Evidence Checklist",
  description:
    "A factual checklist summarising MyFoodFit's current scope, implementation status, and supporting documentation for grant reviewers.",
  alternates: {
    canonical: "/grant-appendix",
  },
};

export default function GrantAppendixPage() {
  return (
    <div className="section-spacing">
      <section className="card-primary rounded-2xl border border-zinc-200 bg-white">
        <h1 className="page-title">Grant appendix: scope and evidence checklist</h1>
        <p className="body-text mt-4 max-w-3xl text-zinc-600 sm:mt-6">
          This checklist summarises current scope and references observable
          functionality only. It is intended to accompany formal review and does
          not introduce new claims or language not present elsewhere in the
          documentation.
        </p>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">Product status</h2>
        <ul className="body-text mt-3 space-y-3 text-zinc-600 sm:mt-5">
          <li>Early-stage product</li>
          <li>Active beta</li>
          <li>Research-aware</li>
          <li>Rule-based logic</li>
          <li>Not a medical device</li>
        </ul>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">What is implemented</h2>
        <ul className="body-text mt-3 space-y-3 text-zinc-600 sm:mt-5">
          <li>Explainable food evaluation</li>
          <li>Preference-driven scoring</li>
          <li>Confidence indicators for incomplete data</li>
          <li>Transparent rule descriptions</li>
          <li>User-facing explanations</li>
        </ul>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">What is not claimed</h2>
        <ul className="body-text mt-3 space-y-3 text-zinc-600 sm:mt-5">
          <li>No diagnosis</li>
          <li>No clinical validation</li>
          <li>No health outcome prediction</li>
          <li>No individualised treatment guidance</li>
        </ul>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">Supporting documentation</h2>
        <div className="body-text mt-3 space-y-3 text-zinc-600 sm:mt-5">
          <p>
            <a
              className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
              href="/for-reviewers"
            >
              For reviewers
            </a>
          </p>
          <p>
            <a
              className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
              href="/how-it-works"
            >
              How it works
            </a>
          </p>
          <p>
            <a
              className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
              href="/research-method"
            >
              Research method
            </a>
          </p>
          <p>
            <a
              className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
              href="/responsible-use"
            >
              Responsible use
            </a>
          </p>
          <p>
            <a
              className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
              href="/evidence-log"
            >
              Evidence log
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

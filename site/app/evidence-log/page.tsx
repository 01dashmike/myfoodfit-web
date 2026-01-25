import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Evidence Log",
  description:
    "A versioned, factual log of what is implemented in the MyFoodFit product over time, suitable for grant reviewers and auditors.",
  alternates: {
    canonical: "/evidence-log",
  },
};

export default function EvidenceLogPage() {
  return (
    <div className="section-spacing">
      <section className="card-primary rounded-2xl border border-zinc-200 bg-white">
        <h1 className="page-title">Evidence log</h1>
        <p className="body-text mt-4 max-w-3xl text-zinc-600 sm:mt-6">
          This log records observable product capabilities as they are
          implemented. Entries describe implementation, not outcomes. Inclusion
          does not imply validation or endorsement.
        </p>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">Current beta (v2.x)</h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">January 2026</p>
        <p className="body-text mt-2 text-zinc-600">Status: Active beta</p>

        <p className="subsection-header mt-4 sm:mt-6">Implemented and observable</p>
        <ul className="body-text mt-2 space-y-2 text-zinc-600 sm:mt-3">
          <li>Rule-based food evaluation logic</li>
          <li>Explainable signals tied to documented rules</li>
          <li>Preference-based evaluation</li>
          <li>Confidence indicators where data is incomplete</li>
          <li>User-facing explanations surfaced in the interface</li>
        </ul>

        <p className="subsection-header mt-4 sm:mt-6">Explicitly not claimed</p>
        <ul className="body-text mt-2 space-y-2 text-zinc-600 sm:mt-3">
          <li>No medical diagnosis</li>
          <li>No individualised medical advice</li>
          <li>No predictive health outcomes</li>
          <li>No clinical validation</li>
        </ul>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">Earlier beta iterations</h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          Earlier versions focused on foundational explainability. Coverage and
          logic have evolved incrementally. Prior versions are not presented as
          current evidence.
        </p>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">How this log should be used</h2>
        <ul className="body-text mt-3 space-y-3 text-zinc-600 sm:mt-5">
          <li>As a scope reference for reviewers</li>
          <li>To support transparency and auditability</li>
          <li>To prevent misinterpretation of beta functionality</li>
        </ul>
      </section>
    </div>
  );
}

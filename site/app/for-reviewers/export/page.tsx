"use client";

import type { Metadata } from "next";

export default function ExportPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex flex-col gap-12">
      {/* Export Control Card - Hidden in Print */}
      <section className="card-primary rounded-2xl border border-zinc-200 bg-white print:hidden">
        <h1 className="page-title">Grant appendix PDF export</h1>
        <p className="body-text mt-6 max-w-3xl text-zinc-600">
          This view is designed for PDF export and grant attachments. It
          combines reviewer materials, grant appendix, and evidence log in a
          single print-ready document.
        </p>
        <div className="mt-8 flex flex-col gap-4">
          <button
            onClick={handlePrint}
            className="inline-flex w-fit items-center justify-center rounded-lg bg-zinc-900 px-6 py-3 text-base font-medium text-white hover:bg-zinc-800"
          >
            Export as PDF
          </button>
          <p className="body-text text-sm text-zinc-500">
            For best results, use Chrome or Safari and select 'Save as PDF'.
          </p>
          <p className="body-text text-sm text-zinc-600">
            <a
              href="/for-reviewers/export"
              className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
            >
              Direct link for reviewers
            </a>
          </p>
        </div>
      </section>

      {/* For Reviewers Content */}
      <section className="card-primary rounded-2xl border border-zinc-200 bg-white">
        <h1 className="page-title">For reviewers</h1>
        <p className="body-text mt-6 max-w-3xl text-zinc-600">
          MyFoodFit is an early-stage, research-aware, rule-based product that
          explains packaged food labels with a green / amber / red system. The
          system is in active beta. Outputs are informational and non-diagnostic.
        </p>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">What is implemented</h2>
        <ul className="body-text mt-5 space-y-3 text-zinc-600">
          <li>Rule-based food evaluation logic</li>
          <li>Explainable signals tied to documented rules</li>
          <li>Preference-driven evaluation</li>
          <li>Confidence indicators where data is incomplete</li>
          <li>Active beta usage</li>
        </ul>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">What this is not</h2>
        <ul className="body-text mt-5 space-y-3 text-zinc-600">
          <li>Not a medical device</li>
          <li>Not diagnostic or therapeutic</li>
          <li>Not predictive</li>
          <li>Not clinically validated</li>
          <li>Not a substitute for professional advice</li>
        </ul>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">How to evaluate this product</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <p className="subsection-header">Explainability</p>
            <p className="body-text mt-3 text-zinc-600">
              Can outputs be traced to rules?
            </p>
          </div>
          <div>
            <p className="subsection-header">Transparency</p>
            <p className="body-text mt-3 text-zinc-600">
              Are sources and limitations visible?
            </p>
          </div>
          <div>
            <p className="subsection-header">Appropriateness of scope</p>
            <p className="body-text mt-3 text-zinc-600">
              Are claims restrained?
            </p>
          </div>
          <div>
            <p className="subsection-header">Handling of uncertainty</p>
            <p className="body-text mt-3 text-zinc-600">
              Is ambiguity surfaced conservatively?
            </p>
          </div>
        </div>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">Supporting material</h2>
        <div className="body-text mt-5 space-y-3 text-zinc-600">
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
        </div>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">Current status</h2>
        <p className="body-text mt-4 text-zinc-600">
          The product is early-stage and evolving. Evaluation and critique are
          welcome. Review does not imply endorsement. Contact is via the
          existing contact page.
        </p>
      </section>

      {/* Grant Appendix Content */}
      <section className="card-primary rounded-2xl border border-zinc-200 bg-white">
        <h1 className="page-title">Grant appendix: scope and evidence checklist</h1>
        <p className="body-text mt-6 max-w-3xl text-zinc-600">
          This checklist summarises current scope and references observable
          functionality only. It is intended to accompany formal review and does
          not introduce new claims or language not present elsewhere in the
          documentation.
        </p>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">Product status</h2>
        <ul className="body-text mt-5 space-y-3 text-zinc-600">
          <li>Early-stage product</li>
          <li>Active beta</li>
          <li>Research-aware</li>
          <li>Rule-based logic</li>
          <li>Not a medical device</li>
        </ul>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">What is implemented</h2>
        <ul className="body-text mt-5 space-y-3 text-zinc-600">
          <li>Explainable food evaluation</li>
          <li>Preference-driven scoring</li>
          <li>Confidence indicators for incomplete data</li>
          <li>Transparent rule descriptions</li>
          <li>User-facing explanations</li>
        </ul>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">What is not claimed</h2>
        <ul className="body-text mt-5 space-y-3 text-zinc-600">
          <li>No diagnosis</li>
          <li>No clinical validation</li>
          <li>No health outcome prediction</li>
          <li>No individualised treatment guidance</li>
        </ul>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">Supporting documentation</h2>
        <div className="body-text mt-5 space-y-3 text-zinc-600">
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

      {/* Evidence Log Content */}
      <section className="card-primary rounded-2xl border border-zinc-200 bg-white">
        <h1 className="page-title">Evidence log</h1>
        <p className="body-text mt-6 max-w-3xl text-zinc-600">
          This log records observable product capabilities as they are
          implemented. Entries describe implementation, not outcomes. Inclusion
          does not imply validation or endorsement.
        </p>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">Current beta (v2.x)</h2>
        <p className="body-text mt-4 text-zinc-600">January 2026</p>
        <p className="body-text mt-2 text-zinc-600">Status: Active beta</p>

        <p className="subsection-header mt-6">Implemented and observable</p>
        <ul className="body-text mt-3 space-y-2 text-zinc-600">
          <li>Rule-based food evaluation logic</li>
          <li>Explainable signals tied to documented rules</li>
          <li>Preference-based evaluation</li>
          <li>Confidence indicators where data is incomplete</li>
          <li>User-facing explanations surfaced in the interface</li>
        </ul>

        <p className="subsection-header mt-6">Explicitly not claimed</p>
        <ul className="body-text mt-3 space-y-2 text-zinc-600">
          <li>No medical diagnosis</li>
          <li>No individualised medical advice</li>
          <li>No predictive health outcomes</li>
          <li>No clinical validation</li>
        </ul>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">Earlier beta iterations</h2>
        <p className="body-text mt-4 text-zinc-600">
          Earlier versions focused on foundational explainability. Coverage and
          logic have evolved incrementally. Prior versions are not presented as
          current evidence.
        </p>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">How this log should be used</h2>
        <ul className="body-text mt-5 space-y-3 text-zinc-600">
          <li>As a scope reference for reviewers</li>
          <li>To support transparency and auditability</li>
          <li>To prevent misinterpretation of beta functionality</li>
        </ul>
      </section>
    </div>
  );
}

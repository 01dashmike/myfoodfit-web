import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: {
    canonical: "/research-method",
  },
};

export default function ResearchMethodPage() {
  return (
    <div className="section-spacing">
      <section className="card-primary rounded-2xl border border-zinc-200 bg-white">
        <h1 className="page-title">
          Research method
        </h1>
        <p className="body-text mt-4 max-w-3xl text-zinc-600 sm:mt-6">
          We focus on transparency and traceability. The goal is to make each
          rule easy to audit, discuss, and revise as evidence or guidance
          evolves.
        </p>
        <p className="mt-3 text-sm text-zinc-500 sm:mt-4">
          See also:{" "}
          <Link
            href="/responsible-use"
            className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-600"
          >
            Responsible use & limitations
          </Link>
        </p>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-100 bg-zinc-50">
        <h2 className="section-header">
          How to read this page
        </h2>
        <ul className="body-text mt-3 space-y-2 text-zinc-600 sm:mt-4">
          <li>
            • The system uses rule-based logic that can be reviewed and
            explained at each step.
          </li>
          <li>
            • Outputs are informational and designed to support understanding,
            not to diagnose or treat.
          </li>
          <li>
            • The product is in active beta, with ongoing refinement based on
            feedback and evidence.
          </li>
        </ul>
      </section>

      <section className="grid gap-4 sm:gap-6 md:grid-cols-2">
        <div className="card-secondary rounded-2xl border border-zinc-200 bg-white">
          <h2 className="section-header">
            Sources and governance
          </h2>
          <p className="body-text mt-3 text-zinc-600 sm:mt-5">
            Rules are grounded in public nutrition labeling guidance and
            published thresholds. We track sources, version changes, and open
            questions to keep the logic reviewable.
          </p>
        </div>
        <div className="card-secondary rounded-2xl border border-zinc-200 bg-white">
          <h2 className="section-header">Rule design</h2>
          <p className="body-text mt-3 text-zinc-600 sm:mt-5">
            Each rule is explicit, with defined inputs and output language. We
            avoid probabilistic scoring and keep the logic human-readable for
            partner review.
          </p>
        </div>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">
          Evaluation approach
        </h2>
        <ul className="body-text mt-3 space-y-3 text-zinc-600 sm:mt-4">
          <li>Usability testing to confirm clarity of explanations.</li>
          <li>Expert review of rule mapping and thresholds.</li>
          <li>
            Pilot feedback from partners to understand real-world constraints.
          </li>
        </ul>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">
          Primary rule prioritisation
        </h2>
        <p className="body-text mt-3 max-w-3xl text-zinc-600 sm:mt-4">
          Users often have one dominant dietary requirement—such as avoiding
          gluten, managing sodium intake, or reducing sugar.
        </p>
        <p className="body-text mt-3 max-w-3xl text-zinc-600 sm:mt-4">
          The system prioritises this primary rule in evaluations, treating
          secondary preferences as contextual rather than equally weighted. This
          reflects how people make food decisions in practice.
        </p>
        <p className="body-text mt-3 max-w-3xl text-zinc-600 sm:mt-4">
          This is a design decision intended to reduce cognitive load and improve
          clarity. It is not a medical judgement about which dietary needs are
          more important.
        </p>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">
          Explainability in Practice
        </h2>
        <div className="mt-4 rounded-xl border border-zinc-200 bg-white p-4 sm:mt-6">
          <p className="subsection-header">
            Transparency, limitations, and non-diagnostic intent
          </p>
          <div className="mt-3 aspect-[9/16] w-full max-w-xs mx-auto rounded-lg overflow-hidden border border-zinc-200 shadow-sm">
            <Image
              src="/screenshots/scan-result.png"
              alt="Transparency and explainability screenshot"
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
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">
          Evidence Summary (Current Beta)
        </h2>
        <p className="body-text mt-3 max-w-3xl text-zinc-600 sm:mt-4">
          The following statements describe what is implemented and observable
          in the current beta release.
        </p>
        <ul className="body-text mt-3 space-y-2 text-zinc-600 sm:mt-4">
          <li>Rule-based evaluation logic is implemented.</li>
          <li>Preference weighting is operational.</li>
          <li>Explainability is surfaced in the interface.</li>
          <li>Confidence indicators are shown where data is limited.</li>
          <li>The system is already in active beta use.</li>
        </ul>
        <p className="body-text mt-4 max-w-3xl text-zinc-600 sm:mt-6">
          The current beta does not claim or attempt the following:
        </p>
        <ul className="body-text mt-3 space-y-2 text-zinc-600 sm:mt-4">
          <li>No medical diagnosis.</li>
          <li>No individualised medical advice.</li>
          <li>No predictive health outcomes.</li>
          <li>No replacement for professional guidance.</li>
        </ul>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">
          Current Limitations
        </h2>
        <p className="body-text mt-3 max-w-3xl text-zinc-600 sm:mt-4">
          This scope is intentionally constrained to keep outputs reviewable and
          interpretable during beta.
        </p>
        <ul className="body-text mt-3 space-y-2 text-zinc-600 sm:mt-4">
          <li>Data coverage varies by product and region.</li>
          <li>Ingredient completeness is not guaranteed.</li>
          <li>Conservative warnings may appear in ambiguous cases.</li>
          <li>
            Evaluation logic is designed to prioritise transparency over
            certainty.
          </li>
          <li>Ongoing iteration and validation are expected during beta.</li>
        </ul>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">
          Explainability before model tuning
        </h2>
        <p className="body-text mt-3 max-w-3xl text-zinc-600 sm:mt-4">
          MyFoodFit prioritises transparency over prediction accuracy. The system
          uses explainable logic rather than complex models that cannot be
          easily audited or understood.
        </p>
        <p className="body-text mt-3 max-w-3xl text-zinc-600 sm:mt-4">
          This means that sophistication is deliberately limited in favour of
          interpretability. Users and reviewers can trace each evaluation back to
          specific rules and data points.
        </p>
        <p className="body-text mt-3 max-w-3xl text-zinc-600 sm:mt-4">
          Where data is uncertain or incomplete, the system signals this
          conservatively rather than inferring or predicting missing information.
        </p>
        <p className="body-text mt-3 max-w-3xl text-zinc-600 sm:mt-4">
          This approach reflects the responsibility of operating in a domain where
          clarity and caution are more appropriate than confidence.
        </p>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">
          Development principles
        </h2>
        <p className="body-text mt-3 max-w-3xl text-zinc-600 sm:mt-4">
          The following principles guide how MyFoodFit is being built:
        </p>
        <ul className="body-text mt-3 space-y-2 text-zinc-600 sm:mt-4">
          <li>
            Explainability before model tuning. Logic is kept interpretable even
            when this limits sophistication.
          </li>
          <li>
            Conservative defaults where data is incomplete. The system signals
            uncertainty rather than inferring missing information.
          </li>
          <li>
            User context and preference awareness. Outputs reflect stated dietary
            goals and constraints, not universal recommendations.
          </li>
          <li>
            Transparency over prediction. The product describes what is known
            about a food, not what might happen if consumed.
          </li>
          <li>
            Iterative refinement informed by critique. Rules and thresholds are
            revised in response to expert review and user feedback.
          </li>
        </ul>
        <p className="body-text mt-4 max-w-3xl text-zinc-600 sm:mt-6">
          These principles reflect the constraints and responsibilities of an
          early-stage product operating in a domain where clarity and caution are
          more appropriate than confidence.
        </p>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">Current status</h2>
        <p className="body-text mt-3 max-w-3xl text-zinc-600 sm:mt-4">
          MyFoodFit is in beta. We have not completed clinical validation and do
          not claim health outcomes. We are actively seeking collaborators to
          review the approach and refine the research agenda.
        </p>
      </section>
    </div>
  );
}

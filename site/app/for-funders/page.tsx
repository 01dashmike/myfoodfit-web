import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "For Funders & Universities",
  description:
    "A brief overview of MyFoodFit's approach, current stage, and openness to research and innovation collaboration.",
  alternates: {
    canonical: "/for-funders",
  },
};

export default function ForFundersPage() {
  return (
    <div className="section-spacing">
      <section className="card-primary rounded-2xl border border-zinc-200 bg-white">
        <h1 className="page-title">
          For Funders & Universities
        </h1>
        <p className="body-text mt-4 max-w-3xl text-zinc-600 sm:mt-6">
          This page provides a concise overview of MyFoodFit for funders,
          universities, and institutional partners.
        </p>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">
          What MyFoodFit is
        </h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          MyFoodFit is a consumer-facing product that explains packaged foods
          using structured, rule-based logic and a green / amber / red system.
        </p>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          It is early-stage and iterative, with ongoing refinement based on
          feedback and evidence.
        </p>
        <p className="subsection-header mt-4 sm:mt-6">What it is not</p>
        <ul className="body-text mt-2 space-y-2 text-zinc-600 sm:mt-3">
          <li>Not a medical device.</li>
          <li>Not diagnostic or therapeutic.</li>
          <li>Not a source of individualised medical advice.</li>
        </ul>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">
          Why this problem area matters
        </h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          Food environments are complex and people face a lot of choice with
          limited time.
        </p>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          Labels are hard to interpret, and nutrition language is often
          inconsistent.
        </p>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          Many people want clearer, more understandable information they can use
          in everyday decisions.
        </p>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">
          How the product works (high level)
        </h2>
        <ul className="body-text mt-3 space-y-3 text-zinc-600 sm:mt-5">
          <li>
            Inputs include product data and user preferences where provided.
          </li>
          <li>
            Processing uses transparent rules and scoring logic designed to be
            explainable.
          </li>
          <li>
            Outputs are interpretable signals intended to support understanding,
            not prescriptions.
          </li>
        </ul>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">
          Product features
        </h2>
        <div className="mt-4 grid gap-4 sm:mt-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-zinc-200 bg-white p-4">
            <p className="subsection-header">
              Scan a product
            </p>
            <div className="mt-3 aspect-[9/16] w-full max-w-xs mx-auto rounded-lg overflow-hidden border border-zinc-200 shadow-sm">
              <Image
                src="/screenshots/scan-result.png"
                alt="Scan a product screenshot"
                width={375}
                height={667}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-4">
            <p className="subsection-header">
              UPF context
            </p>
            <div className="mt-3 aspect-[9/16] w-full max-w-xs mx-auto rounded-lg overflow-hidden border border-zinc-200 shadow-sm">
              <Image
                src="/screenshots/upf-context.png"
                alt="UPF context screenshot"
                width={375}
                height={667}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-4">
            <p className="subsection-header">
              Saved foods
            </p>
            <div className="mt-3 aspect-[9/16] w-full max-w-xs mx-auto rounded-lg overflow-hidden border border-zinc-200 shadow-sm">
              <Image
                src="/screenshots/cupboard.png"
                alt="Saved foods screenshot"
                width={375}
                height={667}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-4">
            <p className="subsection-header">
              Recipes from cupboard
            </p>
            <div className="mt-3 aspect-[9/16] w-full max-w-xs mx-auto rounded-lg overflow-hidden border border-zinc-200 shadow-sm">
              <Image
                src="/screenshots/recipes.png"
                alt="Recipes from cupboard screenshot"
                width={375}
                height={667}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">
          Current stage & limitations
        </h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          MyFoodFit is early-stage and designed to evolve with evidence.
        </p>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          Dataset coverage is limited and being expanded in a careful, staged
          way.
        </p>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          We are actively learning from feedback and improving how we explain
          rules and outcomes.
        </p>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">
          Collaboration interest
        </h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          We are open to university research collaboration, innovation
          partnerships, and evaluation or methodological input.
        </p>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          Discussions are exploratory and stage-appropriate, with scope set
          collaboratively.
        </p>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">Contact</h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          <a
            className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
            href="mailto:support@myfoodfit.co.uk"
          >
            support@myfoodfit.co.uk
          </a>
        </p>
        <p className="mt-3 text-sm text-zinc-500">
          For collaboration, funding enquiries, and research discussions.
        </p>
      </section>
    </div>
  );
}

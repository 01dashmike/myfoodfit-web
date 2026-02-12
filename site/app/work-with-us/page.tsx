import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work With Us",
  description:
    "Explore collaboration opportunities with MyFoodFit. We're open to partnerships with researchers, retailers, public sector organisations, and developers.",
  alternates: {
    canonical: "/work-with-us",
  },
};

export default function WorkWithUsPage() {
  return (
    <div className="section-spacing">
      <section className="card-primary rounded-2xl border border-zinc-200 bg-white">
        <h1 className="page-title">Work With Us</h1>
        <p className="body-text mt-4 max-w-3xl text-zinc-600 sm:mt-6">
          MyFoodFit is an early-stage project and we're open to collaboration.
          Whether you're a researcher, retailer, public sector organisation, or
          developer, we'd like to hear from you.
        </p>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">Who We Work With</h2>
        <div className="mt-4 grid gap-4 sm:mt-6 sm:grid-cols-2">
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 sm:p-5">
            <p className="subsection-header">Researchers & Universities</p>
            <p className="body-text mt-2 text-zinc-600 sm:mt-3">
              Academic teams interested in transparent, rule-based approaches to
              nutrition information and consumer understanding of food labels.
            </p>
            <p className="mt-3 text-sm text-zinc-500">
              <a
                className="underline underline-offset-4 transition hover:text-zinc-700"
                href="/for-funders"
              >
                More for funders & universities
              </a>
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 sm:p-5">
            <p className="subsection-header">Retailers & Food Brands</p>
            <p className="body-text mt-2 text-zinc-600 sm:mt-3">
              Supermarkets, food manufacturers, and brands interested in helping
              customers make more informed choices about products.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 sm:p-5">
            <p className="subsection-header">Public Sector & Health Organisations</p>
            <p className="body-text mt-2 text-zinc-600 sm:mt-3">
              NHS trusts, local authorities, and charities working on public
              health, dietary support, or food education initiatives.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 sm:p-5">
            <p className="subsection-header">Developers & Technical Partners</p>
            <p className="body-text mt-2 text-zinc-600 sm:mt-3">
              Teams interested in API access, data integrations, or building on
              top of transparent food evaluation logic.
            </p>
          </div>
        </div>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">How We Collaborate</h2>
        <ul className="body-text mt-3 space-y-3 text-zinc-600 sm:mt-5">
          <li>
            <strong>Research partnerships</strong> — joint studies, data
            sharing, or methodological review of our rule-based approach.
          </li>
          <li>
            <strong>Pilot programmes</strong> — testing MyFoodFit with specific
            user groups or in particular contexts.
          </li>
          <li>
            <strong>Integration discussions</strong> — exploring how MyFoodFit
            data or logic could support your products or services.
          </li>
          <li>
            <strong>Feedback & advisory</strong> — input on our methodology,
            user experience, or approach to responsible communication.
          </li>
        </ul>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">Our Approach</h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          We're transparent about what MyFoodFit is and isn't. It's not a
          medical device, not diagnostic, and not a replacement for professional
          advice.
        </p>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          We work collaboratively and set scope together. Discussions are
          exploratory and stage-appropriate — we're early-stage and growing
          carefully.
        </p>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          We value partners who share our commitment to clarity, honesty, and
          respect for evidence.
        </p>
      </section>

      <section className="card-secondary rounded-2xl border border-zinc-200 bg-white">
        <h2 className="section-header">Get in Touch</h2>
        <p className="body-text mt-3 text-zinc-600 sm:mt-4">
          If you're interested in exploring a partnership, please reach out.
          We'd love to hear about what you're working on.
        </p>
        <p className="body-text mt-4 sm:mt-6">
          <a
            className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600"
            href="mailto:support@myfoodfit.co.uk"
          >
            support@myfoodfit.co.uk
          </a>
        </p>
        <p className="mt-3 text-sm text-zinc-500">
          For partnership enquiries, research collaboration, and integration
          discussions.
        </p>
      </section>
    </div>
  );
}

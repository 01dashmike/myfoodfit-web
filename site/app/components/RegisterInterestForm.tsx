"use client";

import { useFormState, useFormStatus } from "react-dom";
import Link from "next/link";
import { registerInterest } from "../actions/register-interest";

function formAction(_prev: { success?: boolean; error?: string } | null, formData: FormData) {
  return registerInterest(formData).then((r) =>
    r.success ? { success: true } : { success: false, error: r.error }
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="btn btn-primary btn-large inline-flex items-center justify-center rounded-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
    >
      {pending ? "Submitting…" : "Register interest"}
    </button>
  );
}

export default function RegisterInterestForm() {
  const [state, formActionWithState] = useFormState(formAction, null);

  if (state?.success) {
    return (
      <div className="mt-10 max-w-xl rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
        <p className="text-base font-medium text-[var(--gunmetal)] sm:text-lg">
          Thank you. We&apos;ll be in touch when MyFoodFit launches.
        </p>
      </div>
    );
  }

  return (
    <form action={formActionWithState} className="mt-10 max-w-xl space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[var(--gunmetal)]">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-2 w-full rounded-lg border border-zinc-300 px-4 py-3 text-base text-[var(--gunmetal)] focus:border-[var(--accent-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-outline)]"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[var(--gunmetal)]">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-2 w-full rounded-lg border border-zinc-300 px-4 py-3 text-base text-[var(--gunmetal)] focus:border-[var(--accent-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-outline)]"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="how_found" className="block text-sm font-medium text-[var(--gunmetal)]">
          How did you hear about us? <span className="text-zinc-500">(optional)</span>
        </label>
        <textarea
          id="how_found"
          name="how_found"
          rows={3}
          className="mt-2 w-full resize-y rounded-lg border border-zinc-300 px-4 py-3 text-base text-[var(--gunmetal)] focus:border-[var(--accent-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-outline)]"
          placeholder="e.g. social media, search, a friend..."
        />
      </div>
      <div className="mt-6">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            name="consent"
            required
            className="mt-1 h-4 w-4 rounded border-zinc-300 text-[var(--accent-primary)] focus:ring-[var(--accent-primary)]"
          />
          <span className="text-sm text-zinc-600">
            I agree to the{" "}
            <Link href="/privacy" className="underline underline-offset-2 hover:text-[var(--accent-primary)]">
              Privacy Policy
            </Link>{" "}
            and would like to be notified when MyFoodFit launches.
          </span>
        </label>
      </div>
      {state?.error && (
        <p className="text-sm text-red-600" role="alert">
          {state.error}
        </p>
      )}
      <div className="mt-6">
        <SubmitButton />
      </div>
    </form>
  );
}

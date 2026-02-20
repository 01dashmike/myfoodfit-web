"use client";

import { useFormState, useFormStatus } from "react-dom";
import Link from "next/link";
import { registerInterest } from "../actions/register-interest";

function formAction(_prev: { success?: boolean; error?: string } | null, formData: FormData) {
  return registerInterest(formData).then((r) =>
    r.success ? { success: true } : { success: false, error: (r as { success: false; error: string }).error }
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="form-submit-btn btn btn-primary inline-flex w-full items-center justify-center rounded-[10px] py-4 text-base font-semibold transition-all duration-200 hover:scale-[1.02] hover:shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
    >
      {pending ? "Submitting…" : "Register interest"}
    </button>
  );
}

export default function RegisterInterestForm() {
  const [state, formActionWithState] = useFormState(formAction, null);

  if (state?.success) {
    return (
      <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
        <p className="mt-0 text-base leading-relaxed text-zinc-600">
          Thank you. We&apos;ll be in touch when MyFoodFit launches.
        </p>
      </div>
    );
  }

  return (
    <div className="form-card-content">
      <p className="mt-0 text-xs uppercase tracking-widest text-zinc-500">Register your interest</p>
      <form action={formActionWithState} className="mt-4">
        <div className="form-input-group">
          <label htmlFor="name" className="block text-xs uppercase tracking-widest text-zinc-500">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="form-input"
            placeholder="Your name"
          />
        </div>
        <div className="form-input-group">
          <label htmlFor="email" className="block text-xs uppercase tracking-widest text-zinc-500">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="form-input"
            placeholder="you@example.com"
          />
        </div>
        <div className="form-input-group">
          <label htmlFor="how_found" className="block text-xs uppercase tracking-widest text-zinc-500">
            How did you hear about us? <span className="normal-case tracking-normal">(optional)</span>
          </label>
          <textarea
            id="how_found"
            name="how_found"
            rows={3}
            className="form-textarea"
            placeholder="e.g. social media, search, a friend..."
          />
        </div>
        <div className="form-input-group">
          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              name="consent"
              required
              className="mt-1 h-4 w-4 rounded border-zinc-300 text-[var(--accent-primary)] focus:ring-[var(--accent-primary)]"
            />
            <span className="text-base leading-relaxed text-zinc-600">
              I agree to the{" "}
              <Link href="/privacy" className="underline underline-offset-2 hover:text-[var(--accent-primary)]">
                Privacy Policy
              </Link>{" "}
              and would like to be notified when MyFoodFit launches.
            </span>
          </label>
        </div>
        {state?.error && (
          <p className="mb-4 text-base text-red-600" role="alert">
            {state.error}
          </p>
        )}
        <div className="form-cta-wrap">
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}

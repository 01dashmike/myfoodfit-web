"use server";

import { createServerSupabase } from "../../lib/supabase/server";
import { sendInterestNotification } from "../../lib/email";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type RegisterInterestResult =
  | { success: true }
  | { success: false; error: string };

export async function registerInterest(
  formData: FormData
): Promise<RegisterInterestResult> {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const howFound = (formData.get("how_found") as string)?.trim() || null;
  const consent = formData.get("consent") === "on";

  if (!name) {
    return { success: false, error: "Name is required." };
  }

  if (!email) {
    return { success: false, error: "Email is required." };
  }

  if (!EMAIL_REGEX.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  if (!consent) {
    return {
      success: false,
      error: "Please agree to the Privacy Policy to continue.",
    };
  }

  const supabase = createServerSupabase();
  const createdAt = new Date().toISOString();

  const { error: insertError } = await supabase.from("interest_registrations").insert({
    name,
    email,
    how_found: howFound || null,
  });

  if (insertError) {
    console.error("Supabase insert error:", insertError);
    return {
      success: false,
      error: "Something went wrong. Please try again later.",
    };
  }

  try {
    await sendInterestNotification({ name, email, howFound, createdAt });
  } catch (emailError) {
    console.error("Email send error:", emailError);
    return {
      success: false,
      error: "We saved your interest but couldn't send a notification. We'll still be in touch.",
    };
  }

  return { success: true };
}

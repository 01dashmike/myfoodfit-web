import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type InterestRegistration = {
  name: string;
  email: string;
  howFound: string | null;
  createdAt: string;
};

export async function sendInterestNotification(data: InterestRegistration) {
  const howFoundText = data.howFound?.trim() || "—";
  const body = `New interest registration:

Name: ${data.name}
Email: ${data.email}
How did they hear about us: ${howFoundText}
Submitted: ${data.createdAt}
`;

  const { error } = await resend.emails.send({
    from: "MyFoodFit <onboarding@resend.dev>",
    to: "support@myfoodfit.co.uk",
    subject: `MyFoodFit interest: ${data.name}`,
    text: body,
  });

  if (error) {
    throw new Error(error.message);
  }
}

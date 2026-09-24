import { isHoneypot, formatContactMessage, validateContact } from "@/lib/validation";

export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch {
    return Response.json(
      { ok: false, message: "The request body was not valid JSON." },
      { status: 400 },
    );
  }

  if (isHoneypot(data)) {
    return Response.json({ ok: true });
  }

  const errors = validateContact(data);
  if (Object.keys(errors).length) {
    return Response.json({ ok: false, errors }, { status: 400 });
  }

  const text = formatContactMessage(data);
  const subject = `Video enquiry — ${data.projectType} from ${data.name}`;

  if (process.env.RESEND_API_KEY) {
    const from = process.env.RESEND_FROM_EMAIL;
    const to = process.env.CONTACT_TO_EMAIL;
    if (!from || !to) {
      return Response.json(
        {
          ok: false,
          message: "Resend is missing RESEND_FROM_EMAIL or CONTACT_TO_EMAIL.",
        },
        { status: 500 },
      );
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: data.email,
        subject,
        text,
      }),
    });

    if (!response.ok) {
      return Response.json(
        { ok: false, message: "Resend could not send the email." },
        { status: 502 },
      );
    }

    return Response.json({ ok: true, provider: "resend" });
  }

  if (process.env.FORMSPREE_FORM_ID) {
    const response = await fetch(
      `https://formspree.io/f/${process.env.FORMSPREE_FORM_ID}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          projectType: data.projectType,
          budget: data.budget,
          message: data.message,
          _subject: subject,
        }),
      },
    );

    if (!response.ok) {
      return Response.json(
        { ok: false, message: "Formspree could not send the email." },
        { status: 502 },
      );
    }

    return Response.json({ ok: true, provider: "formspree" });
  }

  return Response.json(
    {
      ok: false,
      code: "UNCONFIGURED",
      message: "Contact provider is not configured.",
    },
    { status: 503 },
  );
}

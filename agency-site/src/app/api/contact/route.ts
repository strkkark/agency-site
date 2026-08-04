import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name ?? "").trim();
    const company = String(body.company ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const budget = String(body.budget ?? "").trim();
    const timeline = String(body.timeline ?? "").trim();
    const description = String(body.description ?? "").trim();

    if (!name || !email || !description) {
      return NextResponse.json(
        { error: "Name, email and project description are required." },
        { status: 400 },
      );
    }

    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL!,
      to: ["meridian.services@gmx.net"],
      replyTo: email,
      subject: `New Meridian inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #111827;">
          <h1>New Meridian project inquiry</h1>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Company:</strong> ${escapeHtml(company || "Not provided")}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
          <p><strong>Budget:</strong> ${escapeHtml(budget || "Not selected")}</p>
          <p><strong>Timeline:</strong> ${escapeHtml(timeline || "Not selected")}</p>
          <h2>Project description</h2>
          <p style="white-space: pre-wrap;">${escapeHtml(description)}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "The message could not be sent." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 },
    );
  }
}

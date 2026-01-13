import { NextResponse } from "next/server";

type LeadPayload = {
  type?: string;
  source?: string;
  name?: string;
  company?: string;
  phone?: string;
  email?: string;
  message?: string;
  page?: string;
};

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as LeadPayload; console.log("LEAD FRONTEND:", data);

    if (!data.phone && !data.email) {
      return NextResponse.json(
        { ok: false, error: "phone_or_email_required" },
        { status: 400 }
      );
    }

    const webhook = process.env.SHEETS_WEBHOOK_URL;
    const secret = process.env.SHEETS_SECRET;

    if (!webhook || !secret) {
      console.log("Lead reçu (SHEETS_* manquants):", data);
      return NextResponse.json({ ok: true, mode: "log_only" });
    }

    const payload = {
      ...data,
      page: data.page || req.headers.get("referer") || "",
      secret,
    };

    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const text = await res.text().catch(() => "");

    if (!res.ok) {
      console.error("Sheets webhook error:", res.status, text);
      return NextResponse.json({ ok: false, error: "sheets_failed" }, { status: 500 });
    }

    return NextResponse.json({ ok: true, mode: "sheet" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
  }
}

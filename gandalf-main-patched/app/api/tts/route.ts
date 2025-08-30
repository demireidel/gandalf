import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { text, voice = "verse" } = await req.json();
    if (!process.env.OPENAI_API_KEY) {
      return new NextResponse("Missing OPENAI_API_KEY", { status: 500 });
    }
    const r = await fetch("https://api.openai.com/v1/audio/speech", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini-tts",
        input: text,
        voice,
        format: "mp3"
      })
    });
    if (!r.ok) {
      const msg = await r.text();
      return new NextResponse(msg, { status: 500 });
    }
    const arrayBuf = await r.arrayBuffer();
    return new NextResponse(arrayBuf, {
      status: 200,
      headers: { "Content-Type": "audio/mpeg" }
    });
  } catch (e: any) {
    return new NextResponse(e?.message ?? "TTS error", { status: 500 });
  }
}

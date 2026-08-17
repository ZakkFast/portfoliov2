import { NextResponse } from "next/server";

const FALLBACK_RESUME_URL =
  "https://assets.ctfassets.net/0b0og15jgw1m/42v3ffUForyRRcNlMuwXOK/587a2bf62c20dab5290a319710da1562/Zachary_Fast.pdf";

export async function GET() {
  const resumeUrl = process.env.RESUME_URL || FALLBACK_RESUME_URL;

  try {
    const response = await fetch(resumeUrl, {
      headers: {
        "User-Agent": "ZakkFast-Portfolio/1.0",
      },
      next: { revalidate: 86400 },
    });

    if (!response.ok) {
      console.error(`Resume fetch failed with status ${response.status}`);
      return NextResponse.json({ error: "Failed to fetch resume" }, { status: 502 });
    }

    const buffer = await response.arrayBuffer();

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Zachary-Fast-Resume.pdf"',
        "Content-Length": buffer.byteLength.toString(),
        "Cache-Control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
      },
    });
  } catch (error) {
    console.error("Resume proxy failed", error);
    return NextResponse.json({ error: "Failed to download resume" }, { status: 500 });
  }
}

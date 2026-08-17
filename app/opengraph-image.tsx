import { ImageResponse } from "next/og";

export const alt = "Zakk Fast — Software Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 78px",
          background: "linear-gradient(135deg, #ffffff 0%, #ecfeff 52%, #cffafe 100%)",
          color: "#111827",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 30, fontWeight: 700 }}>
          zakk fast<span style={{ color: "#22d3ee" }}>.</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 950 }}>
          <div style={{ fontSize: 76, lineHeight: 1.05, fontWeight: 800, letterSpacing: "-3px" }}>
            Software engineer who likes solving the messy parts.
          </div>
          <div style={{ marginTop: 28, fontSize: 28, lineHeight: 1.35, color: "#4b5563" }}>
            Web applications · APIs · backend systems · TypeScript · Python
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 22, color: "#374151" }}>
          <span>zakkfast.io</span>
          <span style={{ color: "#06b6d4" }}>•</span>
          <span>Open to software engineering opportunities</span>
        </div>
      </div>
    ),
    size
  );
}

import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} - ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          background:
            "radial-gradient(circle at 82% 28%, rgba(193,0,24,0.22), transparent 44%), radial-gradient(circle at 18% 18%, rgba(126,196,42,0.34), transparent 48%), radial-gradient(circle at 55% 78%, rgba(255,140,0,0.2), transparent 50%), linear-gradient(145deg, #fce98d 0%, #c6e84a 48%, #0f2f12 100%)",
        }}
      >
        <div style={{ display: "flex", fontSize: 44, fontWeight: 800, color: "#0f2f12" }}>
          {site.name}
        </div>
        <div style={{ display: "flex", marginTop: 12, fontSize: 24, color: "#144011" }}>
          {site.productLine}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 52,
            fontWeight: 800,
            lineHeight: 1.1,
            color: "#c10018",
            letterSpacing: "-0.02em",
            maxWidth: 980,
          }}
        >
          An Exciting New Way to Eat Fruit
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 28,
            color: "#183a1b",
            maxWidth: 820,
          }}
        >
          {site.heroSupport}
        </div>
      </div>
    ),
    { ...size },
  );
}

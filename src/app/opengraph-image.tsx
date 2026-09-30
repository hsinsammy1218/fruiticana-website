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
            "radial-gradient(circle at 80% 30%, rgba(224,18,44,0.2), transparent 45%), radial-gradient(circle at 15% 20%, rgba(62,192,46,0.32), transparent 50%), linear-gradient(145deg, #fffdf6 0%, #fff4d4 50%, #dff8c8 100%)",
        }}
      >
        <div style={{ display: "flex", fontSize: 44, fontWeight: 800, color: "#14501F" }}>
          {site.name}
        </div>
        <div style={{ display: "flex", marginTop: 12, fontSize: 24, color: "#176F14" }}>
          {site.productLine}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 52,
            fontWeight: 800,
            lineHeight: 1.1,
            color: "#E0122C",
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
            color: "#375643",
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

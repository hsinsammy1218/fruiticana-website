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
          padding: "80px",
          background: "linear-gradient(135deg, #fff9ef 0%, #f6ead3 100%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              display: "flex",
              width: 84,
              height: 84,
              borderRadius: 24,
              background: "#163d2a",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 999,
                background: "#5faf45",
              }}
            />
          </div>
          <div style={{ fontSize: 44, fontWeight: 800, color: "#163d2a" }}>
            {site.name}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 48,
            fontSize: 76,
            fontWeight: 800,
            lineHeight: 1.05,
            color: "#163d2a",
            maxWidth: 900,
          }}
        >
          {site.tagline}
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 32,
            color: "#5c675f",
            maxWidth: 820,
          }}
        >
          Information for school food programs.
        </div>
      </div>
    ),
    { ...size },
  );
}

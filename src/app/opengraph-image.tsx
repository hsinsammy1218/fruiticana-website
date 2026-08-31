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
          background: "linear-gradient(135deg, #FFFBEF 0%, #FDF6E3 100%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              display: "flex",
              width: 84,
              height: 84,
              borderRadius: 24,
              background: "#244B2A",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 999,
                background: "#65A844",
              }}
            />
          </div>
          <div style={{ fontSize: 44, fontWeight: 800, color: "#244B2A" }}>
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
            color: "#244B2A",
            maxWidth: 900,
          }}
        >
          {site.legacyTagline}
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

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
            "radial-gradient(circle at 80% 30%, rgba(214,40,40,0.18), transparent 45%), radial-gradient(circle at 15% 20%, rgba(95,175,69,0.28), transparent 50%), linear-gradient(145deg, #fffdf8 0%, #fff1d8 50%, #e8f5df 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 72,
            color: "#5faf45",
            fontStyle: "italic",
            fontWeight: 400,
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 12,
            fontSize: 28,
            color: "#2f6a22",
            fontStyle: "italic",
          }}
        >
          {site.productLine}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 1.05,
            color: "#d62828",
            textTransform: "uppercase",
            letterSpacing: "0.04em",
            maxWidth: 920,
          }}
        >
          The New Way to Eat Fruit
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 28,
            color: "#3f4d45",
            maxWidth: 820,
          }}
        >
          Fruit-based creamless frozen dessert for schools and families.
        </div>
      </div>
    ),
    { ...size },
  );
}

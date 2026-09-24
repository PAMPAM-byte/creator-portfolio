import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FBFCFd",
          color: "#16181C",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 6 }}>
          {site.shortName}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 68, lineHeight: 1.08 }}>{site.name}</div>
          <div style={{ fontSize: 28, color: "#5C6570", marginTop: 18 }}>
            {site.role}
          </div>
        </div>
        <div style={{ display: "flex", color: "#5C6570", fontSize: 22 }}>
          {site.location}
        </div>
      </div>
    ),
    { ...size },
  );
}

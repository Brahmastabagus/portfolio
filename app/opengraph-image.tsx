import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Brahmasta Bagus Aryandra — Frontend Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          backgroundColor: "#09090b",
          backgroundImage:
            "radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.18) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(16, 185, 129, 0.15) 0%, transparent 40%)",
          color: "#fafafa",
          fontFamily: "system-ui, -apple-system, sans-serif",
          border: "1px solid #27272a",
        }}
      >
        {/* Top Status Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "8px 16px",
              borderRadius: "9999px",
              backgroundColor: "rgba(39, 39, 42, 0.6)",
              border: "1px solid rgba(63, 63, 70, 0.8)",
              fontSize: "18px",
              color: "#a1a1aa",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "9999px",
                backgroundColor: "#10b981",
              }}
            />
            <span>Available for opportunities</span>
          </div>

          <div
            style={{
              fontSize: "18px",
              color: "#71717a",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            Portfolio & Engineering Showcase
          </div>
        </div>

        {/* Center Main Identity */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <h1
            style={{
              fontSize: "56px",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#ffffff",
              margin: 0,
            }}
          >
            Brahmasta Bagus Aryandra
          </h1>
          <p
            style={{
              fontSize: "28px",
              fontWeight: 500,
              color: "#60a5fa",
              margin: 0,
            }}
          >
            Frontend Developer{" "}
            <span style={{ color: "#a1a1aa", fontWeight: 400 }}>
              at Brofesional by Youth Educational Centre
            </span>
          </p>
          <p
            style={{
              fontSize: "20px",
              lineHeight: 1.5,
              color: "#a1a1aa",
              maxWidth: "900px",
              margin: 0,
            }}
          >
            Specializing in scalable React & TypeScript web applications, real-time SSE AI interfaces, and deep API performance optimization.
          </p>
        </div>

        {/* Bottom Tech Pills & Badges */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #27272a",
            paddingTop: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "10px",
            }}
          >
            {["React", "TypeScript", "Next.js", "Redux Toolkit", "Tailwind CSS", "SSE"].map(
              (tech) => (
                <div
                  key={tech}
                  style={{
                    padding: "6px 14px",
                    borderRadius: "8px",
                    border: "1px solid #3f3f46",
                    backgroundColor: "rgba(24, 24, 27, 0.8)",
                    fontSize: "16px",
                    color: "#e4e4e7",
                  }}
                >
                  {tech}
                </div>
              )
            )}
          </div>

          <div
            style={{
              fontSize: "18px",
              color: "#3b82f6",
              fontWeight: 600,
            }}
          >
            brahmastabagus.github.io
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

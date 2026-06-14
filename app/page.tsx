export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
        background: "radial-gradient(ellipse at top, #faf6f0 0%, #efe7db 100%)",
        color: "#2a2521",
        fontFamily: "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <p style={{ letterSpacing: "0.35em", textTransform: "uppercase", fontSize: "0.8rem", color: "#9a8c78", marginBottom: "1rem" }}>
        Wohnatelier
      </p>

      <h1 style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "clamp(2.5rem, 8vw, 4.5rem)", fontWeight: 500, margin: 0, lineHeight: 1.1 }}>
        Adakli
      </h1>

      <p style={{ fontSize: "clamp(1rem, 3vw, 1.25rem)", color: "#5c5349", maxWidth: "32rem", marginTop: "1.25rem", lineHeight: 1.6 }}>
        Vorhänge, Schienen und maßgeschneiderte Raumtextilien für Ihr Zuhause.
      </p>

      <div style={{ marginTop: "2.5rem", padding: "0.5rem 1.25rem", border: "1px solid #d8cbb8", borderRadius: "999px", fontSize: "0.85rem", color: "#7a6f60", background: "rgba(255,255,255,0.5)" }}>
        Website im Aufbau
      </div>

      <a href="mailto:wohnatelier@adakli.dee" style={{ marginTop: "2rem", color: "#2a2521", textDecoration: "none", borderBottom: "1px solid #2a2521", paddingBottom: "2px", fontSize: "0.95rem" }}>
        info@adakli.de
      </a>
    </main>
  );
}
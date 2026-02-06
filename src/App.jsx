import React from "react";

// Se você quiser usar a logo depois:
// 1) crie a pasta src/assets
// 2) envie a imagem como src/assets/wind-logo.png
// 3) descomente a linha abaixo
// import windLogo from "./assets/wind-logo.png";

export default function App() {
  const whatsappNumber = "5577913948878";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Olá! Estou participando da promoção e quero enviar meu print da avaliação!"
  )}`;
  const googleReviewLink = "https://share.google/X9yiMfB0S9Anvod6w";
  const orcamentoLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Olá! Quero um orçamento para uniformes!"
  )}`;

  const styles = {
    page: { fontFamily: "Arial, sans-serif", background: "#0b0b0b", color: "#fff", minHeight: "100vh" },
    container: { maxWidth: 980, margin: "0 auto", padding: "0 16px" },
    header: { background: "#121212", borderBottom: "1px solid #222", padding: "16px 0" },
    logoWrap: { display: "flex", justifyContent: "center", alignItems: "center", gap: 12 },
    logoText: { fontWeight: 800, letterSpacing: 0.5 },
    card: { background: "#121212", border: "1px solid #222", borderRadius: 14, padding: 18 },
    h1: { fontSize: 28, margin: 0 },
    p: { color: "#cfcfcf", lineHeight: 1.5 },
    btnRow: { display: "flex", gap: 12, flexWrap: "wrap", marginTop: 12 },
    btn: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      background: "#25D366",
      color: "#0b0b0b",
      padding: "12px 18px",
      borderRadius: 999,
      fontWeight: 800,
      textDecoration: "none",
    },
    btn2: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      background: "#ffffff",
      color: "#0b0b0b",
      padding: "12px 18px",
      borderRadius: 999,
      fontWeight: 800,
      textDecoration: "none",
    },
    section: { padding: "22px 0" },
    footer: { borderTop: "1px solid #222", padding: "16px 0", color: "#9a9a9a", fontSize: 13 },
    grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 },
    li: { color: "#cfcfcf", marginBottom: 6 },
  };

  return (
    <div style={styles.page}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.container}>
          <div style={styles.logoWrap}>
            {/* Se enviar a logo, use isso:
              <img src={windLogo} alt="Wind Uniformes" style={{ height: 44 }} />
            */}
            <div style={styles.logoText}>WIND UNIFORMES</div>
          </div>
        </div>
      </header>

      <main>
        {/* “PromoHero” (substitui o componente que você não tem) */}
        <section style={styles.section}>
          <div style={styles.container}>
            <div style={styles.card}>
              <h1 style={styles.h1}>Promoção Wind Uniformes</h1>
              <p style={styles.p}>
                Avalie a gente no Google, mande o print no WhatsApp e participe! ✨
              </p>
<div style={styles.btnRow}>
  <a
    href={googleReviewLink}
    target="_blank"
    rel="noopener noreferrer"
    style={styles.btn2}
  >
    Abrir avaliação no Google
  </a>

  <a
    href={whatsappLink}
    target="_blank"
    rel="noopener noreferrer"
    style={styles.btn}
  >
    Enviar print no WhatsApp
  </a>
</div>
      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.container}>
          © 2025 Wind Uniformes. Quem conhece, confia!
        </div>
      </footer>
    </div>
  );
}

import React from "react";

const certifications = [
  {
    name: "IBM Data Analyst Professional Certificate",
    issuer: "IBM",
    date: "May 2025",
    url: "https://www.coursera.org/account/accomplishments/professional-cert/6UWJRYGR8E3P"
  },
  {
    name: "Google AI Essentials",
    issuer: "Google",
    date: "May 2025",
    url: "https://www.coursera.org/account/accomplishments/specialization/0WBXQW3OR2V2"
  },
  {
    name: "Programming with Python: Hands-On Introduction for Beginners",
    issuer: "Udemy",
    date: "June 2020",
    url: "https://www.udemy.com/certificate/UC-2722f1ba-a117-488c-8772-8564cd0c3bf5/"
  },
  {
    name: "Project Management Foundations",
    issuer: "LinkedIn Learning",
    date: "June 2025",
    url: "https://www.linkedin.com/learning/certificates/df8de8186f1a473bd8aae2e3f0bc78def81358cc7b4c2f583e345c2ddcc652aa?trk=share_certificate"
  }
];

const badgeColors = [
  "#7c4dff", "#536dfe", "#00bfae", "#ffb300"
];

const Certifications = () => (
  <div style={{
    minHeight: "70vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    background: "linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)",
    animation: "fadeInUp 1.2s cubic-bezier(.23,1.01,.32,1)"
  }}>
    <section
      id="certifications"
      className="section certifications-section glass-card"
      style={{
        width: "100%",
        maxWidth: 900,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "2rem 0",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
        padding: "3rem 1.5rem",
        background: "rgba(255,255,255,0.85)",
        boxShadow: "0 8px 32px 0 rgba(31,38,135,0.10)",
        borderRadius: 32
      }}
    >
      <h2 className="section-title" tabIndex={0}>
        <span role="img" aria-label="cert">📜</span> Certifications
      </h2>
      <div style={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "2rem",
        margin: "0 auto"
      }}>
        {certifications.map((cert, i) => (
          <div
            key={cert.name}
            className="card"
            style={{
              display: "flex",
              alignItems: "center",
              background: "linear-gradient(120deg, #f3e7fa 0%, #e3f2fd 100%)",
              borderRadius: 20,
              boxShadow: "0 4px 24px rgba(124,77,255,0.10)",
              padding: "1.5rem 1.2rem 1.5rem 1.5rem",
              borderLeft: `6px solid ${badgeColors[i % badgeColors.length]}`,
              transition: "box-shadow 0.2s, transform 0.2s",
              gap: 20,
              textAlign: "left",
              position: "relative",
              zIndex: 1,
              cursor: cert.url ? "pointer" : "default",
              animation: `fadeInUp 0.8s ${0.2 + i * 0.12}s both`
            }}
            onClick={() => cert.url && window.open(cert.url, "_blank")}
            onMouseOver={e => {
              e.currentTarget.style.boxShadow = `0 8px 32px ${badgeColors[i % badgeColors.length]}33`;
              e.currentTarget.style.transform = "translateY(-4px) scale(1.03)";
            }}
            onMouseOut={e => {
              e.currentTarget.style.boxShadow = "0 4px 24px rgba(124,77,255,0.10)";
              e.currentTarget.style.transform = "none";
            }}
          >
            <div style={{
              minWidth: 54,
              minHeight: 54,
              background: badgeColors[i % badgeColors.length],
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              color: "#fff",
              boxShadow: `0 2px 12px ${badgeColors[i % badgeColors.length]}55`,
              position: "absolute",
              left: -27,
              top: "50%",
              transform: "translateY(-50%)"
            }}>
              <span role="img" aria-label="certificate">🎓</span>
            </div>
            <div style={{ flex: 1, marginLeft: 40 }}>
              <div style={{ fontWeight: 700, fontSize: "1.1rem", color: "#222" }}>{cert.name}</div>
              <div style={{ color: badgeColors[i % badgeColors.length], fontWeight: 600, fontSize: "1rem", margin: "0.2rem 0" }}>{cert.issuer}</div>
              <div style={{ color: "#888", fontSize: "0.98rem" }}>{cert.date}</div>
            </div>
            {cert.url && (
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginLeft: 18,
                  background: badgeColors[i % badgeColors.length],
                  color: "#fff",
                  padding: "0.5rem 1.2rem",
                  borderRadius: 24,
                  fontWeight: 600,
                  fontSize: "0.98rem",
                  textDecoration: "none",
                  boxShadow: `0 2px 8px ${badgeColors[i % badgeColors.length]}33`,
                  transition: "background 0.2s, transform 0.2s"
                }}
                onClick={e => e.stopPropagation()}
              >
                View Credential
              </a>
            )}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: none; }
        }
      `}</style>
    </section>
  </div>
);

export default Certifications; 
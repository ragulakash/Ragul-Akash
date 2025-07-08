import React from "react";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ragulakash1794/",
    svg: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="8" fill="#fff"/>
        <path d="M27 27h-4.2v-6.2c0-1.5-.5-2.5-1.8-2.5-1 0-1.5.7-1.8 1.4-.1.2-.1.5-.1.8V27h-4.2V14.9h4.2v1.7c.6-.9 1.6-2.1 3.9-2.1 2.8 0 4.8 1.8 4.8 5.5V27zM7.5 10.9c-1.4 0-2.3-.9-2.3-2.1 0-1.2.9-2.1 2.3-2.1s2.3.9 2.3 2.1c0 1.2-.9 2.1-2.3 2.1zm-2.1 16.1h4.2V14.9H5.4V27z" fill="#0A66C2"/>
      </svg>
    )
  },
  {
    name: "GitHub",
    url: "https://github.com/ragulakash",
    svg: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="8" fill="#fff"/>
        <path d="M16 6C10.5 6 6 10.5 6 16c0 4.4 2.9 8.1 6.8 9.4.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.4-1-1-1.3-1-1.3-.8-.6.1-.6.1-.6.9.1 1.4.9 1.4.9.8 1.4 2.1 1 2.6.8.1-.6.3-1 .5-1.2-2.2-.2-4.5-1.1-4.5-4.8 0-1.1.4-2 1-2.7-.1-.2-.4-1.2.1-2.5 0 0 .8-.3 2.7 1 .8-.2 1.7-.3 2.5-.3s1.7.1 2.5.3c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.5.6.7 1 1.6 1 2.7 0 3.7-2.3 4.6-4.5 4.8.3.3.6.8.6 1.7v2.5c0 .3.2.6.7.5C23.1 24.1 26 20.4 26 16c0-5.5-4.5-10-10-10z" fill="#181717"/>
      </svg>
    )
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/ragulakash1794?igsh=Zzd2cndmb3ZkNGx0",
    svg: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="8" fill="#fff"/>
        <rect x="8" y="8" width="16" height="16" rx="5" fill="url(#ig-gradient)"/>
        <circle cx="16" cy="16" r="4.5" fill="#fff"/>
        <circle cx="16" cy="16" r="3.2" fill="#E1306C"/>
        <circle cx="21.2" cy="10.8" r="1.2" fill="#fff"/>
        <defs>
          <linearGradient id="ig-gradient" x1="8" y1="8" x2="24" y2="24" gradientUnits="userSpaceOnUse">
            <stop stopColor="#feda75"/>
            <stop offset="0.5" stopColor="#fa7e1e"/>
            <stop offset="1" stopColor="#d62976"/>
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    name: "Codolio",
    url: "https://codolio.com/profile/ragul1794",
    svg: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="8" fill="#fff"/>
        <g>
          <rect x="10" y="10" width="12" height="12" rx="6" fill="#7c4dff"/>
          <path d="M16 13v6M13 16h6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
        </g>
      </svg>
    )
  }
];

const Contact = () => (
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
      id="contact"
      className="section contact-section glass-card"
      style={{
        width: "100%",
        maxWidth: 700,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "2rem 0",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
        padding: "2.2rem 1.2rem 2rem 1.2rem",
        background: "rgba(255,255,255,0.92)",
        boxShadow: "0 8px 32px 0 rgba(124,77,255,0.12)",
        borderRadius: 24,
        border: "2.5px solid #7c4dff22"
      }}
    >
      <h2 className="section-title" tabIndex={0}>
        Contact
      </h2>
      <p style={{ fontSize: "1.05rem", marginBottom: "1.2rem", maxWidth: 500, marginLeft: "auto", marginRight: "auto", color: "#444" }}>
        Interested in collaborating or have any questions? Reach out!
      </p>
      <form className="contact-form card" style={{ margin: "0 auto", maxWidth: 500, background: "linear-gradient(120deg, #f3e7fa 0%, #e3f2fd 100%)", padding: "1.2rem 1rem", borderRadius: 16, boxShadow: "0 2px 12px rgba(124,77,255,0.10)", border: "none", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
        <input type="text" name="name" required placeholder="Your Name" style={{ width: "100%", borderRadius: 8, border: "1px solid #bdbdbd", padding: "0.6rem 0.9rem", fontSize: "1rem", outline: "none", transition: "border 0.2s" }} />
        <input type="email" name="email" required placeholder="Your Email" style={{ width: "100%", borderRadius: 8, border: "1px solid #bdbdbd", padding: "0.6rem 0.9rem", fontSize: "1rem", outline: "none", transition: "border 0.2s" }} />
        <textarea name="message" required rows={3} placeholder="Your Message" style={{ width: "100%", borderRadius: 8, border: "1px solid #bdbdbd", padding: "0.6rem 0.9rem", fontSize: "1rem", outline: "none", transition: "border 0.2s", resize: "vertical" }} />
        <button type="submit" className="btn-primary" style={{ width: "100%", fontSize: "1rem", marginTop: 6, letterSpacing: 1, boxShadow: "0 2px 12px #7c4dff22", background: "linear-gradient(90deg, #7c4dff 0%, #536dfe 100%)", border: "none", borderRadius: 20, padding: "0.7rem 0", fontWeight: 700, transition: "background 0.2s, transform 0.2s" }}>
          Send Message
        </button>
      </form>
      <div style={{ marginTop: "1.5rem" }}>
        <p style={{ marginBottom: 6, fontSize: "0.98rem", color: "#666" }}>Or connect with me:</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "2rem", fontSize: "1.1rem" }}>
          {socialLinks.map(link => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#7c4dff",
                textDecoration: "none",
                fontWeight: 600,
                transition: "color 0.2s, transform 0.2s",
                display: "flex",
                alignItems: "center"
              }}
              title={link.name}
              onMouseOver={e => { e.currentTarget.style.transform = "scale(1.15)"; }}
              onMouseOut={e => { e.currentTarget.style.transform = "none"; }}
            >
              {link.svg}
            </a>
          ))}
        </div>
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

export default Contact; 
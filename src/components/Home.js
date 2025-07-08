import React, { useRef } from "react";

const Home = () => {
  const nameRef = useRef(null);

  return (
    <div style={{
      minHeight: "80vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      animation: "fadeInUp 1.2s cubic-bezier(.23,1.01,.32,1)",
      marginTop: "6.5rem"
    }}>
      <section
        id="home"
        className="section home-section glass-card"
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
        }}
      >
        <h1 className="section-title" tabIndex={0}>
          Welcome!
        </h1>
        <h2
          ref={nameRef}
          style={{
            fontSize: "2.4rem",
            fontWeight: 900,
            margin: "1rem 0 0.5rem 0",
            color: "#5f27cd",
            textShadow: "0 2px 12px rgba(95,39,205,0.10)",
            letterSpacing: 1.5,
            textAlign: "center",
            transition: "transform 0.2s, color 0.2s",
            cursor: "pointer",
            display: "inline-block",
          }}
          onMouseOver={() => {
            if (nameRef.current) {
              nameRef.current.style.transform = "scale(1.09)";
              nameRef.current.style.color = "#7c4dff";
            }
          }}
          onMouseOut={() => {
            if (nameRef.current) {
              nameRef.current.style.transform = "none";
              nameRef.current.style.color = "#5f27cd";
            }
          }}
        >
          I'm Ragul Akash
        </h2>
        <p style={{ fontSize: "1.25rem", color: "#444", marginBottom: "2rem", maxWidth: 500, textAlign: "center", lineHeight: 1.7 }}>
          Motivated tech enthusiast skilled in <b>Python</b>, <b>Data Analysis</b>, and <b>Machine Learning</b>. Passionate about building real-world projects, exploring <b>Full Stack Development</b>, and actively practicing <b>DSA</b>.
        </p>
        <a
          href="#contact"
          className="btn-primary"
        >
          Contact Me
        </a>
        <style>{`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: none; }
          }
        `}</style>
      </section>
    </div>
  );
};

export default Home; 
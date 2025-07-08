import React from "react";

const About = () => (
  <div style={{
    minHeight: "70vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    animation: "fadeInUp 1.2s cubic-bezier(.23,1.01,.32,1)"
  }}>
    <section
      id="about"
      className="section about-section glass-card"
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
      <h2 className="section-title" tabIndex={0}>
        About Me
      </h2>
      <p style={{ fontSize: "1.18rem", lineHeight: 1.7, color: "#333", maxWidth: 600, margin: "0 auto" }}>
        I'm Ragul Akash, a final-year B.Tech graduate from SRM University with strong expertise in <b>Python</b>, <b>Data Analysis</b>, and <b>Machine Learning</b>. I'm passionate about solving real-world problems using <b>AI</b> and have hands-on experience building web apps and data-driven projects. I'm also exploring <b>Full Stack Development</b> and actively sharpening my skills in <b>DSA</b> through platforms like LeetCode and GeeksforGeeks.
      </p>
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: none; }
        }
      `}</style>
    </section>
  </div>
);

export default About; 
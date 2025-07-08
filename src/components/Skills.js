import React, { useState } from "react";

const cardColors = [
  "linear-gradient(135deg, #f3e7fa 0%, #e1bee7 100%)",
  "linear-gradient(135deg, #e3f0fd 0%, #b3e5fc 100%)",
  "linear-gradient(135deg, #fce4ec 0%, #f8bbd0 100%)",
  "linear-gradient(135deg, #e8f5e9 0%, #b2dfdb 100%)"
];

const skillData = [
  {
    title: "Programming Languages",
    skills: [
      "Python",
      "C",
      "C++",
      "JavaScript",
      "SQL",
      "HTML",
      "CSS"
    ]
  },
  {
    title: "Data Science & Machine Learning",
    skills: [
      "Data Analysis",
      "Pandas, NumPy",
      "Matplotlib, Seaborn",
      "Scikit-learn",
      "TensorFlow",
      "ML model deployment"
    ]
  },
  {
    title: "Web Development",
    skills: [
      "Flask",
      "HTML & CSS",
      "JavaScript",
      "React.js",
      "REST APIs",
      "Web app deployment"
    ]
  },
  {
    title: "Database & Backend",
    skills: [
      "PostgreSQL",
      "SQLite",
      "SQL queries",
      "Backend integration with Python"
    ]
  }
];

const Skills = () => {
  const [pulseIndex, setPulseIndex] = useState(-1);

  const handleCardClick = idx => {
    setPulseIndex(idx);
    setTimeout(() => setPulseIndex(-1), 350);
  };

  return (
    <div style={{
      minHeight: "70vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      position: "relative",
      overflow: "hidden",
      animation: "fadeInUp 1.2s cubic-bezier(.23,1.01,.32,1)"
    }}>
      {/* Animated background blob */}
      <div style={{
        position: "absolute",
        top: "-120px",
        left: "-120px",
        width: 400,
        height: 400,
        background: "radial-gradient(circle at 60% 40%, #b388ff 0%, #8ec5fc 100%)",
        opacity: 0.18,
        filter: "blur(40px)",
        zIndex: 0,
        borderRadius: "50%"
      }} />
      <section
        id="skills"
        className="section skills-section glass-card"
        style={{
          width: "100%",
          maxWidth: 900,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "2rem 0",
          position: "relative",
          overflow: "visible",
          textAlign: "center",
          padding: "3rem 1.5rem",
          zIndex: 1
        }}
      >
        <h2 className="section-title" tabIndex={0}>
          Skills
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "2rem",
          width: "100%",
          marginTop: "2rem"
        }}>
          {skillData.map((cat, i) => (
            <div
              className={`card skill-card${pulseIndex === i ? " pulse" : ""}`}
              key={cat.title}
              style={{
                background: cardColors[i % cardColors.length],
                minHeight: 220,
                boxShadow: "0 4px 24px rgba(124,77,255,0.10)",
                border: "none",
                transition: "transform 0.25s, box-shadow 0.25s",
                zIndex: 1,
                animation: `fadeInUp 0.8s ${0.2 + i * 0.15}s both`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer"
              }}
              onClick={() => handleCardClick(i)}
              tabIndex={0}
            >
              <h3 style={{ fontWeight: 700, fontSize: "1.2rem", marginBottom: 12 }}>{cat.title}</h3>
              <ul style={{ textAlign: "center", paddingLeft: 0, listStyle: "none", margin: 0 }}>
                {cat.skills.map((skill, j) => (
                  <li key={skill} className="skill-item" style={{
                    marginBottom: 8,
                    fontWeight: 500,
                    color: "#333",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    transition: "background 0.18s, color 0.18s, box-shadow 0.18s",
                    borderRadius: 6,
                    padding: "2px 8px"
                  }} tabIndex={0}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <style>{`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: none; }
          }
          .skill-card:hover {
            transform: translateY(-8px) scale(1.045);
            box-shadow: 0 8px 32px rgba(124,77,255,0.18), 0 0 0 2px #b388ff33;
          }
          .skill-card.pulse {
            animation: pulseCard 0.35s;
          }
          @keyframes pulseCard {
            0% { transform: scale(1); }
            40% { transform: scale(1.08); box-shadow: 0 0 0 8px #b388ff22; }
            100% { transform: scale(1); }
          }
          .skill-card:focus {
            outline: 2px solid #7c4dff;
            outline-offset: 2px;
          }
          .skill-item:hover, .skill-item:focus {
            background: linear-gradient(90deg, #ede7f6 0%, #b388ff 100%);
            color: #7c4dff;
            box-shadow: 0 2px 12px #7c4dff33;
          }
        `}</style>
      </section>
    </div>
  );
};

export default Skills; 